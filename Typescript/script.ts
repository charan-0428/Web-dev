interface Person {
  name: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  city: string;
  occupation?: string; 
}

// Arrays of data
const people: Person[] = [
  { name: 'Nivas', age: 22, city: 'Nizamabad', gender: 'Male', email: 'nivas@example.com', phone: '123-456-7890' },
  { name: 'Sampath', age: 22, city: 'Nizamabad', gender: 'Male', email: 'sampath@example.com', phone: '234-567-8901' },
  { name: 'Vishal', age: 24, city: 'Karimnagar', gender: 'Male', email: 'vishal@example.com', phone: '345-678-9012' },
  { name: 'Saicharan', age: 24, city: 'Karimnagar', gender: 'Male', email: 'saicharan@example.com', phone: '456-789-0123', occupation: "intern" },
  { name: 'Adarsh', age: 24, city: 'Karimnagar', gender: 'Male', email: 'adarsh@example.com', phone: '567-890-1234' },
  { name: 'Shilesh', age: 24, city: 'Jagityal', gender: 'Male', email: 'shilesh@example.com', phone: '678-901-2345' },
  { name: 'Pawan', age: 25, city: 'Armur', gender: 'Male', email: 'pawan@example.com', phone: '789-012-3456' },
  { name: 'Srihari', age: 24, city: 'Armur', gender: 'Male', email: 'srihari@example.com', phone: '890-123-4567' },
  { name: 'Sreeja', age: 23, city: 'Nizamabad', gender: 'Female', email: 'sreeja@example.com', phone: '901-234-5678' },
  { name: 'Manasa', age: 24, city: 'Dharmaram', gender: 'Female', email: 'manasa@example.com', phone: '012-345-6789' },
  { name: 'Tejaswini', age: 23, city: 'Karimnagar', gender: 'Female', email: 'tejaswini@example.com', phone: '123-456-7890' },
  { name: 'Ishwarya', age: 22, city: 'Kamareddy', gender: 'Female', email: 'ishwarya@example.com', phone: '234-567-8901' },
  { name: 'Rajesh', age: 27, city: 'Karimnagar', gender: 'Male', email: 'rajesh@example.com', phone: '345-678-9012' },
  { name: 'Anjali', age: 29, city: 'Nizamabad', gender: 'Female', email: 'anjali@example.com', phone: '456-789-0123' },
  { name: 'Harsha', age: 26, city: 'Jagityal', gender: 'Male', email: 'harsha@example.com', phone: '567-890-1234' },
  { name: 'Kavya', age: 25, city: 'Dharmaram', gender: 'Female', email: 'kavya@example.com', phone: '678-901-2345' },
  { name: 'Srinivas', age: 30, city: 'Armur', gender: 'Male', email: 'srinivas@example.com', phone: '789-012-3456' },
  { name: 'Geetha', age: 28, city: 'Karimnagar', gender: 'Female', email: 'geetha@example.com', phone: '890-123-4567' },
  { name: 'Ravi', age: 25, city: 'Kamareddy', gender: 'Male', email: 'ravi@example.com', phone: '901-234-5678' }
];

// taking container where to append the card data
const container = document.getElementById("data") as HTMLDivElement;

// using foreach adding every element by creating card
people.forEach((person) => {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  // Adding sequence of data in card by creating html  elements
  const personName = document.createElement('h2');
  personName.textContent = person.name;
  const personAge = document.createElement('p');
  personAge.textContent = `Age: ${person.age}`;
  const personCity = document.createElement('p');
  personCity.textContent = `City: ${person.city}`;
  const personGender = document.createElement('p');
  personGender.textContent = `Gender: ${person.gender}`;
  const personEmail = document.createElement('p');
  personEmail.textContent = `${person.email}`;
  const personPhone = document.createElement('p');
  personPhone.textContent = `Phone: ${person.phone}`;

  // Append the person's details to the card
  cardDiv.appendChild(personName);
  cardDiv.appendChild(personAge);
  cardDiv.appendChild(personCity);
  cardDiv.appendChild(personGender);
  cardDiv.appendChild(personEmail);
  cardDiv.appendChild(personPhone);

  //appending the created card to main container in  html
  container.appendChild(cardDiv);
});

// Add an event listener for the Enter key on the input field
document.querySelector('input')?.addEventListener("keypress", function Key(event) {
  if (event.key === "Enter") {
    submit();
  }
});

// Function to filter city input
function submit() {
  const input = document.getElementById('city') as HTMLInputElement; 
  const cityfilt = input.value.toLowerCase().trim(); 
  const peopleCity = people.filter(person => person.city.toLowerCase() === cityfilt); 

  container.innerHTML = ''; 

  if (peopleCity.length > 0) { 
    peopleCity.forEach(person => {
      const cardDiv = document.createElement('div');
      cardDiv.classList.add('card');

     // Adding sequence of data in card by creating html  elements
      const personName = document.createElement('h2');
      personName.textContent = person.name;
      const personAge = document.createElement('p');
      personAge.textContent = `Age: ${person.age}`;
      const personCity = document.createElement('p');
      personCity.textContent = `City: ${person.city}`;
      const personGender = document.createElement('p');
      personGender.textContent = `Gender: ${person.gender}`;
      const personEmail = document.createElement('p');
      personEmail.textContent = `${person.email}`;
      const personPhone = document.createElement('p');
      personPhone.textContent = `Phone: ${person.phone}`;

      // Append the person's details to the card
      cardDiv.appendChild(personName);
      cardDiv.appendChild(personAge);
      cardDiv.appendChild(personCity);
      cardDiv.appendChild(personGender);
      cardDiv.appendChild(personEmail);
      cardDiv.appendChild(personPhone);

      // Append the card to the container
      container.appendChild(cardDiv);
    });
  } else {
    // If no results, display a message.
    container.innerHTML = '<p>No people found in this city.</p>';
  }
}
