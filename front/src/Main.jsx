import React from "react";
import './Main.scss'
import Search from "./icons/search.svg"
import Phone from "./icons/phone.svg"
import Email from "./icons/email.svg"
import Poup from "./Poup.jsx"







export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            shower: false,
            searcher: ''
        }
    }

    async GET(url) {
        try {
            return new Promise((resolve, reject) => {
                fetch(url).then(response => {
                    response.json().then(data => {
                        resolve(data)
                    }).catch(err => {
                        reject(err)
                    })
                }).catch(err => {
                    reject(err)
                })
            })
        } catch (error) {

        }
    }

    async GertUsers() {
        let users = await this.GET('http://localhost:3000/')
        this.setState({ list: users })
    }

    async Searcher(value) {
        let users = this.state.list
        let searcher = value.toLowerCase()
        let ids = false
        for (let i = 0; i < users.length; i++) {
            if (users[i].name.toLowerCase().search(searcher) !== -1) {
                ids = users[i].name
            }
        }
        if (!ids || searcher === '') return await this.GertUsers()
        let search = await this.GET('http://localhost:3000/?term=' + ids)
        this.setState({ list: search })
    }

    async componentWillMount() {
        await this.GertUsers()
    }


    render() {
        return (
            < div className="Container"  >
                {this.state.shower && <Poup data={this.state.shower} close={() => this.setState({ shower: false })} />}
                <div className="Users" style={{ filter: this.state.shower ? 'blur(4px)' : 'blur(0px)' }}>
                    <div className="Search">
                        <img src={Search} alt="Search" width="24px" height="24px" className="Icon" />
                        <input onChange={(e) => this.Searcher(e.target.value)} className="Input" type="text" placeholder="Search" />
                    </div>
                    <div className="Container_Users">
                        {this.state.list.map((item, index) => {
                            return (
                                <div className="Item" key={index} onClick={() => this.setState({ shower: item })}>
                                    <h1 className="Data">{item.name}</h1>
                                    <div className="Data">
                                        <img src={Phone} alt="Phone" width="24px" height="24px" className="Icon" />
                                        <p>{item.phone}</p>
                                    </div>
                                    <div className="Data">
                                        <img src={Email} alt="Email" width="24px" height="24px" className="Icon" />
                                        <p>{item.email}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div >
        )
    }
}