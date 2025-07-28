n.d(t, { Z: () => p });
var r = n(255367),
    i = n(73800),
    l = n(481060),
    a = n(100527),
    s = n(101017),
    o = n(441536),
    c = n(434404),
    d = n(755641),
    u = n(195196),
    m = n(388032),
    g = n(602268);
function p(e) {
    let { className: t, guildId: n, selectedBadge: p } = e,
        h = i.useCallback(
            (e) => {
                c.Z.updateGuildProfile(n, { badge: e });
            },
            [n]
        ),
        f = i.useCallback(() => {
            ((0, o.Z)(n, a.Z.GUILD_POWERUPS_GUILD_SETTINGS_TAGS), c.Z.close());
        }, [n]),
        x = (0, s.Z)();
    return (0, r.jsxs)('div', {
        className: t,
        children: [
            (0, r.jsx)(l.vwX, {
                className: g.sectionTitle,
                children: m.intl.string(u.default.pb7lpK)
            }),
            (0, r.jsx)(d.g, {
                badgeCollection: x,
                handleBoostUpsellClick: f,
                onBadgeClicked: h,
                selectedBadge: p
            })
        ]
    });
}
