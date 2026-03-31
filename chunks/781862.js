n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    a = n(652793),
    r = n(855725),
    o = n(976860),
    c = n(309010),
    d = n(64071),
    u = n(652215),
    h = n(985018);
let A = [
        {
            key: "JOIN_SERVERS",
            renderIcon: (e) => (0, i.jsx)(s.QGJ, { size: "md", color: "currentColor", className: e }),
            getName: () => h.intl.string(h.t.K50GHd),
            handler: (e, t) => (0, o.uh)(e.id, t.id),
        },
        {
            key: "ADD_SERVERS",
            renderIcon: (e) => (0, i.jsx)(s.j96, { size: "md", color: "currentColor", className: e }),
            getName: () => h.intl.string(h.t.emRpdS),
            handler: (e, t) =>
                (0, s.mMO)(async () => {
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
            renderIcon: (e) => (0, i.jsx)(s.DpX, { className: e }),
            getName: () => h.intl.string(h.t.MJQOuJ),
            handler: (e, t) =>
                (0, s.mMO)(async () => {
                    let { default: l } = await Promise.all([n.e("43600"), n.e("67505")]).then(n.bind(n, 234355));
                    return (n) => (0, i.jsx)(l, { ...n, guild: e, channel: t, source: u.PE1.HUB_SIDEBAR });
                }),
        },
    ],
    _ = (e) => {
        let { guild: t, channel: n } = e,
            s = (0, l.bG)([c.A], () => null != n && c.A.getChannelId() === n.id),
            o = (0, d.x)(n);
        return (0, i.jsx)(i.Fragment, {
            children: A.map((e) => {
                let { key: l, getName: c, handler: d, renderIcon: u } = e,
                    h = s && "JOIN_SERVERS" === l,
                    A = `${l}-${t.id}`;
                return (0, i.jsx)(
                    a.G,
                    {
                        id: A,
                        renderIcon: u,
                        text: c(),
                        selected: h,
                        onClick: null != n ? () => d(t, n) : void 0,
                        trailing: "JOIN_SERVERS" === l && o > 0 ? (0, r.w)(o) : null,
                    },
                    A,
                );
            }),
        });
    };
