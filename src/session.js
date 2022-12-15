class Session {
    constructor(workType, quantity, workInterval, restInterval = 0, restType = 'lightRun') {
        this.workType = workType;
        this.quantity = quantity;
        this. workInterval = workInterval;
        this.restInterval = restInterval;
        this.restType = restType;
    };
    toString() {
        if (this.workType === 'warmUp') {
            return `${this.workInterval} min warm-up`;
        } else if (this.workType === 'warmDown') {
            return `${this.workInterval} min warm-down`;
        }
        return `${this.quantity} x (${this.workInterval} min ${this.workType} + ${this.restInterval} min ${this.restType})`;
    }
};

export default Session;