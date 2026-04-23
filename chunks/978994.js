t.d(s, { default: () => b });
var l = t(627968),
    n = t(64700),
    i = t(732159),
    o = t(702841),
    a = t(834730),
    r = t(289873),
    c = t(720149),
    u = t(997509),
    d = t(734057),
    g = t(17928),
    _ = t(857182),
    h = t(560010);
let F = +t(927813).A.Millis.HOUR;
var S = t(652215),
    m = t(985018),
    C = t(893727);
function b(e) {
    let { channelId: s, messageId: t, transitionState: b, onClose: f } = e,
        w = (0, o.bG)([d.A], () => d.A.getChannel(s)),
        [p, A] = (function (e) {
            let [s, t] = n.useState(!1),
                l = (0, g.bG)([h.A], () => h.A.getFollowerStatsForChannel(e), [e]);
            return (
                n.useEffect(() => {
                    (null == l || Date.now() - l.lastFetched > F) && !s
                        ? (t(!0), _.A.fetchChannelFollowerStats(e))
                        : null != l && s && t(!1);
                }, [e, l, s]),
                [l, s]
            );
        })(s),
        E = w?.guild_id;
    return (0, l.jsx)(i.ConfirmModal, {
        title: m.intl.string(m.t.aIz1oV),
        confirmText: m.intl.string(m.t["cY+Oob"]),
        onConfirm: () => c.A.crosspostMessage(s, t),
        transitionState: b,
        onClose: f,
        variant: "primary",
        children: (0, l.jsx)(a.E, {
            variant: "text-md/normal",
            className: C.YK,
            children: A
                ? (0, l.jsx)(r.y, {})
                : null != p && null != p.guildsFollowing && p.guildsFollowing > 0
                  ? (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(a.E, {
                                className: C.YK,
                                variant: "text-sm/normal",
                                children: m.intl.format(m.t.GCGrNP, { numGuildsFollowing: p.guildsFollowing }),
                            }),
                            (0, l.jsx)(a.E, {
                                variant: "text-sm/normal",
                                children: m.intl.format(m.t.IMhGZz, {
                                    onClick: () => {
                                        null != E && null != f && (f(), u.A.open(E, S.BEX.ANALYTICS));
                                    },
                                }),
                            }),
                        ],
                    })
                  : m.intl.string(m.t["8FpqOs"]),
        }),
    });
}
