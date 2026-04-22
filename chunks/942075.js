"use strict";
n.d(t, { WC: () => c, eb: () => E, g6: () => h, gw: () => d, xH: () => p, y4: () => m });
var r = n(58149),
    i = n(936555),
    s = n(71393),
    a = n(287809);
n(661191), n(226139);
var o = n(652215),
    l = n(985018);
function u(e) {
    return e;
}
function d(e) {
    let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: s,
        } = e,
        { content: a, formatParams: o } = f({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: s,
        });
    return l.intl.format(a, o);
}
function c(e) {
    let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: s,
        } = e,
        { content: a, formatParams: o } = f({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: s,
        });
    return l.intl.formatToParts(a, o);
}
function _(e, t) {
    let n = s.A.getGuild(e),
        r = t?.total_months_subscribed ?? 0;
    return { guild: n, totalMonthsSubscribed: r, showWithDuration: r > 0, isRenewal: t?.is_renewal ?? !1 };
}
function f(e) {
    let {
            username: t,
            usernameOnClickHandler: n = u,
            roleSubscriptionOnClickHandler: r = o.tEg,
            guildId: i,
            roleSubscriptionData: s,
        } = e,
        { guild: a, totalMonthsSubscribed: d, showWithDuration: c, isRenewal: f } = _(i, s);
    return {
        content: c ? (f ? l.t.Iy66M7 : l.t.eCgb2W) : f ? l.t.mPTTdv : l.t.mYjFFx,
        formatParams: {
            username: t,
            usernameHook: n,
            guildName: a?.name,
            handleGuildNameClick: r,
            tierName: s?.tier_name,
            months: d,
        },
    };
}
function E(e) {
    let t,
        {
            username: n,
            usernameOnClickHandler: r = u,
            roleSubscriptionOnClickHandler: i = o.tEg,
            guildId: s,
            roleSubscriptionData: a,
        } = e,
        { guild: d, totalMonthsSubscribed: c, showWithDuration: f, isRenewal: E } = _(s, a);
    return (
        (t = f ? (E ? l.t.OQ0OUy : l.t["+N9bxq"]) : E ? l.t.OxP1NC : l.t["6Z1E+7"]),
        l.intl.formatToParts(t, {
            guildName: d?.name,
            tierName: a?.tier_name,
            username: n,
            usernameOnClick: r,
            roleSubscriptionOnClick: i,
            months: c,
        })
    );
}
function h(e) {
    return (0, i.w)(e);
}
function p(e, t, n, i) {
    r.Ay.trackWithMetadata(o.HAw.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: e,
        user_id: a.default.getCurrentUser()?.id,
        channel_id: t,
        message_id: n,
        role_subscription_listing_id: i,
    });
}
function m(e, t) {
    return {
        guild_id: e.guild_id,
        sender: a.default.getCurrentUser()?.id,
        target_user: t.author.id,
        channel_id: e.id,
        message_id: t.id,
    };
}
