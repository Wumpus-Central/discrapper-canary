"use strict";
n.d(t, { A: () => j });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    l = n(311907),
    a = n(821609),
    o = n(921853),
    c = n(707554),
    d = n(123292),
    u = n(161928),
    _ = n(890698),
    h = n(344961),
    m = n(235986),
    p = n(274303),
    g = n(146571),
    A = n(723702),
    f = n(854378),
    x = n(652215),
    E = n(985018),
    I = n(379154),
    v = n(818050);
function N(e, t) {
    if (null == t[e]) return null;
    {
        let n = t[e];
        return Array.isArray(n) ? n[0] : n;
    }
}
function j(e) {
    let t,
        {
            invite: n,
            giftCode: s,
            loginStatus: j,
            country: C,
            showMobileWebHandoff: T,
            disableAutofocusOnDefaultForm: b,
            withQR: S,
            dismissedChooseAccount: y,
            login: R,
            password: w,
            errors: O,
            conditionalMediationAbortController: L,
            onLoginChange: k,
            onPasswordChange: G,
            setLoginRef: U,
            setPasswordRef: D,
            onReturnToChooseAccount: P,
            handleForgotPassword: B,
            handleGotoRegister: M,
            handleAuthSuccess: V,
        } = e,
        F = (0, l.bG)([p.A], () => p.A.getHasLoggedInAccounts()),
        W = null == O.email && null != O.password;
    return (
        (t =
            null != n
                ? (0, i.jsx)("div", { className: v.S3, children: (0, i.jsx)(_.A, { invite: n }) })
                : null != s
                  ? (0, i.jsx)(u.A, { giftCode: s })
                  : (0, i.jsxs)("div", {
                        className: I.wx,
                        children: [
                            (0, i.jsx)(f.hE, { className: v.QB, children: E.intl.string(E.t["7fNJgA"]) }, "title"),
                            !1 === (0, A.isAndroidWeb)()
                                ? (0, i.jsx)(f.tK, { children: E.intl.string(E.t.euS7r4) }, "subtitle")
                                : null,
                        ],
                    })),
        (0, i.jsxs)(
            m.A,
            {
                direction: m.A.Direction.HORIZONTAL,
                align: m.A.Align.CENTER,
                children: [
                    (0, i.jsxs)("div", {
                        className: I.Eh,
                        children: [
                            F &&
                                y &&
                                (0, i.jsx)("div", {
                                    className: I.AX,
                                    children: (0, i.jsx)(a.$, {
                                        onClick: P,
                                        variant: "secondary",
                                        text: E.intl.string(E.t["1MrpWO"]),
                                        icon: o.n,
                                    }),
                                }),
                            t,
                            (0, i.jsx)(c.F, {
                                children: (0, i.jsxs)(f.eB, {
                                    className: v.QX,
                                    children: [
                                        (0, i.jsx)(g.A, {
                                            alpha2: C.alpha2,
                                            countryCode: C.code.split(" ")[0],
                                            className: v.SX,
                                            label: E.intl.string(E.t.tUjnxr),
                                            error: N("login", O) ?? N("email", O),
                                            onChange: k,
                                            setRef: U,
                                            autoCapitalize: "none",
                                            autoComplete: "username webauthn",
                                            autoCorrect: "off",
                                            spellCheck: "false",
                                            value: R,
                                            autoFocus: !W && !T && !b,
                                            required: !0,
                                        }),
                                        (0, i.jsx)(f.pd, {
                                            label: E.intl.string(E.t["CIGa+7"]),
                                            error: N("password", O),
                                            onChange: G,
                                            name: "password",
                                            type: "password",
                                            setRef: D,
                                            autoComplete: "current-password",
                                            spellCheck: "false",
                                            autoFocus: W && !T && !b,
                                            value: w,
                                            required: !0,
                                        }),
                                        (0, i.jsx)("div", {
                                            className: r()(v.SX, v.a5),
                                            children: (0, i.jsx)(d.Q, {
                                                text: E.intl.string(E.t.wWIufs),
                                                textVariant: "text-sm/normal",
                                                onClick: B,
                                            }),
                                        }),
                                        (0, i.jsx)("div", {
                                            className: v.QB,
                                            children: (0, i.jsx)(a.$, {
                                                text: E.intl.string(E.t.dKhVQN),
                                                fullWidth: !0,
                                                type: "submit",
                                                loading: j === x.aUe.LOGGING_IN,
                                            }),
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: v.a5,
                                            children: [
                                                (0, i.jsx)("span", {
                                                    className: I.Qt,
                                                    children: E.intl.string(E.t.tmE73r),
                                                }),
                                                (0, i.jsx)("span", {
                                                    className: I.Z8,
                                                    children: (0, i.jsx)(d.Q, {
                                                        text: E.intl.string(E.t.pV8xeR),
                                                        textVariant: "text-sm/normal",
                                                        onClick: M,
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(c.F, {
                        children: S
                            ? (0, i.jsx)(h.A, { onAuthenticateSuccess: V, conditionalMediationAbortController: L })
                            : null,
                    }),
                ],
            },
            "form-wrapper",
        )
    );
}
