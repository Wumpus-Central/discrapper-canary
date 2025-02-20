n.d(t, {
    Gv: () => _,
    Wo: () => f,
    vB: () => h
}),
    n(47120),
    n(653041);
var r = n(217986),
    i = n(133080),
    o = n(63063),
    a = n(937615),
    s = n(981631),
    l = n(231338),
    c = n(388032);
let u = new Set([l.pK.ARS, l.pK.CLP, l.pK.COP]),
    d = new Set([l.pK.USD, l.pK.JPY]),
    f = {
        [s.HeQ.CARD]: () => c.NW.string(c.t['ei5/p6']),
        [s.HeQ.PAYPAL]: () => c.NW.string(c.t['2dgEq6']),
        [s.HeQ.SOFORT]: () => c.NW.string(c.t['edKX//']),
        [s.HeQ.GIROPAY]: () => c.NW.string(c.t['y+0MQU']),
        [s.HeQ.PRZELEWY24]: () => c.NW.string(c.t.u25uLy),
        [s.HeQ.PAYSAFE_CARD]: () => c.NW.string(c.t.boznHB),
        [s.HeQ.GCASH]: () => c.NW.string(c.t.PjehcH),
        [s.HeQ.GRABPAY_MY]: () => c.NW.string(c.t.T5davL),
        [s.HeQ.MOMO_WALLET]: () => c.NW.string(c.t.J0A1Vl),
        [s.HeQ.VENMO]: () => c.NW.string(c.t.jYOezc),
        [s.HeQ.KAKAOPAY]: () => c.NW.string(c.t.CSVexs),
        [s.HeQ.GOPAY_WALLET]: () => c.NW.string(c.t['43J8JC']),
        [s.HeQ.BANCONTACT]: () => c.NW.string(c.t['1ITkfn']),
        [s.HeQ.EPS]: () => c.NW.string(c.t['5BSDU1']),
        [s.HeQ.IDEAL]: () => c.NW.string(c.t.nSbwqK),
        [s.HeQ.CASH_APP]: () => c.NW.string(c.t['+rbTmJ']),
        [s.HeQ.APPLE]: () => c.NW.string(c.t.RFi12t)
    },
    p = [s.HeQ.EPS, s.HeQ.BANCONTACT, s.HeQ.IDEAL, s.HeQ.SOFORT, s.HeQ.GIROPAY, s.HeQ.SEPA_DEBIT, s.HeQ.PAYSAFE_CARD],
    _ = (e, t, n, r) => {
        if (null == e) return '';
        let o = (0, i.q9)(e);
        return t === l.pK.EUR ? (n ? c.NW.formatToPlainString(c.t['+5bXbW'], { country: o }) : c.NW.formatToPlainString(c.t['0jblPj'], { currencyISOCode: t.toUpperCase() })) : r ? c.NW.formatToPlainString(c.t['dBFL//'], { countryName: o }) : c.NW.formatToPlainString(c.t.RJ4939, { country: o });
    },
    h = (e) => {
        let { localizedPricingPromo: t, subscription: n, forceSingleLine: r = !1, userLocale: _ } = e,
            { countryCode: h, amount: g, currency: E, paymentSourceTypes: v } = t,
            b = 0 !== v.length,
            y = m(h),
            O = (0, a.T4)(g, E, {
                style: 'currency',
                currency: E,
                currencyDisplay: 'symbol',
                localeOverride: y
            }),
            S = c.NW.format(c.t['4cHbQ0'], {
                helpCenterLink: o.Z.getArticleURL(s.BhN.LOCALIZED_PRICING),
                currencyISOCode: E.toUpperCase(),
                localizedPriceWithCurrencySymbol: O
            });
        if (
            (d.has(E) &&
                (S = c.NW.format(c.t['5kvQMz'], {
                    helpCenterLink: o.Z.getArticleURL(s.BhN.LOCALIZED_PRICING),
                    localizedPriceWithCurrencySymbol: O
                })),
            u.has(E) &&
                (S = c.NW.format(c.t.BrYPGh, {
                    helpCenterLink: o.Z.getArticleURL(s.BhN.LOCALIZED_PRICING),
                    currencyISOCode: E.toUpperCase(),
                    localizedPriceWithCurrencySymbol: O
                })),
            null == n ||
                n.hasPremiumNitroMonthly ||
                (S = c.NW.format(c.t.xnD0NT, {
                    helpCenterLink: o.Z.getArticleURL(s.BhN.LOCALIZED_PRICING),
                    currencyISOCode: E.toUpperCase()
                })),
            E === l.pK.EUR &&
                (S = r
                    ? c.NW.format(c.t.o60rUF, {
                          country: (0, i.q9)(h),
                          currencyISOCode: E.toUpperCase(),
                          helpCenterLink: o.Z.getArticleURL(s.BhN.LOCALIZED_PRICING)
                      })
                    : c.NW.format(c.t['N1xw/f'], {
                          currencyISOCode: E.toUpperCase(),
                          helpCenterLink: o.Z.getArticleURL(s.BhN.LOCALIZED_PRICING)
                      })),
            b)
        ) {
            let e = [...p.filter((e) => v.includes(e)), ...v.filter((e) => !p.includes(e))].slice(0, 2).map((e) => {
                var t, n;
                return null !== (n = null === (t = f[e]) || void 0 === t ? void 0 : t.call(f)) && void 0 !== n ? n : c.NW.string(c.t.jdPblp);
            });
            v.length >= 3 && e.push(c.NW.string(c.t.Tp5NkZ));
            let t = new Intl.ListFormat(_, {
                style: 'short',
                type: 'conjunction'
            });
            S = c.NW.format(c.t.QqRQPj, {
                helpCenterLink: o.Z.getArticleURL(s.BhN.LOCALIZED_PRICING),
                paymentMethods: t.format(e)
            });
        }
        return {
            localizedPricingBannerHeader: c.NW.formatToPlainString(c.t.BuFSam, { country: (0, i.q9)(h) }),
            localizedPricingBannerBody: S,
            localizedPricingBannerLinkOnly: c.NW.format(c.t.XufWPj, { helpCenterLink: o.Z.getArticleURL(s.BhN.LOCALIZED_PRICING) }),
            localizedPricingBannerSubNotif: b ? void 0 : c.NW.string(c.t.YDdBe3)
        };
    },
    m = (e) => {
        let t = r.Z.find((t) => t.alpha2 === e);
        return null == t ? void 0 : t.localeForICU;
    };
