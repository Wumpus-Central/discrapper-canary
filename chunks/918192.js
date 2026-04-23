l.d(t, { Bw: () => f, ld: () => C });
var n = l(627968);
l(64700);
var i = l(311907),
    s = l(827734),
    a = l(428678),
    r = l(834730),
    d = l(939249),
    o = l(952270),
    c = l(831544),
    u = l(778712),
    x = l(573613),
    h = l(442433),
    m = l(85448),
    g = l(994500),
    v = l(427262),
    j = l(312006),
    A = l(366098),
    E = l(985018),
    p = l(195695);
let f = (e) => {
        let { channelId: t } = e;
        return (0, n.jsx)(N, { channelId: t });
    },
    N = (e) => {
        let { channelId: t } = e,
            l = (0, A.D3)(t),
            i = (0, A.Xk)(t);
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
                          children: E.intl.string(E.t["P/KFXz"]),
                      }),
                      (0, n.jsx)(d.D, { className: p.R5, onClick: c, children: E.intl.string(E.t.rUEjBe) }),
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
                            children: E.intl.format(E.t.Ri3o33, { number: i }),
                        }),
                        (0, n.jsx)(d.D, { className: p.R5, onClick: c, children: E.intl.string(E.t.rUEjBe) }),
                    ],
                })
              : (0, n.jsxs)("div", {
                    className: p.jC,
                    children: [
                        (0, n.jsx)(a.K, { size: "lg", color: s.A.unsafe_rawColors.RED_400.css }),
                        (0, n.jsx)(r.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: E.intl.format(E.t["6Tcdt7"], { number: l }),
                        }),
                        (0, n.jsx)(d.D, { className: p.R5, onClick: c, children: E.intl.string(E.t.rUEjBe) }),
                    ],
                });
    },
    C = (e) => {
        let { user: t, showStatus: l, speaker: s, channelId: a } = e,
            d = (0, i.bG)([j.Ay], () => j.Ay.isModerator(t.id, a)),
            o = (0, i.bG)([g.A], () => g.A.isBlocked(t.id)),
            x = null;
        return (
            l && (x = s ? E.intl.string(E.t.LqMmG2) : d ? E.intl.string(E.t.GMZqSi) : E.intl.string(E.t.suRApw)),
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
                                        children: o ? E.intl.string(E.t["4bDptI"]) : E.intl.string(E.t.tFY5Zb),
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
            l = (0, A.mT)(t),
            i = (0, A.Iv)(t);
        return (0, n.jsx)(x.Ip, {
            className: p.kL,
            children: [...l, ...i].map((e) => {
                let { user: l } = e;
                return (0, n.jsx)(C, { user: l, channelId: t }, l.id);
            }),
        });
    };
