"use strict";
n.d(t, { A: () => _ });
var i = n(17928),
    r = n(228366),
    s = n(495544),
    a = n(754692),
    o = n(3137),
    l = n(559908);
let u = { unlockedAchievements: {} },
    c = { ...u };
class d extends i.Ay.PersistedStore {
    static displayName = "PoggermodeAchievementStore";
    static persistKey = "PoggermodeAchievementStore";
    initialize(e) {
        this.waitFor(s.default, o.A, l.Ay);
        let t = e ?? { ...u };
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
let _ = new d(r.h, {
    POGGERMODE_ACHIEVEMENT_UNLOCK: function (e) {
        let { achievementId: t } = e;
        if (!o.A.isEnabled()) return !1;
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
