import { useState } from "react";
import JournalCard from "./JournalCard";
import JournalModal from "./JournalModal";
import "./JournalCard.css";

const JournalList = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const journalArticles = [
    {
      id: 1,
      image: "/assets/Inspecting-Tesseracts.jpg",
      title: "INSPECTING: TESSERACTS",
      date: "May 28, 2024",
      images: [
        "/assets/Inspecting-Tesseracts-2.jpg",
        // Add more images here as needed
      ],
      content: `Following the release of 'Injure Them', we sat down with TESSERACTS to ask some very important questions...

1. Tell us everything there is to know about your new track "Injure Them"

Frank started the sketch of the track around one year ago. He was just having fun with the halftime groove and sound design. For the main riff he used the double bass recordings he recorded earlier for another project. Of course he had to add tons of processing on it. Then we had solid groove but it lacked something...

Around that time we discovered Vellum and his track "The Trilogy" with Gravity on vocals. We fell in love with the track and Gravity's voice and decided to hit him up.

2. What's the most useful piece of equipment or software in your musical toolkit?

A couple months ago we finally invested in a subwoofer (KRK s8.4). I think this was one of the most important changes for our music to finally hear and feel the sub. Previously we were just using plugins to see how the sub looks like and kinda guess how it sounds. Now we hope this purchase will make us use the low frequencies more creatively and interesting.

3. Where does the name TESSERACTS come from?

Some time ago we had our old music project called "F Square" - because there is two of us and our names start with "F" (Filip and Frank). Then we decided to go into heavier music styles and we came up with "TESSERACTS" because it's like a square or a cube but in 4th dimension - next level.

4. What's your most played song this year?

It's our remix of the legendary song "Shapeshifter" from Need For Speed: Most Wanted 2005 by Celldweller and Styles Of Beyond. The genre of this track is very niche, called NeuroBreaks. We think it's perfect for this remix.

5. What is something that you believe that other people think is insane?

We believe that music is for us instead of us living for the music.

Music gives a lot of really amazing things and experiences but sometimes you can feel like its making you sick. The one thing you have to remember is: you don't have to make music to be happy. Sometimes its better to just stop working on a project or stop pushing just to fulfil your ego.

If I'm working on a track and it doesn't give me joy anymore, I just take a break from it.

6. If you could merge multiple musicians/artists into one super musician/artist, who would you choose?

KOAN Sound, Nitepunk, Alon Mor, Cory Wong, Gareth Coker

TESSERACTS 'Injure Them' (ft. Gravity) is released 23rd May 2024.`,
    },
    {
      id: 2,
      image: "/assets/NUEQ-ZAHARA-1.jpg",
      title: "INSPECTING: NUEQ",
      date: "February 12, 2024",
      images: ["/assets/Inspecting-Nueq-2.jpg"],
      content: `Ahead of the release of 'Zahara' this week, we sat down with NUEQ to ask some very important questions about the EP...

1. Tell us everything there is to know about your new EP "Zahara"

I began composing ''Zahara'' in mid-2022. It was an extremely intense period in all aspects, especially emotionally. I realized that I needed to do something big, without compromise and to direct myself to where I wanted to be.

Undoubtedly, it was the hardest work I've ever done as a producer and as a human being. Every sound and tone was carefully chosen to convey the right emotion and energy.

I learned a lot in the process of creating this EP. Throughout its construction, I lived in four different places around the world (Tel Aviv, Bristol, Mexico, Denver), and gradually got used to producing only with a laptop and headphones (skillful really).

This EP proves to me how much we as humans can push our boundaries more than we think. Working hard and sacrificing is a huge part of artistry and music and in the end it pays off big time.

2. What's the most useful piece of equipment or software in your musical toolkit?

It's really hard to choose... but the most useful tool for me is Ableton's Operator synth. I use it as a source for almost everything!

3. Where does the name NUEQ come from?

When I started producing electronic music (about four and a half years ago), I started with a different name that I realized at some point, was not suitable so I had to come up with a different name.

I tried to think of a name that characterizes the music I create and aspire to create and I started exploring the meanings that planets had in different cultures and religions in the distant past.

Venus caught my attention because seen in both the morning and evening, it symbolizes contrasts like darkness and light, god and devil, hatred and love, etc.
I really connected to that and it's also related to my zodiac sign (Libra)

One of the names Venus has received from the Mayans was Noh-Ek so I took that and played a bit with the letters and from there came NUEQ.

4. What's your most played song this year?

Hiatus Kaiyote - The Lung
I'm addicted to the switch to the second chorus.

5. What is something that you believe that other people think is insane?

Cats are okay, nothing more.

6. If you could merge 2-3 musicians/artists into one super musician/artist, who would you choose?

Yussef Dayes, John Frusciante, Culprate

NUEQ 'Zahara' is released 14th February 2024, as Inspected's 51st release.`,
    },
    {
      id: 3,
      image: "/assets/Vorso-Holonomy-1.jpg",
      title: "INSPECTING: HOLONOMY",
      date: "October 12, 2023",
      images: ["/assets/Holonomy-2.jpg"],
      content: `Ahead of the release of 'Holonomy' next week, we sat down with Vorso to ask some very important questions about the album...

Questions written by Steph Contant.

1. Tell us everything there is to know about 'Holonomy'

Holonomy is the most complete collection of my music I've ever worked on. I actually started this project while working on another huge project which I was taking a break from… I thought it would be fun to start a few singles in the meantime. However, I quickly realised that so much of the music I was making was starting to share a common vibe and I just couldn't separate them into different releases. The project really started coming together during lockdown when I started exploring more of the local area around me and the South coast.


2. Was the whole "20 tracks, no-collaborations" thing intentional?

I didn't set out to make a "no collabs" album… I love working with other musicians! I just found that I had a lot I wanted to say with the album and a lot of styles I wanted to explore, and the scope of the project just kept growing the more I worked on it.


3. Which track from 'Holonomy' holds the most personal significance to you, and why?

That's so hard to say, every tune is very personal and has been with me for such a long time. I would definitely say Power Through has a particular resonance for me. I started that one in Spring 2021, I could feel that the album was taking shape but also that there was still so much left to do. There was this really strong feeling of a goal being closer than ever but still just out of reach - I really wanted to try and communicate that through music.

Both Power Through and Searcher are tracks that are influenced by the album-making process. They both have an aspect to them that I feel like it would have been impossible for me to capture outside of this project.


4. Who did the art for the album? What was the inspiration behind it?

The artwork was created by Ed Cheverton. My partner has a print of one of his artworks which she put up in my music studio, where it has been inspiring my music ever since. I felt like his bold and colourful style would fit well with the themes of the album. He's done such an incredible job on all the artwork for the release - the interior of the vinyl gatefold is just beautiful.

5. What role did Oscar Opiuo have in the project as a whole? (something along the lines of inspiration to support?)

As always Oscar is a huge inspiration to me. It was great to start applying some of the things I learned from working with him to my own music. Definitely really cool to see some of the videos of him playing out tunes from the album, was great to see how they went down live at Red Rocks!


6. Did anything you learned during your computer science degree come in handy while creating 'Holonomy'?

Absolutely! The concept of Holonomy was something we went through in optics / computer vision. Also my final year project involved creating a system to convert body sway during musical performance into a control for effects, which lead me to working with optical flow and the Xbox Kinect to create a gesture-controlled performance system. I love that feeling of physically controlling music which has lead me straight into a modular synth obsession.
 

7. If your DAW could talk, what do you think it would say to you after all the hours you've put into the project?

SMALLER PROJECT FILES PLEASE!!

Vorso 'Holonomy' is released 18th October 2023, as Inspected's 50th release.`,
    },
    {
      id: 4,
      image: "/assets/Donuts1.jpg",
      title: "DONUTS & DINOSAURS",
      date: "June 01, 2023",
      images: [
        "/assets/donuts2.jpg",
        "/assets/Donuts3.jpg",
        "/assets/Donuts4.jpg",
      ],
      content: "Limited drop Donuts & Dinosaurs now LIVE in the store!",
    },
    {
      id: 5,
      image: "/assets/Classics1.jpg",
      title: "CLASSICS 004 COLLECTION",
      date: "April 26, 2023",
      images: [
        "/assets/Classics2.jpg",
        "/assets/Classics3.jpg",
        "/assets/Classics4.jpg",
        "/assets/Classics5.jpg",
      ],
      content:
        "The comfiest tracksuit in the world is back! Limited drop Classics 004 now LIVE in the store.",
    },
    {
      id: 6,
      image: "/assets/Marblevan1.jpg",
      title: "THE MARBLE CAMPER VAN",
      date: "December 07, 2022",
      images: [
        "/assets/Marblevan2.jpg",
        "/assets/Marblevan3.jpg",
        "/assets/Marblevan4.jpg",
        "/assets/Marblevan5.jpg",
        "/assets/Marblevan6.jpg",
        "/assets/Marblevan7.jpg",
        "/assets/Marblevan8.jpg",
      ],
      content:
        "One of a kind. The Marble Camper Van is complete and ready for adventures. Get in touch with us via the Contact form for enquiries.",
    },
    {
      id: 7,
      image: "/assets/Classics003-1.jpg",
      title: "CLASSICS 003 COLLECTION",
      date: "November 23, 2022",
      images: [
        "/assets/Classics003-2.jpg",
        "/assets/Classics003-3.jpg",
        "/assets/Classics003-4.jpg",
      ],
      content:
        "The Classics Reimagined. Limited drop Classics 003 now LIVE in the store.",
    },
    {
      id: 8,
      image: "/assets/Ikea1.jpg",
      title: "THE IKEA TEE",
      date: "November 09, 2022",
      images: [
        "/assets/Ikea2.jpg",
        "/assets/Ikea3.jpg",
        "/assets/Ikea4.jpg",
        "/assets/Ikea5.jpg",
      ],
      content:
        "Winner for our tee design competion, ready to assemble.The Ikea Tee now LIVE in the store, limited run.",
    },
    {
      id: 9,
      image: "/assets/3m-1.jpg",
      title: "THE 3M DESTROY BAG",
      date: "November 02, 2022",
      images: [
        "/assets/3m-2.jpg",
        "/assets/3m-3.jpg",
        "/assets/3m-4.jpg",
        "/assets/3m-5.jpg",
      ],
      content:
        "The 3m Reflective is back, this time in bag form! Limited drop Destroy Bag now LIVE in the store.",
    },
  ];

  const handleCardClick = (article) => {
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
  };

  return (
    <>
      <div className="journal-list">
        {journalArticles.map((article) => (
          <JournalCard
            key={article.id}
            image={article.image}
            title={article.title}
            date={article.date}
            onClick={() => handleCardClick(article)}
          />
        ))}
      </div>

      {selectedArticle && (
        <JournalModal article={selectedArticle} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default JournalList;
