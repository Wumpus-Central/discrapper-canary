"use strict";
n.d(t, { A: () => L });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(311907),
    o = n(990078),
    c = n(397927),
    d = n(198982),
    u = n(475743),
    h = n(201505);
n(829926);
var _ = n(493527),
    p = n(544395),
    g = n(794696),
    m = n(153488),
    A = n(954571),
    f = n(203982),
    E = n(240248),
    x = n(934337),
    I = n(15552),
    N = n(906564),
    v = n(854378),
    T = n(442184),
    j = n(362707),
    C = n(782021),
    S = n(773134),
    y = n(652215);
n(436317), n(45723);
var b = n(985018),
    R = n(731286),
    O = n(818050);
function L(e) {
    let {
            initialEmail: t,
            invite: n,
            giftCode: r,
            guildTemplate: L,
            onApiErrors: w,
            onEmailChange: k,
            onGotoLogin: D,
            onRegister: U,
        } = e,
        [P, B] = s.useState(!1),
        [G, M] = s.useState(!1),
        F = async () => {
            $.length > 0 && !p.A.wasRegistrationSuggestionFetched($) && (await _.A.fetchSuggestionsRegistration($));
        },
        V = (e) => {
            A.default.track(y.HAw.REGISTER_INPUT_FOCUS, { field: e });
        },
        W = (e) => {
            A.default.track(y.HAw.REGISTER_INPUT_BLUR, { field: e });
        },
        H = (0, a.bG)([m.A], () => m.A.getAuthenticationConsentRequired()),
        K = (0, a.bG)([p.A], () => p.A.registrationUsernameSuggestion()),
        z = s.useRef(null),
        Q = s.useRef(null),
        q = s.useRef(null),
        Y = s.useRef(null),
        [X, J] = s.useState(t),
        [$, Z] = s.useState(""),
        [ee, et] = s.useState(""),
        [en, ei] = s.useState(""),
        [es, er] = s.useState(null),
        [el, ea] = (0, j.S9)(H),
        [eo, ec] = s.useState(!1),
        [ed, eu] = (0, j.ic)(),
        [eh, e_] = s.useState({}),
        { message: ep, email: eg, username: em, global_name: eA, password: ef, date_of_birth: eE } = eh,
        [ex, eI] = s.useState(null),
        [eN, ev] = s.useState(null),
        [eT, ej] = s.useState(null),
        [eC, eS] = s.useState(null),
        ey = null != H && el;
    !(function (e) {
        let { apiErrors: t, emailRef: n, usernameRef: i, globalNameRef: r, passwordRef: l } = e,
            a = (0, u.A)(t);
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
    })({ apiErrors: eh, emailRef: z, usernameRef: Q, globalNameRef: q, passwordRef: Y });
    let eb = s.useCallback(async () => {
            let e = null != r ? r.skuId : null,
                t = x.mZ.getState(),
                i = (0, E.uJ)(K) ? null : ee === K;
            f._.dispatch(y.jej.WAVE_EMPHASIZE), ec(!0), e_({});
            try {
                await (0, N.pG)({
                    email: X,
                    username: ee,
                    globalName: $,
                    consent: el,
                    password: en,
                    invite: n?.code,
                    usedUsernameSuggestion: i,
                    guildTemplateCode: L?.code,
                    giftCodeSKUId: e,
                    birthday: es,
                    promoEmailConsent: t.required ? t : null,
                }),
                    U?.();
            } catch (t) {
                if ((ec(!1), !(t instanceof d.LG))) return;
                let e = (0, I.W)(t);
                e_(e), w?.(e), "number" == typeof e.retry_after && eu(e.retry_after);
            }
        }, [r, L, n, X, w, U, K, ee, $, en, es, el, eu]),
        eR = s.useCallback(
            (e) => {
                if ((e?.preventDefault(), null == H)) return;
                let t = !1;
                0 === X.length && (eI(b.intl.string(b.t.EkokLy)), (t = !0)),
                    0 === ee.length && (ev(b.intl.string(b.t.EkokLy)), (t = !0)),
                    0 === en.length && (ej(b.intl.string(b.t.EkokLy)), (t = !0)),
                    null == es && (eS(b.intl.string(b.t.EkokLy)), (t = !0)),
                    t || eb();
            },
            [X, ee, en, es, H, eb],
        ),
        eO = null;
    return (
        "string" == typeof ep && (eO = (0, i.jsx)(v.ME, { className: l()(O.QX, R.gJ), children: ep })),
        (0, i.jsx)("form", {
            onSubmit: eR,
            children: (0, i.jsxs)(v.eB, {
                className: O.QX,
                children: [
                    (0, i.jsx)(v.pd, {
                        autoFocus: !0,
                        className: O.SX,
                        label: b.intl.string(b.t.dI4d4S),
                        name: "email",
                        value: X,
                        onChange: (e) => {
                            J(e), k?.(e), eI(0 === e.length ? b.intl.string(b.t.EkokLy) : null);
                        },
                        error: ex ?? (0, j.yX)(eg),
                        type: "email",
                        autoComplete: "username",
                        setRef: z,
                        required: !0,
                        onFocus: () => V("email"),
                        onBlur: () => W("email"),
                    }),
                    (0, i.jsx)(v.pd, {
                        label: b.intl.string(b.t["9AjdkD"]),
                        className: O.SX,
                        name: "global_name",
                        value: $,
                        onChange: Z,
                        error: (0, j.yX)(eA),
                        maxLength: 32,
                        autoComplete: "off",
                        setRef: q,
                        onFocus: () => {
                            B(!0), V("global_name");
                        },
                        onBlur: () => {
                            B(!1), W("global_name");
                        },
                    }),
                    (0, i.jsx)(g.A, {
                        show: P,
                        top: -12,
                        bottom: 20,
                        children: (0, i.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: b.intl.string(b.t["330TCc"]),
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        onBlur: () => M(!1),
                        onFocus: () => {
                            M(!0), F();
                        },
                        tabIndex: -1,
                        children: [
                            (0, i.jsx)(v.pd, {
                                label: b.intl.string(b.t.TWzdWj),
                                className: O.SX,
                                name: "username",
                                value: ee,
                                onChange: (e) => {
                                    et(e.toLocaleLowerCase()), ev(0 === e.length ? b.intl.string(b.t.EkokLy) : null);
                                },
                                error: eN ?? (0, j.yX)(em),
                                autoComplete: "off",
                                setRef: Q,
                                required: !0,
                                onFocus: () => V("username"),
                                onBlur: () => W("username"),
                            }),
                            (0, i.jsx)(S.A, {
                                username: ee,
                                suggestion: K,
                                globalName: $,
                                isUsernameFocused: G,
                                onClickSuggestion: () => {
                                    Q.current?.focus(), null != K && K.length > 0 && et(K);
                                },
                            }),
                        ],
                    }),
                    (0, i.jsx)(v.pd, {
                        label: b.intl.string(b.t["CIGa+7"]),
                        name: "password",
                        value: en,
                        onChange: (e) => {
                            ei(e), ej(0 === e.length ? b.intl.string(b.t.EkokLy) : null);
                        },
                        error: eT ?? (0, j.yX)(ef),
                        type: "password",
                        autoComplete: "new-password",
                        setRef: Y,
                        required: !0,
                        onFocus: () => V("password"),
                        onBlur: () => W("password"),
                    }),
                    (0, i.jsx)(h.A, {
                        label: b.intl.string(b.t.rhBeKe),
                        wrapperClassName: R.UJ,
                        name: "date_of_birth",
                        onChange: (e) => {
                            er(e), null != e && eS(null);
                        },
                        error: eC ?? (0, j.yX)(eE),
                        value: es,
                        required: !0,
                        onFocus: V,
                        onBlur: W,
                    }),
                    (0, i.jsx)(T.A, {}),
                    (0, i.jsx)(C.A, { consent: el, consentRequired: H, onConsentChange: ea }),
                    (0, i.jsx)(o.m, {
                        text: !el && H ? b.intl.string(b.t.AY4IVA) : null,
                        children: (0, i.jsx)("div", {
                            className: O.QX,
                            children: (0, i.jsx)(c.Button, {
                                text: b.intl.string(b.t["825cFy"]),
                                variant: "primary",
                                fullWidth: !0,
                                type: "submit",
                                loading: eo,
                                disabled: !ey || ed,
                            }),
                        }),
                    }),
                    eO,
                    (0, i.jsx)("div", {
                        className: O.QX,
                        children: (0, i.jsx)(c.QWc, {
                            text: b.intl.string(b.t["1lWxux"]),
                            textVariant: "text-sm/normal",
                            onClick: D,
                        }),
                    }),
                ],
            }),
        })
    );
}
