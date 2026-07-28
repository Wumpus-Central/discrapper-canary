"use strict";
n.d(t, { Kb: () => p, Om: () => h, Q: () => m, fX: () => T, gM: () => g });
var i = n(582128),
    r = n(17928),
    a = n(56562),
    s = n(414133),
    l = n(617617),
    o = n(71393),
    d = n(967198),
    c = n(476931),
    u = n(759532),
    _ = n(244696),
    E = n(652215);
function A(e) {
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
function h(e) {
    return null != A(e);
}
function I(e) {
    return e?.enabled !== !0 ? null : A(e.themeSettings);
}
function f(e, t) {
    let n = (0, r.bG)([o.A, _.A], () => {
        if (null == e || !t) return null;
        let n = o.A.getGuild(e);
        if (null == n || !n.features.has(E.GuildFeatures.GUILD_THEME)) return null;
        let i = _.A.getGuildThemeSnapshot(e);
        return void 0 !== i ? i : n.guildTheme;
    }, [e, t]);
    return i.useMemo(() => I(n), [n]);
}
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "useEnabledGuildThemeForGuildId";
    return f(e, (0, s.OS)(t));
}
function T() {
    return (function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "getActiveGuildThemeForGuildId";
        if (null == e || !(0, s.ht)(t)) return null;
        let n = o.A.getGuild(e);
        if (
            null == n ||
            !n.features.has(E.GuildFeatures.GUILD_THEME) ||
            l.A.resolveGuildThemeSourcePreference(e) === a.tI.PERSONAL
        )
            return null;
        let i = _.A.getGuildThemeSnapshot(e);
        return I(void 0 !== i ? i : n.guildTheme);
    })(d.A.getGuildId(), "getActiveGuildTheme");
}
function m() {
    return (function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "useActiveGuildThemeForGuildId",
            n = (0, s.OS)(t),
            o = (0, r.bG)([u.Ay], () => {
                if (null != e && n && u.Ay.isActive && u.Ay.guildId === e) return u.Ay.draftEnabled ? u.Ay.draft : null;
            }, [e, n]),
            d = f(e, n),
            c = (0, r.bG)([l.A], () => (null != e && n ? l.A.resolveGuildThemeSourcePreference(e) : a.tI.PERSONAL), [
                e,
                n,
            ]);
        return i.useMemo(() => (void 0 !== o ? A(o) : c === a.tI.PERSONAL ? null : d), [d, c, o]);
    })(
        (0, r.bG)([d.A], () => d.A.getGuildId()),
        "useActiveGuildTheme",
    );
}
function g() {
    return (0, r.bG)([u.Ay], () => u.Ay.isActive);
}
