export default defineEventHandler((event) => {
  return {
    message: getQuery(event),
  };
});
