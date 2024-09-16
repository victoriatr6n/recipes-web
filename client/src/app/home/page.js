import { textDecoration } from "@chakra-ui/react";
import styles from "./style.module.css";
import { Playfair_Display } from 'next/font/google';
import RecipeCard from "@/components/recipecard-component/recipecard";



const playfairDisplay = Playfair_Display({
    subsets: ['latin'], // Specify the subsets you want
    weight: ['400', '700'], // Specify the weights you need
  });

export default function Home() {
    return (
        <div className={styles.landing}>
            <div className={`${styles.title} ${playfairDisplay.className}`}>
            <h1>Welcome to Recip<i>EASY!</i></h1>
            
            <h3><i>finding recipes made easy</i></h3>
            <p className={styles.explore}>don't know what to cook? start here!</p>
            </div>

            <div className={styles.suggested}>
                <div className={styles.repcard}>
                    <RecipeCard/>
                </div>
                <div className={styles.repcard}>
                    <RecipeCard/>
                </div>
                <div className={styles.repcard}>
                    <RecipeCard/>
                </div>
                <div className={styles.repcard}>
                    <RecipeCard/>
                </div>
            </div>
        </div>
    )
}