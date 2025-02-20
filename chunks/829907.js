n.d(t, {
    DH: () => b,
    PD: () => y,
    P_: () => p,
    hj: () => E,
    qc: () => v,
    sS: () => f
}),
    n(47120);
var r = n(615287),
    i = n(593472),
    o = n(710845),
    a = n(594190),
    s = n(77498),
    l = n(998502);
let c = new o.Z('OverlayRenderUtils');
function u(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.ZP],
        n = t.getGameForPID(e);
    try {
        return null == n ? l.ZP.GetWindowFullscreenTypeByPid(e) : l.ZP.GetWindowFullscreenTypeByPid(n.pid, n.name, n.fullscreenType);
    } catch (t) {
        var r;
        return c.error('Error getting overlay fullscreen type for pid '.concat(e, ': ').concat(t)), null !== (r = null == n ? void 0 : n.fullscreenType) && void 0 !== r ? r : i.Jx.UNKNOWN;
    }
}
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10000,
        [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.ZP];
    return new Promise((r) => {
        setTimeout(() => {
            r(u(e, [n]));
        }, t);
    });
}
function f(e) {
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
function p(e) {
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
function _(e, t) {
    let { quns: n } = l.ZP.GetWindowFullscreenTypeExtraByPid(e, t.name);
    return c.info('QUNS for '.concat(t.name, ': ').concat(n)), n === i.Ng.QUNS_RUNNING_D3D_FULL_SCREEN;
}
let h = { '1314682894106497096': (e, t, n) => (_(e, t) ? i.Jx.FULLSCREEN : n) },
    m = { '762434991303950386': (e) => !0 },
    g = 100;
async function E(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g,
        r = await d(e, n),
        i = a.ZP.getGameForPID(e);
    if (null == i || null == i.name) return r;
    let o = null === (t = s.Z.getGameByName(i.name)) || void 0 === t ? void 0 : t.id;
    if (null == o) return r;
    let l = h[o];
    return null != l ? l(e, i, r) : r;
}
function v(e) {
    var t;
    let n = null === (t = s.Z.getGameByName(e.name)) || void 0 === t ? void 0 : t.id;
    if (null == n) return !1;
    let r = m[n];
    return null != r && r(e);
}
function b(e, t, n) {
    if (e.overlayMethod !== r.gl.OutOfProcess && e.overlayMethod !== r.gl.OutOfProcessLimitedInteraction) return !1;
    if (!n) return !0;
    switch (t) {
        case i.Jx.UNKNOWN:
        case i.Jx.FULLSCREEN:
            return !0;
    }
    return !1;
}
function y(e, t, n) {
    if (e.overlayMethod !== r.gl.Hook || !n) return !1;
    switch (t) {
        case i.Jx.UNKNOWN:
        case i.Jx.MINIMIZED:
        case i.Jx.FULLSCREEN:
            return !1;
    }
    return !0;
}
