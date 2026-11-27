const facts=[[["Similar cells form a tissue.","Similar cells work together in a ___.","tissue","organ","system"],["Different tissues form an organ.","A structure made of several tissues is an ___.","organ","cell","microscope"],["A microscope magnifies tiny objects.","A microscope helps us ___ small objects.","magnify","digest","absorb"]],[["The heart pumps blood through vessels.","The muscle that pumps blood is the ___.","heart","lung","kidney"],["Arteries carry blood away from the heart.","Blood leaving the heart travels in an ___.","artery","vein","airway"],["Working muscles need oxygen during exercise.","The heart pumps faster to deliver more ___ to muscles.","oxygen","urine","air"]],[["Alveoli exchange gases with nearby blood.","Gas exchange takes place in the ___.","alveoli","bladder","stomach"],["The diaphragm helps air move in and out of the lungs.","The breathing muscle below the lungs is the ___.","diaphragm","spinal cord","tendon"],["Cells make carbon dioxide, which blood brings to the lungs.","A waste gas breathed out is ___.","carbon dioxide","calcium","glucose"]],[["Food travels through the oesophagus to the stomach.","The tube from mouth to stomach is the ___.","oesophagus","ureter","trachea"],["Most digested nutrients are absorbed in the small intestine.","Most nutrients enter the body through the ___.","small intestine","stomach","large intestine"],["Absorption moves nutrients into the body.","Taking nutrients into the body is called ___.","absorption","circulation","evaporation"]],[["Kidneys filter blood and regulate water and salts.","The organs that filter blood and make urine are the ___.","kidneys","lungs","intestines"],["Ureters carry urine from kidneys to bladder.","Urine reaches the bladder through the ___.","ureters","arteries","airways"],["The bladder stores urine before it leaves the body.","Urine is stored in the ___.","bladder","kidney","heart"]],[["A tendon tap can cause a fast automatic response called a reflex.","A fast automatic response is a ___.","reflex","heartbeat","digestion"],["Motor nerves carry signals out to muscles.","A nerve that carries a message to a muscle is a ___ nerve.","motor","sensory","digestive"],["The spinal cord can coordinate a knee reflex before a conscious decision.","A knee reflex can be coordinated by the ___.","spinal cord","stomach","lung"]],[["Tendons attach muscle to bone.","Muscle pulls on bone through a ___.","tendon","ligament","vein"],["Ligaments connect bone to bone at joints.","A structure connecting bone to bone is a ___.","ligament","tendon","neuron"],["Living bone contains cells that help repair damage.","Bone can heal because it contains living ___.","cells","air","urine"]],[["Dense bones absorb more X-rays than many soft tissues.","An X-ray can show the structure of a ___.","bone","thought","sound"],["Ultrasound forms images from returning sound waves.","An image made with sound echoes uses ___.","ultrasound","MRI","a microscope"],["MRI uses magnets and radio waves.","An imaging method using magnets and radio waves is ___.","MRI","ultrasound","X-ray"]],[["Skin forms a protective barrier that helps reduce water loss.","Skin acts as a protective ___.","barrier","artery","joint"],["Sweat evaporation can cool the skin.","Sweat can cool skin when it ___.","evaporates","digests","circulates"],["Sensory receptors detect touch and temperature.","Structures that detect touch are ___.","receptors","tendons","ureters"]],[["White blood cells participate in body defence.","Cells involved in immune defence include ___.","white blood cells","bone cells","red blood cells"],["Antibodies recognize particular molecular targets.","A protein that recognizes a particular target is an ___.","antibody","alveolus","artery"],["Some immune cells remember previous encounters.","A faster response can be supported by immune ___.","memory","digestion","filtration"]],[["Many bacteria are harmless or helpful. Some cause disease.","A single-celled organism can be a ___.","bacterium","tendon","rib"],["Viruses need host cells to reproduce.","A virus reproduces using ___ cells.","host","paper","model"],["Washing hands reduces transfer of many germs.","A way to reduce germ transfer is ___.","handwashing","guessing","ignoring contact"]],[["A fair test changes one variable and controls other conditions.","A factor that can change in an investigation is a ___.","variable","conclusion","tendon"],["Repeated measurements help reveal variation.","To check reliability, researchers can ___ trials.","repeat","hide","delete"],["Evidence supports conclusions but does not prove every possible explanation.","A conclusion should be supported by ___.","evidence","popularity","guesswork"]],[["Children develop at different rates.","An increase in body size is called ___.","growth","evaporation","filtration"],["Repeated measurements show changes over time.","Several height readings help reveal a ___.","pattern","reflex","ligament"],["One number does not describe a child's overall health.","Growth assessments need measurements and ___.","context","guesswork","a friend's height"]],[["Family doctors provide ongoing care and prevention.","Reducing risk before problems occur is called ___.","prevention","digestion","filtration"],["Sleep supports brain function and body repair.","A habit that supports repair is adequate ___.","sleep","guesswork","noise"],["Reliable evidence matters more than popularity.","Health information should be evaluated using ___.","evidence","likes","rumours"]],[["Emergency teams communicate clear observations and uncertainty.","Something directly noticed or measured is an ___.","observation","unsupported guess","assumption"],["Blood carries oxygen to working muscles.","Oxygen is transported to muscles by ___.","blood","urine","food in the stomach"],["Professionals work together and share accurate information.","Working together is called ___.","coordination","evaporation","digestion"]]];

export const vocabVisuals={"neuron":"neuron","spinal cord":"spinal","reflex":"reflex","signal":"reflexarc","cell":"blood","tissue":"bloodfield","magnify":"lab","pulse":"bp","joint":"knee","ultrasound":"ultrasound","mri":"mri","white blood cell":"immune","bacteria":"bacteria"};
function choice(id,title,clue,prompt,answer,others,visual){return {id,title,clue,prompt,answer,options:[answer,...others].filter((v,i,a)=>a.indexOf(v)===i),visual}}
function fact(d,k,id){const f=facts[d.id-1][k];return choice(id,"Mini-cloze",f[0],f[1],f[2],f.slice(3))}
function vocab(d,k){const [term,meaning]=d.vocab[k];return choice("vocab"+k,"Medical vocabulary",term.toUpperCase()+" means "+meaning+".","Which term means "+meaning+"?",term,d.vocab.filter((_,j)=>j!==k).map(v=>v[0]),vocabVisuals[term.toLowerCase()])}
function reflex(d){return [choice("instrument","Spot the medical tool","The clinician taps the tendon just below the kneecap with a reflex hammer.","Which instrument is being used?","reflex hammer",["stethoscope","thermometer"],"reflex"),fact(d,0,"cloze0"),choice("cloze1","Mini-cloze","A signal is a message passed along nerves.","Nerves carry a ___ to and from the spinal cord.","signal",["nutrient","bone"],"reflexarc"),choice("cloze2","Mini-cloze","A reflex occurs automatically, without choosing to move.","A knee reflex happens ___.","automatically",["only by choice","after digestion"]),{id:"sequence",title:"Build the reflex pathway",clue:"The tap is the stimulus. A sensory nerve carries the message IN to the spinal cord. A motor nerve carries it OUT to the muscle.",prompt:"Put all five steps in order, from the tap to the movement.",sequence:d.flow,visual:"reflexarc"},...d.vocab.map((_,k)=>vocab(d,k)),choice("check1","Clinical check","The spinal cord can coordinate a knee reflex.","Which structure coordinates the knee reflex?","spinal cord",["stomach","lung"],"spinal"),choice("check2","Clinical check","A voluntary action is something you choose to do. A reflex is automatic.","The knee jerk is a(n) ___ response.","automatic",["voluntary","digestive"])]}
function caseCloze(m){const c=m.c;if(c.history)return choice("casecloze","Clinical clue",c.reason,c.decision,c.options[c.key],c.options.filter((_,j)=>j!==c.key));const terms=c.teach.match(/[A-Za-z][A-Za-z-]{5,}/g)||[],stop=new Set(["fictional","classroom","teaching","compare","different","professional","information","include","important","medical","cannot","requires","example","model","clinical","student","results","another","through","before","during","because","rather","should","between","often","these","their","using","about","which","helps","people"]);const answer=terms.find(w=>!stop.has(w.toLowerCase()))||terms[0];if(!answer)return choice("casecloze","Evidence check",c.teach,"What supports a conclusion?","evidence",["popularity","guesses"]);const sentence=c.teach.split(/(?<=[.!?])\s+/).find(x=>x.includes(answer))||c.teach;return choice("casecloze","Clinical clue check",sentence,sentence.replace(answer,"___"),answer,["circulation","evaporation","filtration","absorption","movement","digestion"].filter(w=>w.toLowerCase()!==answer.toLowerCase()&&!sentence.toLowerCase().includes(w)).slice(0,2))}
function originalActiveTasks(m,i){if(!m?.d)return [];if(i===64)return reflex(m.d);const d=m.d;if(m.type==="advanced")return [caseCloze(m)];if(m.type==="vocab")return d.vocab.map((_,k)=>vocab(d,k));if(m.type==="learn"||m.type==="write")return [0,1,2].map(k=>fact(d,k,"cloze"+k));return [fact(d,(i+d.id)%3,"cloze")]}
export function activeTaskCheck(q,a){return q.sequence?Array.isArray(a)&&a.length===q.sequence.length&&a.every((v,i)=>v===i):a===q.answer}

// Stable task IDs: append future catch-up tasks here; never renumber existing missions.
const upgrades={
  "3": [
    {
      "id": "upgrade4-0",
      "title": "What makes a tissue?",
      "clue": "A tissue contains similar cells that work together.",
      "prompt": "A sample contains many muscle cells working together. What is the sample an example of?",
      "answer": "Tissue",
      "options": [
        "Tissue",
        "A single cell",
        "A whole body system"
      ],
      "retro": true
    },
    {
      "id": "upgrade4-1",
      "title": "Apply the microscope clue",
      "clue": "Magnification makes an object appear larger; it does not make the real object grow.",
      "prompt": "What changes when the microscope magnification increases?",
      "answer": "The apparent size of the image",
      "options": [
        "The apparent size of the image",
        "The actual size of the cells",
        "The number of organs"
      ],
      "retro": true
    }
  ],
  "8": [
    {
      "id": "upgrade9-0",
      "title": "The laboratory needs evidence",
      "clue": "Compare the same sized microscope fields so the counts are meaningful.",
      "prompt": "Which investigation is fairer?",
      "answer": "Count cells in equal-sized fields",
      "options": [
        "Count cells in equal-sized fields",
        "Compare a large field with a tiny one",
        "Choose only the busiest field"
      ],
      "retro": true
    },
    {
      "id": "upgrade9-1",
      "title": "Connect science to specialty",
      "clue": "Medical laboratory professionals examine samples and communicate reliable findings.",
      "prompt": "Which department would examine a prepared microscope slide?",
      "answer": "Medical Laboratory",
      "options": [
        "Medical Laboratory",
        "Cardiology",
        "Orthopaedics"
      ],
      "retro": true
    }
  ],
  "15": [
    {
      "id": "upgrade16-0",
      "title": "Which way does blood travel?",
      "clue": "Arteries carry blood away from the heart. Veins carry blood towards it.",
      "prompt": "A vessel carries blood back to the heart. What type of vessel is it?",
      "answer": "Vein",
      "options": [
        "Vein",
        "Artery",
        "Airway"
      ],
      "retro": true
    },
    {
      "id": "upgrade16-1",
      "title": "Exercise and oxygen",
      "clue": "Working muscles need more oxygen. Blood delivers it to them.",
      "prompt": "Why might the heart pump faster during exercise?",
      "answer": "To deliver more oxygen to working muscles",
      "options": [
        "To deliver more oxygen to working muscles",
        "To make food in the lungs",
        "To stop blood reaching the muscles"
      ],
      "retro": true
    }
  ],
  "22": [
    {
      "id": "upgrade23-0",
      "title": "Two connected systems",
      "clue": "The lungs exchange gases and the circulatory system transports them.",
      "prompt": "Which pair of departments studies those two processes?",
      "answer": "Respirology and Cardiology",
      "options": [
        "Respirology and Cardiology",
        "Neurology and Dermatology",
        "Nephrology and Orthopaedics"
      ],
      "retro": true
    },
    {
      "id": "upgrade23-1",
      "title": "Follow the oxygen",
      "clue": "Oxygen moves from alveoli into nearby blood. Blood then carries it around the body.",
      "prompt": "What receives oxygen from the alveoli?",
      "answer": "Nearby blood",
      "options": [
        "Nearby blood",
        "The bladder",
        "The spinal cord"
      ],
      "retro": true
    }
  ],
  "35": [
    {
      "id": "upgrade36-0",
      "title": "Absorption or digestion?",
      "clue": "Digestion breaks down food. Absorption takes nutrients into the body.",
      "prompt": "Which process moves digested nutrients into the body?",
      "answer": "Absorption",
      "options": [
        "Absorption",
        "Digestion",
        "Evaporation"
      ],
      "retro": true
    },
    {
      "id": "upgrade36-1",
      "title": "Connect the organs",
      "clue": "The small intestine absorbs most digested nutrients. The blood transports many of them.",
      "prompt": "Which two systems cooperate here?",
      "answer": "Digestive and circulatory",
      "options": [
        "Digestive and circulatory",
        "Urinary and skeletal",
        "Nervous and respiratory"
      ],
      "retro": true
    }
  ],
  "46": [
    {
      "id": "upgrade47-0",
      "title": "Urine's journey",
      "clue": "Kidneys form urine. Ureters carry it to the bladder, which stores it.",
      "prompt": "What carries urine from the kidneys to the bladder?",
      "answer": "Ureters",
      "options": [
        "Ureters",
        "Arteries",
        "Airways"
      ],
      "retro": true
    },
    {
      "id": "upgrade47-1",
      "title": "Kidneys and blood",
      "clue": "Kidneys filter blood and regulate water and dissolved substances.",
      "prompt": "Which specialty studies kidney function?",
      "answer": "Nephrology",
      "options": [
        "Nephrology",
        "Cardiology",
        "Respirology"
      ],
      "retro": true
    }
  ],
  "58": [
    {
      "id": "upgrade59-0",
      "title": "A rapid response",
      "clue": "A knee reflex can be coordinated by the spinal cord without a conscious decision.",
      "prompt": "Which structure coordinates the knee reflex?",
      "answer": "Spinal cord",
      "options": [
        "Spinal cord",
        "Stomach",
        "Lung"
      ],
      "retro": true
    },
    {
      "id": "upgrade59-1",
      "title": "Follow the signal",
      "clue": "Sensory nerves carry incoming information. Motor nerves carry signals towards muscles.",
      "prompt": "Which nerve carries a signal out towards the thigh muscle?",
      "answer": "Motor nerve",
      "options": [
        "Motor nerve",
        "Sensory nerve",
        "Neither nerve"
      ],
      "retro": true
    }
  ]
};
export function activeTasks(m,i){return [...originalActiveTasks(m,i),...(upgrades[i]||[])]}
