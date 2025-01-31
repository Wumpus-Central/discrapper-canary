n.d(t, { n: () => o });
var i = n(442837),
    r = n(594174),
    a = n(26033),
    s = n(593294);
function o(e) {
    var t, n, o, l, u;
    let c = (0, i.e7)([r.default], () => r.default.getUser(e.author_id)),
        { activity: d, embeddedActivity: f } = (0, s.Z)(e);
    if (null == d)
        return {
            isRich: !1,
            appName: (0, a.dX)(e) ? e.extra.game_name : void 0,
            user: c,
            activity: void 0,
            embeddedActivity: void 0,
            state: void 0,
            details: void 0,
            party: void 0
        };
    let _ = (null === (t = d.assets) || void 0 === t ? void 0 : t.large_image) != null || (null === (n = d.assets) || void 0 === n ? void 0 : n.small_image) != null,
        p = (null === (o = d.assets) || void 0 === o ? void 0 : o.large_text) != null || (null === (l = d.assets) || void 0 === l ? void 0 : l.small_text) != null,
        h = null !== (u = d.name) && void 0 !== u ? u : 'game_name' in e.extra ? e.extra.game_name : void 0,
        m = d.details,
        g = d.state,
        E = d.party;
    return {
        isRich: _ || p || null != m || null != g || null != E,
        user: c,
        activity: d,
        state: g,
        details: m,
        party: E,
        appName: h,
        embeddedActivity: f
    };
}
