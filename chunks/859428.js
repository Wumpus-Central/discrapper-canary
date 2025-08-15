n.d(t, { Z: () => f }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    c = n(755721),
    s = n(481060),
    u = n(749210),
    d = n(703656),
    _ = n(430824),
    E = n(914010),
    I = n(900849),
    T = n(981631),
    O = n(388032),
    p = n(990186),
    N = n(226910);
let f = () => {
    let e = (0, o.e7)([E.Z], () => E.Z.getGuildId(), []),
        t = (0, o.e7)([_.Z], () => _.Z.getGuild(e), [e]),
        [n, l] = i.useState(!1);
    if (null == t) return null;
    let f = async () => {
        l(!0);
        try {
            I.mT(t.id), await u.Z.joinGuild(t.id, { source: T.vtS.NOTICE_BAR });
        } catch (e) {
            l(!1);
        }
    };
    return (0, r.jsxs)("div", {
        className: a()(p.notice, N.notice),
        children: [
            (0, r.jsxs)(c.zx, {
                look: c.zx.Looks.OUTLINED,
                color: c.zx.Colors.WHITE,
                size: c.zx.Sizes.NONE,
                className: a()(p.button, p.back),
                innerClassName: p.iconButton,
                onClick: () => {
                    (0, d.s1)().goBack();
                },
                children: [
                    (0, r.jsx)(s.whL, {
                        size: "xs",
                        color: "currentColor",
                        className: p.arrow,
                    }),
                    O.intl.string(O.t["13/7kZ"]),
                ],
            }),
            (0, r.jsx)(s.Text, {
                className: p.header,
                variant: "text-sm/normal",
                children: O.intl.string(O.t["N/y2WF"]),
            }),
            (0, r.jsx)(c.zx, {
                className: p.button,
                look: c.zx.Looks.OUTLINED,
                color: c.zx.Colors.WHITE,
                size: c.zx.Sizes.NONE,
                submitting: n,
                onClick: f,
                children: O.intl.format(O.t.uHN7n5, { guild: t.name }),
            }),
        ],
    });
};
