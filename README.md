# Employee Management System
A full-stack web application for managing employees with complete CRUD operations built using FastAPI (backend) and React (frontend).

## 🚀 Project Overview
The Employee Management System provides a comprehensive solution for managing employee data:
- Add new employees
- View all employees in a tabule
- Update existing employee information
- Delete employees
- Responsive design for mobile and desktop
- Real-time data synchronization

## 🛠 Tech Stack

### Backend
- **Python** - Programming language
- **FastAPI** - Modern, fast web framework for building APIs
- **SQLAlchemy ORM** - Python SQL toolkit and ORM
- **PostgreSQL** - Database
- **Pydantic** - Data validation using Python type annotations
- **Uvicorn** - ASGI server

### Frontend
- **ReactJS** - JavaScript library for building user interfaces
- **Axios** - Promise-based HTTP client
- **React Router** - Declarative routing for React
- **CSS3** - Styling with responsive design

## 📁 Project Structure

```
├── employee-backend/
│   ├── app/
│   │   ├── main.py              # FastAPI application entry point
│   │   ├── database.py          # Database configuration
│   │   ├── models.py            # SQLAlchemy models
│   │   ├── schemas.py           # Pydantic schemas
│   │   ├── crud.py              # CRUD operations
│   │   └── routers/
│   │       └── employee.py      # Employee router
│   ├── requirements.txt         # Python dependencies
│   └── runtime.txt              # Python version

├── employee-frontend/
│   ├── package.json             # Node.js dependencies
│   ├── public/
│   │   └── index.html           # HTML template
│   └── src/
│       ├── App.js               # Main React component
│       ├── index.js             # React entry point
│       ├── api.js               # API configuration
│       ├── styles.css           # Global styles
│       └── components/
│           ├── EmployeeList.js  # Employee list component
│           ├── AddEmployee.js   # Add employee form
│           └── EditEmployee.js  # Edit employee form
└── README.md                    # This file
```

## 🚀 Getting Started

### Prerequisites

- Python 3.8 or higher
- Node.js 14 or higher
- npm or yarn

### How to Run Backend

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Create virtual environment:**
   ```bash
   python -m venv venv
   ```

3. **Activate virtual environment:**
   
   **Windows:**
   ```bash
   venv\Scripts\activate
   ```
   
   **MacOS/Linux:**
   ```bash
   source venv/bin/activate
   ```

4. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

5. **Run the FastAPI server:**
   ```bash
   uvicorn app.main:app --host 0.0.0.0 --port 8000
   ```

6. **Access API documentation:**
   - Swagger UI: http://localhost:8000/docs
   - ReDoc: http://localhost:8000/docs

### How to Run Frontend

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the React development server:**
   ```bash
   npm start
   ```

4. **Access the application:**
   - Open http://localhost:3000 in your browser

## 📡 API Endpoints

### Employee Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/employees/` | Create a new employee |
| GET | `/employees/` | Get all employees (with pagination) |
| GET | `/employees/{id}` | Get a specific employee by ID |
| PUT | `/employees/{id}` | Update an existing employee |
| DELETE | `/employees/{id}` | Delete an employee |

### Sample Request Bodies

**Create Employee:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "department": "Engineering",
  "salary": 50000
}
```

**Update Employee:**
```json
{
  "name": "John Smith",
  "department": "Management",
  "salary": 75000
}
```

## 🚀 Deployment

### Backend Deployment on Render

1. **Push backend folder to GitHub**
2. **Go to https://render.com**
3. **Create new Web Service**
4. **Connect GitHub repository**
5. **Configure deployment settings:**
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
   - **Runtime:** Python 3

### Frontend Deployment on Render

1. **Push frontend folder to GitHub**
2. **Go to https://render.com**
3. **Create new Static Site**
4. **Connect GitHub repository**
4. **Configure build settings:**
   - **Build Command:** `npm install && chmod +x node_modules/.bin/react-scripts && npm run build`
   - **Output Directory:** `build`

### Environment Variables

For production deployment, you may need to set the following environment variables:

**Backend:**
- `DATABASE_URL` - Database connection string (for production databases)
- `REACT_APP_API_URL` - Frontend API URL (if different from default)

**Frontend:**
- `REACT_APP_API_URL` - Backend API URL (e.g., `https://employee-backend-cbr3.onrender.com`)

## 🧪 Testing

### Backend Testing

Run the FastAPI server and test endpoints using:
- Swagger UI: https://employee-backend-cbr3.onrender.com/docs
- Postman/Insomnia
- curl commands

**Sample curl commands:**
```bash
# Create employee
curl -X POST "https://employee-backend-cbr3.onrender.com/employees/" \
-H "Content-Type: application/json" \
-d '{"name":"John Doe","email":"john@example.com","department":"Engineering","salary":50000}'

# Get all employees
curl -X GET "https://employee-backend-cbr3.onrender.com/employees/"

# Update employee
curl -X PUT "https://employee-backend-cbr3.onrender.com/employees/1" \
-H "Content-Type: application/json" \
-d '{"salary":60000}'

# Delete employee
curl -X DELETE "https://employee-backend-cbr3.onrender.com/employees/1"
```

### Frontend Testing

The frontend can be tested by:
1. Running the development server
2. Opening the browser developer tools
3. Testing all CRUD operations through the UI
4. Checking responsive design using browser dev tools

## 🔧 Configuration

### Database Configuration

1. Default: SQLite (employees.db)
2. For production: PostgreSQL
3. Configure DATABASE_URL in backend/app/database.py or via Render environment variables

### CORS Configuration

CORS is configured to allow requests from `http://employee-frontend-3cfa.onrender.com/`. Update the `allow_origins` list in `backend/app/main.py` for different frontend URLs.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request
