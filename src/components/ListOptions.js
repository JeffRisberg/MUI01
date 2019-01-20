import React from 'react';

class ListOptions extends React.Component {
    render() {
        return (
            <div>
                {this.props.options.map(function (entry, index) {
                    return (
                        <li key={index}>
                            {entry.fname} {entry.lname}
                        </li>
                    )
                })}
            </div>
        )
    }
}

export default ListOptions;
