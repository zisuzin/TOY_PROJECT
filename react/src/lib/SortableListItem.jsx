import React from "react"

function SortableListItem(index,draggable,children,onDragStart,onDropItem,onClickItem) {
    const itemRef = userRef(null)
    const onDragStartItem = () => {
        itemRef.current.classList.add('dragstart')
        onDragStart(index)
    }

    const onDragEnd = () => itemRef.current.classList.remove('dragstart');
    const onDragEnter = () => itemRef.current.classList.add('dragover');
    const onDragLeave = () => itemRef.current.classList.remove('dragover');
    const onDrop = () => {
        itemRef.current.classList.remove('dragover');
        onDragItem(index)
    }
    const onClick = () => onClickItem(index);

    return (
        <li
        ref={itemRef}
        className="item"
        draggable={draggable ? draggable : false}
        onDragStart={onDragStartItem}
        onDragEnd={onDragEnd}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDrop}
        >
            {children}
        </li>

    )
}

export default SortableListItem