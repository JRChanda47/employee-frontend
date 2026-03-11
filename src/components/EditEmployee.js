import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { employeeAPI } from '../api';

const EditEmployee = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    salary: ''
  });
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  const { id } = useParams();

  // Fetch employee data on component mount
  useEffect(() => {
    fetchEmployee();
  }, [id]);

  const fetchEmployee = async () => {
    try {
      setFetchLoading(true);
      const employee = await employeeAPI.getEmployeeById(id);
      setFormData({
        name: employee.name,
        email: employee.email,
        department: employee.department,
        salary: employee.salary.toString()
      });
      setError('');
    } catch (err) {
      setError('Failed to fetch employee data. Please try again.');
      console.error('Error fetching employee:', err);
    } finally {
      setFetchLoading(false);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'salary' ? parseFloat(value) || '' : value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.department || !formData.salary) {
      setError('Please fill in all fields');
      return;
    }

    if (formData.salary <= 0) {
      setError('Salary must be greater than 0');
      return;
    }

    try {
      setLoading(true);
      setError('');
      
      await employeeAPI.updateEmployee(id, {
        ...formData,
        salary: parseFloat(formData.salary)
      });
      
      alert('Employee updated successfully!');
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to update employee. Please try again.');
      console.error('Error updating employee:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  if (fetchLoading) {
    return <div className="loading">Loading employee data...</div>;
  }

  return (
    <div className="edit-employee">
      <div className="form-container">
        <h2>Edit Employee</h2>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="employee-form">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter employee name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter employee email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="department">Department *</label>
            <input
              type="text"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="Enter department"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="salary">Salary *</label>
            <input
              type="number"
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              placeholder="Enter salary"
              step="0.01"
              min="0"
              required
            />
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Updating...' : 'Update Employee'}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCancel}
              disabled={loading}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
