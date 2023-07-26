import pandas as pd
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate(
    "./refillstoresample-firebase-adminsdk-hvggx-8d8a7a6788.json"
)
firebase_admin.initialize_app(cred)

db = firestore.client()
df = pd.read_csv("refill_db.csv")

data = df.to_dict(orient="records")

for record in data:
    db.collection("data").add(record)
