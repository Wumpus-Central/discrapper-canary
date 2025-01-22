r.d(n, {
    PZ: function () {
        return i;
    },
    XX: function () {
        return l;
    }
});
var i,
    a = r(47120);
var o = r(601964),
    s = r(981631);
function l(e) {
    let n = new Set(e.features),
        r = n.has(s.oNc.COMMUNITY) && n.has(s.oNc.DISCOVERABLE) ? 'PUBLIC' : 'INVITE_ONLY',
        i = u(e),
        a = 0;
    if (i) {
        var l;
        a = null !== (l = e instanceof o.ZP ? e.premiumSubscriberCount : e.premiumSubscriptionCount) && void 0 !== l ? l : 0;
    }
    let c = e instanceof o.ZP ? e.premiumTier : s.Eu4.NONE;
    return {
        verified: n.has(s.oNc.VERIFIED),
        partnered: n.has(s.oNc.PARTNERED),
        community: n.has(s.oNc.COMMUNITY),
        staff: n.has(s.oNc.INTERNAL_EMPLOYEE_ONLY),
        clan: n.has(s.oNc.CLAN),
        visibility: r,
        premium: i,
        premiumSubscriberCount: a,
        premiumTier: c
    };
}
function u(e) {
    return null != e && (e instanceof o.ZP ? e.premiumSubscriberCount > 0 || e.premiumTier > s.Eu4.NONE : null != e.premiumSubscriptionCount && e.premiumSubscriptionCount > 0);
}
!(function (e) {
    (e.PUBLIC = 'PUBLIC'), (e.INVITE_ONLY = 'INVITE_ONLY');
})(i || (i = {}));
