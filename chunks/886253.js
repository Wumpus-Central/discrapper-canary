n.d(t, { A: () => v });
var r = n(951288);
n(647438);
var i = n(541822),
    o = n(442837),
    a = n(257465),
    s = n(82659),
    l = n(213734),
    c = n(37148),
    u = n(481060),
    d = n(812206),
    f = n(370210),
    _ = n(757746),
    p = n(572004),
    h = n(601911),
    m = n(504211),
    g = n(533159),
    E = n(981631),
    b = n(388032),
    y = n(186812),
    O = n(525751);
function v(e) {
    let { appId: t, skuId: n, transitionState: v, onClose: I, children: T, footer: S } = e,
        A = (0, o.e7)([d.Z, f.Z], () => {
            var e;
            return null != (e = d.Z.getApplication(t)) ? e : f.Z.getApplicationRecord(t);
        }, [t]),
        { data: C } = (0, _.Z)(n);
    if (null == A) return null;
    let N = (0, h.y)(A, 25),
        { termsOfServiceUrl: R, privacyPolicyUrl: P } = A;
    if ((null == C ? void 0 : C.applicationId) !== t)
        return (0, r.jsx)(s.Modal, {
            actions: [
                {
                    onClick: I,
                    text: b.intl.string(b.t.BddRzc),
                    variant: "primary",
                },
            ],
            onClose: I,
            size: "sm",
            transitionState: v,
            title: b.intl.string(b.t["0Bf80N"]),
            children: (0, r.jsx)(u.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                className: y.unavailableBody,
                children: b.intl.string(b.t.omH3bm),
            }),
        });
    let w =
        null != N
            ? (0, r.jsx)("img", {
                  src: N.href,
                  alt: "",
                  className: y.appIcon,
              })
            : void 0;
    return (0, r.jsxs)(a.I, {
        onClose: I,
        size: "lg",
        transitionState: v,
        children: [
            (0, r.jsx)(c.x, {
                leading: w,
                title: A.name,
            }),
            (0, r.jsx)(i.Z, {
                children: (0, r.jsx)("main", {
                    className: O.bodyInner,
                    children: T,
                }),
            }),
            (0, r.jsx)(l.m, {
                children: (0, r.jsxs)("div", {
                    className: y.footer,
                    children: [
                        null != R || null != P
                            ? (0, r.jsx)(u.Text, {
                                  color: "header-primary",
                                  variant: "text-sm/normal",
                                  children: (0, r.jsx)(g.Z, {
                                      termsOfServiceUrl: R,
                                      privacyPolicyUrl: P,
                                  }),
                              })
                            : (0, r.jsx)(u.Text, {
                                  color: "header-primary",
                                  variant: "text-xs/normal",
                                  children: b.intl.string(b.t["3ZY+0N"]),
                              }),
                        (0, r.jsxs)("div", {
                            className: y.footerButtons,
                            children: [
                                p.wS &&
                                    (0, r.jsx)(u.hU, {
                                        "aria-label": b.intl.string(b.t.WqhZsr),
                                        icon: () =>
                                            (0, r.jsx)(u.xPt, {
                                                size: "xs",
                                                color: "currentColor",
                                            }),
                                        onClick: () => {
                                            let e = ""
                                                .concat(location.protocol, "//")
                                                .concat(location.host)
                                                .concat(E.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t, n));
                                            (0, p.JG)(e, () =>
                                                (0, u.showToast)(
                                                    (0, u.createToast)(
                                                        b.intl.string(b.t["L/PwZW"]),
                                                        u.ToastType.SUCCESS,
                                                    ),
                                                ),
                                            ),
                                                (0, m.X)(t, m.B.DETAILS_MODAL, n);
                                        },
                                        variant: "icon-only",
                                    }),
                                S,
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
