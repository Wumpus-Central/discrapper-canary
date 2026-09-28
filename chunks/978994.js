n.d(l, { default: () => F });
var i = n(477900),
    e = n(582128),
    s = n(702841),
    a = n(732159),
    r = n(834730),
    o = n(289873),
    u = n(148494),
    c = n(468689),
    d = n(734057),
    h = n(17928),
    g = n(857182),
    m = n(560010);
let f = +n(927813).A.Millis.HOUR;
var p = n(652215),
    x = n(375708),
    C = n(19478);
function F(t) {
    let { channelId: l, messageId: n, transitionState: F, onClose: w } = t,
        A = (0, s.bG)([d.A], () => d.A.getChannel(l)),
        [j, v] = (function (t) {
            let [l, n] = e.useState(!1),
                i = (0, h.bG)([m.A], () => m.A.getFollowerStatsForChannel(t), [t]);
            return (
                e.useEffect(() => {
                    (null == i || Date.now() - i.lastFetched > f) && !l
                        ? (n(!0), g.A.fetchChannelFollowerStats(t))
                        : null != i && l && n(!1);
                }, [t, i, l]),
                [i, l]
            );
        })(l),
        G = A?.guild_id;
    return (0, i.jsx)(a.u, {
        title: x.intl.string(x.t.aIz1oV),
        confirmText: x.intl.string(x.t["cY+Oob"]),
        onConfirm: () => u.A.crosspostMessage(l, n),
        transitionState: F,
        onClose: w,
        variant: "primary",
        children: (0, i.jsx)(r.E, {
            variant: "text-md/normal",
            className: C.YK,
            children: v
                ? (0, i.jsx)(o.y, {})
                : null != j && null != j.guildsFollowing && j.guildsFollowing > 0
                  ? (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(r.E, {
                                className: C.YK,
                                variant: "text-sm/normal",
                                children: x.intl.format(x.t.GCGrNP, { numGuildsFollowing: j.guildsFollowing }),
                            }),
                            (0, i.jsx)(r.E, {
                                variant: "text-sm/normal",
                                children: x.intl.format(x.t.IMhGZz, {
                                    onClick: function () {
                                        null != G && null != w && (w(), c.default.open(G, p.BEX.ANALYTICS));
                                    },
                                }),
                            }),
                        ],
                    })
                  : x.intl.string(x.t["8FpqOs"]),
        }),
    });
}
