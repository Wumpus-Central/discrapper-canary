"use strict";
n.d(t, { A: () => l });
var i = n(517846),
    r = n(439372),
    s = n(27620),
    a = n(859703);
class o extends r.A {
    questCompletionStates = new Map();
    handleQuestStoreChange = () => {
        let e = a.A.quests;
        e.forEach((e) => {
            this.checkQuestCompletion(e.id, e);
        });
        let t = new Set(e.keys());
        for (let e of this.questCompletionStates.keys()) t.has(e) || this.questCompletionStates.delete(e);
    };
    checkQuestCompletion = (e, t) => {
        let n = t.userStatus?.completedAt ?? null;
        this.questCompletionStates.has(e) &&
            null == this.questCompletionStates.get(e) &&
            null != n &&
            this.onQuestCompleted(e),
            this.questCompletionStates.set(e, n);
    };
    onQuestCompleted = (e) => {
        (0, s.hs)(i.w.QUEST_COMPLETED, { quest_id: e });
    };
    _terminate() {
        this.questCompletionStates.clear();
    }
    stores = new Map([[a.A, this.handleQuestStoreChange]]);
    actions = {
        LOGOUT: () => {
            this.questCompletionStates.clear();
        },
    };
}
let l = new o();
