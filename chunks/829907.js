(n.d(t, {
    DH: () => C,
    H8: () => A,
    HD: () => f,
    O0: () => p,
    PD: () => R,
    P_: () => E,
    aW: () => _,
    hj: () => T,
    qT: () => P,
    qc: () => S,
    sS: () => g
}),
    n(388685));
var r = n(615287),
    i = n(593472),
    a = n(710845),
    o = n(594190),
    s = n(370862),
    l = n(77498),
    c = n(998502),
    u = n(32300);
let d = new a.Z('OverlayRenderUtils'),
    f = 5000;
function _(e) {
    return (0, u.hS)(e).longTimeout;
}
function p(e) {
    return (0, u.hS)(e).shortTimeout;
}
function h(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.ZP],
        n = t.getGameForPID(e);
    try {
        return null == n ? c.ZP.GetWindowFullscreenTypeByPid(e) : c.ZP.GetWindowFullscreenTypeByPid(n.pid, n.name, n.fullscreenType);
    } catch (t) {
        var r;
        return (d.error('Error getting overlay fullscreen type for pid '.concat(e, ': ').concat(t)), null != (r = null == n ? void 0 : n.fullscreenType) ? r : i.Jx.UNKNOWN);
    }
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.ZP];
    return new Promise((r) => {
        setTimeout(() => {
            r(h(e, [n]));
        }, t);
    });
}
function g(e) {
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
function E(e) {
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
function b(e, t) {
    let { quns: n } = c.ZP.GetWindowFullscreenTypeExtraByPid(e, t.name);
    return (d.info('QUNS for '.concat(t.name, ': ').concat(n)), n === i.Ng.QUNS_RUNNING_D3D_FULL_SCREEN);
}
let y = { '1314682894106497096': (e, t, n) => (b(e, t) ? i.Jx.FULLSCREEN : n) },
    O = new Set(['762434991303950386', '367827983903490050', '1124351860376096858']),
    v = 16,
    I = !0;
async function T(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v,
        r = await m(e, n),
        i = o.ZP.getGameForPID(e);
    if (null == i || null == i.name) return r;
    let a = null == (t = l.Z.getGameByName(i.name)) ? void 0 : t.id;
    if (null == a) return r;
    let s = y[a];
    return null != s ? s(e, i, r) : r;
}
function S(e) {
    var t;
    let n = null == (t = l.Z.getGameByName(e.name)) ? void 0 : t.id;
    return null != n && O.has(n);
}
function A(e) {
    let t = o.ZP.getGameForPID(e);
    return null != t && null != t.name && S(t);
}
let N = new Set([i.Jx.UNKNOWN, i.Jx.FULLSCREEN]);
function C(e, t, n) {
    if (e.overlayMethod !== r.gl.OutOfProcess && e.overlayMethod !== r.gl.OutOfProcessLimitedInteraction) return !1;
    if (!n) return !0;
    switch (t) {
        case i.Jx.UNKNOWN:
            return N.has(e.previousFullscreenType);
        case i.Jx.FULLSCREEN:
            return !0;
    }
    return !1;
}
function R(e, t, n) {
    if (e.overlayMethod !== r.gl.Hook || !n) return !1;
    switch (t) {
        case i.Jx.UNKNOWN:
        case i.Jx.MINIMIZED:
        case i.Jx.FULLSCREEN:
            return !1;
    }
    return !0;
}
function P(e) {
    return null == e
        ? {
              source: s.d.DEFAULT,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: r.gl.Disabled
          }
        : (0, o.b6)(e, I);
}
