const synths = [
  'Moog Subharmonicon',
  'Moog DFAM',
  'Moog Mother-32',
  'Moog Mavis',
  'Dreadbox Typhon',
  'Dreadbox Nymphes',
  '1010 Nanobox Fireball (wavetable)',
  '1010 Nanobox Lemondrop (granular)',
  '1010 Blackbox (sampler)',
  'BASTL Kastle ARP (melody generator)',
  'Mini Mellotron',
];

const drones = [
  'Make Noise Strega',
  'SOMA Labs Lyra 8',
  'SOMA Labs Rumble of Ancient Times',
  'SSF Quantum Rainbow 2 (static noise)',
  'Drone Jar',
  'SOMA Labs Ether V2',
  'Moffenzeef Stargazer',
];

const modules = [
  'NLC Triple Sloths',
  'Doepfer Sequential Switch',
  'Disting MK4',
  'Black Noise Slew/LFO',
  'Instruo Lubadh',
  'Moogerfooger CP-251',
];

const effects = [
  'Moogerfooger MF-101 Lowpass Filter',
  'Moogerfooger MF-102 Ring Modulator',
  'Moogerfooger MF-103 12-Stage Phaser',
  'Moogerfooger MF-108 Cluster Flux',
  'Moogerfooger MF-104 Analog Delay',
  'Chase Bliss Mood MKII',
  'Chase Bliss Generation Loss MKII',
  'Boss RV-6 Reverb',
  'Boss Waza Craft CE-2W Chorus',
  'UAD Del-Verb',
  'Electro-Harmonix Small Stone',
  'ProCo Rat 2',
  'Krischer MS-20 Filter',
  'NLC Delay No More',
  'Korg NTS-1',
];

const controllers = [
  'OXI One',
  'Korg SQ-1',
  'Arturia Keystep 37',
  'Make Noise 0-CTRL',
];

const mixers = [
  '1010 Bluebox',
  'BASTL Dude',
  'BASTL Bestie',
  'Mackie 402VLZ4',
];

const endOfChains = [
  'Oto BAUM',
];

const recorders = [
  '1010 Bluebox',
  'Sony PCM-D100',
  'Tascam Portastudio 424 MKI',
  'Marantz PMD 222 Recorder',
];

const rnd = (arr) => arr[Math.floor(Math.random() * arr.length)];

console.log('OBLEEQ: Music Setup Generator');
console.log('==========================================');
console.log('');
console.log(`Synth: ${rnd(synths)}`);
console.log(`Drone: ${rnd(drones)}`);
console.log(`Module: ${rnd(modules)}`);
const effectOne = rnd(effects);
const effectTwo = rnd(effects.filter((e) => e !== effectOne));
console.log(`Effect One: ${effectOne}`);
console.log(`Effect Two: ${effectTwo}`);
console.log(`Controller: ${rnd(controllers)}`);
console.log(`Mixer: ${rnd(mixers)}`);
console.log(`End of Chain: ${rnd(endOfChains)}`);
console.log(`Recorder: ${rnd(recorders)}`);
console.log('');
