// Mock data
const mockUsers = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
  ];
  
  export const fetchUsers = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ data: mockUsers }), 1000);
    });
  };
  
  export const createUser = (user) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ data: { ...user, id: Date.now() } }), 1000);
    });
  };
  