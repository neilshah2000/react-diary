myFile = open('prompts.json', 'r')
lines = myFile.readlines()

mongo = []

# make like this format for mongo
# { "item": "journal", "qty": 25, "size": { "h": 14, "w": 21, "uom": "cm" }, "status": "A" }
for line in lines:
    st = line.strip()
    mng = '{{ \"text\": \"{0}\" }}'.format(st)
    mongo.append(mng + '\n')

myWrite = open('import.json', 'w')
print(mongo)
myWrite.writelines(mongo)
myWrite.close





