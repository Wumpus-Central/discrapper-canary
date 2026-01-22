n.d(t, {
    A: () => c,
}),
    n(896048);
var r = n(517846),
    i = n(439372),
    a = n(236698),
    s = n(859703);

function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class l extends i.A {
    _terminate() {
        this.questCompletionStates.clear();
    }
    constructor(...e) {
        super(...e),
            o(this, "questCompletionStates", new Map()),
            o(this, "handleQuestStoreChange", () => {
                let e = s.A.quests;
                e.forEach((e) => {
                    this.checkQuestCompletion(e.id, e);
                });
                let t = new Set(e.keys());
                for (let e of this.questCompletionStates.keys()) t.has(e) || this.questCompletionStates.delete(e);
            }),
            o(this, "checkQuestCompletion", (e, t) => {
                var n, r;
                let i = null != (n = null == (r = t.userStatus) ? void 0 : r.completedAt) ? n : null;
                this.questCompletionStates.has(e) &&
                    null == this.questCompletionStates.get(e) &&
                    null != i &&
                    this.onQuestCompleted(e),
                    this.questCompletionStates.set(e, i);
            }),
            o(this, "onQuestCompleted", (e) => {
                (0, a.hs)(r.w.QUEST_COMPLETED, {
                    quest_id: e,
                });
            }),
            o(this, "stores", new Map([[s.A, this.handleQuestStoreChange]])),
            o(this, "actions", {
                LOGOUT: () => {
                    this.questCompletionStates.clear();
                },
            });
    }
}
let c = new l();
