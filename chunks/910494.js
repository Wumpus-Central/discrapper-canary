n.d(t, { Z: () => p });
var r = n(951288),
    i = n(647438),
    l = n(481060),
    s = n(100527),
    a = n(101017),
    o = n(441536),
    c = n(434404),
    d = n(353857),
    u = n(659854),
    g = n(388032),
    m = n(764009);
function p(e) {
    let { className: t, guildId: n, selectedBadge: p } = e,
        f = i.useCallback(
            (e) => {
                c.Z.updateGuildProfile(n, { badge: e });
            },
            [n],
        ),
        h = i.useCallback(() => {
            (0, o.Z)(n, s.Z.GUILD_POWERUPS_GUILD_SETTINGS_TAGS, "guildTagsBadgePacks"), c.Z.close();
        }, [n]),
        x = (0, a.Z)(),
        b = i.useId();
    return (0, r.jsxs)("div", {
        className: t,
        children: [
            (0, r.jsx)(l.vwX, {
                id: b,
                className: m.sectionTitle,
                children: g.intl.string(u.default.pb7lpK),
            }),
            (0, r.jsx)(d.g, {
                badgeCollection: x,
                handleBoostUpsellClick: h,
                onBadgeClicked: f,
                selectedBadge: p,
                headingId: b,
            }),
        ],
    });
}
