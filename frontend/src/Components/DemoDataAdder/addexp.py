from pymongo import MongoClient
from datetime import datetime

client = MongoClient("mongodb+srv://hooded:pmGERsFyCGzBOWzZ@cluster0.tp4eqbb.mongodb.net/?retryWrites=true&w=majority")

db = client.test
collection = db.expenses

# List of JSON objects
json_list =[
  {
    "title": "Textbook",
    "amount": 420,
    "type": "expense",
    "date": "2023-01-15T18:30:00.000Z",
    "category": "education",
    "description": "Purchase of a required textbook",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "Grocery Shopping",
    "amount": 1090,
    "type": "expense",
    "date": "2023-02-10T12:00:00.000Z",
    "category": "groceries",
    "description": "Monthly grocery shopping",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "Doctor's Visit",
    "amount": 540,
    "type": "expense",
    "date": "2023-03-22T15:45:00.000Z",
    "category": "health",
    "description": "Consultation with the doctor",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "Netflix Subscription",
    "amount": 720,
    "type": "expense",
    "date": "2023-04-05T20:00:00.000Z",
    "category": "subscriptions",
    "description": "Monthly subscription to Netflix",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "Takeout Dinner",
    "amount": 390,
    "type": "expense",
    "date": "2023-05-18T19:30:00.000Z",
    "category": "takeaways",
    "description": "Dinner from a local restaurant",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "New Clothes",
    "amount": 760,
    "type": "expense",
    "date": "2023-06-10T14:15:00.000Z",
    "category": "clothing",
    "description": "Purchase of new clothes",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "Weekend Getaway",
    "amount": 880,
    "type": "expense",
    "date": "2023-07-07T08:00:00.000Z",
    "category": "travelling",
    "description": "Short trip for the weekend",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "Gardening Supplies",
    "amount": 420,
    "type": "expense",
    "date": "2023-08-14T16:45:00.000Z",
    "category": "other",
    "description": "Purchase of gardening tools",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "Textbook",
    "amount": 790,
    "type": "expense",
    "date": "2023-09-25T18:30:00.000Z",
    "category": "education",
    "description": "Purchase of a required textbook",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "Grocery Shopping",
    "amount": 1420,
    "type": "expense",
    "date": "2023-10-10T12:00:00.000Z",
    "category": "groceries",
    "description": "Monthly grocery shopping",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "Doctor's Visit",
    "amount": 760,
    "type": "expense",
    "date": "2023-11-22T15:45:00.000Z",
    "category": "health",
    "description": "Consultation with the doctor",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "Netflix Subscription",
    "amount": 1090,
    "type": "expense",
    "date": "2023-12-05T20:00:00.000Z",
    "category": "subscriptions",
    "description": "Monthly subscription to Netflix",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "Takeout Dinner",
    "amount": 420,
    "type": "expense",
    "date": "2023-12-18T19:30:00.000Z",
    "category": "takeaways",
    "description": "Dinner from a local restaurant",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "New Clothes",
    "amount": 760,
    "type": "expense",
    "date": "2023-12-31T14:15:00.000Z",
    "category": "clothing",
    "description": "Purchase of new clothes",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  }
]




# Loop through the list and insert documents into the collection
for json_data in json_list:
    # Convert date strings to datetime objects
    json_data["date"] = datetime.strptime(json_data["date"], "%Y-%m-%dT%H:%M:%S.%fZ")
    json_data["createdAt"] = datetime.strptime(json_data["createdAt"], "%Y-%m-%dT%H:%M:%S.%fZ")
    json_data["updatedAt"] = datetime.strptime(json_data["updatedAt"], "%Y-%m-%dT%H:%M:%S.%fZ")

    # Insert the document into the collection
    result = collection.insert_one(json_data)

    # Print the inserted document's ID
    print("Inserted document ID:", result.inserted_id)
