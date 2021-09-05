"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Randomizer = exports.Outcome = exports.Reward = exports.Activity = exports.User = void 0;
class User {
}
exports.User = User;
class Activity {
}
exports.Activity = Activity;
class Reward {
}
exports.Reward = Reward;
class Outcome {
}
exports.Outcome = Outcome;
const null_result = 0;
class Randomizer {
    randomize() {
        const totalProcReducer = (acc, curr) => curr.probability + acc;
        const totalP = this.probabilities.reduce(totalProcReducer, 0);
        if (totalP >= 100) {
            return -1;
        }
        const random = Math.random();
        this._sortProbabilites();
        const result = this.probabilities.find((o) => o.probability < random);
        if (!result) {
            return 0;
        }
        else {
            return result.event;
        }
    }
    _sortProbabilites() {
        const outcomeComparer = (o1, o2) => {
            const o1p = o1.probability;
            const o2p = o2.probability;
            if (o1p < o2p)
                return -1;
            if (o1p > o2p)
                return -1;
            return 0;
        };
        this.probabilities.sort(outcomeComparer);
    }
}
exports.Randomizer = Randomizer;
//# sourceMappingURL=services.js.map