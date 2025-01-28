import express from 'express';

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})

app.use(express.json());

// Employee routes
const employees = [
  { id: 1, name: 'Elias', role: 'Sales' },
  { id: 2, name: 'Jackson', role: 'Marketing' },
];

app.get('/employees', (req, res) => {
  res.json(employees);
});

app.get('/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const employee = employees.find((e) => e.id === id);
  if (!employee) {
    res.status(404).json({ message: 'Employee not found' });
  } else {
    res.json(employee);
  }
});

app.post('/employees', (req, res) => {
  const { name, role } = req.body;
  const newEmployee = { id: employees.length + 1, name, role };
  employees.push(newEmployee);
  res.json(newEmployee);
});

app.put('/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const employee = employees.find((e) => e.id === id);
  if (!employee) {
    res.status(404).json({ message: 'Employee not found' });
  } else {
    const { name, role } = req.body;
    employee.name = name;
    employee.role = role;
    res.json(employee);
  }
});

app.patch('/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const employee = employees.find((e) => e.id === id);
  if (!employee) {
    res.status(404).json({ message: 'Employee not found' });
  } else {
    const { name, role } = req.body;
    if (name) employee.name = name;
    if (role) employee.role = role;
    res.json(employee);
  }
});

app.delete('/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = employees.findIndex((e) => e.id === id);
  if (index === -1) {
    res.status(404).json({ message: 'Employee not found' });
  } else {
    employees.splice(index, 1);
    res.json({ message: 'Employee deleted' });
  }
});

// Manager routes
const managers = [
  { id: 1, name: 'Elias', role: 'CEO' },
  { id: 2, name: 'Jackson', role: 'CTO' },
];

app.get('/managers', (req, res) => {
  res.json(managers);
});

app.get('/managers/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const manager = managers.find((m) => m.id === id);
  if (!manager) {
    res.status(404).json({ message: 'Manager not found' });
  } else {
    res.json(manager);
  }
});

app.post('/managers', (req, res) => {
  const { name, role } = req.body;
  const newManager = { id: managers.length + 1, name, role };
  managers.push(newManager);
  res.json(newManager);
});

app.put('/managers/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const manager = managers.find((m) => m.id === id);
  if (!manager) {
    res.status(404).json({ message: 'Manager not found' });
  } else {
    const { name, role } = req.body;
    manager.name = name;
    manager.role = role;
    res.json(manager);
  }
});

app.patch('/managers/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const manager = managers.find((m) => m.id === id);
  if (!manager) {
    res.status(404).json({ message: 'Manager not found' });
  } else {
    const { name, role } = req.body;
    if (name) manager.name = name;
    if (role) manager.role = role;
    res.json(manager);
  }
});

app.delete('/managers/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = managers.findIndex((m) => m.id === id);  
  if (index === -1) {
    res.status(404).json({ message: 'Manager not found' });
  } else {
    managers.splice(index, 1);
    res.json({ message: 'Manager deleted' });
  }
});
