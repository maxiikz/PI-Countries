import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postActivities, getCountries } from "./store/reducers/actions";

const CreateActivity = () => {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state);
  const [error, setError] = useState({});
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });
  //Función con los errores
  let validation = () => {
    let error = {};
    if (!input.name) {
      error.name = "Name is required!";
    } else if (!input.difficulty) {
      error.difficulty = "Difficulty must be a number between 1 and 5!";
    } else if (!input.duration) {
      error.duration = "Duration is required!";
    } else if (!input.season) {
      error.season = "Season is required!";
    }
    return error;
  };

  let handleChange = (e) => {
    //Manejo los inputs del form
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    //Manejo los errores del input del form
    setError(
      validation({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };
  //Manejo los países del form
  let handleCheckBoxCountries = (e) => {
    if (e.target.checked) {
      setInput({
        ...input,
        countries: [...input.countries, e.target.value],
      });
    }
  };
  //Manejo el submit
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(postActivities(input));
    setInput({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    });
    alert("Your activity has been created succesfully, go check it out!");
  };

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div>
      <h1>Create a Turistic Activity:</h1>
      <nav>
        <Link to="/countries">
          <button>Back to Home</button>
        </Link>
      </nav>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Name:</label>
          <input
            // required
            type="text"
            placeholder="Activity name..."
            value={input.name}
            name="name"
            onChange={(e) => handleChange(e)}
          />{" "}
          {error.name && <p>{error.name}</p>}
        </div>
        <div>
          <label>Difficulty:</label>
          <select onChange={(e) => handleChange(e)} name="difficulty">
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          {error.dificulty && <p>{error.dificulty}</p>}
        </div>
        <div>
          <label>Duration:</label>
          <input
            // required
            type="text"
            placeholder="Duration..."
            value={input.duration}
            name="duration"
            onChange={(e) => handleChange(e)}
          />{" "}
          {error.duration && <p>{error.duration}</p>}
        </div>
        <div>
          <label>Season:</label>
          <select onChange={(e) => handleChange(e)} name="season">
            <option value=""></option>
            <option value="Verano">Summer</option>
            <option value="Invierno">Winter</option>
            <option value="Primavera">Spring</option>
            <option value="Otoño">Autumn</option>
          </select>
        </div>
        <div>
          <label>Countries:</label>
          <div>
            {countries &&
              countries.map((c) => {
                return (
                  <div key={c.id}>
                    <label>{c.name}</label>
                    <input
                      type="checkbox"
                      value={c.name}
                      onChange={(e) => handleCheckBoxCountries(e)}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <button type="submit">Create New Activity!</button>
      </form>
    </div>
  );
};

export default CreateActivity;
