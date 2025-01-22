r.d(n, {
    F7: function () {
        return v;
    },
    WA: function () {
        return h;
    },
    s2: function () {
        return _;
    },
    wo: function () {
        return E;
    },
    yp: function () {
        return y;
    }
});
var i = r(200651);
r(192379);
var a = r(853872),
    o = r(409813),
    s = r(276442),
    l = r(793541),
    u = r(380898),
    c = r(713316),
    d = r(710094),
    f = r(865921),
    p = r(388032);
let h = {
        key: null,
        renderStep: (e) => (0, i.jsx)(f.v, { ...e })
    },
    _ = {
        key: o.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) =>
            (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(s.J, {
                    ...e,
                    breadcrumbSteps: [o.h8.ADD_PAYMENT_STEPS, o.h8.REVIEW, o.h8.CONFIRM],
                    onReturn: () => {
                        0 === Object.keys(a.Z.paymentSources).length ? e.handleClose() : e.handleStepChange(o.h8.REVIEW, { trackedFromStep: o.h8.ADD_PAYMENT_STEPS });
                    }
                })
            }),
        options: { renderHeader: !0 }
    },
    m = {
        key: o.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, i.jsx)(u.Z, {})
    },
    g = {
        key: o.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, i.jsx)(l.Z, {}),
        options: { renderHeader: !0 }
    },
    E = {
        key: o.h8.REVIEW,
        renderStep: (e) => (0, i.jsx)(d.l, { ...e }),
        options: { useBreadcrumbLabel: () => p.intl.string(p.t.QBnNHh) }
    },
    v = {
        key: o.h8.CONFIRM,
        renderStep: (e) => (0, i.jsx)(c.w, { ...e })
    },
    y = [m, g];
