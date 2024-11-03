interface Project {
  title: string;
  mainImage: string;
  description: string;
  text: string;
  takeaway: string;
  technologies: string[];
  images: string[];
  githublink: string | null;
  downloadLink: string | null;
}

const ProjectData: Project[] = [
  {
    title: "Sonar - 3D mapping of lake bed",
    mainImage: "/sonar/im6.jpg",
    description:
      "Device for recording depth and location data and a python script for plotting 3D graphs",
    text: `At The core of this unit is Raspberry pie 2B, which is responsible for handling all the logic and controlling of the sensors as well as saving that information on a USB stick that can be later plugged into a computer for speedy and reliable data transfer.;

The device gathers data from a JSN-SR04T ultrasonic distance sensor measuring up to 6 meters (24 meters when submerged, considering speed of sound underwater ). GPS NEO6 module that streams current location. The controlling script gathers data each time GPS ping is received which triggers depth reading, these data are then paired and saved to the USB in a text file. ;

Inside the USB we find a file with all the data we measured and a python script that is responsible for displaying this data. After the script is started, first, the data is loaded from the text file into a numpy  array, after which, they are normalized.;

Normalization consists of differentiating the GPS data, so that the smallest latitude and longitude become zero, then the degrees are translated to meters and lastly we remove data points exceeding the set maximal difference between following points to minimize the display of false readings.;

After all this we are able to plot this data on a matplotlib graph configured to add a trisurf, which can be imagined as pulling a cloth over all 3D data points which creates a human readable graph of any structure. ;

Data for the graph can also be gathered from Google Earth Pro and therefore we can also create plots of any terrestrial structures.


`,
    takeaway:
      "Very effective however somewhat time consuming as with the cheap transducers phasing of the sonar beam is nearly impossible and therefore measurements are only singular points.",
    technologies: [
      "Python",
      "Raspberry Pi",
      "GPS",
      "Ultrasonic transducer",
      "Pyplot",
      "Numpy",
      "Matplotlib",
    ],
    images: [
      "/sonar/im1.png",
      "/sonar/im2.JPG",
      "/sonar/im3.jpeg",
      "/sonar/im5.jpeg",
      "/sonar/im6.jpg",
      "/sonar/im7.jpg",
      "/sonar/im8.jpg",
      "/sonar/im9.jpg",
      "/sonar/im10.jpg",
      "/sonar/gif1.gif",
    ],
    githublink: "https://github.com/kikosolovic/SONAR",
    downloadLink: "/sonar/docs.pdf",
  },
  {
    title: "Autonomous Cricket Farm",
    mainImage: "/farm/im3.jpg",
    description: "Farming crickets as an alternative protein source",
    text: `A big cage with automated feeding and watering as well as temperature control.
Based on inputs from a water level sensor and a temperature sensor, Raspberry Pie controls relays turning on and off the water pump and heating cables to achieve optimal conditions for growth.`,
    takeaway:
      "Very tasty when fried however farming turns out to be very inefficient because of low temperatures in Slovakia during winter",
    technologies: ["Raspberry Pi", "Python", "Various sensors"],
    images: [
      "/farm/im1.jpg",
      "/farm/im2.jpg",
      "/farm/im3.jpg",
      "/farm/im4.jpg",
      "/farm/im5.jpg",
      "/farm/im6.jpg",
      "/farm/im7.JPG",
    ],
    githublink: null,
    downloadLink: null,
  },
  {
    title: "ML AAPL stock prediction model",
    mainImage: "/spmodel/im2.png",
    description:
      "Predicting future stock price movements based on historical data",
    text: `Using Keras model from Tensorflow library,  the model is trained on historical high price movement of Apple stock. The train and test datasets are created as pairs of current high price and the high prices of the past 30 days. This way, the model is presented with last months prices and is supposed to estimate future high prices based on the firing of simulated neurons inside the neural net.;
Even despite the fact that there are numerous other factors influencing the price and also that the preceding price has very little influence on future price, it was still very interesting to create a model that could estimate anything at all.
I believe that the model could be somewhat accurate in certain scenarios. For example, if the scope of the data is changed to evaluate prices within a day instead of a month, there could be some recognizable patterns emerging.

`,
    takeaway:
      "Since it has already been more than 20 days from creation of this model it is safe to say that the model largely exadurated the market potential. As such, it is not suitable for production use and probably needs much more data.",
    technologies: ["Python", "Jupyter Notebook", "Tensorflow", "Numpy"],
    images: ["/spmodel/im3.png", "/spmodel/im1.png", "/spmodel/im4.png"],
    githublink: "https://github.com/kikosolovic/stock-prediction-model",
    downloadLink: null,
  },
  {
    title: "Portfolio Website",
    mainImage: "/portfolio/im4.png",
    description:
      "Website for showcasing my projects and skills, hosting on oracle VPS with docker and nginx",
    text: `This website is hosted on oracles VPS , domains DNS is configured to point  to this server which is located in Amsterdam. ;
Nginx is responsible for self signing and renewal of ssl certificate and also acts as a reverse proxy to point to a local port on which my dockerized Next.js code is running.`,
    takeaway: "This is a text not project",
    technologies: ["Next.js", "Docker", "Nginx", "Oracle cloud"],
    images: ["/portfolio/im1.png", "/portfolio/im2.png"],
    githublink: "https://github.com/kikosolovic/portfolio",
    downloadLink: null,
  },
  {
    title: "Store app",
    mainImage: "/shop/im1.png",
    description:
      "Simple store app with shopping cart, rating and comment functionalities, sqlite database with faker data  ",
    text: `This Store App, built with Next.js, provides a seamless shopping experience with a range of functionalities. Users can browse products, add items to a shopping cart, and manage their selections with ease. The application includes robust rating and comment features, allowing customers to share their feedback and experiences on individual products, enhancing community interaction.;
The backend is powered by an SQLite database populated with fake data using the Faker library, enabling quick testing and development without needing real data.`,
    takeaway: "This is a text not project",
    technologies: ["Next.js", "Faker", "Tailwind", "SQLite"],
    images: ["/shop/im2.png", "/shop/im3.png"],
    githublink: "https://github.com/kikosolovic/prax-nextjs",
    downloadLink: null,
  },
  {
    title: "Chat System",
    mainImage: "/chatsystem/im3.png",
    description:
      "Web application simulating chat rooms between users loaded from external api",
    text: `This web application simulates chat rooms between users, dynamically loading data from an external API. It provides an interactive platform where users can join different chat rooms, communicate in real-time, and experience the essence of online discussions.`,
    takeaway: "This is a text not project",
    technologies: ["Angular", "JSX", "SQL Server", "StackBlitz"],
    images: ["/chatsystem/im1.png", "/chatsystem/im2.png"],
    githublink: "https://github.com/kikosolovic/ChatSystem",
    downloadLink: null,
  },
  {
    title: "Selenium Instagram Automation",
    mainImage: "/bot/im3.gif",
    description:
      "Gathering data from Instagram, content automation with Selenium",
    text: "Controlling html elements using a python library to automate mundane tasks of content creators.",
    takeaway: "This is a text not project",
    technologies: ["Selenium", "Python", "Pyautogui"],
    images: ["/bot/im1.jpg", "/image2.jpg"],
    githublink: "https://github.com/kikosolovic/instagram-bot/tree/save",
    downloadLink: null,
  },
  {
    title: "E-kniznica",
    mainImage: "/ekniznica/im1.gif",
    description: "Web app to keep track of school library",
    text: `Interactive database of school library books, with a wishlist and user accounts written in PHP. `,
    takeaway: "This is a text not project",
    technologies: ["PHP", "SQL", "PHPMyAdmin", "XMAPP"],
    images: ["/ekniznica/im3.png", "/ekniznica/im2.png"],
    githublink: "https://github.com/kikosolovic/e-kniznica",
    downloadLink: null,
  },
  {
    title: "Scala Api calls",
    mainImage: "/scala/im3.png",
    description: "External API calls in Scala and creation of api endpoints",
    text: `Creating an internal API endpoint that calls an external API whenever a client request is made. Also making the client and communicating with query Database to eliminate unnecessary calls.`,
    takeaway: "This is a text not project",
    technologies: ["Scala", "Rest-Api", "Jet Brains IDE"],
    images: ["/scala/im2.png", "/scala/im1.png"],
    githublink: "https://github.com/kikosolovic/skola-prax",
    downloadLink: null,
  },
  {
    title: "Blog App",
    mainImage: "/asp/im1.jpeg",
    description: "Web application for managing blog posts",
    text: "Blog app using C# ASP.NET, SQL Server and Entity Framework.",
    takeaway: "This is a text not project",
    technologies: ["ASP.NET", "C#", "SQL Server"],
    images: ["/asp/im1.jpeg", "/asp/im2.jpeg"],
    githublink: "https://github.com/kikosolovic/BlogApp",
    downloadLink: null,
  },
];
export default ProjectData;
