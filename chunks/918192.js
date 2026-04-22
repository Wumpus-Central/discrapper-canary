l.d(t, { Bw: () => A, ld: () => y });
var n = l(627968);
l(64700);
var a = l(311907),
    r = l(827734),
    i = l(428678),
    s = l(834730),
    o = l(939249),
    c = l(952270),
    d = l(831544),
    u = l(778712),
    h = l(573613),
    g = l(442433),
    x = l(85448),
    m = l(994500),
    f = l(427262),
    p = l(312006),
    v = l(366098),
    _ = l(985018),
    j = l(195695);
let A = (e) => {
        let { channelId: t } = e;
        return (0, n.jsx)(b, { channelId: t });
    },
    b = (e) => {
        let { channelId: t } = e,
            l = (0, v.D3)(t),
            a = (0, v.Xk)(t);
        if (0 === l && 0 === a) return null;
        let d = (e) => {
            (0, g.jA)(e, (e) => (0, n.jsx)(w, { ...e, channelId: t }), { position: "left", align: "bottom" });
        };
        return l > 0 && a > 0
            ? (0, n.jsxs)("div", {
                  className: j.jC,
                  children: [
                      (0, n.jsx)(i.K, { size: "lg", color: r.A.unsafe_rawColors.RED_400.css }),
                      (0, n.jsx)(s.E, {
                          variant: "text-xs/normal",
                          color: "text-default",
                          children: _.intl.string(_.t["P/KFXz"]),
                      }),
                      (0, n.jsx)(o.D, { className: j.R5, onClick: d, children: _.intl.string(_.t.rUEjBe) }),
                  ],
              })
            : a > 0
              ? (0, n.jsxs)("div", {
                    className: j.jC,
                    children: [
                        (0, n.jsx)(c.G, { size: "lg" }),
                        (0, n.jsx)(s.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: _.intl.format(_.t.Ri3o33, { number: a }),
                        }),
                        (0, n.jsx)(o.D, { className: j.R5, onClick: d, children: _.intl.string(_.t.rUEjBe) }),
                    ],
                })
              : (0, n.jsxs)("div", {
                    className: j.jC,
                    children: [
                        (0, n.jsx)(i.K, { size: "lg", color: r.A.unsafe_rawColors.RED_400.css }),
                        (0, n.jsx)(s.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: _.intl.format(_.t["6Tcdt7"], { number: l }),
                        }),
                        (0, n.jsx)(o.D, { className: j.R5, onClick: d, children: _.intl.string(_.t.rUEjBe) }),
                    ],
                });
    },
    y = (e) => {
        let { user: t, showStatus: l, speaker: r, channelId: i } = e,
            o = (0, a.bG)([p.Ay], () => p.Ay.isModerator(t.id, i)),
            c = (0, a.bG)([m.A], () => m.A.isBlocked(t.id)),
            h = null;
        return (
            l && (h = r ? _.intl.string(_.t.LqMmG2) : o ? _.intl.string(_.t.GMZqSi) : _.intl.string(_.t.suRApw)),
            (0, n.jsxs)("div", {
                className: j.kQ,
                children: [
                    (0, n.jsx)(
                        x.A,
                        {
                            src: t.getAvatarURL(null, 32),
                            size: u._3.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: r
                                ? () => (0, n.jsx)(d.c, { size: "md", color: "currentColor", className: j.Kk })
                                : null,
                        },
                        t.id,
                    ),
                    (0, n.jsxs)("div", {
                        className: j.eF,
                        children: [
                            (0, n.jsxs)("div", {
                                className: j.Xh,
                                children: [
                                    (0, n.jsx)(s.E, {
                                        variant: l ? "text-md/normal" : "text-sm/normal",
                                        children: f.Ay.getName(t),
                                    }),
                                    (0, n.jsx)(s.E, {
                                        variant: l ? "text-md/normal" : "text-sm/normal",
                                        color: "text-subtle",
                                        children: `#${t.discriminator}`,
                                    }),
                                ],
                            }),
                            (0, n.jsxs)("div", {
                                className: j.Xh,
                                children: [
                                    (0, n.jsx)(s.E, {
                                        variant: "text-xs/normal",
                                        color: c ? "text-feedback-critical" : "text-default",
                                        children: c ? _.intl.string(_.t["4bDptI"]) : _.intl.string(_.t.tFY5Zb),
                                    }),
                                    (0, n.jsxs)(s.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: ["| ", h],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    w = (e) => {
        let { channelId: t } = e,
            l = (0, v.mT)(t),
            a = (0, v.Iv)(t);
        return (0, n.jsx)(h.Ip, {
            className: j.kL,
            children: [...l, ...a].map((e) => {
                let { user: l } = e;
                return (0, n.jsx)(y, { user: l, channelId: t }, l.id);
            }),
        });
    };
