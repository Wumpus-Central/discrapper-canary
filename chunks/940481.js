s.d(t, { default: () => C });
var n = s(627968),
    a = s(64700),
    r = s(512750),
    l = s(311907),
    i = s(397927),
    o = s(645619),
    c = s(503852),
    d = s(43594),
    u = s(363487),
    _ = s(722523),
    m = s(490557),
    x = s(214676),
    g = s(499623),
    b = s(428050),
    f = s(568065),
    h = s(136708),
    p = s(985018),
    j = s(400415);
function C(e) {
    let { guildId: t, powerup: s, ...C } = e,
        [k, v] = a.useState(void 0),
        N = a.useMemo(() => {
            switch (s.skuId) {
                case r.SL:
                    return (0, n.jsx)(x.L, { guildId: t });
                case r.aN:
                    return (0, n.jsx)(x.T, {});
                case r.FB:
                    return (0, n.jsx)(b.A, {});
                default:
                    return;
            }
        }, [s, t]);
    (0, c.Z)(t, s, c.q.DETAIL);
    let S = (0, u.A)(t),
        A = (0, d.D)("GuildPowerupPerkModal"),
        I = f.wr[s.skuId],
        E = null != I ? f.a8[I] : null,
        T = (0, l.bG)([o.A], () => o.A.getStateForGuild(t)),
        O = null != E ? T?.allPowerups[E] : null;
    return (0, n.jsxs)(i.EOs, {
        "data-migration-pending": !0,
        className: j.yl,
        size: i.rIJ.DYNAMIC,
        ...C,
        parentComponent: "GuildPowerupPerkModal",
        children: [
            (0, n.jsxs)(i.$mQ, {
                "data-migration-pending": !0,
                className: j._F,
                scrollbarType: "none",
                children: [
                    (0, n.jsxs)("div", {
                        className: j.pz,
                        children: [
                            (0, n.jsx)(i.hLv, { className: j.UZ, children: (0, n.jsx)(m.l, { powerup: s }) }),
                            (0, n.jsxs)("div", {
                                className: j.hQ,
                                children: [
                                    (0, n.jsx)(i.Heading, { variant: "heading-xl/extrabold", children: s.title }),
                                    (0, n.jsx)(i.Text, {
                                        className: j.h_,
                                        variant: "text-sm/normal",
                                        children: s.description,
                                    }),
                                    null != O &&
                                        (0, n.jsx)(i.Text, {
                                            className: j.h_,
                                            variant: "text-sm/normal",
                                            children: p.intl.formatToPlainString(h.default.NAFGkH, { level: O.title }),
                                        }),
                                    (0, n.jsx)(g.F, { powerup: s }),
                                    null != k &&
                                        (0, n.jsx)(i.Text, {
                                            className: j.z3,
                                            color: "text-feedback-critical",
                                            variant: "text-sm/semibold",
                                            children: k,
                                        }),
                                    S &&
                                        (0, n.jsx)(_.Ay, {
                                            className: j.qr,
                                            guildId: t,
                                            powerup: s,
                                            expressiveCta: "refresh_expressive_cta" === A,
                                            onError: v,
                                        }),
                                ],
                            }),
                        ],
                    }),
                    null != N && (0, n.jsx)("div", { className: j._9, children: N }),
                ],
            }),
            (0, n.jsx)(i.s_y, { "data-migration-pending": !0, className: j.VN, onClick: C.onClose }),
        ],
    });
}
