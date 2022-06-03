class MarvelService {
  _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  _apiKey = 'apikey=45d86b5c3e69da46a633492d547054e3';
  getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Ошибка запроса. Код: ${res.status}`);
    }

    return await res.json();
  };

  getAllCharacters = () => {
    return this.getResource(
      `${this._apiBase}characters?limit=9&offset=453&${this._apiKey}`
    );
  };
  getCharacter = async (id) => {
    const res = await this.getResource(
      `${this._apiBase}comics/${id}?&${this._apiKey}`
    );
    return this._transformCharacter(res.data.results[0]);
  };

  _transformCharacter = (char) => {
    return {
      name: char.title,
      desc: char.description,
      thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
    };
  };
}
export default MarvelService;
