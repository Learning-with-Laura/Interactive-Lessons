// Academy Dollars are fictional. Integer cents prevent rounding errors. Photos are illustrative, not real sale listings.
const raw={
  "candy": [
    [
      "Skittles",
      250,
      "Skittles-Candies-Pile.jpg",
      "Evan-Amos"
    ],
    [
      "KitKat",
      200,
      "Kit-Kat-Split.jpg",
      "Evan-Amos"
    ],
    [
      "Sour Patch Kids",
      300,
      "Sour-Patch-Kids.jpg",
      "Evan-Amos"
    ],
    [
      "Reese’s Peanut Butter Cups",
      225,
      "Reeses-PB-Cups.jpg",
      "Evan-Amos"
    ]
  ],
  "dessert": [
    [
      "Chocolate cake and ice cream",
      950,
      "Chocolate cake and ice cream.jpg"
    ],
    [
      "Chocolate cheesecake",
      850,
      "Chocolate cheese cake.jpg",
      "MohammadHuzam"
    ],
    [
      "Chocolate lava cake",
      1200,
      "Molten Chocolate Cake with Ice Cream.jpg"
    ],
    [
      "Waffle and ice cream",
      1050,
      "Chocolate Waffle Ice Cream.jpg",
      "Cendy00"
    ]
  ],
  "skate": [
    [
      "Penny cruiser",
      6500,
      "Penny board.jpg",
      "Kulmalukko"
    ],
    [
      "Longboard",
      11000,
      "LongboardSkateboard.jpg",
      "Cfireinside"
    ],
    [
      "Street skateboard",
      8500,
      "Skate board.jpg",
      "CHABERT Louis"
    ],
    [
      "Park cruiser",
      9500,
      "Cruising on a Board.jpg"
    ]
  ],
  "bike": [
    [
      "Mountain bicycle",
      45000,
      "Mountain bicycle.jpg",
      "Jared C."
    ],
    [
      "BMX bicycle",
      30000,
      "BMX bicycle.JPG"
    ],
    [
      "Folding bicycle",
      55000,
      "Folding bicycle.jpg",
      "Kulmalukko"
    ],
    [
      "Folding mountain bicycle",
      70000,
      "Changebike 26\" folding bicycle.jpg"
    ]
  ],
  "tech": [
    [
      "Nintendo Switch",
      40000,
      "Switch Console.jpg",
      "KK IN HK"
    ],
    [
      "PlayStation 5",
      65000,
      "PlayStation 5 and DualSense.jpg",
      "Osh33m"
    ],
    [
      "Laptop for learning",
      95000,
      "Laptop PC.jpg"
    ],
    [
      "Gaming computer",
      140000,
      "Gaming pc.jpg",
      "Prolete"
    ]
  ],
  "travel": [
    [
      "Niagara Falls family escape",
      75000,
      "NiagaraFallsPanorama.jpg",
      "MamaGeek"
    ],
    [
      "Banff and Lake Louise adventure",
      320000,
      "Lake Louise, Canada, Banff.jpg"
    ],
    [
      "Paris family vacation",
      650000,
      "Eiffel Tower, Paris.jpg"
    ],
    [
      "Hawaii beach vacation",
      850000,
      "Waikiki Beach, Hawaii.jpg",
      "Julianibarra"
    ]
  ],
  "rv": [
    [
      "Winnebago Rialta",
      4500000,
      "1997 Winnebago Rialta 22RD on Volkswagen Eurovan VR6 in VW White, Front Left, 08-17-2023.jpg"
    ],
    [
      "Winnebago Adventurer",
      6800000,
      "Motorhome.jpg",
      "Trekphiler"
    ],
    [
      "Winnebago Touring Coach",
      9500000,
      "Winnebago Touring Coach RV, based on 2015 Ram Van (12487125735).jpg"
    ],
    [
      "Winnebago Journey diesel coach",
      12500000,
      "2003 Winnebago Journey DL Class A diesel motor home.jpg"
    ]
  ],
  "car": [
    [
      "Ferrari 296 GTB",
      28000000,
      "Ferrari 296 GTB.jpg",
      "MrWalkr"
    ],
    [
      "Lamborghini Revuelto",
      32000000,
      "Lamborghini Revuelto.jpg"
    ],
    [
      "Porsche 911 GT3 RS",
      22000000,
      "Porsche 911 992 GT3 RS.jpg",
      "Calreyn88"
    ],
    [
      "McLaren 750S",
      26000000,
      "McLaren 750S.jpg",
      "MrWalkr"
    ]
  ],
  "home": [
    [
      "Modern architectural home",
      56000000,
      "Modern house.jpg",
      "NairobiPapel"
    ],
    [
      "Lakeside home",
      72000000,
      "A house by the lake.jpg"
    ],
    [
      "Contemporary stone home",
      65000000,
      "A modern stone house.jpg",
      "Latif2022"
    ],
    [
      "Mountain chalet",
      80000000,
      "Chalet montagne.jpg",
      "Minadow"
    ]
  ],
  "pool": [
    [
      "Backyard swimming pool",
      4500000,
      "Backyardpool.jpg"
    ],
    [
      "Infinity-edge pool",
      9500000,
      "Infinitypool.jpg"
    ],
    [
      "Natural-style pool",
      7200000,
      "Chateau Franc Mayne Piscine naturelle.jpg"
    ],
    [
      "Indoor swimming pool",
      12000000,
      "Modern indoor swimming pool with water features and plants.jpg",
      "Shixart1985"
    ]
  ],
  "give": [
    [
      "Accessibility project",
      2500000,
      "A ramp for disabled people in a wheelchair.jpg",
      "Tarasna0922"
    ],
    [
      "Medical research equipment",
      5000000,
      "Binocular compound microscope.jpg"
    ],
    [
      "Student learning scholarship",
      3500000,
      "Stockholm University Library interior.jpg",
      "K3ruben9"
    ],
    [
      "Community library resources",
      1500000,
      "Hive interior.jpg"
    ]
  ],
  "startercar": [
    [
      "2018 Toyota Corolla",
      1400000,
      "2018 Toyota Corolla, Front Right, 01-08-2021.jpg",
      "SsmIntrigue"
    ],
    [
      "2018 Honda Civic",
      1650000,
      "2018 Honda Civic EX, Front Left, 05-09-2021.jpg",
      "SsmIntrigue"
    ],
    [
      "2018 Mazda3",
      1500000,
      "2018 Mazda3 Sport, Front Left, 10-16-2020.jpg",
      "SsmIntrigue"
    ],
    [
      "2018 Subaru Crosstrek",
      2100000,
      "2018 Subaru Crosstrek.jpg",
      "Coldstreamer20"
    ]
  ],
  "pet": [
    [
      "Golden retriever puppy",
      30000,
      "Golden-retriever-1827903 1920.jpg"
    ],
    [
      "Fluffy kitten",
      20000,
      "Kitten in a Ricoh copier box.jpg"
    ],
    [
      "Lop-eared bunny",
      10000,
      "Pet rabbit.jpg"
    ],
    [
      "Baby guinea pig",
      7500,
      "The baby Guinea pig.jpg"
    ]
  ],
  "local": [
    [
      "Family aquarium visit",
      12000,
      "Ripley's Aquarium of Canada.jpg"
    ],
    [
      "Niagara Falls boat adventure",
      16000,
      "People in boat near Niagara Falls.jpg"
    ],
    [
      "Family zoo day",
      10000,
      "Toronto Zoo entrance.jpg"
    ],
    [
      "Science museum adventure",
      8000,
      "Ontario Science Centre.jpg"
    ]
  ],
  "outdoors": [
    [
      "Guided forest treetop adventure",
      18000,
      "Zip line.jpg"
    ],
    [
      "Guided family canoe outing",
      15000,
      "Canoeing in Algonquin Park.jpg"
    ],
    [
      "Guided beginner mountain hike",
      20000,
      "Hiking in the mountains.jpg"
    ],
    [
      "Family horseback riding lesson",
      22000,
      "Horseback riding.jpg"
    ]
  ],
  "familyfun": [
    [
      "Family bowling night",
      9000,
      "Bowling alley.jpg"
    ],
    [
      "Indoor climbing lesson",
      14000,
      "Indoor climbing.jpg"
    ],
    [
      "Family go-kart session",
      16000,
      "Go-kart.jpg"
    ],
    [
      "Family ice-skating outing",
      6500,
      "Ice skating.jpg"
    ]
  ],
  "hobbies": [
    [
      "Acoustic guitar",
      25000,
      "Acoustic guitar.jpg"
    ],
    [
      "Digital piano",
      50000,
      "Digital piano.jpg"
    ],
    [
      "Telescope for stargazing",
      38000,
      "Telescope.jpg"
    ],
    [
      "Art studio starter set",
      18000,
      "Painting materials.jpg"
    ]
  ],
  "sky": [
    [
      "Sunrise hot-air balloon flight",
      65000,
      "Hot Air Balloons over Cappadocia.jpg"
    ],
    [
      "Scenic helicopter tour with licensed pilot",
      85000,
      "Helicopter tour.jpg"
    ],
    [
      "Guided mountain summit hike",
      45000,
      "Hiking in the Alps.jpg"
    ],
    [
      "Tandem supervised paragliding experience (future adult)",
      55000,
      "Paragliding.jpg"
    ]
  ],
  "canada": [
    [
      "Rocky Mountains family adventure",
      420000,
      "Lake Louise, Canada, Banff.jpg"
    ],
    [
      "Vancouver Island whale-watching trip",
      300000,
      "Orca whale watching.jpg"
    ],
    [
      "Québec City winter festival trip",
      250000,
      "Château Frontenac.jpg"
    ],
    [
      "Nova Scotia coastal family road trip",
      330000,
      "Peggy's Cove lighthouse.jpg"
    ]
  ],
  "worldtrip": [
    [
      "Japan cherry-blossom holiday",
      1100000,
      "Cherry blossoms in Kyoto.jpg"
    ],
    [
      "Kenya guided wildlife safari",
      1250000,
      "Giraffes in Maasai Mara.jpg"
    ],
    [
      "Iceland northern lights adventure",
      850000,
      "Aurora borealis Iceland.jpg"
    ],
    [
      "Australia Great Barrier Reef guided snorkelling",
      1400000,
      "Great Barrier Reef snorkeling.jpg"
    ]
  ],
  "exotic": [
    [
      "Bugatti Veyron",
      90000000,
      "2007 Bugatti Veyron.jpg",
      "MrWalkr"
    ],
    [
      "Rolls-Royce Phantom",
      48000000,
      "Rolls-Royce Phantom VIII.jpg"
    ],
    [
      "Aston Martin DBS Superleggera",
      38000000,
      "Aston Martin DBS Superleggera.jpg"
    ],
    [
      "Bentley Continental GT Speed",
      32000000,
      "Bentley Continental GT Speed.jpg"
    ]
  ],
  "retreat": [
    [
      "Forest log cabin",
      30000000,
      "Log cabin.jpg"
    ],
    [
      "Oceanfront holiday cottage",
      50000000,
      "Beach house.jpg"
    ],
    [
      "Mountain ski chalet",
      45000000,
      "Chalet montagne.jpg"
    ],
    [
      "Countryside farmhouse retreat",
      38000000,
      "Farmhouse.jpg"
    ]
  ],
  "roadtrip": [
    [
      "Canadian Rockies scenic rail journey",
      700000,
      "Rocky Mountaineer.jpg"
    ],
    [
      "Alaska glacier cruise",
      850000,
      "Glacier Bay cruise ship.jpg"
    ],
    [
      "New Zealand campervan adventure",
      950000,
      "Campervan in New Zealand.jpg"
    ],
    [
      "Norwegian fjord cruise",
      780000,
      "Geirangerfjord.jpg"
    ]
  ],
  "community": [
    [
      "Accessible playground project",
      1800000,
      "Accessible playground.jpg"
    ],
    [
      "Community food garden",
      1000000,
      "Community garden.jpg"
    ],
    [
      "Children’s hospital playroom",
      2200000,
      "Hospital playroom.jpg"
    ],
    [
      "Community sports equipment",
      1500000,
      "Basketball court.jpg"
    ]
  ],
  "learning": [
    [
      "Student science equipment fund",
      2000000,
      "School science laboratory.jpg"
    ],
    [
      "Accessible school technology",
      2500000,
      "Assistive technology.jpg"
    ],
    [
      "Community music lessons",
      1500000,
      "Music classroom.jpg"
    ],
    [
      "School library book fund",
      1800000,
      "School library.jpg"
    ]
  ],
  "research": [
    [
      "Microscopy research equipment",
      3500000,
      "Binocular compound microscope.jpg"
    ],
    [
      "Rehabilitation engineering research",
      4500000,
      "Rehabilitation robot.jpg"
    ],
    [
      "Clean-water research",
      3000000,
      "Water testing.jpg"
    ],
    [
      "Rare-disease genetics research",
      5000000,
      "DNA sequencing.jpg"
    ]
  ],
  "legacy": [
    [
      "Education scholarship fund",
      6500000,
      "University library.jpg"
    ],
    [
      "Accessible recreation centre",
      8000000,
      "Recreation centre.jpg"
    ],
    [
      "Rural health outreach fund",
      5500000,
      "Mobile health clinic.jpg"
    ],
    [
      "Community conservation project",
      5000000,
      "Tree planting.jpg"
    ]
  ],
  "impact": [
    [
      "Children’s rehabilitation fund",
      7000000,
      "Physical therapy.jpg"
    ],
    [
      "Medical research fellowship",
      9000000,
      "Research laboratory.jpg"
    ],
    [
      "Community learning centre",
      7500000,
      "Public library interior.jpg"
    ],
    [
      "Accessible transportation initiative",
      6000000,
      "Wheelchair accessible bus.jpg"
    ]
  ],
  "celebrate": [
    [
      "Family special dinner",
      25000,
      "Family dinner.jpg"
    ],
    [
      "Live theatre outing",
      30000,
      "Theatre auditorium.jpg"
    ],
    [
      "Family concert experience",
      40000,
      "Concert hall.jpg"
    ],
    [
      "Family sports game tickets",
      35000,
      "Ice hockey arena.jpg"
    ]
  ],
  "homefun": [
    [
      "Home cinema",
      1200000,
      "Home cinema.jpg"
    ],
    [
      "Home basketball court",
      1800000,
      "Indoor basketball court.jpg"
    ],
    [
      "Home music studio",
      950000,
      "Recording studio.jpg"
    ],
    [
      "Home library",
      700000,
      "Home library.jpg"
    ]
  ]
};
export const lifeCatalogue=Object.fromEntries(Object.entries(raw).map(([category,rows])=>[category,rows.map(([name,cents,file,author],i)=>({id:category+"-"+i,name,cents,file,author:author||null,category}))]));
export const lifeMilestones=[[13,1000,"candy","Choose your first candy"],[24,2500,"dessert","Choose a delicious dessert"],[35,4000,"local","Make a family memory"],[46,7000,null,"Save for something special"],[57,15000,"skate","Choose your skateboard"],[68,90000,"bike","Choose your bicycle"],[79,180000,"tech","Technology and gaming"],[90,100000,"pet","Adopt and name your adorable pet"],[101,200000,"hobbies","Discover a new hobby"],[112,250000,"familyfun","Family fun day"],[123,350000,"outdoors","Outdoor adventure day"],[134,500000,null,"Save towards independence"],[145,650000,"celebrate","Treat your family to a celebration"],[156,800000,null,"Plan your first vehicle"],[167,1000000,"startercar","Buy your first car"],[168,2000000,null,"Foundation savings bonus"],[200,300000,"sky","Adventure of a lifetime"],[229,3500000,"canada","Explore Canada with your family"],[271,9000000,"rv","Choose your family Winnebago"],[300,11000000,null,"Build your future fund"],[340,9000000,null,"Save for a long-term goal"],[370,10000000,null,"Plan ownership costs"],[400,12000000,null,"Clinical training savings"],[430,10000000,"worldtrip","Once-in-a-lifetime family trip"],[455,13000000,null,"Plan for financial independence"],[470,10000000,"community","Make your community better"],[480,12000000,null,"Build your research and giving fund"],[490,14000000,null,"Save for graduation"],[499,15000000,null,"Conference achievement bonus"],[500,28000000,"car","Buy your dream supercar"],[550,30000000,"home","Choose your first home"],[600,20000000,"pool","Design your dream swimming pool"],[650,36000000,"exotic","Exclusive exotic and luxury car collection"],[700,42000000,"retreat","Choose a family holiday retreat"],[750,25000000,"roadtrip","Extraordinary family journeys"],[800,32000000,"learning","Give someone a learning opportunity"],[850,35000000,"homefun","Customize your home entertainment space"],[900,40000000,"research","Support medical and scientific research"],[950,45000000,"legacy","Create a lasting community project"],[1000,60000000,"impact","Choose your medical legacy"]].map(([mission,cents,shop,title])=>({mission,cents,shop,title,id:"pay-"+mission}));

export function lifeLedger(s){return s.lifeJourney&&s.lifeJourney.version===1?s.lifeJourney:{version:1,pay:{},decisions:{},purchases:[]}}
export function lifeTotals(s){const l=lifeLedger(s),earned=Object.values(l.pay).reduce((n,x)=>n+x.cents,0),spent=l.purchases.reduce((n,x)=>n+x.cents,0);return {earned,spent,balance:earned-spent}}
export function reconcileLife(s,eligible,now=Date.now()){const was=s.lifeJourney?.version===1;if(!was)s.lifeJourney=lifeLedger(s);const l=s.lifeJourney;let changed=!was;for(const m of lifeMilestones){if(eligible.has(m.mission)&&!Object.hasOwn(l.pay,m.id)){l.pay[m.id]={cents:m.cents,at:now,ack:false};changed=true}}return changed}
export function buyLife(s,m,itemId,now=Date.now(),petName=""){const l=lifeLedger(s),item=lifeCatalogue[m.shop]?.find(x=>x.id===itemId);if(!l.pay[m.id]||l.decisions[m.id]||!item||lifeTotals(s).balance<item.cents)return null;if(m.shop==="pool"&&!l.purchases.some(x=>x.category==="home"))return null;const name=String(petName||"").trim().replace(/\s+/g," ");if(m.shop==="pet"&&(!name||name.length>30||!/[\p{L}\p{N}]/u.test(name)))return null;const purchase={...item,milestone:m.mission,at:now,...(m.shop==="pet"?{petName:name}:{})};l.purchases.push(purchase);l.decisions[m.id]={type:"buy",itemId,at:now};return purchase}
export function saveLife(s,m,now=Date.now()){const l=lifeLedger(s);if(!l.pay[m.id]||l.decisions[m.id])return false;l.decisions[m.id]={type:"save",at:now};return true}
