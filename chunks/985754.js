r.d(n, {
    Gv: function () {
        return g;
    },
    Wo: function () {
        return _;
    },
    vB: function () {
        return E;
    }
});
var i = r(47120);
var a = r(653041);
var o = r(217986),
    s = r(133080),
    l = r(63063),
    u = r(937615),
    c = r(981631),
    d = r(231338),
    f = r(388032);
let p = new Set([d.pK.ARS, d.pK.CLP, d.pK.COP]),
    h = new Set([d.pK.USD, d.pK.JPY]),
    _ = {
        [c.HeQ.CARD]: () => f.intl.string(f.t['ei5/p6']),
        [c.HeQ.PAYPAL]: () => f.intl.string(f.t['2dgEq6']),
        [c.HeQ.SOFORT]: () => f.intl.string(f.t['edKX//']),
        [c.HeQ.GIROPAY]: () => f.intl.string(f.t['y+0MQU']),
        [c.HeQ.PRZELEWY24]: () => f.intl.string(f.t.u25uLy),
        [c.HeQ.PAYSAFE_CARD]: () => f.intl.string(f.t.boznHB),
        [c.HeQ.GCASH]: () => f.intl.string(f.t.PjehcH),
        [c.HeQ.GRABPAY_MY]: () => f.intl.string(f.t.T5davL),
        [c.HeQ.MOMO_WALLET]: () => f.intl.string(f.t.J0A1Vl),
        [c.HeQ.VENMO]: () => f.intl.string(f.t.jYOezc),
        [c.HeQ.KAKAOPAY]: () => f.intl.string(f.t.CSVexs),
        [c.HeQ.GOPAY_WALLET]: () => f.intl.string(f.t['43J8JC']),
        [c.HeQ.BANCONTACT]: () => f.intl.string(f.t['1ITkfn']),
        [c.HeQ.EPS]: () => f.intl.string(f.t['5BSDU1']),
        [c.HeQ.IDEAL]: () => f.intl.string(f.t.nSbwqK),
        [c.HeQ.CASH_APP]: () => f.intl.string(f.t['+rbTmJ']),
        [c.HeQ.APPLE]: () => f.intl.string(f.t.RFi12t)
    },
    m = [c.HeQ.EPS, c.HeQ.BANCONTACT, c.HeQ.IDEAL, c.HeQ.SOFORT, c.HeQ.GIROPAY, c.HeQ.SEPA_DEBIT, c.HeQ.PAYSAFE_CARD],
    g = (e, n, r, i) => {
        if (null == e) return '';
        let a = (0, s.q9)(e);
        if (n === d.pK.EUR) return r ? f.intl.formatToPlainString(f.t['+5bXbW'], { country: a }) : f.intl.formatToPlainString(f.t['0jblPj'], { currencyISOCode: n.toUpperCase() });
        return i ? f.intl.formatToPlainString(f.t['dBFL//'], { countryName: a }) : f.intl.formatToPlainString(f.t.RJ4939, { country: a });
    },
    E = (e) => {
        let { localizedPricingPromo: n, subscription: r, forceSingleLine: i = !1, userLocale: a } = e,
            { countryCode: o, amount: g, currency: E, paymentSourceTypes: y } = n,
            b = 0 !== y.length,
            I = v(o),
            T = (0, u.T4)(g, E, {
                style: 'currency',
                currency: E,
                currencyDisplay: 'symbol',
                localeOverride: I
            }),
            S = f.intl.format(f.t['4cHbQ0'], {
                helpCenterLink: l.Z.getArticleURL(c.BhN.LOCALIZED_PRICING),
                currencyISOCode: E.toUpperCase(),
                localizedPriceWithCurrencySymbol: T
            });
        if (
            (h.has(E) &&
                (S = f.intl.format(f.t['5kvQMz'], {
                    helpCenterLink: l.Z.getArticleURL(c.BhN.LOCALIZED_PRICING),
                    localizedPriceWithCurrencySymbol: T
                })),
            p.has(E) &&
                (S = f.intl.format(f.t.BrYPGh, {
                    helpCenterLink: l.Z.getArticleURL(c.BhN.LOCALIZED_PRICING),
                    currencyISOCode: E.toUpperCase(),
                    localizedPriceWithCurrencySymbol: T
                })),
            null != r &&
                !r.hasPremiumNitroMonthly &&
                (S = f.intl.format(f.t.xnD0NT, {
                    helpCenterLink: l.Z.getArticleURL(c.BhN.LOCALIZED_PRICING),
                    currencyISOCode: E.toUpperCase()
                })),
            E === d.pK.EUR &&
                (S = i
                    ? f.intl.format(f.t.o60rUF, {
                          country: (0, s.q9)(o),
                          currencyISOCode: E.toUpperCase(),
                          helpCenterLink: l.Z.getArticleURL(c.BhN.LOCALIZED_PRICING)
                      })
                    : f.intl.format(f.t['N1xw/f'], {
                          currencyISOCode: E.toUpperCase(),
                          helpCenterLink: l.Z.getArticleURL(c.BhN.LOCALIZED_PRICING)
                      })),
            b)
        ) {
            let e = m.filter((e) => y.includes(e)),
                n = [...e, ...y.filter((e) => !m.includes(e))].slice(0, 2).map((e) => {
                    var n, r;
                    return null !== (r = null === (n = _[e]) || void 0 === n ? void 0 : n.call(_)) && void 0 !== r ? r : f.intl.string(f.t.jdPblp);
                });
            y.length >= 3 && n.push(f.intl.string(f.t.Tp5NkZ));
            let r = new Intl.ListFormat(a, {
                style: 'short',
                type: 'conjunction'
            });
            S = f.intl.format(f.t.QqRQPj, {
                helpCenterLink: l.Z.getArticleURL(c.BhN.LOCALIZED_PRICING),
                paymentMethods: r.format(n)
            });
        }
        return {
            localizedPricingBannerHeader: f.intl.formatToPlainString(f.t.BuFSam, { country: (0, s.q9)(o) }),
            localizedPricingBannerBody: S,
            localizedPricingBannerLinkOnly: f.intl.format(f.t.XufWPj, { helpCenterLink: l.Z.getArticleURL(c.BhN.LOCALIZED_PRICING) }),
            localizedPricingBannerSubNotif: b ? void 0 : f.intl.string(f.t.YDdBe3)
        };
    },
    v = (e) => {
        let n = o.Z.find((n) => n.alpha2 === e);
        return null == n ? void 0 : n.localeForICU;
    };
