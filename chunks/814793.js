"use strict";
n.d(t, {
    $e: () => m,
    E0: () => g,
    I0: () => T,
    Ll: () => A,
    _e: () => p,
    jQ: () => S,
    pv: () => I,
    ui: () => f,
    vA: () => E,
});
var i = n(267548),
    r = n(731355),
    s = n(643501),
    a = n(279250),
    o = n(71393),
    l = n(576705),
    u = n(977997),
    c = n(87549),
    d = n(590202),
    _ = n(792620),
    h = n(190107);
function f(e) {
    if (null == e) return !1;
    let t = (0, _.pU)(e);
    return null != t && t.length > 1;
}
function p(e) {
    return (0, _.vS)(e) === h.ej;
}
function E(e) {
    return (0, _.vl)(e) || (0, _.Ov)(e);
}
function m(e, t) {
    let n = new Map();
    for (let [r, s] of e) {
        var i;
        if (!f(s)) {
            if (((i = h.Li.NON_GAMING_PLAY_QUEST), !new Set(s.config.features).has(i))) {
                for (let e of (0, _.hL)(s))
                    if (t.has(e)) {
                        n.set(r, s);
                        break;
                    }
            }
        }
    }
    return n;
}
function g(e) {
    return e.sharePolicy !== i.i.NOT_SHAREABLE;
}
function A(e, t) {
    return null != e && null != t && (0, a.eo)(t, u.A, o.A, l.A, s.default)[0];
}
function I(e) {
    return (0, _.vv)({ config: e }) ? r.Z.VIDEO : r.Z.GAMEPLAY;
}
function T(e, t) {
    return e.questIds?.includes(t) ?? !1;
}
function S(e) {
    let { questId: t, fromContent: n, utmSource: i, utmMedium: r } = e;
    c.A.getState().setUtmCurrentContext({
        utmSourceCurrent: i,
        utmMediumCurrent: r,
        utmCampaignCurrent: t,
        utmContentCurrent: (0, d.jO)(n),
    });
}
