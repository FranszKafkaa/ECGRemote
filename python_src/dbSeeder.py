import os
from pymongo import MongoClient
from dotenv import load_dotenv, find_dotenv
from biosppy import storage

import dns
import certifi

load_dotenv(find_dotenv())

dbClient = MongoClient(os.environ.get("MONGO_DB_URL"), tlsCAFile=certifi.where()).get_default_database()

doctor = dict({"name" : "Paulo Jaime", "userName" : "paulojaime",
 "doctor": True, "email": "jaiminho@outlook.com", "telefone" : "2932983"})

def setUsers():
    userList = []

    patients = [dict({"name" : "Marcelo Janke","userName": "marcelojanke", "doctor": False, 
        "email": "marcelojanke@outlook.com", "telefone" : "2932983"}),dict({"name" : "Fulano",
        "userName": "fulanozika", "doctor": False, 
        "email": "fulano@outlook.com", "telefone" : "2932983"})]
    
    
    for i in patients:
        userList.append(dbClient.patients.insert_one(i).inserted_id)

    return userList
        


path = "./python_src/Files/"
fileDir = os.listdir(path)

ids = setUsers()

count = 0;
for i in fileDir:
    for j in os.listdir(path + i + "/"):
        count += 1
        
        signal, mdata = storage.load_txt(path+i +"/"+j)
        mdata['data'] = signal.tolist()
        mdata["userId"] = ids[count %2 == 0]
        mdata["title"] = j[0: -4]
        mdata["type"] = i

        print("sended to database by id {}".format(dbClient.exams.insert_one(mdata).inserted_id))

    count = 0;
    print("folder {} done".format(i))



   
    