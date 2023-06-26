    import recipeList from "../utils/recipeList"
    import "../index.css";
    const Recipes = () => {
        return(
            <div className="cards">
                {recipeList.map((recipe) => {
                    const {
                        recipeName,
                        image,
                        ingredients,
                        directions,
                        meal
                    } = recipe;

                    return <div key={`${recipeName}${meal}`} className="cards--card">
                <div className="grow">
                <img className="cards--image" src={image} alt={recipeName} />
                </div>
                <div className="cards--text-content">
                    <p className="cards--name">{recipeName}</p>
                    <span className="cards--meal">{meal}</span>
                    <p className="cards--ingredients"><i>Ingredients: {ingredients}</i></p>
                    <br />
                    <p className="cards--directions"><u>Directions: </u>{directions}</p>
                    
                </div>
            </div>
                })}
            </div>
        )
    }

    export default Recipes
    