n.d(t, {
    Gv: () => p,
    Wo: () => f,
    vB: () => h
}),
    n(47120),
    n(653041);
var i = n(217986),
    r = n(133080),
    a = n(63063),
    s = n(937615),
    o = n(981631),
    l = n(231338),
    u = n(388032);
let c = new Set([l.pK.ARS, l.pK.CLP, l.pK.COP]),
    d = new Set([l.pK.USD, l.pK.JPY]),
    f = {
        [o.HeQ.CARD]: () => u.intl.string(u.t['ei5/p6']),
        [o.HeQ.PAYPAL]: () => u.intl.string(u.t['2dgEq6']),
        [o.HeQ.SOFORT]: () => u.intl.string(u.t['edKX//']),
        [o.HeQ.GIROPAY]: () => u.intl.string(u.t['y+0MQU']),
        [o.HeQ.PRZELEWY24]: () => u.intl.string(u.t.u25uLy),
        [o.HeQ.PAYSAFE_CARD]: () => u.intl.string(u.t.boznHB),
        [o.HeQ.GCASH]: () => u.intl.string(u.t.PjehcH),
        [o.HeQ.GRABPAY_MY]: () => u.intl.string(u.t.T5davL),
        [o.HeQ.MOMO_WALLET]: () => u.intl.string(u.t.J0A1Vl),
        [o.HeQ.VENMO]: () => u.intl.string(u.t.jYOezc),
        [o.HeQ.KAKAOPAY]: () => u.intl.string(u.t.CSVexs),
        [o.HeQ.GOPAY_WALLET]: () => u.intl.string(u.t['43J8JC']),
        [o.HeQ.BANCONTACT]: () => u.intl.string(u.t['1ITkfn']),
        [o.HeQ.EPS]: () => u.intl.string(u.t['5BSDU1']),
        [o.HeQ.IDEAL]: () => u.intl.string(u.t.nSbwqK),
        [o.HeQ.CASH_APP]: () => u.intl.string(u.t['+rbTmJ']),
        [o.HeQ.APPLE]: () => u.intl.string(u.t.RFi12t)
    },
    _ = [o.HeQ.EPS, o.HeQ.BANCONTACT, o.HeQ.IDEAL, o.HeQ.SOFORT, o.HeQ.GIROPAY, o.HeQ.SEPA_DEBIT, o.HeQ.PAYSAFE_CARD],
    p = (e, t, n, i) => {
        if (null == e) return '';
        let a = (0, r.q9)(e);
        return t === l.pK.EUR ? (n ? u.intl.formatToPlainString(u.t['+5bXbW'], { country: a }) : u.intl.formatToPlainString(u.t['0jblPj'], { currencyISOCode: t.toUpperCase() })) : i ? u.intl.formatToPlainString(u.t['dBFL//'], { countryName: a }) : u.intl.formatToPlainString(u.t.RJ4939, { country: a });
    },
    h = (e) => {
        let { localizedPricingPromo: t, subscription: n, forceSingleLine: i = !1, userLocale: p } = e,
            { countryCode: h, amount: g, currency: E, paymentSourceTypes: v } = t,
            y = 0 !== v.length,
            I = m(h),
            b = (0, s.T4)(g, E, {
                style: 'currency',
                currency: E,
                currencyDisplay: 'symbol',
                localeOverride: I
            }),
            T = u.intl.format(u.t['4cHbQ0'], {
                helpCenterLink: a.Z.getArticleURL(o.BhN.LOCALIZED_PRICING),
                currencyISOCode: E.toUpperCase(),
                localizedPriceWithCurrencySymbol: b
            });
        if (
            (d.has(E) &&
                (T = u.intl.format(u.t['5kvQMz'], {
                    helpCenterLink: a.Z.getArticleURL(o.BhN.LOCALIZED_PRICING),
                    localizedPriceWithCurrencySymbol: b
                })),
            c.has(E) &&
                (T = u.intl.format(u.t.BrYPGh, {
                    helpCenterLink: a.Z.getArticleURL(o.BhN.LOCALIZED_PRICING),
                    currencyISOCode: E.toUpperCase(),
                    localizedPriceWithCurrencySymbol: b
                })),
            null == n ||
                n.hasPremiumNitroMonthly ||
                (T = u.intl.format(u.t.xnD0NT, {
                    helpCenterLink: a.Z.getArticleURL(o.BhN.LOCALIZED_PRICING),
                    currencyISOCode: E.toUpperCase()
                })),
            E === l.pK.EUR &&
                (T = i
                    ? u.intl.format(u.t.o60rUF, {
                          country: (0, r.q9)(h),
                          currencyISOCode: E.toUpperCase(),
                          helpCenterLink: a.Z.getArticleURL(o.BhN.LOCALIZED_PRICING)
                      })
                    : u.intl.format(u.t['N1xw/f'], {
                          currencyISOCode: E.toUpperCase(),
                          helpCenterLink: a.Z.getArticleURL(o.BhN.LOCALIZED_PRICING)
                      })),
            y)
        ) {
            let e = [..._.filter((e) => v.includes(e)), ...v.filter((e) => !_.includes(e))].slice(0, 2).map((e) => {
                var t, n;
                return null !== (n = null === (t = f[e]) || void 0 === t ? void 0 : t.call(f)) && void 0 !== n ? n : u.intl.string(u.t.jdPblp);
            });
            v.length >= 3 && e.push(u.intl.string(u.t.Tp5NkZ));
            let t = new Intl.ListFormat(p, {
                style: 'short',
                type: 'conjunction'
            });
            T = u.intl.format(u.t.QqRQPj, {
                helpCenterLink: a.Z.getArticleURL(o.BhN.LOCALIZED_PRICING),
                paymentMethods: t.format(e)
            });
        }
        return {
            localizedPricingBannerHeader: u.intl.formatToPlainString(u.t.BuFSam, { country: (0, r.q9)(h) }),
            localizedPricingBannerBody: T,
            localizedPricingBannerLinkOnly: u.intl.format(u.t.XufWPj, { helpCenterLink: a.Z.getArticleURL(o.BhN.LOCALIZED_PRICING) }),
            localizedPricingBannerSubNotif: y ? void 0 : u.intl.string(u.t.YDdBe3)
        };
    },
    m = (e) => {
        let t = i.Z.find((t) => t.alpha2 === e);
        return null == t ? void 0 : t.localeForICU;
    };
