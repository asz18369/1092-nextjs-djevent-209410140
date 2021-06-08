import styles from './meals.module.css';
import Head from 'next/head';
import meal from '../../meals-data'

export default function meals() {
    return (
      <div className={styles.container}>
        <Head> 

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" /> 

<title>Meals</title> 

</Head> 
      <h1>Meal Finder</h1>
      <div className={styles.flex}>
        <form className={styles.flex} id="submit">
          <input
            type="text"
            id="search"
            placeholder="Search for meals or keywords"
          />
          <button className={styles["search-btn"]} type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
        <button className={styles["random-btn"]} id="random">
          <i className="fas fa-random"></i>
        </button>
      </div>

      <div id="result-heading"></div>
      <div id="meals" className={styles.meals}></div>
      <div id="meals" className={styles.meals}>
        <div className={styles.meal}>
          <img
            src="https://www.themealdb.com/images/media/meals/1529446137.jpg"
            alt="Egg Drop Soup"
          />
          <div className={styles["meal-info"]} data-mealid="52955">
            <h3>Egg Drop Soup</h3>
          </div>
        </div>

        <div className={styles.meal}>
          <img
            src="https://www.themealdb.com/images/media/meals/2dsltq1560461468.jpg"
            alt="Tuna and Egg Briks"
          />
          <div className={styles["meal-info"]} data-mealid="52975">
            <h3>Tuna and Egg Briks</h3>
          </div>
        </div>

        <div className={styles.meal}>
          <img
            src="https://www.themealdb.com/images/media/meals/1550440197.jpg"
            alt="Salmon Eggs Eggs Benedict"
          />
          <div className={styles["meal-info"]} data-mealid="52962">
            <h3>Salmon Eggs Eggs Benedict</h3>
          </div>
        </div>

        <div className={styles.meal}>
          <img
            src="https://www.themealdb.com/images/media/meals/ysqrus1487425681.jpg"
            alt="Roasted Eggplant With Tahini, Pine Nuts, and Lentils"
          />
          <div className={styles["meal-info"]} data-mealid="52816">
            <h3>Roasted Eggplant With Tahini, Pine Nuts, and Lentils</h3>
          </div>
        </div>

        <div className={styles.meal}>
          <img
            src="https://www.themealdb.com/images/media/meals/yqwtvu1487426027.jpg"
            alt="Stovetop Eggplant With Harissa, Chickpeas, and Cumin Yogurt"
          />
          <div className={styles["meal-info"]} data-mealid="52817">
            <h3>Stovetop Eggplant With Harissa, Chickpeas, and Cumin Yogurt</h3>
          </div>
        </div>
      </div>
      <div id="single-meal"></div>
    </div>
    
    )
}
