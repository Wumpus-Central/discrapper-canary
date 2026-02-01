n.d(t, {
    WC: () => d,
    eb: () => _,
    g6: () => h,
    gw: () => u,
    xH: () => m,
    y4: () => g,
});
var r = n(58149),
    i = n(936555),
    a = n(71393),
    o = n(287809);
n(661191), n(226139);
var s = n(652215),
    l = n(985018);

function c(e) {
    return e;
}

function u(e) {
    let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: a,
        } = e,
        { content: o, formatParams: s } = p({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: a,
        });
    return l.intl.format(o, s);
}

function d(e) {
    let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: a,
        } = e,
        { content: o, formatParams: s } = p({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: a,
        });
    return l.intl.formatToParts(o, s);
}

function f(e, t) {
    var n, r;
    let i = a.A.getGuild(e),
        o = null != (n = null == t ? void 0 : t.total_months_subscribed) ? n : 0,
        s = o > 0;
    return {
        guild: i,
        totalMonthsSubscribed: o,
        showWithDuration: s,
        isRenewal: null != (r = null == t ? void 0 : t.is_renewal) && r,
    };
}

function p(e) {
    let {
            username: t,
            usernameOnClickHandler: n = c,
            roleSubscriptionOnClickHandler: r = s.tEg,
            guildId: i,
            roleSubscriptionData: a,
        } = e,
        { guild: o, totalMonthsSubscribed: u, showWithDuration: d, isRenewal: p } = f(i, a);
    return {
        content: d ? (p ? l.t.Iy66M7 : l.t.eCgb2W) : p ? l.t.mPTTdv : l.t.mYjFFx,
        formatParams: {
            username: t,
            usernameHook: n,
            guildName: null == o ? void 0 : o.name,
            handleGuildNameClick: r,
            tierName: null == a ? void 0 : a.tier_name,
            months: u,
        },
    };
}

function _(e) {
    let t,
        {
            username: n,
            usernameOnClickHandler: r = c,
            roleSubscriptionOnClickHandler: i = s.tEg,
            guildId: a,
            roleSubscriptionData: o,
        } = e,
        { guild: u, totalMonthsSubscribed: d, showWithDuration: p, isRenewal: _ } = f(a, o);
    return (
        (t = p ? (_ ? l.t.OQ0OUy : l.t["+N9bxq"]) : _ ? l.t.OxP1NC : l.t["6Z1E+7"]),
        l.intl.formatToParts(t, {
            guildName: null == u ? void 0 : u.name,
            tierName: null == o ? void 0 : o.tier_name,
            username: n,
            usernameOnClick: r,
            roleSubscriptionOnClick: i,
            months: d,
        })
    );
}

function h(e) {
    return (0, i.w)(e);
}

function m(e, t, n, i) {
    var a;
    r.Ay.trackWithMetadata(s.HAw.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: e,
        user_id: null == (a = o.default.getCurrentUser()) ? void 0 : a.id,
        channel_id: t,
        message_id: n,
        role_subscription_listing_id: i,
    });
}

function g(e, t) {
    var n;
    return {
        guild_id: e.guild_id,
        sender: null == (n = o.default.getCurrentUser()) ? void 0 : n.id,
        target_user: t.author.id,
        channel_id: e.id,
        message_id: t.id,
    };
}
