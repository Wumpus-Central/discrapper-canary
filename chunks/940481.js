s.d(t, { default: () => j });
var n = s(627968),
    a = s(64700),
    r = s(512750),
    l = s(311907),
    i = s(397927),
    o = s(645619),
    d = s(503852),
    c = s(363487),
    u = s(722523),
    m = s(490557),
    _ = s(214676),
    x = s(499623),
    g = s(428050),
    b = s(568065),
    h = s(333354),
    f = s(985018),
    p = s(712957);
function j(e) {
    let { guildId: t, powerup: s, ...j } = e,
        [k, C] = a.useState(void 0),
        v = a.useMemo(() => {
            switch (s.skuId) {
                case r.SL:
                    return (0, n.jsx)(_.L, { guildId: t });
                case r.aN:
                    return (0, n.jsx)(_.T, {});
                case r.FB:
                    return (0, n.jsx)(g.A, {});
                default:
                    return;
            }
        }, [s, t]);
    (0, d.Z)(t, s, d.q.DETAIL);
    let N = (0, c.A)(t),
        S = b.wr[s.skuId],
        A = null != S ? b.a8[S] : null,
        I = (0, l.bG)([o.A], () => o.A.getStateForGuild(t)),
        w = null != A ? I?.allPowerups[A] : null;
    return (0, n.jsxs)(i.EOs, {
        "data-migration-pending": !0,
        className: p.yl,
        size: i.rIJ.DYNAMIC,
        ...j,
        parentComponent: "GuildPowerupPerkModal",
        children: [
            (0, n.jsxs)(i.$mQ, {
                "data-migration-pending": !0,
                className: p._F,
                scrollbarType: "none",
                children: [
                    (0, n.jsxs)("div", {
                        className: p.pz,
                        children: [
                            (0, n.jsx)(i.hLv, { className: p.UZ, children: (0, n.jsx)(m.l, { powerup: s }) }),
                            (0, n.jsxs)("div", {
                                className: p.hQ,
                                children: [
                                    (0, n.jsx)(i.Heading, { variant: "heading-xl/extrabold", children: s.title }),
                                    (0, n.jsx)(i.Text, {
                                        className: p.h_,
                                        variant: "text-sm/normal",
                                        children: s.description,
                                    }),
                                    null != w &&
                                        (0, n.jsx)(i.Text, {
                                            className: p.h_,
                                            variant: "text-sm/normal",
                                            children: f.intl.formatToPlainString(h.default.NAFGkH, { level: w.title }),
                                        }),
                                    (0, n.jsx)(x.F, { powerup: s }),
                                    null != k &&
                                        (0, n.jsx)(i.Text, {
                                            className: p.z3,
                                            color: "text-feedback-critical",
                                            variant: "text-sm/semibold",
                                            children: k,
                                        }),
                                    N && (0, n.jsx)(u.Ay, { className: p.qr, guildId: t, powerup: s, onError: C }),
                                ],
                            }),
                        ],
                    }),
                    null != v && (0, n.jsx)("div", { className: p._9, children: v }),
                ],
            }),
            (0, n.jsx)(i.s_y, { "data-migration-pending": !0, className: p.VN, onClick: j.onClose }),
        ],
    });
}
