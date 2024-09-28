import React , {useState} from "react";
import { Card } from './cardComponent';

export const CardManager = () => {
    const [employees, setEmployees] = useState([{ name: '', position: '', isSaved: false }]);

    // Function to handle input changes in each card
    const handleInputChange = (e, index) => {
      const { name, value } = e.target;
      const newEmployees = [...employees];
      newEmployees[index][name] = value;
      setEmployees(newEmployees);
    };
  
    // Function to save the card (mark it as saved)
    const saveCard = (index) => {
      const newEmployees = [...employees];
      newEmployees[index].isSaved = true;
      setEmployees(newEmployees);
    };
  
    // Function to add a new empty card
    const addNewCard = () => {
      setEmployees([...employees, { name: '', position: '', isSaved: false }]);
    };
  
    return (
      <div>
        <div classNameName="card-container">
          {employees.map((employee, index) => (
            <Card
              key={index}
              index={index}
              employee={employee}
              handleInputChange={handleInputChange}
              saveCard={saveCard} // Pass saveCard function to EmployeeCard
            />
          ))}
          <button classNameName="add-card-btn" onClick={addNewCard}>
            + Add New Card
          </button>
        </div>
      </div>
    );
  };
  
 