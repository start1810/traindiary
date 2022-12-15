import Session from './src/session.js';
import Train from './src/train.js';
import User from './src/user.js';

const trainSessions = [];

const session1 = new Session('warmUp', 1, 15);
trainSessions.push(session1);

const session2 = new Session('Int', 4, 3, 3, 'Jog');
trainSessions.push(session2);

const session3 = new Session('warmDown', 1, 10);
trainSessions.push(session3);



const train = new Train(trainSessions);
console.log(train.toString());

