n.d(t, { A: () => h });
var i = n(17928),
    s = n(73153),
    r = n(280450),
    l = n(754692),
    a = n(3137),
    o = n(559908);
let c = { unlockedAchievements: {} },
    d = { ...c };
class u extends i.Ay.PersistedStore {
    static displayName = "PoggermodeAchievementStore";
    static persistKey = "PoggermodeAchievementStore";
    initialize(e) {
        this.waitFor(r.default, a.A, o.Ay);
        let t = e ?? { ...c };
        for (let e in t) d[e] = t[e];
    }
    getState() {
        return d;
    }
    getAllUnlockedAchievements() {
        return d.unlockedAchievements;
    }
    getUnlocked(e) {
        return d.unlockedAchievements[e] ?? null;
    }
}
let h = new u(s.h, {
    POGGERMODE_ACHIEVEMENT_UNLOCK: function (e) {
        let { achievementId: t } = e;
        if (!a.A.isEnabled()) return !1;
        null != d.unlockedAchievements[t] ||
            ((d.unlockedAchievements = {
                ...d.unlockedAchievements,
                [t]: { achievementId: t, dateUnlocked: Date.now() },
            }),
            setTimeout(() => {
                (0, l.U)(t, !0);
            }, 2e3));
    },
});
