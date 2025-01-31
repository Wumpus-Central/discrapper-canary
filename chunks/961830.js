n.d(t, {
    F7: () => E,
    WA: () => _,
    s2: () => p,
    wo: () => g,
    yp: () => v
});
var i = n(200651);
n(192379);
var r = n(853872),
    a = n(409813),
    s = n(276442),
    o = n(793541),
    l = n(380898),
    u = n(713316),
    c = n(710094),
    d = n(865921),
    f = n(388032);
let _ = {
        key: null,
        renderStep: (e) => (0, i.jsx)(d.v, { ...e })
    },
    p = {
        key: a.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) =>
            (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(s.J, {
                    ...e,
                    breadcrumbSteps: [a.h8.ADD_PAYMENT_STEPS, a.h8.REVIEW, a.h8.CONFIRM],
                    onReturn: () => {
                        0 === Object.keys(r.Z.paymentSources).length ? e.handleClose() : e.handleStepChange(a.h8.REVIEW, { trackedFromStep: a.h8.ADD_PAYMENT_STEPS });
                    }
                })
            }),
        options: { renderHeader: !0 }
    },
    h = {
        key: a.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, i.jsx)(l.Z, {})
    },
    m = {
        key: a.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, i.jsx)(o.Z, {}),
        options: { renderHeader: !0 }
    },
    g = {
        key: a.h8.REVIEW,
        renderStep: (e) => (0, i.jsx)(c.l, { ...e }),
        options: { useBreadcrumbLabel: () => f.intl.string(f.t.QBnNHh) }
    },
    E = {
        key: a.h8.CONFIRM,
        renderStep: (e) => (0, i.jsx)(u.w, { ...e })
    },
    v = [h, m];
