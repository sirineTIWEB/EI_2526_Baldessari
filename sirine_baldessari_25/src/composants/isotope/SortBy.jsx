import Select from '../UI/Select.jsx';

function SortBy(props) {
    const handleSortChange = (e) => {
        if (props.setSortBy) {
            props.setSortBy(e.target.value);
        }
    };

    return (
        <Select
            value={props.sortBy || ''}
            onChange={handleSortChange}
            options={props.sorting}
            placeholder="Trier par"
        />
    )
}

export default SortBy;