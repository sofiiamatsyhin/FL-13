const books = [
    {
        id: '1',
        bookName: 'Nineteen Eighty-Four',
        author: 'George Orwell',
        image: 'https://en.wikipedia.org/wiki/File:1984first.jpg',
        plot: `The story takes place in an imagined future, the year 1984,
        when much of the world has fallen victim to perpetual war, omnipresent government surveillance,
        historical negationism, and propaganda.`
    },
    {
        id: '2',
        bookName: 'Brave New World',
        author: 'Aldous Huxley',
        image: 'https://en.wikipedia.org/wiki/File:BraveNewWorld_FirstEdition.jpg',
        plot: `Largely set in a futuristic World State, whose citizens are environmentally engineered
        into an intelligence-based social hierarchy.`
    },
    {
        id: '3',
        bookName: 'A Clockwork Orange',
        author: 'Anthony Burgess',
        image: 'https://en.wikipedia.org/wiki/File:Clockwork_orange.jpg',
        plot: `It is set in a near-future society that has a youth subculture of extreme violence.
        The teenage protagonist, Alex, narrates his violent exploits 
        and his experiences with state authorities intent on reforming him.`
    }
]

localStorage.setItem('Books', JSON.stringify(books))