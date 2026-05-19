s.d(t, { A: () => U });
var a = s(627968),
    i = s(64700),
    l = s(503698),
    n = s.n(l),
    r = s(284009),
    c = s.n(r),
    d = s(17928),
    o = s(534514),
    h = s(150934),
    u = s(192308),
    p = s(834730),
    A = s(293066),
    m = s(975571),
    v = s(428262),
    x = s(652215),
    L = s(375708),
    f = s(470330);
class S extends i.Component {
    state = {
        hasAcceptedEULA: !this.props.forceShow && this.props.hasPreviouslyAcceptedEULA,
        hasAcceptedWithdrawalWaiver: !1,
    };
    componentDidMount() {
        this.props.onChange(this.hasAcceptedNeccessaryTerms(this.props, this.state));
    }
    componentDidUpdate(e, t) {
        let s = this.hasAcceptedNeccessaryTerms(e, t),
            a = this.hasAcceptedNeccessaryTerms(this.props, this.state);
        a !== s && this.props.onChange(a);
    }
    hasAcceptedNeccessaryTerms(e, t) {
        return (null == e.eulaId || t.hasAcceptedEULA) && (!e.showWithdrawalWaiver || t.hasAcceptedWithdrawalWaiver);
    }
    render() {
        let {
                eulaId: e,
                applicationName: t,
                hasPreviouslyAcceptedEULA: i,
                forceShow: l,
                disabled: r,
                className: d,
                finePrint: p,
                showPricingLink: A,
                showWithdrawalWaiver: v,
                isTrial: S,
                isDiscount: U,
                subscriptionPlan: b,
                finePrintClassname: g,
            } = this.props,
            { hasAcceptedEULA: C, hasAcceptedWithdrawalWaiver: j } = this.state;
        return (c()(!S || null != b, "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true"),
        l || (null != e && !i) || v)
            ? (0, a.jsxs)("div", {
                  className: d,
                  children: [
                      v &&
                          (0, a.jsx)(o.D, {
                              variant: "heading-md/semibold",
                              className: f.Hc,
                              children: L.intl.string(L.t.Ogvn5o),
                          }),
                      null != e && (l || !i)
                          ? (0, a.jsx)(h.S, {
                                checked: C,
                                onChange: (e) => this.setState({ hasAcceptedEULA: e }),
                                disabled: r,
                                label: L.intl.format(L.t.IodJKT, {
                                    applicationName: t,
                                    onClick: (t) => {
                                        (0, u.openModalLazy)(async () => {
                                            let { default: t } = await Promise.all([
                                                s.e("63897"),
                                                s.e("13498"),
                                                s.e("25539"),
                                                s.e("71568"),
                                                s.e("64615"),
                                                s.e("92064"),
                                                s.e("87297"),
                                            ]).then(s.bind(s, 294264));
                                            return (s) => (0, a.jsx)(t, { eulaId: e, ...s });
                                        }),
                                            t.preventDefault();
                                    },
                                }),
                            })
                          : null,
                      null == p ? null : (0, a.jsx)("div", { className: n()(f.aO, g), children: p }),
                      v
                          ? (0, a.jsxs)("div", {
                                className: d,
                                children: [
                                    (0, a.jsx)(h.S, {
                                        checked: j,
                                        onChange: (e) => this.setState({ hasAcceptedWithdrawalWaiver: e }),
                                        disabled: r,
                                        label: L.intl.string(L.t["DFCVN+"]),
                                    }),
                                    (0, a.jsx)("div", { className: f.aO, children: L.intl.string(L.t.jhu6zm) }),
                                ],
                            })
                          : null,
                      A &&
                          (0, a.jsxs)("div", {
                              className: f.aO,
                              children: [
                                  "*",
                                  L.intl.format(L.t["5zmY3F"], {
                                      documentationLink: m.A.getArticleURL(x.MVz.LOCALIZED_PRICING),
                                  }),
                              ],
                          }),
                      (0, a.jsx)(E, { isTrial: S, subscriptionPlan: b, isDiscount: U }),
                  ],
              })
            : null;
    }
}
function E(e) {
    let { isTrial: t, subscriptionPlan: s, isDiscount: i } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            t &&
                null != s &&
                (0, a.jsx)(p.E, {
                    variant: "text-xs/medium",
                    color: "interactive-text-default",
                    children: L.intl.format(L.t["Hvo/Z5"], {
                        buttonText: (0, v.ff)(null, s),
                        interval: v.Ay.formatInterval(s?.interval),
                        cancelSubscriptionArticle: m.A.getArticleURL(x.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                        paidServiceTermsArticle: m.A.getArticleURL(x.MVz.PAID_TERMS),
                    }),
                }),
            i &&
                null != s &&
                (0, a.jsx)(p.E, {
                    variant: "text-xs/medium",
                    color: "interactive-text-default",
                    children: L.intl.format(L.t["Z2c+aV"], {
                        buttonText: (0, v.ff)(null, s),
                        interval: v.Ay.formatInterval(s?.interval),
                        cancelSubscriptionArticle: m.A.getArticleURL(x.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                        paidServiceTermsArticle: m.A.getArticleURL(x.MVz.PAID_TERMS),
                    }),
                }),
        ],
    });
}
let U = d.Ay.connectStores([A.A], (e) => {
    let { eulaId: t } = e;
    return { hasPreviouslyAcceptedEULA: null != t && A.A.hasAcceptedEULA(t) };
})(S);
