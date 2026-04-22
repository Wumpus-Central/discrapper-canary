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
var p = n(493527),
    g = n(544395),
    A = n(794696),
    f = n(153488),
    x = n(954571),
    E = n(203982),
    I = n(240248),
    v = n(934337),
    N = n(15552),
    j = n(906564),
    C = n(854378),
    T = n(442184),
    b = n(362707),
    S = n(782021),
    y = n(773134),
    R = n(652215);
n(436317), n(45723);
var w = n(985018),
    O = n(731286),
    L = n(818050);
function k(e) {
    let {
            initialEmail: t,
            invite: n,
            giftCode: r,
            guildTemplate: k,
            onApiErrors: G,
            onEmailChange: U,
            onGotoLogin: D,
            onRegister: P,
        } = e,
        [B, M] = s.useState(!1),
        [V, F] = s.useState(!1),
        W = async () => {
            ee.length > 0 && !g.A.wasRegistrationSuggestionFetched(ee) && (await p.A.fetchSuggestionsRegistration(ee));
        },
        H = (e) => {
            x.default.track(R.HAw.REGISTER_INPUT_FOCUS, { field: e });
        },
        z = (e) => {
            x.default.track(R.HAw.REGISTER_INPUT_BLUR, { field: e });
        },
        K = (0, a.bG)([f.A], () => f.A.getAuthenticationConsentRequired()),
        Q = (0, a.bG)([g.A], () => g.A.registrationUsernameSuggestion()),
        q = s.useRef(null),
        Y = s.useRef(null),
        X = s.useRef(null),
        $ = s.useRef(null),
        [Z, J] = s.useState(t),
        [ee, et] = s.useState(""),
        [en, ei] = s.useState(""),
        [es, er] = s.useState(""),
        [el, ea] = s.useState(null),
        [eo, ec] = (0, b.S9)(K),
        [ed, eu] = s.useState(!1),
        [e_, eh] = (0, b.ic)(),
        [em, ep] = s.useState({}),
        { message: eg, email: eA, username: ef, global_name: ex, password: eE, date_of_birth: eI } = em,
        [ev, eN] = s.useState(null),
        [ej, eC] = s.useState(null),
        [eT, eb] = s.useState(null),
        [eS, ey] = s.useState(null),
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
    })({ apiErrors: em, emailRef: q, usernameRef: Y, globalNameRef: X, passwordRef: $ });
    let ew = s.useCallback(async () => {
            let e = null != r ? r.skuId : null,
                t = v.mZ.getState(),
                i = (0, I.uJ)(Q) ? null : en === Q;
            E._.dispatch(R.jej.WAVE_EMPHASIZE), eu(!0), ep({});
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
                    P?.();
            } catch (t) {
                if ((eu(!1), !(t instanceof _.LG))) return;
                let e = (0, N.W)(t);
                ep(e), G?.(e), "number" == typeof e.retry_after && eh(e.retry_after);
            }
        }, [r, k, n, Z, G, P, Q, en, ee, es, el, eo, eh]),
        eO = s.useCallback(
            (e) => {
                if ((e?.preventDefault(), null == K)) return;
                let t = !1;
                0 === Z.length && (eN(w.intl.string(w.t.EkokLy)), (t = !0)),
                    0 === en.length && (eC(w.intl.string(w.t.EkokLy)), (t = !0)),
                    0 === es.length && (eb(w.intl.string(w.t.EkokLy)), (t = !0)),
                    null == el && (ey(w.intl.string(w.t.EkokLy)), (t = !0)),
                    t || ew();
            },
            [Z, en, es, el, K, ew],
        ),
        eL = null;
    return (
        "string" == typeof eg && (eL = (0, i.jsx)(C.ME, { className: l()(L.QX, O.gJ), children: eg })),
        (0, i.jsx)("form", {
            onSubmit: eO,
            children: (0, i.jsxs)(C.eB, {
                className: L.QX,
                children: [
                    (0, i.jsx)(C.pd, {
                        autoFocus: !0,
                        className: L.SX,
                        label: w.intl.string(w.t.dI4d4S),
                        name: "email",
                        value: Z,
                        onChange: (e) => {
                            J(e), U?.(e), eN(0 === e.length ? w.intl.string(w.t.EkokLy) : null);
                        },
                        error: ev ?? (0, b.yX)(eA),
                        type: "email",
                        autoComplete: "username",
                        setRef: q,
                        required: !0,
                        onFocus: () => H("email"),
                        onBlur: () => z("email"),
                    }),
                    (0, i.jsx)(C.pd, {
                        label: w.intl.string(w.t["9AjdkD"]),
                        className: L.SX,
                        name: "global_name",
                        value: ee,
                        onChange: et,
                        error: (0, b.yX)(ex),
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
                            children: w.intl.string(w.t["330TCc"]),
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
                                label: w.intl.string(w.t.TWzdWj),
                                className: L.SX,
                                name: "username",
                                value: en,
                                onChange: (e) => {
                                    ei(e.toLocaleLowerCase()), eC(0 === e.length ? w.intl.string(w.t.EkokLy) : null);
                                },
                                error: ej ?? (0, b.yX)(ef),
                                autoComplete: "off",
                                setRef: Y,
                                required: !0,
                                onFocus: () => H("username"),
                                onBlur: () => z("username"),
                            }),
                            (0, i.jsx)(y.A, {
                                username: en,
                                suggestion: Q,
                                globalName: ee,
                                isUsernameFocused: V,
                                onClickSuggestion: () => {
                                    Y.current?.focus(), null != Q && Q.length > 0 && ei(Q);
                                },
                            }),
                        ],
                    }),
                    (0, i.jsx)(C.pd, {
                        label: w.intl.string(w.t["CIGa+7"]),
                        name: "password",
                        value: es,
                        onChange: (e) => {
                            er(e), eb(0 === e.length ? w.intl.string(w.t.EkokLy) : null);
                        },
                        error: eT ?? (0, b.yX)(eE),
                        type: "password",
                        autoComplete: "new-password",
                        setRef: $,
                        required: !0,
                        onFocus: () => H("password"),
                        onBlur: () => z("password"),
                    }),
                    (0, i.jsx)(m.A, {
                        label: w.intl.string(w.t.rhBeKe),
                        wrapperClassName: O.UJ,
                        name: "date_of_birth",
                        onChange: (e) => {
                            ea(e), null != e && ey(null);
                        },
                        error: eS ?? (0, b.yX)(eI),
                        value: el,
                        required: !0,
                        onFocus: H,
                        onBlur: z,
                    }),
                    (0, i.jsx)(T.A, {}),
                    (0, i.jsx)(S.A, { consent: eo, consentRequired: K, onConsentChange: ec }),
                    (0, i.jsx)(o.m, {
                        text: !eo && K ? w.intl.string(w.t.AY4IVA) : null,
                        children: (0, i.jsx)("div", {
                            className: L.QX,
                            children: (0, i.jsx)(d.$, {
                                text: w.intl.string(w.t["825cFy"]),
                                variant: "primary",
                                fullWidth: !0,
                                type: "submit",
                                loading: ed,
                                disabled: !eR || e_,
                            }),
                        }),
                    }),
                    eL,
                    (0, i.jsx)("div", {
                        className: L.QX,
                        children: (0, i.jsx)(u.Q, {
                            text: w.intl.string(w.t["1lWxux"]),
                            textVariant: "text-sm/normal",
                            onClick: D,
                        }),
                    }),
                ],
            }),
        })
    );
}
