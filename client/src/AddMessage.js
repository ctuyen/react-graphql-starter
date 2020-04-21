import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const ADD_MESSAGES = gql`
  mutation AddMessage($author: String!, $body: String!, $title: String!) {
    addMessage(author: $author, body: $body, title: $title) {
      author
      body
      title
    }
  }
`;

const GET_MESSAGES = gql`
  {
    messages {
      body
    }
  }
`;

function AddMessage() {
  const defaultMessage = {
    author: '',
    title: '',
    body: '',
  };

  const [message, setMessage] = React.useState(defaultMessage);

  const fields = Object.keys(message);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessage({ ...message, [name]: value });
  };

  const resetMessage = () => {
    setMessage(defaultMessage);
  };

  return (
    <div>
      {fields.map((field) => (
        <input
          class="shadow appearance-none border rounded m-2 w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          key={field}
          placeholder={field}
          name={field}
          onChange={handleChange}
          value={message[field]}
        ></input>
      ))}
      <Mutation mutation={ADD_MESSAGES} variables={message} refetchQueries={() => [{ query: GET_MESSAGES }]}>
        {(addMessage) => (
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
              addMessage();
              resetMessage();
            }}
          >
            Add message
          </button>
        )}
      </Mutation>
    </div>
  );
}

export default AddMessage;
