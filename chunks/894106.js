n.d(s, { default: () => p });
var i = n(627968),
    a = n(64700),
    t = n(503698),
    l = n.n(t),
    r = n(311907),
    d = n(397927),
    c = n(901057),
    o = n(734057),
    x = n(71393),
    m = n(161256),
    _ = n(659416),
    u = n(276976),
    h = n(45480),
    j = n(196959),
    v = n(926966),
    N = n(985018),
    f = n(436560);
function p(e) {
    var s;
    let { transitionState: n, onClose: t, offer: p, sender: g } = e,
        T = a.useId(),
        b = g?.globalName ?? g?.username ?? N.intl.string(v.default["7B17YX"]),
        I = (0, u.k1)(p.kind),
        k = (0, r.bG)([o.A], () => o.A.getChannel(p.channelId), [p.channelId]),
        C = (0, r.bG)([x.A], () => (null != p.guildId ? x.A.getGuild(p.guildId) : null), [p.guildId]);
    return (0, i.jsxs)(d.EOs, {
        transitionState: n,
        "aria-labelledby": T,
        parentComponent: "DareDetailsModal",
        children: [
            (0, i.jsxs)(d.rQ0, {
                separator: !1,
                children: [
                    (0, i.jsx)(d.Heading, {
                        id: T,
                        variant: "heading-lg/semibold",
                        children: N.intl.string(v.default.BZ7xL3),
                    }),
                    (0, i.jsx)(d.s_y, { onClick: t }),
                ],
            }),
            (0, i.jsx)(d.$mQ, {
                children: (0, i.jsxs)("div", {
                    className: f.jE,
                    children: [
                        (0, i.jsxs)("div", {
                            className: f.Vh,
                            children: [
                                null != g &&
                                    (0, i.jsx)(d.euF, {
                                        src: g.getAvatarURL(p.guildId, 80),
                                        size: d._3J.SIZE_40,
                                        "aria-hidden": !0,
                                    }),
                                (0, i.jsxs)("div", {
                                    className: f.IX,
                                    children: [
                                        (0, i.jsx)(d.Text, {
                                            variant: "text-xs/medium",
                                            className: f.wG,
                                            children: N.intl.string(v.default.FxytnH),
                                        }),
                                        (0, i.jsx)(d.Text, {
                                            variant: "text-md/semibold",
                                            className: f.rs,
                                            children: b,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: f.jv,
                            children: [
                                (0, i.jsx)("div", {
                                    className: f.Kt,
                                    children: (0, i.jsxs)("div", {
                                        className: f.iR,
                                        children: [
                                            (0, i.jsxs)("div", {
                                                className: f.LX,
                                                children: [
                                                    (0, i.jsx)("div", {
                                                        className: f.Qs,
                                                        children:
                                                            ((s = p.kind),
                                                            (0, h.au)(s, { size: "sm", color: "currentColor" })),
                                                    }),
                                                    (0, i.jsxs)("div", {
                                                        className: f.PQ,
                                                        children: [
                                                            (0, i.jsx)(d.Text, {
                                                                variant: "text-md/semibold",
                                                                className: f.tf,
                                                                children: N.intl.string((0, j.Tw)(p.kind)),
                                                            }),
                                                            (0, i.jsx)(d.Text, {
                                                                variant: "text-sm/normal",
                                                                className: f.ne,
                                                                children: I.explanationText,
                                                            }),
                                                            p.kind === _.H9.VOCAL &&
                                                                null != k &&
                                                                (0, i.jsxs)(d.Text, {
                                                                    variant: "text-sm/normal",
                                                                    className: f.Ug,
                                                                    children: [
                                                                        N.intl.string(v.default["G/h7Uf"]),
                                                                        " ",
                                                                        (0, i.jsx)(c.A, {
                                                                            channel: k,
                                                                            beforeTransition: t,
                                                                        }),
                                                                        null != C &&
                                                                            (0, i.jsxs)("span", {
                                                                                className: f.J5,
                                                                                children: [" (", C.name, ")"],
                                                                            }),
                                                                    ],
                                                                }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            "" !== p.prompt &&
                                                (0, i.jsx)("div", {
                                                    className: f.nx,
                                                    children: (0, i.jsx)(d.Text, {
                                                        variant: "text-md/normal",
                                                        className: f.Mv,
                                                        children: N.intl.formatToPlainString(v.default.vuB2ju, {
                                                            prompt: p.prompt,
                                                        }),
                                                    }),
                                                }),
                                        ],
                                    }),
                                }),
                                (0, i.jsxs)("div", {
                                    className: f.l8,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: f.TE,
                                            children: [
                                                (0, i.jsx)(d.Text, {
                                                    variant: "text-xs/medium",
                                                    className: f.M,
                                                    children: N.intl.string(v.default["072b8h"]),
                                                }),
                                                (0, i.jsxs)(d.Text, {
                                                    variant: "text-md/semibold",
                                                    className: f.zL,
                                                    children: [
                                                        (0, i.jsx)(d.O4, { size: "xs", color: "currentColor" }),
                                                        (0, j.E1)(p.durationSec),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: f.TE,
                                            children: [
                                                (0, i.jsx)(d.Text, {
                                                    variant: "text-xs/medium",
                                                    className: f.M,
                                                    children: N.intl.string(v.default.wV1TJy),
                                                }),
                                                (0, i.jsx)(d.Text, {
                                                    variant: "text-md/semibold",
                                                    className: f.zL,
                                                    children: (function (e) {
                                                        if (e >= 24 && e % 24 == 0) {
                                                            let s = e / 24;
                                                            return 1 === s
                                                                ? N.intl.formatToPlainString(v.default["6fhtb9"], {
                                                                      count: 1,
                                                                  })
                                                                : N.intl.formatToPlainString(v.default["TEAG+R"], {
                                                                      count: s,
                                                                  });
                                                        }
                                                        return 1 === e
                                                            ? N.intl.formatToPlainString(v.default.Jp2EGO, { count: 1 })
                                                            : N.intl.formatToPlainString(v.default.lnUmY4, {
                                                                  count: e,
                                                              });
                                                    })(p.failAfterHours),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)("div", {
                                    className: f.qq,
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: f.LT,
                                            children: (0, i.jsxs)("div", {
                                                className: f.zL,
                                                children: [
                                                    (0, i.jsx)(d.Text, {
                                                        variant: "text-md/semibold",
                                                        children: N.intl.string((0, j.Uf)(p.spiciness)),
                                                    }),
                                                    (0, i.jsx)("div", {
                                                        className: l()(f.T2, {
                                                            [f.n9]: p.spiciness === _.sb.MILD,
                                                            [f.xh]: p.spiciness === _.sb.SPICY,
                                                            [f.VS]: p.spiciness === _.sb.UNHINGED,
                                                        }),
                                                        children: (0, i.jsx)(d.Y3C, {
                                                            size: "sm",
                                                            color: "currentColor",
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        }),
                                        (0, i.jsx)("div", {
                                            className: f.fg,
                                            children: (0, i.jsx)(d.Text, {
                                                variant: "text-sm/normal",
                                                className: f.lu,
                                                children: N.intl.string((0, j.w6)(p.spiciness)),
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(d.jlY, {
                children: (0, i.jsxs)("div", {
                    className: f.qr,
                    children: [
                        (0, i.jsx)(d.Button, {
                            variant: "secondary",
                            text: N.intl.string(v.default["Jb0/4V"]),
                            onClick: () => {
                                (0, m.H2)(p), t();
                            },
                        }),
                        (0, i.jsx)(d.Button, {
                            variant: "primary",
                            text: N.intl.string(v.default["3tLPn3"]),
                            onClick: () => {
                                (0, m.NL)(p), t();
                            },
                        }),
                    ],
                }),
            }),
        ],
    });
}
