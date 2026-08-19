"use strict";
n.d(t, { WC: () => u, eb: () => A, g6: () => h, gw: () => c, xH: () => I, y4: () => f });
var i = n(95561),
    r = n(936555),
    a = n(71393),
    s = n(287809);
n(935208), n(226139);
var l = n(652215),
    o = n(375708);
function d(e) {
    return e;
}
function c(e) {
    let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: a,
        } = e,
        { content: s, formatParams: l } = E({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: a,
        });
    return o.intl.format(s, l);
}
function u(e) {
    let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: a,
        } = e,
        { content: s, formatParams: l } = E({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: a,
        });
    return o.intl.formatToParts(s, l);
}
function _(e, t) {
    let n = a.A.getGuild(e),
        i = t?.total_months_subscribed ?? 0;
    return { guild: n, totalMonthsSubscribed: i, showWithDuration: i > 0, isRenewal: t?.is_renewal ?? !1 };
}
function E(e) {
    let {
            username: t,
            usernameOnClickHandler: n = d,
            roleSubscriptionOnClickHandler: i = l.tEg,
            guildId: r,
            roleSubscriptionData: a,
        } = e,
        { guild: s, totalMonthsSubscribed: c, showWithDuration: u, isRenewal: E } = _(r, a);
    return {
        content: u ? (E ? o.t.Iy66M7 : o.t.eCgb2W) : E ? o.t.mPTTdv : o.t.mYjFFx,
        formatParams: {
            username: t,
            usernameHook: n,
            guildName: s?.name,
            handleGuildNameClick: i,
            tierName: a?.tier_name,
            months: c,
        },
    };
}
function A(e) {
    let t,
        {
            username: n,
            usernameOnClickHandler: i = d,
            roleSubscriptionOnClickHandler: r = l.tEg,
            guildId: a,
            roleSubscriptionData: s,
        } = e,
        { guild: c, totalMonthsSubscribed: u, showWithDuration: E, isRenewal: A } = _(a, s);
    return (
        (t = E ? (A ? o.t.OQ0OUy : o.t["+N9bxq"]) : A ? o.t.OxP1NC : o.t["6Z1E+7"]),
        o.intl.formatToParts(t, {
            guildName: c?.name,
            tierName: s?.tier_name,
            username: n,
            usernameOnClick: i,
            roleSubscriptionOnClick: r,
            months: u,
        })
    );
}
function h(e) {
    return (0, r.w)(e);
}
function I(e, t, n, r) {
    i.Ay.trackWithMetadata(l.HAw.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: e,
        user_id: s.default.getCurrentUser()?.id,
        channel_id: t,
        message_id: n,
        role_subscription_listing_id: r,
    });
}
function f(e, t) {
    return {
        guild_id: e.guild_id,
        sender: s.default.getCurrentUser()?.id,
        target_user: t.author.id,
        channel_id: e.id,
        message_id: t.id,
    };
}
