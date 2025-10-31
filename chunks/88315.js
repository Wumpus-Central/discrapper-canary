n.d(t, {
    P7: () => h,
    RR: () => f,
    UN: () => u,
    bg: () => m,
    hn: () => d,
    np: () => p,
});
var r = n(979590),
    i = n.n(r),
    l = n(866442),
    a = n(220082),
    o = n(594174),
    s = n(984063),
    c = n(813900);
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
function p(e, t) {
    return Math.round(e * t * window.devicePixelRatio);
}
function f(e, t, n) {
    return {
        x: p(e.x, t),
        y: p(e.y, n),
        deltaTime: e.deltaTime,
    };
}
function h(e) {
    return e.type === s.W.LINE;
}
function m(e, t, n, r) {
    var s;
    let u = o.default.getUser(e),
        d = null == u ? void 0 : u.getAvatarURL(null, c.Ks),
        p = null != d ? (null == (s = a.SR.getState().palette[d]) ? void 0 : s[0]) : null,
        f =
            null != p
                ? "#".concat(
                      i()({
                          r: p[0],
                          g: p[1],
                          b: p[2],
                      }).toHex(),
                  )
                : r,
        h = (0, l.Bd)((0, l._i)(f)) > 0.5 ? n : t;
    return {
        fillColor: f,
        outlineColor: h,
    };
}
