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
    g = n(274303),
    p = n(146571),
    A = n(723702),
    f = n(854378),
    E = n(652215),
    x = n(985018),
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
            disableAutofocusOnDefaultForm: y,
            withQR: b,
            dismissedChooseAccount: S,
            login: R,
            password: O,
            errors: L,
            conditionalMediationAbortController: w,
            onLoginChange: k,
            onPasswordChange: G,
            setLoginRef: D,
            setPasswordRef: P,
            onReturnToChooseAccount: U,
            handleForgotPassword: B,
            handleGotoRegister: M,
            handleAuthSuccess: V,
        } = e,
        F = (0, l.bG)([g.A], () => g.A.getHasLoggedInAccounts()),
        W = null == L.email && null != L.password;
    return (
        (t =
            null != n
                ? (0, i.jsx)("div", { className: v.S3, children: (0, i.jsx)(_.A, { invite: n }) })
                : null != s
                  ? (0, i.jsx)(u.A, { giftCode: s })
                  : (0, i.jsxs)("div", {
                        className: I.wx,
                        children: [
                            (0, i.jsx)(f.hE, { className: v.QB, children: x.intl.string(x.t["7fNJgA"]) }, "title"),
                            !1 === (0, A.isAndroidWeb)()
                                ? (0, i.jsx)(f.tK, { children: x.intl.string(x.t.euS7r4) }, "subtitle")
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
                                S &&
                                (0, i.jsx)("div", {
                                    className: I.AX,
                                    children: (0, i.jsx)(a.$, {
                                        onClick: U,
                                        variant: "secondary",
                                        text: x.intl.string(x.t["1MrpWO"]),
                                        icon: o.n,
                                    }),
                                }),
                            t,
                            (0, i.jsx)(c.F, {
                                children: (0, i.jsxs)(f.eB, {
                                    className: v.QX,
                                    children: [
                                        (0, i.jsx)(p.A, {
                                            alpha2: C.alpha2,
                                            countryCode: C.code.split(" ")[0],
                                            className: v.SX,
                                            label: x.intl.string(x.t.tUjnxr),
                                            error: N("login", L) ?? N("email", L),
                                            onChange: k,
                                            setRef: D,
                                            autoCapitalize: "none",
                                            autoComplete: "username webauthn",
                                            autoCorrect: "off",
                                            spellCheck: "false",
                                            value: R,
                                            autoFocus: !W && !T && !y,
                                            required: !0,
                                        }),
                                        (0, i.jsx)(f.pd, {
                                            label: x.intl.string(x.t["CIGa+7"]),
                                            error: N("password", L),
                                            onChange: G,
                                            name: "password",
                                            type: "password",
                                            setRef: P,
                                            autoComplete: "current-password",
                                            spellCheck: "false",
                                            autoFocus: W && !T && !y,
                                            value: O,
                                            required: !0,
                                        }),
                                        (0, i.jsx)("div", {
                                            className: r()(v.SX, v.a5),
                                            children: (0, i.jsx)(d.Q, {
                                                text: x.intl.string(x.t.wWIufs),
                                                textVariant: "text-sm/normal",
                                                onClick: B,
                                            }),
                                        }),
                                        (0, i.jsx)("div", {
                                            className: v.QB,
                                            children: (0, i.jsx)(a.$, {
                                                text: x.intl.string(x.t.dKhVQN),
                                                fullWidth: !0,
                                                type: "submit",
                                                loading: j === E.aUe.LOGGING_IN,
                                            }),
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: v.a5,
                                            children: [
                                                (0, i.jsx)("span", {
                                                    className: I.Qt,
                                                    children: x.intl.string(x.t.tmE73r),
                                                }),
                                                (0, i.jsx)("span", {
                                                    className: I.Z8,
                                                    children: (0, i.jsx)(d.Q, {
                                                        text: x.intl.string(x.t.pV8xeR),
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
                        children: b
                            ? (0, i.jsx)(h.A, { onAuthenticateSuccess: V, conditionalMediationAbortController: w })
                            : null,
                    }),
                ],
            },
            "form-wrapper",
        )
    );
}
