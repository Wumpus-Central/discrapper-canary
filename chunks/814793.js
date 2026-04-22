"use strict";
n.d(t, {
    $e: () => m,
    E0: () => g,
    I0: () => T,
    Ll: () => A,
    _e: () => h,
    jQ: () => S,
    pv: () => I,
    ui: () => E,
    vA: () => p,
});
var r = n(267548),
    i = n(731355),
    s = n(643501),
    a = n(279250),
    o = n(71393),
    l = n(576705),
    u = n(977997),
    d = n(87549),
    c = n(590202),
    _ = n(792620),
    f = n(654487);
function E(e) {
    if (null == e) return !1;
    let t = (0, _.pU)(e);
    return null != t && t.length > 1;
}
function h(e) {
    return (0, _.vS)(e) === f.ej;
}
function p(e) {
    return (0, _.vl)(e) || (0, _.Ov)(e);
}
function m(e, t) {
    let n = new Map();
    for (let [i, s] of e) {
        var r;
        if (!E(s)) {
            if (((r = f.Li.NON_GAMING_PLAY_QUEST), !new Set(s.config.features).has(r))) {
                for (let e of (0, _.hL)(s))
                    if (t.has(e)) {
                        n.set(i, s);
                        break;
                    }
            }
        }
    }
    return n;
}
function g(e) {
    return e.sharePolicy !== r.i.NOT_SHAREABLE;
}
function A(e, t) {
    return null != e && null != t && (0, a.eo)(t, u.A, o.A, l.A, s.default)[0];
}
function I(e) {
    return (0, _.vv)({ config: e }) ? i.Z.VIDEO : i.Z.GAMEPLAY;
}
function T(e, t) {
    return e.questIds?.includes(t) ?? !1;
}
function S(e) {
    let { questId: t, fromContent: n, utmSource: r, utmMedium: i } = e;
    d.A.getState().setUtmCurrentContext({
        utmSourceCurrent: r,
        utmMediumCurrent: i,
        utmCampaignCurrent: t,
        utmContentCurrent: (0, c.jO)(n),
    });
}
