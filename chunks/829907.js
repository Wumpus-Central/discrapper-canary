n.d(t, {
    DH: () => R,
    H8: () => A,
    HD: () => f,
    O0: () => p,
    PD: () => P,
    P_: () => E,
    aW: () => _,
    hj: () => T,
    hs: () => h,
    qT: () => D,
    qc: () => S,
    sS: () => g,
}),
    n(388685),
    n(642613);
var r = n(593472),
    i = n(710845),
    a = n(594190),
    o = n(77498),
    s = n(998502),
    l = n(41534),
    c = n(837268),
    u = n(32300);
let d = new i.Z("OverlayRenderUtils"),
    f = 5000;
function _(e) {
    return (0, u.hS)(e).longTimeout;
}
function p(e) {
    return (0, u.hS)(e).shortTimeout;
}
function h(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.ZP],
        n = t.getGameOrTransformedSubgameForPID(e);
    try {
        return null == n
            ? s.ZP.GetWindowFullscreenTypeByPid(e)
            : s.ZP.GetWindowFullscreenTypeByPid(n.pid, n.name, n.fullscreenType);
    } catch (t) {
        var i;
        return (
            d.error("Error getting overlay fullscreen type for pid ".concat(e, ": ").concat(t)),
            (0, l.D1)(t, c.gl.OutOfProcess),
            null != (i = null == n ? void 0 : n.fullscreenType) ? i : r.Jx.UNKNOWN
        );
    }
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.ZP];
    return new Promise((r) => {
        setTimeout(() => {
            r(h(e, [n]));
        }, t);
    });
}
function g(e) {
    switch (e) {
        case r.Jx.BORDERLESS_FULLSCREEN:
            return "Borderless Fullscreen";
        case r.Jx.FULLSCREEN:
            return "Fullscreen";
        case r.Jx.WINDOWED:
            return "Windowed";
        case r.Jx.MINIMIZED:
            return "Minimized";
        case r.Jx.MAXIMIZED:
            return "Maximized";
        case r.Jx.UNKNOWN:
            return "Unknown";
    }
}
function E(e) {
    switch (e) {
        case c.gl.OutOfProcess:
            return "Out of Process";
        case c.gl.OutOfProcessLimitedInteraction:
            return "Out of Process (Limited Interaction)";
        case c.gl.Hook:
            return "Hook";
        case c.gl.Disabled:
            return "Disabled";
    }
}
function b(e, t) {
    let { quns: n } = s.ZP.GetWindowFullscreenTypeExtraByPid(e, t.name);
    return d.info("QUNS for ".concat(t.name, ": ").concat(n)), n === r.Ng.QUNS_RUNNING_D3D_FULL_SCREEN;
}
let y = { "1314682894106497096": (e, t, n) => (b(e, t) ? r.Jx.FULLSCREEN : n) },
    O = new Set(["762434991303950386", "1402418239342120960", "1124351860376096858"]),
    v = 16,
    I = !0;
async function T(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v,
        r = await m(e, n),
        i = a.ZP.getGameOrTransformedSubgameForPID(e);
    if (null == i || null == i.name) return r;
    let s = null == (t = o.Z.getGameByName(i.name)) ? void 0 : t.id;
    if (null == s) return r;
    let l = y[s];
    return null != l ? l(e, i, r) : r;
}
function S(e) {
    var t;
    let n = null == (t = o.Z.getGameByName(e.name)) ? void 0 : t.id;
    return null != n && O.has(n);
}
function A(e) {
    let t = a.ZP.getGameOrTransformedSubgameForPID(e);
    return null != t && null != t.name && S(t);
}
let C = new Set([r.Jx.UNKNOWN, r.Jx.FULLSCREEN]);
function N(e) {
    let t = Object.keys(e)
        .map(Number)
        .sort((e, t) => t - e);
    return 0 === t.length ? r.Jx.UNKNOWN : e[t.length > 1 ? t[1] : t[0]];
}
function R(e, t, n) {
    if (e.overlayMethod !== c.gl.OutOfProcess && e.overlayMethod !== c.gl.OutOfProcessLimitedInteraction) return !1;
    if (!n) return !0;
    switch (t) {
        case r.Jx.UNKNOWN:
            return C.has(N(e.fullscreenHistory));
        case r.Jx.FULLSCREEN:
            return !0;
    }
    return !1;
}
function P(e, t) {
    if (!t) return !1;
    switch (e) {
        case r.Jx.UNKNOWN:
        case r.Jx.MINIMIZED:
        case r.Jx.FULLSCREEN:
            return !1;
    }
    return !0;
}
function D(e) {
    return null == e
        ? {
              source: c.d0.DEFAULT,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: c.gl.Disabled,
          }
        : (0, a.b6)(e, I);
}
