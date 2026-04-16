"use strict";
n.d(t, { A: () => j });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(311907),
    o = n(990078),
    c = n(397927),
    d = n(475743),
    u = n(201505),
    h = n(493527),
    _ = n(544395),
    p = n(794696),
    g = n(153488),
    m = n(954571),
    A = n(854378),
    f = n(442184),
    E = n(362707),
    x = n(782021),
    I = n(773134),
    N = n(652215);
n(436317), n(45723);
var v = n(985018),
    C = n(731286),
    T = n(818050);
function j(e) {
    let {
            email: t,
            globalName: n,
            username: r,
            password: j,
            parsedDateOfBirth: S,
            consent: y,
            registering: b,
            isRateLimited: R,
            apiErrors: O,
            emailClientError: L,
            usernameClientError: w,
            passwordClientError: D,
            dateOfBirthClientError: k,
            onEmailChange: U,
            onGlobalNameChange: P,
            onUsernameChange: B,
            onPasswordChange: G,
            onBirthdayChange: M,
            onConsentChange: F,
            onGotoLogin: V,
            onUsernameSuggestionClick: W,
            usernameSuggestion: H,
        } = e,
        { message: K, email: z, username: Q, global_name: q, password: Y, date_of_birth: X } = O,
        J = (0, a.bG)([g.A], () => g.A.getAuthenticationConsentRequired()),
        $ = null != J && y,
        [Z, ee] = s.useState(!1),
        [et, en] = s.useState(!1),
        ei = async () => {
            n.length > 0 && !_.A.wasRegistrationSuggestionFetched(n) && (await h.A.fetchSuggestionsRegistration(n));
        },
        es = (e) => {
            m.default.track(N.HAw.REGISTER_INPUT_FOCUS, { field: e });
        },
        er = (e) => {
            m.default.track(N.HAw.REGISTER_INPUT_BLUR, { field: e });
        },
        el = s.useRef(null),
        ea = s.useRef(null),
        eo = s.useRef(null),
        ec = s.useRef(null);
    !(function (e) {
        let { apiErrors: t, emailRef: n, usernameRef: i, globalNameRef: r, passwordRef: l } = e,
            a = (0, d.A)(t);
        s.useEffect(() => {
            null == a ||
                (a !== t &&
                    (null != t.email || null != t.phone
                        ? n.current?.focus()
                        : null != t.username
                          ? i.current?.focus()
                          : null != t.global_name
                            ? r.current?.focus()
                            : null != t.password && l.current?.focus()));
        }, [t, a, n, i, r, l]);
    })({ apiErrors: O, emailRef: el, usernameRef: ea, globalNameRef: eo, passwordRef: ec });
    let ed = null;
    return (
        "string" == typeof K && (ed = (0, i.jsx)(A.ME, { className: l()(T.QX, C.gJ), children: K })),
        (0, i.jsxs)(A.eB, {
            className: T.QX,
            children: [
                (0, i.jsx)(A.pd, {
                    autoFocus: !0,
                    className: T.SX,
                    label: v.intl.string(v.t.dI4d4S),
                    name: "email",
                    value: t,
                    onChange: U,
                    error: L ?? (0, E.y)(z),
                    type: "email",
                    autoComplete: "username",
                    setRef: el,
                    required: !0,
                    onFocus: () => es("email"),
                    onBlur: () => er("email"),
                }),
                (0, i.jsx)(A.pd, {
                    label: v.intl.string(v.t["9AjdkD"]),
                    className: T.SX,
                    name: "global_name",
                    value: n,
                    onChange: P,
                    error: (0, E.y)(q),
                    maxLength: 32,
                    autoComplete: "off",
                    setRef: eo,
                    onFocus: () => {
                        ee(!0), es("global_name");
                    },
                    onBlur: () => {
                        ee(!1), er("global_name");
                    },
                }),
                (0, i.jsx)(p.A, {
                    show: Z,
                    top: -12,
                    bottom: 20,
                    children: (0, i.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: v.intl.string(v.t["330TCc"]),
                    }),
                }),
                (0, i.jsxs)("div", {
                    onBlur: () => en(!1),
                    onFocus: () => {
                        en(!0), ei();
                    },
                    tabIndex: -1,
                    children: [
                        (0, i.jsx)(A.pd, {
                            label: v.intl.string(v.t.TWzdWj),
                            className: T.SX,
                            name: "username",
                            value: r,
                            onChange: B,
                            error: w ?? (0, E.y)(Q),
                            autoComplete: "off",
                            setRef: ea,
                            required: !0,
                            onFocus: () => es("username"),
                            onBlur: () => er("username"),
                        }),
                        (0, i.jsx)(I.A, {
                            username: r,
                            suggestion: H,
                            globalName: n,
                            isUsernameFocused: et,
                            onClickSuggestion: () => {
                                ea.current?.focus(), W();
                            },
                        }),
                    ],
                }),
                (0, i.jsx)(A.pd, {
                    label: v.intl.string(v.t["CIGa+7"]),
                    name: "password",
                    value: j,
                    onChange: G,
                    error: D ?? (0, E.y)(Y),
                    type: "password",
                    autoComplete: "new-password",
                    setRef: ec,
                    required: !0,
                    onFocus: () => es("password"),
                    onBlur: () => er("password"),
                }),
                (0, i.jsx)(u.A, {
                    label: v.intl.string(v.t.rhBeKe),
                    wrapperClassName: C.UJ,
                    name: "date_of_birth",
                    onChange: M,
                    error: k ?? (0, E.y)(X),
                    value: S,
                    required: !0,
                    onFocus: es,
                    onBlur: er,
                }),
                (0, i.jsx)(f.A, {}),
                (0, i.jsx)(x.A, { consent: y, consentRequired: J, onConsentChange: F }),
                (0, i.jsx)(o.m, {
                    text: !y && J ? v.intl.string(v.t.AY4IVA) : null,
                    children: (0, i.jsx)("div", {
                        className: T.QX,
                        children: (0, i.jsx)(c.Button, {
                            text: v.intl.string(v.t["825cFy"]),
                            variant: "primary",
                            fullWidth: !0,
                            type: "submit",
                            loading: b,
                            disabled: !$ || R,
                        }),
                    }),
                }),
                ed,
                (0, i.jsx)("div", {
                    className: T.QX,
                    children: (0, i.jsx)(c.QWc, {
                        text: v.intl.string(v.t["1lWxux"]),
                        textVariant: "text-sm/normal",
                        onClick: V,
                    }),
                }),
            ],
        })
    );
}
