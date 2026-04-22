n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(836480),
    a = n(307301),
    r = n(192308),
    o = n(241541),
    d = n(652793),
    c = n(855725),
    u = n(976860),
    h = n(309010),
    A = n(64071),
    _ = n(652215),
    m = n(985018);
let g = [
        {
            key: "JOIN_SERVERS",
            renderIcon: (e) => (0, i.jsx)(s.Q, { size: "md", color: "currentColor", className: e }),
            getName: () => m.intl.string(m.t.K50GHd),
            handler: (e, t) => (0, u.uh)(e.id, t.id),
        },
        {
            key: "ADD_SERVERS",
            renderIcon: (e) => (0, i.jsx)(a.j, { size: "md", color: "currentColor", className: e }),
            getName: () => m.intl.string(m.t.emRpdS),
            handler: (e, t) =>
                (0, r.openModalLazy)(async () => {
                    let { default: l } = await n.e("6759").then(n.bind(n, 953722));
                    return (n) =>
                        (0, i.jsx)(l, {
                            ...n,
                            directoryGuildName: e.name,
                            directoryGuildId: e.id,
                            directoryChannelId: t.id,
                        });
                }),
        },
        {
            key: "INVITE_MEMBERS",
            renderIcon: (e) => (0, i.jsx)(o.D, { className: e }),
            getName: () => m.intl.string(m.t.MJQOuJ),
            handler: (e, t) =>
                (0, r.openModalLazy)(async () => {
                    let { default: l } = await Promise.all([n.e("28136"), n.e("43600"), n.e("42738")]).then(
                        n.bind(n, 234355),
                    );
                    return (n) => (0, i.jsx)(l, { ...n, guild: e, channel: t, source: _.PE1.HUB_SIDEBAR });
                }),
        },
    ],
    p = (e) => {
        let { guild: t, channel: n } = e,
            s = (0, l.bG)([h.A], () => null != n && h.A.getChannelId() === n.id),
            a = (0, A.x)(n);
        return (0, i.jsx)(i.Fragment, {
            children: g.map((e) => {
                let { key: l, getName: r, handler: o, renderIcon: u } = e,
                    h = s && "JOIN_SERVERS" === l,
                    A = `${l}-${t.id}`;
                return (0, i.jsx)(
                    d.G,
                    {
                        id: A,
                        renderIcon: u,
                        text: r(),
                        selected: h,
                        onClick: null != n ? () => o(t, n) : void 0,
                        trailing: "JOIN_SERVERS" === l && a > 0 ? (0, c.w)(a) : null,
                    },
                    A,
                );
            }),
        });
    };
