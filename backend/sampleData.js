// Medications
const medications = [
  {
    id: "1",
    userId: "1",
    name: "Sythroid",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.",
    directions: "Take one tablet once daily",
    count: 30,
    type: "medication",
    urgency: "High",
    expiration: "None",
  },
  {
    id: "2",
    userId: "2",
    name: "Vitamin B12",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.",
    directions: "Take one shot twice a week",
    count: 8,
    type: "medication",
    urgency: "Medium",
    expiration: "1 Month",
  },
  {
    id: "32",
    userId: "2",
    name: "Iron",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.",
    directions: "Take one 60 Ml tablet once daily",
    count: 30,
    type: "Supplement",
    urgency: "Low",
    expiration: "None",
  },
  {
    id: "32",
    userId: "2",
    name: "Perkocet",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.",
    directions: "Take two tablets every 4 hours as needed for pain",
    count: 20,
    type: "Medication",
    urgency: "Medium",
    expiration: "2 Weeks",
  },
];

// Users
const users = [
  {
    id: "1",
    name: "Tony Stark",
    email: "ironman@gmail.com",
    phone: "343-567-4333",
  },
  {
    id: "2",
    name: "Natasha Romanova",
    email: "blackwidow@gmail.com",
    phone: "223-567-3322",
  },
  {
    id: "3",
    name: "Thor Odinson",
    email: "thor@gmail.com",
    phone: "324-331-4333",
  },
  {
    id: "4",
    name: "Steve Rogers",
    email: "steve@gmail.com",
    phone: "344-562-6787",
  },
  {
    id: "5",
    name: "Bruce Banner",
    email: "bruce@gmail.com",
    phone: "321-468-8887",
  },
];

module.exports = { medications, users };
