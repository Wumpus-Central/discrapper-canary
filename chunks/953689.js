"use strict";
n.d(t, { A: () => S });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    d = n(17928),
    _ = n(534514),
    u = n(150934),
    c = n(192308),
    E = n(834730),
    h = n(293066),
    m = n(975571),
    f = n(927578),
    g = n(652215),
    p = n(985018),
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
                className: d,
                finePrint: E,
                showPricingLink: h,
                showWithdrawalWaiver: f,
                isTrial: I,
                isDiscount: S,
                subscriptionPlan: N,
                finePrintClassname: C,
            } = this.props,
            { hasAcceptedEULA: R, hasAcceptedWithdrawalWaiver: O } = this.state;
        return (l()(!I || null != N, "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true"),
        s || (null != e && !r) || f)
            ? (0, i.jsxs)("div", {
                  className: d,
                  children: [
                      f &&
                          (0, i.jsx)(_.D, {
                              variant: "heading-md/semibold",
                              className: A.Hc,
                              children: p.intl.string(p.t.Ogvn5o),
                          }),
                      null != e && (s || !r)
                          ? (0, i.jsx)(u.S, {
                                checked: R,
                                onChange: (e) => this.setState({ hasAcceptedEULA: e }),
                                disabled: o,
                                label: p.intl.format(p.t.IodJKT, {
                                    applicationName: t,
                                    onClick: (t) => {
                                        (0, c.openModalLazy)(async () => {
                                            let { default: t } = await n.e("87297").then(n.bind(n, 294264));
                                            return (n) => (0, i.jsx)(t, { eulaId: e, ...n });
                                        }),
                                            t.preventDefault();
                                    },
                                }),
                            })
                          : null,
                      null == E ? null : (0, i.jsx)("div", { className: a()(A.aO, C), children: E }),
                      f
                          ? (0, i.jsxs)("div", {
                                className: d,
                                children: [
                                    (0, i.jsx)(u.S, {
                                        checked: O,
                                        onChange: (e) => this.setState({ hasAcceptedWithdrawalWaiver: e }),
                                        disabled: o,
                                        label: p.intl.string(p.t["DFCVN+"]),
                                    }),
                                    (0, i.jsx)("div", { className: A.aO, children: p.intl.string(p.t.jhu6zm) }),
                                ],
                            })
                          : null,
                      h &&
                          (0, i.jsxs)("div", {
                              className: A.aO,
                              children: [
                                  "*",
                                  p.intl.format(p.t["5zmY3F"], {
                                      documentationLink: m.A.getArticleURL(g.MVz.LOCALIZED_PRICING),
                                  }),
                              ],
                          }),
                      (0, i.jsx)(T, { isTrial: I, subscriptionPlan: N, isDiscount: S }),
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
                (0, i.jsx)(E.E, {
                    variant: "text-xs/medium",
                    color: "interactive-text-default",
                    children: p.intl.format(p.t["Hvo/Z5"], {
                        buttonText: (0, f.ff)(null, n),
                        interval: f.Ay.formatInterval(n?.interval),
                        cancelSubscriptionArticle: m.A.getArticleURL(g.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                        paidServiceTermsArticle: m.A.getArticleURL(g.MVz.PAID_TERMS),
                    }),
                }),
            r &&
                null != n &&
                (0, i.jsx)(E.E, {
                    variant: "text-xs/medium",
                    color: "interactive-text-default",
                    children: p.intl.format(p.t["Z2c+aV"], {
                        buttonText: (0, f.ff)(null, n),
                        interval: f.Ay.formatInterval(n?.interval),
                        cancelSubscriptionArticle: m.A.getArticleURL(g.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                        paidServiceTermsArticle: m.A.getArticleURL(g.MVz.PAID_TERMS),
                    }),
                }),
        ],
    });
}
let S = d.Ay.connectStores([h.A], (e) => {
    let { eulaId: t } = e;
    return { hasPreviouslyAcceptedEULA: null != t && h.A.hasAcceptedEULA(t) };
})(I);
