n.d(t, { A: () => S });
var l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(284009),
    o = n.n(s),
    u = n(311907),
    c = n(534514),
    d = n(150934),
    p = n(192308),
    m = n(834730),
    h = n(293066),
    A = n(975571),
    _ = n(927578),
    C = n(652215),
    E = n(985018),
    y = n(470330);
class f extends i.Component {
    state = {
        hasAcceptedEULA: !this.props.forceShow && this.props.hasPreviouslyAcceptedEULA,
        hasAcceptedWithdrawalWaiver: !1,
    };
    componentDidMount() {
        this.props.onChange(this.hasAcceptedNeccessaryTerms(this.props, this.state));
    }
    componentDidUpdate(e, t) {
        let n = this.hasAcceptedNeccessaryTerms(e, t),
            l = this.hasAcceptedNeccessaryTerms(this.props, this.state);
        l !== n && this.props.onChange(l);
    }
    hasAcceptedNeccessaryTerms(e, t) {
        return (null == e.eulaId || t.hasAcceptedEULA) && (!e.showWithdrawalWaiver || t.hasAcceptedWithdrawalWaiver);
    }
    render() {
        let {
                eulaId: e,
                applicationName: t,
                hasPreviouslyAcceptedEULA: i,
                forceShow: a,
                disabled: s,
                className: u,
                finePrint: m,
                showPricingLink: h,
                showWithdrawalWaiver: _,
                isTrial: f,
                isDiscount: S,
                subscriptionPlan: x,
                finePrintClassname: T,
            } = this.props,
            { hasAcceptedEULA: N, hasAcceptedWithdrawalWaiver: g } = this.state;
        return (o()(!f || null != x, "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true"),
        a || (null != e && !i) || _)
            ? (0, l.jsxs)("div", {
                  className: u,
                  children: [
                      _ &&
                          (0, l.jsx)(c.D, {
                              variant: "heading-md/semibold",
                              className: y.Hc,
                              children: E.intl.string(E.t.Ogvn5o),
                          }),
                      null != e && (a || !i)
                          ? (0, l.jsx)(d.S, {
                                checked: N,
                                onChange: (e) => this.setState({ hasAcceptedEULA: e }),
                                disabled: s,
                                label: E.intl.format(E.t.IodJKT, {
                                    applicationName: t,
                                    onClick: (t) => {
                                        (0, p.openModalLazy)(async () => {
                                            let { default: t } = await Promise.all([n.e("70994"), n.e("55699")]).then(
                                                n.bind(n, 698336),
                                            );
                                            return (n) => (0, l.jsx)(t, { eulaId: e, ...n });
                                        }),
                                            t.preventDefault();
                                    },
                                }),
                            })
                          : null,
                      null == m ? null : (0, l.jsx)("div", { className: r()(y.aO, T), children: m }),
                      _
                          ? (0, l.jsxs)("div", {
                                className: u,
                                children: [
                                    (0, l.jsx)(d.S, {
                                        checked: g,
                                        onChange: (e) => this.setState({ hasAcceptedWithdrawalWaiver: e }),
                                        disabled: s,
                                        label: E.intl.string(E.t["DFCVN+"]),
                                    }),
                                    (0, l.jsx)("div", { className: y.aO, children: E.intl.string(E.t.jhu6zm) }),
                                ],
                            })
                          : null,
                      h &&
                          (0, l.jsxs)("div", {
                              className: y.aO,
                              children: [
                                  "*",
                                  E.intl.format(E.t["5zmY3F"], {
                                      documentationLink: A.A.getArticleURL(C.MVz.LOCALIZED_PRICING),
                                  }),
                              ],
                          }),
                      (0, l.jsx)(P, { isTrial: f, subscriptionPlan: x, isDiscount: S }),
                  ],
              })
            : null;
    }
}
function P(e) {
    let { isTrial: t, subscriptionPlan: n, isDiscount: i } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            t &&
                null != n &&
                (0, l.jsx)(m.E, {
                    variant: "text-xs/medium",
                    color: "interactive-text-default",
                    children: E.intl.format(E.t["Hvo/Z5"], {
                        buttonText: (0, _.ff)(null, n),
                        interval: _.Ay.formatInterval(n?.interval),
                        cancelSubscriptionArticle: A.A.getArticleURL(C.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                        paidServiceTermsArticle: A.A.getArticleURL(C.MVz.PAID_TERMS),
                    }),
                }),
            i &&
                null != n &&
                (0, l.jsx)(m.E, {
                    variant: "text-xs/medium",
                    color: "interactive-text-default",
                    children: E.intl.format(E.t["Z2c+aV"], {
                        buttonText: (0, _.ff)(null, n),
                        interval: _.Ay.formatInterval(n?.interval),
                        cancelSubscriptionArticle: A.A.getArticleURL(C.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                        paidServiceTermsArticle: A.A.getArticleURL(C.MVz.PAID_TERMS),
                    }),
                }),
        ],
    });
}
let S = u.Ay.connectStores([h.A], (e) => {
    let { eulaId: t } = e;
    return { hasPreviouslyAcceptedEULA: null != t && h.A.hasAcceptedEULA(t) };
})(f);
