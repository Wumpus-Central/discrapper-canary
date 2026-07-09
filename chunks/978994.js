n.d(l, { default: () => A });
var i = n(627968),
    e = n(64700),
    s = n(732159),
    a = n(702841),
    r = n(834730),
    o = n(289873),
    u = n(493336),
    c = n(468689),
    d = n(734057),
    h = n(17928),
    m = n(857182),
    g = n(560010);
let f = +n(927813).A.Millis.HOUR;
var p = n(652215),
    C = n(375708),
    x = n(42015);
function A(t) {
    let { channelId: l, messageId: n, transitionState: A, onClose: F } = t,
        w = (0, a.bG)([d.A], () => d.A.getChannel(l)),
        [j, v] = (function (t) {
            let [l, n] = e.useState(!1),
                i = (0, h.bG)([g.A], () => g.A.getFollowerStatsForChannel(t), [t]);
            return (
                e.useEffect(() => {
                    (null == i || Date.now() - i.lastFetched > f) && !l
                        ? (n(!0), m.A.fetchChannelFollowerStats(t))
                        : null != i && l && n(!1);
                }, [t, i, l]),
                [i, l]
            );
        })(l),
        G = w?.guild_id;
    return (0, i.jsx)(s.ConfirmModal, {
        title: C.intl.string(C.t.aIz1oV),
        confirmText: C.intl.string(C.t["cY+Oob"]),
        onConfirm: () => u.A.crosspostMessage(l, n),
        transitionState: A,
        onClose: F,
        variant: "primary",
        children: (0, i.jsx)(r.E, {
            variant: "text-md/normal",
            className: x.YK,
            children: v
                ? (0, i.jsx)(o.y, {})
                : null != j && null != j.guildsFollowing && j.guildsFollowing > 0
                  ? (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(r.E, {
                                className: x.YK,
                                variant: "text-sm/normal",
                                children: C.intl.format(C.t.GCGrNP, { numGuildsFollowing: j.guildsFollowing }),
                            }),
                            (0, i.jsx)(r.E, {
                                variant: "text-sm/normal",
                                children: C.intl.format(C.t.IMhGZz, {
                                    onClick: () => {
                                        null != G && null != F && (F(), c.A.open(G, p.BEX.ANALYTICS));
                                    },
                                }),
                            }),
                        ],
                    })
                  : C.intl.string(C.t["8FpqOs"]),
        }),
    });
}
