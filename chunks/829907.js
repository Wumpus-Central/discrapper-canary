n.d(t, {
    DH: () => A,
    H8: () => T,
    HD: () => d,
    PD: () => C,
    P_: () => g,
    X8: () => f,
    hj: () => I,
    qT: () => R,
    qc: () => S,
    sS: () => m,
    tY: () => _
}),
    n(47120);
var r = n(615287),
    i = n(593472),
    o = n(710845),
    a = n(594190),
    s = n(370862),
    l = n(77498),
    c = n(998502);
let u = new o.Z('OverlayRenderUtils'),
    d = 5000,
    f = 8000,
    _ = 12000;
function p(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.ZP],
        n = t.getGameForPID(e);
    try {
        return null == n ? c.ZP.GetWindowFullscreenTypeByPid(e) : c.ZP.GetWindowFullscreenTypeByPid(n.pid, n.name, n.fullscreenType);
    } catch (t) {
        var r;
        return u.error('Error getting overlay fullscreen type for pid '.concat(e, ': ').concat(t)), null != (r = null == n ? void 0 : n.fullscreenType) ? r : i.Jx.UNKNOWN;
    }
}
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.ZP];
    return new Promise((r) => {
        setTimeout(() => {
            r(p(e, [n]));
        }, t);
    });
}
function m(e) {
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
function g(e) {
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
function E(e, t) {
    let { quns: n } = c.ZP.GetWindowFullscreenTypeExtraByPid(e, t.name);
    return u.info('QUNS for '.concat(t.name, ': ').concat(n)), n === i.Ng.QUNS_RUNNING_D3D_FULL_SCREEN;
}
let b = { '1314682894106497096': (e, t, n) => (E(e, t) ? i.Jx.FULLSCREEN : n) },
    y = {
        '762434991303950386': (e) => !0,
        367827983903490050: (e) => !0
    },
    v = 16,
    O = !0;
async function I(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v,
        r = await h(e, n),
        i = a.ZP.getGameForPID(e);
    if (null == i || null == i.name) return r;
    let o = null == (t = l.Z.getGameByName(i.name)) ? void 0 : t.id;
    if (null == o) return r;
    let s = b[o];
    return null != s ? s(e, i, r) : r;
}
function S(e) {
    var t;
    let n = null == (t = l.Z.getGameByName(e.name)) ? void 0 : t.id;
    if (null == n) return !1;
    let r = y[n];
    return null != r && r(e);
}
function T(e) {
    let t = a.ZP.getGameForPID(e);
    return null != t && null != t.name && S(t);
}
let N = new Set([i.Jx.UNKNOWN, i.Jx.FULLSCREEN]);
function A(e, t, n) {
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
function C(e, t, n) {
    if (e.overlayMethod !== r.gl.Hook || !n) return !1;
    switch (t) {
        case i.Jx.UNKNOWN:
        case i.Jx.MINIMIZED:
        case i.Jx.FULLSCREEN:
            return !1;
    }
    return !0;
}
function R(e) {
    return null == e
        ? {
              source: s.d.DEFAULT,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: r.gl.Disabled
          }
        : (0, a.b6)(e, O);
}
