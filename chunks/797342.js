r.d(n, {
    n: function () {
        return l;
    }
});
var i = r(442837),
    a = r(594174),
    o = r(26033),
    s = r(593294);
function l(e) {
    var n, r, l, u, c;
    let d = (0, i.e7)([a.default], () => a.default.getUser(e.author_id)),
        { activity: f, embeddedActivity: p } = (0, s.Z)(e);
    if (null == f)
        return {
            isRich: !1,
            appName: (0, o.dX)(e) ? e.extra.game_name : void 0,
            user: d,
            activity: void 0,
            embeddedActivity: void 0,
            state: void 0,
            details: void 0,
            party: void 0
        };
    let h = (null === (n = f.assets) || void 0 === n ? void 0 : n.large_image) != null || (null === (r = f.assets) || void 0 === r ? void 0 : r.small_image) != null,
        _ = (null === (l = f.assets) || void 0 === l ? void 0 : l.large_text) != null || (null === (u = f.assets) || void 0 === u ? void 0 : u.small_text) != null,
        m = null !== (c = f.name) && void 0 !== c ? c : 'game_name' in e.extra ? e.extra.game_name : void 0,
        g = f.details,
        E = f.state,
        v = f.party;
    return {
        isRich: h || _ || null != g || null != E || null != v,
        user: d,
        activity: f,
        state: E,
        details: g,
        party: v,
        appName: m,
        embeddedActivity: p
    };
}
