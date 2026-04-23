n.d(t, { A: () => _ });
var i = n(17928),
    E = n(228366),
    l = n(495544),
    a = n(414736),
    s = n(3137),
    r = n(559908);
let o = { unlockedAchievements: {} },
    c = { ...o };
class u extends i.Ay.PersistedStore {
    static displayName = "PoggermodeAchievementStore";
    static persistKey = "PoggermodeAchievementStore";
    initialize(e) {
        this.waitFor(l.default, s.A, r.Ay);
        let t = e ?? { ...o };
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
let _ = new u(E.h, {
    POGGERMODE_ACHIEVEMENT_UNLOCK: function (e) {
        let { achievementId: t } = e;
        if (!s.A.isEnabled()) return !1;
        null != c.unlockedAchievements[t] ||
            ((c.unlockedAchievements = {
                ...c.unlockedAchievements,
                [t]: { achievementId: t, dateUnlocked: Date.now() },
            }),
            setTimeout(() => {
                (0, a.U)(t, !0);
            }, 2e3));
    },
});
