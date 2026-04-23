s.d(a, { default: () => A });
var r = s(627968),
    n = s(64700),
    l = s(512750),
    t = s(311907),
    o = s(935462),
    i = s(315629),
    d = s(534514),
    c = s(834730),
    _ = s(885574),
    u = s(827734),
    m = s(645619),
    p = s(503852),
    g = s(43594),
    x = s(363487),
    h = s(490557),
    f = s(214676),
    b = s(499623),
    v = s(448836),
    C = s(428050),
    k = s(568065),
    j = s(853513),
    N = s(985018),
    w = s(973606);
function A(e) {
    let { guildId: a, powerup: s, ...A } = e,
        [y, I] = n.useState(void 0),
        E = n.useMemo(() => {
            switch (s.skuId) {
                case l.SL:
                    return (0, r.jsx)(f.L, { guildId: a });
                case l.aN:
                    return (0, r.jsx)(f.T, {});
                case l.FB:
                    return (0, r.jsx)(C.A, {});
                default:
                    return;
            }
        }, [s, a]);
    (0, p.Z)(a, s, p.q.DETAIL);
    let S = (0, x.A)(a),
        D = (0, g.D)("GuildPowerupPerkModal"),
        P = k.wr[s.skuId],
        L = null != P ? k.a8[P] : null,
        T = (0, t.bG)([m.A], () => m.A.getStateForGuild(a)),
        B = null != L ? T?.allPowerups[L] : null;
    return (0, r.jsxs)(o.EO, {
        "data-migration-pending": !0,
        className: w.yl,
        size: o.rI.DYNAMIC,
        ...A,
        parentComponent: "GuildPowerupPerkModal",
        children: [
            (0, r.jsxs)(o.$m, {
                "data-migration-pending": !0,
                className: w._F,
                scrollbarType: "none",
                children: [
                    (0, r.jsxs)("div", {
                        className: w.pz,
                        children: [
                            (0, r.jsx)(i.h, {
                                className: w.Rp,
                                children: (0, r.jsx)(h.l, { className: w.UZ, powerup: s }),
                            }),
                            (0, r.jsxs)("div", {
                                className: w.hQ,
                                children: [
                                    (0, r.jsx)(d.D, { variant: "heading-xl/extrabold", children: s.title }),
                                    (0, r.jsx)(c.E, {
                                        className: w.h_,
                                        variant: "text-sm/normal",
                                        children: s.description,
                                    }),
                                    null != s.deactivationCooldownPeriodDays &&
                                        s.deactivationCooldownPeriodDays > 0 &&
                                        (0, r.jsxs)("div", {
                                            className: w.sh,
                                            children: [
                                                (0, r.jsx)(_.m, { size: "xs", color: u.A.colors.TEXT_MUTED }),
                                                (0, r.jsx)(c.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: N.intl.formatToPlainString(j.default.GMhQcE, {
                                                        cooldownDays: s.deactivationCooldownPeriodDays,
                                                    }),
                                                }),
                                            ],
                                        }),
                                    null != B &&
                                        (0, r.jsx)(c.E, {
                                            className: w.h_,
                                            variant: "text-sm/normal",
                                            children: N.intl.formatToPlainString(j.default.NAFGkH, { level: B.title }),
                                        }),
                                    (0, r.jsx)(b.F, { powerup: s }),
                                    null != y &&
                                        (0, r.jsx)(c.E, {
                                            className: w.z3,
                                            color: "text-feedback-critical",
                                            variant: "text-sm/semibold",
                                            children: y,
                                        }),
                                    S &&
                                        (0, r.jsx)(v.A, {
                                            className: w.qr,
                                            guildId: a,
                                            powerup: s,
                                            expressiveCta: "refresh_expressive_cta" === D,
                                            onError: I,
                                        }),
                                ],
                            }),
                        ],
                    }),
                    null != E && (0, r.jsx)("div", { className: w._9, children: E }),
                ],
            }),
            (0, r.jsx)(o.s_, { "data-migration-pending": !0, className: w.VN, onClick: A.onClose }),
        ],
    });
}
