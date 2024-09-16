
import styles from './recipecard.module.css';

function RecipeCard(){
    return(
        <div className={styles.recipecard}>
  <img src='https://insanelygoodrecipes.com/wp-content/uploads/2020/10/Hamburger-with-Sesame-Seeds-Cheese-and-Veggies-500x375.png' alt="Recipe Image" className={styles.recipeimage}/>
  <div className={styles.recipecontent}>
    <h3 className={styles.recipetitle}>Delicious Pasta</h3>
    <p className={styles.recipedescription}>A quick and tasty pasta recipe with a rich tomato sauce.</p>
    <button className={styles.viewrecipebtn}>View Recipe</button>
  </div>
</div>
       
    )
}

export default RecipeCard;