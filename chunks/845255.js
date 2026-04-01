"use strict";
n.d(t, { A: () => c });
var r = n(311907),
    i = n(73153);
let s = { achievements: {} },
    a = { ...s };
function o(e) {
    let { achievementProgress: t } = e;
    a.achievements = { ...a.achievements, [t.id]: t };
}
function l() {
    a = { ...s };
}
class u extends r.Ay.PersistedStore {
    static displayName = "GorillaAchievementStore";
    static persistKey = "GorillaAchievementStore";
    initialize(e) {
        null != e && (a = { ...s, ...e });
    }
    getState() {
        return a;
    }
    getAchievements() {
        return a.achievements;
    }
    getAchievement(e) {
        return a.achievements[e];
    }
}
let c = new u(i.h, { GORILLA_UPDATE_ACHIEVEMENT: o, LOGOUT: l });
