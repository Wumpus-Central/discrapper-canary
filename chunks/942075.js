n.d(t, { WC: () => u, eb: () => c, g6: () => I, gw: () => o, xH: () => T, y4: () => N });
var i = n(58149),
    r = n(936555),
    a = n(71393),
    l = n(287809);
n(935208), n(226139);
var s = n(652215),
    E = n(985018);
function _(e) {
    return e;
}
function o(e) {
    let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: a,
        } = e,
        { content: l, formatParams: s } = d({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: a,
        });
    return E.intl.format(l, s);
}
function u(e) {
    let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: a,
        } = e,
        { content: l, formatParams: s } = d({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: a,
        });
    return E.intl.formatToParts(l, s);
}
function A(e, t) {
    let n = a.A.getGuild(e),
        i = t?.total_months_subscribed ?? 0;
    return { guild: n, totalMonthsSubscribed: i, showWithDuration: i > 0, isRenewal: t?.is_renewal ?? !1 };
}
function d(e) {
    let {
            username: t,
            usernameOnClickHandler: n = _,
            roleSubscriptionOnClickHandler: i = s.tEg,
            guildId: r,
            roleSubscriptionData: a,
        } = e,
        { guild: l, totalMonthsSubscribed: o, showWithDuration: u, isRenewal: d } = A(r, a);
    return {
        content: u ? (d ? E.t.Iy66M7 : E.t.eCgb2W) : d ? E.t.mPTTdv : E.t.mYjFFx,
        formatParams: {
            username: t,
            usernameHook: n,
            guildName: l?.name,
            handleGuildNameClick: i,
            tierName: a?.tier_name,
            months: o,
        },
    };
}
function c(e) {
    let t,
        {
            username: n,
            usernameOnClickHandler: i = _,
            roleSubscriptionOnClickHandler: r = s.tEg,
            guildId: a,
            roleSubscriptionData: l,
        } = e,
        { guild: o, totalMonthsSubscribed: u, showWithDuration: d, isRenewal: c } = A(a, l);
    return (
        (t = d ? (c ? E.t.OQ0OUy : E.t["+N9bxq"]) : c ? E.t.OxP1NC : E.t["6Z1E+7"]),
        E.intl.formatToParts(t, {
            guildName: o?.name,
            tierName: l?.tier_name,
            username: n,
            usernameOnClick: i,
            roleSubscriptionOnClick: r,
            months: u,
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
