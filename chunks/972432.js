l.d(e, { A: () => m });
var i = l(627968);
l(64700);
var n = l(17928),
    a = l(477782),
    r = l(964355),
    s = l(827343),
    d = l(235058),
    o = l(287809),
    u = l(824744),
    c = l(723702),
    g = l(731854),
    h = l(375708);
function m(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.x.DEFAULT,
        l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
        m = (0, n.bG)([d.Ay], () => d.Ay.getLocalVolume(t, e), [t, e]),
        v = t === o.default.getCurrentUser()?.id,
        p = e === g.x.STREAM;
    return v
        ? null
        : (0, i.jsx)(a.aK, {
              id: "user-volume",
              label: p ? h.intl.string(h.t.t4JBnI) : h.intl.string(h.t.m7TNdF),
              control: (n, a) =>
                  (0, i.jsx)(r.i, {
                      ...n,
                      ref: a,
                      value: (0, u.M)(m),
                      maxValue: c.isPlatformEmbedded ? g.Rv : g.HE,
                      onChange: (i) => {
                          s.A.setLocalVolume(t, (0, u.w)(i), e), l?.(i);
                      },
                      "aria-label": p ? h.intl.string(h.t.t4JBnI) : h.intl.string(h.t.m7TNdF),
                  }),
          });
}
