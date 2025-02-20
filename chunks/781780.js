n.d(t, { Z: () => c });
var r = n(200651),
    i = n(963614),
    o = n(208156),
    l = n(701488),
    a = n(530653);
function c(e) {
    var t, n, c;
    let { channelId: d, guildId: u, embeddedActivity: s, application: p } = e,
        f = {
            instance_id: null !== (c = null !== (n = s.compositeInstanceId) && void 0 !== n ? n : s.launchId) && void 0 !== c ? c : '',
            location_id: null === (t = s.location) || void 0 === t ? void 0 : t.id,
            launch_id: s.launchId,
            referrer_id: s.referrerId,
            custom_id: s.customId
        };
    return (
        null != u && '' !== u && (f.guild_id = u),
        null != d && '' !== d && (f.channel_id = d),
        (0, r.jsx)(o.J, {
            allowPopups: (0, i.h)(p),
            referrerPolicy: l.um.has(s.applicationId) ? 'no-referrer' : 'origin',
            url: s.url,
            queryParams: f,
            className: a.iframe,
            shouldRefocus: !1
        })
    );
}
