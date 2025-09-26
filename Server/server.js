const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

PORT = process.env.PORT || 8000;

const { ChromaClient } = require("chromadb");

const client = new ChromaClient({
    path: "https://chromadb-production-4f05.up.railway.app",
    auth: {
        provider: "chromadb.auth.token_authn.TokenAuthenticationProvider",
        credentials: process.env.CHROMA_SERVER_AUTHN_CREDENTIALS, // store your token in .env
    }
});


async function setupchroma() {
    const collection = await client.getOrCreateCollection({
        name: "student-notes"
    });

    await collection.add({
        id: ["1"],
        documents: ["machine learning is a subset of AI"],
        embeddings: [[0.1, 0.2, 0.3, 0.4]]
    })

    console.log("Database inserted")
};


setupchroma();



app.get("/", (req, res) => {
    res.send("the NeuroNotes backend server is running here");
})

app.listen(PORT, () => { console.log("server started at http://localhost:8000") });