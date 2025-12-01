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
    p = n(504211),
    _ = n(533159),
    m = n(981631),
    h = n(388032),
    g = n(186812),
    E = n(325380);
function b(e) {
    let { appId: t, skuId: n, transitionState: b, onClose: y, children: O, footer: v } = e,
        S = (0, o.e7)([l.Z, c.Z], () => {
            var e;
            return null != (e = l.Z.getApplication(t)) ? e : c.Z.getApplicationRecord(t);
        }, [t]),
        { data: I } = (0, u.Z)(n);
    if (null == S) return null;
    let T = (0, f.y)(S, 25),
        { termsOfServiceUrl: A, privacyPolicyUrl: C } = S;
    if ((null == I ? void 0 : I.applicationId) !== t)
        return (0, r.jsx)(a.Modal, {
            actions: [
                {
                    onClick: y,
                    text: h.intl.string(h.t.BddRzS),
                    variant: "primary",
                },
            ],
            onClose: y,
            size: "sm",
            transitionState: b,
            title: h.intl.string(h.t["0Bf80I"]),
            children: (0, r.jsx)(s.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                className: g.unavailableBody,
                children: h.intl.string(h.t.omH3bq),
            }),
        });
    let N =
        null != T
            ? (0, r.jsx)("img", {
                  src: T.href,
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
                title: S.name,
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
                                  children: (0, r.jsx)(_.Z, {
                                      termsOfServiceUrl: A,
                                      privacyPolicyUrl: C,
                                  }),
                              })
                            : (0, r.jsx)(s.Text, {
                                  color: "header-primary",
                                  variant: "text-xs/normal",
                                  children: h.intl.string(h.t["3ZY+0D"]),
                              }),
                        (0, r.jsxs)("div", {
                            className: g.footerButtons,
                            children: [
                                d.wS &&
                                    (0, r.jsx)(s.hU, {
                                        "aria-label": h.intl.string(h.t.WqhZss),
                                        icon: () =>
                                            (0, r.jsx)(s.xPt, {
                                                size: "xs",
                                                color: "currentColor",
                                            }),
                                        onClick: () => {
                                            let e = ""
                                                .concat(location.protocol, "//")
                                                .concat(location.host)
                                                .concat(m.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t, n));
                                            (0, d.JG)(e, () =>
                                                (0, s.showToast)(
                                                    (0, s.createToast)(
                                                        h.intl.string(h.t["L/PwZf"]),
                                                        s.ToastType.SUCCESS,
                                                    ),
                                                ),
                                            ),
                                                (0, p.X)(t, p.B.DETAILS_MODAL, n);
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
