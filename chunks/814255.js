n.d(t, { A: () => E });
var i = n(477900);
n(582128);
var l = n(855986),
    s = n(836480),
    r = n(307301),
    a = n(192308),
    o = n(241541),
    d = n(652793),
    c = n(771640),
    u = n(976860),
    h = n(309010),
    m = n(519480);
n(370876);
var g = n(218461),
    A = n(811091),
    f = n(652215),
    p = n(792996);
let C = [
        {
            key: "JOIN_SERVERS",
            renderIcon: (e) => (0, i.jsx)(s.CompassIcon, { size: "md", color: "currentColor", className: e }),
            getName: () => p.intl.string(p.t.K50GHd),
            handler: (e, t) => (0, u.uh)(e.id, t.id),
        },
        {
            key: "ADD_SERVERS",
            renderIcon: (e) => (0, i.jsx)(r.j, { size: "md", color: "currentColor", className: e }),
            getName: () => p.intl.string(p.t.emRpdS),
            handler: (e, t) =>
                (0, a.mM)(async () => {
                    let { default: l } = await Promise.all([
                        n.e(122326),
                        n.e(533651),
                        n.e(315907),
                        n.e(993103),
                        n.e(474610),
                        n.e(419580),
                        n.e(197804),
                        n.e(756856),
                        n.e(980782),
                        n.e(118822),
                    ]).then(n.bind(n, 668822));
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
            getName: () => p.intl.string(p.t.MJQOuJ),
            handler: (e, t) =>
                (0, a.mM)(async () => {
                    let { default: l } = await Promise.all([
                        n.e(683621),
                        n.e(711162),
                        n.e(159957),
                        n.e(728136),
                        n.e(680029),
                        n.e(966623),
                    ]).then(n.bind(n, 660194));
                    return (n) => (0, i.jsx)(l, { ...n, guild: e, channel: t, source: f.PE1.HUB_SIDEBAR });
                }),
        },
    ],
    E = function (e) {
        let { guild: t, channel: n } = e,
            s = (0, l.bG)([h.Ay], () => null != n && h.Ay.getChannelId() === n.id),
            r = (0, l.bG)(
                [m.A, g.Ay],
                () => {
                    if (null == n) return 0;
                    let e = g.Ay.ackMessageId(n.id);
                    return null == e
                        ? 0
                        : Math.min(
                              5,
                              Object.values(m.A.getDirectoryEntries(n.id) ?? {}).filter(
                                  (t) => new Date(t.createdAt).getTime() > A.default.extractTimestamp(e),
                              ).length,
                          );
                },
                [n],
            );
        return (0, i.jsx)(i.Fragment, {
            children: C.map((e) => {
                let { key: l, getName: a, handler: o, renderIcon: u } = e,
                    h = s && "JOIN_SERVERS" === l,
                    m = `${l}-${t.id}`;
                return (0, i.jsx)(
                    d.G,
                    {
                        id: m,
                        renderIcon: u,
                        text: a(),
                        selected: h,
                        onClick: null != n ? () => o(t, n) : void 0,
                        trailing: "JOIN_SERVERS" === l && r > 0 ? (0, c.wN)(r) : null,
                    },
                    m,
                );
            }),
        });
    };
