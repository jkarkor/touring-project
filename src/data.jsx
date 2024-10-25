import tourone from "./images/tour-1.jpeg"
import tourtwo from "./images/tour-2.jpeg"
import tourthree from "./images/tour-3.jpeg"
import tourfour from "./images/tour-4.jpeg"
import tourfive from "./images/tour-5.jpeg"
import toursex from "./images/tour-6.jpeg"
//nav links
export const pageLinks =[
{ id: 1, href: '#home', text:  'home'}, 
{ id: 2, href: '#about', text:  'about'}, 
{ id: 3, href: '#services', text:  'services'}, 
{ id: 4, href: '#tours', text:  'tours'}, 

]

// Social media links
export const socialLinks = [
    { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-twitter'},
    { id: 2, href: 'https://www.facebook.com', icon: 'fab fa-facebook'},
    { id: 3, href: 'https://www.squarespace', icon: 'fab fa-squarespace'},
];

// services Features links
export const services = [
 {id: 1, icon: "fa fa-wallet fa-fw", title: "saving money",text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia."},
 {id: 2, icon: "fas fa-tree fa-fw", title: "endless hiking",text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia."},
 {id: 3, icon: "fas fa-socks fa-fw", title: "amazing comfort",text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia."}
]

// services Features links 2
export const tours = [
     {id: 1, 
        image:tourone, 
        date: "August 26th, 2020",
        title:"Tibet Adventure", 
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia", 
        location: "china",
        duration: "6 days",
        cost: "$2100",
    },

    {id: 2, 
       image:  tourtwo, 
       date: "october 1th, 2020",
       title:"best of java", 
       info: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia", 
       location: "indonesia",
       duration: "11 days",
       cost: "$1400",
   },
 
    {id: 3, 
       image: tourthree, 
       date: "september 15th, 2020",
       title:"explore hong kong", 
       info: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia", 
       location: "hong kong",
       duration: "8 days",
       cost: "$5000",
   },

    {id: 4, 
       image: tourfour, 
       date: "December 5th, 2019",
       title:"kenya highlights", 
       info: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia", 
       location: "kenya",
       duration: "20 days",
       cost: "$3300",
   },
    {id: 5, 
       image: tourfive, 
       date: "March 5th, 2024",
       title:"Ganta at Night", 
       info: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia", 
       location: "Gnata City",
       duration: "5 days",
       cost: "$6000",
   },
    {id: 6, 
       image: toursex, 
       date: "December 1th, 2022",
       title:"Monrovia highlights", 
       info: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia", 
       location: "Monrovia",
       duration: "10 days",
       cost: "$1300",
   },
]