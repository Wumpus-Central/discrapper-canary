"use strict";
n.d(t, { Om: () => f, Q: () => p });
var i = n(64700),
    r = n(17928),
    s = n(56562),
    a = n(414133),
    o = n(617617),
    l = n(71393),
    u = n(967198),
    c = n(476931),
    d = n(759532),
    _ = n(652215);
function h(e) {
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
function f(e) {
    return null != h(e);
}
function p() {
    return (function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "useActiveGuildThemeForGuildId",
            n = (0, a.OS)(t),
            u = (0, r.bG)([d.Ay], () => {
                if (null != e && n && d.Ay.isActive && d.Ay.guildId === e) return d.Ay.draftEnabled ? d.Ay.draft : null;
            }, [e, n]),
            c = (0, r.bG)([l.A], () => {
                if (null == e || !n) return null;
                let t = l.A.getGuild(e);
                return null != t && t.features.has(_.GuildFeatures.GUILD_THEME) ? t.guildTheme : null;
            }, [e, n]),
            f = (0, r.bG)([o.A], () => (null != e && n ? o.A.resolveGuildThemeSourcePreference(e) : s.tI.PERSONAL), [
                e,
                n,
            ]);
        return i.useMemo(
            () => (void 0 !== u ? h(u) : f === s.tI.PERSONAL ? null : c?.enabled !== !0 ? null : h(c.themeSettings)),
            [c, f, u],
        );
    })(
        (0, r.bG)([u.A], () => u.A.getGuildId()),
        "useActiveGuildTheme",
    );
}
