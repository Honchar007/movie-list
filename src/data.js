const data = [
  {
    id: 1,
    name: 'The Mechanic',
    img: 'https://images-na.ssl-images-amazon.com/images/I/5147KKVUmkL._SX342_.jpg',
    description:
      'Statham stars as Arthur Bishop, a professional assassin who specializes in making his hits look like accidents, suicides, or the acts of petty criminals.',
    year: 2010,
    genres: ['action', 'crime', 'USA'],
    director: 'Simon West',
    starring: [
      'Jason Statham',
      'Ben Foster',
      'Donald Sutherland',
      'Tony Goldwyn',
    ],
  },
  {
    id: 2,
    name: 'Three Billboards Outside Ebbing, Missouri',
    img: 'https://upload.wikimedia.org/wikipedia/en/c/c7/Three_Billboards_Outside_Ebbing%2C_Missouri_poster.png',
    description:
      "A mother personally challenges the local authorities to solve her daughter's murder when they fail to catch the culprit.",
    year: 2017,
    genres: ['Comedy', 'Crime', 'Drama'],
    director: 'Martin McDonagh',
    starring: ['Frances McDormand', 'Woody Harrelson', 'Sam Rockwell'],
  },
  {
    id: 3,
    name: 'The Matrix',
    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg',
    description:
      'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    year: 1999,
    genres: ['Action', 'Sci-Fi'],
    director: 'Lana Wachowski',
    starring: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
  },
  {
    id: 4,
    name: 'Interstellar',
    img: 'https://cdn7.antedote.com/wp-content/uploads/2014/12/interstellar-poster.jpg',
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    year: 2014,
    genres: ['Adventure', 'Drama', 'Sci-Fi'],
    director: 'Christopher Nolan',
    starring: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
  },
  {
    id: 5,
    name: 'The Expendables',
    img: 'https://is4-ssl.mzstatic.com/image/thumb/Video49/v4/c7/eb/a2/c7eba221-510f-c3bf-2775-71c388110c1b/pr_source.lsr/268x0w.png',
    description:
      'A CIA operative hires a team of mercenaries to eliminate a Latin dictator and a renegade CIA agent.',
    year: 2010,
    genres: ['Action', 'Adventure', 'Thriller'],
    director: 'Sylvester Stallone',
    starring: ['Sylvester Stallone', 'Jason Statham', 'Jet Li'],
  },
  {
    id: 6,
    name: 'Once Upon a Time in Hollywood',
    img: 'https://vinyla.com/files/products/various-artists-quentin-tarantinos-once-upon-a-time-in-hollywood.1280x1280.jpg?4c6eb144294b125cd575a94eb91afcd0',
    description:
      "A faded television actor (Leonardo DiCaprio) and his longtime stunt double (Brad Pitt) strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
    year: 2019,
    genres: ['Comedy', 'Drama'],
    director: 'Quentin Tarantino',
    starring: [
      'Leonardo DiCaprio',
      'Brad Pitt',
      'Margot Robbie',
      'Emile Hirsch',
    ],
  },
  {
    id: 7,
    name: 'Ford v Ferrari',
    img: 'https://m.media-amazon.com/images/M/MV5BYzcyZDNlNDktOWRhYy00ODQ5LTg1ODQtZmFmZTIyMjg2Yjk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_SX675_AL_.jpg',
    description:
      'American car designer Carroll Shelby and driver Ken Miles battle corporate interference, the laws of physics and their own personal demons to build a revolutionary race car for Ford and challenge Ferrari at the 24 Hours of Le Mans in 1966.',
    year: 2019,
    genres: ['Action', 'Drama', 'Sport', 'Biography'],
    director: 'James Mangold',
    starring: ['Matt Damon', 'Christian Bale', 'Jon Bernthal'],
  },
  {
    id: 8,
    name: 'Joker',
    img: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    description:
      'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.',
    year: 2019,
    genres: ['Crime', 'Drama', 'Thriller'],
    director: 'Todd Phillips',
    starring: ['Joaquin Phoenix', 'Robert De Niro', 'Zazie Beetz'],
  },
  {
    id: 9,
    name: 'Bad Boys for Life',
    img: 'https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    description:
      'The Bad Boys Mike Lowrey and Marcus Burnett are back together for one last ride in the highly anticipated Bad Boys for Life.',
    year: 2020,
    genres: ['Action', 'Crime', 'Drama', 'Thriller'],
    director: 'Adil El Arbi',
    starring: ['Will Smith', 'Martin Lawrence', 'Vanessa Hudgens'],
  },
  {
    id: 10,
    name: 'John Wick: Chapter 3 - Parabellum ',
    img: 'https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SY1000_CR0,0,648,1000_AL_.jpg',
    description:
      "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
    year: 2019,
    genres: ['Action', 'Crime', 'Thriller'],
    director: 'Chad Stahelski',
    starring: ['Keanu Reeves', 'Halle Berry', 'Ian McShane'],
  },
];

export default data;
