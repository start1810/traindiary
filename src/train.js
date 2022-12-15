class Train {
    constructor(trainSessions, date = new Date) {
        this.date = date;
        this.trainSessions = trainSessions;
    };

    getDate() {
        return this.date;
    };
    getTrainSessions() {
        return this.trainSessions;
    };
    toString() {
        let trainString = `${this.date}\n`;
        for (let session of this.trainSessions) {
            trainString += `${session.toString()}\n`
        }
        return trainString;
    }

};

export default Train;


