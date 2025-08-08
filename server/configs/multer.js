import multer from "multer";

// Set up storage (you can leave empty if not saving to disk)
const storage = multer.diskStorage({});

// Correctly pass the storage object
export const upload = multer({ storage });
