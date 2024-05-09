import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";

export type MealItemType = {
  id: string | number;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
};

interface MealsGridProps {
  meals: MealItemType[];
}

const MealsGrid: React.FC<MealsGridProps> = ({ meals }) => {
  return (
    <ul>
      {meals.map((meal) => (
        <li key={meal.id} className={classes.meals}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
