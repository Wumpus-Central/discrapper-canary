n.d(t, {
    P7: () => p,
    RR: () => m,
    UN: () => c,
    bg: () => g,
    hn: () => d,
    np: () => f
});
var r = n(979590),
    l = n.n(r),
    i = n(866442),
    a = n(220082),
    o = n(594174),
    s = n(984063),
    u = n(813900);
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
function m(e, t, n) {
    return {
        x: f(e.x, t),
        y: f(e.y, n),
        deltaTime: e.deltaTime
    };
}
function p(e) {
    return e.type === s.W.LINE;
}
function g(e, t, n, r) {
    var s;
    let c = o.default.getUser(e),
        d = null == c ? void 0 : c.getAvatarURL(null, u.Ks),
        f = null != d ? (null == (s = a.SR.getState().palette[d]) ? void 0 : s[0]) : null,
        m =
            null != f
                ? '#'.concat(
                      l()({
                          r: f[0],
                          g: f[1],
                          b: f[2]
                      }).toHex()
                  )
                : r,
        p = (0, i.Bd)((0, i._i)(m)) > 0.5 ? n : t;
    return {
        fillColor: m,
        outlineColor: p
    };
}
