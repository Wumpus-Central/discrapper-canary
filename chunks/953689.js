"use strict";
n.d(t, { A: () => S });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(311907),
    c = n(534514),
    d = n(150934),
    _ = n(192308),
    f = n(834730),
    p = n(293066),
    h = n(975571),
    E = n(927578),
    m = n(652215),
    g = n(985018),
    A = n(470330);
class I extends i.Component {
    state = {
        hasAcceptedEULA: !this.props.forceShow && this.props.hasPreviouslyAcceptedEULA,
        hasAcceptedWithdrawalWaiver: !1,
    };
    componentDidMount() {
        this.props.onChange(this.hasAcceptedNeccessaryTerms(this.props, this.state));
    }
    componentDidUpdate(e, t) {
        let n = this.hasAcceptedNeccessaryTerms(e, t),
            r = this.hasAcceptedNeccessaryTerms(this.props, this.state);
        r !== n && this.props.onChange(r);
    }
    hasAcceptedNeccessaryTerms(e, t) {
        return (null == e.eulaId || t.hasAcceptedEULA) && (!e.showWithdrawalWaiver || t.hasAcceptedWithdrawalWaiver);
    }
    render() {
        let {
                eulaId: e,
                applicationName: t,
                hasPreviouslyAcceptedEULA: i,
                forceShow: s,
                disabled: o,
                className: u,
                finePrint: f,
                showPricingLink: p,
                showWithdrawalWaiver: E,
                isTrial: I,
                isDiscount: S,
                subscriptionPlan: y,
                finePrintClassname: N,
            } = this.props,
            { hasAcceptedEULA: v, hasAcceptedWithdrawalWaiver: C } = this.state;
        return (l()(!I || null != y, "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true"),
        s || (null != e && !i) || E)
            ? (0, r.jsxs)("div", {
                  className: u,
                  children: [
                      E &&
                          (0, r.jsx)(c.D, {
                              variant: "heading-md/semibold",
                              className: A.Hc,
                              children: g.intl.string(g.t.Ogvn5o),
                          }),
                      null != e && (s || !i)
                          ? (0, r.jsx)(d.S, {
                                checked: v,
                                onChange: (e) => this.setState({ hasAcceptedEULA: e }),
                                disabled: o,
                                label: g.intl.format(g.t.IodJKT, {
                                    applicationName: t,
                                    onClick: (t) => {
                                        (0, _.openModalLazy)(async () => {
                                            let { default: t } = await n.e("35641").then(n.bind(n, 698336));
                                            return (n) => (0, r.jsx)(t, { eulaId: e, ...n });
                                        }),
                                            t.preventDefault();
                                    },
                                }),
                            })
                          : null,
                      null == f ? null : (0, r.jsx)("div", { className: a()(A.aO, N), children: f }),
                      E
                          ? (0, r.jsxs)("div", {
                                className: u,
                                children: [
                                    (0, r.jsx)(d.S, {
                                        checked: C,
                                        onChange: (e) => this.setState({ hasAcceptedWithdrawalWaiver: e }),
                                        disabled: o,
                                        label: g.intl.string(g.t["DFCVN+"]),
                                    }),
                                    (0, r.jsx)("div", { className: A.aO, children: g.intl.string(g.t.jhu6zm) }),
                                ],
                            })
                          : null,
                      p &&
                          (0, r.jsxs)("div", {
                              className: A.aO,
                              children: [
                                  "*",
                                  g.intl.format(g.t["5zmY3F"], {
                                      documentationLink: h.A.getArticleURL(m.MVz.LOCALIZED_PRICING),
                                  }),
                              ],
                          }),
                      (0, r.jsx)(T, { isTrial: I, subscriptionPlan: y, isDiscount: S }),
                  ],
              })
            : null;
    }
}
function T(e) {
    let { isTrial: t, subscriptionPlan: n, isDiscount: i } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            t &&
                null != n &&
                (0, r.jsx)(f.E, {
                    variant: "text-xs/medium",
                    color: "interactive-text-default",
                    children: g.intl.format(g.t["Hvo/Z5"], {
                        buttonText: (0, E.ff)(null, n),
                        interval: E.Ay.formatInterval(n?.interval),
                        cancelSubscriptionArticle: h.A.getArticleURL(m.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                        paidServiceTermsArticle: h.A.getArticleURL(m.MVz.PAID_TERMS),
                    }),
                }),
            i &&
                null != n &&
                (0, r.jsx)(f.E, {
                    variant: "text-xs/medium",
                    color: "interactive-text-default",
                    children: g.intl.format(g.t["Z2c+aV"], {
                        buttonText: (0, E.ff)(null, n),
                        interval: E.Ay.formatInterval(n?.interval),
                        cancelSubscriptionArticle: h.A.getArticleURL(m.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                        paidServiceTermsArticle: h.A.getArticleURL(m.MVz.PAID_TERMS),
                    }),
                }),
        ],
    });
}
let S = u.Ay.connectStores([p.A], (e) => {
    let { eulaId: t } = e;
    return { hasPreviouslyAcceptedEULA: null != t && p.A.hasAcceptedEULA(t) };
})(I);
