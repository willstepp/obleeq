const synths = [
  'SOMA Labs Lyra 8',
  'Moog Subharmonicon',
  'Moog DFAM',
  'Moog Mother-32',
  'Moog Mavis',
  'Dreadbox Typhon',
  'Dreadbox Nymphes',
  'Moffenzeef Stargazer',
  'SOMA Labs Ether V2',
  'SSF Quantum Rainbow 2 (noise)',
  'Drone Jar',
  '1010 Blackbox',
];

const modules = [
  'NLC Triple Sloths',
  'Doepfer Sequential Switch',
  'Disting MK4',
  'Black Noise Slew/LFO',
];

const effects = [
  'Moogerfooger MF-101 LPF',
  'Moogerfooger MF-103 12-Stage Phaser',
  'Chase Bliss Mood MKII',
  'Chase Bliss Generation Loss MKII',
  'Boss RV-6 Reverb',
  'Boss Waza Craft CE-2W Chorus',
  'UAD Del-Verb',
  'Electro-Harmonix Small Stone',
  'ProCo Rat 2',
  'Krischer MS-20 Filter',
  'NLC Delay No More',
  'Instruo Lubadh',
  'Korg NTS-1',
];

const controllers = [
  'OXI One',
  'Korg SQ-1',
  'Arturia Keystep 37',
];

const mixers = [
  '1010 Bluebox',
  'BASTL Dude',
  'BASTL Bestie',
  'Mackie 402VLZ4',
];

const recorders = [
  '1010 Bluebox',
  'Sony PCM-D100',
  'Tascam Portastudio 424 MKI',
  'Panasonic Cassette Recorder',
];

const rnd = (arr) => arr[Math.floor(Math.random() * arr.length)];

console.log('OBLEEQ: Synth Setup Generator');
console.log('==========================================');
console.log('');
console.log(`Synth: ${rnd(synths)}`);
console.log(`Module: ${rnd(modules)}`);
console.log(`Effect: ${rnd(effects)}`);
console.log(`Controller: ${rnd(controllers)}`);
console.log(`Mixer: ${rnd(mixers)}`);
console.log(`Recorder: ${rnd(recorders)}`);
console.log('');
