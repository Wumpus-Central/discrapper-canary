n.d(t, { Z: () => m });
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(100527),
    s = n(101017),
    o = n(441536),
    c = n(434404),
    d = n(353857),
    u = n(541673),
    g = n(388032);
function m(e) {
    let { className: t, guildId: n, selectedBadge: m } = e,
        p = i.useCallback(
            (e) => {
                c.Z.updateGuildProfile(n, { badge: e });
            },
            [n],
        ),
        f = i.useCallback(() => {
            (0, o.Z)(n, a.Z.GUILD_POWERUPS_GUILD_SETTINGS_TAGS, "guildTagsBadgePacks"), c.Z.close();
        }, [n]),
        h = (0, s.Z)(),
        b = i.useId();
    return (0, r.jsx)("div", {
        className: t,
        children: (0, r.jsx)(l.gNt, {
            label: g.intl.string(u.default.pb7lpK),
            id: b,
            children: (0, r.jsx)(d.g, {
                badgeCollection: h,
                handleBoostUpsellClick: f,
                onBadgeClicked: p,
                selectedBadge: m,
                headingId: b,
            }),
        }),
    });
}
