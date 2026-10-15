e.d(t, { A: () => p });
var i = e(477900);
e(582128);
var n = e(17928),
    l = e(189213),
    a = e(939249),
    c = e(834730),
    r = e(866665),
    o = e(885574),
    d = e(364522),
    u = e(498642),
    m = e(548118),
    x = e(660183),
    h = e(599127);
function j(s) {
    let { guild: t, onClick: e } = s,
        l = (0, n.bG)([u.A], () => u.A.getMemberCount(t.id));
    return (0, i.jsxs)(a.D, {
        className: h._S,
        onClick: e,
        children: [
            (0, i.jsx)(m.Ay, { className: h.$f, guild: t, size: m.Ay.Sizes.MEDIUM, active: !0 }),
            (0, i.jsxs)("div", {
                className: h.OA,
                children: [
                    (0, i.jsx)(c.E, {
                        className: h.J5,
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: t.name,
                    }),
                    null != l &&
                        (0, i.jsx)(c.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: x.intl.formatToPlainString(x.t.zRl6XR, { count: l }),
                        }),
                ],
            }),
        ],
    });
}
function p(s) {
    let {
        title: t,
        subtitle: e,
        listLabel: n,
        listLabelTooltip: a,
        guilds: u,
        onSelectGuild: m,
        onClose: x,
        transitionState: p,
        returnRef: b,
    } = s;
    async function v() {
        await x();
    }
    return (0, i.jsxs)(l.a, {
        transitionState: p,
        onClose: v,
        title: t,
        subtitle: e,
        actions: [],
        returnRef: b,
        children: [
            null != n &&
                (0, i.jsxs)("div", {
                    className: h.RO,
                    children: [
                        (0, i.jsx)(c.E, { variant: "text-sm/semibold", children: n }),
                        null != a &&
                            (0, i.jsx)(r.m, {
                                position: "top",
                                text: a,
                                children: (0, i.jsx)(o.CircleInformationIcon, { size: "xs", className: h.G }),
                            }),
                    ],
                }),
            (0, i.jsx)(d.Ip, {
                className: h.OW,
                children: u.map((s) => (0, i.jsx)(j, { guild: s, onClick: () => m(s) }, s.id)),
            }),
        ],
    });
}
