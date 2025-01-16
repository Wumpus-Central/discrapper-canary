n.d(t, {
    F7: function () {
        return m;
    },
    WA: function () {
        return p;
    },
    s2: function () {
        return _;
    },
    wo: function () {
        return g;
    },
    yp: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var o = n(853872),
    a = n(409813),
    r = n(276442),
    c = n(793541),
    d = n(380898),
    s = n(713316),
    l = n(710094),
    f = n(865921),
    u = n(388032);
let p = {
        key: null,
        renderStep: (e) => (0, i.jsx)(f.v, { ...e })
    },
    _ = {
        key: a.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) =>
            (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(r.J, {
                    ...e,
                    breadcrumbSteps: [a.h8.ADD_PAYMENT_STEPS, a.h8.REVIEW, a.h8.CONFIRM],
                    onReturn: () => {
                        0 === Object.keys(o.Z.paymentSources).length ? e.handleClose() : e.handleStepChange(a.h8.REVIEW, { trackedFromStep: a.h8.ADD_PAYMENT_STEPS });
                    }
                })
            }),
        options: { renderHeader: !0 }
    },
    b = {
        key: a.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, i.jsx)(d.Z, {})
    },
    x = {
        key: a.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, i.jsx)(c.Z, {}),
        options: { renderHeader: !0 }
    },
    g = {
        key: a.h8.REVIEW,
        renderStep: (e) => (0, i.jsx)(l.l, { ...e }),
        options: { useBreadcrumbLabel: () => u.intl.string(u.t.QBnNHh) }
    },
    m = {
        key: a.h8.CONFIRM,
        renderStep: (e) => (0, i.jsx)(s.w, { ...e })
    },
    h = [b, x];
