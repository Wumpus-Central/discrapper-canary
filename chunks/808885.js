e.d(i, { A: () => b });
var n = e(477900);
e(582128);
var t = e(17928),
    l = e(189213),
    a = e(939249),
    c = e(834730),
    r = e(866665),
    o = e(885574),
    d = e(364522),
    u = e(498642),
    m = e(548118),
    x = e(105292),
    h = e(599127);
function j(s) {
    let { guild: i, onClick: e } = s,
        l = (0, t.bG)([u.A], () => u.A.getMemberCount(i.id));
    return (0, n.jsxs)(a.D, {
        className: h._S,
        onClick: e,
        children: [
            (0, n.jsx)(m.Ay, { className: h.$f, guild: i, size: m.Ay.Sizes.MEDIUM, active: !0 }),
            (0, n.jsxs)("div", {
                className: h.OA,
                children: [
                    (0, n.jsx)(c.E, {
                        className: h.J5,
                        variant: "body-md/medium",
                        color: "text-subtle",
                        children: i.name,
                    }),
                    null != l &&
                        (0, n.jsx)(c.E, {
                            variant: "body-sm/normal",
                            color: "text-subtle",
                            children: x.intl.formatToPlainString(x.t.zRl6XR, { count: l }),
                        }),
                ],
            }),
        ],
    });
}
function b(s) {
    let {
        title: i,
        subtitle: e,
        listLabel: t,
        listLabelTooltip: a,
        guilds: u,
        onSelectGuild: m,
        onClose: x,
        transitionState: b,
        returnRef: p,
    } = s;
    async function v() {
        await x();
    }
    return (0, n.jsxs)(l.a, {
        transitionState: b,
        onClose: v,
        title: i,
        subtitle: e,
        actions: [],
        returnRef: p,
        children: [
            null != t &&
                (0, n.jsxs)("div", {
                    className: h.RO,
                    children: [
                        (0, n.jsx)(c.E, { variant: "body-sm/semibold", children: t }),
                        null != a &&
                            (0, n.jsx)(r.m, {
                                position: "top",
                                text: a,
                                children: (0, n.jsx)(o.CircleInformationIcon, { size: "xs", className: h.G }),
                            }),
                    ],
                }),
            (0, n.jsx)(d.Ip, {
                className: h.OW,
                children: u.map((s) => (0, n.jsx)(j, { guild: s, onClick: () => m(s) }, s.id)),
            }),
        ],
    });
}
