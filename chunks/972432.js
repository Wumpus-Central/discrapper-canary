i.d(e, { A: () => h });
var l = i(477900);
i(582128);
var n = i(17928),
    a = i(477782),
    r = i(964355),
    s = i(827343),
    d = i(453028),
    o = i(287809),
    u = i(824744),
    c = i(723702),
    g = i(731854),
    v = i(375708);
function h(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.x.DEFAULT,
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
        h = (0, n.bG)([d.Ay], () => d.Ay.getLocalVolume(t, e), [t, e]),
        m = t === o.default.getCurrentUser()?.id,
        p = e === g.x.STREAM;
    return m
        ? null
        : (0, l.jsx)(a.aK, {
              id: "user-volume",
              label: p ? v.intl.string(v.t.t4JBnI) : v.intl.string(v.t.m7TNdF),
              interactive: !1,
              control: (n, a) =>
                  (0, l.jsx)(r.i, {
                      ...n,
                      ref: a,
                      value: (0, u.M)(h),
                      maxValue: c.isPlatformEmbedded ? g.Rv : g.HE,
                      onChange: (l) => {
                          s.A.setLocalVolume(t, (0, u.w)(l), e), i?.(l);
                      },
                      "aria-label": p ? v.intl.string(v.t.t4JBnI) : v.intl.string(v.t.m7TNdF),
                  }),
          });
}
