var l = i(477900);
i(582128);
var n = i(855986),
    a = i(477782),
    r = i(964355),
    d = i(827343),
    s = i(718197),
    u = i(287809),
    o = i(824744),
    c = i(723702),
    g = i(731854),
    h = i(792996);
i.d(
    e,
    {},
    {
        A: function (t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.x.DEFAULT,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                m = (0, n.bG)([s.Ay], () => s.Ay.getLocalVolume(t, e), [t, e]),
                v = t === u.default.getCurrentUser()?.id,
                p = e === g.x.STREAM;
            return v
                ? null
                : (0, l.jsx)(a.aK, {
                      id: "user-volume",
                      label: p ? h.intl.string(h.t.t4JBnI) : h.intl.string(h.t.m7TNdF),
                      interactive: !1,
                      control: (n, a) =>
                          (0, l.jsx)(r.i, {
                              ...n,
                              ref: a,
                              value: (0, o.M)(m),
                              maxValue: c.isPlatformEmbedded ? 200 : 100,
                              onChange: (l) => {
                                  (d.default.setLocalVolume(t, (0, o.w)(l), e), i?.(l));
                              },
                              "aria-label": p ? h.intl.string(h.t.t4JBnI) : h.intl.string(h.t.m7TNdF),
                          }),
                  });
        },
    },
);
