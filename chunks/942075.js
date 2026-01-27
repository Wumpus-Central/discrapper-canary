n.d(t, {
    WC: () => d,
    eb: () => p,
    g6: () => m,
    gw: () => u,
    xH: () => A,
    y4: () => b,
});
var r = n(58149),
    l = n(936555),
    a = n(71393),
    i = n(287809);
n(661191), n(226139);
var o = n(652215),
    s = n(985018);

function c(e) {
    return e;
}

function u(e) {
    let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: l,
            roleSubscriptionData: a,
        } = e,
        { content: i, formatParams: o } = f({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: l,
            roleSubscriptionData: a,
        });
    return s.intl.format(i, o);
}

function d(e) {
    let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: l,
            roleSubscriptionData: a,
        } = e,
        { content: i, formatParams: o } = f({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: l,
            roleSubscriptionData: a,
        });
    return s.intl.formatToParts(i, o);
}

function _(e, t) {
    var n, r;
    let l = a.A.getGuild(e),
        i = null != (n = null == t ? void 0 : t.total_months_subscribed) ? n : 0;
    return {
        guild: l,
        totalMonthsSubscribed: i,
        showWithDuration: i > 0,
        isRenewal: null != (r = null == t ? void 0 : t.is_renewal) && r,
    };
}

function f(e) {
    let {
            username: t,
            usernameOnClickHandler: n = c,
            roleSubscriptionOnClickHandler: r = o.tEg,
            guildId: l,
            roleSubscriptionData: a,
        } = e,
        { guild: i, totalMonthsSubscribed: u, showWithDuration: d, isRenewal: f } = _(l, a);
    return {
        content: d ? (f ? s.t.Iy66M7 : s.t.eCgb2W) : f ? s.t.mPTTdv : s.t.mYjFFx,
        formatParams: {
            username: t,
            usernameHook: n,
            guildName: null == i ? void 0 : i.name,
            handleGuildNameClick: r,
            tierName: null == a ? void 0 : a.tier_name,
            months: u,
        },
    };
}

function p(e) {
    let t,
        {
            username: n,
            usernameOnClickHandler: r = c,
            roleSubscriptionOnClickHandler: l = o.tEg,
            guildId: a,
            roleSubscriptionData: i,
        } = e,
        { guild: u, totalMonthsSubscribed: d, showWithDuration: f, isRenewal: p } = _(a, i);
    return (
        (t = f ? (p ? s.t.OQ0OUy : s.t["+N9bxq"]) : p ? s.t.OxP1NC : s.t["6Z1E+7"]),
        s.intl.formatToParts(t, {
            guildName: null == u ? void 0 : u.name,
            tierName: null == i ? void 0 : i.tier_name,
            username: n,
            usernameOnClick: r,
            roleSubscriptionOnClick: l,
            months: d,
        })
    );
}

function m(e) {
    return (0, l.w)(e);
}

function A(e, t, n, l) {
    var a;
    r.Ay.trackWithMetadata(o.HAw.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: e,
        user_id: null == (a = i.default.getCurrentUser()) ? void 0 : a.id,
        channel_id: t,
        message_id: n,
        role_subscription_listing_id: l,
    });
}

function b(e, t) {
    var n;
    return {
        guild_id: e.guild_id,
        sender: null == (n = i.default.getCurrentUser()) ? void 0 : n.id,
        target_user: t.author.id,
        channel_id: e.id,
        message_id: t.id,
    };
}
