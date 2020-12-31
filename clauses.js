const clauses = [
  'mary had a little lamb',
  'lamb chops is a little tasty i think',
  'think then say',
  'i had some potatoes yesterday',
  'potatoes are a little bland in my opinion',
  'say i had some yesterday too'
];

const rothbard = [
'If a man has the right to self-ownership, to the control of his life, then in the real world he must also have the right to sustain his life.',

'There can be no truly moral choice unless that choice is made in freedom.',

'On the free market, it is a happy fact that the maximization of the wealth of one person or group redounds to the benefit of all; but in the political realm, the realm of the State, a maximization of income and wealth can only accrue parasitically to the State and its rulers at the expense of the rest of society.',

'The essential activities of the State necessarily constitute criminal aggression and depredation of the just rights of private property of its subjects (including self-ownership).',

'The State, by its very nature, must violate the generally accepted moral laws to which most people adhere.',

'The State says that citizens may not take from another by force and against his will that which belongs to another. And yet the State…does just that.',

'To go beyond one’s right of self-defense would be to aggress on the rights of others, a violation of one’s legal duty. And yet the State by its claimed monopoly forcibly imposes its jurisdiction on persons who may have done nothing wrong. By doing so it aggresses against the rights of its citizens, something which its rules say citizens may not do.',

'The State is an inherently illegitimate institution of organized aggression, of organized and regularized crime against the persons and properties of its subjects… a profoundly antisocial institution which lives parasitically off of the productive activities of private citizens.',

'Since the State necessarily lives by the compulsory confiscation of private capital, and since its expansion necessarily involves ever-greater incursions on private individuals and private enterprise, we must assert that the state is profoundly and inherently anti-capitalist.',

'We must, therefore, emphasize that ‘we’ are not the government; the government is not ‘us.’ The government does not in any accurate sense ‘represent’ the majority of the people.',

'The great non sequitur committed by defenders of the State…is to leap from the necessity of society to the necessity of the State.',

'All of the services commonly thought to require the State…can be and have been supplied far more efficiently and certainly more morally by private persons. The State is in no sense required by the nature of man; quite the contrary.',

'Libertarians regard the state as the Supreme, the eternal, the best organized aggressor against the persons and property of the mass of the public.',

'If you wish to know how libertarians regard the State and any of its acts, simply think of the State as a criminal band, and all of the libertarian attitudes will logically fall into place.',

'The State uses its coerced revenue, not merely to monopolize and provide genuine services inefficiently to the public, but also to build up its own power at the expense of its exploited and harassed subjects.',

'The State is a coercive criminal organization that subsists by a regularized large-scale system of taxation-theft.',

'The wry coupling of the twin certainties in the popular motto ‘death and taxes’ demonstrates that the public has resigned itself to the existence of the State as an evil but inescapable force of nature to which there is no alternative.',

'There is no reason to assume that a compulsory monopoly of violence, once acquired…by any State rulers, will remain ‘limited’ to protection of person and property. Certainly, historically no government has long remained ‘limited’ in this way.',

'The more the coercive powers of the State are expanded beyond the cherished limits of the laissez-faire theorists, the greater the power and pelf accruing to the ruling caste operating the State apparatus.',

'Advocates of a limited government often hold up the ideal of a government…’umpire’ arbitrating impartially between contending factions in society. Yet why should the government do so? …the State and its rulers will act to maximize their power and wealth, and hence inexorably expand beyond the supposed ‘limits.’',

'Government was constructed neither for ability nor for the exercise of loving care; government was built for the use of force and for necessarily demagogic appeals for votes.',

'Of all the numerous forms that governments have taken over the centuries, of all the concepts and institutions that have been tried, none has succeeded in keeping the State in check.',

'The State is a gang of thieves writ large.',

'In the case of taxation, a man’s surrender to the threat of coercion demonstrates no voluntary preference whatsoever for any alleged benefits he receives. …Neither does voting establish any sort of voluntary consent…to the government.',

'The fact that a majority might support or condone an act of theft does not diminish the criminal essence of the act or its grave injustice.',

'If, then, taxation is compulsory, and is therefore indistinguishable from theft, it follows that the State, which subsists on taxation, is a vast criminal organization…according to the common apprehension of mankind, which always considers theft to be a crime.',

'Only the State obtains its revenue by coercion…That coercion is known as ‘taxation,’ although in less regularized epochs it was often known as ‘tribute.’ Taxation is theft, purely and simply even though it is theft on a grand and colossal scale which no acknowledged criminals could hope to match. It is a compulsory seizure of the property of the State’s inhabitants, or subjects.',

'The necessary result…of the unequal fiscal action of the government is to divide the community into two great classes…tax-payers and tax-consumers.',

'This...is the welfare state in action: It’s a whole bunch of special interest groups screwing consumers and taxpayers, and making them think they’re really benefiting.',

'It is easy to be conspicuously ‘compassionate’ if others are being forced to pay the cost.',

'If mankind is diverse and individuated, then how can anyone propose equality as an ideal?...But what justification can equality find in the nature of man? If each individual is unique, how else can he be made ‘equal’ to others than by destroying most of what is human in him and reducing human society to the mindless uniformity of the ant heap?',

'It is not the business of the law to make anyone good or reverent or moral or clean or upright.',

'It is no crime to be ignorant of economics…But it is totally irresponsible to have a loud and vociferous opinion on economic subjects while remaining in this state of ignorance.',
];

const wesley = [
  'When a man becomes a Christian, he becomes industrious, trustworthy and prosperous. Now, if that man, when he gets all he can and saves all he can, does not give all he can, I have more hope for Judas Iscariot than for that man!',
  'Money never stays with me. It would burn me if it did. I throw it out of my hands as soon as possible, lest it should find its way into my heart.',
  'As for reputation, though it be a glorious instrument of advancing our Master\'s service, yet there is a better than that: a clean heart, a single eye, and a soul full of God. A fair exchange if, by the loss of reputation, we can purchase the lowest degree of purity of heart.',
  'Catch on fire and people will come for miles to see you burn.',
  'Do all the good you can, by all the means you can, in all the ways you can, in all the places you can, at all the times you can, to all the people you can, as long as ever you can.',
  'I the chief of sinners am, but Jesus died for me.',
  'Is it not hard that even those who are with us should be against us - that a man\'s enemies, in some degree, should be those of the same household of faith? Yet so it is.',
];

const schiff = [
  'The government can\'t create jobs; they\'ll destroy jobs trying to do it. The government doesn\'t have any money; all they have is a printing press. We need to free markets to create jobs; if the government wants to help, they should reduce their burden on the economy.',
  "At some point, the dollar has to give. You can't just keep printing money, and monetizing debt, and buying bonds, without the dollar imploding.",
  "My mother always taught me that two wrongs don't make a right. We shouldn't bail out Wall Street. We shouldn't bail out Detroit. It will cost the economy more than the cost of the bailout which is more than the politicians think. We'll run into the hundred of millions to prop these companies up.",
  "My investment advice is rooted in my understanding of economics.",
  "The Fed is the biggest enemy of this economy. In fact, Ben Bernanke, as far as I'm concerned, he's public enemy No. 1. We're never going to have a recovery while this guy's in charge.",
  "The only thing I can do with my bitcoin is give it to somebody else."
];

module.exports = [...rothbard, ...wesley, ...schiff];