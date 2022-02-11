import app from "./api/app.js";

//Set PORT from env
const PORT = process.env.PORT || 9000;

//Listen to Port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
