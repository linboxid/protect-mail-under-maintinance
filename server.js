import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 25000;

// MUST be a directory
const maintenanceDir = path.resolve("dist");
const indexFile = path.join(maintenanceDir, "index.html");

app.use(express.static(maintenanceDir));

// Catch-all middleware (no route pattern needed)
app.use((_, res) => {
  res.sendFile(indexFile);
});

app.listen(PORT, () => {
  console.log(`🚧 Maintenance app running on port ${PORT}`);
});
