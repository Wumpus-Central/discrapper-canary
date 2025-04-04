n.d(t, { n: () => s });
var r = n(442837),
    i = n(594174),
    o = n(26033),
    a = n(593294);
function s(e) {
    var t, n, s, l, c;
    let u = (0, r.e7)([i.default], () => i.default.getUser(e.author_id)),
        { activity: d, embeddedActivity: f } = (0, a.Z)(e);
    if (null == d)
        return {
            isRich: !1,
            appName: (0, o.dX)(e) ? e.extra.game_name : void 0,
            user: u,
            activity: void 0,
            embeddedActivity: void 0,
            state: void 0,
            details: void 0,
            party: void 0
        };
    let _ = (null == (t = d.assets) ? void 0 : t.large_image) != null || (null == (n = d.assets) ? void 0 : n.small_image) != null,
        p = (null == (s = d.assets) ? void 0 : s.large_text) != null || (null == (l = d.assets) ? void 0 : l.small_text) != null,
        h = null != (c = d.name) ? c : 'game_name' in e.extra ? e.extra.game_name : void 0,
        m = d.details,
        g = d.state,
        E = d.party;
    return {
        isRich: _ || p || null != m || null != g || null != E,
        user: u,
        activity: d,
        state: g,
        details: m,
        party: E,
        appName: h,
        embeddedActivity: f
    };
}
