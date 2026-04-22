n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(477782),
    r = n(964355),
    d = n(827343),
    o = n(430452),
    s = n(287809),
    u = n(824744),
    c = n(723702),
    A = n(731854),
    g = n(985018);
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A.x.DEFAULT,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
        f = (0, l.bG)([o.Ay], () => o.Ay.getLocalVolume(e, t), [e, t]),
        E = e === s.default.getCurrentUser()?.id,
        b = t === A.x.STREAM;
    return E
        ? null
        : (0, i.jsx)(a.aK, {
              id: "user-volume",
              label: b ? g.intl.string(g.t.t4JBnI) : g.intl.string(g.t.m7TNdF),
              control: (l, a) =>
                  (0, i.jsx)(r.i, {
                      ...l,
                      ref: a,
                      value: (0, u.M)(f),
                      maxValue: c.isPlatformEmbedded ? A.Rv : A.HE,
                      onChange: (i) => {
                          d.A.setLocalVolume(e, (0, u.w)(i), t), n?.(i);
                      },
                      "aria-label": b ? g.intl.string(g.t.t4JBnI) : g.intl.string(g.t.m7TNdF),
                  }),
          });
}
