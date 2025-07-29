(n.d(t, {
    DH: () => R,
    H8: () => N,
    HD: () => f,
    O0: () => h,
    PD: () => P,
    P_: () => b,
    aW: () => p,
    hj: () => S,
    qT: () => w,
    qc: () => A,
    sS: () => E
}),
    n(388685));
var r = n(615287),
    i = n(593472),
    a = n(710845),
    o = n(594190),
    s = n(370862),
    l = n(77498),
    c = n(998502),
    u = n(41534),
    d = n(32300);
let _ = new a.Z('OverlayRenderUtils'),
    f = 5000;
function p(e) {
    return (0, d.hS)(e).longTimeout;
}
function h(e) {
    return (0, d.hS)(e).shortTimeout;
}
function m(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.ZP],
        n = t.getGameForPID(e);
    try {
        return null == n ? c.ZP.GetWindowFullscreenTypeByPid(e) : c.ZP.GetWindowFullscreenTypeByPid(n.pid, n.name, n.fullscreenType);
    } catch (t) {
        var a;
        return (_.error('Error getting overlay fullscreen type for pid '.concat(e, ': ').concat(t)), (0, u.D1)(t, r.gl.OutOfProcess), null != (a = null == n ? void 0 : n.fullscreenType) ? a : i.Jx.UNKNOWN);
    }
}
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.ZP];
    return new Promise((r) => {
        setTimeout(() => {
            r(m(e, [n]));
        }, t);
    });
}
function E(e) {
    switch (e) {
        case i.Jx.BORDERLESS_FULLSCREEN:
            return 'Borderless Fullscreen';
        case i.Jx.FULLSCREEN:
            return 'Fullscreen';
        case i.Jx.WINDOWED:
            return 'Windowed';
        case i.Jx.MINIMIZED:
            return 'Minimized';
        case i.Jx.MAXIMIZED:
            return 'Maximized';
        case i.Jx.UNKNOWN:
            return 'Unknown';
    }
}
function b(e) {
    switch (e) {
        case r.gl.OutOfProcess:
            return 'Out of Process';
        case r.gl.OutOfProcessLimitedInteraction:
            return 'Out of Process (Limited Interaction)';
        case r.gl.Hook:
            return 'Hook';
        case r.gl.Disabled:
            return 'Disabled';
    }
}
function y(e, t) {
    let { quns: n } = c.ZP.GetWindowFullscreenTypeExtraByPid(e, t.name);
    return (_.info('QUNS for '.concat(t.name, ': ').concat(n)), n === i.Ng.QUNS_RUNNING_D3D_FULL_SCREEN);
}
let O = { '1314682894106497096': (e, t, n) => (y(e, t) ? i.Jx.FULLSCREEN : n) },
    v = new Set(['762434991303950386', '367827983903490050', '1124351860376096858']),
    I = 16,
    T = !0;
async function S(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I,
        r = await g(e, n),
        i = o.ZP.getGameForPID(e);
    if (null == i || null == i.name) return r;
    let a = null == (t = l.Z.getGameByName(i.name)) ? void 0 : t.id;
    if (null == a) return r;
    let s = O[a];
    return null != s ? s(e, i, r) : r;
}
function A(e) {
    var t;
    let n = null == (t = l.Z.getGameByName(e.name)) ? void 0 : t.id;
    return null != n && v.has(n);
}
function N(e) {
    let t = o.ZP.getGameForPID(e);
    return null != t && null != t.name && A(t);
}
let C = new Set([i.Jx.UNKNOWN, i.Jx.FULLSCREEN]);
function R(e, t, n) {
    if (e.overlayMethod !== r.gl.OutOfProcess && e.overlayMethod !== r.gl.OutOfProcessLimitedInteraction) return !1;
    if (!n) return !0;
    switch (t) {
        case i.Jx.UNKNOWN:
            return C.has(e.previousFullscreenType);
        case i.Jx.FULLSCREEN:
            return !0;
    }
    return !1;
}
function P(e, t, n) {
    if (e.overlayMethod !== r.gl.Hook || !n) return !1;
    switch (t) {
        case i.Jx.UNKNOWN:
        case i.Jx.MINIMIZED:
        case i.Jx.FULLSCREEN:
            return !1;
    }
    return !0;
}
function w(e) {
    return null == e
        ? {
              source: s.d.DEFAULT,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: r.gl.Disabled
          }
        : (0, o.b6)(e, T);
}
