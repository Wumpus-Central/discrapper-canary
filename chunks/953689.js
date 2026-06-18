"use strict";
n.d(t, { A: () => S });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(17928),
    c = n(534514),
    d = n(150934),
    _ = n(192308),
    h = n(834730),
    f = n(293066),
    p = n(975571),
    E = n(428262),
    m = n(652215),
    g = n(375708),
    A = n(470330);
class I extends r.Component {
    state = {
        hasAcceptedEULA: !this.props.forceShow && this.props.hasPreviouslyAcceptedEULA,
        hasAcceptedWithdrawalWaiver: !1,
    };
    componentDidMount() {
        this.props.onChange(this.hasAcceptedNeccessaryTerms(this.props, this.state));
    }
    componentDidUpdate(e, t) {
        let n = this.hasAcceptedNeccessaryTerms(e, t),
            i = this.hasAcceptedNeccessaryTerms(this.props, this.state);
        i !== n && this.props.onChange(i);
    }
    hasAcceptedNeccessaryTerms(e, t) {
        return (null == e.eulaId || t.hasAcceptedEULA) && (!e.showWithdrawalWaiver || t.hasAcceptedWithdrawalWaiver);
    }
    render() {
        let {
                eulaId: e,
                applicationName: t,
                hasPreviouslyAcceptedEULA: r,
                forceShow: s,
                disabled: o,
                className: u,
                finePrint: h,
                showPricingLink: f,
                showWithdrawalWaiver: E,
                isTrial: I,
                isDiscount: S,
                subscriptionPlan: y,
                finePrintClassname: C,
            } = this.props,
            { hasAcceptedEULA: N, hasAcceptedWithdrawalWaiver: v } = this.state;
        return (l()(!I || null != y, "subscriptionPlan cannot be null if shouldShowTrialOrDiscountLayout is true"),
        s || (null != e && !r) || E)
            ? (0, i.jsxs)("div", {
                  className: u,
                  children: [
                      E &&
                          (0, i.jsx)(c.D, {
                              variant: "heading-md/semibold",
                              className: A.Hc,
                              children: g.intl.string(g.t.Ogvn5o),
                          }),
                      null != e && (s || !r)
                          ? (0, i.jsx)(d.S, {
                                checked: N,
                                onChange: (e) => this.setState({ hasAcceptedEULA: e }),
                                disabled: o,
                                label: g.intl.format(g.t.IodJKT, {
                                    applicationName: t,
                                    onClick: (t) => {
                                        (0, _.openModalLazy)(async () => {
                                            let { default: t } = await Promise.all([
                                                n.e("82333"),
                                                n.e("25508"),
                                                n.e("86364"),
                                                n.e("76821"),
                                                n.e("71568"),
                                                n.e("64615"),
                                                n.e("92064"),
                                                n.e("87297"),
                                            ]).then(n.bind(n, 294264));
                                            return (n) => (0, i.jsx)(t, { eulaId: e, ...n });
                                        }),
                                            t.preventDefault();
                                    },
                                }),
                            })
                          : null,
                      null == h ? null : (0, i.jsx)("div", { className: a()(A.aO, C), children: h }),
                      E
                          ? (0, i.jsxs)("div", {
                                className: u,
                                children: [
                                    (0, i.jsx)(d.S, {
                                        checked: v,
                                        onChange: (e) => this.setState({ hasAcceptedWithdrawalWaiver: e }),
                                        disabled: o,
                                        label: g.intl.string(g.t["DFCVN+"]),
                                    }),
                                    (0, i.jsx)("div", { className: A.aO, children: g.intl.string(g.t.jhu6zm) }),
                                ],
                            })
                          : null,
                      f &&
                          (0, i.jsxs)("div", {
                              className: A.aO,
                              children: [
                                  "*",
                                  g.intl.format(g.t["5zmY3F"], {
                                      documentationLink: p.A.getArticleURL(m.MVz.LOCALIZED_PRICING),
                                  }),
                              ],
                          }),
                      (0, i.jsx)(T, { isTrial: I, subscriptionPlan: y, isDiscount: S }),
                  ],
              })
            : null;
    }
}
function T(e) {
    let { isTrial: t, subscriptionPlan: n, isDiscount: r } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            t &&
                null != n &&
                (0, i.jsx)(h.E, {
                    variant: "text-xs/medium",
                    color: "interactive-text-default",
                    children: g.intl.format(g.t["Hvo/Z5"], {
                        buttonText: (0, E.ff)(null, n),
                        interval: E.Ay.formatInterval(n?.interval),
                        cancelSubscriptionArticle: p.A.getArticleURL(m.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                        paidServiceTermsArticle: p.A.getArticleURL(m.MVz.PAID_TERMS),
                    }),
                }),
            r &&
                null != n &&
                (0, i.jsx)(h.E, {
                    variant: "text-xs/medium",
                    color: "interactive-text-default",
                    children: g.intl.format(g.t["Z2c+aV"], {
                        buttonText: (0, E.ff)(null, n),
                        interval: E.Ay.formatInterval(n?.interval),
                        cancelSubscriptionArticle: p.A.getArticleURL(m.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                        paidServiceTermsArticle: p.A.getArticleURL(m.MVz.PAID_TERMS),
                    }),
                }),
        ],
    });
}
let S = u.Ay.connectStores([f.A], (e) => {
    let { eulaId: t } = e;
    return { hasPreviouslyAcceptedEULA: null != t && f.A.hasAcceptedEULA(t) };
})(I);
