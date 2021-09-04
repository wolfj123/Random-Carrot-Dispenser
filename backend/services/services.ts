export class User {
    id : number;
    username : string;
    password : string;
    email : string;
}

export class Activity {
    id : number;
    name : string;
    description : string;
    tags : string[];
}


export class Reward {
    id : number;
    name : string;
    description : string;
    tags : string[];
}


export class Outcome {
    event : number;
    probability : number;
}


const null_result = 0;
export class Randomizer {
    probabilities : Outcome[];

    randomize() : number {
        const totalProcReducer : (number, Outcome) => number = (acc, curr) => curr.probability + acc;
        const totalP : number = this.probabilities.reduce(totalProcReducer, 0);

        if(totalP >= 100) {
            return -1;
        }
        const random = Math.random();
        this._sortProbabilites();
        const result = this.probabilities.find((o) => o.probability < random);
        if(!result) {
            return 0;
        }
        else {
            return result.event;
        }
    }   
    
    private _sortProbabilites() : void {
        const outcomeComparer = (o1 : Outcome, o2 : Outcome) => {
            const o1p = o1.probability;
            const o2p = o2.probability;
            if(o1p < o2p) return -1;
            if(o1p > o2p) return -1;
            return 0;
        };
        
        this.probabilities.sort(outcomeComparer)
    }    
}




