import React from 'react';


class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImages: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(data => data.json())
            .then(json => {
                const { memes } = json.data
                this.setState({ allMemeImages: memes })
            })
    }

    handleClick(event) {
        event.preventDefault()
        const randomnumber = Math.floor(Math.random() * this.state.allMemeImages.length)
        console.log(randomnumber)
        this.setState({
            randomImage: this.state.allMemeImages[randomnumber].url
        })
    }



    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })

    }

    render() {
        return (
            <div>
                <form className="meme-form">
                    <input type="text" name="topText" value={this.state.topText} onChange={this.handleChange} />
                    <input type="text" name="bottomText" value={this.state.bottomText} onChange={this.handleChange} />
                    <button onClick={this.handleClick}>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImage} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div >
        );
    }
}
export default MemeGenerator;
