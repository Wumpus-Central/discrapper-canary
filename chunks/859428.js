n.d(t, { Z: () => b }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(749210),
    d = n(703656),
    f = n(430824),
    p = n(914010),
    _ = n(900849),
    m = n(981631),
    h = n(388032),
    g = n(510093),
    E = n(99940);
let b = () => {
    let e = (0, s.e7)([p.Z], () => p.Z.getGuildId(), []),
        t = (0, s.e7)([f.Z], () => f.Z.getGuild(e), [e]),
        [n, a] = i.useState(!1);
    if (null == t) return null;
    let b = () => {
            (0, d.s1)().goBack();
        },
        y = async () => {
            a(!0);
            try {
                _.mT(t.id), await u.Z.joinGuild(t.id, { source: m.vtS.NOTICE_BAR });
            } catch (e) {
                a(!1);
            }
        };
    return (0, r.jsxs)("div", {
        className: o()(g.notice, E.notice),
        children: [
            (0, r.jsxs)(l.zx, {
                look: l.zx.Looks.OUTLINED,
                color: l.zx.Colors.WHITE,
                size: l.zx.Sizes.NONE,
                className: o()(g.button, g.back),
                innerClassName: g.iconButton,
                onClick: b,
                children: [
                    (0, r.jsx)(c.whL, {
                        size: "xs",
                        color: "currentColor",
                        className: g.arrow,
                    }),
                    h.intl.string(h.t["13/7kX"]),
                ],
            }),
            (0, r.jsx)(c.Text, {
                className: g.header,
                variant: "text-sm/normal",
                children: h.intl.string(h.t["N/y2WE"]),
            }),
            (0, r.jsx)(l.zx, {
                className: g.button,
                look: l.zx.Looks.OUTLINED,
                color: l.zx.Colors.WHITE,
                size: l.zx.Sizes.NONE,
                submitting: n,
                onClick: y,
                children: h.intl.format(h.t.uHN7ny, { guild: t.name }),
            }),
        ],
    });
};
