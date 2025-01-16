t.d(n, {
    Z: function () {
        return c;
    }
});
var i = t(200651),
    r = t(963614),
    a = t(208156),
    o = t(701488),
    l = t(864096);
function c(e) {
    var n, t, c;
    let { channelId: d, guildId: u, embeddedActivity: s, application: p } = e,
        m = {
            instance_id: null !== (c = null !== (t = s.compositeInstanceId) && void 0 !== t ? t : s.launchId) && void 0 !== c ? c : '',
            location_id: null === (n = s.location) || void 0 === n ? void 0 : n.id,
            launch_id: s.launchId,
            referrer_id: s.referrerId,
            custom_id: s.customId
        };
    return (
        null != u && '' !== u && (m.guild_id = u),
        null != d && '' !== d && (m.channel_id = d),
        (0, i.jsx)(a.J, {
            allowPopups: (0, r.h)(p),
            referrerPolicy: o.um.has(s.applicationId) ? 'no-referrer' : 'origin',
            url: s.url,
            queryParams: m,
            className: l.iframe,
            shouldRefocus: !1
        })
    );
}
