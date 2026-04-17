"use strict";
n.d(t, { A: () => I });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    l = n(311907),
    a = n(397927),
    o = n(161928),
    c = n(890698),
    d = n(344961),
    u = n(235986),
    _ = n(274303),
    h = n(146571),
    g = n(723702),
    p = n(854378),
    m = n(652215),
    A = n(985018),
    f = n(379154),
    E = n(818050);
function x(e, t) {
    if (null == t[e]) return null;
    {
        let n = t[e];
        return Array.isArray(n) ? n[0] : n;
    }
}
function I(e) {
    let t,
        {
            invite: n,
            giftCode: s,
            loginStatus: I,
            country: N,
            showMobileWebHandoff: v,
            disableAutofocusOnDefaultForm: T,
            withQR: j,
            dismissedChooseAccount: C,
            login: S,
            password: y,
            errors: b,
            conditionalMediationAbortController: R,
            onLoginChange: O,
            onPasswordChange: L,
            setLoginRef: w,
            setPasswordRef: k,
            onReturnToChooseAccount: D,
            handleForgotPassword: U,
            handleGotoRegister: P,
            handleAuthSuccess: B,
        } = e,
        G = (0, l.bG)([_.A], () => _.A.getHasLoggedInAccounts()),
        M = null == b.email && null != b.password;
    return (
        (t =
            null != n
                ? (0, i.jsx)("div", { className: E.S3, children: (0, i.jsx)(c.A, { invite: n }) })
                : null != s
                  ? (0, i.jsx)(o.A, { giftCode: s })
                  : (0, i.jsxs)("div", {
                        className: f.wx,
                        children: [
                            (0, i.jsx)(p.hE, { className: E.QB, children: A.intl.string(A.t["7fNJgA"]) }, "title"),
                            !1 === (0, g.isAndroidWeb)()
                                ? (0, i.jsx)(p.tK, { children: A.intl.string(A.t.euS7r4) }, "subtitle")
                                : null,
                        ],
                    })),
        (0, i.jsxs)(
            u.A,
            {
                direction: u.A.Direction.HORIZONTAL,
                align: u.A.Align.CENTER,
                children: [
                    (0, i.jsxs)("div", {
                        className: f.Eh,
                        children: [
                            G &&
                                C &&
                                (0, i.jsx)("div", {
                                    className: f.AX,
                                    children: (0, i.jsx)(a.Button, {
                                        onClick: D,
                                        variant: "secondary",
                                        text: A.intl.string(A.t["1MrpWO"]),
                                        icon: a.n2b,
                                    }),
                                }),
                            t,
                            (0, i.jsx)(a.Fmo, {
                                children: (0, i.jsxs)(p.eB, {
                                    className: E.QX,
                                    children: [
                                        (0, i.jsx)(h.A, {
                                            alpha2: N.alpha2,
                                            countryCode: N.code.split(" ")[0],
                                            className: E.SX,
                                            label: A.intl.string(A.t.tUjnxr),
                                            error: x("login", b) ?? x("email", b),
                                            onChange: O,
                                            setRef: w,
                                            autoCapitalize: "none",
                                            autoComplete: "username webauthn",
                                            autoCorrect: "off",
                                            spellCheck: "false",
                                            value: S,
                                            autoFocus: !M && !v && !T,
                                            required: !0,
                                        }),
                                        (0, i.jsx)(p.pd, {
                                            label: A.intl.string(A.t["CIGa+7"]),
                                            error: x("password", b),
                                            onChange: L,
                                            name: "password",
                                            type: "password",
                                            setRef: k,
                                            autoComplete: "current-password",
                                            spellCheck: "false",
                                            autoFocus: M && !v && !T,
                                            value: y,
                                            required: !0,
                                        }),
                                        (0, i.jsx)("div", {
                                            className: r()(E.SX, E.a5),
                                            children: (0, i.jsx)(a.QWc, {
                                                text: A.intl.string(A.t.wWIufs),
                                                textVariant: "text-sm/normal",
                                                onClick: U,
                                            }),
                                        }),
                                        (0, i.jsx)("div", {
                                            className: E.QB,
                                            children: (0, i.jsx)(a.Button, {
                                                text: A.intl.string(A.t.dKhVQN),
                                                fullWidth: !0,
                                                type: "submit",
                                                loading: I === m.aUe.LOGGING_IN,
                                            }),
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: E.a5,
                                            children: [
                                                (0, i.jsx)("span", {
                                                    className: f.Qt,
                                                    children: A.intl.string(A.t.tmE73r),
                                                }),
                                                (0, i.jsx)("span", {
                                                    className: f.Z8,
                                                    children: (0, i.jsx)(a.QWc, {
                                                        text: A.intl.string(A.t.pV8xeR),
                                                        textVariant: "text-sm/normal",
                                                        onClick: P,
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(a.Fmo, {
                        children: j
                            ? (0, i.jsx)(d.A, { onAuthenticateSuccess: B, conditionalMediationAbortController: R })
                            : null,
                    }),
                ],
            },
            "form-wrapper",
        )
    );
}
