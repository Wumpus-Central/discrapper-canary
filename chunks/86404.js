a.d(t, { A: () => b });
var n = a(627968),
    i = a(64700),
    l = a(289873),
    r = a(573613),
    d = a(163126),
    o = a(688810),
    s = a(183555),
    c = a(913453),
    _ = a(229187),
    u = a(657331),
    m = a(503062),
    p = a(985018),
    g = a(928666);
function b(e) {
    let { user: t, guildId: a, channelId: b, onClose: f } = e,
        { mutualFriends: x } = (0, c.A)(t),
        { analyticsLocations: h } = (0, o.Ay)(),
        { context: A, trackUserProfileAction: v } = (0, s.NJ)(),
        I = (0, d.A)();
    return (
        i.useEffect(() => {
            (0, _.A)(t.id, I);
        }, [t.id, I]),
        (0, n.jsx)(r.Ip, {
            className: g.DK,
            fade: !0,
            children:
                null == x
                    ? (0, n.jsx)("div", { className: g.Ie, children: (0, n.jsx)(l.y, {}) })
                    : 0 === x.length
                      ? (0, n.jsxs)("div", {
                            className: g.Ie,
                            children: [
                                (0, n.jsx)("div", { className: g.on }),
                                (0, n.jsx)("div", { className: g.BI, children: p.intl.string(p.t["/5p4gx"]) }),
                            ],
                        })
                      : x.map((e) => {
                            let { key: t, user: i, status: l } = e;
                            return (0, n.jsx)(
                                m.A,
                                {
                                    user: i,
                                    status: l,
                                    guildId: a,
                                    channelId: b,
                                    onSelect: () => {
                                        var e;
                                        f?.(),
                                            v({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (e = i.id),
                                            (0, u.openUserProfileModal)({
                                                ...A,
                                                userId: e,
                                                sourceAnalyticsLocations: h,
                                            });
                                    },
                                },
                                t,
                            );
                        }),
        })
    );
}
