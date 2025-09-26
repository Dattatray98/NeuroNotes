const {ChromaClient} = require("chromadb");

const client = new ChromaClient({
    path: "https://chromadb-production-4f05.up.railway.app"
});

async function setupchroma() {
    const collection = await client.getOrCreateCollection({
        name:"student-notes"
    });

    await collection.add({
        id:["1"],
        documents:["machine learning is a subset of AI"],
        embeddings:[[0.1,0.2,0.3,0.4]]
    })

    console.log("Database inserted")
};


setupchroma();


module.exports = {
    client,
    setupchroma
}