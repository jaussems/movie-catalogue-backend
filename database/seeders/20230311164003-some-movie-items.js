'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("movie_items", [
      {
        "genre_ids": [
          28,
          12,
          878
        ],
        "id": 505642,
        "overview": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
        "poster_path": "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
        "release_date": "2022-11-09",
        "title": "Black Panther: Wakanda Forever",
        "vote_average": 7.4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 646389,
        "overview": "After a heroic job of successfully landing his storm-damaged aircraft in a war zone, a fearless pilot finds himself between the agendas of multiple militias planning to take the plane and its passengers hostage.",
        "poster_path": "/qi9r5xBgcc9KTxlOLjssEbDgO0J.jpg",
        "release_date": "2023-01-12",
        "title": "Plane",
        "vote_average": 6.9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "genre_ids": [
          16,
          12,
          35,
          10751
        ],
        "id": 315162,
        "overview": "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        "poster_path": "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        "release_date": "2022-12-07",
        "title": "Puss in Boots: The Last Wish",
        "vote_average": 8.4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "genre_ids": [
          878,
          12,
          28
        ],
        "id": 76600,
        "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
        "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
        "release_date": "2022-12-14",
        "title": "Avatar: The Way of Water",
        "vote_average": 7.7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "genre_ids": [
          12,
          878,
          35
        ],
        "id": 640146,
        "overview": "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
        "poster_path": "/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg",
        "release_date": "2023-02-15",
        "title": "Ant-Man and the Wasp: Quantumania",
        "vote_average": 6.4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "genre_ids": [
          878,
          28,
          12
        ],
        "id": 843794,
        "overview": "On an uninhabitable 22nd-century Earth, the outcome of a civil war hinges on cloning the brain of an elite soldier to create a robot mercenary.",
        "poster_path": "/z2nfRxZCGFgAnVhb9pZO87TyTX5.jpg",
        "release_date": "2023-01-20",
        "title": "JUNG_E",
        "vote_average": 6.3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "genre_ids": [
          28,
          12,
          14,
          878
        ],
        "id": 19995,
        "overview": "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
        "poster_path": "/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
        "release_date": "2009-12-15",
        "title": "Avatar",
        "vote_average": 7.6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "genre_ids": [
          14,
          10751,
          35,
          12
        ],
        "id": 852096,
        "overview": "After Kevin finds a ghost named Ernest haunting his new home, he becomes an overnight social media sensation. But when Kevin and Ernest go rogue to investigate the mystery of the latter's past, they become targets of the CIA.",
        "poster_path": "/xo0fgAUoEeVQ7KsKeMWypyglvnf.jpg",
        "release_date": "2023-02-24",
        "title": "We Have a Ghost",
        "vote_average": 6.6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "genre_ids": [
          14,
          28,
          12,
          53
        ],
        "id": 736526,
        "overview": "Deep inside the mountain of Dovre, something gigantic awakens after being trapped for a thousand years. Destroying everything in its path, the creature is fast approaching the capital of Norway. But how do you stop something you thought only existed in Norwegian folklore?",
        "poster_path": "/9z4jRr43JdtU66P0iy8h18OyLql.jpg",
        "release_date": "2022-12-01",
        "title": "Troll",
        "vote_average": 6.7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "genre_ids": [
          878,
          27,
          12,
          28
        ],
        "id": 1013870,
        "overview": "All Gary wants is to make awesome home movies with his best buds. All his older sister Samantha wants is to hang with the cool kids. When their parents head out of town one Halloween weekend, an all-time rager of a teen house party turns to terror when aliens attack, forcing the siblings to band together to survive the night.",
        "poster_path": "/wQ53sO5n9LCFbssV3oQ4CuajL1L.jpg",
        "release_date": "2023-01-20",
        "title": "Kids vs. Aliens",
        "vote_average": 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "genre_ids": [
          28,
          12,
          878
        ],
        "id": 634649,
        "overview": "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
        "poster_path": "/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg",
        "release_date": "2021-12-15",
        "title": "Spider-Man: No Way Home",
        "vote_average": 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "genre_ids": [
          16,
          10751,
          12,
          35
        ],
        "id": 599019,
        "overview": "It has been a year since Mic Mic and Oscar returned from their incredible adventure. And now, after a diabolical plan by Vulture to sabotage the delivery of the Grizzly cub to his opponent in the American presidential elections, Mic Mic, Oscar, Panda teenager and Stork set off on another great adventure as they ride a zeppelin to return little Grizzly to its rightful parents and save the American elections and the whole continent from an erupting volcano.",
        "poster_path": "/dabXVfrAFfhDte8XVemom3mTJog.jpg",
        "release_date": "2022-10-07",
        "title": "Big Trip 2: Special Delivery",
        "vote_average": 6.4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "genre_ids": [
          16,
          12,
          14,
          35
        ],
        "id": 947938,
        "overview": "When a plane crashes at sea, dolphins rescue a little boy and raise him as family. He lives a carefree life beneath the waves until an evil monster seizes power over the underwater world. The boy is banished to dry land, where a kind-hearted captain takes him in. With the captain’s help, the boy sets out on a journey to solve the mystery of his true identity.",
        "poster_path": "/gISoDEiaUH9BNEunmLC7FgUVaia.jpg",
        "release_date": "2022-04-07",
        "title": "Dolphin Boy",
        "vote_average": 6.4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "genre_ids": [
          12,
          28,
          878
        ],
        "id": 507086,
        "overview": "Four years after the destruction of Isla Nublar, Biosyn operatives attempt to track down Maisie Lockwood, while Dr Ellie Sattler investigates a genetically engineered swarm of giant insects.",
        "poster_path": "/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
        "release_date": "2022-06-01",
        "title": "Jurassic World Dominion",
        "vote_average": 6.9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "genre_ids": [
          12,
          10751,
          14
        ],
        "id": 411,
        "overview": "Siblings Lucy, Edmund, Susan and Peter step through a magical wardrobe and find the land of Narnia. There, they discover a charming, once peaceful kingdom that has been plunged into eternal winter by the evil White Witch, Jadis. Aided by the wise and magnificent lion, Aslan, the children lead Narnia into a spectacular, climactic battle to be free of the Witch's glacial powers forever.",
        "poster_path": "/iREd0rNCjYdf5Ar0vfaW32yrkm.jpg",
        "release_date": "2005-12-07",
        "title": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
        "vote_average": 7.1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "genre_ids": [
          16,
          28,
          12,
          14,
          53
        ],
        "id": 635302,
        "overview": "Tanjiro Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyojuro Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!",
        "poster_path": "/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
        "release_date": "2020-10-16",
        "title": "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
        "vote_average": 8.3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "genre_ids": [
          16,
          12,
          35,
          10751
        ],
        "id": 573171,
        "overview": "Follow the adventures of Toto and his family, who will have to travel to the South Pole to fulfill their promise to return a polar bear and some Spanish penguins to their home. In order to fulfill the promise, they will have to overcome some obstacles that will teach them how important teamwork is.",
        "poster_path": "/gBBCBMXKzWRADtliUYfV69aVIcz.jpg",
        "release_date": "2022-12-14",
        "title": "A Frozen Rooster",
        "vote_average": 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "genre_ids": [
          16,
          10751,
          12,
          878
        ],
        "id": 877269,
        "overview": "A journey deep into an uncharted and treacherous land, where fantastical creatures await the legendary Clades—a family of explorers whose differences threaten to topple their latest, and by far most crucial, mission.",
        "poster_path": "/fHMqfsYyl3lskPK2RiFRwhzwuep.jpg",
        "release_date": "2022-11-23",
        "title": "Strange World",
        "vote_average": 6.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "genre_ids": [
          28,
          12,
          10751,
          35
        ],
        "id": 675353,
        "overview": "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
        "poster_path": "/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
        "release_date": "2022-04-08",
        "title": "Sonic the Hedgehog 2",
        "vote_average": 7.6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "genre_ids": [
          12,
          28,
          878
        ],
        "id": 299536,
        "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
        "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        "release_date": "2018-04-25",
        "title": "Avengers: Infinity War",
        "vote_average": 8.3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }

    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("movie_items", null, {});
  }
};
