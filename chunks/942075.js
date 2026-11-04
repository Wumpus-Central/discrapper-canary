var i = n(149468),
    r = n(936555),
    a = n(71393),
    s = n(287809);
(n(811091), n(226139));
var l = n(652215),
    o = n(792996);
function d(e) {
    return e;
}
function c(e, t) {
    let n = a.A.getGuild(e),
        i = t?.total_months_subscribed ?? 0;
    return { guild: n, totalMonthsSubscribed: i, showWithDuration: i > 0, isRenewal: t?.is_renewal ?? !1 };
}
function u(e) {
    let {
            username: t,
            usernameOnClickHandler: n = d,
            roleSubscriptionOnClickHandler: i = l.tEg,
            guildId: r,
            roleSubscriptionData: a,
        } = e,
        { guild: s, totalMonthsSubscribed: u, showWithDuration: _, isRenewal: E } = c(r, a);
    return {
        content: _ ? (E ? o.t.Iy66M7 : o.t.eCgb2W) : E ? o.t.mPTTdv : o.t.mYjFFx,
        formatParams: {
            username: t,
            usernameHook: n,
            guildName: s?.name,
            handleGuildNameClick: i,
            tierName: a?.tier_name,
            months: u,
        },
    };
}
n.d(
    t,
    {},
    {
        WC: function (e) {
            let {
                    username: t,
                    usernameOnClickHandler: n,
                    roleSubscriptionOnClickHandler: i,
                    guildId: r,
                    roleSubscriptionData: a,
                } = e,
                { content: s, formatParams: l } = u({
                    username: t,
                    usernameOnClickHandler: n,
                    roleSubscriptionOnClickHandler: i,
                    guildId: r,
                    roleSubscriptionData: a,
                });
            return o.intl.formatToParts(s, l);
        },
        eb: function (e) {
            let t,
                {
                    username: n,
                    usernameOnClickHandler: i = d,
                    roleSubscriptionOnClickHandler: r = l.tEg,
                    guildId: a,
                    roleSubscriptionData: s,
                } = e,
                { guild: u, totalMonthsSubscribed: _, showWithDuration: E, isRenewal: A } = c(a, s);
            return (
                (t = E ? (A ? o.t.OQ0OUy : o.t["+N9bxq"]) : A ? o.t.OxP1NC : o.t["6Z1E+7"]),
                o.intl.formatToParts(t, {
                    guildName: u?.name,
                    tierName: s?.tier_name,
                    username: n,
                    usernameOnClick: i,
                    roleSubscriptionOnClick: r,
                    months: _,
                })
            );
        },
        g6: function (e) {
            return (0, r.w)(e);
        },
        gw: function (e) {
            let {
                    username: t,
                    usernameOnClickHandler: n,
                    roleSubscriptionOnClickHandler: i,
                    guildId: r,
                    roleSubscriptionData: a,
                } = e,
                { content: s, formatParams: l } = u({
                    username: t,
                    usernameOnClickHandler: n,
                    roleSubscriptionOnClickHandler: i,
                    guildId: r,
                    roleSubscriptionData: a,
                });
            return o.intl.format(s, l);
        },
        xH: function (e, t, n, r) {
            i.Ay.trackWithMetadata(l.HAw.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
                guild_id: e,
                user_id: s.default.getCurrentUser()?.id,
                channel_id: t,
                message_id: n,
                role_subscription_listing_id: r,
            });
        },
        y4: function (e, t) {
            return {
                guild_id: e.guild_id,
                sender: s.default.getCurrentUser()?.id,
                target_user: t.author.id,
                channel_id: e.id,
                message_id: t.id,
            };
        },
    },
);
