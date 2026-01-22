n.d(t, {
    Bw: () => h,
    ld: () => v,
}),
    n(896048);
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(827734),
    s = n(397927),
    a = n(442433),
    o = n(85448),
    c = n(994500),
    u = n(427262),
    d = n(312006),
    g = n(366098),
    x = n(985018),
    m = n(545058);
let h = (e) => {
        let { channelId: t } = e;
        return (0, l.jsx)(j, { channelId: t });
    },
    j = (e) => {
        let { channelId: t } = e,
            n = (0, g.D3)(t),
            r = (0, g.Xk)(t);
        if (0 === n && 0 === r) return null;
        let o = (e) => {
            (0, a.jA)(
                e,
                (e) => {
                    var n, r;
                    return (0, l.jsx)(
                        p,
                        ((n = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    l = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (l = l.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    l.forEach(function (t) {
                                        var l;
                                        (l = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: l,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = l);
                                    });
                            }
                            return e;
                        })({}, e)),
                        (r = r = { channelId: t }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var l = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, l);
                                  }
                                  return n;
                              })(Object(r)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                              }),
                        n),
                    );
                },
                {
                    position: "left",
                    align: "bottom",
                },
            );
        };
        return n > 0 && r > 0
            ? (0, l.jsxs)("div", {
                  className: m.jC,
                  children: [
                      (0, l.jsx)(s.KTN, {
                          size: "lg",
                          color: i.A.unsafe_rawColors.RED_400.css,
                      }),
                      (0, l.jsx)(s.Text, {
                          variant: "text-xs/normal",
                          color: "text-default",
                          children: x.intl.string(x.t["P/KFXz"]),
                      }),
                      (0, l.jsx)(s.DUT, {
                          className: m.R5,
                          onClick: o,
                          children: x.intl.string(x.t.rUEjBe),
                      }),
                  ],
              })
            : r > 0
              ? (0, l.jsxs)("div", {
                    className: m.jC,
                    children: [
                        (0, l.jsx)(s.G3N, { size: "lg" }),
                        (0, l.jsx)(s.Text, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: x.intl.format(x.t.Ri3o33, { number: r }),
                        }),
                        (0, l.jsx)(s.DUT, {
                            className: m.R5,
                            onClick: o,
                            children: x.intl.string(x.t.rUEjBe),
                        }),
                    ],
                })
              : (0, l.jsxs)("div", {
                    className: m.jC,
                    children: [
                        (0, l.jsx)(s.KTN, {
                            size: "lg",
                            color: i.A.unsafe_rawColors.RED_400.css,
                        }),
                        (0, l.jsx)(s.Text, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: x.intl.format(x.t["6Tcdt7"], { number: n }),
                        }),
                        (0, l.jsx)(s.DUT, {
                            className: m.R5,
                            onClick: o,
                            children: x.intl.string(x.t.rUEjBe),
                        }),
                    ],
                });
    },
    v = (e) => {
        let { user: t, showStatus: n, speaker: i, channelId: a } = e,
            g = (0, r.bG)([d.Ay], () => d.Ay.isModerator(t.id, a)),
            h = (0, r.bG)([c.A], () => c.A.isBlocked(t.id)),
            j = null;
        return (
            n && (j = i ? x.intl.string(x.t.LqMmG2) : g ? x.intl.string(x.t.GMZqSi) : x.intl.string(x.t.suRApw)),
            (0, l.jsxs)("div", {
                className: m.kQ,
                children: [
                    (0, l.jsx)(
                        o.A,
                        {
                            src: t.getAvatarURL(null, 32),
                            size: s._3J.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: i
                                ? () =>
                                      (0, l.jsx)(s.cNw, {
                                          size: "md",
                                          color: "currentColor",
                                          className: m.Kk,
                                      })
                                : null,
                        },
                        t.id,
                    ),
                    (0, l.jsxs)("div", {
                        className: m.eF,
                        children: [
                            (0, l.jsxs)("div", {
                                className: m.Xh,
                                children: [
                                    (0, l.jsx)(s.Text, {
                                        variant: n ? "text-md/normal" : "text-sm/normal",
                                        children: u.Ay.getName(t),
                                    }),
                                    (0, l.jsx)(s.Text, {
                                        variant: n ? "text-md/normal" : "text-sm/normal",
                                        color: "text-subtle",
                                        children: "#".concat(t.discriminator),
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: m.Xh,
                                children: [
                                    (0, l.jsx)(s.Text, {
                                        variant: "text-xs/normal",
                                        color: h ? "text-feedback-critical" : "text-default",
                                        children: h ? x.intl.string(x.t["4bDptI"]) : x.intl.string(x.t.tFY5Zb),
                                    }),
                                    (0, l.jsxs)(s.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: ["| ", j],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    p = (e) => {
        let { channelId: t } = e,
            n = (0, g.mT)(t),
            r = (0, g.Iv)(t);
        return (0, l.jsx)(s.HOs, {
            className: m.kL,
            children: [...n, ...r].map((e) => {
                let { user: n } = e;
                return (0, l.jsx)(
                    v,
                    {
                        user: n,
                        channelId: t,
                    },
                    n.id,
                );
            }),
        });
    };
