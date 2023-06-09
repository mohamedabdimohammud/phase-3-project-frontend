import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Update() {
const params = useParams();
const navigate = useNavigate();
const [mov_title, SetMov_title] = useState("");
const [mov_year, SetMov_year] = useState("");
const [mov_desc, SetMov_desc] = useState("");
const [mov_url, SetMov_url] = useState("");

function handleUpdate(e) {
e.preventDefault();

fetch(`https://data-j87g.onrender.com/movies/update/${params.id}`, {
method: "PUT",
body: JSON.stringify({
title: mov_title,
year: mov_year,
description: mov_desc,
movie_url: mov_url,
}),
})
.then((response) => response.json())
.then((data) => {
console.log(data);
navigate("/dashboard");
})
.catch((error) => console.error(error));
}

return (
<form className="addmov" onSubmit={(e) => handleUpdate(e)}>
<label>
<b>Title</b>
</label>
<input
type="text"
placeholder="Enter title"
value={mov_title}
onChange={(e) => SetMov_title(e.target.value)}required></input>
<label>
<b>Year</b>
</label>
<input
type="text"
placeholder="Enter year"
value={mov_year}
onChange={(e) => SetMov_year(e.target.value)}
required></input>
<label>
<b>Description</b>
</label>
<input
type="text"
placeholder="Enter movie description"
value={mov_desc}
onChange={(e) => SetMov_desc(e.target.value)}
required></input>
<label>
<b>IMDB page</b>
</label>
<input
type="text"
placeholder="Enter movie url"
value={mov_url}
onChange={(e) => SetMov_url(e.target.value)}></input>
<input type="submit"></input>
</form>
);
}

export default Update;