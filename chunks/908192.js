"use strict";
n.d(t, { A: () => k });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(311907),
    o = n(990078),
    c = n(834730),
    d = n(821609),
    u = n(123292),
    _ = n(198982),
    h = n(475743),
    m = n(201505);
n(829926);
var g = n(493527),
    p = n(544395),
    A = n(794696),
    f = n(153488),
    E = n(954571),
    x = n(203982),
    I = n(240248),
    v = n(934337),
    N = n(15552),
    j = n(906564),
    C = n(854378),
    T = n(442184),
    y = n(362707),
    b = n(782021),
    S = n(773134),
    R = n(652215);
n(436317), n(45723);
var O = n(985018),
    L = n(731286),
    w = n(818050);
function k(e) {
    let {
            initialEmail: t,
            invite: n,
            giftCode: r,
            guildTemplate: k,
            onApiErrors: G,
            onEmailChange: D,
            onGotoLogin: P,
            onRegister: U,
        } = e,
        [B, M] = s.useState(!1),
        [V, F] = s.useState(!1),
        W = async () => {
            ee.length > 0 && !p.A.wasRegistrationSuggestionFetched(ee) && (await g.A.fetchSuggestionsRegistration(ee));
        },
        H = (e) => {
            E.default.track(R.HAw.REGISTER_INPUT_FOCUS, { field: e });
        },
        z = (e) => {
            E.default.track(R.HAw.REGISTER_INPUT_BLUR, { field: e });
        },
        K = (0, a.bG)([f.A], () => f.A.getAuthenticationConsentRequired()),
        Q = (0, a.bG)([p.A], () => p.A.registrationUsernameSuggestion()),
        Y = s.useRef(null),
        q = s.useRef(null),
        X = s.useRef(null),
        $ = s.useRef(null),
        [Z, J] = s.useState(t),
        [ee, et] = s.useState(""),
        [en, ei] = s.useState(""),
        [es, er] = s.useState(""),
        [el, ea] = s.useState(null),
        [eo, ec] = (0, y.S9)(K),
        [ed, eu] = s.useState(!1),
        [e_, eh] = (0, y.ic)(),
        [em, eg] = s.useState({}),
        { message: ep, email: eA, username: ef, global_name: eE, password: ex, date_of_birth: eI } = em,
        [ev, eN] = s.useState(null),
        [ej, eC] = s.useState(null),
        [eT, ey] = s.useState(null),
        [eb, eS] = s.useState(null),
        eR = null != K && eo;
    !(function (e) {
        let { apiErrors: t, emailRef: n, usernameRef: i, globalNameRef: r, passwordRef: l } = e,
            a = (0, h.A)(t);
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
    })({ apiErrors: em, emailRef: Y, usernameRef: q, globalNameRef: X, passwordRef: $ });
    let eO = s.useCallback(async () => {
            let e = null != r ? r.skuId : null,
                t = v.mZ.getState(),
                i = (0, I.uJ)(Q) ? null : en === Q;
            x._.dispatch(R.jej.WAVE_EMPHASIZE), eu(!0), eg({});
            try {
                await (0, j.pG)({
                    email: Z,
                    username: en,
                    globalName: ee,
                    consent: eo,
                    password: es,
                    invite: n?.code,
                    usedUsernameSuggestion: i,
                    guildTemplateCode: k?.code,
                    giftCodeSKUId: e,
                    birthday: el,
                    promoEmailConsent: t.required ? t : null,
                }),
                    U?.();
            } catch (t) {
                if ((eu(!1), !(t instanceof _.LG))) return;
                let e = (0, N.W)(t);
                eg(e), G?.(e), "number" == typeof e.retry_after && eh(e.retry_after);
            }
        }, [r, k, n, Z, G, U, Q, en, ee, es, el, eo, eh]),
        eL = s.useCallback(
            (e) => {
                if ((e?.preventDefault(), null == K)) return;
                let t = !1;
                0 === Z.length && (eN(O.intl.string(O.t.EkokLy)), (t = !0)),
                    0 === en.length && (eC(O.intl.string(O.t.EkokLy)), (t = !0)),
                    0 === es.length && (ey(O.intl.string(O.t.EkokLy)), (t = !0)),
                    null == el && (eS(O.intl.string(O.t.EkokLy)), (t = !0)),
                    t || eO();
            },
            [Z, en, es, el, K, eO],
        ),
        ew = null;
    return (
        "string" == typeof ep && (ew = (0, i.jsx)(C.ME, { className: l()(w.QX, L.gJ), children: ep })),
        (0, i.jsx)("form", {
            onSubmit: eL,
            children: (0, i.jsxs)(C.eB, {
                className: w.QX,
                children: [
                    (0, i.jsx)(C.pd, {
                        autoFocus: !0,
                        className: w.SX,
                        label: O.intl.string(O.t.dI4d4S),
                        name: "email",
                        value: Z,
                        onChange: (e) => {
                            J(e), D?.(e), eN(0 === e.length ? O.intl.string(O.t.EkokLy) : null);
                        },
                        error: ev ?? (0, y.yX)(eA),
                        type: "email",
                        autoComplete: "username",
                        setRef: Y,
                        required: !0,
                        onFocus: () => H("email"),
                        onBlur: () => z("email"),
                    }),
                    (0, i.jsx)(C.pd, {
                        label: O.intl.string(O.t["9AjdkD"]),
                        className: w.SX,
                        name: "global_name",
                        value: ee,
                        onChange: et,
                        error: (0, y.yX)(eE),
                        maxLength: 32,
                        autoComplete: "off",
                        setRef: X,
                        onFocus: () => {
                            M(!0), H("global_name");
                        },
                        onBlur: () => {
                            M(!1), z("global_name");
                        },
                    }),
                    (0, i.jsx)(A.A, {
                        show: B,
                        top: -12,
                        bottom: 20,
                        children: (0, i.jsx)(c.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: O.intl.string(O.t["330TCc"]),
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        onBlur: () => F(!1),
                        onFocus: () => {
                            F(!0), W();
                        },
                        tabIndex: -1,
                        children: [
                            (0, i.jsx)(C.pd, {
                                label: O.intl.string(O.t.TWzdWj),
                                className: w.SX,
                                name: "username",
                                value: en,
                                onChange: (e) => {
                                    ei(e.toLocaleLowerCase()), eC(0 === e.length ? O.intl.string(O.t.EkokLy) : null);
                                },
                                error: ej ?? (0, y.yX)(ef),
                                autoComplete: "off",
                                setRef: q,
                                required: !0,
                                onFocus: () => H("username"),
                                onBlur: () => z("username"),
                            }),
                            (0, i.jsx)(S.A, {
                                username: en,
                                suggestion: Q,
                                globalName: ee,
                                isUsernameFocused: V,
                                onClickSuggestion: () => {
                                    q.current?.focus(), null != Q && Q.length > 0 && ei(Q);
                                },
                            }),
                        ],
                    }),
                    (0, i.jsx)(C.pd, {
                        label: O.intl.string(O.t["CIGa+7"]),
                        name: "password",
                        value: es,
                        onChange: (e) => {
                            er(e), ey(0 === e.length ? O.intl.string(O.t.EkokLy) : null);
                        },
                        error: eT ?? (0, y.yX)(ex),
                        type: "password",
                        autoComplete: "new-password",
                        setRef: $,
                        required: !0,
                        onFocus: () => H("password"),
                        onBlur: () => z("password"),
                    }),
                    (0, i.jsx)(m.A, {
                        label: O.intl.string(O.t.rhBeKe),
                        wrapperClassName: L.UJ,
                        name: "date_of_birth",
                        onChange: (e) => {
                            ea(e), null != e && eS(null);
                        },
                        error: eb ?? (0, y.yX)(eI),
                        value: el,
                        required: !0,
                        onFocus: H,
                        onBlur: z,
                    }),
                    (0, i.jsx)(T.A, {}),
                    (0, i.jsx)(b.A, { consent: eo, consentRequired: K, onConsentChange: ec }),
                    (0, i.jsx)(o.m, {
                        text: !eo && K ? O.intl.string(O.t.AY4IVA) : null,
                        children: (0, i.jsx)("div", {
                            className: w.QX,
                            children: (0, i.jsx)(d.$, {
                                text: O.intl.string(O.t["825cFy"]),
                                variant: "primary",
                                fullWidth: !0,
                                type: "submit",
                                loading: ed,
                                disabled: !eR || e_,
                            }),
                        }),
                    }),
                    ew,
                    (0, i.jsx)("div", {
                        className: w.QX,
                        children: (0, i.jsx)(u.Q, {
                            text: O.intl.string(O.t["1lWxux"]),
                            textVariant: "text-sm/normal",
                            onClick: P,
                        }),
                    }),
                ],
            }),
        })
    );
}
