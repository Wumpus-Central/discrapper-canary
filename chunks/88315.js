n.d(t, {
    P7: () => p,
    RR: () => _,
    UN: () => u,
    bg: () => h,
    hn: () => d,
    np: () => f
});
var r = n(979590),
    i = n.n(r),
    a = n(866442),
    o = n(220082),
    s = n(594174),
    l = n(984063),
    c = n(813900);
function u(e) {
    let t = e.current,
        n = null == t ? void 0 : t.getContext('2d');
    null != t && null != n && n.clearRect(0, 0, t.width, t.height);
}
function d(e, t) {
    let { width: n, height: r, left: i, top: a } = e.getBoundingClientRect();
    return {
        x: (t.clientX - i) / n,
        y: (t.clientY - a) / r
    };
}
function f(e, t) {
    return Math.round(e * t * window.devicePixelRatio);
}
function _(e, t, n) {
    return {
        x: f(e.x, t),
        y: f(e.y, n),
        deltaTime: e.deltaTime
    };
}
function p(e) {
    return e.type === l.W.LINE;
}
function h(e, t, n, r) {
    var l;
    let u = s.default.getUser(e),
        d = null == u ? void 0 : u.getAvatarURL(null, c.Ks),
        f = null != d ? (null == (l = o.SR.getState().palette[d]) ? void 0 : l[0]) : null,
        _ =
            null != f
                ? '#'.concat(
                      i()({
                          r: f[0],
                          g: f[1],
                          b: f[2]
                      }).toHex()
                  )
                : r,
        p = (0, a.Bd)((0, a._i)(_)) > 0.5 ? n : t;
    return {
        fillColor: _,
        outlineColor: p
    };
}
