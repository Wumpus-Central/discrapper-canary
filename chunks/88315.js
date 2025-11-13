n.d(t, {
    P7: () => m,
    RR: () => p,
    UN: () => u,
    bg: () => _,
    hn: () => d,
    np: () => f,
});
var r = n(979590),
    i = n.n(r),
    l = n(866442),
    a = n(220082),
    o = n(594174),
    c = n(984063),
    s = n(813900);
function u(e) {
    let t = e.current,
        n = null == t ? void 0 : t.getContext("2d");
    null != t && null != n && n.clearRect(0, 0, t.width, t.height);
}
function d(e, t) {
    let { width: n, height: r, left: i, top: l } = e.getBoundingClientRect();
    return {
        x: (t.clientX - i) / n,
        y: (t.clientY - l) / r,
    };
}
function f(e, t) {
    return Math.round(e * t * window.devicePixelRatio);
}
function p(e, t, n) {
    return {
        x: f(e.x, t),
        y: f(e.y, n),
        deltaTime: e.deltaTime,
    };
}
function m(e) {
    return e.type === c.W.LINE;
}
function _(e, t, n, r) {
    var c;
    let u = o.default.getUser(e),
        d = null == u ? void 0 : u.getAvatarURL(null, s.Ks),
        f = null != d ? (null == (c = a.SR.getState().palette[d]) ? void 0 : c[0]) : null,
        p =
            null != f
                ? "#".concat(
                      i()({
                          r: f[0],
                          g: f[1],
                          b: f[2],
                      }).toHex(),
                  )
                : r,
        m = (0, l.Bd)((0, l._i)(p)) > 0.5 ? n : t;
    return {
        fillColor: p,
        outlineColor: m,
    };
}
