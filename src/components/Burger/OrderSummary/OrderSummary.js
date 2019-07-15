import React from 'react';
import Aux from '../../../hoc/Aux.js'
import Button from '../../UI/Button/Button.js'

const OrderSummary = (props) => {

    const ingredientsSummary = Object.keys(props.ingredients).map(igKey => {
        return (
            <li key={igKey}>
                <span 
                    style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        );
    })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicous burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Total price is: {props.price}</p>
            <p>Contine to checkout</p>
            <Button
                btnType="Danger"
                clicked={props.purchasedCancelled}
                >CANCEL</Button>
            <Button
                btnType="Success"
                clicked={props.purchasedContinued}
                >CONTINUE</Button>
        </Aux>
    );
}

export default OrderSummary;