const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const mysql = require("mysql2");
app.use(cors());
const fs = require("fs");
const { error } = require("console");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use("/uploads", require("express").static(path.join(__dirname, "uploads")));

// MYSql Prictice

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "basic_crud",
});

con.connect(function (err) {
  if (err) {
    throw err;
  }

  console.log("MYsql is Connected");
});

// Ensure that the 'uploads' folder exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

// Routes
app.post("/addcard", upload.single("img"), async (req, res) => {
  try {
    const sql = `INSERT INTO users (name, role, description, img) VALUES ('${req.body.name}', '${req.body.role}', '${req.body.description}', '${req.file.filename}') `;

    con.query(sql, function (err, resu) {
      if (err) {
        console.log(err);
      }
      console.log("Data Add", resu);
    });

    res.status(200).json({
      message: "Card added successfully!",
      data: { name, role, description, img: req.file.filename },
    });
  } catch (error) {
    console.error("Error adding card:", error);
    res.status(500).json({
      message: "Failed to add card.",
      error: error.message,
    });
  }
});

app.get("/dataapi", async (req, res) => {
  const sql = "SELECT * FROM users";
  con.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database query failed" });
    }
    res.status(200).json(results);
  });
});

app.delete("/deleteuser/:id", async (req, res) => {
  const sql = `DELETE FROM users WHERE id= ${req.params.id} `;
  con.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database query failed" });
    }
    res.status(200).json(results);
  });
});

app.put("/editpage/:id", upload.single("img") , async (req, res) => {
  const sql = `UPDATE users SET   name='${req.body.name}', role='${req.body.role}' , description='${req.body.description}',img='${req.file.filename}' WHERE id='${req.params.id}'`;
  con.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Database query failed" });
    }
    console.log(results);
    res.status(200).json(results);
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000/");
});
