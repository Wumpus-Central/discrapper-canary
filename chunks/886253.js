n.d(t, { A: () => b });
var r = n(54381);
n(473749);
var i = n(374481),
    a = n(793030),
    o = n(442837),
    s = n(481060),
    l = n(812206),
    c = n(370210),
    u = n(757746),
    d = n(572004),
    f = n(601911),
    _ = n(504211),
    p = n(533159),
    h = n(981631),
    m = n(388032),
    g = n(217246),
    E = n(815847);
function b(e) {
    let { appId: t, skuId: n, transitionState: b, onClose: y, children: O, footer: v } = e,
        I = (0, o.e7)([l.Z, c.Z], () => {
            var e;
            return null != (e = l.Z.getApplication(t)) ? e : c.Z.getApplicationRecord(t);
        }, [t]),
        { data: T } = (0, u.Z)(n);
    if (null == I) return null;
    let S = (0, f.y)(I, 25),
        { termsOfServiceUrl: A, privacyPolicyUrl: C } = I;
    if ((null == T ? void 0 : T.applicationId) !== t)
        return (0, r.jsx)(a.Modal, {
            actions: [
                {
                    onClick: y,
                    text: m.intl.string(m.t.BddRzS),
                    variant: "primary",
                },
            ],
            onClose: y,
            size: "sm",
            transitionState: b,
            title: m.intl.string(m.t["0Bf80I"]),
            children: (0, r.jsx)(s.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                className: g.unavailableBody,
                children: m.intl.string(m.t.omH3bq),
            }),
        });
    let N =
        null != S
            ? (0, r.jsx)("img", {
                  src: S.href,
                  alt: "",
                  className: g.appIcon,
              })
            : void 0;
    return (0, r.jsxs)(a.IX, {
        onClose: y,
        size: "lg",
        transitionState: b,
        children: [
            (0, r.jsx)(a.xBx, {
                leading: N,
                title: I.name,
            }),
            (0, r.jsx)(i.Z, {
                children: (0, r.jsx)("main", {
                    className: E.bodyInner,
                    children: O,
                }),
            }),
            (0, r.jsx)(a.mzw, {
                children: (0, r.jsxs)("div", {
                    className: g.footer,
                    children: [
                        null != A || null != C
                            ? (0, r.jsx)(s.Text, {
                                  color: "header-primary",
                                  variant: "text-sm/normal",
                                  children: (0, r.jsx)(p.Z, {
                                      termsOfServiceUrl: A,
                                      privacyPolicyUrl: C,
                                  }),
                              })
                            : (0, r.jsx)(s.Text, {
                                  color: "header-primary",
                                  variant: "text-xs/normal",
                                  children: m.intl.string(m.t["3ZY+0D"]),
                              }),
                        (0, r.jsxs)("div", {
                            className: g.footerButtons,
                            children: [
                                d.wS &&
                                    (0, r.jsx)(s.hU, {
                                        "aria-label": m.intl.string(m.t.WqhZss),
                                        icon: () =>
                                            (0, r.jsx)(s.xPt, {
                                                size: "xs",
                                                color: "currentColor",
                                            }),
                                        onClick: () => {
                                            let e = ""
                                                .concat(location.protocol, "//")
                                                .concat(location.host)
                                                .concat(h.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t, n));
                                            (0, d.JG)(e, () =>
                                                (0, s.showToast)(
                                                    (0, s.createToast)(
                                                        m.intl.string(m.t["L/PwZf"]),
                                                        s.ToastType.SUCCESS,
                                                    ),
                                                ),
                                            ),
                                                (0, _.X)(t, _.B.DETAILS_MODAL, n);
                                        },
                                        variant: "icon-only",
                                    }),
                                v,
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
