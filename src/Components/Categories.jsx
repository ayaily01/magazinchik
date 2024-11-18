import React from 'react'
export class Categories extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key:"all",
                    name:"Everything"
                },
                {
                    key:"Coats",
                    name:"Coats"
                },
                {
                    key:"Sweaters",
                    name:"Sweaters"
                },
                {
                    key:"Jeans",
                    name:"Jeans"
                },
                {
                    key:"Skirts",
                    name:"Skirts"
                },
                {
                    key:"Bags",
                    name:"Bags"
                },
                
            ]
        }
    }
    render() {
        return(
            <div className = "categories">
                {this.state.categories.map(el => (
                        <div key = {el.id} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }

}

export default Categories