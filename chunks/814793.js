"use strict";
n.d(t, { $e: () => m, E0: () => g, Ll: () => E, _e: () => f, f0: () => I, pv: () => A, ui: () => _, vA: () => h });
var r = n(267548),
    i = n(731355),
    a = n(643501),
    s = n(279250),
    o = n(71393),
    l = n(576705),
    u = n(977997),
    c = n(792620),
    d = n(654487);
function _(e) {
    if (null == e) return !1;
    let t = (0, c.pU)(e);
    return null != t && t.length > 1;
}
function f(e) {
    return (0, c.vS)(e) === d.ej;
}
function p(e, t) {
    return new Set(e.config.features).has(t);
}
function h(e) {
    return ((0, c.Cr)(e) || (0, c.vl)(e)) && e.config.features.includes(d.Li.START_QUEST_CTA);
}
function m(e, t) {
    let n = new Map();
    for (let [r, i] of e)
        if (!(_(i) || p(i, d.Li.NON_GAMING_PLAY_QUEST))) {
            for (let e of (0, c.hL)(i))
                if (t.has(e)) {
                    n.set(r, i);
                    break;
                }
        }
    return n;
}
function g(e) {
    return e.sharePolicy !== r.i.NOT_SHAREABLE;
}
function E(e, t) {
    return null != e && null != t && (0, s.eo)(t, u.A, o.A, l.A, a.default)[0];
}
function A(e) {
    return (0, c.vv)({ config: e }) ? i.Z.VIDEO : i.Z.GAMEPLAY;
}
function I(e, t) {
    return e.ctaQuests.some((e) => e.questId === t);
}
