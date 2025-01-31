t.d(n, { Z: () => d });
var i = t(200651),
    a = t(963614),
    r = t(208156),
    l = t(701488),
    o = t(864096);
function d(e) {
    var n, t, d;
    let { channelId: c, guildId: u, embeddedActivity: s, application: p } = e,
        m = {
            instance_id: null !== (d = null !== (t = s.compositeInstanceId) && void 0 !== t ? t : s.launchId) && void 0 !== d ? d : '',
            location_id: null === (n = s.location) || void 0 === n ? void 0 : n.id,
            launch_id: s.launchId,
            referrer_id: s.referrerId,
            custom_id: s.customId
        };
    return (
        null != u && '' !== u && (m.guild_id = u),
        null != c && '' !== c && (m.channel_id = c),
        (0, i.jsx)(r.J, {
            allowPopups: (0, a.h)(p),
            referrerPolicy: l.um.has(s.applicationId) ? 'no-referrer' : 'origin',
            url: s.url,
            queryParams: m,
            className: o.iframe,
            shouldRefocus: !1
        })
    );
}
