from pymongo import MongoClient
# pprint library is used to make the output look more pretty
from pprint import pprint
import json

# connect to MongoDB, change the << MONGODB URL >> to reflect your own connection string
mongoUrl = 'mongodb://root:example@34.204.87.229:27017/?authSource=admin'

client = MongoClient(mongoUrl)
db=client.admin

myFile = open('import.json', 'r')
myJson = myFile.read()
parsed_json = (json.loads(myJson))

for prompt in parsed_json:
    print(prompt)
    result=db.prompts.insert_one(prompt)

# 