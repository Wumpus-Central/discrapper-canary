n.d(t, {
    Gv: () => p,
    Wo: () => f,
    vB: () => h
}),
    n(388685),
    n(539854);
var r = n(217986),
    i = n(133080),
    a = n(63063),
    o = n(937615),
    s = n(981631),
    l = n(231338),
    c = n(388032);
let u = new Set([l.pK.ARS, l.pK.CLP, l.pK.COP]),
    d = new Set([l.pK.USD, l.pK.JPY]),
    f = {
        [s.HeQ.CARD]: () => c.intl.string(c.t['ei5/p6']),
        [s.HeQ.PAYPAL]: () => c.intl.string(c.t['2dgEq6']),
        [s.HeQ.SOFORT]: () => c.intl.string(c.t['edKX//']),
        [s.HeQ.GIROPAY]: () => c.intl.string(c.t['y+0MQU']),
        [s.HeQ.PRZELEWY24]: () => c.intl.string(c.t.u25uLy),
        [s.HeQ.PAYSAFE_CARD]: () => c.intl.string(c.t.boznHB),
        [s.HeQ.GCASH]: () => c.intl.string(c.t.PjehcH),
        [s.HeQ.GRABPAY_MY]: () => c.intl.string(c.t.T5davL),
        [s.HeQ.MOMO_WALLET]: () => c.intl.string(c.t.J0A1Vl),
        [s.HeQ.VENMO]: () => c.intl.string(c.t.jYOezc),
        [s.HeQ.KAKAOPAY]: () => c.intl.string(c.t.CSVexs),
        [s.HeQ.GOPAY_WALLET]: () => c.intl.string(c.t['43J8JC']),
        [s.HeQ.BANCONTACT]: () => c.intl.string(c.t['1ITkfn']),
        [s.HeQ.EPS]: () => c.intl.string(c.t['5BSDU1']),
        [s.HeQ.IDEAL]: () => c.intl.string(c.t.nSbwqK),
        [s.HeQ.CASH_APP]: () => c.intl.string(c.t['+rbTmJ']),
        [s.HeQ.APPLE]: () => c.intl.string(c.t.RFi12t)
    },
    _ = [s.HeQ.EPS, s.HeQ.BANCONTACT, s.HeQ.IDEAL, s.HeQ.SOFORT, s.HeQ.GIROPAY, s.HeQ.SEPA_DEBIT, s.HeQ.PAYSAFE_CARD],
    p = (e, t, n, r) => {
        if (null == e) return '';
        let a = (0, i.q9)(e);
        return t === l.pK.EUR ? (n ? c.intl.formatToPlainString(c.t['+5bXbW'], { country: a }) : c.intl.formatToPlainString(c.t['0jblPj'], { currencyISOCode: t.toUpperCase() })) : r ? c.intl.formatToPlainString(c.t['dBFL//'], { countryName: a }) : c.intl.formatToPlainString(c.t.RJ4939, { country: a });
    },
    h = (e) => {
        let { localizedPricingPromo: t, subscription: n, forceSingleLine: r = !1, userLocale: p } = e,
            { countryCode: h, amount: g, currency: E, paymentSourceTypes: b } = t,
            y = 0 !== b.length,
            O = m(h),
            v = (0, o.T4)(g, E, {
                style: 'currency',
                currency: E,
                currencyDisplay: 'symbol',
                localeOverride: O
            }),
            I = c.intl.format(c.t['4cHbQ0'], {
                helpCenterLink: a.Z.getArticleURL(s.BhN.LOCALIZED_PRICING),
                currencyISOCode: E.toUpperCase(),
                localizedPriceWithCurrencySymbol: v
            });
        if (
            (d.has(E) &&
                (I = c.intl.format(c.t['5kvQMz'], {
                    helpCenterLink: a.Z.getArticleURL(s.BhN.LOCALIZED_PRICING),
                    localizedPriceWithCurrencySymbol: v
                })),
            u.has(E) &&
                (I = c.intl.format(c.t.BrYPGh, {
                    helpCenterLink: a.Z.getArticleURL(s.BhN.LOCALIZED_PRICING),
                    currencyISOCode: E.toUpperCase(),
                    localizedPriceWithCurrencySymbol: v
                })),
            null == n ||
                n.hasPremiumNitroMonthly ||
                (I = c.intl.format(c.t.xnD0NT, {
                    helpCenterLink: a.Z.getArticleURL(s.BhN.LOCALIZED_PRICING),
                    currencyISOCode: E.toUpperCase()
                })),
            E === l.pK.EUR &&
                (I = r
                    ? c.intl.format(c.t.o60rUF, {
                          country: (0, i.q9)(h),
                          currencyISOCode: E.toUpperCase(),
                          helpCenterLink: a.Z.getArticleURL(s.BhN.LOCALIZED_PRICING)
                      })
                    : c.intl.format(c.t['N1xw/f'], {
                          currencyISOCode: E.toUpperCase(),
                          helpCenterLink: a.Z.getArticleURL(s.BhN.LOCALIZED_PRICING)
                      })),
            y && 1)
        ) {
            let e = [..._.filter((e) => b.includes(e)), ...b.filter((e) => !_.includes(e))].slice(0, 2).map((e) => {
                var t, n;
                return null != (n = null == (t = f[e]) ? void 0 : t.call(f)) ? n : c.intl.string(c.t.jdPblp);
            });
            b.length >= 3 && e.push(c.intl.string(c.t.Tp5NkZ));
            let t = new Intl.ListFormat(p, {
                style: 'short',
                type: 'conjunction'
            });
            I = c.intl.format(c.t.QqRQPj, {
                helpCenterLink: a.Z.getArticleURL(s.BhN.LOCALIZED_PRICING),
                paymentMethods: t.format(e)
            });
        }
        return {
            localizedPricingBannerHeader: c.intl.formatToPlainString(c.t.BuFSam, { country: (0, i.q9)(h) }),
            localizedPricingBannerBody: I,
            localizedPricingBannerLinkOnly: c.intl.format(c.t.XufWPj, { helpCenterLink: a.Z.getArticleURL(s.BhN.LOCALIZED_PRICING) }),
            localizedPricingBannerSubNotif: y ? void 0 : c.intl.string(c.t.YDdBe3)
        };
    },
    m = (e) => {
        let t = r.Z.find((t) => t.alpha2 === e);
        return null == t ? void 0 : t.localeForICU;
    };
