# Prompt Ladder: User Registration Endpoint

This document demonstrates the power of iterative prompt engineering by taking a weak baseline prompt ("Write a user registration API endpoint") and improving it across five versions, adding one specific layer at a time.

---

## Baseline
**Prompt:**
> Write a user registration API endpoint.

**Representative Output Excerpt:**
```python
from flask import Flask, request, jsonify
app = Flask(__name__)
users = []

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    users.append(data)
    return jsonify({"message": "User registered!"}), 201
```

**Notes:**
* **What changed in the prompt:** Nothing, this is the raw baseline.
* **What improved in the output:** N/A.
* **What still failed:** The AI guessed Python/Flask, which isn't the stack I'm using (Node.js). It also saved passwords in plain text and did no validation.
* **What to try next:** Add context about the specific technology stack.

---

## Version 1: Adding Context (Tech Stack)
**Prompt:**
> Write a user registration API endpoint in Node.js using Express.

**Representative Output Excerpt:**
```javascript
const express = require('express');
const app = express();
app.use(express.json());
const users = [];

app.post('/register', (req, res) => {
  const { email, password } = req.body;
  users.push({ email, password });
  res.send('User created successfully');
});
```

**Notes:**
* **What changed in the prompt:** Added real context (Node.js and Express).
* **What improved in the output:** The AI correctly used JavaScript and Express instead of Python. The code is now actually compatible with my project.
* **What still failed:** It's saving passwords in plain text, which is a massive security flaw.
* **What to try next:** Add a constraint to force secure password handling.

---

## Version 2: Adding Constraints
**Prompt:**
> Write a user registration API endpoint in Node.js using Express. It must hash the user's password using `bcrypt` before saving to a mock database.

**Representative Output Excerpt:**
```javascript
const bcrypt = require('bcrypt');
// ... setup ...
app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ email, password: hashedPassword });
  res.send('User created securely');
});
```

**Notes:**
* **What changed in the prompt:** Added a constraint (`bcrypt` for password hashing).
* **What improved in the output:** Passwords are now hashed asynchronously before being stored. The AI correctly imported bcrypt and used standard salt rounds.
* **What still failed:** The response format is just a generic string (`res.send`). A real frontend needs structured JSON and proper HTTP status codes.
* **What to try next:** Specify an exact output format / quality criteria for the response.

---

## Version 3: Adding Output Format & Quality Criteria
**Prompt:**
> Write a user registration API endpoint in Node.js using Express. It must hash the user's password using `bcrypt` before saving to a mock database. Ensure the endpoint returns standard REST JSON responses (e.g., `{ status: 'success', data: ... }`) and proper HTTP status codes (201 for created, 400 for bad request).

**Representative Output Excerpt:**
```javascript
app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ status: 'error', message: 'Missing fields' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { id: Date.now(), email, password: hashedPassword };
  users.push(newUser);
  
  res.status(201).json({ 
    status: 'success', 
    data: { user: { id: newUser.id, email: newUser.email } } 
  });
});
```

**Notes:**
* **What changed in the prompt:** Added output format and quality criteria (REST JSON structure and specific status codes).
* **What improved in the output:** The endpoint now returns professional, parseable JSON and even stripped the password out of the response payload (a nice bonus of asking for standard REST data). It also added a 400 check for missing fields.
* **What still failed:** You can register the same email address 100 times, causing duplicate accounts.
* **What to try next:** Add a specific edge case requirement.

---

## Version 4: Adding Edge Cases
**Prompt:**
> Write a user registration API endpoint in Node.js using Express. It must hash the user's password using `bcrypt` before saving. Ensure the endpoint returns standard REST JSON responses (e.g., `{ status: 'success', data: ... }`) and proper HTTP status codes (201 for created, 400 for bad request). Before saving, check if the email already exists in the mock database and return a 409 Conflict if it does.

**Representative Output Excerpt:**
```javascript
app.post('/register', async (req, res) => {
  // ... missing fields check ...
  const existingUser = users.find(u => u.email === req.body.email);
  if (existingUser) {
    return res.status(409).json({ status: 'error', message: 'Email already exists' });
  }
  // ... hash and save ...
```

**Notes:**
* **What changed in the prompt:** Added edge case instructions (409 Conflict for duplicate emails).
* **What improved in the output:** The AI added the logic to check the mock database before hashing, returning the exact correct HTTP status code for a conflict.
* **What still failed:** To test this, I have to manually write my own Postman requests or cURL commands, which slows me down.
* **What to try next:** Add verification requirements to make testing effortless.

---

## Version 5: Adding Verification Requirements
**Prompt:**
> Write a user registration API endpoint in Node.js using Express. It must hash the user's password using `bcrypt` before saving. Ensure the endpoint returns standard REST JSON responses (e.g., `{ status: 'success', data: ... }`) and proper HTTP status codes (201, 400). Before saving, check if the email already exists in the mock database and return a 409 Conflict if it does. Finally, provide sample `cURL` commands to test both the successful registration and the duplicate email error.

**Representative Output Excerpt:**
```javascript
// [Full robust express code as built in V4]
```
*AI output continues:*
```bash
# Test 1: Successful Registration
curl -X POST http://localhost:3000/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com", "password":"password123"}'

# Test 2: Duplicate Email (Run the same command again to see the 409 Conflict)
curl -X POST http://localhost:3000/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com", "password":"password123"}'
```

**Notes:**
* **What changed in the prompt:** Added verification requirements (sample cURL commands).
* **What improved in the output:** I immediately got copy-pasteable terminal commands to test the code. I can now verify the endpoint works in 5 seconds without writing my own requests.
* **What still failed:** Nothing. The output is now robust, secure, correctly formatted, handles edge cases, and is instantly testable.
* **What to try next:** Save this structure as a reusable template.

---

## Final Reusable Prompt
If you need to generate any backend endpoint, fill in the brackets of this engineered prompt template:

> Write a **[Action/Endpoint Name]** in **[Tech Stack]**. 
> 
> **Constraints:**
> - You must use **[Specific Libraries/Tools, e.g., bcrypt for hashing]**.
> - **[Any other security or logic constraints]**.
> 
> **Format & Quality:**
> - Return standard REST JSON responses (e.g., `{ status: 'success', data: ... }`).
> - Use proper HTTP status codes (**[e.g., 201 for success, 400 for bad request]**).
> 
> **Edge Cases to Handle:**
> - **[List specific edge cases, e.g., Check if the email already exists and return 409 Conflict]**.
> 
> **Verification:**
> - Provide sample `cURL` commands so I can immediately test both the success path and the edge cases.
