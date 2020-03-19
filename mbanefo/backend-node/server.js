const express= require("express");
const app =express();
const route = require('./UserRoute/route');
//midleware to allow server to access JSON objects
app.use(express.json());
// middleware for routing
app.use('/api/user/',route);
const PORT =process.env.PORT||8080;
app.get("/",(req,res)=>{
res.send("Fashion square");
}
);

app.listen(PORT,()=>console.log(`Server running in ${PORT}`));

module.exports = app;
