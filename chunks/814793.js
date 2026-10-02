n.d(t, {
    $e: () => p,
    E0: () => T,
    I0: () => S,
    Ll: () => m,
    _e: () => h,
    iM: () => I,
    jQ: () => N,
    pv: () => g,
    ui: () => A,
    vA: () => f,
});
var i = n(267548),
    r = n(731355),
    a = n(643501),
    s = n(279250),
    l = n(71393),
    o = n(576705),
    d = n(977997),
    c = n(87549),
    u = n(590202),
    _ = n(792620),
    E = n(190107);
function A(e) {
    if (null == e) return !1;
    let t = (0, _.pU)(e);
    return null != t && t.length > 1;
}
function h(e) {
    return (0, _.vS)(e) === E.ej;
}
function I(e, t) {
    return new Set(e.config.features).has(t);
}
function f(e) {
    return (0, _.vl)(e) || (0, _.Ov)(e);
}
function p(e, t) {
    let n = new Map();
    for (let [i, r] of e)
        if (!(A(r) || I(r, E.Li.NON_GAMING_PLAY_QUEST))) {
            for (let e of (0, _.hL)(r))
                if (t.has(e)) {
                    n.set(i, r);
                    break;
                }
        }
    return n;
}
function T(e) {
    return e.sharePolicy !== i.i.NOT_SHAREABLE;
}
function m(e, t) {
    return null != e && null != t && (0, s.eo)(t, d.A, l.A, o.A, a.default)[0];
}
function g(e) {
    return (0, _.vv)({ config: e }) ? r.Z.VIDEO : r.Z.GAMEPLAY;
}
function S(e, t) {
    return e.questIds?.includes(t) ?? !1;
}
function N(e) {
    let { questId: t, fromContent: n, utmSource: i, utmMedium: r } = e;
    c.A.getState().setUtmCurrentContext({
        utmSourceCurrent: i,
        utmMediumCurrent: r,
        utmCampaignCurrent: t,
        utmContentCurrent: (0, u.jO)(n),
    });
}
