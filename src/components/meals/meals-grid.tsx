import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";

export type MealItemType = {
  id: string | number;
  title: string;
  slug: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
};

interface MealsGridProps {
  meals: MealItemType[];
}

const MealsGrid: React.FC<MealsGridProps> = ({ meals }) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
