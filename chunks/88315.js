n.d(t, {
    P7: () => p,
    RR: () => f,
    UN: () => u,
    bg: () => h,
    hn: () => d,
    np: () => m
});
var i = n(979590),
    l = n.n(i),
    a = n(866442),
    r = n(220082),
    s = n(594174),
    o = n(984063),
    c = n(813900);
function u(e) {
    let t = e.current,
        n = null == t ? void 0 : t.getContext('2d');
    null != t && null != n && n.clearRect(0, 0, t.width, t.height);
}
function d(e, t) {
    let { width: n, height: i, left: l, top: a } = e.getBoundingClientRect();
    return {
        x: (t.clientX - l) / n,
        y: (t.clientY - a) / i
    };
}
function m(e, t) {
    return Math.round(e * t * window.devicePixelRatio);
}
function f(e, t, n) {
    return {
        x: m(e.x, t),
        y: m(e.y, n),
        deltaTime: e.deltaTime
    };
}
function p(e) {
    return e.type === o.W.LINE;
}
function h(e, t, n, i) {
    var o;
    let u = s.default.getUser(e),
        d = null == u ? void 0 : u.getAvatarURL(null, c.Ks),
        m = null != d ? (null === (o = r.SR.getState().palette[d]) || void 0 === o ? void 0 : o[0]) : null,
        f =
            null != m
                ? '#'.concat(
                      l()({
                          r: m[0],
                          g: m[1],
                          b: m[2]
                      }).toHex()
                  )
                : i,
        p = (0, a.Bd)((0, a._i)(f)) > 0.5 ? n : t;
    return {
        fillColor: f,
        outlineColor: p
    };
}
