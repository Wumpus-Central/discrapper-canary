n.d(t, { Z: () => c }), n(388685);
var r = n(547943),
    i = n(147913),
    a = n(588529),
    o = n(616022);
function s(e, t, n) {
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
class l extends i.Z {
    _terminate() {
        this.questCompletionStates.clear();
    }
    constructor(...e) {
        super(...e),
            s(this, "questCompletionStates", new Map()),
            s(this, "handleQuestStoreChange", () => {
                let e = o.Z.quests;
                e.forEach((e) => {
                    this.checkQuestCompletion(e.id, e);
                });
                let t = new Set(e.keys());
                for (let e of this.questCompletionStates.keys()) t.has(e) || this.questCompletionStates.delete(e);
            }),
            s(this, "checkQuestCompletion", (e, t) => {
                var n, r;
                let i = null != (r = null == (n = t.userStatus) ? void 0 : n.completedAt) ? r : null;
                if (!this.questCompletionStates.has(e)) return void this.questCompletionStates.set(e, i);
                null == this.questCompletionStates.get(e) && null != i && this.onQuestCompleted(e),
                    this.questCompletionStates.set(e, i);
            }),
            s(this, "onQuestCompleted", (e) => {
                let t = "quest_completed_".concat(e);
                (0, a.Ox)(t), (0, a.Ox)(r.Y.QUEST_COMPLETED, { quest_id: e });
            }),
            s(this, "stores", new Map([[o.Z, this.handleQuestStoreChange]])),
            s(this, "actions", {
                LOGOUT: () => {
                    this.questCompletionStates.clear();
                },
            });
    }
}
let c = new l();
