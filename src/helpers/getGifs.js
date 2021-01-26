

export const getGifs = async (category) => {
    if (category.trim() !== '') {
        const apiKey = 'iREDG31tSGjOew6urAJAIdtvrjtifSMO';
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=10&q=${encodeURI(category)}`;
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(element => {
            return {
                id: element.id,
                title: element.title,
                url: element.images?.downsized_medium.url,
            }
        });

        return gifs;
    }
}