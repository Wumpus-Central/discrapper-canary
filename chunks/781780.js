t.d(n, { Z: () => c });
var r = t(255367),
    o = t(963614),
    i = t(208156),
    l = t(701488),
    a = t(839841);
function c(e) {
    var n, t, c;
    let { channelId: u, guildId: s, embeddedActivity: d, application: p } = e,
        f = {
            instance_id: null != (c = null != (t = d.compositeInstanceId) ? t : d.launchId) ? c : '',
            location_id: null == (n = d.location) ? void 0 : n.id,
            launch_id: d.launchId,
            referrer_id: d.referrerId,
            custom_id: d.customId
        };
    return (
        null != s && '' !== s && (f.guild_id = s),
        null != u && '' !== u && (f.channel_id = u),
        (0, r.jsx)(i.J, {
            allowPopups: (0, o.h)(p),
            referrerPolicy: l.um.has(d.applicationId) ? 'no-referrer' : 'origin',
            url: d.url,
            queryParams: f,
            className: a.iframe,
            shouldRefocus: !1
        })
    );
}
