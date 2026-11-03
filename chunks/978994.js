t.d(n, { default: () => F });
var i = t(477900),
    s = t(582128),
    e = t(702841),
    o = t(732159),
    a = t(834730),
    r = t(289873),
    u = t(148494),
    c = t(468689),
    d = t(734057),
    h = t(17928),
    g = t(857182),
    m = t(560010);
let f = +t(927813).A.Millis.HOUR;
var p = t(652215),
    A = t(105292),
    C = t(19478);
function F(l) {
    let { channelId: n, messageId: t, transitionState: F, onClose: w } = l,
        b = (0, e.bG)([d.A], () => d.A.getChannel(n)),
        [x, j] = (function (l) {
            let [n, t] = s.useState(!1),
                i = (0, h.bG)([m.A], () => m.A.getFollowerStatsForChannel(l), [l]);
            return (
                s.useEffect(() => {
                    (null == i || Date.now() - i.lastFetched > f) && !n
                        ? (t(!0), g.A.fetchChannelFollowerStats(l))
                        : null != i && n && t(!1);
                }, [l, i, n]),
                [i, n]
            );
        })(n),
        v = b?.guild_id;
    return (0, i.jsx)(o.u, {
        title: A.intl.string(A.t.aIz1oV),
        confirmText: A.intl.string(A.t["cY+Oob"]),
        onConfirm: () => u.A.crosspostMessage(n, t),
        transitionState: F,
        onClose: w,
        variant: "primary",
        children: (0, i.jsx)(a.E, {
            variant: "body-md/normal",
            className: C.YK,
            children: j
                ? (0, i.jsx)(r.y, {})
                : null != x && null != x.guildsFollowing && x.guildsFollowing > 0
                  ? (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(a.E, {
                                className: C.YK,
                                variant: "body-sm/normal",
                                children: A.intl.format(A.t.GCGrNP, { numGuildsFollowing: x.guildsFollowing }),
                            }),
                            (0, i.jsx)(a.E, {
                                variant: "body-sm/normal",
                                children: A.intl.format(A.t.IMhGZz, {
                                    onClick: function () {
                                        null != v && null != w && (w(), c.A.open(v, p.BEX.ANALYTICS));
                                    },
                                }),
                            }),
                        ],
                    })
                  : A.intl.string(A.t["8FpqOs"]),
        }),
    });
}
