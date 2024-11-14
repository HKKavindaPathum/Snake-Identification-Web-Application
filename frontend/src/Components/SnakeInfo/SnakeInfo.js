import React from 'react';
import { useParams } from 'react-router-dom';
import './SnakeInfo.css';
import snake1 from '../../Assets/Snake1.png';
import snake2 from '../../Assets/Snake2.png';
import snake3 from '../../Assets/Snake3.png';
import snake4 from '../../Assets/Snake4.png';
import snake5 from '../../Assets/Snake5.png';
import snake6 from '../../Assets/Snake6.png';
import snake7 from '../../Assets/Snake7.png';
import snake8 from '../../Assets/Snake8.png';
import snake9 from '../../Assets/Snake9.png';
import snake10 from '../../Assets/Snake10.png';
import snake11 from '../../Assets/Snake11.png';
import snake12 from '../../Assets/Snake12.png';
import snake13 from '../../Assets/Snake13.png';
import snake14 from '../../Assets/Snake14.png';
import snake15 from '../../Assets/Snake15.png';
import snake16 from '../../Assets/Snake16.png';
import snake17 from '../../Assets/Snake17.png';
import snake18 from '../../Assets/Snake18.png';
import snake19 from '../../Assets/Snake19.png';
import snake20 from '../../Assets/Snake20.png';
import snake21 from '../../Assets/Snake21.png';
import snake22 from '../../Assets/Snake22.png';
import snake23 from '../../Assets/Snake23.png';
import snake24 from '../../Assets/Snake24.png';

export const SnakeInfo = () => {
  const { name } = useParams();

  const snakeData = {
    "King Cobra": {
      image: snake1, 
      scientificName: "Ophiophagus hannah",
      commonName: "King Cobra",
      localName: "Naya",
      habitat: "Dense highland forests, mangroves, bamboo thickets, and sometimes in agricultural areas.",
      geographicalRange: "South and Southeast Asia, including India, Sri Lanka, China, Thailand, Malaysia, and Indonesia.",
      description: "The longest venomous snake in the world, reaching up to 5.5 meters in length. It has a distinctive hood and can stand upright, sometimes as high as one-third of its length.",
      venomStatus: "Highly venomous.",
      diet: "Primarily feeds on other snakes, including venomous species, and occasionally on small mammals and birds.",
      behavior: "Diurnal and highly alert, known for its defensive posture with an expanded hood and distinctive hiss when threatened.",
      reproduction: "Oviparous, with females laying up to 50 eggs in a nest, which they guard until hatching.",
      lifespan: "Typically 20 years in the wild.",
      conservationStatus: "Vulnerable, primarily due to habitat loss and hunting.",
      dangerLevel: "Extremely dangerous to humans due to its size, venom potency, and aggressive defense mechanisms."
    },

    "Hump-nosed Viper": {
      image: snake2, 
      scientificName: "Hypnale hypnale",
      commonName: "Hump-nosed Viper",
      localName: "Kunakatuwua",
      habitat: "Tropical rainforests, moist deciduous forests, and shrublands. Often found in leaf litter and undergrowth.",
      geographicalRange: "Found primarily in Sri Lanka and southern India.",
      description: "A small, stout snake with a distinct hump-like structure on the nose. Its coloration varies from brown to gray with darker markings, and it grows to about 50–60 cm in length.",
      venomStatus: "Venomous.",
      diet: "Feeds on amphibians, lizards, and small mammals, using its venom to subdue prey.",
      behavior: "Nocturnal and terrestrial, often found in the lower levels of the forest, hidden among leaves and debris.",
      reproduction: "Ovoviviparous (gives birth to live young).",
      lifespan: "Typically 8–12 years in the wild.",
      conservationStatus: "Least Concern according to the IUCN Red List, but local populations are threatened by habitat loss.",
      dangerLevel: "Dangerous to humans, venom is hemotoxic and can cause severe tissue damage."
    },
    
    "Sand Viper": {
      image: snake3, 
      scientificName: "Echis carinatus",
      commonName: "Sand Viper, Horned Viper",
      localName: "Vali Polanga",
      habitat: "Dry, rocky, and sandy habitats, including grasslands, scrublands, and sometimes forests, often near rivers or marshes.",
      geographicalRange: "Found in southern Europe, parts of Asia Minor, and the Middle East.",
      description: "A medium-sized viper with a distinctive horn-like structure on its nose. The body is typically brown or gray with darker patterns and can grow up to 80 cm in length.",
      venomStatus: "Venomous.",
      diet: "Primarily feeds on small mammals, birds, and amphibians. It uses its venom to immobilize prey.",
      behavior: "Diurnal and solitary, it tends to hide under rocks, shrubs, or burrows during the hottest part of the day.",
      reproduction: "Ovoviviparous (gives birth to live young).",
      lifespan: "Typically 12–15 years in the wild.",
      conservationStatus: "Least Concern according to the IUCN Red List, though populations are declining due to habitat destruction and persecution.",
      dangerLevel: "Dangerous to humans, its venom is cytotoxic and can cause swelling, tissue damage, and pain."
    },

    "Russell's Viper": {
      image: snake4,
      scientificName: "Daboia russelii",
      commonName: "Russell's Viper",
      localName: "Thith Polanga",
      habitat: "Grasslands, forests, agricultural fields, and human settlements, often found in areas with dense vegetation and rocky outcrops.",
      geographicalRange: "Found across the Indian subcontinent, including India, Sri Lanka, Nepal, Bangladesh, Pakistan, and parts of Southeast Asia.",
      description: "A large, heavy-bodied viper with a distinctive pattern of dark brown or black markings on a lighter background. It can grow up to 1.5 meters in length.",
      venomStatus: "Highly venomous.",
      diet: "Primarily feeds on small mammals, birds, amphibians, and reptiles. It uses its venom to immobilize and digest prey.",
      behavior: "Nocturnal and terrestrial, often hiding under rocks or in thick vegetation during the day. It can be aggressive if threatened.",
      reproduction: "Ovoviviparous (gives birth to live young).",
      lifespan: "Typically 15–20 years in the wild.",
      conservationStatus: "Least Concern according to the IUCN Red List, though populations are threatened by habitat loss and hunting.",
      dangerLevel: "Extremely dangerous to humans, its venom is highly toxic and can cause severe bleeding, kidney failure, and death if untreated."
    },

    "Sri Lankan Pit Viper": {
      image: snake5,
      scientificName: "Trimeresurus trigonocephalus",
      commonName: "Sri Lankan Pit Viper",
      localName: "Pala Polonga",
      habitat: "Rainforests, wet zone forests, and hill slopes of Sri Lanka, particularly in areas with dense undergrowth.",
      geographicalRange: "Endemic to Sri Lanka, found primarily in the central and southwestern regions.",
      description: "A medium-sized viper with a characteristic triangular head and greenish or brownish body with darker markings. It can grow up to 60–80 cm in length.",
      venomStatus: "Venomous.",
      diet: "Primarily feeds on small mammals, birds, amphibians, and lizards.",
      behavior: "Nocturnal and terrestrial, often found in the lower to mid-canopy layers of the forest. It is known for being defensive when threatened.",
      reproduction: "Ovoviviparous (gives birth to live young).",
      lifespan: "Typically 10–12 years in the wild.",
      conservationStatus: "Least Concern according to the IUCN Red List, although habitat loss and human-wildlife conflict pose threats to its population.",
      dangerLevel: "Dangerous to humans, its venom contains hemotoxins that can cause significant tissue damage and blood clotting issues."
    },

    "Sri Lankan Krait": {
      image: snake6,
      scientificName: "Bungarus ceylonensis",
      commonName: "Sri Lankan Krait",
      localName: "Mudu Karawalaa",
      habitat: "Tropical and subtropical forests, agricultural fields, and plantations, often in areas with dense vegetation and undergrowth.",
      geographicalRange: "Endemic to Sri Lanka, found across the island except in the driest regions.",
      description: "A highly venomous snake with black and white or pale yellowish bands on its body. It has a slender, elongated body and can grow up to 1.5 meters in length.",
      venomStatus: "Highly venomous.",
      diet: "Feeds primarily on small mammals, amphibians, and reptiles, especially other snakes.",
      behavior: "Nocturnal and secretive, the Sri Lankan Krait is highly venomous but tends to avoid confrontation. It is typically found in leaf litter or burrows.",
      reproduction: "Ovoviviparous (gives birth to live young).",
      lifespan: "Typically 10–15 years in the wild.",
      conservationStatus: "Near Threatened according to the IUCN Red List, with habitat loss and human-wildlife conflict posing significant threats.",
      dangerLevel: "Extremely dangerous to humans, its venom is neurotoxic and can cause paralysis and respiratory failure, potentially fatal if untreated."
    },

    "Sri Lanka Cat Snake": {
      image: snake7, 
      scientificName: "Boiga ceylonensis",
      commonName: "Sri Lanka Cat Snake",
      localName: "Mapila",
      habitat: "Tropical and subtropical forests, plantations, and agricultural fields, typically in areas with dense vegetation and low-lying areas near water.",
      geographicalRange: "Endemic to Sri Lanka, found mainly in the wet zone forests and foothills of the island.",
      description: "A slender, arboreal snake with large eyes, known for its cat-like appearance due to its vertical pupils. Its color is typically brown or olive with dark markings.",
      venomStatus: "Mildly venomous.",
      diet: "Primarily feeds on small vertebrates, such as birds, lizards, and rodents, and occasionally amphibians.",
      behavior: "Nocturnal and arboreal, the Sri Lanka Cat Snake is often found in trees and shrubs. It is not particularly aggressive and tends to avoid humans.",
      reproduction: "Oviparous (lays eggs).",
      lifespan: "Typically 5–8 years in the wild.",
      conservationStatus: "Least Concern according to the IUCN Red List, though habitat destruction and human activity pose ongoing threats.",
      dangerLevel: "Mildly dangerous to humans, while venomous, its bite is not usually fatal, and its venom primarily affects the nervous system."
    },

    "Common krait": {
      image: snake8,
      scientificName: "Bungarus caeruleus",
      commonName: "Common krait",
      localName: "Thel Karawala",
      habitat: "Found in a variety of habitats, including forests, agricultural lands, and grasslands. Prefers areas with dense vegetation, often near water bodies.",
      geographicalRange: "Found in Sri Lanka, India, Bangladesh, and parts of Southeast Asia.",
      description: "A highly venomous snake with a distinctive bluish body and black markings. It has a slender, elongated body and a triangular head, making it easily recognizable.",
      venomStatus: "Highly venomous, capable of causing severe envenomation in humans.",
      diet: "Primarily feeds on small vertebrates, including rodents and amphibians. It is known to be a nocturnal hunter.",
      behavior: "Shy and elusive, it usually avoids humans but will strike if provoked. It is a highly neurotoxic species and should be treated with caution.",
      reproduction: "Oviparous (lays eggs).",
      lifespan: "Typically lives around 5–10 years in the wild.",
      conservationStatus: "Least Concern, but its population is threatened in certain areas due to habitat loss and human conflict.",
      dangerLevel: "Extremely dangerous to humans, capable of causing death if not treated immediately after a bite."
    },

    "Yellow-bellied Sea Snake": {
      image: snake9, 
      scientificName: "Hydrophis platurus",
      commonName: "Yellow-bellied Sea Snake",
      localName: "Bada Kaha Muhudu Naya",
      habitat: "Found in coastal waters, estuaries, and sometimes in freshwater.",
      geographicalRange: "Indian Ocean, including the coasts of Sri Lanka.",
      description: "A venomous, aquatic snake with a distinctive yellow belly and a tail adapted for swimming.",
      venomStatus: "Highly venomous.",
      diet: "Feeds on small fish and eels.",
      behavior: "Mostly aquatic and spends most of its time in the sea.",
      reproduction: "Oviparous (lays eggs).",
      lifespan: "10–15 years.",
      conservationStatus: "Least Concern.",
      dangerLevel: "Dangerous to humans, venom can cause neurological effects."
    },

    "Striped water snake": {
      image: snake10, 
      scientificName: "Xenochrophis piscator",
      commonName: "Striped water snake",
      localName: "Diya Naya/Diyabariya",
      habitat: "Common in freshwater lakes, rivers, and marshes.",
      geographicalRange: "Throughout Sri Lanka, especially in the wet zone.",
      description: "A non-venomous, semi-aquatic snake with a brown or olive-colored body.",
      venomStatus: "Non-venomous.",
      diet: "Feeds on amphibians, fish, and small invertebrates.",
      behavior: "Nocturnal and semi-aquatic, found in or near water.",
      reproduction: "Oviparous (lays eggs).",
      lifespan: "5–10 years.",
      conservationStatus: "Least Concern.",
      dangerLevel: "Not dangerous to humans."
    },

    "Common Wolf Snake": {
      image: snake11, 
      scientificName: "Lycodon aulicus",
      commonName: "Common Wolf Snake",
      localName: "Daara Karawala, Daara Radanakayaa",
      habitat: "Found in agricultural lands, forests, and urban areas.",
      geographicalRange: "Found in Sri Lanka and parts of India.",
      description: "A small, non-venomous snake with a grey or brown body and white or yellowish markings.",
      venomStatus: "Non-venomous.",
      diet: "Feeds on lizards, frogs, and small rodents.",
      behavior: "Nocturnal and terrestrial, often hides under rocks or debris.",
      reproduction: "Oviparous (lays eggs).",
      lifespan: "5–7 years.",
      conservationStatus: "Least Concern.",
      dangerLevel: "Not dangerous to humans."
    },

    "Mangrove Cat Snake": {
      image: snake12, 
      scientificName: "Boiga dendrophila",
      commonName: "Mangrove Cat Snake",
      localName: "Mapila",
      habitat: "Found in mangrove swamps, coastal forests, and plantations.",
      geographicalRange: "Sri Lanka and parts of India.",
      description: "A mildly venomous snake with a long body and large eyes, often found in mangrove forests.",
      venomStatus: "Mildly venomous.",
      diet: "Feeds on birds, lizards, and small mammals.",
      behavior: "Nocturnal and arboreal, often seen climbing trees.",
      reproduction: "Oviparous (lays eggs).",
      lifespan: "8–12 years.",
      conservationStatus: "Least Concern.",
      dangerLevel: "Mildly dangerous to humans, rarely fatal."
    },

    "Reticulated Python": {
      image: snake13, 
      scientificName: "Python reticulatus",
      commonName: "Reticulated Python",
      localName: "Pibura",
      habitat: "Tropical forests and mangroves.",
      geographicalRange: "Sri Lanka, Southeast Asia, and parts of India.",
      description: "A large, non-venomous snake known for its intricate and striking patterns on its skin.",
      venomStatus: "Non-venomous.",
      diet: "Feeds on large mammals, birds, and reptiles.",
      behavior: "Terrestrial and arboreal, very strong constrictors.",
      reproduction: "Oviparous (lays eggs).",
      lifespan: "20–25 years.",
      conservationStatus: "Least Concern.",
      dangerLevel: "Not dangerous to humans, but capable of constricting large prey."
    },

    "Green Vine Snake": {
      image: snake14, 
      scientificName: "Ahaetulla nasuta",
      commonName: "Green Vine Snake",
      localName: "Ahaetulla",
      habitat: "Tropical and subtropical forests, often seen hanging from trees.",
      geographicalRange: "Sri Lanka and India.",
      description: "A non-venomous, slender snake with bright green coloration, well-camouflaged in trees.",
      venomStatus: "Non-venomous.",
      diet: "Feeds primarily on lizards and small birds.",
      behavior: "Nocturnal and arboreal, commonly found in trees and shrubs.",
      reproduction: "Oviparous (lays eggs).",
      lifespan: "7–10 years.",
      conservationStatus: "Least Concern.",
      dangerLevel: "Not dangerous to humans."
    },

    "Black Mamba": {
      image: snake15, 
      scientificName: "Dendroaspis polylepis",
      commonName: "Black Mamba",
      localName: "Black Mamba",
      habitat: "Wooded areas and open plains.",
      geographicalRange: "Sri Lanka, Africa, and parts of Asia.",
      description: "One of the most venomous snakes in the world, with a sleek black body.",
      venomStatus: "Highly venomous.",
      diet: "Feeds on rodents, birds, and small reptiles.",
      behavior: "Extremely fast and aggressive, often seen in forests or grasslands.",
      reproduction: "Oviparous (lays eggs).",
      lifespan: "10–12 years.",
      conservationStatus: "Endangered.",
      dangerLevel: "Extremely dangerous to humans."
    },

    "Common Sand Boa": {
      image: snake16, 
      scientificName: "Eryx conicus",
      commonName: "Common Sand Boa",
      localName: "Vali Pibura",
      habitat: "Found in dry, sandy habitats, and sometimes in rocky areas.",
      geographicalRange: "Sri Lanka and India.",
      description: "A non-venomous, thick-bodied snake with a pale, light-colored body that blends into the sand.",
      venomStatus: "Non-venomous.",
      diet: "Feeds on small rodents and lizards.",
      behavior: "Nocturnal and terrestrial, often found burrowing in sand.",
      reproduction: "Oviparous (lays eggs).",
      lifespan: "12–15 years.",
      conservationStatus: "Least Concern.",
      dangerLevel: "Not dangerous to humans."
    },

    "Black-headed Cat Snake": {
      image: snake17, 
      scientificName: "Boiga nigriceps",
      commonName: "Black-headed Cat Snake",
      localName: "Panduru Mapila",
      habitat: "Found in forests and plantations.",
      geographicalRange: "Sri Lanka and parts of India.",
      description: "A mildly venomous snake with a black head and a green or brown body.",
      venomStatus: "Mildly venomous.",
      diet: "Feeds on small vertebrates like lizards and birds.",
      behavior: "Nocturnal and arboreal, often seen climbing trees.",
      reproduction: "Oviparous (lays eggs).",
      lifespan: "7–10 years.",
      conservationStatus: "Least Concern.",
      dangerLevel: "Mildly dangerous to humans, rarely fatal."
    },

    "Brown vine snake": {
      image: snake18,  
      scientificName: "Ahaetulla pulverulenta",
      commonName: "Brown vine snake",
      localName: "Henakadaya",
      habitat: "Tropical and subtropical forests, often found in trees and shrubs near water sources.",
      geographicalRange: "Sri Lanka and Southern India.",
      description: "A slender, bright green snake known for its whip-like body and large eyes. It has a long tail and is often mistaken for a vine or branch due to its coloration and body shape.",
      venomStatus: "Mildly venomous, but not considered dangerous to humans.",
      diet: "Primarily feeds on lizards, frogs, and small birds.",
      behavior: "Diurnal and arboreal, this snake is known for its calm nature but is quick to escape when threatened.",
      reproduction: "Oviparous (lays eggs).",
      lifespan: "Around 10–12 years in the wild.",
      conservationStatus: "Not currently listed as endangered, but habitat destruction is a threat.",
      dangerLevel: "Harmless to humans."
    },

    "Buff-striped keelback": {
      image: snake19, 
      scientificName: "Amphiesma stolatum",
      commonName: "Buff-striped keelback",
      localName: "Ahurukukka",
      habitat: "Forests, plantations, and agricultural areas, typically found in lowland areas near water sources.",
      geographicalRange: "Sri Lanka and parts of southern India.",
      description: "A mildly venomous, small to medium-sized snake with a slender body and distinctive markings. Its body is typically brown or gray with dark bands and spots.",
      venomStatus: "Mildly venomous, but not dangerous to humans.",
      diet: "Feeds on small mammals, birds, amphibians, and reptiles.",
      behavior: "Nocturnal and terrestrial, known for being shy and reclusive, often hiding during the day.",
      reproduction: "Oviparous (lays eggs).",
      lifespan: "Around 5–10 years in the wild.",
      conservationStatus: "Not currently listed as endangered, but habitat loss could pose a risk.",
      dangerLevel: "Not dangerous to humans."
    },

    "Ornate flying snake": {
      image: snake20, 
      scientificName: "Chrysopelea ornata",
      commonName: "Ornate Flying Snake",
      localName: "Polmal Karawala, Malsara",
      habitat: "Tropical and subtropical forests, primarily in trees and vegetation.",
      geographicalRange: "Found in Sri Lanka, parts of India, and Southeast Asia.",
      description: "A highly arboreal snake known for its ability to glide. It has a distinctive green, yellow, or brown coloration with intricate patterns across its body.",
      venomStatus: "Mildly venomous, but its venom is not harmful to humans.",
      diet: "Feeds on small lizards, frogs, and insects.",
      behavior: "Arboreal and nocturnal, this snake is famous for its gliding ability, which it uses to move from tree to tree.",
      reproduction: "Oviparous (lays eggs).",
      lifespan: "Around 5–10 years in the wild.",
      conservationStatus: "Least Concern, although habitat destruction could pose a risk.",
      dangerLevel: "Not dangerous to humans."
    },

    "Banded wolf snake": {
      image: snake21,  
      scientificName: "Lycodon fasciolatus",
      commonName: "Banded wolf snake",
      localName: "Mal Radankaya",
      habitat: "Found in forests, plantations, and agricultural areas, often near human settlements.",
      geographicalRange: "Sri Lanka and parts of southern India.",
      description: "A small, slender, non-venomous snake with alternating dark and light bands running along its body, giving it a striped appearance.",
      venomStatus: "Non-venomous, harmless to humans.",
      diet: "Feeds on small amphibians, reptiles, and insects.",
      behavior: "Nocturnal and terrestrial, typically found hiding under rocks or in leaf litter during the day.",
      reproduction: "Oviparous (lays eggs).",
      lifespan: "Around 5–7 years in the wild.",
      conservationStatus: "Not currently listed as endangered, but may face habitat threats due to deforestation.",
      dangerLevel: "Harmless to humans."
    },

    "Oriental rat snake": {
      image: snake22, 
      scientificName: "Ptyas mucosa",
      commonName: "Oriental rat snake",
      localName: "Garadiya, Rat Snake ",
      habitat: "Found in a variety of habitats including forests, agricultural lands, and near human settlements. Prefers areas with dense vegetation and open spaces.",
      geographicalRange: "Found across Sri Lanka, India, Southeast Asia, and parts of the Middle East.",
      description: "A large, non-venomous snake with a smooth, olive-brown or grayish body and a pale belly. Known for its ability to climb trees and enter human dwellings.",
      venomStatus: "Non-venomous, harmless to humans.",
      diet: "Primarily feeds on rodents, birds, and eggs, often found hunting in agricultural areas and near human habitation.",
      behavior: "Active during the day (diurnal) and terrestrial, but also capable of climbing trees. It is shy and non-aggressive but may strike if threatened.",
      reproduction: "Oviparous (lays eggs), with females laying around 6-20 eggs at a time.",
      lifespan: "Can live up to 10–15 years in the wild.",
      conservationStatus: "Least Concern, due to its wide distribution and adaptability.",
      dangerLevel: "Harmless to humans."
    },

    "Sri Lanka pipe snake": {
      image: snake23,  
      scientificName: "Cylindrophis maculatus",
      commonName: "Sri Lanka Pipe Snake",
      localName: "Depath naya",
      habitat: "Found in moist forested areas, particularly in the lowland and mid-elevation regions of Sri Lanka. Prefers areas with heavy rainfall and dense underbrush.",
      geographicalRange: "Endemic to Sri Lanka.",
      description: "A non-venomous, burrowing snake with a distinctive cylindrical body. It has smooth, glossy scales and a characteristic black and yellow banded pattern along its body.",
      venomStatus: "Non-venomous, harmless to humans.",
      diet: "Feeds on small invertebrates, including earthworms and other soil-dwelling creatures.",
      behavior: "Burrowing and secretive, often spends time underground or hidden among leaf litter. It is generally slow-moving and rarely encountered by humans.",
      reproduction: "Oviparous (lays eggs).",
      lifespan: "Estimated to be around 5–8 years in the wild.",
      conservationStatus: "Not currently listed as endangered, but its habitat is threatened by deforestation.",
      dangerLevel: "Harmless to humans."
    },

    "Sri Lankan Rock Python": {
      image: snake24, 
      scientificName: "Python bivittatus",
      commonName: "Sri Lankan Rock Python",
      localName: "Pibura",
      habitat: "Grasslands, forests, wetlands, and areas near water bodies like rivers, lakes, and swamps, often in areas with dense vegetation.",
      geographicalRange: "Endemic to Sri Lanka, found in the dry zones and lowland areas, with a few sightings in the wet zones.",
      description: "A large, non-venomous snake with a distinctive pattern of dark brown or black markings on a light brown or cream-colored background. It can grow up to 5–6 meters in length.",
      venomStatus: "Non-venomous.",
      diet: "Primarily feeds on mammals, birds, and reptiles. It is a constrictor, killing prey by wrapping around it and squeezing.",
      behavior: "Mostly terrestrial but can also be arboreal. It is primarily nocturnal and semi-aquatic, often found near water sources.",
      reproduction: "Oviparous (lays eggs). Females lay between 10 and 50 eggs at a time, which hatch in around 2–3 months.",
      lifespan: "Typically 20–25 years in the wild, though some can live longer in captivity.",
      conservationStatus: "Least Concern according to the IUCN Red List, though it is threatened by habitat destruction, poaching, and human-wildlife conflict.",
      dangerLevel: "Generally harmless to humans, though large individuals can pose a threat due to their size and strength. Bites can cause injury, but they are not venomous."
    },

  };

  const snake = snakeData[name];

  if (!snake) {
    return <h2>Snake information not found.</h2>;
  }

  return (
    <div className="snake-info">
      <div className="snake-info-content">
        <img src={snake.image} alt={name} />
        <div className="snake-info-text">
          <h2>{name}</h2>
          <p><strong>Scientific Name:</strong> <span>{snake.scientificName}</span></p>
          <p><strong>Common Name:</strong> <span>{snake.commonName}</span></p>
          <p><strong>Local Name (Sri Lanka):</strong> <span>{snake.localName}</span></p>
          <p><strong>Description:</strong> <span>{snake.description}</span></p>
          <p><strong>Habitat:</strong> <span>{snake.habitat}</span></p>
          <p><strong>Geographical Range:</strong> <span>{snake.geographicalRange}</span></p>
          <p><strong>Venom Status:</strong> <span>{snake.venomStatus}</span></p>
          <p><strong>Diet:</strong> <span>{snake.diet}</span></p>
          <p><strong>Behavior:</strong> <span>{snake.behavior}</span></p>
          <p><strong>Reproduction:</strong> <span>{snake.reproduction}</span></p>
          <p><strong>Lifespan:</strong> <span>{snake.lifespan}</span></p>
          <p><strong>Conservation Status:</strong> <span>{snake.conservationStatus}</span></p>
          <p><strong>Danger Level:</strong> <span>{snake.dangerLevel}</span></p>
        </div>
      </div>
    </div>
  );
};

export default SnakeInfo;