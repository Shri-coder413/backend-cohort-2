# 📘 Backend Cohort 2.0 – Learning Journey (Sheryians)

This repository documents my backend learning journey from **Cohort 2.0 (Backend)** by **Sheryians Coding School**, mentored by **Ankur Prajapati**.
The focus is on building strong fundamentals of backend development using **Node.js** and **Express.js** through hands-on practice.

---

## 🧑‍🏫 Mentor

* **Ankur Prajapati**
  Backend Mentor, Sheryians Coding School

---

## 🛠 Tech Stack

* **Node.js**
* **Express.js**
* **Postman** (API testing)
* **npm / npx**
* JavaScript (Backend)

---

## 📂 Project Structure

```
backend-cohort-2/
│
├── DAY-1/        → Node & npm basics
├── DAY-2/        → Express setup & server creation
├── DAY-3/        → REST APIs (GET, POST)
├── DAY-4/        → More Express practice
├── DAY-5/
│   ├── src/
│   │   └── app.js  → Notes API logic
│   ├── server.js
│   └── package.json
│
└── .gitignore
```

---

## 🚀 What I Learned

### 🔹 Express Server

* Creating a server using `express()`
* Using middleware:

```js
app.use(express.json())
```

---

### 🔹 REST API Concepts

Built a **Notes API** using in-memory data.

#### ➕ Create Note (POST)

```http
POST /notes
```

* Used `req.body`
* Stored data in an array
* Returned `201 Created`

---

#### 📥 Get Notes (GET)

```http
GET /notes
```

* Sent stored notes using `res.json()`
* Returned `200 OK`

---

#### ❌ Delete Note (DELETE)

```http
DELETE /notes/:idx
```

* Used `req.params`
* Deleted note by index

---

#### ✏️ Update Note (PATCH)

```http
PATCH /notes/:idx
```

* Updated `title` and `description`
* Used `req.body` and `req.params`
* Returned `200 OK`

---

## 📊 HTTP Status Codes Used

| Code | Meaning          |
| ---- | ---------------- |
| 200  | Success          |
| 201  | Resource Created |
| 204  | No Content       |

---

## 🧪 API Testing

* Tested all APIs using **Postman**
* Sent JSON data and verified responses

---

## 📦 Package Management

Installed dependencies using:

```bash
npm install express
```

Used **nodemon** for auto-restart:

```bash
npx nodemon app.js
```

---

## 🧠 Key Concepts Practiced

* `req.body`
* `req.params`
* `res.send()`
* `res.json()`
* `res.status()`
* Express routing
* REST API fundamentals

---

## 🎯 Goal

To progress towards:

* MongoDB integration
* Authentication & Authorization
* MVC architecture
* Production-ready backend projects

---

## 🙌 Acknowledgement

Thanks to **Sheryians Coding School** and mentor **Ankur Prajapati** for guidance and structured backend learning.

---
