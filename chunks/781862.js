"use strict";
n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    r = n(652793),
    a = n(855725),
    o = n(976860),
    c = n(309010),
    d = n(64071),
    u = n(652215),
    h = n(985018);
let A = [
        {
            key: "JOIN_SERVERS",
            renderIcon: (e) => (0, i.jsx)(l.QGJ, { size: "md", color: "currentColor", className: e }),
            getName: () => h.intl.string(h.t.K50GHd),
            handler: (e, t) => (0, o.uh)(e.id, t.id),
        },
        {
            key: "ADD_SERVERS",
            renderIcon: (e) => (0, i.jsx)(l.j96, { size: "md", color: "currentColor", className: e }),
            getName: () => h.intl.string(h.t.emRpdS),
            handler: (e, t) =>
                (0, l.mMO)(async () => {
                    let { default: s } = await n.e("6759").then(n.bind(n, 953722));
                    return (n) =>
                        (0, i.jsx)(s, {
                            ...n,
                            directoryGuildName: e.name,
                            directoryGuildId: e.id,
                            directoryChannelId: t.id,
                        });
                }),
        },
        {
            key: "INVITE_MEMBERS",
            renderIcon: (e) => (0, i.jsx)(l.DpX, { className: e }),
            getName: () => h.intl.string(h.t.MJQOuJ),
            handler: (e, t) =>
                (0, l.mMO)(async () => {
                    let { default: s } = await Promise.all([n.e("43600"), n.e("52537")]).then(n.bind(n, 234355));
                    return (n) => (0, i.jsx)(s, { ...n, guild: e, channel: t, source: u.PE1.HUB_SIDEBAR });
                }),
        },
    ],
    p = (e) => {
        let { guild: t, channel: n } = e,
            l = (0, s.bG)([c.A], () => null != n && c.A.getChannelId() === n.id),
            o = (0, d.x)(n);
        return (0, i.jsx)(i.Fragment, {
            children: A.map((e) => {
                let { key: s, getName: c, handler: d, renderIcon: u } = e,
                    h = l && "JOIN_SERVERS" === s,
                    A = `${s}-${t.id}`;
                return (0, i.jsx)(
                    r.G,
                    {
                        id: A,
                        renderIcon: u,
                        text: c(),
                        selected: h,
                        onClick: null != n ? () => d(t, n) : void 0,
                        trailing: "JOIN_SERVERS" === s && o > 0 ? (0, a.w)(o) : null,
                    },
                    A,
                );
            }),
        });
    };
