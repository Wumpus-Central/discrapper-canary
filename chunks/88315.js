n.d(t, {
    P7: () => m,
    RR: () => p,
    UN: () => c,
    bg: () => E,
    hn: () => d,
    np: () => f
});
var r = n(979590),
    l = n.n(r),
    i = n(866442),
    a = n(220082),
    o = n(594174),
    u = n(984063),
    s = n(813900);
function c(e) {
    let t = e.current,
        n = null == t ? void 0 : t.getContext('2d');
    null != t && null != n && n.clearRect(0, 0, t.width, t.height);
}
function d(e, t) {
    let { width: n, height: r, left: l, top: i } = e.getBoundingClientRect();
    return {
        x: (t.clientX - l) / n,
        y: (t.clientY - i) / r
    };
}
function f(e, t) {
    return Math.round(e * t * window.devicePixelRatio);
}
function p(e, t, n) {
    return {
        x: f(e.x, t),
        y: f(e.y, n),
        deltaTime: e.deltaTime
    };
}
function m(e) {
    return e.type === u.W.LINE;
}
function E(e, t, n, r) {
    var u;
    let c = o.default.getUser(e),
        d = null == c ? void 0 : c.getAvatarURL(null, s.Ks),
        f = null != d ? (null == (u = a.SR.getState().palette[d]) ? void 0 : u[0]) : null,
        p =
            null != f
                ? '#'.concat(
                      l()({
                          r: f[0],
                          g: f[1],
                          b: f[2]
                      }).toHex()
                  )
                : r,
        m = (0, i.Bd)((0, i._i)(p)) > 0.5 ? n : t;
    return {
        fillColor: p,
        outlineColor: m
    };
}
