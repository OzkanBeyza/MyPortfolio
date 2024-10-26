import self from "../img/self.png"
import mock1 from "../img/mock1.png"


export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


export const info = {
    firstName: "Beyza",
    lastName: "OZKAN",
   // initials: "Me", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Software Engineer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '📝',
            text: 'At Hasan Kalyoncu University'
        },
        {
            emoji: "💼",
            text: "Software Engineering Student"
        },
        {
            emoji: "📧",
            text: "byznozkn@gmail.com"
        }
    ],
    socials: [
      
        {
            link: "https://www.instagram.com/byzn_ozkn/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/OzkanBeyza",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/beyza-%C3%B6zkansoftware/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
      
    ],
    bio: "Hello, I am Beyza. I am a Software Engineering student at Hasan Kalyoncu University. I am a responsible person who is open to learning. I work diligently and patiently in the process towards my goal.",
    skills:
        {
            proficientWith: ['javascript', 'html5', 'CSS', 'figma', 'SQLite', 'C', 'C++','English', 'pyqt5', 'python', 
                'react', 'react-native', 'django'],
            exposedTo: ['nodejs' ]
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'research',
            emoji: '🔎'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        },
        {
            label: 'listening',
            emoji: '🎧'
        }

    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://cdn.t3kys.com/media/upload/userFormUpload/igLs5THJGoxg1HaxCXt71AMe21y0xEhw.jpg", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            //source: "", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
       
    ]
}