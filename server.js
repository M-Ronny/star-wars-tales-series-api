const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000

app.use(cors())

const tales = {
    'star wars: tales of the jedi': {
        'title': 'Tales of the Jedi',
        'year': 2022,
        'creator': 'Dave Filoni',
        'synopsis': "Set in the time of the Galactic Republic and the early days of the Imperial regime, Tales of the Jedi explores untold moments in the lives of Ahsoka Tano and Count Dooku as the two Jedi come into their power and make drastically divergent decisions on the path to destiny.",
        'totalSeasons': 1,
        'totalEps': 6,
        'directors': ['Saul Ruiz', 'Dave Filoni', 'Charles Murray', 'Nathaniel Villanueva'],
        'cast': ['Corey Burton', 'Ashley Eckstein', 'Dee Bradley Baker', 'Ian McDiarmid', 'Toks Olagundoye', 'Matt Lanter', 'Phil LaMarr', 'Micheál Neeson', 'Sunil Malhotra', 'Janina Gavankar', 'Mark Rolston', 'Brian George', 'James Arnold Taylor', "Terrence 'T.C.' Carson", 'Flo Di Re', 'Liam Neeson', 'Terrell Tilford', 'Bryce Dallas Howard', 'Theo Rossi'],
        'charaters': ['Dooku', 'Ahsoka Tano', 'Captain Rex', 'Jesse', 'Darth Sidious', 'Gantika', 'Anakin Skywalker', 'Bail Organa', 'Qui-Gon Jinn', 'Nak-il', 'Hanel', 'Pav-ti', 'Senator Dagonet', 'Ki-Adi-Mundi', 'Obi-Wan Kenobi', 'Mace Windu', 'Jocasta Nu', 'Semage', "Yaddle", 'Senator Larik'],
        'seasonOne': [
            {
                'title': 'Life and Death',
                'synopsis': 'A child goes through a rite of passage with unexpected results.',
                'date': 'October 26, 2022',
                'director': 'Dave Filoni and Nathaniel Villanueva',
                'writer': 'Dave Filoni'  
            },
            {
                'title': 'Justice',
                'synopsis': 'Two Jedi are dispatched to resolve a kidnapping on a distant planet.',
                'date': 'October 26, 2022',
                'director': 'Dave Filoni and Saul Ruiz',
                'writer': 'Dave Filoni' 
            },
            {
                'title': 'Choices',
                'synopsis': 'Jedi Knights investigate the mysterious death of one of their own.',
                'date': 'October 26, 2022',
                'director': 'Charles Murray',
                'writer': 'Charles Murray and Élan Murray'
            },
            {
                'title': "The Sith Lord",
                'synopsis': 'A Jedi master makes a troubling discovery.',
                'date': 'October 26, 2022',
                'director': 'Saul Ruiz',
                'writer': 'Dave Filoni'
            },
            {
                'title': 'Practice Makes Perfect',
                'synopsis': 'A Jedi Padawan is given a seemingly impossible exercise.',
                'date': 'October 26, 2022',
                'director': 'Saul Ruiz',
                'writer': 'Dave Filoni'
            },
            {
                'title': 'Resolve',
                'synopsis': "A former Jedi is faced with truth that they cannot be something they are not.",
                'date': 'October 26, 2022',
                'director': 'Saul Ruiz',
                'writer': 'Dave Filoni'
            }
        ]
    },
    'star wars: tales of the empire': {
        'title': 'Star Wars: Tales of the Empire',
        'year': 2024,
        'creator': 'Dave Filoni',
        'synopsis': "Tales of the Empire explores how a young Morgan Elsbeth navigates the expanding Imperial world towards a path of vengeance, while former Jedi Barriss Offee does what she must to survive a rapidly changing galaxy. The choices they make will define their destinies.",
        'totalSeasons': 1,
        'totalEps': 6,
        'directors': ['Saul Ruiz', 'Dave Filoni', 'Steward Lee', 'Nathaniel Villanueva'],
        'cast': ['Meredith Salenger', 'Diana Lee Inosanto', 'Rya Kihlstedt', 'Steve Blum', 'Shelby Young', 'Wing T. Chao', 'Katee Sackhoff', 'Zeno Robinson', 'Lars Mikkelsen', 'Matthew Wood', 'Xander Berkeley', 'Lydia Look', 'Tom Konkle', "Nicolas Cantu", 'Daisy Lightfoot', 'Warwick Davis', 'Jason Isaacs'],
        'charaters': ['Barriss Offee', 'Morgan Elsbeth', 'Selena', 'Lyn Rakish (Fourth Sister)', 'Reggi', 'Nadura', 'Wing', 'Bo-Katan Kryze', 'Ahmar', 'Admiral Thrawn', 'General Grievous', 'Gilad Pellaeon', 'Matron', 'Moff Isdain', 'Dante', 'Nali', 'Rukh', 'Grand Inquisitor'],
        'seasonOne': [
            {
                'title': 'The Path of Fear',
                'synopsis': 'Young Morgan Elsbeth seeks revenge after losing everything.',
                'date': 'May 4, 2024',
                'director': 'Dave Filoni and Nathaniel Villanueva',
                'writer': 'Amanda Rose Muñoz'  
            },
            {
                'title': 'The Path of Anger',
                'synopsis': 'Morgan is approached by a potentially powerful ally.',
                'date': 'May 4, 2024',
                'director': 'Dave Filoni and Steward Lee',
                'writer': 'Amanda Rose Muñoz' 
            },
            {
                'title': 'The Path of Hate',
                'synopsis': 'Offered the chance to stand trial for her crimes, Morgan instead seeks her destiny.',
                'date': 'May 4, 2024',
                'director': 'Dave Filoni and Nathaniel Villanueva',
                'writer': 'Amanda Rose Muñoz'
            },
            {
                'title': "Devoted",
                'synopsis': 'Former Jedi Barriss Offee is recruited by the Empire.',
                'date': 'May 4, 2024',
                'director': 'Dave Filoni and Saul Ruiz',
                'writer': 'Nicolas Anastassiou'
            },
            {
                'title': 'Realization',
                'synopsis': 'On a mission to hunt a fugitive, complications change Barriss forever.',
                'date': 'May 4, 2024',
                'director': 'Dave Filoni and Steward Lee',
                'writer': 'Matt Michnovetz'
            },
            {
                'title': 'The Way Out',
                'synopsis': "A shadow from Barriss' past catches up with her.",
                'date': 'May 4, 2024',
                'director': 'Dave Filoni and Nathaniel Villanueva',
                'writer': 'Matt Michnovetz'
            }
        ]
    },
    'star wars: tales of the underworld': {
        'title': 'Star Wars: Tales of the Underworld',
        'year': 2025,
        'creator': 'Dave Filoni',
        'synopsis': "Tales of the Underworld continues the story of former assassin and bounty hunter Asajj Ventress, who is given a new chance at life and must go on the run with an unexpected new ally. Meanwhile, outlaw Cad Bane faces his past when he confronts an old friend, now a Marshal on the opposite side of the law.",
        'totalSeasons': 1,
        'totalEps': 6,
        'directors': ['Saul Ruiz', 'Steward Lee', 'Nathaniel Villanueva'],
        'cast': ['Nika Futterman', 'David W. Collins', 'Lane Factor', 'Corey Burton', 'Philip Anthony-Rodriguez', 'Artt Butler', 'Dawn-Lyen Gardner', 'A.J. LoCascio', 'Tudi Roche', 'Barbara Goodson', 'Idris Keith', 'Al Rodrigo', "Clare Grant", 'Jason Hightower'],
        'charaters': ['Asajj Ventress', 'Bilk', 'Kingpin', 'Lyco Strata', 'Cad Bane', 'Lazlo', 'Niro', 'Arin', 'Colby', 'Cort', 'Mother Talzin', 'Isaac', 'Quinlan Vos', 'Latts Razzi', 'Tay Grutty'],
        'seasonOne': [
            {
                'title': 'A way Forward',
                'synopsis': 'Asajj Ventress reluctantly teams up with an unexpected new ally.',
                'date': 'May 4, 2025',
                'director': 'Saul Ruiz',
                'writer': 'Matt Michnovetz'  
            },
            {
                'title': 'Friends',
                'synopsis': 'A risky opportunity puts Ventress in the crosshairs of the Empire.',
                'date': 'May 4, 2025',
                'director': 'Steward Lee',
                'writer': 'Matt Michnovetz' 
            },
            {
                'title': 'One Warrior to Another',
                'synopsis': 'Ventress finds herself in the middle of local dispute on a backwater planet.',
                'date': 'May 4, 2025',
                'director': 'Nathaniel Villanueva',
                'writer': 'Matt Michnovetz'
            },
            {
                'title': "The Good Life",
                'synopsis': "Two young friends get caught up in a gangster's scheme",
                'date': 'May 4, 2025',
                'director': 'Saul Ruiz',
                'writer': 'Matt Michnovetz'
            },
            {
                'title': 'A Good Turn',
                'synopsis': 'Bane reunites with an old friend who is on the opposite side of the law.',
                'date': 'May 4, 2025',
                'director': 'Steward Lee',
                'writer': 'Matt Michnovetz'
            },
            {
                'title': 'One Good Deed',
                'synopsis': "Cad Bane and his gang return home to settle a score.",
                'date': 'May 4, 2025',
                'director': 'Nathaniel Villanueva',
                'writer': 'Matt Michnovetz'
            }
        ]
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:title', (request, response) => {
    const title = request.params.title.toLowerCase()

    if (tales[title]) {
        response.json(tales[title])
    } else {
        response.json('Title does not exist')
    }
})

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}!`)
})