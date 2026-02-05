n.d(t, { Bw: () => g, ld: () => j });
var l = n(627968);
n(64700);
var i = n(311907),
    s = n(827734),
    a = n(397927),
    r = n(442433),
    d = n(85448),
    c = n(994500),
    o = n(427262),
    u = n(312006),
    x = n(366098),
    h = n(985018),
    m = n(545058);
let g = (e) => {
        let { channelId: t } = e;
        return (0, l.jsx)(v, { channelId: t });
    },
    v = (e) => {
        let { channelId: t } = e,
            n = (0, x.D3)(t),
            i = (0, x.Xk)(t);
        if (0 === n && 0 === i) return null;
        let d = (e) => {
            (0, r.jA)(e, (e) => (0, l.jsx)(A, { ...e, channelId: t }), { position: "left", align: "bottom" });
        };
        return n > 0 && i > 0
            ? (0, l.jsxs)("div", {
                  className: m.jC,
                  children: [
                      (0, l.jsx)(a.KTN, { size: "lg", color: s.A.unsafe_rawColors.RED_400.css }),
                      (0, l.jsx)(a.Text, {
                          variant: "text-xs/normal",
                          color: "text-default",
                          children: h.intl.string(h.t["P/KFXz"]),
                      }),
                      (0, l.jsx)(a.DUT, { className: m.R5, onClick: d, children: h.intl.string(h.t.rUEjBe) }),
                  ],
              })
            : i > 0
              ? (0, l.jsxs)("div", {
                    className: m.jC,
                    children: [
                        (0, l.jsx)(a.G3N, { size: "lg" }),
                        (0, l.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: h.intl.format(h.t.Ri3o33, { number: i }),
                        }),
                        (0, l.jsx)(a.DUT, { className: m.R5, onClick: d, children: h.intl.string(h.t.rUEjBe) }),
                    ],
                })
              : (0, l.jsxs)("div", {
                    className: m.jC,
                    children: [
                        (0, l.jsx)(a.KTN, { size: "lg", color: s.A.unsafe_rawColors.RED_400.css }),
                        (0, l.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: h.intl.format(h.t["6Tcdt7"], { number: n }),
                        }),
                        (0, l.jsx)(a.DUT, { className: m.R5, onClick: d, children: h.intl.string(h.t.rUEjBe) }),
                    ],
                });
    },
    j = (e) => {
        let { user: t, showStatus: n, speaker: s, channelId: r } = e,
            x = (0, i.bG)([u.Ay], () => u.Ay.isModerator(t.id, r)),
            g = (0, i.bG)([c.A], () => c.A.isBlocked(t.id)),
            v = null;
        return (
            n && (v = s ? h.intl.string(h.t.LqMmG2) : x ? h.intl.string(h.t.GMZqSi) : h.intl.string(h.t.suRApw)),
            (0, l.jsxs)("div", {
                className: m.kQ,
                children: [
                    (0, l.jsx)(
                        d.A,
                        {
                            src: t.getAvatarURL(null, 32),
                            size: a._3J.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: s
                                ? () => (0, l.jsx)(a.cNw, { size: "md", color: "currentColor", className: m.Kk })
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
                                    (0, l.jsx)(a.Text, {
                                        variant: n ? "text-md/normal" : "text-sm/normal",
                                        children: o.Ay.getName(t),
                                    }),
                                    (0, l.jsx)(a.Text, {
                                        variant: n ? "text-md/normal" : "text-sm/normal",
                                        color: "text-subtle",
                                        children: `#${t.discriminator}`,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: m.Xh,
                                children: [
                                    (0, l.jsx)(a.Text, {
                                        variant: "text-xs/normal",
                                        color: g ? "text-feedback-critical" : "text-default",
                                        children: g ? h.intl.string(h.t["4bDptI"]) : h.intl.string(h.t.tFY5Zb),
                                    }),
                                    (0, l.jsxs)(a.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: ["| ", v],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    A = (e) => {
        let { channelId: t } = e,
            n = (0, x.mT)(t),
            i = (0, x.Iv)(t);
        return (0, l.jsx)(a.HOs, {
            className: m.kL,
            children: [...n, ...i].map((e) => {
                let { user: n } = e;
                return (0, l.jsx)(j, { user: n, channelId: t }, n.id);
            }),
        });
    };
