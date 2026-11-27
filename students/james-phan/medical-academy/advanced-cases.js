// Fictional educational simulations; not clinical diagnosis or treatment.
export const advancedCases = [
  {
    "id": 1,
    "department": 1,
    "title": "The uneven microscope slide",
    "teach": "A microscope enlarges an image. Counting cells in equal-sized fields can estimate density, but a few fields may not represent the entire slide. A cell count does not tell us the number of different cell types.",
    "labels": [
      "Field A",
      "Field B",
      "Field C"
    ],
    "values": [
      18,
      30,
      24
    ],
    "unit": "cells",
    "claim": "Field B has more cells, so its cells must be larger.",
    "investigation": "Design a way to select microscope fields fairly, and explain why equal field sizes matter.",
    "audience": "A younger student who thinks magnification creates new cells"
  },
  {
    "id": 2,
    "department": 1,
    "title": "The magnification puzzle",
    "teach": "Total microscope magnification is eyepiece magnification multiplied by objective magnification. A larger image is not necessarily more detailed; resolution is the ability to distinguish close objects. Higher magnification often reduces the area seen.",
    "labels": [
      "Low power",
      "Medium power",
      "High power"
    ],
    "values": [
      40,
      100,
      400
    ],
    "unit": "×",
    "claim": "A 400× image always reveals ten times as many cells as a 40× image.",
    "investigation": "Explain how changing magnification affects field of view and propose a comparison using the same specimen.",
    "audience": "A student learning to use a microscope"
  },
  {
    "id": 3,
    "department": 1,
    "title": "Identifying tissues from evidence",
    "teach": "Cells of different tissues have structures suited to their functions. Muscle cells contract, red blood cells carry oxygen, and nerve cells transmit signals. A shape alone is not always sufficient evidence to identify a tissue.",
    "labels": [
      "Sample A",
      "Sample B",
      "Sample C"
    ],
    "values": [
      12,
      20,
      28
    ],
    "unit": "elongated cells per field",
    "claim": "All elongated cells must be muscle cells.",
    "investigation": "Plan an investigation using cell shape and at least one additional observation to classify the samples.",
    "audience": "A lab partner who wants to label a sample after one glance"
  },
  {
    "id": 4,
    "department": 2,
    "title": "The racing heart",
    "teach": "Heart rate is the number of beats per minute. During exercise, working muscles need more oxygen and nutrients, so blood flow increases. Recovery is a return towards resting conditions; individual readings vary.",
    "labels": [
      "Rest",
      "Exercise",
      "After recovery"
    ],
    "values": [
      76,
      156,
      80
    ],
    "unit": "beats/min",
    "claim": "The heart beats faster during exercise because the lungs stop working.",
    "investigation": "Explain how the heart, lungs and muscles cooperate during exercise; identify two variables that would affect a fair comparison.",
    "audience": "A child who is curious about their heartbeat after running"
  },
  {
    "id": 5,
    "department": 2,
    "title": "Comparing exercise recovery",
    "teach": "A recovery curve describes how a measurement changes after exercise. Comparable workloads, measurement intervals and resting conditions help make a fair comparison. These fictional observations cannot diagnose health.",
    "labels": [
      "Minute 1",
      "Minute 3",
      "Minute 5"
    ],
    "values": [
      132,
      104,
      80
    ],
    "unit": "beats/min",
    "claim": "One person's recovery readings prove that everyone should recover at exactly the same speed.",
    "investigation": "Propose a fair repeat of the recovery study and explain why the same workload and measurement times matter.",
    "audience": "A sports team considering how to collect reliable pulse data"
  },
  {
    "id": 6,
    "department": 2,
    "title": "The circulation model",
    "teach": "In the systemic circuit blood travels from the heart through arteries, capillaries and veins back to the heart. Capillaries allow exchange with tissues. Blood flow models simplify a continuous system.",
    "labels": [
      "Model channel A",
      "Model channel B",
      "Model channel C"
    ],
    "values": [
      30,
      45,
      60
    ],
    "unit": "mL/min",
    "claim": "Veins are the only vessels that ever contain oxygen-rich blood.",
    "investigation": "Use the circulation pathway to explain what a model can demonstrate and what it cannot demonstrate about real vessels.",
    "audience": "A student building a circulation model"
  },
  {
    "id": 7,
    "department": 3,
    "title": "Breathing on the move",
    "teach": "Breathing rate counts breaths per minute. Alveoli are tiny air sacs where oxygen and carbon dioxide are exchanged with blood. Exercise can increase breathing rate and depth.",
    "labels": [
      "Resting",
      "Walking",
      "Running"
    ],
    "values": [
      15,
      22,
      34
    ],
    "unit": "breaths/min",
    "claim": "The lungs send oxygen directly into the leg muscles without involving blood.",
    "investigation": "Describe the route oxygen takes from inhaled air to a working muscle and how you would compare activities fairly.",
    "audience": "A younger athlete"
  },
  {
    "id": 8,
    "department": 3,
    "title": "Surface area and gas exchange",
    "teach": "Many small alveoli provide a large total surface area for exchange. In a model, more exposed surface can allow faster transfer, but paper or water models cannot reproduce living lungs fully.",
    "labels": [
      "Small surface",
      "Medium surface",
      "Large surface"
    ],
    "values": [
      12,
      24,
      36
    ],
    "unit": "model transfer units",
    "claim": "Having more surface area always means every gas molecule moves faster.",
    "investigation": "Design a controlled surface-area experiment: identify what changes, what stays constant and what to measure.",
    "audience": "A student making a model of alveoli"
  },
  {
    "id": 9,
    "department": 3,
    "title": "A model of the diaphragm",
    "teach": "The diaphragm is a muscle. When it contracts and moves down, chest volume increases and air can enter. A bottle-and-balloon model shows pressure and volume changes but leaves out many living structures.",
    "labels": [
      "Small pull",
      "Medium pull",
      "Large pull"
    ],
    "values": [
      20,
      35,
      50
    ],
    "unit": "mL of model volume change",
    "claim": "The lungs actively pull the diaphragm down like a rope.",
    "investigation": "Explain the direction of volume change and how a model with an airtight seal differs from one with a leak.",
    "audience": "A student demonstrating a lung model"
  },
  {
    "id": 10,
    "department": 4,
    "title": "Following the fibre labels",
    "teach": "Dietary fibre is found in plant foods and supports digestive function. Nutrient labels report amounts for a stated serving size. Comparing equal servings is important.",
    "labels": [
      "Snack A",
      "Snack B",
      "Snack C"
    ],
    "values": [
      3,
      7,
      5
    ],
    "unit": "g fibre per equal serving",
    "claim": "The snack with the most fibre must be the healthiest choice in every situation.",
    "investigation": "Explain why serving size and other nutrient information matter before drawing a broad conclusion from the labels.",
    "audience": "A child reading a nutrition label"
  },
  {
    "id": 11,
    "department": 4,
    "title": "Breaking food into smaller pieces",
    "teach": "Mechanical digestion breaks food into smaller pieces and increases exposed surface area. Chemical digestion uses substances such as enzymes to break molecules down. A model with dissolving sugar is not the same as enzyme digestion.",
    "labels": [
      "Whole piece",
      "Broken pieces",
      "Crushed pieces"
    ],
    "values": [
      4,
      9,
      15
    ],
    "unit": "g dissolved after equal time",
    "claim": "Crushing food turns all of its nutrients into blood immediately.",
    "investigation": "Plan a fair test of particle size and dissolving, then identify a limitation of the model.",
    "audience": "A student who confuses mechanical and chemical digestion"
  },
  {
    "id": 12,
    "department": 4,
    "title": "The intestinal absorption model",
    "teach": "The small intestine absorbs most digested nutrients. Villi and microvilli increase surface area. A model membrane can illustrate movement across a boundary without reproducing all mechanisms of absorption.",
    "labels": [
      "Flat model",
      "Folded model",
      "Highly folded model"
    ],
    "values": [
      8,
      16,
      24
    ],
    "unit": "model transfer units",
    "claim": "The stomach absorbs all digested nutrients before food reaches the intestine.",
    "investigation": "Explain why folds can matter and how to keep model surface tests comparable.",
    "audience": "A younger student following the path of food"
  },
  {
    "id": 13,
    "department": 5,
    "title": "The kidney filter model",
    "teach": "Kidneys filter blood and adjust the amounts of water and dissolved substances returned to the body. Urine travels through ureters to the bladder and then through the urethra. A sieve model cannot represent selective reabsorption.",
    "labels": [
      "Model A",
      "Model B",
      "Model C"
    ],
    "values": [
      25,
      50,
      75
    ],
    "unit": "mL collected",
    "claim": "The bladder filters blood and the kidneys only store urine.",
    "investigation": "Trace the route of urine and explain two ways the model differs from functioning kidneys.",
    "audience": "A student learning the urinary system"
  },
  {
    "id": 14,
    "department": 5,
    "title": "Water balance observations",
    "teach": "Water enters the body through food and drinks and leaves through urine, sweat, breathing and other routes. Water balance is dynamic; a short record of one route cannot establish total balance.",
    "labels": [
      "Morning",
      "Afternoon",
      "Evening"
    ],
    "values": [
      250,
      500,
      350
    ],
    "unit": "mL fictional urine output",
    "claim": "Urine is the only way water leaves the body.",
    "investigation": "Design a fictional water-balance record that accounts for more than urine, and identify information missing from the table.",
    "audience": "A student interpreting a water-balance chart"
  },
  {
    "id": 15,
    "department": 5,
    "title": "Selective filters",
    "teach": "A filter may separate particles by size. Living kidneys do more: they filter and selectively reabsorb useful substances. A classroom filter experiment cannot model all cell transport processes.",
    "labels": [
      "Coarse filter",
      "Medium filter",
      "Fine filter"
    ],
    "values": [
      30,
      18,
      6
    ],
    "unit": "particles passing",
    "claim": "The finest filter is automatically the best model of a kidney.",
    "investigation": "Propose two measurements besides particle count to compare the filters, and explain why a real kidney is not simply a sieve.",
    "audience": "A lab partner designing a filter"
  },
  {
    "id": 16,
    "department": 6,
    "title": "Reflex versus planned action",
    "teach": "A reflex is a rapid automatic response. Sensory nerves carry signals towards the central nervous system and motor nerves carry signals to muscles. A planned action may involve additional processing. Classroom reaction-time tests are not clinical examinations.",
    "labels": [
      "Trial A",
      "Trial B",
      "Trial C"
    ],
    "values": [
      220,
      300,
      260
    ],
    "unit": "ms",
    "claim": "Every fast action is a reflex, even when the person deliberately chooses it.",
    "investigation": "Compare a reflex pathway with a planned action and design a safe classroom reaction-time test that does not involve pain.",
    "audience": "A student who thinks reflexes are always conscious choices"
  },
  {
    "id": 17,
    "department": 6,
    "title": "Practice and reaction time",
    "teach": "Reaction time can vary with attention, practice and the testing method. Repeated measurements and consistent conditions help distinguish a pattern from ordinary variation.",
    "labels": [
      "First round",
      "Second round",
      "Third round"
    ],
    "values": [
      340,
      290,
      270
    ],
    "unit": "ms",
    "claim": "A lower reaction time proves the brain has permanently changed after one test.",
    "investigation": "Design a study that separates practice effects from changes in the testing procedure.",
    "audience": "A gamer curious about reaction-time practice"
  },
  {
    "id": 18,
    "department": 6,
    "title": "Sensory signals and attention",
    "teach": "Sensory receptors detect stimuli. The nervous system processes information, and attention can influence performance in a task. A timed task may measure several processes at once.",
    "labels": [
      "Quiet",
      "Background sound",
      "Two tasks"
    ],
    "values": [
      250,
      310,
      390
    ],
    "unit": "ms",
    "claim": "The ears stop working when a person is distracted.",
    "investigation": "Explain why the task may become slower without implying sensory organs have stopped working; propose a fair comparison.",
    "audience": "A classmate studying with distractions"
  },
  {
    "id": 19,
    "department": 7,
    "title": "The lever in your arm",
    "teach": "Bones provide support and act as levers; muscles pull on bones through tendons. Joints allow movement. The position of a load changes the turning effect even if its mass stays constant.",
    "labels": [
      "Near pivot",
      "Middle",
      "Far from pivot"
    ],
    "values": [
      10,
      20,
      30
    ],
    "unit": "cm from pivot",
    "claim": "A muscle pushes a bone away when it contracts.",
    "investigation": "Explain how a lever model represents an arm and what must stay constant when comparing load distance.",
    "audience": "A student lifting a model forearm"
  },
  {
    "id": 20,
    "department": 7,
    "title": "Cushioning and impact",
    "teach": "Cartilage helps reduce friction and distribute load at many joints. A cushioning model can spread a force over time or area. A classroom model cannot measure injury risk.",
    "labels": [
      "No pad",
      "Thin pad",
      "Thick pad"
    ],
    "values": [
      36,
      24,
      12
    ],
    "unit": "model peak force units",
    "claim": "A cushion makes all forces disappear.",
    "investigation": "Design a controlled test of cushioning and explain why a smaller peak reading does not mean no force acts.",
    "audience": "A student designing sports equipment"
  },
  {
    "id": 21,
    "department": 7,
    "title": "Bone structure and strength",
    "teach": "Bone is living tissue. Its structure helps support loads while limiting mass. A paper-tube model can compare shapes, but it is not a real bone.",
    "labels": [
      "Flat sheet",
      "Folded sheet",
      "Rolled tube"
    ],
    "values": [
      10,
      30,
      60
    ],
    "unit": "g model load supported",
    "claim": "A paper tube proves real bones are hollow everywhere.",
    "investigation": "Design a fair comparison of paper structures using equal material and explain the model's limitations.",
    "audience": "A student building a strong lightweight structure"
  },
  {
    "id": 22,
    "department": 8,
    "title": "Reading an image carefully",
    "teach": "X-rays are a type of electromagnetic radiation. Different tissues absorb X-rays differently, creating contrast in an image. Image interpretation requires context; an image alone is not a diagnosis.",
    "labels": [
      "Model region A",
      "Model region B",
      "Model region C"
    ],
    "values": [
      20,
      50,
      80
    ],
    "unit": "relative brightness units",
    "claim": "Every bright region in an X-ray must be a broken bone.",
    "investigation": "Explain how brightness can provide evidence while still requiring location, anatomy and other information.",
    "audience": "A student looking at an educational X-ray diagram"
  },
  {
    "id": 23,
    "department": 8,
    "title": "Ultrasound echoes",
    "teach": "Ultrasound uses sound waves and returning echoes to form images. Echo timing and properties depend on the material and distance. It does not use ionizing X-rays.",
    "labels": [
      "Reflector A",
      "Reflector B",
      "Reflector C"
    ],
    "values": [
      4,
      8,
      12
    ],
    "unit": "model echo time units",
    "claim": "Ultrasound is exactly the same technology as an X-ray.",
    "investigation": "Compare the two imaging methods and design a model experiment that changes only reflector distance.",
    "audience": "A child learning about imaging technologies"
  },
  {
    "id": 24,
    "department": 8,
    "title": "Choosing images for a question",
    "teach": "Different imaging methods show different types of information. X-ray contrast, ultrasound echoes and magnetic resonance imaging use different physical principles. Choice depends on the clinical question, safety and professional judgement.",
    "labels": [
      "Image set A",
      "Image set B",
      "Image set C"
    ],
    "values": [
      12,
      18,
      24
    ],
    "unit": "model details counted",
    "claim": "The picture with the most visible details is always the best image for every question.",
    "investigation": "Describe why image quality depends on the question and propose a scoring method for a fictional image comparison.",
    "audience": "A science fair visitor comparing imaging models"
  },
  {
    "id": 25,
    "department": 9,
    "title": "Skin as a barrier",
    "teach": "Skin helps protect the body from the environment and reduces water loss. A model with coverings can show how barriers influence evaporation; living skin also has cells, blood vessels and glands.",
    "labels": [
      "Uncovered",
      "Partial cover",
      "Full cover"
    ],
    "values": [
      30,
      18,
      6
    ],
    "unit": "mL model water loss",
    "claim": "Skin is completely waterproof and never loses water.",
    "investigation": "Plan an evaporation experiment with equal starting amounts and explain what a covering model cannot demonstrate.",
    "audience": "A student investigating protective barriers"
  },
  {
    "id": 26,
    "department": 9,
    "title": "Temperature and sweating",
    "teach": "Sweat evaporation can help cool the body. Airflow, humidity and exposed surface area affect evaporation. A damp-cloth model demonstrates cooling but does not reproduce all temperature regulation.",
    "labels": [
      "Dry cloth",
      "Damp still air",
      "Damp moving air"
    ],
    "values": [
      1,
      3,
      6
    ],
    "unit": "°C model cooling",
    "claim": "Sweat cools the body only because liquid water is always cold.",
    "investigation": "Explain evaporation and design a fair model test of airflow with equal cloth and water amounts.",
    "audience": "A student wondering why a fan feels cooler"
  },
  {
    "id": 27,
    "department": 9,
    "title": "Sunlight and protective materials",
    "teach": "Ultraviolet radiation can affect skin. A UV-sensitive bead experiment compares a material's effect under controlled conditions; it does not establish real-world protection ratings.",
    "labels": [
      "No cover",
      "Cover A",
      "Cover B"
    ],
    "values": [
      18,
      9,
      3
    ],
    "unit": "model colour score",
    "claim": "One bead test proves a material protects everyone for an entire day.",
    "investigation": "Propose repeated measurements under equal exposure and identify two limits of the bead model.",
    "audience": "A science fair visitor learning about UV evidence"
  },
  {
    "id": 28,
    "department": 10,
    "title": "How immune memory works",
    "teach": "The immune system recognizes threats through several mechanisms. Some immune cells can remember earlier encounters, enabling faster or stronger responses. A simplified model is not a prediction of an individual's immune response.",
    "labels": [
      "First model exposure",
      "Second model exposure",
      "Third model exposure"
    ],
    "values": [
      12,
      6,
      4
    ],
    "unit": "model response time units",
    "claim": "Immune memory means nobody can ever become sick again.",
    "investigation": "Explain why a faster model response does not mean perfect protection and propose a fair comparison of trials.",
    "audience": "A younger student learning about immune memory"
  },
  {
    "id": 29,
    "department": 10,
    "title": "The antibody matching model",
    "teach": "Antibodies bind to particular molecular features. Different antibodies recognize different targets. A shape-matching game illustrates specificity but cannot represent the entire immune system.",
    "labels": [
      "Target A",
      "Target B",
      "Target C"
    ],
    "values": [
      8,
      2,
      6
    ],
    "unit": "model matches",
    "claim": "One antibody matches every possible target equally well.",
    "investigation": "Design a matching investigation with equal numbers of pieces and explain why shape matching is a limited analogy.",
    "audience": "A student using a lock-and-key model"
  },
  {
    "id": 30,
    "department": 10,
    "title": "Multiple layers of defence",
    "teach": "Skin, mucus and other barriers help prevent entry of threats; immune cells respond in different ways when threats enter. A model can compare barriers, but real defences interact.",
    "labels": [
      "One barrier",
      "Two barriers",
      "Three barriers"
    ],
    "values": [
      24,
      12,
      6
    ],
    "unit": "model particles passing",
    "claim": "Only antibodies defend the body; physical barriers do nothing.",
    "investigation": "Describe two different layers of defence and design a controlled model comparison.",
    "audience": "A student building a model of body defences"
  },
  {
    "id": 31,
    "department": 11,
    "title": "Transmission in a contact model",
    "teach": "Some infectious agents can spread through contact, droplets or other routes depending on the agent. A harmless coloured-token simulation represents transfer, not real infection or individual risk.",
    "labels": [
      "One exchange",
      "Two exchanges",
      "Three exchanges"
    ],
    "values": [
      4,
      10,
      18
    ],
    "unit": "model marked tokens",
    "claim": "Every contact with a marked token means a person becomes ill.",
    "investigation": "Explain the distinction between exposure and illness, and design a controlled token-transfer comparison.",
    "audience": "A classmate interpreting a contact simulation"
  },
  {
    "id": 32,
    "department": 11,
    "title": "Evaluating handwashing evidence",
    "teach": "Handwashing can reduce the transfer of many germs. A glitter or washable-paint model measures visible residue, not actual pathogens. Equal starting amounts and consistent procedures help compare results.",
    "labels": [
      "Method A",
      "Method B",
      "Method C"
    ],
    "values": [
      18,
      10,
      4
    ],
    "unit": "model residue units",
    "claim": "If no glitter is visible, there can never be any germs left.",
    "investigation": "Design a fair comparison of fictional washing methods without growing or handling microorganisms.",
    "audience": "A student planning a classroom demonstration"
  },
  {
    "id": 33,
    "department": 11,
    "title": "A fictional school outbreak chart",
    "teach": "A chart of reported illness counts can reveal a time pattern, but counts alone cannot identify a cause. Reporting, testing, attendance and other factors may influence the numbers. Real outbreak investigations are conducted by qualified professionals.",
    "labels": [
      "Week 1",
      "Week 2",
      "Week 3"
    ],
    "values": [
      5,
      12,
      8
    ],
    "unit": "fictional reports",
    "claim": "The highest weekly count proves exactly where the illness started.",
    "investigation": "Identify two additional types of evidence that could help investigate a fictional pattern without identifying individuals.",
    "audience": "A school newspaper reader"
  },
  {
    "id": 34,
    "department": 12,
    "title": "The fair-test challenge",
    "teach": "A fair test changes one independent variable while controlling relevant conditions. The dependent variable is what is measured. Repetition helps reveal variability.",
    "labels": [
      "Trial A",
      "Trial B",
      "Trial C"
    ],
    "values": [
      14,
      16,
      30
    ],
    "unit": "model score",
    "claim": "The single highest score must be the true result, so all other trials should be erased.",
    "investigation": "Design a repeat experiment and explain why an unexpected result should be recorded rather than discarded without reason.",
    "audience": "A research team deciding how to report data"
  },
  {
    "id": 35,
    "department": 12,
    "title": "Association is not proof of cause",
    "teach": "Two measurements may change together without one causing the other. A third variable or chance may help explain an association. A controlled experiment can test some causal questions.",
    "labels": [
      "Group A",
      "Group B",
      "Group C"
    ],
    "values": [
      12,
      20,
      28
    ],
    "unit": "fictional task score",
    "claim": "A higher score in one group proves the group label caused the difference.",
    "investigation": "Propose two alternative explanations and a fair study design to test a specific cause.",
    "audience": "A student interpreting a headline"
  },
  {
    "id": 36,
    "department": 12,
    "title": "Comparing evidence quality",
    "teach": "A claim is stronger when supported by clear methods, appropriate comparisons, repeated observations and transparent limitations. A single dramatic story is not equivalent to a systematic study.",
    "labels": [
      "Source A",
      "Source B",
      "Source C"
    ],
    "values": [
      5,
      30,
      60
    ],
    "unit": "observations reported",
    "claim": "The source with the largest number of observations must always be the most trustworthy.",
    "investigation": "Compare sample size with study design and explain two questions you would ask before trusting any source.",
    "audience": "A student researching a medical science question"
  },
  {
    "id": 37,
    "department": 13,
    "title": "Growth measurements over time",
    "teach": "Children grow at different rates. Repeated measurements over time can be more informative than one observation. Fictional height data are for practising measurement, not judging a child's health.",
    "labels": [
      "Year 1",
      "Year 2",
      "Year 3"
    ],
    "values": [
      132,
      138,
      145
    ],
    "unit": "cm",
    "claim": "Every child must grow by exactly the same number of centimetres every year.",
    "investigation": "Explain why repeated consistent measurements matter and why a single fictional growth record cannot define what is healthy for everyone.",
    "audience": "A younger student worried about comparing heights"
  },
  {
    "id": 38,
    "department": 13,
    "title": "Reading and movement practice",
    "teach": "Children develop skills through many interacting factors, including practice, opportunity and development. A fictional task score is not a diagnosis or a measure of overall ability.",
    "labels": [
      "Session A",
      "Session B",
      "Session C"
    ],
    "values": [
      8,
      12,
      18
    ],
    "unit": "model task points",
    "claim": "One timed task tells us everything about a child's abilities.",
    "investigation": "Plan a supportive repeat assessment that collects more than speed and explains what the data cannot tell us.",
    "audience": "A family reading a fictional progress report"
  },
  {
    "id": 39,
    "department": 13,
    "title": "Clear explanations for young patients",
    "teach": "Health communication should use accurate simple language, check understanding and avoid shame. A teach-back task asks a learner to explain an idea in their own words; it is not a test of their worth.",
    "labels": [
      "Explanation A",
      "Explanation B",
      "Explanation C"
    ],
    "values": [
      4,
      7,
      9
    ],
    "unit": "fictional recall points",
    "claim": "Using the longest and hardest medical words always makes an explanation better.",
    "investigation": "Design a fair comparison of explanations and describe how to check understanding respectfully.",
    "audience": "A child who wants to know what a stethoscope does"
  },
  {
    "id": 40,
    "department": 14,
    "title": "Patterns in a wellness diary",
    "teach": "A diary can reveal patterns in activity, sleep and other routines. It cannot establish a diagnosis or prove that one factor caused a change. Individual context matters.",
    "labels": [
      "Day A",
      "Day B",
      "Day C"
    ],
    "values": [
      20,
      35,
      45
    ],
    "unit": "fictional activity minutes",
    "claim": "A single diary entry proves the cause of any health concern.",
    "investigation": "Explain two missing context variables and design a fictional diary with consistent measurements.",
    "audience": "A family learning how to read a simple wellness record"
  },
  {
    "id": 41,
    "department": 14,
    "title": "Understanding screening data",
    "teach": "Screening looks for signs that may warrant further evaluation. A positive screening result is not necessarily a diagnosis, and tests can have false results. This classroom model uses fictional counts only.",
    "labels": [
      "Group A",
      "Group B",
      "Group C"
    ],
    "values": [
      4,
      8,
      12
    ],
    "unit": "fictional flagged results",
    "claim": "Every flagged screening result proves someone has a disease.",
    "investigation": "Explain the difference between screening and confirmation and identify what additional evidence would be needed.",
    "audience": "A student who is confused by the word screening"
  },
  {
    "id": 42,
    "department": 14,
    "title": "Comparing health information",
    "teach": "Health claims can be evaluated by checking the source, evidence, date, methods and limitations. Popularity and advertising do not establish accuracy.",
    "labels": [
      "Post A",
      "Post B",
      "Post C"
    ],
    "values": [
      10,
      40,
      90
    ],
    "unit": "fictional shares",
    "claim": "The most shared health post is automatically the most reliable.",
    "investigation": "Create a checklist for comparing the posts and explain how evidence quality differs from popularity.",
    "audience": "A friend who sees a dramatic health claim online"
  },
  {
    "id": 43,
    "department": 15,
    "title": "Prioritizing information",
    "teach": "Emergency teams collect important information quickly and work within professional protocols. A classroom sorting exercise practises communication and reasoning; it does not teach real-world triage decisions.",
    "labels": [
      "Report A",
      "Report B",
      "Report C"
    ],
    "values": [
      2,
      4,
      6
    ],
    "unit": "relevant facts recorded",
    "claim": "A longer report always contains more useful information.",
    "investigation": "Design a concise fictional incident report with clearly separated observations and unknowns.",
    "audience": "A teammate who needs a clear handover"
  },
  {
    "id": 44,
    "department": 15,
    "title": "Team communication under pressure",
    "teach": "Clear communication includes stating relevant observations, checking understanding and identifying uncertainty. Repeating a key message accurately can reduce misunderstandings in a team simulation.",
    "labels": [
      "Method A",
      "Method B",
      "Method C"
    ],
    "values": [
      5,
      8,
      10
    ],
    "unit": "fictional facts recalled",
    "claim": "Repeating a message accurately is a waste of time.",
    "investigation": "Design a safe team-message experiment that compares communication methods and identifies sources of error.",
    "audience": "A teammate joining a fictional emergency simulation"
  },
  {
    "id": 45,
    "department": 15,
    "title": "Tracking change, not guessing",
    "teach": "Repeated measurements can reveal trends. A measurement may be affected by equipment, procedure and timing; trends require context. Real emergencies require qualified help, not classroom diagnosis.",
    "labels": [
      "Time A",
      "Time B",
      "Time C"
    ],
    "values": [
      28,
      20,
      12
    ],
    "unit": "model reading units",
    "claim": "A single unusual number always proves the exact cause of an emergency.",
    "investigation": "Explain why timing and consistent measurement matter and write a fictional handover that distinguishes facts from guesses.",
    "audience": "A team member reviewing a simulation chart"
  },
  {
    "id": 46,
    "department": 2,
    "title": "Integrated case: oxygen delivery",
    "teach": "The respiratory system exchanges gases, the circulatory system transports them and muscles use oxygen during activity. A model can compare delivery under different conditions without representing real clinical measurements.",
    "labels": [
      "Condition A",
      "Condition B",
      "Condition C"
    ],
    "values": [
      16,
      32,
      48
    ],
    "unit": "model oxygen delivery units",
    "claim": "The heart makes oxygen and the lungs pump it through arteries.",
    "investigation": "Trace oxygen through at least three body systems and propose a fair test of one model variable.",
    "audience": "A younger student asking how a muscle gets oxygen"
  },
  {
    "id": 47,
    "department": 5,
    "title": "Integrated case: nutrients and waste",
    "teach": "The digestive system absorbs nutrients, blood distributes substances, and kidneys help regulate water and remove certain wastes. These systems work together rather than in isolation.",
    "labels": [
      "Stage A",
      "Stage B",
      "Stage C"
    ],
    "values": [
      60,
      40,
      20
    ],
    "unit": "model substance units",
    "claim": "The small intestine and kidneys do exactly the same job.",
    "investigation": "Explain how absorption, transport and removal differ; design a labelled model that keeps those roles separate.",
    "audience": "A student learning how body systems cooperate"
  },
  {
    "id": 48,
    "department": 12,
    "title": "Integrated case: research conclusion",
    "teach": "A strong scientific conclusion connects a claim to specific evidence and explains limitations. Repeated trials and controlled comparisons support reasoning, but a model remains a simplification.",
    "labels": [
      "Control",
      "Test A",
      "Test B"
    ],
    "values": [
      20,
      30,
      50
    ],
    "unit": "model outcome units",
    "claim": "A convincing graph is enough evidence to prove every possible explanation.",
    "investigation": "Write a fair follow-up plan that distinguishes competing explanations and names a measurable outcome.",
    "audience": "A science fair judge evaluating a fictional medical model"
  }
];
