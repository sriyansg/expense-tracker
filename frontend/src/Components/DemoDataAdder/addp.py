from pymongo import MongoClient
from datetime import datetime

client = MongoClient("mongodb+srv://hooded:pmGERsFyCGzBOWzZ@cluster0.tp4eqbb.mongodb.net/?retryWrites=true&w=majority")

db = client.test
collection = db.incomes

# List of JSON objects
json_list =[
  {
    "title": "Monthly Salary",
    "amount": 4000,
    "type": "income",
    "date": "2023-01-05T12:00:00.000Z",
    "category": "salary",
    "description": "Regular monthly salary deposit",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "Freelance Project Payment",
    "amount": 800,
    "type": "income",
    "date": "2023-01-15T10:00:00.000Z",
    "category": "freelancing",
    "description": "Payment for completing a freelance project",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "Dividend Payout",
    "amount": 500,
    "type": "income",
    "date": "2023-02-08T08:00:00.000Z",
    "category": "investments",
    "description": "Dividend received from the investment portfolio",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "Stock Dividend",
    "amount": 200,
    "type": "income",
    "date": "2023-02-20T09:00:00.000Z",
    "category": "stocks",
    "description": "Dividend income from stock holdings",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "Monthly Allowance",
    "amount": 1000,
    "type": "income",
    "date": "2023-03-02T13:00:00.000Z",
    "category": "pocketm",
    "description": "Monthly pocket money",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "Holiday Gift",
    "amount": 300,
    "type": "income",
    "date": "2023-03-17T19:00:00.000Z",
    "category": "gift",
    "description": "Gift received during the holiday season",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "Bank Interest",
    "amount": 700,
    "type": "income",
    "date": "2023-04-11T17:00:00.000Z",
    "category": "bank",
    "description": "Interest earned on a savings account",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "Miscellaneous Income",
    "amount": 200,
    "type": "income",
    "date": "2023-04-23T21:00:00.000Z",
    "category": "other",
    "description": "Unspecified miscellaneous income",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "Year-End Bonus",
    "amount": 2000,
    "type": "income",
    "date": "2023-05-15T12:00:00.000Z",
    "category": "salary",
    "description": "Annual year-end bonus",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "Birthday Gift",
    "amount": 500,
    "type": "income",
    "date": "2023-05-20T15:00:00.000Z",
    "category": "pocketm",
    "description": "Gift money received on birthday",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "Freelance Writing Gig",
    "amount": 300,
    "type": "income",
    "date": "2023-06-22T14:00:00.000Z",
    "category": "freelancing",
    "description": "Payment for a freelance writing assignment",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "Refund",
    "amount": 650,
    "type": "income",
    "date": "2023-06-18T11:00:00.000Z",
    "category": "bank",
    "description": "Refund received from a transaction",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "Real Estate Investment Return",
    "amount": 1000,
    "type": "income",
    "date": "2023-07-22T14:00:00.000Z",
    "category": "investments",
    "description": "Return on real estate investment",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "Reimbursement",
    "amount": 480,
    "type": "income",
    "date": "2023-07-18T11:00:00.000Z",
    "category": "other",
    "description": "Reimbursement for expenses",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "Stock Market Profits",
    "amount": 500,
    "type": "income",
    "date": "2023-08-18T11:00:00.000Z",
    "category": "stocks",
    "description": "Profit earned from selling stocks",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "Anniversary Present",
    "amount": 400,
    "type": "income",
    "date": "2023-08-19T20:00:00.000Z",
    "category": "gift",
    "description": "Present received on the anniversary",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "Monthly Salary",
    "amount": 4000,
    "type": "income",
    "date": "2023-09-05T12:00:00.000Z",
    "category": "salary",
    "description": "Regular monthly salary deposit",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "Freelance Writing Gig",
    "amount": 800,
    "type": "income",
    "date": "2023-09-20T15:00:00.000Z",
    "category": "freelancing",
    "description": "Payment for a freelance writing assignment",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "Dividend Payout",
    "amount": 350,
    "type": "income",
    "date": "2023-10-08T08:00:00.000Z",
    "category": "investments",
    "description": "Dividend received from the investment portfolio",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "Stock Dividend",
    "amount": 400,
    "type": "income",
    "date": "2023-10-20T09:00:00.000Z",
    "category": "stocks",
    "description": "Dividend income from stock holdings",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "Monthly Allowance",
    "amount": 900,
    "type": "income",
    "date": "2023-11-02T13:00:00.000Z",
    "category": "pocketm",
    "description": "Monthly pocket money",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "Holiday Gift",
    "amount": 650,
    "type": "income",
    "date": "2023-11-17T19:00:00.000Z",
    "category": "gift",
    "description": "Gift received during the holiday season",
    "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "Bank Interest",
    "amount": 200,
    "type": "income",
    "date": "2023-12-07T17:00:00.000Z",
    "category": "bank",
    "description": "Interest earned on savings account",
     "createdAt": "2023-12-25T22:00:55.338Z",
    "updatedAt": "2023-12-25T22:00:55.338Z"
  },
  {
    "title": "Miscellaneous Income",
    "amount": 300,
    "type": "income",
    "date": "2023-12-23T21:00:00.000Z",
    "category": "other",
    "description": "Unspecified miscellaneous income",
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
