n.d(t, { A: () => eL });
var l,
    r = n(627968),
    a = n(64700),
    i = n(503698),
    s = n.n(i),
    o = n(492462),
    u = n(110259),
    c = n(935399),
    d = n(17928),
    h = n(821609),
    m = n(921853),
    g = n(830215),
    f = n(475743),
    p = n(17841),
    _ = n(509434),
    E = n(854378),
    A = n(975571),
    x = n(652215),
    N = n(985018),
    I = n(153801);
let j = () =>
    (0, r.jsx)(E.Ay, {
        children: (0, r.jsxs)("div", {
            className: I.hQ,
            children: [
                (0, r.jsx)(E.hE, { className: I.DD, children: N.intl.string(N.t.nCB6Ga) }),
                (0, r.jsx)(E.tK, {
                    className: I.VA,
                    children: N.intl.format(N.t.KQgoxG, { underageMessage: N.intl.string(N.t.WqEH4D) }),
                }),
                (0, r.jsx)(h.$, {
                    icon: _.I,
                    text: N.intl.string(N.t.hvVgAZ),
                    onClick: () => window.open(A.A.getArticleURL(x.MVz.AGE_GATE), "_blank"),
                    iconPosition: "end",
                }),
            ],
        }),
    });
var S = n(139286),
    y = n(990078),
    v = n(834730),
    b = n(123292),
    C = n(845584),
    w = n(201505);
n(417635), n(827343), n(792251), n(19575), n(945041);
var R = n(493527),
    T = n(544395),
    k = n(446837),
    L = n(925747),
    G = n(717421);
let O = window.ResizeObserver ?? k.t;
function F(e) {
    let { show: t, children: n, top: l = 0, bottom: i = 0 } = e,
        { ref: s, height: o } = (() => {
            let e = a.useRef(null),
                [t, n] = a.useState(0),
                l = a.useMemo(
                    () =>
                        new O((e) => {
                            let [t] = e;
                            return n(t.contentRect.height);
                        }),
                    [],
                );
            return (
                a.useLayoutEffect(() => (null != e.current && l.observe(e.current), () => l.disconnect()), [l]),
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
    return (0, r.jsx)(L.animated.div, {
        style: { overflow: "hidden", height: u.height, paddingBottom: u.paddingBottom, marginTop: u.marginTop },
        children: (0, r.jsx)(L.animated.div, { style: { opacity: c.opacity }, ref: s, children: n }),
    });
}
var U = n(153488),
    P = n(954571),
    D = n(625494),
    B = n(240248),
    M = n(934337),
    V = n(15552),
    H = n(989349),
    W = n.n(H),
    K = n(228366),
    Q = n(181658),
    $ = n(955437),
    Z = n(888548),
    z = n(495544),
    X = n(499785),
    q = n(569717),
    J = n(204925);
function Y(e) {
    let {
        email: t,
        phoneToken: n,
        username: l,
        globalName: r,
        consent: a,
        password: i,
        guildTemplateCode: s,
        birthday: o,
        invite: c = null,
        giftCodeSKUId: d = null,
        promoEmailConsent: h = null,
        usedUsernameSuggestion: m = null,
    } = e;
    if ((K.h.dispatch({ type: "REGISTER" }), null != o)) {
        let e;
        (0, q.A)(o, x.JJy.REGISTER),
            P.default.track(x.HAw.AGE_GATE_ACTION, { source: J.w_.REGISTER, action: J.AM.AGE_GATE_SUBMITTED }),
            (e = W()().diff(o, "years")) < 13 ||
                P.default.track(x.HAw.USER_AGE_SUBMITTED, {
                    age_bucket: e >= 13 && e <= 17 ? "13-17" : e >= 18 && e <= 22 ? "18-22" : "23+",
                });
    }
    return X.A.post({
        url: x.Rsh.REGISTER,
        body: {
            fingerprint: z.default.getFingerprint(),
            email: t,
            username: l,
            global_name: r,
            password: i,
            invite: c,
            consent: a,
            phone_token: n,
            date_of_birth: o?.format("YYYY-MM-DD"),
            gift_code_sku_id: d,
            guild_template_code: s,
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
            K.h.dispatch({ type: "REGISTER_SUCCESS", token: e.body.token }),
                P.default.track(x.HAw.AGE_GATE_ACTION, { source: J.w_.REGISTER, action: J.AM.AGE_GATE_SUCCESS });
        },
        (e) => {
            if (e instanceof Z.CaptchaCancelError) throw e;
            let t = new Q.A(e);
            throw (
                (null != t.getFieldErrors("date_of_birth") && $.Xv(J.w_.REGISTER),
                P.default.track(x.HAw.REGISTER_SUBMIT_ERRORED, {
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
    let { required: e, checked: t } = (0, M.mZ)();
    return e
        ? (0, r.jsx)("div", {
              className: et.Ot,
              children: (0, r.jsx)(ee.J, {
                  label: N.intl.string(N.t["0p3R0+"]),
                  checked: t,
                  onChange: M.Bw,
                  labelType: "secondary",
              }),
          })
        : null;
}
var el = n(927813);
let er = /\.$/,
    ea = (e) =>
        Array.isArray(e)
            ? e
                  .map((e) => e.replace(er, ""))
                  .join(". ")
                  .trim()
            : e;
function ei(e) {
    let [t, n] = a.useState(() => null != e && !e),
        [l, r] = a.useState(e);
    return null == l && null != e ? (r(e), n(!e)) : l !== e && r(e), [t, n];
}
function es() {
    let [e, t] = a.useState(!1),
        n = a.useRef(null);
    return (
        a.useEffect(
            () => () => {
                null != n.current && clearTimeout(n.current);
            },
            [],
        ),
        [
            e,
            a.useCallback((e) => {
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
        ? (0, r.jsx)("div", {
              className: eo.IQ,
              children: (0, r.jsx)(ee.J, {
                  label: N.intl.format(N.t.qMDAP0, { termsURL: x.X7G.TERMS, privacyURL: x.X7G.PRIVACY }),
                  checked: t,
                  onChange: l,
                  labelType: "secondary",
              }),
          })
        : (0, r.jsx)(v.E, {
              variant: "text-sm/normal",
              color: "text-subtle",
              className: s()(et.Ot, eo.E2),
              children: N.intl.format(N.t["KI+BSb"], { termsURL: x.X7G.TERMS, privacyURL: x.X7G.PRIVACY }),
          });
}
n(801541);
var ec = n(889137),
    ed = n(546727),
    eh = n(5052);
function em(e) {
    let t,
        { username: n, suggestion: l, globalName: a, isUsernameFocused: i, onClickSuggestion: s } = e,
        o = (0, eh.i)(n, !0, !0),
        u = n.length > 0;
    return (
        (t = u
            ? (0, ec.YW)(o)
                  .with({ type: ed.q.ERROR, message: ec.P.select() }, (e) =>
                      (0, r.jsx)(v.E, { className: eo.vU, variant: "text-sm/normal", children: e }),
                  )
                  .with({ type: ed.q.AVAILABLE, message: ec.P.select() }, (e) =>
                      (0, r.jsx)(v.E, { className: eo.vq, variant: "text-sm/normal", children: e }),
                  )
                  .otherwise(() =>
                      (0, r.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          children: N.intl.string(N.t.z7c4bP),
                      }),
                  )
            : null != l && l.length > 0 && a.length > 0
              ? (0, r.jsx)(v.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: N.intl.format(N.t.nDGqqq, { suggestion: l, nameOnClick: s }),
                })
              : (0, r.jsx)(v.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: N.intl.string(N.t.z7c4bP),
                })),
        (0, r.jsx)(F, { show: (u && o?.type === ed.q.ERROR) || i, top: -12, bottom: 20, children: t })
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
        [g, p] = a.useState(!1),
        [_, A] = a.useState(!1),
        I = async () => {
            $.length > 0 && !T.A.wasRegistrationSuggestionFetched($) && (await R.A.fetchSuggestionsRegistration($));
        },
        j = (e) => {
            P.default.track(x.HAw.REGISTER_INPUT_FOCUS, { field: e });
        },
        S = (e) => {
            P.default.track(x.HAw.REGISTER_INPUT_BLUR, { field: e });
        },
        k = (0, d.bG)([U.A], () => U.A.getAuthenticationConsentRequired()),
        L = (0, d.bG)([T.A], () => T.A.registrationUsernameSuggestion()),
        G = a.useRef(null),
        O = a.useRef(null),
        H = a.useRef(null),
        W = a.useRef(null),
        [K, Q] = a.useState(t),
        [$, Z] = a.useState(""),
        [z, X] = a.useState(""),
        [q, J] = a.useState(""),
        [ee, el] = a.useState(null),
        [er, ec] = ei(k),
        [ed, eh] = a.useState(!1),
        [eg, ef] = es(),
        [ep, e_] = a.useState({}),
        { message: eE, email: eA, username: ex, global_name: eN, password: eI, date_of_birth: ej } = ep,
        [eS, ey] = a.useState(null),
        [ev, eb] = a.useState(null),
        [eC, ew] = a.useState(null),
        [eR, eT] = a.useState(null),
        ek = null != k && er;
    !(function (e) {
        let { apiErrors: t, emailRef: n, usernameRef: l, globalNameRef: r, passwordRef: i } = e,
            s = (0, f.A)(t);
        a.useEffect(() => {
            null == s ||
                (s !== t &&
                    (null != t.email || null != t.phone
                        ? n.current?.focus()
                        : null != t.username
                          ? l.current?.focus()
                          : null != t.global_name
                            ? r.current?.focus()
                            : null != t.password && i.current?.focus()));
        }, [t, s, n, l, r, i]);
    })({ apiErrors: ep, emailRef: G, usernameRef: O, globalNameRef: H, passwordRef: W });
    let eL = a.useCallback(async () => {
            let e = null != l ? l.skuId : null,
                t = M.mZ.getState(),
                r = (0, B.uJ)(L) ? null : z === L;
            D._.dispatch(x.jej.WAVE_EMPHASIZE), eh(!0), e_({});
            try {
                await Y({
                    email: K,
                    username: z,
                    globalName: $,
                    consent: er,
                    password: q,
                    invite: n?.code,
                    usedUsernameSuggestion: r,
                    guildTemplateCode: i?.code,
                    giftCodeSKUId: e,
                    birthday: ee,
                    promoEmailConsent: t.required ? t : null,
                }),
                    m?.();
            } catch (t) {
                if ((eh(!1), !(t instanceof C.LG))) return;
                let e = (0, V.W)(t);
                e_(e), o?.(e), "number" == typeof e.retry_after && ef(e.retry_after);
            }
        }, [l, i, n, K, o, m, L, z, $, q, ee, er, ef]),
        eG = a.useCallback(
            (e) => {
                if ((e?.preventDefault(), null == k)) return;
                let t = !1;
                0 === K.length && (ey(N.intl.string(N.t.EkokLy)), (t = !0)),
                    0 === z.length && (eb(N.intl.string(N.t.EkokLy)), (t = !0)),
                    0 === q.length && (ew(N.intl.string(N.t.EkokLy)), (t = !0)),
                    null == ee && (eT(N.intl.string(N.t.EkokLy)), (t = !0)),
                    t || eL();
            },
            [K, z, q, ee, k, eL],
        ),
        eO = null;
    return (
        "string" == typeof eE && (eO = (0, r.jsx)(E.ME, { className: s()(et.QX, eo.gJ), children: eE })),
        (0, r.jsx)("form", {
            onSubmit: eG,
            children: (0, r.jsxs)(E.eB, {
                className: et.QX,
                children: [
                    (0, r.jsx)(E.pd, {
                        autoFocus: !0,
                        className: et.SX,
                        label: N.intl.string(N.t.dI4d4S),
                        name: "email",
                        value: K,
                        onChange: (e) => {
                            Q(e), u?.(e), ey(0 === e.length ? N.intl.string(N.t.EkokLy) : null);
                        },
                        error: eS ?? ea(eA),
                        type: "email",
                        autoComplete: "username",
                        setRef: G,
                        required: !0,
                        onFocus: () => j("email"),
                        onBlur: () => S("email"),
                    }),
                    (0, r.jsx)(E.pd, {
                        label: N.intl.string(N.t["9AjdkD"]),
                        className: et.SX,
                        name: "global_name",
                        value: $,
                        onChange: Z,
                        error: ea(eN),
                        maxLength: 32,
                        autoComplete: "off",
                        setRef: H,
                        onFocus: () => {
                            p(!0), j("global_name");
                        },
                        onBlur: () => {
                            p(!1), S("global_name");
                        },
                    }),
                    (0, r.jsx)(F, {
                        show: g,
                        top: -12,
                        bottom: 20,
                        children: (0, r.jsx)(v.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: N.intl.string(N.t["330TCc"]),
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        onBlur: () => A(!1),
                        onFocus: () => {
                            A(!0), I();
                        },
                        tabIndex: -1,
                        children: [
                            (0, r.jsx)(E.pd, {
                                label: N.intl.string(N.t.TWzdWj),
                                className: et.SX,
                                name: "username",
                                value: z,
                                onChange: (e) => {
                                    X(e.toLocaleLowerCase()), eb(0 === e.length ? N.intl.string(N.t.EkokLy) : null);
                                },
                                error: ev ?? ea(ex),
                                autoComplete: "off",
                                setRef: O,
                                required: !0,
                                onFocus: () => j("username"),
                                onBlur: () => S("username"),
                            }),
                            (0, r.jsx)(em, {
                                username: z,
                                suggestion: L,
                                globalName: $,
                                isUsernameFocused: _,
                                onClickSuggestion: () => {
                                    O.current?.focus(), null != L && L.length > 0 && X(L);
                                },
                            }),
                        ],
                    }),
                    (0, r.jsx)(E.pd, {
                        label: N.intl.string(N.t["CIGa+7"]),
                        name: "password",
                        value: q,
                        onChange: (e) => {
                            J(e), ew(0 === e.length ? N.intl.string(N.t.EkokLy) : null);
                        },
                        error: eC ?? ea(eI),
                        type: "password",
                        autoComplete: "new-password",
                        setRef: W,
                        required: !0,
                        onFocus: () => j("password"),
                        onBlur: () => S("password"),
                    }),
                    (0, r.jsx)(w.A, {
                        label: N.intl.string(N.t.rhBeKe),
                        wrapperClassName: eo.UJ,
                        name: "date_of_birth",
                        onChange: (e) => {
                            el(e), null != e && eT(null);
                        },
                        error: eR ?? ea(ej),
                        value: ee,
                        required: !0,
                        onFocus: j,
                        onBlur: S,
                    }),
                    (0, r.jsx)(en, {}),
                    (0, r.jsx)(eu, { consent: er, consentRequired: k, onConsentChange: ec }),
                    (0, r.jsx)(y.m, {
                        text: !er && k ? N.intl.string(N.t.AY4IVA) : null,
                        children: (0, r.jsx)("div", {
                            className: et.QX,
                            children: (0, r.jsx)(h.$, {
                                text: N.intl.string(N.t["825cFy"]),
                                variant: "primary",
                                fullWidth: !0,
                                type: "submit",
                                loading: ed,
                                disabled: !ek || eg,
                            }),
                        }),
                    }),
                    eO,
                    (0, r.jsx)("div", {
                        className: et.QX,
                        children: (0, r.jsx)(b.Q, {
                            text: N.intl.string(N.t["1lWxux"]),
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
    ep = n(504394),
    e_ = n(359438),
    eE = n(383302);
function eA(e) {
    let { authBoxClassName: t, name: n, onNameChange: l } = e;
    return (0, r.jsxs)(E.Ay, {
        className: t,
        children: [
            (0, r.jsx)(ep.M, {}),
            (0, r.jsxs)(E.eB, {
                className: eo.y0,
                children: [
                    (0, r.jsx)(y.m, {
                        text: N.intl.string(N.t["hBB85/"]),
                        position: "right",
                        children: (0, r.jsx)(E.pd, {
                            label: N.intl.string(N.t["9AjdkD"]),
                            autoFocus: !0,
                            className: et.QB,
                            name: "username",
                            value: n,
                            placeholder: N.intl.string(N.t["09Q8yp"]),
                            onChange: l,
                            onFocus: () => {
                                P.default.track(x.HAw.REGISTER_INPUT_FOCUS, { field: "username" });
                            },
                            onBlur: () => {
                                P.default.track(x.HAw.REGISTER_INPUT_BLUR, { field: "username" });
                            },
                        }),
                    }),
                    (0, r.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        className: s()(et.QX, eo.E2),
                        children: N.intl.format(N.t["KI+BSb"], { termsURL: x.X7G.TERMS, privacyURL: x.X7G.PRIVACY }),
                    }),
                    (0, r.jsx)("div", {
                        className: et.Ot,
                        children: (0, r.jsx)(h.$, {
                            text: N.intl.string(N.t["825cFy"]),
                            variant: "primary",
                            fullWidth: !0,
                            disabled: !0,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: et.QX,
                        children: (0, r.jsx)(b.Q, {
                            text: N.intl.string(N.t["1lWxux"]),
                            textVariant: "text-sm/normal",
                            disabled: !0,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function ex(e) {
    let { consentRequired: t, consent: n, registering: l } = e,
        i = a.useMemo(() => null != t && n, [t, n]);
    return (0, r.jsx)(y.m, {
        text: !n && t ? N.intl.string(N.t.AY4IVA) : null,
        children: (0, r.jsx)("div", {
            className: et.Ot,
            children: (0, r.jsx)(h.$, {
                text: N.intl.string(N.t["825cFy"]),
                variant: "primary",
                fullWidth: !0,
                type: "submit",
                loading: l,
                disabled: !i,
            }),
        }),
    });
}
function eN(e) {
    let t,
        { invite: n, authBoxClassName: l, onApiErrors: i, onGotoLogin: s, onRegister: o } = e,
        u = (0, d.bG)([U.A], () => U.A.getAuthenticationConsentRequired()),
        c = n?.guild_scheduled_event != null,
        h = a.useRef(null);
    t =
        n?.guild_scheduled_event != null
            ? (0, r.jsx)(e_.X, { channel: n.channel, guildScheduledEvent: n.guild_scheduled_event })
            : (0, r.jsx)("div", { className: et.S3, children: (0, r.jsx)(ep.A, { invite: n, inUnclaimedFlow: !0 }) });
    let [m, g] = a.useState(""),
        [f, p] = a.useState(null),
        [_, A] = ei(u),
        [I, j] = a.useState(!1),
        [S, y] = a.useState({}),
        { username: v, global_name: R, date_of_birth: T } = S,
        [k, L] = es();
    a.useEffect(() => {
        null == f && h.current?.focus();
    }, [f, h]);
    let [G, O] = a.useState(null),
        [F, B] = a.useState(null),
        M = a.useCallback(async () => {
            D._.dispatch(x.jej.WAVE_EMPHASIZE), j(!0), y({});
            try {
                await (function (e) {
                    let { invite: t = null, giftCodeSKUId: n = null, ...l } = e;
                    return Y({ ...l, invite: t, giftCodeSKUId: n });
                })({ consent: _, invite: n.code, globalName: m, birthday: f }),
                    o?.();
            } catch (t) {
                if ((j(!1), !(t instanceof C.LG))) return;
                let e = (0, V.W)(t);
                y(e), i?.(e), "number" == typeof e.retry_after && L(e.retry_after);
            }
        }, [n, m, f, _, i, o, L, y, j]),
        H = a.useCallback(
            (e) => {
                if ((e?.preventDefault(), null === u)) return;
                let t = !1;
                0 === m.length && (O(N.intl.string(N.t.EkokLy)), (t = !0)),
                    null == f && (B(N.intl.string(N.t.EkokLy)), (t = !0)),
                    t || M();
            },
            [m, f, u, M, O, B],
        );
    return n.state === x.elq.RESOLVING
        ? (0, r.jsx)(eA, { authBoxClassName: l, name: m, onNameChange: g })
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)(E.Ay, {
                      tag: "section",
                      className: l,
                      children: (0, r.jsxs)("form", {
                          onSubmit: H,
                          children: [
                              t,
                              c ? (0, r.jsx)("div", { className: eo.yF }) : null,
                              (0, r.jsxs)(E.eB, {
                                  className: c ? void 0 : eo.y0,
                                  children: [
                                      (0, r.jsx)(ef.k, {
                                          helperText: N.intl.string(N.t["330TCc"]),
                                          label: N.intl.string(N.t["9AjdkD"]),
                                          error: G ?? ea(R ?? v),
                                          autoFocus: !0,
                                          name: "global_name",
                                          value: m,
                                          placeholder: N.intl.string(N.t["09Q8yp"]),
                                          onChange: g,
                                          onFocus: () => {
                                              P.default.track(x.HAw.REGISTER_INPUT_FOCUS, { field: "global_name" });
                                          },
                                          onBlur: () => {
                                              P.default.track(x.HAw.REGISTER_INPUT_BLUR, { field: "global_name" });
                                          },
                                      }),
                                      (0, r.jsx)(w.A, {
                                          label: N.intl.string(N.t.rhBeKe),
                                          wrapperClassName: eo.DC,
                                          name: "date_of_birth",
                                          onChange: (e) => {
                                              p(e), null != e && B(null);
                                          },
                                          error: F ?? ea(T),
                                          value: f,
                                      }),
                                      (0, r.jsx)(eu, { consent: _, consentRequired: u, onConsentChange: A }),
                                      (0, r.jsx)(ex, { consentRequired: u, consent: _, registering: I }),
                                      (0, r.jsx)("div", {
                                          className: et.QX,
                                          children: (0, r.jsx)(b.Q, {
                                              text: N.intl.string(N.t["1lWxux"]),
                                              textVariant: "text-sm/normal",
                                              onClick: s,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  }),
                  null != n && c
                      ? (0, r.jsx)(E.Ay, {
                            className: et.QX,
                            children: (0, r.jsx)(eE.N, { guild: n.guild, onlineCount: n.approximate_presence_count }),
                        })
                      : null,
              ],
          });
}
var eI = n(491509),
    ej = n(895600),
    eS = n(274303),
    ey = n(942614),
    ev = n(976860),
    eb = n(210714),
    eC = n(650048),
    ew = n(161928),
    eR = n(538796);
n(100544);
var eT =
        (((l = {}).IDENTITY = "identity"),
        (l.DISPLAY_NAME = "display_name"),
        (l.ACCOUNT_INFORMATION = "account_information"),
        (l.FULL = "full"),
        (l.AGE_GATE = "age_gate"),
        (l.INVITE = "invite"),
        (l.SMS_VERIFY = "sms_verify"),
        l),
    ek = n(771016);
function eL(e) {
    let {
            authBoxClassName: t,
            giftCode: n,
            giftCodeSKU: l,
            guildTemplate: i,
            invite: _,
            location: A,
            redirectTo: I,
            onLoginStart: y,
            onRegister: v,
            transitionTo: b = ev.pX,
        } = e,
        C = (0, d.bG)([U.A], () => U.A.getAuthenticationConsentRequired()),
        w = (0, d.bG)([z.default], () => z.default.isAuthenticated()),
        R = (0, d.bG)([p.A], () => p.A.isUnderageAnonymous()),
        T = (0, d.bG)([eS.A], () => eS.A.getHasLoggedInAccounts()),
        k = null != e.location ? (0, o.parse)(e.location.search) : {},
        [L, G] = a.useState(k.email ?? ""),
        [O, F] = a.useState({}),
        B = (0, f.A)(w),
        M = (function (e, t, n) {
            if (null != e) return "gift";
            if (null != t) return "guild_template";
            if (null != n) {
                if (null != n.guild) return "guild_invite";
                else if (null != n.channel) return "dm_invite";
                else if (null != n.inviter) return "friend_invite";
            }
            return null;
        })(n, i, _),
        V = null != _ && (null != _.guild || null != _.channel),
        H = null != _ && null == _.guild && null == _.channel && null != _.inviter,
        W = a.useCallback(() => {
            w && (null != I ? b(I) : b(eC.A.defaultRoute));
        }, [w, I, b]);
    (0, c.Ay)(() => {
        W(),
            P.default.track(
                x.HAw.REGISTER_VIEWED,
                {
                    location: null != _ ? "Invite Register Page" : "Non-Invite Register Page",
                    registration_source: M,
                    ...(null != l ? (0, eI.A)(l, !1, !1) : {}),
                },
                { flush: !0 },
            ),
            null == C && g.A.getLocationMetadata(),
            (0, eb.d)("register");
    }),
        a.useEffect(() => {
            w && !1 === B && ((0, ey.C)(ek.zY.ORGANIC_REGISTERED), W());
        }, [w, B, W]);
    let K = eT.FULL;
    R || null != O.date_of_birth ? (K = eT.AGE_GATE) : V && (K = eT.INVITE),
        (0, S.A)(
            {
                type: u.ImpressionTypes.VIEW,
                name: u.ImpressionNames.USER_REGISTRATION,
                properties: { impression_group: u.ImpressionGroups.USER_REGISTRATION_FLOW, step: K },
            },
            {},
            [K],
        );
    let Q = a.useCallback(
        (e) => {
            let t,
                l = null != A ? (0, o.parse)(A.search) : {};
            null != _
                ? (t = x.BVt.INVITE_LOGIN(_.code))
                : null != n
                  ? (t = x.BVt.GIFT_CODE_LOGIN(n.code))
                  : null != i
                    ? (t = x.BVt.GUILD_TEMPLATE_LOGIN(i.code))
                    : null != I
                      ? ((t = x.BVt.LOGIN), (l.redirect_to = I))
                      : ((t = x.BVt.LOGIN), "" !== L && (l = { email: L })),
                g.A.loginReset(),
                b(t, { search: (0, o.stringify)(l), source: "register" }),
                y?.(e),
                D._.dispatch(x.jej.WAVE_EMPHASIZE);
        },
        [L, _, n, i, I, A, y, b],
    );
    if (R || null != O.date_of_birth) return (0, r.jsx)(j, {});
    if (null != _ && V)
        return (0, r.jsx)(eN, { invite: _, authBoxClassName: t, onApiErrors: F, onGotoLogin: Q, onRegister: v });
    let $ = (0, r.jsx)(E.hE, { children: N.intl.string(N.t.wC4TlR) }, "title"),
        Z = !1;
    null != i
        ? (($ = (0, r.jsx)(ej.A, { guildTemplate: i })), (Z = !0))
        : null != n
          ? ($ = (0, r.jsx)(ew.A, { giftCode: n }))
          : null != _ &&
            H &&
            _.state === x.elq.RESOLVED &&
            ($ = (0, r.jsx)("div", { className: et.S3, children: (0, r.jsx)(ep.A, { invite: _, isRegister: !0 }) }));
    let X = (0, r.jsx)(eg, {
        initialEmail: k.email ?? "",
        invite: _,
        giftCode: n,
        guildTemplate: i,
        onApiErrors: F,
        onEmailChange: G,
        onGotoLogin: Q,
        onRegister: v,
    });
    return Z
        ? (0, r.jsx)(eR.A, {
              tag: "section",
              className: s()(t, eo.Sy),
              children: () => [
                  $,
                  (0, r.jsxs)(
                      "div",
                      {
                          className: eo.Uu,
                          children: [(0, r.jsx)(E.hE, { className: eo.lR, children: N.intl.string(N.t.wC4TlR) }), X],
                      },
                      "register-title",
                  ),
              ],
          })
        : (0, r.jsxs)(E.Ay, {
              tag: "section",
              className: t,
              children: [
                  T
                      ? (0, r.jsx)("div", {
                            className: eo.AX,
                            children: (0, r.jsx)(h.$, {
                                onClick: Q,
                                variant: "secondary",
                                text: N.intl.string(N.t["1MrpWO"]),
                                icon: m.n,
                                iconPosition: "start",
                            }),
                        })
                      : null,
                  $,
                  X,
              ],
          });
}
d.Ay.initialize();
