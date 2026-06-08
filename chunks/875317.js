"use strict";
n.d(t, { Kb: () => m, Om: () => p, Q: () => g });
var i = n(64700),
    r = n(17928),
    s = n(56562),
    a = n(414133),
    o = n(617617),
    l = n(71393),
    u = n(967198),
    c = n(476931),
    d = n(759532),
    _ = n(244696),
    h = n(652215);
function f(e) {
    var t;
    if (null == e) return null;
    let n =
        ((t = e.customUserThemeSettings),
        t?.colors == null || 1 !== t.colors.length || (null != t.gradientColorStops && t.gradientColorStops.length > 0)
            ? null
            : { type: "custom", customUserThemeSettings: t });
    if (null != n) return n;
    let i = (0, c.Yt)(e.presetId);
    return null != i ? { type: "preset", preset: i } : null;
}
function p(e) {
    return null != f(e);
}
function E(e, t) {
    let n = (0, r.bG)([l.A, _.A], () => {
        if (null == e || !t) return null;
        let n = l.A.getGuild(e);
        if (null == n || !n.features.has(h.GuildFeatures.GUILD_THEME)) return null;
        let i = _.A.getGuildThemeSnapshot(e);
        return void 0 !== i ? i : n.guildTheme;
    }, [e, t]);
    return i.useMemo(() => (n?.enabled !== !0 ? null : f(n.themeSettings)), [n]);
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "useEnabledGuildThemeForGuildId";
    return E(e, (0, a.OS)(t));
}
function g() {
    return (function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "useActiveGuildThemeForGuildId",
            n = (0, a.OS)(t),
            l = (0, r.bG)([d.Ay], () => {
                if (null != e && n && d.Ay.isActive && d.Ay.guildId === e) return d.Ay.draftEnabled ? d.Ay.draft : null;
            }, [e, n]),
            u = E(e, n),
            c = (0, r.bG)([o.A], () => (null != e && n ? o.A.resolveGuildThemeSourcePreference(e) : s.tI.PERSONAL), [
                e,
                n,
            ]);
        return i.useMemo(() => (void 0 !== l ? f(l) : c === s.tI.PERSONAL ? null : u), [u, c, l]);
    })(
        (0, r.bG)([u.A], () => u.A.getGuildId()),
        "useActiveGuildTheme",
    );
}
