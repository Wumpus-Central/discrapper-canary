n.d(t, {
    $e: () => m,
    E0: () => g,
    Ll: () => E,
    _e: () => p,
    f0: () => y,
    pv: () => b,
    ui: () => f,
    vA: () => h,
}),
    n(896048);
var r = n(267548),
    i = n(731355),
    a = n(643501),
    s = n(279250),
    o = n(71393),
    l = n(576705),
    c = n(977997),
    u = n(792620),
    d = n(654487);

function f(e) {
    if (null == e) return !1;
    let t = (0, u.pU)(e);
    return null != t && t.length > 1;
}

function p(e) {
    return (0, u.vS)(e) === d.ej;
}

function _(e, t) {
    return new Set(e.config.features).has(t);
}

function h(e) {
    return ((0, u.Cr)(e) || (0, u.vl)(e)) && e.config.features.includes(d.Li.START_QUEST_CTA);
}

function m(e, t) {
    let n = new Map();
    for (let [r, i] of e)
        if (!(f(i) || _(i, d.Li.NON_GAMING_PLAY_QUEST))) {
            for (let e of (0, u.hL)(i))
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
    return null != e && null != t && (0, s.eo)(t, c.A, o.A, l.A, a.default)[0];
}

function b(e) {
    return (0, u.vv)({
        config: e,
    })
        ? i.Z.VIDEO
        : i.Z.GAMEPLAY;
}

function y(e, t) {
    return e.ctaQuests.some((e) => e.questId === t);
}
