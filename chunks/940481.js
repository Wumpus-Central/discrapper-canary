s.d(t, { default: () => k });
var n = s(627968),
    a = s(64700),
    r = s(512750),
    l = s(311907),
    i = s(397927),
    o = s(645619),
    d = s(503852),
    c = s(43594),
    u = s(363487),
    m = s(490557),
    _ = s(214676),
    x = s(499623),
    g = s(448836),
    b = s(428050),
    f = s(568065),
    h = s(333354),
    p = s(985018),
    j = s(614070);
function k(e) {
    let { guildId: t, powerup: s, ...k } = e,
        [C, v] = a.useState(void 0),
        N = a.useMemo(() => {
            switch (s.skuId) {
                case r.SL:
                    return (0, n.jsx)(_.L, { guildId: t });
                case r.aN:
                    return (0, n.jsx)(_.T, {});
                case r.FB:
                    return (0, n.jsx)(b.A, {});
                default:
                    return;
            }
        }, [s, t]);
    (0, d.Z)(t, s, d.q.DETAIL);
    let S = (0, u.A)(t),
        A = (0, c.D)("GuildPowerupPerkModal"),
        I = f.wr[s.skuId],
        T = null != I ? f.a8[I] : null,
        w = (0, l.bG)([o.A], () => o.A.getStateForGuild(t)),
        E = null != T ? w?.allPowerups[T] : null;
    return (0, n.jsxs)(i.EOs, {
        "data-migration-pending": !0,
        className: j.yl,
        size: i.rIJ.DYNAMIC,
        ...k,
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
                            (0, n.jsx)(i.hLv, {
                                className: j.Rp,
                                children: (0, n.jsx)(m.l, { className: j.UZ, powerup: s }),
                            }),
                            (0, n.jsxs)("div", {
                                className: j.hQ,
                                children: [
                                    (0, n.jsx)(i.Heading, { variant: "heading-xl/extrabold", children: s.title }),
                                    (0, n.jsx)(i.Text, {
                                        className: j.h_,
                                        variant: "text-sm/normal",
                                        children: s.description,
                                    }),
                                    null != s.deactivationCooldownPeriodDays &&
                                        s.deactivationCooldownPeriodDays > 0 &&
                                        (0, n.jsxs)("div", {
                                            className: j.sh,
                                            children: [
                                                (0, n.jsx)(i.mir, { size: "xs", color: i.LU0.colors.TEXT_MUTED }),
                                                (0, n.jsx)(i.Text, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: p.intl.formatToPlainString(h.default.GMhQcE, {
                                                        cooldownDays: s.deactivationCooldownPeriodDays,
                                                    }),
                                                }),
                                            ],
                                        }),
                                    null != E &&
                                        (0, n.jsx)(i.Text, {
                                            className: j.h_,
                                            variant: "text-sm/normal",
                                            children: p.intl.formatToPlainString(h.default.NAFGkH, { level: E.title }),
                                        }),
                                    (0, n.jsx)(x.F, { powerup: s }),
                                    null != C &&
                                        (0, n.jsx)(i.Text, {
                                            className: j.z3,
                                            color: "text-feedback-critical",
                                            variant: "text-sm/semibold",
                                            children: C,
                                        }),
                                    S &&
                                        (0, n.jsx)(g.A, {
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
            (0, n.jsx)(i.s_y, { "data-migration-pending": !0, className: j.VN, onClick: k.onClose }),
        ],
    });
}
