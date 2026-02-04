t.d(n, {
    Z: () => f,
});
var r = t(627968);
t(64700);
var l = t(311907),
    i = t(397927),
    s = t(937008),
    a = t(156312),
    o = t(166532),
    u = t(166403),
    c = t(45938),
    d = t(810498),
    p = t(683433),
    m = t(344159),
    E = t(985018),
    g = t(357269);

function f(e) {
    let {
            onStepChange: n,
            selectedPlanId: t,
            paymentSources: l,
            onBackClick: o,
            showBackButton: u,
            planOptions: d,
            shouldRenderUpdatedPaymentModal: m = !1,
            isTrial: f,
            isNextDisabled: j = !1,
        } = e,
        { paymentSources: h, selectedPlan: _ } = (0, a.P5)(),
        { isGift: x, giftRecipient: T, claimableRewards: S } = (0, s.Pv)(),
        b = (0, c.Ik)(T);
    return (
        (l = null != l ? l : h),
        (t = null != t ? t : null == _ ? void 0 : _.id),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != t && d.includes(t)
                    ? (0, r.jsx)(P, {
                          paymentSources: l,
                          onStepChange: n,
                          selectedPlanId: t,
                          isGift: x,
                          claimableRewards: S,
                          shouldRenderUpdatedPaymentModal: m,
                          isTrial: f,
                          isNextDisabled: j,
                      })
                    : (0, r.jsx)(i.Button, {
                          variant: "primary",
                          text: E.intl.string(E.t.XqMe3N),
                          disabled: !0,
                      }),
                u
                    ? (0, r.jsx)(p.A, {
                          className: x && b ? g.R : void 0,
                          onClick: o,
                      })
                    : null,
            ],
        })
    );
}

function P(e) {
    let n = ((e) => {
        let {
                onStepChange: n,
                selectedPlanId: t,
                isGift: r,
                claimableRewards: i,
                paymentSources: s,
                shouldRenderUpdatedPaymentModal: c,
                isTrial: p,
                isNextDisabled: g = !1,
            } = e,
            f = (0, l.bG)([u.A], () => u.A.getPremiumTypeSubscription()),
            { step: P, selectedPlan: j } = (0, a.P5)(),
            { hasEntitlements: h } = (0, m.X)(t, r),
            _ = (null != f && null != f.paymentSourceId) || Object.keys(s).length > 0 || (h && !p);
        var x = c ? E.intl.string(E.t.PDTjLN) : E.intl.string(E.t.XqMe3N),
            T = o.pn.ADD_PAYMENT_STEPS;
        return (
            _ && (T = o.pn.REVIEW),
            (0, d.px)(j, r, i) && P !== o.pn.SELECT_FREE_SKU && (T = o.pn.SELECT_FREE_SKU),
            {
                variant: "primary",
                text: x,
                onClick: () => n(T),
                disabled: g,
            }
        );
    })(e);
    return (0, r.jsx)(
        i.Button,
        (function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {},
                    r = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        }),
                    )),
                    r.forEach(function (n) {
                        var r;
                        (r = t[n]),
                            n in e
                                ? Object.defineProperty(e, n, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[n] = r);
                    });
            }
            return e;
        })({}, n),
    );
}
