n.d(t, { A: () => g });
var l = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    r = n(827343),
    d = n(430452),
    o = n(287809),
    s = n(824744),
    u = n(723702),
    c = n(731854),
    A = n(985018);
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.x.DEFAULT,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
        g = (0, i.bG)([d.Ay], () => d.Ay.getLocalVolume(e, t), [e, t]),
        m = e === o.default.getCurrentUser()?.id,
        b = t === c.x.STREAM;
    return m
        ? null
        : (0, l.jsx)(a.aK1, {
              id: "user-volume",
              label: b ? A.intl.string(A.t.t4JBnI) : A.intl.string(A.t.m7TNdF),
              control: (i, d) =>
                  (0, l.jsx)(a.i42, {
                      ...i,
                      ref: d,
                      value: (0, s.M)(g),
                      maxValue: u.isPlatformEmbedded ? c.Rv : c.HE,
                      onChange: (l) => {
                          r.A.setLocalVolume(e, (0, s.w)(l), t), n?.(l);
                      },
                      "aria-label": b ? A.intl.string(A.t.t4JBnI) : A.intl.string(A.t.m7TNdF),
                  }),
          });
}
