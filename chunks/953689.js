"use strict";
n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    u = n(311907),
    c = n(397927),
    d = n(293066),
    _ = n(975571),
    f = n(927578),
    p = n(652215),
    h = n(985018),
    m = n(252101);
class g extends i.Component {
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
                forceShow: a,
                disabled: o,
                className: u,
                finePrint: d,
                showPricingLink: g,
                showWithdrawalWaiver: E,
                isTrial: A,
                inReverseTrial: I,
                isDiscount: T,
                subscriptionPlan: y,
                finePrintClassname: S,
            } = this.props,
            { hasAcceptedEULA: v, hasAcceptedWithdrawalWaiver: C } = this.state;
        return (l()(!A || null != y, "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true"),
        a || (null != e && !i) || E)
            ? (0, r.jsxs)("div", {
                  className: u,
                  children: [
                      E &&
                          (0, r.jsx)(c.Heading, {
                              variant: "heading-md/semibold",
                              className: m.Hc,
                              children: h.intl.string(h.t.Ogvn5o),
                          }),
                      null != e && (a || !i)
                          ? (0, r.jsx)(c.Checkbox, {
                                checked: v,
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
                      null == d ? null : (0, r.jsx)("div", { className: s()(m.aO, S), children: d }),
                      E
                          ? (0, r.jsxs)("div", {
                                className: u,
                                children: [
                                    (0, r.jsx)(c.Checkbox, {
                                        checked: C,
                                        onChange: (e) => this.setState({ hasAcceptedWithdrawalWaiver: e }),
                                        disabled: o,
                                        label: h.intl.string(h.t["DFCVN+"]),
                                    }),
                                    (0, r.jsx)("div", { className: m.aO, children: h.intl.string(h.t.jhu6zm) }),
                                ],
                            })
                          : null,
                      g &&
                          (0, r.jsxs)("div", {
                              className: m.aO,
                              children: [
                                  "*",
                                  h.intl.format(h.t["5zmY3F"], {
                                      documentationLink: _.A.getArticleURL(p.MVz.LOCALIZED_PRICING),
                                  }),
                              ],
                          }),
                      A &&
                          null != y &&
                          (0, r.jsx)(c.Text, {
                              variant: "text-xs/medium",
                              color: "interactive-text-default",
                              children: h.intl.format(h.t["Hvo/Z5"], {
                                  buttonText: (0, f.ff)(null, y),
                                  interval: f.Ay.formatInterval(y?.interval),
                                  cancelSubscriptionArticle: _.A.getArticleURL(p.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                  paidServiceTermsArticle: _.A.getArticleURL(p.MVz.PAID_TERMS),
                              }),
                          }),
                      I &&
                          null != y &&
                          (0, r.jsx)(c.Text, {
                              variant: "text-xs/medium",
                              color: "interactive-text-default",
                              children: h.intl.format(h.t.Oo2FeS, {
                                  buttonText: (0, f.ff)(null, y),
                                  interval: f.Ay.formatInterval(y?.interval),
                                  cancelSubscriptionArticle: _.A.getArticleURL(p.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                  paidServiceTermsArticle: _.A.getArticleURL(p.MVz.PAID_TERMS),
                              }),
                          }),
                      T &&
                          null != y &&
                          (0, r.jsx)(c.Text, {
                              variant: "text-xs/medium",
                              color: "interactive-text-default",
                              children: h.intl.format(h.t["Z2c+aV"], {
                                  buttonText: (0, f.ff)(null, y),
                                  interval: f.Ay.formatInterval(y?.interval),
                                  cancelSubscriptionArticle: _.A.getArticleURL(p.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                  paidServiceTermsArticle: _.A.getArticleURL(p.MVz.PAID_TERMS),
                              }),
                          }),
                  ],
              })
            : null;
    }
}
let E = u.Ay.connectStores([d.A], (e) => {
    let { eulaId: t } = e;
    return { hasPreviouslyAcceptedEULA: null != t && d.A.hasAcceptedEULA(t) };
})(g);
