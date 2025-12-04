n.d(t, { Z: () => l }), n(388685);
var r = n(147913),
    i = n(588529),
    a = n(616022);
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
class s extends r.Z {
    _terminate() {
        this.questCompletionStates.clear();
    }
    constructor(...e) {
        super(...e),
            o(this, "questCompletionStates", new Map()),
            o(this, "handleQuestStoreChange", () => {
                let e = a.Z.quests;
                e.forEach((e) => {
                    this.checkQuestCompletion(e.id, e);
                });
                let t = new Set(e.keys());
                for (let e of this.questCompletionStates.keys()) t.has(e) || this.questCompletionStates.delete(e);
            }),
            o(this, "checkQuestCompletion", (e, t) => {
                var n, r;
                let i = null != (r = null == (n = t.userStatus) ? void 0 : n.completedAt) ? r : null;
                if (!this.questCompletionStates.has(e)) return void this.questCompletionStates.set(e, i);
                null == this.questCompletionStates.get(e) && null != i && this.onQuestCompleted(e),
                    this.questCompletionStates.set(e, i);
            }),
            o(this, "onQuestCompleted", (e) => {
                let t = "quest_completed_".concat(e);
                (0, i.Ox)(t);
            }),
            o(this, "stores", new Map([[a.Z, this.handleQuestStoreChange]])),
            o(this, "actions", {
                LOGOUT: () => {
                    this.questCompletionStates.clear();
                },
            });
    }
}
let l = new s();
