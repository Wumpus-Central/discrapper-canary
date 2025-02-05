n.d(t, {
    P7: () => h,
    RR: () => f,
    UN: () => c,
    bg: () => p,
    hn: () => d,
    np: () => m
});
var l = n(979590),
    i = n.n(l),
    r = n(866442),
    a = n(220082),
    s = n(594174),
    o = n(984063),
    u = n(813900);
function c(e) {
    let t = e.current,
        n = null == t ? void 0 : t.getContext('2d');
    null != t && null != n && n.clearRect(0, 0, t.width, t.height);
}
function d(e, t) {
    let { width: n, height: l, left: i, top: r } = e.getBoundingClientRect();
    return {
        x: (t.clientX - i) / n,
        y: (t.clientY - r) / l
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
function h(e) {
    return e.type === o.W.LINE;
}
function p(e, t, n, l) {
    var o;
    let c = s.default.getUser(e),
        d = null == c ? void 0 : c.getAvatarURL(null, u.Ks),
        m = null != d ? (null === (o = a.SR.getState().palette[d]) || void 0 === o ? void 0 : o[0]) : null,
        f =
            null != m
                ? '#'.concat(
                      i()({
                          r: m[0],
                          g: m[1],
                          b: m[2]
                      }).toHex()
                  )
                : l,
        h = (0, r.Bd)((0, r._i)(f)) > 0.5 ? n : t;
    return {
        fillColor: f,
        outlineColor: h
    };
}
