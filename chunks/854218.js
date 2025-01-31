n.d(t, {
    PZ: () => a,
    XX: () => s
}),
    n(47120);
var i = n(601964),
    r = n(981631),
    a = (function (e) {
        return (e.PUBLIC = 'PUBLIC'), (e.INVITE_ONLY = 'INVITE_ONLY'), e;
    })({});
function s(e) {
    let t = new Set(e.features),
        n = t.has(r.oNc.COMMUNITY) && t.has(r.oNc.DISCOVERABLE) ? 'PUBLIC' : 'INVITE_ONLY',
        a = o(e),
        s = 0;
    if (a) {
        var l;
        s = null !== (l = e instanceof i.ZP ? e.premiumSubscriberCount : e.premiumSubscriptionCount) && void 0 !== l ? l : 0;
    }
    let u = e instanceof i.ZP ? e.premiumTier : r.Eu4.NONE;
    return {
        verified: t.has(r.oNc.VERIFIED),
        partnered: t.has(r.oNc.PARTNERED),
        community: t.has(r.oNc.COMMUNITY),
        staff: t.has(r.oNc.INTERNAL_EMPLOYEE_ONLY),
        clan: t.has(r.oNc.CLAN),
        visibility: n,
        premium: a,
        premiumSubscriberCount: s,
        premiumTier: u
    };
}
function o(e) {
    return null != e && (e instanceof i.ZP ? e.premiumSubscriberCount > 0 || e.premiumTier > r.Eu4.NONE : null != e.premiumSubscriptionCount && e.premiumSubscriptionCount > 0);
}
