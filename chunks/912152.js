n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var s = n(481060),
    r = n(230711),
    l = n(63063),
    a = n(74538),
    o = n(937615),
    c = n(981631),
    d = n(474936),
    u = n(388032),
    m = n(130469);
let h = function (e) {
    let { hasAppliedGuildBoosts: t, hasBoostPerk: n, hasGuildAffinitiesOrInGuild: h, subscriptionIsPausedOrPausePending: g } = e,
        { subtitle: x, flavor: _ } = (function (e) {
            let { hasAppliedGuildBoosts: t, hasBoostPerk: n, hasGuildAffinitiesOrInGuild: i, subscriptionIsPausedOrPausePending: s } = e;
            if (s) return { flavor: u.intl.format(u.t.doslJi, { onClick: () => r.Z.open(c.oAB.SUBSCRIPTIONS) }) };
            if (!i) return { subtitle: u.intl.string(u.t.oiWYAQ) };
            if (t)
                return {
                    subtitle: u.intl.string(u.t.W5rDjY),
                    flavor: u.intl.format(u.t.cUHcaW, { helpdeskArticle: l.Z.getArticleURL(c.BhN.GUILD_SUBSCRIPTIONS) })
                };
            let m = d.GP[d.Xh.PREMIUM_MONTH_GUILD],
                h = a.ZP.getDefaultPrice(m.id, n),
                g = (0, o.og)((0, o.T4)(h.amount, h.currency), m.interval, m.intervalCount);
            return {
                subtitle: n ? u.intl.string(u.t.bhPzXV) : u.intl.string(u.t.Zs9h9f),
                flavor: u.intl.formatToPlainString(u.t.PGgTdH, { monthlyGuildBoostPrice: g })
            };
        })({
            hasAppliedGuildBoosts: t,
            hasBoostPerk: n,
            hasGuildAffinitiesOrInGuild: h,
            subscriptionIsPausedOrPausePending: g
        });
    return (0, i.jsxs)('div', {
        className: m.wrapper,
        children: [
            (0, i.jsx)(s.X6q, {
                variant: 'heading-lg/bold',
                className: m.subtitle,
                children: x
            }),
            null != _ &&
                (0, i.jsx)(s.Text, {
                    variant: 'text-sm/normal',
                    children: _
                })
        ]
    });
};
