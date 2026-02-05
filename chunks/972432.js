n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(397927),
    r = n(827343),
    d = n(430452),
    s = n(287809),
    o = n(824744),
    u = n(723702),
    c = n(731854),
    A = n(985018);
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.x.DEFAULT,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
        g = (0, l.bG)([d.A], () => d.A.getLocalVolume(e, t), [e, t]),
        E = e === s.default.getCurrentUser()?.id,
        _ = t === c.x.STREAM;
    return E
        ? null
        : (0, i.jsx)(a.aK1, {
              id: "user-volume",
              label: _ ? A.intl.string(A.t.t4JBnI) : A.intl.string(A.t.m7TNdF),
              control: (l, d) =>
                  (0, i.jsx)(a.i42, {
                      ...l,
                      ref: d,
                      value: (0, o.M)(g),
                      maxValue: u.isPlatformEmbedded ? 200 : 100,
                      onChange: (i) => {
                          r.A.setLocalVolume(e, (0, o.w)(i), t), n?.(i);
                      },
                      "aria-label": _ ? A.intl.string(A.t.t4JBnI) : A.intl.string(A.t.m7TNdF),
                  }),
          });
}
