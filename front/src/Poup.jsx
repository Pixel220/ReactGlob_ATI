import React from "react";
import './Poup.scss'

export default class Poup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
        this.close = this.props.close.bind(this)
    }

    render() {
        return (
            <div>
                <div className="Poup">
                    <p>{this.state.data.name}</p>
                    <button className="Close" onClick={this.close}></button>
                    <div className="Data">
                        <div className="Items">
                            <p className="Title">Телефон:</p>
                            <p className="Title2">{this.state.data.phone}</p>
                        </div>
                        <div className="Items">
                            <p className="Title">Почта:</p>
                            <p className="Title2">{this.state.data.email}</p>
                        </div>
                        <div className="Items">
                            <p className="Title">Дата приема:</p>
                            <p className="Title2">{this.state.data.hire_date}</p>
                        </div>
                        <div className="Items">
                            <p className="Title">Должность:</p>
                            <p className="Title2">{this.state.data.position_name}</p>
                        </div>
                        <div className="Items">
                            <p className="Title">Подразделение:</p>
                            <p className="Title2">{this.state.data.department}</p>
                        </div>
                    </div>
                    <div className="Data_dop">
                        <p className="Title">Дополнительная информация:</p>
                        <p className="Title2">{this.state.data.department}</p>
                    </div>


                </div>
            </div>
        )
    }

}