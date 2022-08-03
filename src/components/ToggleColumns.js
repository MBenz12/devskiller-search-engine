import React from 'react'

export const ToggleColumns = (props) => {
  const onCheckboxClick = (e) => {
    // TODO: implement checkbox click handler
    console.log(e.target.value);
    props.onCheckboxClick(e.target.name, e.target.checked);
  }

  // TODO: Bind handlers and props
  return (
    <div className="toggle-columns">
      {
        Object.keys(props.columns).map((column, index) => {
          return (
            <div key={index}>
              <label htmlFor={column}>
                {column}
              </label>
              <input
                id={column}
                name={column}
                type="checkbox"
                checked={props.columns[column]}
                onChange={onCheckboxClick}
              />
            </div>)
        })
      }
    </div>
  );
}
