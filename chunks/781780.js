t.d(n, { Z: () => l });
var o = t(951288),
    r = t(963614),
    a = t(208156),
    i = t(701488),
    c = t(62307);
function l(e) {
    var n, t, l;
    let { channelId: u, guildId: _, embeddedActivity: d, application: s } = e,
        p = {
            instance_id: null != (l = null != (t = d.compositeInstanceId) ? t : d.launchId) ? l : "",
            location_id: null == (n = d.location) ? void 0 : n.id,
            launch_id: d.launchId,
            referrer_id: d.referrerId,
            custom_id: d.customId,
        };
    return (
        null != _ && "" !== _ && (p.guild_id = _),
        null != u && "" !== u && (p.channel_id = u),
        (0, o.jsx)(a.J, {
            allowPopups: (0, r.h)(s),
            referrerPolicy: i.um.has(d.applicationId) ? "no-referrer" : "origin",
            url: d.url,
            queryParams: p,
            className: c.iframe,
            shouldRefocus: !1,
        })
    );
}
