import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

// Global Styles
export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #f8f9fa;
  }
`;

// Navbar Styles
export const NavbarContainer = styled.nav`
  background-color: #343a40;
  padding: 10px 20px;
  color: white;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const NavbarTitle = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

export const SignOutButton = styled.button`
  background-color: #dc3545;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

// Dashboard Styles
export const Dashboard = styled.div`
  padding: 80px 20px 20px;
  text-align: center;
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CreateTaskButton = styled.button`
  background-color: #007bff;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Task List Styles
export const TaskListContainer = styled.div`
  margin-top: 20px;
`;

export const TaskItem = styled.div`
  border: 1px solid #ddd;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

// Task Form Styles
export const TaskFormWrapper = styled.div`
  max-width: 700px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const TaskFormTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: center;
`;

export const TaskFormLabel = styled.label`
  display: block;
  font-size: 1rem;
  margin-bottom: 8px;
  color: #495057;
`;

export const TaskFormInput = styled.input`
  width: calc(100% - 22px); /* Adjust width to account for padding and border */
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  box-sizing: border-box; /* Ensure padding and border are included in width */
`;

export const TaskFormSelect = styled.select`
  width: calc(100% - 22px); /* Adjust width to account for padding and border */
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  box-sizing: border-box; /* Ensure padding and border are included in width */
`;

export const TaskFormButton = styled.button`
  background-color: #007bff;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  display: block;
  width: 100%;

  &:hover {
    background-color: #0056b3;
  }
`;

export const TaskFormTime = styled.p`
  margin-top: 10px;
  color: #6c757d;
  text-align: center;
`;