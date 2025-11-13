t.d(n, { Z: () => l });
var o = t(951288),
    r = t(963614),
    a = t(208156),
    i = t(701488),
    c = t(62307);
function l(e) {
    var n, t, l;
    let { channelId: u, guildId: _, embeddedActivity: s, application: d } = e,
        p = {
            instance_id: null != (l = null != (t = s.compositeInstanceId) ? t : s.launchId) ? l : "",
            location_id: null == (n = s.location) ? void 0 : n.id,
            launch_id: s.launchId,
            referrer_id: s.referrerId,
            custom_id: s.customId,
        };
    return (
        null != _ && "" !== _ && (p.guild_id = _),
        null != u && "" !== u && (p.channel_id = u),
        (0, o.jsx)(a.J, {
            allowPopups: (0, r.h)(d),
            referrerPolicy: i.um.has(s.applicationId) ? "no-referrer" : "origin",
            url: s.url,
            queryParams: p,
            className: c.iframe,
            shouldRefocus: !1,
        })
    );
}
