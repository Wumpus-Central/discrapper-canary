"use strict";
n.d(t, {
    $e: () => g,
    E0: () => A,
    I0: () => S,
    Ll: () => I,
    _e: () => h,
    jQ: () => y,
    pv: () => T,
    ui: () => p,
    vA: () => E,
});
var r = n(267548),
    i = n(731355),
    s = n(643501),
    a = n(279250),
    o = n(71393),
    l = n(576705),
    u = n(977997),
    c = n(87549),
    d = n(590202),
    _ = n(792620),
    f = n(654487);
function p(e) {
    if (null == e) return !1;
    let t = (0, _.pU)(e);
    return null != t && t.length > 1;
}
function h(e) {
    return (0, _.vS)(e) === f.ej;
}
function m(e, t) {
    return new Set(e.config.features).has(t);
}
function E(e) {
    return ((0, _.Cr)(e) || (0, _.vl)(e)) && e.config.features.includes(f.Li.START_QUEST_CTA);
}
function g(e, t) {
    let n = new Map();
    for (let [r, i] of e)
        if (!(p(i) || m(i, f.Li.NON_GAMING_PLAY_QUEST))) {
            for (let e of (0, _.hL)(i))
                if (t.has(e)) {
                    n.set(r, i);
                    break;
                }
        }
    return n;
}
function A(e) {
    return e.sharePolicy !== r.i.NOT_SHAREABLE;
}
function I(e, t) {
    return null != e && null != t && (0, a.eo)(t, u.A, o.A, l.A, s.default)[0];
}
function T(e) {
    return (0, _.vv)({ config: e }) ? i.Z.VIDEO : i.Z.GAMEPLAY;
}
function S(e, t) {
    return e.ctaQuests.some((e) => e.questId === t);
}
function y(e) {
    let { questId: t, fromContent: n, utmSource: r, utmMedium: i } = e;
    c.A.getState().setUtmCurrentContext({
        utmSourceCurrent: r,
        utmMediumCurrent: i,
        utmCampaignCurrent: t,
        utmContentCurrent: (0, d.jO)(n),
    });
}
