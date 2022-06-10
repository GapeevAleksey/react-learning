import './charList.scss';
import { Component } from 'react';
import abyss from '../../resources/img/abyss.jpg';
import MarvelService from '../../services/MarvelService';

class CharList extends Component {
  state = {
    comics: [],
    comicsShown: 9,
  };
  MarvelService = new MarvelService();

  getComicsList = async () => {
    const data = await this.MarvelService.getAllCharacters();
    this.setState({ comics: data });
  };

  componentDidMount() {
    this.getComicsList();
  }
  render() {
    console.log(this.state.comics);
    const { comics, comicsShown } = this.state;
    return (
      <div className="char__list">
        <ul className="char__grid">
          {comics.map((item, index) => {
            if (index < comicsShown) {
              return (
                <li key={item.id} className="char__item">
                  <img src={item.thumbnail} alt="abyss" />
                  <div className="char__name">{item.name}</div>
                </li>
              );
            }
            return null;
          })}
        </ul>
        <button
          className="button button__main button__long"
          onClick={() => {
            this.setState({ comicsShown: this.state.comicsShown + 9 });
          }}
        >
          <div className="inner">load more</div>
        </button>
      </div>

      //   <div className="char__list">
      //     <ul className="char__grid">
      //       <li className="char__item">
      //         <img src={abyss} alt="abyss" />
      //         <div className="char__name">Abyss</div>
      //       </li>
      //       <li className="char__item char__item_selected">
      //         <img src={abyss} alt="abyss" />
      //         <div className="char__name">Abyss</div>
      //       </li>
      //       <li className="char__item">
      //         <img src={abyss} alt="abyss" />
      //         <div className="char__name">Abyss</div>
      //       </li>
      //       <li className="char__item">
      //         <img src={abyss} alt="abyss" />
      //         <div className="char__name">Abyss</div>
      //       </li>
      //       <li className="char__item">
      //         <img src={abyss} alt="abyss" />
      //         <div className="char__name">Abyss</div>
      //       </li>
      //       <li className="char__item">
      //         <img src={abyss} alt="abyss" />
      //         <div className="char__name">Abyss</div>
      //       </li>
      //       <li className="char__item">
      //         <img src={abyss} alt="abyss" />
      //         <div className="char__name">Abyss</div>
      //       </li>
      //       <li className="char__item">
      //         <img src={abyss} alt="abyss" />
      //         <div className="char__name">Abyss</div>
      //       </li>
      //       <li className="char__item">
      //         <img src={abyss} alt="abyss" />
      //         <div className="char__name">Abyss</div>
      //       </li>
      //     </ul>
      //     <button className="button button__main button__long">
      //       <div className="inner">load more</div>
      //     </button>
      //   </div>
    );
  }
}

export default CharList;
