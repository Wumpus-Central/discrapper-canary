l.d(t, { A: () => v });
var s = l(627968),
    n = l(64700),
    a = l(503698),
    i = l.n(a),
    r = l(284009),
    c = l.n(r),
    o = l(17928),
    u = l(534514),
    d = l(150934),
    h = l(192308),
    p = l(834730),
    A = l(293066),
    f = l(975571),
    m = l(927578),
    I = l(652215),
    g = l(985018),
    L = l(470330);
class _ extends n.Component {
    state = {
        hasAcceptedEULA: !this.props.forceShow && this.props.hasPreviouslyAcceptedEULA,
        hasAcceptedWithdrawalWaiver: !1,
    };
    componentDidMount() {
        this.props.onChange(this.hasAcceptedNeccessaryTerms(this.props, this.state));
    }
    componentDidUpdate(e, t) {
        let l = this.hasAcceptedNeccessaryTerms(e, t),
            s = this.hasAcceptedNeccessaryTerms(this.props, this.state);
        s !== l && this.props.onChange(s);
    }
    hasAcceptedNeccessaryTerms(e, t) {
        return (null == e.eulaId || t.hasAcceptedEULA) && (!e.showWithdrawalWaiver || t.hasAcceptedWithdrawalWaiver);
    }
    render() {
        let {
                eulaId: e,
                applicationName: t,
                hasPreviouslyAcceptedEULA: n,
                forceShow: a,
                disabled: r,
                className: o,
                finePrint: p,
                showPricingLink: A,
                showWithdrawalWaiver: m,
                isTrial: _,
                isDiscount: v,
                subscriptionPlan: S,
                finePrintClassname: x,
            } = this.props,
            { hasAcceptedEULA: T, hasAcceptedWithdrawalWaiver: C } = this.state;
        return (c()(!_ || null != S, "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true"),
        a || (null != e && !n) || m)
            ? (0, s.jsxs)("div", {
                  className: o,
                  children: [
                      m &&
                          (0, s.jsx)(u.D, {
                              variant: "heading-md/semibold",
                              className: L.Hc,
                              children: g.intl.string(g.t.Ogvn5o),
                          }),
                      null != e && (a || !n)
                          ? (0, s.jsx)(d.S, {
                                checked: T,
                                onChange: (e) => this.setState({ hasAcceptedEULA: e }),
                                disabled: r,
                                label: g.intl.format(g.t.IodJKT, {
                                    applicationName: t,
                                    onClick: (t) => {
                                        (0, h.openModalLazy)(async () => {
                                            let { default: t } = await Promise.all([l.e("64615"), l.e("1963")]).then(
                                                l.bind(l, 294264),
                                            );
                                            return (l) => (0, s.jsx)(t, { eulaId: e, ...l });
                                        }),
                                            t.preventDefault();
                                    },
                                }),
                            })
                          : null,
                      null == p ? null : (0, s.jsx)("div", { className: i()(L.aO, x), children: p }),
                      m
                          ? (0, s.jsxs)("div", {
                                className: o,
                                children: [
                                    (0, s.jsx)(d.S, {
                                        checked: C,
                                        onChange: (e) => this.setState({ hasAcceptedWithdrawalWaiver: e }),
                                        disabled: r,
                                        label: g.intl.string(g.t["DFCVN+"]),
                                    }),
                                    (0, s.jsx)("div", { className: L.aO, children: g.intl.string(g.t.jhu6zm) }),
                                ],
                            })
                          : null,
                      A &&
                          (0, s.jsxs)("div", {
                              className: L.aO,
                              children: [
                                  "*",
                                  g.intl.format(g.t["5zmY3F"], {
                                      documentationLink: f.A.getArticleURL(I.MVz.LOCALIZED_PRICING),
                                  }),
                              ],
                          }),
                      (0, s.jsx)(E, { isTrial: _, subscriptionPlan: S, isDiscount: v }),
                  ],
              })
            : null;
    }
}
function E(e) {
    let { isTrial: t, subscriptionPlan: l, isDiscount: n } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            t &&
                null != l &&
                (0, s.jsx)(p.E, {
                    variant: "text-xs/medium",
                    color: "interactive-text-default",
                    children: g.intl.format(g.t["Hvo/Z5"], {
                        buttonText: (0, m.ff)(null, l),
                        interval: m.Ay.formatInterval(l?.interval),
                        cancelSubscriptionArticle: f.A.getArticleURL(I.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                        paidServiceTermsArticle: f.A.getArticleURL(I.MVz.PAID_TERMS),
                    }),
                }),
            n &&
                null != l &&
                (0, s.jsx)(p.E, {
                    variant: "text-xs/medium",
                    color: "interactive-text-default",
                    children: g.intl.format(g.t["Z2c+aV"], {
                        buttonText: (0, m.ff)(null, l),
                        interval: m.Ay.formatInterval(l?.interval),
                        cancelSubscriptionArticle: f.A.getArticleURL(I.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                        paidServiceTermsArticle: f.A.getArticleURL(I.MVz.PAID_TERMS),
                    }),
                }),
        ],
    });
}
let v = o.Ay.connectStores([A.A], (e) => {
    let { eulaId: t } = e;
    return { hasPreviouslyAcceptedEULA: null != t && A.A.hasAcceptedEULA(t) };
})(_);
