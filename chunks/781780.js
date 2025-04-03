n.d(t, { Z: () => c });
var r = n(200651),
    o = n(963614),
    i = n(208156),
    l = n(701488),
    a = n(839841);
function c(e) {
    var t, n, c;
    let { channelId: u, guildId: s, embeddedActivity: d, application: p } = e,
        f = {
            instance_id: null != (c = null != (n = d.compositeInstanceId) ? n : d.launchId) ? c : '',
            location_id: null == (t = d.location) ? void 0 : t.id,
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
