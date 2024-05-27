import todos from '@/mocks/todo.json';

export async function getAll() {
  return new Promise((resolve) => {
    resolve(todos);
  });
}
