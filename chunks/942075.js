n.d(t, { WC: () => E, eb: () => d, g6: () => I, gw: () => _, xH: () => T, y4: () => N });
var i = n(58149),
    r = n(936555),
    a = n(71393),
    l = n(287809);
n(935208), n(226139);
var s = n(652215),
    o = n(985018);
function u(e) {
    return e;
}
function _(e) {
    let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: a,
        } = e,
        { content: l, formatParams: s } = c({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: a,
        });
    return o.intl.format(l, s);
}
function E(e) {
    let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: a,
        } = e,
        { content: l, formatParams: s } = c({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: a,
        });
    return o.intl.formatToParts(l, s);
}
function A(e, t) {
    let n = a.A.getGuild(e),
        i = t?.total_months_subscribed ?? 0;
    return { guild: n, totalMonthsSubscribed: i, showWithDuration: i > 0, isRenewal: t?.is_renewal ?? !1 };
}
function c(e) {
    let {
            username: t,
            usernameOnClickHandler: n = u,
            roleSubscriptionOnClickHandler: i = s.tEg,
            guildId: r,
            roleSubscriptionData: a,
        } = e,
        { guild: l, totalMonthsSubscribed: _, showWithDuration: E, isRenewal: c } = A(r, a);
    return {
        content: E ? (c ? o.t.Iy66M7 : o.t.eCgb2W) : c ? o.t.mPTTdv : o.t.mYjFFx,
        formatParams: {
            username: t,
            usernameHook: n,
            guildName: l?.name,
            handleGuildNameClick: i,
            tierName: a?.tier_name,
            months: _,
        },
    };
}
function d(e) {
    let t,
        {
            username: n,
            usernameOnClickHandler: i = u,
            roleSubscriptionOnClickHandler: r = s.tEg,
            guildId: a,
            roleSubscriptionData: l,
        } = e,
        { guild: _, totalMonthsSubscribed: E, showWithDuration: c, isRenewal: d } = A(a, l);
    return (
        (t = c ? (d ? o.t.OQ0OUy : o.t["+N9bxq"]) : d ? o.t.OxP1NC : o.t["6Z1E+7"]),
        o.intl.formatToParts(t, {
            guildName: _?.name,
            tierName: l?.tier_name,
            username: n,
            usernameOnClick: i,
            roleSubscriptionOnClick: r,
            months: E,
        })
    );
}
function I(e) {
    return (0, r.w)(e);
}
function T(e, t, n, r) {
    i.Ay.trackWithMetadata(s.HAw.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: e,
        user_id: l.default.getCurrentUser()?.id,
        channel_id: t,
        message_id: n,
        role_subscription_listing_id: r,
    });
}
function N(e, t) {
    return {
        guild_id: e.guild_id,
        sender: l.default.getCurrentUser()?.id,
        target_user: t.author.id,
        channel_id: e.id,
        message_id: t.id,
    };
}
