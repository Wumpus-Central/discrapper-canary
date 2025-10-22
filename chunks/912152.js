n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(63063),
    o = n(74538),
    s = n(937615),
    l = n(313789),
    c = n(518596),
    u = n(981631),
    d = n(474936),
    f = n(388032),
    _ = n(99997);
function p(e) {
    let {
        hasAppliedGuildBoosts: t,
        hasBoostPerk: n,
        hasGuildAffinitiesOrInGuild: r,
        subscriptionIsPausedOrPausePending: i,
    } = e;
    if (i)
        return {
            flavor: f.intl.format(f.t.doslJu, {
                onClick: () => (0, c.openUserSettings)(l.n.SUBSCRIPTIONS_PANEL, { section: u.oAB.SUBSCRIPTIONS }),
            }),
        };
    if (!r) return { subtitle: f.intl.string(f.t.oiWYAc) };
    if (t)
        return {
            subtitle: f.intl.string(f.t.W5rDjW),
            flavor: f.intl.format(f.t.cUHcaQ, { helpdeskArticle: a.Z.getArticleURL(u.BhN.GUILD_SUBSCRIPTIONS) }),
        };
    let _ = d.GP[d.Xh.PREMIUM_MONTH_GUILD],
        p = o.ZP.getDefaultPrice(_.id, n),
        h = (0, s.og)((0, s.T4)(p.amount, p.currency), _.interval, _.intervalCount);
    return {
        subtitle: n ? f.intl.string(f.t.bhPzXR) : f.intl.string(f.t.Zs9h9Z),
        flavor: f.intl.formatToPlainString(f.t.PGgTdA, { monthlyGuildBoostPrice: h }),
    };
}
let h = function (e) {
    let {
            hasAppliedGuildBoosts: t,
            hasBoostPerk: n,
            hasGuildAffinitiesOrInGuild: a,
            subscriptionIsPausedOrPausePending: o,
        } = e,
        { subtitle: s, flavor: l } = p({
            hasAppliedGuildBoosts: t,
            hasBoostPerk: n,
            hasGuildAffinitiesOrInGuild: a,
            subscriptionIsPausedOrPausePending: o,
        });
    return (0, r.jsxs)("div", {
        className: _.wrapper,
        children: [
            (0, r.jsx)(i.Heading, {
                variant: "heading-lg/bold",
                className: _.subtitle,
                children: s,
            }),
            null != l &&
                (0, r.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    children: l,
                }),
        ],
    });
};
