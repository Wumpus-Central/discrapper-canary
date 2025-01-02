n.d(t, {
    Gv: function () {
        return h;
    },
    Wo: function () {
        return p;
    },
    vB: function () {
        return A;
    }
}),
    n(47120),
    n(653041);
var a = n(217986),
    r = n(133080),
    l = n(63063),
    s = n(937615),
    i = n(981631),
    o = n(231338),
    c = n(388032);
let u = new Set([o.pK.ARS, o.pK.CLP, o.pK.COP]),
    d = new Set([o.pK.USD, o.pK.JPY]),
    p = {
        [i.HeQ.CARD]: () => c.intl.string(c.t['ei5/p6']),
        [i.HeQ.PAYPAL]: () => c.intl.string(c.t['2dgEq6']),
        [i.HeQ.SOFORT]: () => c.intl.string(c.t['edKX//']),
        [i.HeQ.GIROPAY]: () => c.intl.string(c.t['y+0MQU']),
        [i.HeQ.PRZELEWY24]: () => c.intl.string(c.t.u25uLy),
        [i.HeQ.PAYSAFE_CARD]: () => c.intl.string(c.t.boznHB),
        [i.HeQ.GCASH]: () => c.intl.string(c.t.PjehcH),
        [i.HeQ.GRABPAY_MY]: () => c.intl.string(c.t.T5davL),
        [i.HeQ.MOMO_WALLET]: () => c.intl.string(c.t.J0A1Vl),
        [i.HeQ.VENMO]: () => c.intl.string(c.t.jYOezc),
        [i.HeQ.KAKAOPAY]: () => c.intl.string(c.t.CSVexs),
        [i.HeQ.GOPAY_WALLET]: () => c.intl.string(c.t['43J8JC']),
        [i.HeQ.BANCONTACT]: () => c.intl.string(c.t['1ITkfn']),
        [i.HeQ.EPS]: () => c.intl.string(c.t['5BSDU1']),
        [i.HeQ.IDEAL]: () => c.intl.string(c.t.nSbwqK),
        [i.HeQ.CASH_APP]: () => c.intl.string(c.t['+rbTmJ']),
        [i.HeQ.APPLE]: () => c.intl.string(c.t.RFi12t)
    },
    m = [i.HeQ.EPS, i.HeQ.BANCONTACT, i.HeQ.IDEAL, i.HeQ.SOFORT, i.HeQ.GIROPAY, i.HeQ.SEPA_DEBIT, i.HeQ.PAYSAFE_CARD],
    h = (e, t, n, a) => {
        if (null == e) return '';
        let l = (0, r.q9)(e);
        if (t === o.pK.EUR) return n ? c.intl.formatToPlainString(c.t['+5bXbW'], { country: l }) : c.intl.formatToPlainString(c.t['0jblPj'], { currencyISOCode: t.toUpperCase() });
        return a ? c.intl.formatToPlainString(c.t['dBFL//'], { countryName: l }) : c.intl.formatToPlainString(c.t.RJ4939, { country: l });
    },
    A = (e) => {
        let { localizedPricingPromo: t, subscription: n, forceSingleLine: a = !1, userLocale: h } = e,
            { countryCode: A, amount: N, currency: f, paymentSourceTypes: y } = t,
            _ = 0 !== y.length,
            P = E(A),
            b = (0, s.T4)(N, f, {
                style: 'currency',
                currency: f,
                currencyDisplay: 'symbol',
                localeOverride: P
            }),
            C = c.intl.format(c.t['4cHbQ0'], {
                helpCenterLink: l.Z.getArticleURL(i.BhN.LOCALIZED_PRICING),
                currencyISOCode: f.toUpperCase(),
                localizedPriceWithCurrencySymbol: b
            });
        if (
            (d.has(f) &&
                (C = c.intl.format(c.t['5kvQMz'], {
                    helpCenterLink: l.Z.getArticleURL(i.BhN.LOCALIZED_PRICING),
                    localizedPriceWithCurrencySymbol: b
                })),
            u.has(f) &&
                (C = c.intl.format(c.t.BrYPGh, {
                    helpCenterLink: l.Z.getArticleURL(i.BhN.LOCALIZED_PRICING),
                    currencyISOCode: f.toUpperCase(),
                    localizedPriceWithCurrencySymbol: b
                })),
            null != n &&
                !n.hasPremiumNitroMonthly &&
                (C = c.intl.format(c.t.xnD0NT, {
                    helpCenterLink: l.Z.getArticleURL(i.BhN.LOCALIZED_PRICING),
                    currencyISOCode: f.toUpperCase()
                })),
            f === o.pK.EUR &&
                (C = a
                    ? c.intl.format(c.t.o60rUF, {
                          country: (0, r.q9)(A),
                          currencyISOCode: f.toUpperCase(),
                          helpCenterLink: l.Z.getArticleURL(i.BhN.LOCALIZED_PRICING)
                      })
                    : c.intl.format(c.t['N1xw/f'], {
                          currencyISOCode: f.toUpperCase(),
                          helpCenterLink: l.Z.getArticleURL(i.BhN.LOCALIZED_PRICING)
                      })),
            _)
        ) {
            let e = m.filter((e) => y.includes(e)),
                t = [...e, ...y.filter((e) => !m.includes(e))].slice(0, 2).map((e) => {
                    var t, n;
                    return null !== (n = null === (t = p[e]) || void 0 === t ? void 0 : t.call(p)) && void 0 !== n ? n : c.intl.string(c.t.jdPblp);
                });
            y.length >= 3 && t.push(c.intl.string(c.t.Tp5NkZ));
            let n = new Intl.ListFormat(h, {
                style: 'short',
                type: 'conjunction'
            });
            C = c.intl.format(c.t.QqRQPj, {
                helpCenterLink: l.Z.getArticleURL(i.BhN.LOCALIZED_PRICING),
                paymentMethods: n.format(t)
            });
        }
        return {
            localizedPricingBannerHeader: c.intl.formatToPlainString(c.t.BuFSam, { country: (0, r.q9)(A) }),
            localizedPricingBannerBody: C,
            localizedPricingBannerLinkOnly: c.intl.format(c.t.XufWPj, { helpCenterLink: l.Z.getArticleURL(i.BhN.LOCALIZED_PRICING) }),
            localizedPricingBannerSubNotif: _ ? void 0 : c.intl.string(c.t.YDdBe3)
        };
    },
    E = (e) => {
        let t = a.Z.find((t) => t.alpha2 === e);
        return null == t ? void 0 : t.localeForICU;
    };
