"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(311907),
    c = n(397927),
    d = n(293066),
    _ = n(975571),
    f = n(927578),
    p = n(652215),
    h = n(985018),
    m = n(650634);
class E extends i.Component {
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
                finePrint: d,
                showPricingLink: f,
                showWithdrawalWaiver: E,
                isTrial: A,
                isDiscount: I,
                subscriptionPlan: T,
                finePrintClassname: S,
            } = this.props,
            { hasAcceptedEULA: y, hasAcceptedWithdrawalWaiver: v } = this.state;
        return (l()(!A || null != T, "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true"),
        s || (null != e && !i) || E)
            ? (0, r.jsxs)("div", {
                  className: u,
                  children: [
                      E &&
                          (0, r.jsx)(c.Heading, {
                              variant: "heading-md/semibold",
                              className: m.Hc,
                              children: h.intl.string(h.t.Ogvn5o),
                          }),
                      null != e && (s || !i)
                          ? (0, r.jsx)(c.Checkbox, {
                                checked: y,
                                onChange: (e) => this.setState({ hasAcceptedEULA: e }),
                                disabled: o,
                                label: h.intl.format(h.t.IodJKT, {
                                    applicationName: t,
                                    onClick: (t) => {
                                        (0, c.mMO)(async () => {
                                            let { default: t } = await n.e("35641").then(n.bind(n, 698336));
                                            return (n) => (0, r.jsx)(t, { eulaId: e, ...n });
                                        }),
                                            t.preventDefault();
                                    },
                                }),
                            })
                          : null,
                      null == d ? null : (0, r.jsx)("div", { className: a()(m.aO, S), children: d }),
                      E
                          ? (0, r.jsxs)("div", {
                                className: u,
                                children: [
                                    (0, r.jsx)(c.Checkbox, {
                                        checked: v,
                                        onChange: (e) => this.setState({ hasAcceptedWithdrawalWaiver: e }),
                                        disabled: o,
                                        label: h.intl.string(h.t["DFCVN+"]),
                                    }),
                                    (0, r.jsx)("div", { className: m.aO, children: h.intl.string(h.t.jhu6zm) }),
                                ],
                            })
                          : null,
                      f &&
                          (0, r.jsxs)("div", {
                              className: m.aO,
                              children: [
                                  "*",
                                  h.intl.format(h.t["5zmY3F"], {
                                      documentationLink: _.A.getArticleURL(p.MVz.LOCALIZED_PRICING),
                                  }),
                              ],
                          }),
                      (0, r.jsx)(g, { isTrial: A, subscriptionPlan: T, isDiscount: I }),
                  ],
              })
            : null;
    }
}
function g(e) {
    let { isTrial: t, subscriptionPlan: n, isDiscount: i } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            t &&
                null != n &&
                (0, r.jsx)(c.Text, {
                    variant: "text-xs/medium",
                    color: "interactive-text-default",
                    children: h.intl.format(h.t["Hvo/Z5"], {
                        buttonText: (0, f.ff)(null, n),
                        interval: f.Ay.formatInterval(n?.interval),
                        cancelSubscriptionArticle: _.A.getArticleURL(p.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                        paidServiceTermsArticle: _.A.getArticleURL(p.MVz.PAID_TERMS),
                    }),
                }),
            i &&
                null != n &&
                (0, r.jsx)(c.Text, {
                    variant: "text-xs/medium",
                    color: "interactive-text-default",
                    children: h.intl.format(h.t["Z2c+aV"], {
                        buttonText: (0, f.ff)(null, n),
                        interval: f.Ay.formatInterval(n?.interval),
                        cancelSubscriptionArticle: _.A.getArticleURL(p.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                        paidServiceTermsArticle: _.A.getArticleURL(p.MVz.PAID_TERMS),
                    }),
                }),
        ],
    });
}
let A = u.Ay.connectStores([d.A], (e) => {
    let { eulaId: t } = e;
    return { hasPreviouslyAcceptedEULA: null != t && d.A.hasAcceptedEULA(t) };
})(E);
