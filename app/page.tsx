import React from "react";
import {Feed} from "@/components/feed";
import Sidemenu from "@/components/sidemenu";



const videos = [
  {'title':'10 Life Hacks Every Student Should Know','thumbnail':'https://via.placeholder.com/256x192','creator':'https://via.placeholder.com/40x40','views':'10k views', 'ln':'https://youtu.be/dQw4w9WgXcQ?feature=shared'},
  {'title':'Exploring Abandoned Places: Creepy Adventure','thumbnail':'https://via.placeholder.com/256x192','creator':'https://via.placeholder.com/40x40','views':'100k views', 'ln':'https://youtu.be/dQw4w9WgXcQ?feature=shared'},
  {'title':'Cooking Tutorial: How to Make the Perfect Pizza','thumbnail':'https://via.placeholder.com/256x192','creator':'https://via.placeholder.com/40x40','views':'50k views', 'ln':'https://youtu.be/dQw4w9WgXcQ?feature=shared'},
  {'title':'Travel Vlog: Exploring Tokyo, Japan','thumbnail':'https://via.placeholder.com/256x192','creator':'https://via.placeholder.com/40x40','views':'20k views', 'ln':'https://youtu.be/dQw4w9WgXcQ?feature=shared'},
  {'title':'DIY Home Decor: Easy and Affordable Ideas','thumbnail':'https://via.placeholder.com/256x192','creator':'https://via.placeholder.com/40x40','views':'30k views', 'ln':'https://youtu.be/dQw4w9WgXcQ?feature=shared'},
  {'title':'Fitness Challenge: 30-Day Workout Plan','thumbnail':'https://via.placeholder.com/256x192','creator':'https://via.placeholder.com/40x40','views':'80k views', 'ln':'https://youtu.be/dQw4w9WgXcQ?feature=shared'},
  {'title':'Funny Cat Videos Compilation 2024','thumbnail':'https://via.placeholder.com/256x192','creator':'https://via.placeholder.com/40x40','views':'150k views', 'ln':'https://youtu.be/dQw4w9WgXcQ?feature=shared'},
  {'title':'Interview with a Celebrity: Behind the Scenes','thumbnail':'https://via.placeholder.com/256x192','creator':'https://via.placeholder.com/40x40','views':'70k views', 'ln':'https://youtu.be/dQw4w9WgXcQ?feature=shared'},
  {'title':'Gaming Livestream: Playing the Latest Releases','thumbnail':'https://via.placeholder.com/256x192','creator':'https://via.placeholder.com/40x40','views':'90k views', 'ln':'https://youtu.be/dQw4w9WgXcQ?feature=shared'},
  {'title':'Learning a New Language: Tips and Tricks','thumbnail':'https://via.placeholder.com/256x192','creator':'https://via.placeholder.com/40x40','views':'40k views', 'ln':'https://youtu.be/dQw4w9WgXcQ?feature=shared'},
  {'title':'Documentary: The History of Ancient Egypt','thumbnail':'https://via.placeholder.com/256x192','creator':'https://via.placeholder.com/40x40','views':'60k views', 'ln':'https://youtu.be/dQw4w9WgXcQ?feature=shared'},
  {'title':'Fashion Haul: Spring 2024 Trends','thumbnail':'https://via.placeholder.com/256x192','creator':'https://via.placeholder.com/40x40','views':'120k views', 'ln':'https://youtu.be/dQw4w9WgXcQ?feature=shared'},
  {'title':'Motivational Speech: Overcoming Adversity','thumbnail':'https://via.placeholder.com/256x192','creator':'https://via.placeholder.com/40x40','views':'200k views', 'ln':'https://youtu.be/dQw4w9WgXcQ?feature=shared'},
  {'title':'Tech Review: Best Gadgets of the Year','thumbnail':'https://via.placeholder.com/256x192','creator':'https://via.placeholder.com/40x40','views':'180k views', 'ln':'https://youtu.be/dQw4w9WgXcQ?feature=shared'},
  {'title':'Music Production Tutorial: Making Beats','thumbnail':'https://via.placeholder.com/256x192','creator':'https://via.placeholder.com/40x40','views':'250k views', 'ln':'https://youtu.be/dQw4w9WgXcQ?feature=shared'},
  {'title':'Productivity Tips: How to Get More Done in Less Time','thumbnail':'https://via.placeholder.com/256x192','creator':'https://via.placeholder.com/40x40','views':'300k views', 'ln':'https://youtu.be/dQw4w9WgXcQ?feature=shared'},
  {'title':'Cute Puppy Compilation: Heartwarming Moments','thumbnail':'https://via.placeholder.com/256x192','creator':'https://via.placeholder.com/40x40','views':'50k views', 'ln':'https://youtu.be/dQw4w9WgXcQ?feature=shared'},
  {'title':'Photography Tips for Beginners','thumbnail':'https://via.placeholder.com/256x192','creator':'https://via.placeholder.com/40x40','views':'70k views', 'ln':'https://youtu.be/dQw4w9WgXcQ?feature=shared'},
  {'title':'Book Review: Must-Reads of the Year','thumbnail':'https://via.placeholder.com/256x192','creator':'https://via.placeholder.com/40x40','views':'90k views', 'ln':'https://youtu.be/dQw4w9WgXcQ?feature=shared'},
  {'title':'Health and Wellness: Self-Care Tips for Busy People','thumbnail':'https://via.placeholder.com/256x192','creator':'https://via.placeholder.com/40x40','views':'120k views', 'ln':'https://youtu.be/dQw4w9WgXcQ?feature=shared'},
  {'title':'Car Maintenance 101: Essential Tips for Drivers','thumbnail':'https://via.placeholder.com/256x192','creator':'https://via.placeholder.com/40x40','views':'80k views', 'ln':'https://youtu.be/dQw4w9WgXcQ?feature=shared'},
  {'title':'Art Challenge: Drawing in Different Styles','thumbnail':'https://via.placeholder.com/256x192','creator':'https://via.placeholder.com/40x40','views':'150k views', 'ln':'https://youtu.be/dQw4w9WgXcQ?feature=shared'},
  {'title':'Nature Documentary: Exploring the Rainforest','thumbnail':'https://via.placeholder.com/256x192','creator':'https://via.placeholder.com/40x40','views':'200k views', 'ln':'https://youtu.be/dQw4w9WgXcQ?feature=shared'},
  {'title':'Cooking Challenge: Trying Exotic Recipes','thumbnail':'https://via.placeholder.com/256x192','creator':'https://via.placeholder.com/40x40','views':'250k views', 'ln':'https://youtu.be/dQw4w9WgXcQ?feature=shared'},
  {'title':'Fitness Transformation: My Journey to a Healthier Lifestyle','thumbnail':'https://via.placeholder.com/256x192','creator':'https://via.placeholder.com/40x40','views':'300k views', 'ln':'https://youtu.be/dQw4w9WgXcQ?feature=shared'}
];
  


export default function home(){

  return (
    <main className="flex pt-16">
      <Sidemenu></Sidemenu>
      <Feed videos={videos}></Feed>
      
    </main>
  )
}
