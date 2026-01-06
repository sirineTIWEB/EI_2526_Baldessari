import { useState} from 'react';
import Select from './Select.jsx';

function SortBy(props) {
    const [sortBy, setSortBy] = useState('');

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
        // Logique de tri ici
    };

    return (
        <Select
            value={sortBy}
            onChange={handleSortChange}
            options={props.sorting}
            placeholder="Trier par"
        />
    )
}

export default SortBy;