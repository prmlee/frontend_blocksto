import { useContext, useState } from 'react';
import { Category } from '../../../../constants';
import { UiContext } from '../../../../context/ui';
import { categoryData } from '../../../../mock';
import { CategoryButton } from '../../../Button';

const CategoryConsultPanel = () => {
  const { selectCategory, moveToConsultPanel } = useContext(UiContext);
  const [categories, setCategories] = useState<Category[]>(categoryData);
  return (
    <div className="d-flex flex-wrap category-panel">
      {categories.map((category, index) => (
        <CategoryButton
          title={category.title}
          key={`category-${index}`}
          handleClick={() => {
            selectCategory(category.title);
            moveToConsultPanel('info');
          }}
        />
      ))}
      <CategoryButton
        title="Créer une nouvelle catégorie"
        key={'category--1'}
        handleClick={() => console.log('lastone')}
        addable
      />
    </div>
  );
};

export default CategoryConsultPanel;
