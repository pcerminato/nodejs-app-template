import { createApp } from './app.js';

const { PORT } = process.env;
const app = createApp();

app.listen(PORT, () => {
  console.log(`Listenting on http://localhost:${PORT}`);
});
