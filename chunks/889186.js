t.d(n, { default: () => A });
var r = t(627968),
    i = t(64700),
    a = t(478437),
    l = t(158954),
    d = t(311907),
    c = t(397927),
    s = t(713654),
    o = t(687021),
    u = t(769765),
    f = t(711014),
    h = t(543465),
    m = t(422258),
    g = t(93055),
    v = t(231150),
    p = t(985018),
    x = t(233492);
function A(e) {
    let { transitionState: n, onClose: t, parentId: a } = e,
        s = (0, d.bG)([f.Ay], () => f.Ay.getFlattenedGuildIds()[0]),
        [u, h] = i.useState(s),
        [m, g] = i.useState(!1);
    return (0, r.jsx)(l.Modal, {
        title: p.intl.string(p.t["4wcdE/"]),
        actions: [],
        transitionState: n,
        onClose: t,
        input: (0, r.jsx)(o.v, {
            guildId: u,
            onChange: function (e) {
                null != e && h(e.id);
            },
        }),
        actionBarInput: (0, r.jsx)(c.dOG, { checked: m, onChange: (e) => g(e), label: p.intl.string(p.t.UwOLJO) }),
        children: (0, r.jsx)(_, { guildId: u, hideMutedChannels: m, parentId: a }),
    });
}
function _(e) {
    let { guildId: n, hideMutedChannels: t, parentId: l } = e,
        c = (0, d.bG)([u.A], () => u.A.getCategories(n)),
        s = (0, v.A)(c),
        o = i.useRef(null);
    return (
        i.useEffect(() => {
            o?.current?.scroll({ top: 0 });
        }, [n]),
        (0, r.jsx)("div", {
            ref: o,
            children: s.map((e) =>
                e.type === a.r.GUILD_CATEGORY
                    ? (0, r.jsx)(b, { name: e.name }, e.id)
                    : (0, r.jsx)(j, { channel: e, hideMutedChannels: t, parentId: l }, e.id),
            ),
        })
    );
}
function b(e) {
    let { name: n } = e;
    return (0, r.jsx)(c.Text, { className: x.Fv, variant: "eyebrow", color: "interactive-text-default", children: n });
}
function j(e) {
    let { channel: n, hideMutedChannels: t, parentId: i } = e,
        a = (0, g.Af)(n.id);
    if ((0, d.bG)([h.Ay], () => h.Ay.isChannelMuted(n.guild_id, n.id)) && t) return null;
    let l = (0, s.gU)(n);
    return (0, r.jsxs)(
        "div",
        {
            className: x.WG,
            children: [
                (0, r.jsxs)("div", {
                    className: x.HA,
                    children: [
                        null != l &&
                            (0, r.jsx)("div", {
                                className: x.uM,
                                children: (0, r.jsx)(l, {
                                    className: x.p,
                                    size: "custom",
                                    color: "currentColor",
                                    height: 20,
                                    width: 20,
                                }),
                            }),
                        (0, r.jsx)(c.Text, {
                            variant: "text-md/medium",
                            color: "interactive-text-default",
                            children: n.name,
                        }),
                    ],
                }),
                null != a ? (0, r.jsx)(k, { channelId: n.id }) : (0, r.jsx)(C, { channelId: n.id, parentId: i }),
            ],
        },
        n.id,
    );
}
function C(e) {
    let { channelId: n, parentId: t } = e;
    return (0, r.jsx)(c.Button, {
        variant: "primary",
        size: "sm",
        text: p.intl.string(p.t.OYkgVk),
        onClick: function () {
            (0, m.Jz)(n, t);
        },
    });
}
function k(e) {
    let { channelId: n } = e;
    return (0, r.jsx)(c.Button, {
        variant: "secondary",
        size: "sm",
        text: p.intl.string(p.t.N86XcP),
        onClick: function () {
            (0, m.i_)(n);
        },
    });
}
