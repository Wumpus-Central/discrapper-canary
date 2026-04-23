l.d(t, { Bw: () => N, ld: () => C });
var n = l(627968);
l(64700);
var i = l(17928),
    s = l(661531),
    a = l(428678),
    r = l(834730),
    d = l(939249),
    o = l(952270),
    c = l(831544),
    u = l(778712),
    x = l(364522),
    h = l(442433),
    m = l(85448),
    g = l(994500),
    v = l(427262),
    j = l(312006),
    E = l(366098),
    A = l(985018),
    p = l(195695);
let N = (e) => {
        let { channelId: t } = e;
        return (0, n.jsx)(f, { channelId: t });
    },
    f = (e) => {
        let { channelId: t } = e,
            l = (0, E.D3)(t),
            i = (0, E.Xk)(t);
        if (0 === l && 0 === i) return null;
        let c = (e) => {
            (0, h.jA)(e, (e) => (0, n.jsx)(y, { ...e, channelId: t }), { position: "left", align: "bottom" });
        };
        return l > 0 && i > 0
            ? (0, n.jsxs)("div", {
                  className: p.jC,
                  children: [
                      (0, n.jsx)(a.K, { size: "lg", color: s.A.unsafe_rawColors.RED_400.css }),
                      (0, n.jsx)(r.E, {
                          variant: "text-xs/normal",
                          color: "text-default",
                          children: A.intl.string(A.t["P/KFXz"]),
                      }),
                      (0, n.jsx)(d.D, { className: p.R5, onClick: c, children: A.intl.string(A.t.rUEjBe) }),
                  ],
              })
            : i > 0
              ? (0, n.jsxs)("div", {
                    className: p.jC,
                    children: [
                        (0, n.jsx)(o.G, { size: "lg" }),
                        (0, n.jsx)(r.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: A.intl.format(A.t.Ri3o33, { number: i }),
                        }),
                        (0, n.jsx)(d.D, { className: p.R5, onClick: c, children: A.intl.string(A.t.rUEjBe) }),
                    ],
                })
              : (0, n.jsxs)("div", {
                    className: p.jC,
                    children: [
                        (0, n.jsx)(a.K, { size: "lg", color: s.A.unsafe_rawColors.RED_400.css }),
                        (0, n.jsx)(r.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: A.intl.format(A.t["6Tcdt7"], { number: l }),
                        }),
                        (0, n.jsx)(d.D, { className: p.R5, onClick: c, children: A.intl.string(A.t.rUEjBe) }),
                    ],
                });
    },
    C = (e) => {
        let { user: t, showStatus: l, speaker: s, channelId: a } = e,
            d = (0, i.bG)([j.Ay], () => j.Ay.isModerator(t.id, a)),
            o = (0, i.bG)([g.A], () => g.A.isBlocked(t.id)),
            x = null;
        return (
            l && (x = s ? A.intl.string(A.t.LqMmG2) : d ? A.intl.string(A.t.GMZqSi) : A.intl.string(A.t.suRApw)),
            (0, n.jsxs)("div", {
                className: p.kQ,
                children: [
                    (0, n.jsx)(
                        m.A,
                        {
                            src: t.getAvatarURL(null, 32),
                            size: u._3.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: s
                                ? () => (0, n.jsx)(c.c, { size: "md", color: "currentColor", className: p.Kk })
                                : null,
                        },
                        t.id,
                    ),
                    (0, n.jsxs)("div", {
                        className: p.eF,
                        children: [
                            (0, n.jsxs)("div", {
                                className: p.Xh,
                                children: [
                                    (0, n.jsx)(r.E, {
                                        variant: l ? "text-md/normal" : "text-sm/normal",
                                        children: v.Ay.getName(t),
                                    }),
                                    (0, n.jsx)(r.E, {
                                        variant: l ? "text-md/normal" : "text-sm/normal",
                                        color: "text-subtle",
                                        children: `#${t.discriminator}`,
                                    }),
                                ],
                            }),
                            (0, n.jsxs)("div", {
                                className: p.Xh,
                                children: [
                                    (0, n.jsx)(r.E, {
                                        variant: "text-xs/normal",
                                        color: o ? "text-feedback-critical" : "text-default",
                                        children: o ? A.intl.string(A.t["4bDptI"]) : A.intl.string(A.t.tFY5Zb),
                                    }),
                                    (0, n.jsxs)(r.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: ["| ", x],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    y = (e) => {
        let { channelId: t } = e,
            l = (0, E.mT)(t),
            i = (0, E.Iv)(t);
        return (0, n.jsx)(x.Ip, {
            className: p.kL,
            children: [...l, ...i].map((e) => {
                let { user: l } = e;
                return (0, n.jsx)(C, { user: l, channelId: t }, l.id);
            }),
        });
    };
