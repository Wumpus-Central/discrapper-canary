n.d(t, { Z: () => f });
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(100527),
    s = n(101017),
    o = n(441536),
    c = n(434404),
    d = n(353857),
    u = n(551199),
    g = n(388032);
function f(e) {
    let { className: t, guildId: n, selectedBadge: f } = e,
        m = i.useCallback(
            (e) => {
                c.Z.updateGuildProfile(n, { badge: e });
            },
            [n],
        ),
        b = i.useCallback(() => {
            (0, o.Z)(n, a.Z.GUILD_POWERUPS_GUILD_SETTINGS_TAGS, "guildTagsBadgePacks"), c.Z.close();
        }, [n]),
        p = (0, s.Z)(),
        h = i.useId();
    return (0, r.jsx)("div", {
        className: t,
        children: (0, r.jsx)(l.gNt, {
            label: g.intl.string(u.default.pb7lpK),
            id: h,
            children: (0, r.jsx)(d.g, {
                badgeCollection: p,
                handleBoostUpsellClick: b,
                onBadgeClicked: m,
                selectedBadge: f,
                headingId: h,
            }),
        }),
    });
}
