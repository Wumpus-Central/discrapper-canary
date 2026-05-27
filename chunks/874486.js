n.d(t, { A: () => h });
var i = n(17928),
    l = n(228366),
    r = n(495544),
    s = n(754692),
    a = n(3137),
    o = n(559908);
let d = { unlockedAchievements: {} },
    c = { ...d };
class u extends i.Ay.PersistedStore {
    static displayName = "PoggermodeAchievementStore";
    static persistKey = "PoggermodeAchievementStore";
    initialize(e) {
        this.waitFor(r.default, a.A, o.Ay);
        let t = e ?? { ...d };
        for (let e in t) c[e] = t[e];
    }
    getState() {
        return c;
    }
    getAllUnlockedAchievements() {
        return c.unlockedAchievements;
    }
    getUnlocked(e) {
        return c.unlockedAchievements[e] ?? null;
    }
}
let h = new u(l.h, {
    POGGERMODE_ACHIEVEMENT_UNLOCK: function (e) {
        let { achievementId: t } = e;
        if (!a.A.isEnabled()) return !1;
        null != c.unlockedAchievements[t] ||
            ((c.unlockedAchievements = {
                ...c.unlockedAchievements,
                [t]: { achievementId: t, dateUnlocked: Date.now() },
            }),
            setTimeout(() => {
                (0, s.U)(t, !0);
            }, 2e3));
    },
});
