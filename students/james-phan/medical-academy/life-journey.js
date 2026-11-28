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
  ]
};
export const lifeCatalogue=Object.fromEntries(Object.entries(raw).map(([category,rows])=>[category,rows.map(([name,cents,file,author],i)=>({id:category+"-"+i,name,cents,file,author:author||null,category}))]));
export const lifeMilestones=[[13,1000,"candy","First payday"],[24,2500,"dessert","Celebrate your work"],[35,4000,null,"Build a savings habit"],[46,7000,null,"Plan your next purchase"],[57,15000,"skate","Skateboard shop"],[68,90000,"bike","Bicycle shop"],[79,180000,"tech","Technology store"],[90,100000,null,"Set aside money for the future"],[101,200000,null,"Plan a family experience"],[112,250000,null,"Save for a holiday"],[123,350000,"travel","Family getaway"],[134,500000,null,"Growing savings"],[145,650000,null,"Choose what matters"],[156,800000,null,"Plan ahead"],[167,1000000,null,"Long-term goals"],[168,2000000,null,"Foundation achievement"],[229,3500000,"travel","Family travel"],[271,9000000,"rv","Family motorhome showroom"],[300,11000000,null,"Build your future"],[340,9000000,null,"Savings milestone"],[370,10000000,null,"Compare long-term costs"],[400,12000000,null,"Clinical training payday"],[430,10000000,"travel","Family adventures"],[455,13000000,null,"Financial planning"],[470,10000000,"give","Support your community"],[480,12000000,null,"Research and community goals"],[490,14000000,null,"Innovation achievement"],[499,15000000,null,"Conference preparation"],[500,28000000,"car","Graduation auto showroom"],[550,30000000,"home","Choose your first home"],[600,20000000,"pool","Personalize your home"],[650,36000000,"car","Specialist auto showroom"],[700,42000000,"home","Dream home or retreat"],[750,25000000,"rv","Family road trip vehicle"],[800,32000000,"give","Support learning or accessibility"],[850,35000000,"travel","International family adventure"],[900,40000000,"give","Medical innovation and research"],[950,45000000,"give","Community legacy"],[1000,60000000,"give","Create a meaningful legacy"]].map(([mission,cents,shop,title])=>({mission,cents,shop,title,id:"pay-"+mission}));

export function lifeLedger(s){return s.lifeJourney&&s.lifeJourney.version===1?s.lifeJourney:{version:1,pay:{},decisions:{},purchases:[]}}
export function lifeTotals(s){const l=lifeLedger(s),earned=Object.values(l.pay).reduce((n,x)=>n+x.cents,0),spent=l.purchases.reduce((n,x)=>n+x.cents,0);return {earned,spent,balance:earned-spent}}
export function reconcileLife(s,eligible,now=Date.now()){const was=s.lifeJourney?.version===1;if(!was)s.lifeJourney=lifeLedger(s);const l=s.lifeJourney;let changed=!was;for(const m of lifeMilestones){if(eligible.has(m.mission)&&!Object.hasOwn(l.pay,m.id)){l.pay[m.id]={cents:m.cents,at:now,ack:false};changed=true}}return changed}
export function buyLife(s,m,itemId,now=Date.now()){const l=lifeLedger(s),item=lifeCatalogue[m.shop]?.find(x=>x.id===itemId);if(!l.pay[m.id]||l.decisions[m.id]||!item||lifeTotals(s).balance<item.cents)return null;if(m.shop==="pool"&&!l.purchases.some(x=>x.category==="home"))return null;const purchase={...item,milestone:m.mission,at:now};l.purchases.push(purchase);l.decisions[m.id]={type:"buy",itemId,at:now};return purchase}
export function saveLife(s,m,now=Date.now()){const l=lifeLedger(s);if(!l.pay[m.id]||l.decisions[m.id])return false;l.decisions[m.id]={type:"save",at:now};return true}
