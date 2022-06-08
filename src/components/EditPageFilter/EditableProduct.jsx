import s from './EditPageFilter.module.css';

function matchCategory(categoryId, categoriesListOfObj) {
  const categoryObj = categoriesListOfObj.find(obj => obj.id === categoryId);
  return categoryObj.name;
}
export default function EditableProduct({ el, onRemove }) {
  return (
    <li key={el.id} className={s.product}>
      <span className={s.id}>{matchCategory(el.categoryId)}</span>
      <span className={s.name}>{el.name}</span>

      <button type="submit" className={s.button}>
        Edit
      </button>
      <button
        type="submit"
        className={s.buttonDelete}
        onClick={() => onRemove(el.id)}
      >
        Delete
      </button>
    </li>
  );
}