n.d(t, {
    DH: () => y,
    PD: () => I,
    P_: () => _,
    hj: () => E,
    qc: () => v,
    sS: () => f
}),
    n(47120);
var i = n(615287),
    r = n(593472),
    a = n(710845),
    s = n(594190),
    o = n(77498),
    l = n(998502);
let u = new a.Z('OverlayRenderUtils');
function c(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.ZP],
        n = t.getGameForPID(e);
    try {
        return null == n ? l.ZP.GetWindowFullscreenTypeByPid(e) : l.ZP.GetWindowFullscreenTypeByPid(n.pid, n.name, n.fullscreenType);
    } catch (t) {
        var i;
        return u.error('Error getting overlay fullscreen type for pid '.concat(e, ': ').concat(t)), null !== (i = null == n ? void 0 : n.fullscreenType) && void 0 !== i ? i : r.Jx.UNKNOWN;
    }
}
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10000,
        [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.ZP];
    return new Promise((i) => {
        setTimeout(() => {
            i(c(e, [n]));
        }, t);
    });
}
function f(e) {
    switch (e) {
        case r.Jx.BORDERLESS_FULLSCREEN:
            return 'Borderless Fullscreen';
        case r.Jx.FULLSCREEN:
            return 'Fullscreen';
        case r.Jx.WINDOWED:
            return 'Windowed';
        case r.Jx.MINIMIZED:
            return 'Minimized';
        case r.Jx.MAXIMIZED:
            return 'Maximized';
        case r.Jx.UNKNOWN:
            return 'Unknown';
    }
}
function _(e) {
    switch (e) {
        case i.gl.OutOfProcess:
            return 'Out of Process';
        case i.gl.OutOfProcessLimitedInteraction:
            return 'Out of Process (Limited Interaction)';
        case i.gl.Hook:
            return 'Hook';
        case i.gl.Disabled:
            return 'Disabled';
    }
}
function p(e, t) {
    let { quns: n } = l.ZP.GetWindowFullscreenTypeExtraByPid(e, t.name);
    return u.info('QUNS for '.concat(t.name, ': ').concat(n)), n === r.Ng.QUNS_RUNNING_D3D_FULL_SCREEN;
}
let h = { '1314682894106497096': (e, t, n) => (p(e, t) ? r.Jx.FULLSCREEN : n) },
    m = { '762434991303950386': (e) => !0 },
    g = 100;
async function E(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g,
        i = await d(e, n),
        r = s.ZP.getGameForPID(e);
    if (null == r || null == r.name) return i;
    let a = null === (t = o.Z.getGameByName(r.name)) || void 0 === t ? void 0 : t.id;
    if (null == a) return i;
    let l = h[a];
    return null != l ? l(e, r, i) : i;
}
function v(e) {
    var t;
    let n = null === (t = o.Z.getGameByName(e.name)) || void 0 === t ? void 0 : t.id;
    if (null == n) return !1;
    let i = m[n];
    return null != i && i(e);
}
function y(e, t, n) {
    if (e.overlayMethod !== i.gl.OutOfProcess && e.overlayMethod !== i.gl.OutOfProcessLimitedInteraction) return !1;
    if (!n) return !0;
    switch (t) {
        case r.Jx.UNKNOWN:
        case r.Jx.FULLSCREEN:
            return !0;
    }
    return !1;
}
function I(e, t, n) {
    if (e.overlayMethod !== i.gl.Hook || !n) return !1;
    switch (t) {
        case r.Jx.UNKNOWN:
        case r.Jx.MINIMIZED:
        case r.Jx.FULLSCREEN:
            return !1;
    }
    return !0;
}
