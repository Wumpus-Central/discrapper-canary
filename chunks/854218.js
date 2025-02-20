n.d(t, {
    PZ: () => o,
    XX: () => a
}),
    n(47120);
var r = n(601964),
    i = n(981631),
    o = (function (e) {
        return (e.PUBLIC = 'PUBLIC'), (e.INVITE_ONLY = 'INVITE_ONLY'), e;
    })({});
function a(e) {
    let t = new Set(e.features),
        n = t.has(i.oNc.COMMUNITY) && t.has(i.oNc.DISCOVERABLE) ? 'PUBLIC' : 'INVITE_ONLY',
        o = s(e),
        a = 0;
    if (o) {
        var l;
        a = null !== (l = e instanceof r.ZP ? e.premiumSubscriberCount : e.premiumSubscriptionCount) && void 0 !== l ? l : 0;
    }
    let c = e instanceof r.ZP ? e.premiumTier : i.Eu4.NONE;
    return {
        verified: t.has(i.oNc.VERIFIED),
        partnered: t.has(i.oNc.PARTNERED),
        community: t.has(i.oNc.COMMUNITY),
        staff: t.has(i.oNc.INTERNAL_EMPLOYEE_ONLY),
        clan: t.has(i.oNc.CLAN),
        visibility: n,
        premium: o,
        premiumSubscriberCount: a,
        premiumTier: c
    };
}
function s(e) {
    return null != e && (e instanceof r.ZP ? e.premiumSubscriberCount > 0 || e.premiumTier > i.Eu4.NONE : null != e.premiumSubscriptionCount && e.premiumSubscriptionCount > 0);
}
