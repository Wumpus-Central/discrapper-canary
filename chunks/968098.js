n.d(t, { A: () => eL });
var l,
    a = n(627968),
    s = n(64700),
    i = n(503698),
    r = n.n(i),
    o = n(492462),
    u = n(110259),
    c = n(935399),
    d = n(17928),
    h = n(821609),
    m = n(921853),
    g = n(830215),
    f = n(475743),
    _ = n(17841),
    A = n(509434),
    x = n(854378),
    E = n(975571),
    p = n(652215),
    S = n(985018),
    j = n(153801);
let N = () =>
    (0, a.jsx)(x.Ay, {
        children: (0, a.jsxs)("div", {
            className: j.hQ,
            children: [
                (0, a.jsx)(x.hE, { className: j.DD, children: S.intl.string(S.t.nCB6Ga) }),
                (0, a.jsx)(x.tK, {
                    className: j.VA,
                    children: S.intl.format(S.t.KQgoxG, { underageMessage: S.intl.string(S.t.WqEH4D) }),
                }),
                (0, a.jsx)(h.$, {
                    icon: A.I,
                    text: S.intl.string(S.t.hvVgAZ),
                    onClick: () => window.open(E.A.getArticleURL(p.MVz.AGE_GATE), "_blank"),
                    iconPosition: "end",
                }),
            ],
        }),
    });
var C = n(139286),
    R = n(990078),
    v = n(834730),
    I = n(123292),
    b = n(845584),
    y = n(201505);
n(417635), n(827343), n(792251), n(19575), n(945041);
var w = n(493527),
    k = n(544395),
    T = n(446837),
    L = n(785651),
    G = n(717421);
let F = window.ResizeObserver ?? T.t;
function O(e) {
    let { show: t, children: n, top: l = 0, bottom: i = 0 } = e,
        { ref: r, height: o } = (() => {
            let e = s.useRef(null),
                [t, n] = s.useState(0),
                l = s.useMemo(
                    () =>
                        new F((e) => {
                            let [t] = e;
                            return n(t.contentRect.height);
                        }),
                    [],
                );
            return (
                s.useLayoutEffect(() => (null != e.current && l.observe(e.current), () => l.disconnect()), [l]),
                { ref: e, height: t }
            );
        })(),
        u = (0, G.z)({
            from: { height: 0, paddingBottom: "0px", marginTop: "0px" },
            to: { height: t ? o : 0, paddingBottom: t ? `${i}px` : "0px", marginTop: t ? `${l}px` : "0px" },
            config: { tension: 170, friction: 26 },
        }),
        c = (0, G.z)({
            from: { opacity: 0 },
            to: { opacity: +!!t },
            config: { duration: 200, easing: t ? (e) => e ** 4 : (e) => e * (2 - e) },
        });
    return (0, a.jsx)(L.animated.div, {
        style: { overflow: "hidden", height: u.height, paddingBottom: u.paddingBottom, marginTop: u.marginTop },
        children: (0, a.jsx)(L.animated.div, { style: { opacity: c.opacity }, ref: r, children: n }),
    });
}
var U = n(153488),
    B = n(954571),
    D = n(625494),
    M = n(240248),
    P = n(934337),
    V = n(15552),
    W = n(989349),
    H = n.n(W),
    Q = n(228366),
    X = n(181658),
    q = n(955437),
    z = n(888548),
    Z = n(495544),
    $ = n(499785),
    K = n(569717),
    Y = n(204925);
function J(e) {
    let {
        email: t,
        phoneToken: n,
        username: l,
        globalName: a,
        consent: s,
        password: i,
        guildTemplateCode: r,
        birthday: o,
        invite: c = null,
        giftCodeSKUId: d = null,
        promoEmailConsent: h = null,
        usedUsernameSuggestion: m = null,
    } = e;
    if ((Q.h.dispatch({ type: "REGISTER" }), null != o)) {
        let e;
        (0, K.A)(o, p.JJy.REGISTER),
            B.default.track(p.HAw.AGE_GATE_ACTION, { source: Y.w_.REGISTER, action: Y.AM.AGE_GATE_SUBMITTED }),
            (e = H()().diff(o, "years")) < 13 ||
                B.default.track(p.HAw.USER_AGE_SUBMITTED, {
                    age_bucket: e >= 13 && e <= 17 ? "13-17" : e >= 18 && e <= 22 ? "18-22" : "23+",
                });
    }
    return $.A.post({
        url: p.Rsh.REGISTER,
        body: {
            fingerprint: Z.default.getFingerprint(),
            email: t,
            username: l,
            global_name: a,
            password: i,
            invite: c,
            consent: s,
            phone_token: n,
            date_of_birth: o?.format("YYYY-MM-DD"),
            gift_code_sku_id: d,
            guild_template_code: r,
            promotional_email_opt_in: h?.checked,
        },
        trackedActionData: {
            event: u.NetworkActionNames.USER_REGISTER,
            properties: {
                invite_code: c,
                used_username_suggestion: m,
                promotional_email_opt_in: h?.checked,
                promotional_email_pre_checked: h?.preChecked,
                was_unique_username: !0,
            },
        },
        rejectWithError: !1,
    }).then(
        (e) => {
            Q.h.dispatch({ type: "REGISTER_SUCCESS", token: e.body.token }),
                B.default.track(p.HAw.AGE_GATE_ACTION, { source: Y.w_.REGISTER, action: Y.AM.AGE_GATE_SUCCESS });
        },
        (e) => {
            if (e instanceof z.CaptchaCancelError) throw e;
            let t = new X.A(e);
            throw (
                (null != t.getFieldErrors("date_of_birth") && q.Xv(Y.w_.REGISTER),
                B.default.track(p.HAw.REGISTER_SUBMIT_ERRORED, {
                    is_unique_username_registration: !0,
                    email_error_reason: t.getFirstFieldErrorMessage("email"),
                    phone_error_reason: t.getFirstFieldErrorMessage("phone_token"),
                    password_error_reason: t.getFirstFieldErrorMessage("password"),
                    username_error_reason: t.getFirstFieldErrorMessage("username"),
                    global_name_error_reason: t.getFirstFieldErrorMessage("global_name"),
                    date_of_birth_error_reason: t.getFirstFieldErrorMessage("date_of_birth"),
                    promotional_email_opt_in_error_reason: t.getFirstFieldErrorMessage("promotional_email_opt_in"),
                    fingerprint_error_reason: t.getFirstFieldErrorMessage("fingerprint"),
                    invite_error_reason: t.getFirstFieldErrorMessage("invite"),
                    gift_code_sku_id_error_reason: t.getFirstFieldErrorMessage("gift_code_sku_id"),
                    guild_template_code_error_reason: t.getFirstFieldErrorMessage("guild_template_code"),
                    consent_error_reason: t.getFirstFieldErrorMessage("consent"),
                    generic_error_reason: t.getAnyErrorMessage(),
                }),
                t)
            );
        },
    );
}
var ee = n(568385),
    et = n(818050);
function en() {
    let { required: e, checked: t } = (0, P.mZ)();
    return e
        ? (0, a.jsx)("div", {
              className: et.Ot,
              children: (0, a.jsx)(ee.J, {
                  label: S.intl.string(S.t["0p3R0+"]),
                  checked: t,
                  onChange: P.Bw,
                  labelType: "secondary",
              }),
          })
        : null;
}
var el = n(927813);
let ea = /\.$/,
    es = (e) =>
        Array.isArray(e)
            ? e
                  .map((e) => e.replace(ea, ""))
                  .join(". ")
                  .trim()
            : e;
function ei(e) {
    let [t, n] = s.useState(() => null != e && !e),
        [l, a] = s.useState(e);
    return null == l && null != e ? (a(e), n(!e)) : l !== e && a(e), [t, n];
}
function er() {
    let [e, t] = s.useState(!1),
        n = s.useRef(null);
    return (
        s.useEffect(
            () => () => {
                null != n.current && clearTimeout(n.current);
            },
            [],
        ),
        [
            e,
            s.useCallback((e) => {
                null != n.current && clearTimeout(n.current),
                    t(!0),
                    (n.current = setTimeout(() => {
                        t(!1), (n.current = null);
                    }, e * el.A.Millis.SECOND));
            }, []),
        ]
    );
}
var eo = n(731286);
function eu(e) {
    let { consent: t, consentRequired: n, onConsentChange: l } = e;
    return n
        ? (0, a.jsx)("div", {
              className: eo.IQ,
              children: (0, a.jsx)(ee.J, {
                  label: S.intl.format(S.t.qMDAP0, { termsURL: p.X7G.TERMS, privacyURL: p.X7G.PRIVACY }),
                  checked: t,
                  onChange: l,
                  labelType: "secondary",
              }),
          })
        : (0, a.jsx)(v.E, {
              variant: "text-sm/normal",
              color: "text-subtle",
              className: r()(et.Ot, eo.E2),
              children: S.intl.format(S.t["KI+BSb"], { termsURL: p.X7G.TERMS, privacyURL: p.X7G.PRIVACY }),
          });
}
n(801541);
var ec = n(889137),
    ed = n(546727),
    eh = n(5052);
function em(e) {
    let t,
        { username: n, suggestion: l, globalName: s, isUsernameFocused: i, onClickSuggestion: r } = e,
        o = (0, eh.i)(n, !0, !0),
        u = n.length > 0;
    return (
        (t = u
            ? (0, ec.YW)(o)
                  .with({ type: ed.q.ERROR, message: ec.P.select() }, (e) =>
                      (0, a.jsx)(v.E, { className: eo.vU, variant: "text-sm/normal", children: e }),
                  )
                  .with({ type: ed.q.AVAILABLE, message: ec.P.select() }, (e) =>
                      (0, a.jsx)(v.E, { className: eo.vq, variant: "text-sm/normal", children: e }),
                  )
                  .otherwise(() =>
                      (0, a.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          children: S.intl.string(S.t.z7c4bP),
                      }),
                  )
            : null != l && l.length > 0 && s.length > 0
              ? (0, a.jsx)(v.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: S.intl.format(S.t.nDGqqq, { suggestion: l, nameOnClick: r }),
                })
              : (0, a.jsx)(v.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: S.intl.string(S.t.z7c4bP),
                })),
        (0, a.jsx)(O, { show: (u && o?.type === ed.q.ERROR) || i, top: -12, bottom: 20, children: t })
    );
}
function eg(e) {
    let {
            initialEmail: t,
            invite: n,
            giftCode: l,
            guildTemplate: i,
            onApiErrors: o,
            onEmailChange: u,
            onGotoLogin: c,
            onRegister: m,
        } = e,
        [g, _] = s.useState(!1),
        [A, E] = s.useState(!1),
        j = async () => {
            q.length > 0 && !k.A.wasRegistrationSuggestionFetched(q) && (await w.A.fetchSuggestionsRegistration(q));
        },
        N = (e) => {
            B.default.track(p.HAw.REGISTER_INPUT_FOCUS, { field: e });
        },
        C = (e) => {
            B.default.track(p.HAw.REGISTER_INPUT_BLUR, { field: e });
        },
        T = (0, d.bG)([U.A], () => U.A.getAuthenticationConsentRequired()),
        L = (0, d.bG)([k.A], () => k.A.registrationUsernameSuggestion()),
        G = s.useRef(null),
        F = s.useRef(null),
        W = s.useRef(null),
        H = s.useRef(null),
        [Q, X] = s.useState(t),
        [q, z] = s.useState(""),
        [Z, $] = s.useState(""),
        [K, Y] = s.useState(""),
        [ee, el] = s.useState(null),
        [ea, ec] = ei(T),
        [ed, eh] = s.useState(!1),
        [eg, ef] = er(),
        [e_, eA] = s.useState({}),
        { message: ex, email: eE, username: ep, global_name: eS, password: ej, date_of_birth: eN } = e_,
        [eC, eR] = s.useState(null),
        [ev, eI] = s.useState(null),
        [eb, ey] = s.useState(null),
        [ew, ek] = s.useState(null),
        eT = null != T && ea;
    !(function (e) {
        let { apiErrors: t, emailRef: n, usernameRef: l, globalNameRef: a, passwordRef: i } = e,
            r = (0, f.A)(t);
        s.useEffect(() => {
            null == r ||
                (r !== t &&
                    (null != t.email || null != t.phone
                        ? n.current?.focus()
                        : null != t.username
                          ? l.current?.focus()
                          : null != t.global_name
                            ? a.current?.focus()
                            : null != t.password && i.current?.focus()));
        }, [t, r, n, l, a, i]);
    })({ apiErrors: e_, emailRef: G, usernameRef: F, globalNameRef: W, passwordRef: H });
    let eL = s.useCallback(async () => {
            let e = null != l ? l.skuId : null,
                t = P.mZ.getState(),
                a = (0, M.uJ)(L) ? null : Z === L;
            D._.dispatch(p.jej.WAVE_EMPHASIZE), eh(!0), eA({});
            try {
                await J({
                    email: Q,
                    username: Z,
                    globalName: q,
                    consent: ea,
                    password: K,
                    invite: n?.code,
                    usedUsernameSuggestion: a,
                    guildTemplateCode: i?.code,
                    giftCodeSKUId: e,
                    birthday: ee,
                    promoEmailConsent: t.required ? t : null,
                }),
                    m?.();
            } catch (t) {
                if ((eh(!1), !(t instanceof b.LG))) return;
                let e = (0, V.W)(t);
                eA(e), o?.(e), "number" == typeof e.retry_after && ef(e.retry_after);
            }
        }, [l, i, n, Q, o, m, L, Z, q, K, ee, ea, ef]),
        eG = s.useCallback(
            (e) => {
                if ((e?.preventDefault(), null == T)) return;
                let t = !1;
                0 === Q.length && (eR(S.intl.string(S.t.EkokLy)), (t = !0)),
                    0 === Z.length && (eI(S.intl.string(S.t.EkokLy)), (t = !0)),
                    0 === K.length && (ey(S.intl.string(S.t.EkokLy)), (t = !0)),
                    null == ee && (ek(S.intl.string(S.t.EkokLy)), (t = !0)),
                    t || eL();
            },
            [Q, Z, K, ee, T, eL],
        ),
        eF = null;
    return (
        "string" == typeof ex && (eF = (0, a.jsx)(x.ME, { className: r()(et.QX, eo.gJ), children: ex })),
        (0, a.jsx)("form", {
            onSubmit: eG,
            children: (0, a.jsxs)(x.eB, {
                className: et.QX,
                children: [
                    (0, a.jsx)(x.pd, {
                        autoFocus: !0,
                        className: et.SX,
                        label: S.intl.string(S.t.dI4d4S),
                        name: "email",
                        value: Q,
                        onChange: (e) => {
                            X(e), u?.(e), eR(0 === e.length ? S.intl.string(S.t.EkokLy) : null);
                        },
                        error: eC ?? es(eE),
                        type: "email",
                        autoComplete: "username",
                        setRef: G,
                        required: !0,
                        onFocus: () => N("email"),
                        onBlur: () => C("email"),
                    }),
                    (0, a.jsx)(x.pd, {
                        label: S.intl.string(S.t["9AjdkD"]),
                        className: et.SX,
                        name: "global_name",
                        value: q,
                        onChange: z,
                        error: es(eS),
                        maxLength: 32,
                        autoComplete: "off",
                        setRef: W,
                        onFocus: () => {
                            _(!0), N("global_name");
                        },
                        onBlur: () => {
                            _(!1), C("global_name");
                        },
                    }),
                    (0, a.jsx)(O, {
                        show: g,
                        top: -12,
                        bottom: 20,
                        children: (0, a.jsx)(v.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: S.intl.string(S.t["330TCc"]),
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        onBlur: () => E(!1),
                        onFocus: () => {
                            E(!0), j();
                        },
                        tabIndex: -1,
                        children: [
                            (0, a.jsx)(x.pd, {
                                label: S.intl.string(S.t.TWzdWj),
                                className: et.SX,
                                name: "username",
                                value: Z,
                                onChange: (e) => {
                                    $(e.toLocaleLowerCase()), eI(0 === e.length ? S.intl.string(S.t.EkokLy) : null);
                                },
                                error: ev ?? es(ep),
                                autoComplete: "off",
                                setRef: F,
                                required: !0,
                                onFocus: () => N("username"),
                                onBlur: () => C("username"),
                            }),
                            (0, a.jsx)(em, {
                                username: Z,
                                suggestion: L,
                                globalName: q,
                                isUsernameFocused: A,
                                onClickSuggestion: () => {
                                    F.current?.focus(), null != L && L.length > 0 && $(L);
                                },
                            }),
                        ],
                    }),
                    (0, a.jsx)(x.pd, {
                        label: S.intl.string(S.t["CIGa+7"]),
                        name: "password",
                        value: K,
                        onChange: (e) => {
                            Y(e), ey(0 === e.length ? S.intl.string(S.t.EkokLy) : null);
                        },
                        error: eb ?? es(ej),
                        type: "password",
                        autoComplete: "new-password",
                        setRef: H,
                        required: !0,
                        onFocus: () => N("password"),
                        onBlur: () => C("password"),
                    }),
                    (0, a.jsx)(y.A, {
                        label: S.intl.string(S.t.rhBeKe),
                        wrapperClassName: eo.UJ,
                        name: "date_of_birth",
                        onChange: (e) => {
                            el(e), null != e && ek(null);
                        },
                        error: ew ?? es(eN),
                        value: ee,
                        required: !0,
                        onFocus: N,
                        onBlur: C,
                    }),
                    (0, a.jsx)(en, {}),
                    (0, a.jsx)(eu, { consent: ea, consentRequired: T, onConsentChange: ec }),
                    (0, a.jsx)(R.m, {
                        text: !ea && T ? S.intl.string(S.t.AY4IVA) : null,
                        children: (0, a.jsx)("div", {
                            className: et.QX,
                            children: (0, a.jsx)(h.$, {
                                text: S.intl.string(S.t["825cFy"]),
                                variant: "primary",
                                fullWidth: !0,
                                type: "submit",
                                loading: ed,
                                disabled: !eT || eg,
                            }),
                        }),
                    }),
                    eF,
                    (0, a.jsx)("div", {
                        className: et.QX,
                        children: (0, a.jsx)(I.Q, {
                            text: S.intl.string(S.t["1lWxux"]),
                            textVariant: "text-sm/normal",
                            onClick: c,
                        }),
                    }),
                ],
            }),
        })
    );
}
n(436317);
var ef = n(292666),
    e_ = n(504394),
    eA = n(359438),
    ex = n(383302);
function eE(e) {
    let { authBoxClassName: t, name: n, onNameChange: l } = e;
    return (0, a.jsxs)(x.Ay, {
        className: t,
        children: [
            (0, a.jsx)(e_.M, {}),
            (0, a.jsxs)(x.eB, {
                className: eo.y0,
                children: [
                    (0, a.jsx)(R.m, {
                        text: S.intl.string(S.t["hBB85/"]),
                        position: "right",
                        children: (0, a.jsx)(x.pd, {
                            label: S.intl.string(S.t["9AjdkD"]),
                            autoFocus: !0,
                            className: et.QB,
                            name: "username",
                            value: n,
                            placeholder: S.intl.string(S.t["09Q8yp"]),
                            onChange: l,
                            onFocus: () => {
                                B.default.track(p.HAw.REGISTER_INPUT_FOCUS, { field: "username" });
                            },
                            onBlur: () => {
                                B.default.track(p.HAw.REGISTER_INPUT_BLUR, { field: "username" });
                            },
                        }),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        className: r()(et.QX, eo.E2),
                        children: S.intl.format(S.t["KI+BSb"], { termsURL: p.X7G.TERMS, privacyURL: p.X7G.PRIVACY }),
                    }),
                    (0, a.jsx)("div", {
                        className: et.Ot,
                        children: (0, a.jsx)(h.$, {
                            text: S.intl.string(S.t["825cFy"]),
                            variant: "primary",
                            fullWidth: !0,
                            disabled: !0,
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: et.QX,
                        children: (0, a.jsx)(I.Q, {
                            text: S.intl.string(S.t["1lWxux"]),
                            textVariant: "text-sm/normal",
                            disabled: !0,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function ep(e) {
    let { consentRequired: t, consent: n, registering: l } = e,
        i = s.useMemo(() => null != t && n, [t, n]);
    return (0, a.jsx)(R.m, {
        text: !n && t ? S.intl.string(S.t.AY4IVA) : null,
        children: (0, a.jsx)("div", {
            className: et.Ot,
            children: (0, a.jsx)(h.$, {
                text: S.intl.string(S.t["825cFy"]),
                variant: "primary",
                fullWidth: !0,
                type: "submit",
                loading: l,
                disabled: !i,
            }),
        }),
    });
}
function eS(e) {
    let t,
        { invite: n, authBoxClassName: l, onApiErrors: i, onGotoLogin: r, onRegister: o } = e,
        u = (0, d.bG)([U.A], () => U.A.getAuthenticationConsentRequired()),
        c = n?.guild_scheduled_event != null,
        h = s.useRef(null);
    t =
        n?.guild_scheduled_event != null
            ? (0, a.jsx)(eA.X, { channel: n.channel, guildScheduledEvent: n.guild_scheduled_event })
            : (0, a.jsx)("div", { className: et.S3, children: (0, a.jsx)(e_.A, { invite: n, inUnclaimedFlow: !0 }) });
    let [m, g] = s.useState(""),
        [f, _] = s.useState(null),
        [A, E] = ei(u),
        [j, N] = s.useState(!1),
        [C, R] = s.useState({}),
        { username: v, global_name: w, date_of_birth: k } = C,
        [T, L] = er();
    s.useEffect(() => {
        null == f && h.current?.focus();
    }, [f, h]);
    let [G, F] = s.useState(null),
        [O, M] = s.useState(null),
        P = s.useCallback(async () => {
            D._.dispatch(p.jej.WAVE_EMPHASIZE), N(!0), R({});
            try {
                await (function (e) {
                    let { invite: t = null, giftCodeSKUId: n = null, ...l } = e;
                    return J({ ...l, invite: t, giftCodeSKUId: n });
                })({ consent: A, invite: n.code, globalName: m, birthday: f }),
                    o?.();
            } catch (t) {
                if ((N(!1), !(t instanceof b.LG))) return;
                let e = (0, V.W)(t);
                R(e), i?.(e), "number" == typeof e.retry_after && L(e.retry_after);
            }
        }, [n, m, f, A, i, o, L, R, N]),
        W = s.useCallback(
            (e) => {
                if ((e?.preventDefault(), null === u)) return;
                let t = !1;
                0 === m.length && (F(S.intl.string(S.t.EkokLy)), (t = !0)),
                    null == f && (M(S.intl.string(S.t.EkokLy)), (t = !0)),
                    t || P();
            },
            [m, f, u, P, F, M],
        );
    return n.state === p.elq.RESOLVING
        ? (0, a.jsx)(eE, { authBoxClassName: l, name: m, onNameChange: g })
        : (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)(x.Ay, {
                      tag: "section",
                      className: l,
                      children: (0, a.jsxs)("form", {
                          onSubmit: W,
                          children: [
                              t,
                              c ? (0, a.jsx)("div", { className: eo.yF }) : null,
                              (0, a.jsxs)(x.eB, {
                                  className: c ? void 0 : eo.y0,
                                  children: [
                                      (0, a.jsx)(ef.k, {
                                          helperText: S.intl.string(S.t["330TCc"]),
                                          label: S.intl.string(S.t["9AjdkD"]),
                                          error: G ?? es(w ?? v),
                                          autoFocus: !0,
                                          name: "global_name",
                                          value: m,
                                          placeholder: S.intl.string(S.t["09Q8yp"]),
                                          onChange: g,
                                          onFocus: () => {
                                              B.default.track(p.HAw.REGISTER_INPUT_FOCUS, { field: "global_name" });
                                          },
                                          onBlur: () => {
                                              B.default.track(p.HAw.REGISTER_INPUT_BLUR, { field: "global_name" });
                                          },
                                      }),
                                      (0, a.jsx)(y.A, {
                                          label: S.intl.string(S.t.rhBeKe),
                                          wrapperClassName: eo.DC,
                                          name: "date_of_birth",
                                          onChange: (e) => {
                                              _(e), null != e && M(null);
                                          },
                                          error: O ?? es(k),
                                          value: f,
                                      }),
                                      (0, a.jsx)(eu, { consent: A, consentRequired: u, onConsentChange: E }),
                                      (0, a.jsx)(ep, { consentRequired: u, consent: A, registering: j }),
                                      (0, a.jsx)("div", {
                                          className: et.QX,
                                          children: (0, a.jsx)(I.Q, {
                                              text: S.intl.string(S.t["1lWxux"]),
                                              textVariant: "text-sm/normal",
                                              onClick: r,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  }),
                  null != n && c
                      ? (0, a.jsx)(x.Ay, {
                            className: et.QX,
                            children: (0, a.jsx)(ex.N, { guild: n.guild, onlineCount: n.approximate_presence_count }),
                        })
                      : null,
              ],
          });
}
var ej = n(491509),
    eN = n(895600),
    eC = n(274303),
    eR = n(942614),
    ev = n(976860),
    eI = n(210714),
    eb = n(650048),
    ey = n(161928),
    ew = n(538796);
n(100544);
var ek =
        (((l = {}).IDENTITY = "identity"),
        (l.DISPLAY_NAME = "display_name"),
        (l.ACCOUNT_INFORMATION = "account_information"),
        (l.FULL = "full"),
        (l.AGE_GATE = "age_gate"),
        (l.INVITE = "invite"),
        (l.SMS_VERIFY = "sms_verify"),
        l),
    eT = n(771016);
function eL(e) {
    let {
            authBoxClassName: t,
            giftCode: n,
            giftCodeSKU: l,
            guildTemplate: i,
            invite: A,
            location: E,
            redirectTo: j,
            onLoginStart: R,
            onRegister: v,
            transitionTo: I = ev.pX,
        } = e,
        b = (0, d.bG)([U.A], () => U.A.getAuthenticationConsentRequired()),
        y = (0, d.bG)([Z.default], () => Z.default.isAuthenticated()),
        w = (0, d.bG)([_.A], () => _.A.isUnderageAnonymous()),
        k = (0, d.bG)([eC.A], () => eC.A.getHasLoggedInAccounts()),
        T = null != e.location ? (0, o.parse)(e.location.search) : {},
        [L, G] = s.useState(T.email ?? ""),
        [F, O] = s.useState({}),
        M = (0, f.A)(y),
        P = (function (e, t, n) {
            if (null != e) return "gift";
            if (null != t) return "guild_template";
            if (null != n) {
                if (null != n.guild) return "guild_invite";
                else if (null != n.channel) return "dm_invite";
                else if (null != n.inviter) return "friend_invite";
            }
            return null;
        })(n, i, A),
        V = null != A && (null != A.guild || null != A.channel),
        W = null != A && null == A.guild && null == A.channel && null != A.inviter,
        H = s.useCallback(() => {
            y && (null != j ? I(j) : I(eb.A.defaultRoute));
        }, [y, j, I]);
    (0, c.Ay)(() => {
        H(),
            B.default.track(
                p.HAw.REGISTER_VIEWED,
                {
                    location: null != A ? "Invite Register Page" : "Non-Invite Register Page",
                    registration_source: P,
                    ...(null != l ? (0, ej.A)(l, !1, !1) : {}),
                },
                { flush: !0 },
            ),
            null == b && g.A.getLocationMetadata(),
            (0, eI.d)("register");
    }),
        s.useEffect(() => {
            y && !1 === M && ((0, eR.C)(eT.zY.ORGANIC_REGISTERED), H());
        }, [y, M, H]);
    let Q = ek.FULL;
    w || null != F.date_of_birth ? (Q = ek.AGE_GATE) : V && (Q = ek.INVITE),
        (0, C.A)(
            {
                type: u.ImpressionTypes.VIEW,
                name: u.ImpressionNames.USER_REGISTRATION,
                properties: { impression_group: u.ImpressionGroups.USER_REGISTRATION_FLOW, step: Q },
            },
            {},
            [Q],
        );
    let X = s.useCallback(
        (e) => {
            let t,
                l = null != E ? (0, o.parse)(E.search) : {};
            null != A
                ? (t = p.BVt.INVITE_LOGIN(A.code))
                : null != n
                  ? (t = p.BVt.GIFT_CODE_LOGIN(n.code))
                  : null != i
                    ? (t = p.BVt.GUILD_TEMPLATE_LOGIN(i.code))
                    : null != j
                      ? ((t = p.BVt.LOGIN), (l.redirect_to = j))
                      : ((t = p.BVt.LOGIN), "" !== L && (l = { email: L })),
                g.A.loginReset(),
                I(t, { search: (0, o.stringify)(l), source: "register" }),
                R?.(e),
                D._.dispatch(p.jej.WAVE_EMPHASIZE);
        },
        [L, A, n, i, j, E, R, I],
    );
    if (w || null != F.date_of_birth) return (0, a.jsx)(N, {});
    if (null != A && V)
        return (0, a.jsx)(eS, { invite: A, authBoxClassName: t, onApiErrors: O, onGotoLogin: X, onRegister: v });
    let q = (0, a.jsx)(x.hE, { children: S.intl.string(S.t.wC4TlR) }, "title"),
        z = !1;
    null != i
        ? ((q = (0, a.jsx)(eN.A, { guildTemplate: i })), (z = !0))
        : null != n
          ? (q = (0, a.jsx)(ey.A, { giftCode: n }))
          : null != A &&
            W &&
            A.state === p.elq.RESOLVED &&
            (q = (0, a.jsx)("div", { className: et.S3, children: (0, a.jsx)(e_.A, { invite: A, isRegister: !0 }) }));
    let $ = (0, a.jsx)(eg, {
        initialEmail: T.email ?? "",
        invite: A,
        giftCode: n,
        guildTemplate: i,
        onApiErrors: O,
        onEmailChange: G,
        onGotoLogin: X,
        onRegister: v,
    });
    return z
        ? (0, a.jsx)(ew.A, {
              tag: "section",
              className: r()(t, eo.Sy),
              children: () => [
                  q,
                  (0, a.jsxs)(
                      "div",
                      {
                          className: eo.Uu,
                          children: [(0, a.jsx)(x.hE, { className: eo.lR, children: S.intl.string(S.t.wC4TlR) }), $],
                      },
                      "register-title",
                  ),
              ],
          })
        : (0, a.jsxs)(x.Ay, {
              tag: "section",
              className: t,
              children: [
                  k
                      ? (0, a.jsx)("div", {
                            className: eo.AX,
                            children: (0, a.jsx)(h.$, {
                                onClick: X,
                                variant: "secondary",
                                text: S.intl.string(S.t["1MrpWO"]),
                                icon: m.n,
                                iconPosition: "start",
                            }),
                        })
                      : null,
                  q,
                  $,
              ],
          });
}
d.Ay.initialize();
