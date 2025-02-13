n.d(t, { Z: () => d });
var r = n(200651),
    i = n(963614),
    l = n(208156),
    o = n(701488),
    a = n(225934);
function d(e) {
    var t, n, d;
    let { channelId: c, guildId: u, embeddedActivity: s, application: f } = e,
        p = {
            instance_id: null !== (d = null !== (n = s.compositeInstanceId) && void 0 !== n ? n : s.launchId) && void 0 !== d ? d : '',
            location_id: null === (t = s.location) || void 0 === t ? void 0 : t.id,
            launch_id: s.launchId,
            referrer_id: s.referrerId,
            custom_id: s.customId
        };
    return (
        null != u && '' !== u && (p.guild_id = u),
        null != c && '' !== c && (p.channel_id = c),
        (0, r.jsx)(l.J, {
            allowPopups: (0, i.h)(f),
            referrerPolicy: o.um.has(s.applicationId) ? 'no-referrer' : 'origin',
            url: s.url,
            queryParams: p,
            className: a.iframe,
            shouldRefocus: !1
        })
    );
}
