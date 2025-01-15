n.d(t, {
    F7: function () {
        return g;
    },
    WA: function () {
        return p;
    },
    s2: function () {
        return m;
    },
    wo: function () {
        return x;
    },
    yp: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var r = n(853872),
    o = n(409813),
    a = n(276442),
    l = n(793541),
    c = n(380898),
    s = n(713316),
    d = n(710094),
    u = n(865921),
    f = n(388032);
let p = {
        key: null,
        renderStep: (e) => (0, i.jsx)(u.v, { ...e })
    },
    m = {
        key: o.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) =>
            (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(a.J, {
                    ...e,
                    breadcrumbSteps: [o.h8.ADD_PAYMENT_STEPS, o.h8.REVIEW, o.h8.CONFIRM],
                    onReturn: () => {
                        0 === Object.keys(r.Z.paymentSources).length ? e.handleClose() : e.handleStepChange(o.h8.REVIEW, { trackedFromStep: o.h8.ADD_PAYMENT_STEPS });
                    }
                })
            }),
        options: { renderHeader: !0 }
    },
    b = {
        key: o.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, i.jsx)(c.Z, {})
    },
    _ = {
        key: o.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, i.jsx)(l.Z, {}),
        options: { renderHeader: !0 }
    },
    x = {
        key: o.h8.REVIEW,
        renderStep: (e) => (0, i.jsx)(d.l, { ...e }),
        options: { useBreadcrumbLabel: () => f.intl.string(f.t.QBnNHh) }
    },
    g = {
        key: o.h8.CONFIRM,
        renderStep: (e) => (0, i.jsx)(s.w, { ...e })
    },
    h = [b, _];
