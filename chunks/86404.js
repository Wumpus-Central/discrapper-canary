n.d(t, { A: () => x });
var a = n(627968),
    i = n(64700),
    l = n(289873),
    r = n(573613),
    s = n(163126),
    o = n(688810),
    d = n(183555),
    c = n(913453),
    _ = n(229187),
    u = n(657331),
    p = n(503062),
    m = n(985018),
    f = n(928666);
function x(e) {
    let { user: t, guildId: n, channelId: x, onClose: g } = e,
        { mutualFriends: h } = (0, c.A)(t),
        { analyticsLocations: A } = (0, o.Ay)(),
        { context: b, trackUserProfileAction: v } = (0, d.NJ)(),
        I = (0, s.A)();
    return (
        i.useEffect(() => {
            (0, _.A)(t.id, I);
        }, [t.id, I]),
        (0, a.jsx)(r.Ip, {
            className: f.DK,
            fade: !0,
            children:
                null == h
                    ? (0, a.jsx)("div", { className: f.Ie, children: (0, a.jsx)(l.y, {}) })
                    : 0 === h.length
                      ? (0, a.jsxs)("div", {
                            className: f.Ie,
                            children: [
                                (0, a.jsx)("div", { className: f.on }),
                                (0, a.jsx)("div", { className: f.BI, children: m.intl.string(m.t["/5p4gx"]) }),
                            ],
                        })
                      : h.map((e) => {
                            let { key: t, user: i, status: l } = e;
                            return (0, a.jsx)(
                                p.A,
                                {
                                    user: i,
                                    status: l,
                                    guildId: n,
                                    channelId: x,
                                    onSelect: () => {
                                        var e;
                                        g?.(),
                                            v({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (e = i.id),
                                            (0, u.openUserProfileModal)({
                                                ...b,
                                                userId: e,
                                                sourceAnalyticsLocations: A,
                                            });
                                    },
                                },
                                t,
                            );
                        }),
        })
    );
}
