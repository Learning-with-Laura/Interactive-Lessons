// All records are fictional educational models, not clinical advice or real patient records.
export const patientFiles = [
  {
    "id": 61,
    "department": 1,
    "title": "Blood sample detective",
    "history": "A teaching laboratory receives three prepared slides from a simulated blood-sample study. The team must compare equal microscope fields without drawing a diagnosis.",
    "teach": "Red blood cells carry oxygen, white blood cells participate in immune responses, and platelets help blood clot. Staining improves contrast. A field count is only part of a specimen.",
    "labels": [
      "Field A",
      "Field B",
      "Field C"
    ],
    "values": [
      18,
      27,
      36
    ],
    "unit": "cells per equal field",
    "claim": "More visible cells always means the microscope is stronger.",
    "investigation": "Design a sampling plan using equal fields and repeated counts; explain what the laboratory cannot conclude from the model.",
    "decision": "Which observation makes the comparison fair?",
    "options": [
      "Equal field areas",
      "Different magnification for every sample",
      "Counting only crowded fields"
    ],
    "key": 0,
    "reason": "Compare the same area at the same magnification.",
    "specialty": "Laboratory Medicine",
    "audience": "a fictional patient or family member who is learning about laboratory medicine"
  },
  {
    "id": 62,
    "department": 2,
    "title": "A bicycle ride and the recovery curve",
    "history": "A fictional student cycles at a comfortable pace in a classroom simulation. The team records a pulse before activity and during recovery.",
    "teach": "The heart supplies tissues with blood. During activity muscles use more oxygen. Recovery depends on effort, timing, rest and individual factors. A classroom pulse record does not diagnose illness.",
    "labels": [
      "Resting",
      "Immediately after",
      "Five minutes later"
    ],
    "values": [
      78,
      138,
      86
    ],
    "unit": "beats/min",
    "claim": "A higher pulse always proves a heart problem.",
    "investigation": "Plan a fair comparison of two activities and describe what other evidence would help explain recovery.",
    "decision": "What is most useful when comparing two recovery records?",
    "options": [
      "Use different measurement times",
      "Use the same workload and recovery times",
      "Ignore the resting readings"
    ],
    "key": 1,
    "reason": "Consistent measurements allow meaningful comparison.",
    "specialty": "Cardiology",
    "audience": "a fictional patient or family member who is learning about cardiology"
  },
  {
    "id": 63,
    "department": 3,
    "title": "The air-sac model",
    "history": "A fictional school group builds three models of lungs with different exposed membrane areas. They ask why real lungs have many tiny air sacs.",
    "teach": "Alveoli are tiny air sacs surrounded by capillaries. Oxygen diffuses into blood and carbon dioxide moves out of it. Large surface area helps gas exchange. A model cannot reproduce the whole living lung.",
    "labels": [
      "Model A",
      "Model B",
      "Model C"
    ],
    "values": [
      8,
      16,
      24
    ],
    "unit": "transfer units",
    "claim": "Oxygen is made inside the lungs.",
    "investigation": "Design an experiment changing only membrane surface area; explain how gas exchange differs from air movement.",
    "decision": "What structure exchanges gases with nearby blood?",
    "options": [
      "Diaphragm",
      "Trachea",
      "Alveoli"
    ],
    "key": 2,
    "reason": "The diaphragm moves air; alveoli exchange gases.",
    "specialty": "Respirology",
    "audience": "a fictional patient or family member who is learning about respirology"
  },
  {
    "id": 64,
    "department": 4,
    "title": "The folded intestine puzzle",
    "history": "A fictional patient asks why the small intestine is so long and folded. The teaching team uses absorbent models to compare surface area.",
    "teach": "The small intestine absorbs most digested nutrients. Folds, villi and microvilli increase its surface area. The blood and lymph transport absorbed substances. A paper model is not actual tissue.",
    "labels": [
      "Flat model",
      "Folded model",
      "Many folds"
    ],
    "values": [
      9,
      18,
      27
    ],
    "unit": "model transfer units",
    "claim": "All nutrients enter the body through the stomach.",
    "investigation": "Design a fair test using equal material and explain why absorption is not the same as digestion.",
    "decision": "Which structure increases intestinal absorption area?",
    "options": [
      "Villi",
      "Ribs",
      "Ureters"
    ],
    "key": 0,
    "reason": "Villi increase surface area.",
    "specialty": "Gastroenterology",
    "audience": "a fictional patient or family member who is learning about gastroenterology"
  },
  {
    "id": 65,
    "department": 5,
    "title": "The water-balance record",
    "history": "A fictional teaching model tracks water entering and leaving a body system. The team compares three periods with the same duration.",
    "teach": "Kidneys regulate water and dissolved substances; some water leaves through skin and breathing. Urine is formed in kidneys and travels to the bladder. Water balance requires considering multiple routes.",
    "labels": [
      "Period A",
      "Period B",
      "Period C"
    ],
    "values": [
      180,
      300,
      240
    ],
    "unit": "mL model urine output",
    "claim": "Urine output alone tells us everything about hydration.",
    "investigation": "Plan a complete water-balance record, noting other routes of water loss and intake.",
    "decision": "Which structure stores urine before it leaves the body?",
    "options": [
      "Kidney",
      "Bladder",
      "Small intestine"
    ],
    "key": 1,
    "reason": "Kidneys produce urine; the bladder stores it.",
    "specialty": "Nephrology",
    "audience": "a fictional patient or family member who is learning about nephrology"
  },
  {
    "id": 66,
    "department": 6,
    "title": "The reflex and reaction-time lab",
    "history": "A fictional clinic demonstrates a knee reflex, followed by a classroom ruler-drop reaction task. The activities are compared without making clinical diagnoses.",
    "teach": "A reflex can be coordinated by the spinal cord. A deliberate reaction uses sensory information, brain processing and motor signals. Reaction-time tasks include several processes and vary with attention and practice.",
    "labels": [
      "Round A",
      "Round B",
      "Round C"
    ],
    "values": [
      320,
      280,
      250
    ],
    "unit": "ms",
    "claim": "Every quick movement is an automatic reflex.",
    "investigation": "Design a safe repeated reaction-time task, control distractions, and explain why a ruler-drop result is not the same as a reflex test.",
    "decision": "What carries a signal from the spinal cord towards a muscle?",
    "options": [
      "A sensory nerve",
      "A tendon",
      "A motor nerve"
    ],
    "key": 2,
    "reason": "Motor nerves carry outgoing signals to muscles.",
    "specialty": "Neurology",
    "audience": "a fictional patient or family member who is learning about neurology"
  },
  {
    "id": 67,
    "department": 7,
    "title": "The model joint workshop",
    "history": "A fictional sports clinic uses a hinged model and different load positions to teach how muscles, tendons and bones work together.",
    "teach": "Tendons attach muscle to bone, ligaments connect bone to bone, and cartilage helps reduce friction at joints. Muscles pull when they contract. Load position changes turning effects.",
    "labels": [
      "Close to hinge",
      "Middle",
      "Far from hinge"
    ],
    "values": [
      10,
      20,
      30
    ],
    "unit": "cm from hinge",
    "claim": "Tendons and ligaments have exactly the same role.",
    "investigation": "Design a fair model test of load distance; explain how the model differs from a real joint.",
    "decision": "Which structure connects muscle to bone?",
    "options": [
      "Tendon",
      "Ligament",
      "Cartilage"
    ],
    "key": 0,
    "reason": "Tendons transmit muscle pull to bones.",
    "specialty": "Orthopaedics",
    "audience": "a fictional patient or family member who is learning about orthopaedics"
  },
  {
    "id": 68,
    "department": 8,
    "title": "The imaging conference",
    "history": "A fictional care team compares images of a model joint. They want to understand which imaging principles could reveal different structures.",
    "teach": "X-rays use ionizing radiation and show differences in absorption. Ultrasound uses returning sound echoes. MRI uses magnetic fields and radio waves. Imaging choices depend on the question and professional assessment.",
    "labels": [
      "Model image A",
      "Model image B",
      "Model image C"
    ],
    "values": [
      12,
      20,
      28
    ],
    "unit": "visible model details",
    "claim": "The image with the most details is always the most useful for every question.",
    "investigation": "Develop criteria for comparing images, including the question being investigated and what structures are visible.",
    "decision": "Which technology uses returning sound waves?",
    "options": [
      "MRI",
      "Ultrasound",
      "X-ray"
    ],
    "key": 1,
    "reason": "Ultrasound forms images from echoes.",
    "specialty": "Radiology",
    "audience": "a fictional patient or family member who is learning about radiology"
  },
  {
    "id": 69,
    "department": 9,
    "title": "The evaporation experiment",
    "history": "A fictional school science group investigates how airflow influences cooling of a damp cloth as a model of skin.",
    "teach": "Skin is a protective barrier and helps regulate temperature. Evaporation transfers heat as water becomes vapour. Humidity and airflow influence evaporation. The cloth model has no blood flow.",
    "labels": [
      "Dry cloth",
      "Damp still air",
      "Damp moving air"
    ],
    "values": [
      1,
      4,
      7
    ],
    "unit": "°C model cooling",
    "claim": "Sweat removes heat only because the liquid starts cold.",
    "investigation": "Plan a controlled airflow test with equal starting water, cloth size and temperature; explain limits.",
    "decision": "Which process occurs when liquid sweat becomes water vapour?",
    "options": [
      "Filtration",
      "Digestion",
      "Evaporation"
    ],
    "key": 2,
    "reason": "Evaporation can cool the skin.",
    "specialty": "Dermatology",
    "audience": "a fictional patient or family member who is learning about dermatology"
  },
  {
    "id": 70,
    "department": 10,
    "title": "The immune recognition workshop",
    "history": "A fictional teaching lab uses three shape-matching trays to model how antibodies recognize molecular features.",
    "teach": "Antibodies recognize particular features of targets. Many immune cells and physical barriers also contribute to defence. A shape model represents specificity but not a complete immune response.",
    "labels": [
      "Tray A",
      "Tray B",
      "Tray C"
    ],
    "values": [
      5,
      15,
      25
    ],
    "unit": "model matches",
    "claim": "One antibody binds every target equally well.",
    "investigation": "Design a controlled matching experiment with equal piece counts and describe two limits of the analogy.",
    "decision": "Which concept does a matching antibody model illustrate?",
    "options": [
      "Specificity",
      "Bone movement",
      "Digestion"
    ],
    "key": 0,
    "reason": "An antibody recognizes particular molecular features.",
    "specialty": "Immunology",
    "audience": "a fictional patient or family member who is learning about immunology"
  },
  {
    "id": 71,
    "department": 11,
    "title": "The school attendance mystery",
    "history": "A fictional school records anonymous weekly absence reports. The team must decide what the pattern can and cannot show.",
    "teach": "Counts may change with reporting, attendance, testing or other factors. Infectious agents can spread in different ways. A change in reports does not prove a cause or identify an individual.",
    "labels": [
      "Week 1",
      "Week 2",
      "Week 3"
    ],
    "values": [
      6,
      18,
      12
    ],
    "unit": "fictional reports",
    "claim": "A high weekly count proves exactly where an infection began.",
    "investigation": "Design an anonymous evidence collection plan with two alternative explanations; avoid identifying individuals.",
    "decision": "What does a higher weekly count establish?",
    "options": [
      "The exact source of illness",
      "More reports were recorded",
      "Everyone had the same infection"
    ],
    "key": 1,
    "reason": "The count describes reports, not their cause.",
    "specialty": "Infectious Diseases",
    "audience": "a fictional patient or family member who is learning about infectious diseases"
  },
  {
    "id": 72,
    "department": 12,
    "title": "The unreliable experiment",
    "history": "A fictional research group compares three trials using identical equipment. One reading is unexpectedly high.",
    "teach": "Repeated trials can reveal variation. A fair test changes one factor while controlling others. An unexpected result should be investigated and recorded, not removed without justification.",
    "labels": [
      "Trial 1",
      "Trial 2",
      "Trial 3"
    ],
    "values": [
      14,
      16,
      34
    ],
    "unit": "model outcome points",
    "claim": "A single unusually high result must be the correct answer.",
    "investigation": "Design a repeat experiment, identify variables, and explain how to report an unexpected result honestly.",
    "decision": "What should researchers do with an unexpected reading?",
    "options": [
      "Erase it immediately",
      "Use only that reading",
      "Record it and investigate"
    ],
    "key": 2,
    "reason": "Transparent reporting preserves evidence.",
    "specialty": "Medical Research",
    "audience": "a fictional patient or family member who is learning about medical research"
  },
  {
    "id": 73,
    "department": 13,
    "title": "The growth-chart conversation",
    "history": "A fictional paediatric team reviews three annual height measurements for a made-up child. The goal is to practise interpreting change, not to decide what is healthy.",
    "teach": "Growth varies among children and over time. Consistent repeated measurements show patterns better than a single number. Health assessments require individual context and qualified professionals.",
    "labels": [
      "Year A",
      "Year B",
      "Year C"
    ],
    "values": [
      132,
      139,
      147
    ],
    "unit": "cm",
    "claim": "Every child grows exactly the same number of centimetres each year.",
    "investigation": "Explain how consistent measurement and age context matter; write a respectful explanation of variation.",
    "decision": "Which evidence best describes growth over time?",
    "options": [
      "Several consistent measurements",
      "One measurement alone",
      "A friend's height"
    ],
    "key": 0,
    "reason": "Repeated measurements reveal change.",
    "specialty": "Paediatrics",
    "audience": "a fictional patient or family member who is learning about paediatrics"
  },
  {
    "id": 74,
    "department": 14,
    "title": "A health-information appointment",
    "history": "A fictional family brings three online health posts to a clinic teaching session. The team compares popularity with evidence.",
    "teach": "Family physicians provide ongoing care, prevention and referral. Trustworthy information depends on source, evidence, methods, date and limitations rather than popularity.",
    "labels": [
      "Post A",
      "Post B",
      "Post C"
    ],
    "values": [
      12,
      40,
      84
    ],
    "unit": "fictional shares",
    "claim": "The most shared claim is automatically true.",
    "investigation": "Create a checklist to assess evidence, compare source quality and describe when professional advice is needed.",
    "decision": "Which factor is most important for evaluating a scientific health claim?",
    "options": [
      "Number of likes",
      "Quality of supporting evidence",
      "Length of headline"
    ],
    "key": 1,
    "reason": "Popularity is not evidence quality.",
    "specialty": "Family Medicine",
    "audience": "a fictional patient or family member who is learning about family medicine"
  },
  {
    "id": 75,
    "department": 15,
    "title": "The simulation handover",
    "history": "A fictional emergency training team compares three handover methods. The goal is to communicate facts clearly rather than diagnose or make treatment decisions.",
    "teach": "Clear handovers distinguish observations, times, known information and uncertainty. Team members check that messages are understood. Classroom simulation is not real emergency training.",
    "labels": [
      "Method A",
      "Method B",
      "Method C"
    ],
    "values": [
      4,
      7,
      10
    ],
    "unit": "facts accurately recalled",
    "claim": "Longer reports always contain more useful information.",
    "investigation": "Design a fair comparison of communication methods and prepare a concise factual handover.",
    "decision": "What belongs in a factual handover?",
    "options": [
      "A guess stated as fact",
      "An irrelevant story",
      "A clear observation and its time"
    ],
    "key": 2,
    "reason": "Facts and timing support accurate communication.",
    "specialty": "Emergency Medicine",
    "audience": "a fictional patient or family member who is learning about emergency medicine"
  },
  {
    "id": 76,
    "department": 6,
    "title": "The eye and light",
    "history": "A fictional vision science lab compares light passing through model openings. A student wonders how the eye focuses an image.",
    "teach": "The cornea and lens bend light; the iris regulates pupil size; the retina contains light-sensitive cells that send signals through the optic nerve. Ophthalmologists specialize in eye health.",
    "labels": [
      "Small opening",
      "Medium opening",
      "Large opening"
    ],
    "values": [
      12,
      24,
      36
    ],
    "unit": "model light units",
    "claim": "The pupil is a light-sensitive nerve at the back of the eye.",
    "investigation": "Design a safe model investigation using paper openings and a lamp, never looking at the Sun; explain the roles of lens and retina.",
    "decision": "Which structure detects light at the back of the eye?",
    "options": [
      "Retina",
      "Iris",
      "Cornea"
    ],
    "key": 0,
    "reason": "The retina converts light into signals.",
    "specialty": "Ophthalmology",
    "audience": "a fictional patient or family member who is learning about ophthalmology"
  },
  {
    "id": 77,
    "department": 6,
    "title": "Sound and the hearing pathway",
    "history": "A fictional ENT teaching clinic uses a model vibration experiment. A student asks how a sound becomes information in the brain.",
    "teach": "The outer ear collects sound. The eardrum vibrates, tiny middle-ear bones transmit vibrations, and the cochlea converts them into signals carried by the auditory nerve. ENT specialists care for ears, nose and throat.",
    "labels": [
      "Model A",
      "Model B",
      "Model C"
    ],
    "values": [
      8,
      16,
      24
    ],
    "unit": "model vibration units",
    "claim": "Sound travels as a bone directly to the brain.",
    "investigation": "Plan a safe vibration comparison at ordinary sound levels; trace the pathway from outer ear to brain.",
    "decision": "Which inner-ear structure helps turn vibrations into nerve signals?",
    "options": [
      "Eardrum",
      "Cochlea",
      "Nose"
    ],
    "key": 1,
    "reason": "The cochlea contains sensory cells involved in hearing.",
    "specialty": "Otolaryngology (ENT)",
    "audience": "a fictional patient or family member who is learning about otolaryngology (ent)"
  },
  {
    "id": 78,
    "department": 4,
    "title": "Hormone messages and feedback",
    "history": "A fictional endocrine lab uses coloured tokens to represent a signal sent between model organs. The team examines a feedback loop.",
    "teach": "Hormones are chemical messengers released into blood by endocrine glands. Target cells respond to specific signals. Feedback helps regulate body processes. Endocrinologists study hormonal conditions.",
    "labels": [
      "Initial model",
      "Response model",
      "Feedback model"
    ],
    "values": [
      20,
      40,
      30
    ],
    "unit": "signal tokens",
    "claim": "Hormones are electrical messages that never travel through blood.",
    "investigation": "Design a token feedback model, identify its inputs and outputs, and explain why the model is not a real blood test.",
    "decision": "How do many hormones reach their target cells?",
    "options": [
      "Through the bones only",
      "Through airways",
      "Through the bloodstream"
    ],
    "key": 2,
    "reason": "Hormones commonly travel in blood.",
    "specialty": "Endocrinology",
    "audience": "a fictional patient or family member who is learning about endocrinology"
  },
  {
    "id": 79,
    "department": 1,
    "title": "Blood components and transport",
    "history": "A fictional haematology teaching lab counts coloured model particles representing different blood components. The group compares what each component does.",
    "teach": "Red blood cells carry oxygen; white blood cells contribute to defence; platelets help with clotting; plasma carries dissolved substances. Haematologists investigate blood and related disorders.",
    "labels": [
      "Red model tokens",
      "White model tokens",
      "Platelet tokens"
    ],
    "values": [
      36,
      8,
      16
    ],
    "unit": "model tokens",
    "claim": "All blood components have the same job.",
    "investigation": "Design a sorting model and describe two limitations of using tokens to represent blood.",
    "decision": "Which component helps carry oxygen?",
    "options": [
      "Red blood cells",
      "Platelets",
      "Plasma alone"
    ],
    "key": 0,
    "reason": "Haemoglobin in red blood cells carries oxygen.",
    "specialty": "Haematology",
    "audience": "a fictional patient or family member who is learning about haematology"
  },
  {
    "id": 80,
    "department": 12,
    "title": "Cell division and cancer research",
    "history": "A fictional oncology science model compares cell-group counts at three times. It does not represent a real tumour or patient.",
    "teach": "Cells divide as part of growth and repair. Cell division is normally regulated; cancer involves abnormal growth and other changes. Oncologists specialize in cancer care. A model count cannot diagnose cancer.",
    "labels": [
      "Start",
      "Later A",
      "Later B"
    ],
    "values": [
      10,
      20,
      40
    ],
    "unit": "model cells",
    "claim": "All cell division is cancer.",
    "investigation": "Plan a model comparison of controlled and uncontrolled growth, and explain why real tissue evidence is more complex.",
    "decision": "Why do healthy bodies need cell division?",
    "options": [
      "Only to cause illness",
      "Growth and repair",
      "To stop all tissue renewal"
    ],
    "key": 1,
    "reason": "Normal cell division supports growth and repair.",
    "specialty": "Oncology",
    "audience": "a fictional patient or family member who is learning about oncology"
  },
  {
    "id": 81,
    "department": 12,
    "title": "DNA and inherited information",
    "history": "A fictional genetics laboratory uses letter sequences representing parts of DNA. The group investigates similarities and differences.",
    "teach": "DNA stores genetic information. Genes are sections of DNA that influence traits or biological processes. Many traits involve multiple genes and environment. Genetic specialists interpret information with context.",
    "labels": [
      "Sequence A",
      "Sequence B",
      "Sequence C"
    ],
    "values": [
      12,
      18,
      24
    ],
    "unit": "matching model letters",
    "claim": "Every trait is determined by exactly one gene.",
    "investigation": "Design a letter-sequence comparison and explain why a classroom model cannot predict someone's health.",
    "decision": "What stores inherited biological information?",
    "options": [
      "Cartilage",
      "A stethoscope",
      "DNA"
    ],
    "key": 2,
    "reason": "DNA carries genetic information.",
    "specialty": "Genetics",
    "audience": "a fictional patient or family member who is learning about genetics"
  },
  {
    "id": 82,
    "department": 1,
    "title": "Tissue samples and pathology",
    "history": "A fictional pathology lab compares non-patient teaching slides. The aim is to learn how structure and staining provide evidence.",
    "teach": "Pathologists examine tissues, cells and other specimens to help understand disease. Staining highlights structures. A single classroom image does not establish a diagnosis.",
    "labels": [
      "Slide A",
      "Slide B",
      "Slide C"
    ],
    "values": [
      12,
      24,
      18
    ],
    "unit": "visible model structures",
    "claim": "A darker stain always proves disease.",
    "investigation": "Plan a fair slide comparison using consistent lighting and staining; identify other evidence that a professional would need.",
    "decision": "What is the focus of pathology?",
    "options": [
      "Studying tissue and other evidence of disease",
      "Measuring weather",
      "Recording sports scores"
    ],
    "key": 0,
    "reason": "Pathologists study evidence about disease.",
    "specialty": "Pathology",
    "audience": "a fictional patient or family member who is learning about pathology"
  },
  {
    "id": 83,
    "department": 15,
    "title": "Monitoring during a simulated operation",
    "history": "A fictional surgical education team studies a model monitor, with no real medication or procedure decisions.",
    "teach": "Anaesthesiologists care for patients before, during and after procedures, manage comfort and monitor vital functions. Monitors provide information that needs professional interpretation.",
    "labels": [
      "Model time A",
      "Model time B",
      "Model time C"
    ],
    "values": [
      70,
      78,
      74
    ],
    "unit": "fictional pulse readings",
    "claim": "One monitor reading tells the whole story.",
    "investigation": "Design a fictional monitoring log including timing, equipment checks and uncertainties.",
    "decision": "Why do teams record measurements over time?",
    "options": [
      "To replace professional assessment",
      "To notice changes and patterns",
      "To make all readings identical"
    ],
    "key": 1,
    "reason": "Trends can provide context.",
    "specialty": "Anaesthesiology",
    "audience": "a fictional patient or family member who is learning about anaesthesiology"
  },
  {
    "id": 84,
    "department": 7,
    "title": "Surgical anatomy and planning",
    "history": "A fictional surgery education workshop uses a model of layered tissues. The team practises anatomy identification, not surgical technique.",
    "teach": "Surgeons use detailed anatomy and coordinated teamwork. Skin, connective tissue, muscle, blood vessels and nerves have different functions. Real procedures require specialized training and safety protocols.",
    "labels": [
      "Model layer A",
      "Model layer B",
      "Model layer C"
    ],
    "values": [
      5,
      10,
      15
    ],
    "unit": "mm model thickness",
    "claim": "Every body layer performs exactly the same job.",
    "investigation": "Design a labelled anatomy model and explain why accurate structure identification matters for a professional team.",
    "decision": "Why does anatomy matter in surgical planning?",
    "options": [
      "All tissues are identical",
      "Only colour matters",
      "Different structures have different roles"
    ],
    "key": 2,
    "reason": "Anatomical knowledge helps identify structures.",
    "specialty": "General Surgery",
    "audience": "a fictional patient or family member who is learning about general surgery"
  },
  {
    "id": 85,
    "department": 7,
    "title": "Movement and rehabilitation",
    "history": "A fictional rehabilitation team compares repeated model movement tasks. The aim is to understand progress tracking without judging a real person.",
    "teach": "Rehabilitation supports function, participation and independence. Different professionals may work together. Progress can include comfort, confidence and ability, not merely speed.",
    "labels": [
      "Session A",
      "Session B",
      "Session C"
    ],
    "values": [
      8,
      12,
      16
    ],
    "unit": "model task points",
    "claim": "A faster time always proves complete recovery.",
    "investigation": "Design a respectful fictional progress record with more than one outcome; explain what the model cannot determine.",
    "decision": "What is an important rehabilitation goal?",
    "options": [
      "Meaningful function and independence",
      "Perfect speed for everyone",
      "Ignoring patient goals"
    ],
    "key": 0,
    "reason": "Rehabilitation emphasizes function and participation.",
    "specialty": "Rehabilitation Medicine",
    "audience": "a fictional patient or family member who is learning about rehabilitation medicine"
  },
  {
    "id": 86,
    "department": 7,
    "title": "Sports science and workload",
    "history": "A fictional sports medicine team compares model movement scores after three different practice conditions.",
    "teach": "Sports medicine addresses physical activity, injury prevention and recovery. Fair comparisons consider workload, rest, technique and conditions. One score does not determine injury or fitness.",
    "labels": [
      "Practice A",
      "Practice B",
      "Practice C"
    ],
    "values": [
      15,
      25,
      35
    ],
    "unit": "model movement points",
    "claim": "One task score proves a person will never be injured.",
    "investigation": "Design a comparison controlling workload and rest; name two other factors that might affect scores.",
    "decision": "Which makes a practice comparison fairer?",
    "options": [
      "Change every condition",
      "Use the same measurement method",
      "Ignore the starting point"
    ],
    "key": 1,
    "reason": "Consistent methods support comparison.",
    "specialty": "Sports Medicine",
    "audience": "a fictional patient or family member who is learning about sports medicine"
  },
  {
    "id": 87,
    "department": 12,
    "title": "How medicines interact with cells",
    "history": "A fictional pharmacology lab uses shapes to model molecules binding to receptors. No real medicines, doses or treatment recommendations are involved.",
    "teach": "Pharmacology studies how substances interact with the body. Receptors can recognize particular molecular features. Effects depend on many factors; real medication decisions require qualified professionals.",
    "labels": [
      "Model A",
      "Model B",
      "Model C"
    ],
    "values": [
      6,
      12,
      18
    ],
    "unit": "model receptor matches",
    "claim": "Every substance binds every receptor equally.",
    "investigation": "Design a safe paper-shape comparison and explain why model binding does not establish real medication effects.",
    "decision": "What does a receptor model illustrate?",
    "options": [
      "All molecules are identical",
      "Bones make medicine",
      "Specific molecular interactions"
    ],
    "key": 2,
    "reason": "Receptors can recognize particular molecular features.",
    "specialty": "Pharmacology",
    "audience": "a fictional patient or family member who is learning about pharmacology"
  },
  {
    "id": 88,
    "department": 11,
    "title": "Population patterns and epidemiology",
    "history": "A fictional public health group compares anonymous counts from equal-sized model populations. They want to distinguish counts, rates and causes.",
    "teach": "Epidemiology studies patterns and factors affecting health in populations. Rates require a denominator; equal sample sizes make counts more comparable. Association does not prove cause.",
    "labels": [
      "Group A",
      "Group B",
      "Group C"
    ],
    "values": [
      8,
      16,
      24
    ],
    "unit": "fictional reports per 100 people",
    "claim": "A higher reported rate proves the exact cause.",
    "investigation": "Design an anonymous fair comparison with consistent definitions and identify possible confounding factors.",
    "decision": "What makes a rate different from a count?",
    "options": [
      "It includes a denominator",
      "It ignores group size",
      "It proves causation"
    ],
    "key": 0,
    "reason": "A rate relates counts to a population or interval.",
    "specialty": "Epidemiology",
    "audience": "a fictional patient or family member who is learning about epidemiology"
  },
  {
    "id": 89,
    "department": 8,
    "title": "Designing an assistive device",
    "history": "A fictional biomedical engineering workshop compares three paper support models. The team investigates strength and accessibility.",
    "teach": "Biomedical engineers apply science and design to medical devices and assistive technologies. Testing considers performance, safety, usability and users' needs. A classroom prototype is not a clinical device.",
    "labels": [
      "Prototype A",
      "Prototype B",
      "Prototype C"
    ],
    "values": [
      20,
      40,
      60
    ],
    "unit": "g model load supported",
    "claim": "The strongest prototype is always best regardless of usability.",
    "investigation": "Design a fair strength test and propose a usability criterion and a safety limitation.",
    "decision": "Which criterion matters alongside strength?",
    "options": [
      "Colour alone",
      "Usability and safety",
      "The longest name"
    ],
    "key": 1,
    "reason": "Devices should serve people safely and effectively.",
    "specialty": "Medical Engineering",
    "audience": "a fictional patient or family member who is learning about medical engineering"
  },
  {
    "id": 90,
    "department": 10,
    "title": "Compatibility in a transplant model",
    "history": "A fictional teaching lab uses paper cards to model matching features. The group explores why transplant teams investigate compatibility.",
    "teach": "The immune system recognizes molecular features. Transplant teams consider compatibility and many other clinical factors. A classroom card model cannot determine real donor suitability.",
    "labels": [
      "Match model A",
      "Match model B",
      "Match model C"
    ],
    "values": [
      4,
      8,
      12
    ],
    "unit": "model feature matches",
    "claim": "A paper matching score determines whether a real transplant is safe.",
    "investigation": "Design a controlled card-matching model and explain why clinical assessment requires additional information.",
    "decision": "Why is compatibility relevant to transplant science?",
    "options": [
      "It controls bone length",
      "It measures reading speed",
      "Immune recognition can affect transplanted tissue"
    ],
    "key": 2,
    "reason": "Immune recognition is one aspect of compatibility.",
    "specialty": "Transplant Medicine",
    "audience": "a fictional patient or family member who is learning about transplant medicine"
  },
  {
    "id": 91,
    "department": 13,
    "title": "Newborn growth and observation",
    "history": "A fictional newborn-care teaching team compares model weight readings over three time points. The activity is not a clinical growth assessment.",
    "teach": "Neonatology focuses on newborns, including babies who need specialized care. Teams monitor growth and body functions using consistent measurements and individual clinical context.",
    "labels": [
      "Time A",
      "Time B",
      "Time C"
    ],
    "values": [
      2800,
      2900,
      3050
    ],
    "unit": "g fictional mass",
    "claim": "One measurement alone tells everything about a newborn's health.",
    "investigation": "Plan a consistent fictional measurement record and explain two missing context factors.",
    "decision": "What is the central focus of neonatology?",
    "options": [
      "Health and care of newborns",
      "Adult joint surgery",
      "Dental cleaning"
    ],
    "key": 0,
    "reason": "Neonatology focuses on newborns.",
    "specialty": "Neonatology",
    "audience": "a fictional patient or family member who is learning about neonatology"
  },
  {
    "id": 92,
    "department": 7,
    "title": "Teeth, enamel and chewing",
    "history": "A fictional oral-health lab compares model materials with different resistance to wear. The team studies why teeth have different shapes.",
    "teach": "Enamel protects the outer surface of teeth; different teeth help bite, tear and grind food. Oral health professionals care for teeth, gums and other mouth structures. Models are not dental assessments.",
    "labels": [
      "Material A",
      "Material B",
      "Material C"
    ],
    "values": [
      6,
      12,
      18
    ],
    "unit": "model wear points",
    "claim": "All teeth have exactly the same shape and function.",
    "investigation": "Design a fair material comparison and explain why tooth shape relates to chewing.",
    "decision": "Which tooth surface layer helps protect the tooth?",
    "options": [
      "Tendon",
      "Enamel",
      "Retina"
    ],
    "key": 1,
    "reason": "Enamel protects the outer tooth surface.",
    "specialty": "Dentistry and Oral Medicine",
    "audience": "a fictional patient or family member who is learning about dentistry and oral medicine"
  },
  {
    "id": 93,
    "department": 5,
    "title": "The urinary pathway and flow",
    "history": "A fictional teaching model compares flow through three tubes. The group distinguishes kidney function from urinary tract structures.",
    "teach": "Kidneys make urine; ureters carry it to the bladder; the urethra carries urine out. Urologists care for the urinary tract and related structures. Nephrologists focus on kidney function.",
    "labels": [
      "Tube A",
      "Tube B",
      "Tube C"
    ],
    "values": [
      15,
      30,
      45
    ],
    "unit": "mL model flow per minute",
    "claim": "The ureter and urethra are the same structure.",
    "investigation": "Create a labelled flow model, control starting volume and explain the difference between nephrology and urology.",
    "decision": "Which structure carries urine from a kidney to the bladder?",
    "options": [
      "Urethra",
      "Artery",
      "Ureter"
    ],
    "key": 2,
    "reason": "The ureters connect kidneys and bladder.",
    "specialty": "Urology",
    "audience": "a fictional patient or family member who is learning about urology"
  },
  {
    "id": 94,
    "department": 10,
    "title": "Joint inflammation and immune science",
    "history": "A fictional rheumatology teaching lab compares model joint movement under different conditions.",
    "teach": "Rheumatologists care for many inflammatory and autoimmune conditions involving joints and other tissues. Inflammation is a response that can involve immune cells and signals. A movement model cannot diagnose disease.",
    "labels": [
      "Model A",
      "Model B",
      "Model C"
    ],
    "values": [
      10,
      20,
      30
    ],
    "unit": "model movement units",
    "claim": "All joint problems are caused by the same immune process.",
    "investigation": "Plan a model comparison with consistent movement measurements and distinguish immune science from structural joint science.",
    "decision": "Which two specialties might contribute different expertise to joint problems?",
    "options": [
      "Rheumatology and orthopaedics",
      "Dentistry and radiology only",
      "Ophthalmology and ENT only"
    ],
    "key": 0,
    "reason": "Rheumatology and orthopaedics bring different expertise.",
    "specialty": "Rheumatology",
    "audience": "a fictional patient or family member who is learning about rheumatology"
  },
  {
    "id": 95,
    "department": 6,
    "title": "Brain science and attention",
    "history": "A fictional mental-health science study compares anonymous task scores in three settings. It does not assess or diagnose any student.",
    "teach": "Psychiatry addresses mental health and behaviour. Brain processes, environment and experience can influence attention and wellbeing. One fictional task cannot establish a diagnosis or describe a person's overall ability.",
    "labels": [
      "Setting A",
      "Setting B",
      "Setting C"
    ],
    "values": [
      12,
      18,
      24
    ],
    "unit": "fictional task points",
    "claim": "A single attention task tells everything about a person's mental health.",
    "investigation": "Design a supportive study with privacy and multiple measurements; explain why scores require context.",
    "decision": "Which conclusion is supported by one fictional task?",
    "options": [
      "A complete diagnosis",
      "Only a description of the recorded performance",
      "A person's worth"
    ],
    "key": 1,
    "reason": "A single score describes only that task.",
    "specialty": "Psychiatry",
    "audience": "a fictional patient or family member who is learning about psychiatry"
  },
  {
    "id": 96,
    "department": 13,
    "title": "Ageing and functional change",
    "history": "A fictional healthy-ageing workshop compares model balance-task results across several practice sessions.",
    "teach": "Geriatric medicine focuses on health and function in older adults. Individuals age differently. Functional assessment considers everyday goals, mobility, environment and multiple sources of information.",
    "labels": [
      "Session A",
      "Session B",
      "Session C"
    ],
    "values": [
      8,
      13,
      17
    ],
    "unit": "fictional task points",
    "claim": "Every older adult has the same abilities and needs.",
    "investigation": "Design a respectful fictional progress record including daily function and individual goals; identify limitations.",
    "decision": "What is an important focus of geriatric medicine?",
    "options": [
      "Assuming everyone is identical",
      "Ignoring individual goals",
      "Health and function in older adults"
    ],
    "key": 2,
    "reason": "Geriatric care considers individual health and function.",
    "specialty": "Geriatrics",
    "audience": "a fictional patient or family member who is learning about geriatrics"
  },
  {
    "id": 97,
    "department": 13,
    "title": "Prenatal development science",
    "history": "A fictional obstetrics education team examines model growth measurements at three stages. The activity is about development, not real pregnancy care.",
    "teach": "Obstetrics focuses on pregnancy and childbirth. The placenta supports exchange between maternal and fetal circulation without the two blood supplies normally mixing directly. Development varies and clinical assessment requires qualified professionals.",
    "labels": [
      "Stage A",
      "Stage B",
      "Stage C"
    ],
    "values": [
      10,
      20,
      30
    ],
    "unit": "cm model length",
    "claim": "The placenta and lungs have exactly the same role.",
    "investigation": "Design a labelled model showing exchange and two separate circulations; explain why model growth readings cannot assess a pregnancy.",
    "decision": "Which structure supports exchange between maternal and fetal circulation?",
    "options": [
      "Placenta",
      "Bladder",
      "Tendon"
    ],
    "key": 0,
    "reason": "The placenta supports exchange.",
    "specialty": "Obstetrics",
    "audience": "a fictional patient or family member who is learning about obstetrics"
  },
  {
    "id": 98,
    "department": 6,
    "title": "Neural pathways and surgical anatomy",
    "history": "A fictional neurosurgery anatomy workshop studies labelled model pathways. No surgical instructions or procedures are involved.",
    "teach": "Neurosurgeons specialize in surgical care involving the brain, spine and nerves. Understanding which pathways carry sensory and motor information is important. Real treatment decisions require specialist assessment.",
    "labels": [
      "Model pathway A",
      "Model pathway B",
      "Model pathway C"
    ],
    "values": [
      12,
      24,
      36
    ],
    "unit": "model signal units",
    "claim": "Every nerve pathway carries the same kind of information in the same direction.",
    "investigation": "Design a diagram that distinguishes sensory and motor pathways and explain the model's limitations.",
    "decision": "Which pathway carries a signal from a receptor towards the central nervous system?",
    "options": [
      "Motor pathway",
      "Sensory pathway",
      "Digestive pathway"
    ],
    "key": 1,
    "reason": "Sensory pathways carry incoming information.",
    "specialty": "Neurosurgery",
    "audience": "a fictional patient or family member who is learning about neurosurgery"
  },
  {
    "id": 99,
    "department": 2,
    "title": "Heart structure and surgical science",
    "history": "A fictional cardiac anatomy workshop compares model valve-flow readings. It is a science simulation, not procedural training.",
    "teach": "Cardiac surgeons specialize in surgical care of the heart and major vessels. Heart valves help blood travel in the intended direction. Models simplify anatomy and pressure changes.",
    "labels": [
      "Valve model A",
      "Valve model B",
      "Valve model C"
    ],
    "values": [
      20,
      40,
      60
    ],
    "unit": "mL model flow per minute",
    "claim": "Heart valves create blood inside the heart.",
    "investigation": "Design a controlled valve model and explain how flow direction relates to valve function.",
    "decision": "What is the purpose of heart valves?",
    "options": [
      "Create oxygen",
      "Produce blood",
      "Help maintain one-way blood flow"
    ],
    "key": 2,
    "reason": "Valves help prevent backward flow.",
    "specialty": "Cardiac Surgery",
    "audience": "a fictional patient or family member who is learning about cardiac surgery"
  },
  {
    "id": 100,
    "department": 12,
    "title": "Safe-substance research",
    "history": "A fictional toxicology education group compares harmless coloured water models with different concentrations. No hazardous substances or dosing advice are involved.",
    "teach": "Toxicology studies how substances can affect organisms. Exposure, concentration, duration and individual context matter. A classroom colour model does not establish safe or harmful real-world amounts.",
    "labels": [
      "Model A",
      "Model B",
      "Model C"
    ],
    "values": [
      10,
      20,
      40
    ],
    "unit": "model colour units",
    "claim": "A stronger colour alone proves a real substance is harmful.",
    "investigation": "Design a controlled water-colour experiment and explain why colour is not a measure of real toxicity.",
    "decision": "What does toxicology study?",
    "options": [
      "Effects of substances on living organisms",
      "Only bones",
      "Only sound waves"
    ],
    "key": 0,
    "reason": "Toxicology studies substance effects.",
    "specialty": "Toxicology",
    "audience": "a fictional patient or family member who is learning about toxicology"
  },
  {
    "id": 101,
    "department": 12,
    "title": "The evidence conference",
    "history": "A fictional multidisciplinary teaching team reviews three investigations and chooses how to report their findings.",
    "teach": "Strong conclusions connect claims to evidence, acknowledge uncertainty, and avoid overgeneralizing from a model. Different specialties contribute different expertise. Scientific honesty includes reporting limitations.",
    "labels": [
      "Investigation A",
      "Investigation B",
      "Investigation C"
    ],
    "values": [
      20,
      30,
      50
    ],
    "unit": "model evidence points",
    "claim": "A single impressive number proves every explanation.",
    "investigation": "Choose three specialties, connect their roles to one fictional patient-learning question, and propose a controlled study with a measurable outcome.",
    "decision": "Which is the strongest scientific conclusion?",
    "options": [
      "A claim based only on popularity",
      "A claim supported by evidence and stated limitations",
      "A guess presented as certain"
    ],
    "key": 1,
    "reason": "Evidence and limitations support responsible conclusions.",
    "specialty": "Interdisciplinary Research",
    "audience": "a fictional patient or family member who is learning about interdisciplinary research"
  }
];
