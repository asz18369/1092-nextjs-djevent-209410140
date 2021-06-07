import Meal from '../../styles/meal.module.css'

export default function meals() {
    return (
        <div class="container">
      <h1>Meal Finder</h1>
      <div class="flex">
        <form class="flex" id="submit">
          <input
            type="text"
            id="search"
            placeholder="Search for meals or keywords"
          />
          <button class="search-btn" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </form>
        <button class="random-btn" id="random">
          <i class="fas fa-random"></i>
        </button>
      </div>

      <div id="result-heading"></div>
       <div id="meals" class="meals"></div>
      <div id="meals" class="meals">
        <div class="meal">
          <img
            src="https://www.themealdb.com/images/media/meals/1529446137.jpg"
            alt="Egg Drop Soup"
          />
          <div class="meal-info" data-mealid="52955">
            <h3>Egg Drop Soup</h3>
          </div>
        </div>

        <div class="meal">
          <img
            src="https://www.themealdb.com/images/media/meals/2dsltq1560461468.jpg"
            alt="Tuna and Egg Briks"
          />
          <div class="meal-info" data-mealid="52975">
            <h3>Tuna and Egg Briks</h3>
          </div>
        </div>

        <div class="meal">
          <img
            src="https://www.themealdb.com/images/media/meals/1550440197.jpg"
            alt="Salmon Eggs Eggs Benedict"
          />
          <div class="meal-info" data-mealid="52962">
            <h3>Salmon Eggs Eggs Benedict</h3>
          </div>
        </div>

        <div class="meal">
          <img
            src="https://www.themealdb.com/images/media/meals/ysqrus1487425681.jpg"
            alt="Roasted Eggplant With Tahini, Pine Nuts, and Lentils"
          />
          <div class="meal-info" data-mealid="52816">
            <h3>Roasted Eggplant With Tahini, Pine Nuts, and Lentils</h3>
          </div>
        </div>

        <div class="meal">
          <img
            src="https://www.themealdb.com/images/media/meals/yqwtvu1487426027.jpg"
            alt="Stovetop Eggplant With Harissa, Chickpeas, and Cumin Yogurt"
          />
          <div class="meal-info" data-mealid="52817">
            <h3>Stovetop Eggplant With Harissa, Chickpeas, and Cumin Yogurt</h3>
          </div>
        </div>
      </div>
      <div id="single-meal"></div>
    </div>
    )
}
