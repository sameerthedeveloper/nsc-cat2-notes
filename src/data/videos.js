/* Video lessons. Every ID was read from the channel's own search results and checked against
   YouTube oEmbed (title and channel). Sources: Neso Academy (English; it teaches the number theory
   behind RSA and Diffie–Hellman but has no RSA, ECC, MAC, MD5, SHA or DSS lectures) and
   4G Silver Academy (Tamil; RSA, Diffie–Hellman, ECC, hash functions, signatures, X.509, Kerberos). */
const NESO = 'Neso Academy';
const G4 = '4G Silver Academy (Tamil)';

export const NESO_LINK = ['Neso Academy channel', 'https://www.youtube.com/@nesoacademy'];
export const G4_LINK = ['4G Silver Academy channel', 'https://www.youtube.com/@4G_Silver_Academy_%E0%AE%A4%E0%AE%AE%E0%AE%BF%E0%AE%B4%E0%AF%8D'];

/* These uploaders switched embedding off (oEmbed answers 401), so the player links out to YouTube instead. */
export const NOEMBED = new Set(['QXfXJMoyG9w', '7Ub8uGPP5_w', 'C6obOvCU-SQ', 'qpAJgEk2ejE', 'kp8NALv9_x4']);

/* id: [title, minutes, channel] */
export const V = {
  /* 4G Silver Academy, Tamil */
  QXfXJMoyG9w: ['RSA algorithm (Cryptography and Cyber Security, unit 4)', '17', G4],
  LO9uaWg4u4I: ['RSA algorithm (Networks and Security, unit 4)', '17', G4],
  '7Ub8uGPP5_w': ['Diffie–Hellman key exchange algorithm', '14', G4],
  'C6obOvCU-SQ': ['Elliptic Curve Cryptography', '7', G4],
  ClHQrUGK_a4: ['Hash function and secure hash function', '8', G4],
  YhPwLNbEB90: ['Digital Signature Algorithm (DSA)', '8', G4],
  qpAJgEk2ejE: ['ElGamal digital signature', '5', G4],
  fa5jfEGhWdo: ['Schnorr signature', '8', G4],
  cWowVka1VmI: ['X.509 certificate', '8', G4],
  zgW9qNErF8Y: ['Kerberos', '8', G4],
  'Ai4I-Qyfp4A': ['Security attacks', '8', G4],
  kp8NALv9_x4: ['Cryptography and Cyber Security important questions, Sem 5', '6', G4],
  '-717E9ajGxk': ['Cryptography and Cyber Security important questions, Nov 2025 exam', '6', G4],

  /* Neso Academy, English */
  LaZ3It6pbWE: ['Public key cryptography: chapter 4 introduction', '2', NESO],
  '5J3l894CiMI': ['Prime numbers in cryptography', '10', NESO],
  'DwQ7-k9LkJ4': ['Euler’s totient function (phi function)', '9', NESO],
  osge0_lZTaY: ['Euler’s totient function: solved examples', '13', NESO],
  DyOv20d4c70: ['Euler’s theorem', '8', NESO],
  '3Cb0ys-jppU': ['Fermat’s little theorem', '8', NESO],
  YwaQ4m1eHQo: ['Multiplicative inverse', '10', NESO],
  lq285DDdmtw: ['Extended Euclidean algorithm: solved example 1', '10', NESO],
  '6AUkmf1BYJ0': ['Extended Euclidean algorithm: solved example 2', '6', NESO],
  _gYUlvcnjs0: ['Modular exponentiation, part 1', '10', NESO],
  bg0P_3UiG5I: ['Modular exponentiation, part 2', '20', NESO],
  DKy98FWHwdg: ['Primitive roots', '9', NESO],
  za9azzh4v9A: ['The discrete logarithm problem', '8', NESO],
  yKNTfeqSEhc: ['The discrete logarithm problem: solved example', '5', NESO],
};

const NO_NESO = 'Neso Academy has no lecture on this topic, so this comes from 4G Silver Academy (in Tamil).';
const MATHS = 'Neso Academy has no RSA lecture, but its number theory lessons below cover the arithmetic the answer needs: totient, inverse, modular exponentiation.';

export const YT = {
  'm3-1': { pl: [NESO_LINK], v: ['LaZ3It6pbWE', '5J3l894CiMI', 'QXfXJMoyG9w'], note: 'The 4G Silver Academy RSA lesson (Tamil) also introduces the public key idea.' },
  'm3-2': { pl: [G4_LINK, NESO_LINK], v: ['LO9uaWg4u4I', 'QXfXJMoyG9w', 'DwQ7-k9LkJ4', 'osge0_lZTaY', 'DyOv20d4c70', '3Cb0ys-jppU', 'YwaQ4m1eHQo', 'lq285DDdmtw', '6AUkmf1BYJ0', '_gYUlvcnjs0', 'bg0P_3UiG5I'], note: MATHS },
  'm3-3': { pl: [G4_LINK, NESO_LINK], v: ['7Ub8uGPP5_w', 'DKy98FWHwdg', '_gYUlvcnjs0', 'za9azzh4v9A', 'yKNTfeqSEhc'], note: 'Neso Academy covers primitive roots and the discrete logarithm problem, which are what Diffie–Hellman rests on.' },
  'm3-4': { pl: [G4_LINK], v: ['cWowVka1VmI'], note: 'Covers X.509 certificates only. ' + NO_NESO },
  'm3-6': { pl: [G4_LINK], v: ['C6obOvCU-SQ'], note: NO_NESO },
  'm4-1': { pl: [G4_LINK], v: ['Ai4I-Qyfp4A'], note: 'Covers security attacks in general. ' + NO_NESO },
  'm4-4': { pl: [G4_LINK], v: ['ClHQrUGK_a4'], note: NO_NESO },
  'm4-6': { pl: [G4_LINK], v: ['ClHQrUGK_a4'], note: 'One lecture covers hash functions and the secure hash algorithm. ' + NO_NESO },
  'm4-8': { pl: [G4_LINK], v: ['YhPwLNbEB90', 'qpAJgEk2ejE', 'fa5jfEGhWdo'], note: NO_NESO },
  'm4-9': { pl: [G4_LINK], v: ['zgW9qNErF8Y'], note: 'Kerberos only. ' + NO_NESO },
  'm4-10': { pl: [G4_LINK], v: ['YhPwLNbEB90'], note: NO_NESO },
  /* last year's paper */
  paper: { pl: [G4_LINK], v: ['kp8NALv9_x4', '-717E9ajGxk'], note: 'These are important-question lists for a different university’s exam (Anna University CB3491), so use them for topic ideas, not as a match for this paper.' },
  'q-4': { pl: [G4_LINK], v: ['YhPwLNbEB90'] },
  'q-6ai': { pl: [NESO_LINK, G4_LINK], v: ['LaZ3It6pbWE', 'QXfXJMoyG9w'] },
  'q-6aii': { pl: [G4_LINK], v: ['C6obOvCU-SQ'] },
  'q-6b': { pl: [G4_LINK], v: ['7Ub8uGPP5_w', 'Ai4I-Qyfp4A'] },
  'q-7ai': { pl: [G4_LINK], v: ['ClHQrUGK_a4'] },
  'q-7b': { pl: [G4_LINK], v: ['ClHQrUGK_a4'] },
  'q-8a': { pl: [G4_LINK, NESO_LINK], v: ['LO9uaWg4u4I', 'QXfXJMoyG9w', 'DwQ7-k9LkJ4', 'lq285DDdmtw', '_gYUlvcnjs0', 'bg0P_3UiG5I'] },
  'q-8b': { pl: [G4_LINK, NESO_LINK], v: ['7Ub8uGPP5_w', 'DKy98FWHwdg', '_gYUlvcnjs0'] },
};
