n.d(t, { A: () => eU });
var r,
    l = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(492462),
    u = n(110259),
    c = n(935399),
    d = n(17928),
    _ = n(821609),
    h = n(921853),
    m = n(830215),
    g = n(475743),
    f = n(17841),
    E = n(509434),
    A = n(854378),
    p = n(975571),
    x = n(652215),
    N = n(985018),
    I = n(153801);
let v = () =>
    (0, l.jsx)(A.Ay, {
        children: (0, l.jsxs)("div", {
            className: I.hQ,
            children: [
                (0, l.jsx)(A.hE, { className: I.DD, children: N.intl.string(N.t.nCB6Ga) }),
                (0, l.jsx)(A.tK, {
                    className: I.VA,
                    children: N.intl.format(N.t.KQgoxG, { underageMessage: N.intl.string(N.t.WqEH4D) }),
                }),
                (0, l.jsx)(_.$, {
                    icon: E.I,
                    text: N.intl.string(N.t.hvVgAZ),
                    onClick: () => window.open(p.A.getArticleURL(x.MVz.AGE_GATE), "_blank"),
                    iconPosition: "end",
                }),
            ],
        }),
    });
var S = n(139286),
    y = n(990078),
    b = n(834730),
    C = n(123292),
    T = n(845584),
    R = n(201505);
n(417635), n(827343), n(792251), n(19575), n(945041);
var j = n(493527),
    w = n(544395),
    L = n(446837),
    U = n(419354),
    O = n(717421);
let k = window.ResizeObserver ?? L.t;
function G(e) {
    let { show: t, children: n, top: r = 0, bottom: a = 0 } = e,
        { ref: s, height: o } = (() => {
            let e = i.useRef(null),
                [t, n] = i.useState(0),
                r = i.useMemo(
                    () =>
                        new k((e) => {
                            let [t] = e;
                            return n(t.contentRect.height);
                        }),
                    [],
                );
            return (
                i.useLayoutEffect(() => (null != e.current && r.observe(e.current), () => r.disconnect()), [r]),
                { ref: e, height: t }
            );
        })(),
        u = (0, O.z)({
            from: { height: 0, paddingBottom: "0px", marginTop: "0px" },
            to: { height: t ? o : 0, paddingBottom: t ? `${a}px` : "0px", marginTop: t ? `${r}px` : "0px" },
            config: { tension: 170, friction: 26 },
        }),
        c = (0, O.z)({
            from: { opacity: 0 },
            to: { opacity: +!!t },
            config: { duration: 200, easing: t ? (e) => e ** 4 : (e) => e * (2 - e) },
        });
    return (0, l.jsx)(U.animated.div, {
        style: { overflow: "hidden", height: u.height, paddingBottom: u.paddingBottom, marginTop: u.marginTop },
        children: (0, l.jsx)(U.animated.div, { style: { opacity: c.opacity }, ref: s, children: n }),
    });
}
var D = n(153488),
    M = n(954571),
    P = n(625494),
    F = n(240248),
    B = n(934337),
    V = n(15552),
    H = n(989349),
    W = n.n(H),
    Q = n(228366),
    z = n(181658),
    q = n(955437),
    K = n(888548),
    Z = n(495544),
    $ = n(499785),
    X = n(569717),
    Y = n(204925);
function J(e) {
    let {
        email: t,
        phoneToken: n,
        username: r,
        globalName: l,
        consent: i,
        password: a,
        guildTemplateCode: s,
        birthday: o,
        invite: c = null,
        giftCodeSKUId: d = null,
        promoEmailConsent: _ = null,
        usedUsernameSuggestion: h = null,
    } = e;
    if ((Q.h.dispatch({ type: "REGISTER" }), null != o)) {
        let e;
        (0, X.A)(o, x.JJy.REGISTER),
            M.default.track(x.HAw.AGE_GATE_ACTION, { source: Y.w_.REGISTER, action: Y.AM.AGE_GATE_SUBMITTED }),
            (e = W()().diff(o, "years")) < 13 ||
                M.default.track(x.HAw.USER_AGE_SUBMITTED, {
                    age_bucket: e >= 13 && e <= 17 ? "13-17" : e >= 18 && e <= 22 ? "18-22" : "23+",
                });
    }
    return $.A.post({
        url: x.Rsh.REGISTER,
        body: {
            fingerprint: Z.default.getFingerprint(),
            email: t,
            username: r,
            global_name: l,
            password: a,
            invite: c,
            consent: i,
            phone_token: n,
            date_of_birth: o?.format("YYYY-MM-DD"),
            gift_code_sku_id: d,
            guild_template_code: s,
            promotional_email_opt_in: _?.checked,
        },
        trackedActionData: {
            event: u.NetworkActionNames.USER_REGISTER,
            properties: {
                invite_code: c,
                used_username_suggestion: h,
                promotional_email_opt_in: _?.checked,
                promotional_email_pre_checked: _?.preChecked,
                was_unique_username: !0,
            },
        },
        rejectWithError: !1,
    }).then(
        (e) => {
            Q.h.dispatch({ type: "REGISTER_SUCCESS", token: e.body.token }),
                M.default.track(x.HAw.AGE_GATE_ACTION, { source: Y.w_.REGISTER, action: Y.AM.AGE_GATE_SUCCESS });
        },
        (e) => {
            if (e instanceof K.CaptchaCancelError) throw e;
            let t = new z.A(e);
            throw (
                (null != t.getFieldErrors("date_of_birth") && q.Xv(Y.w_.REGISTER),
                M.default.track(x.HAw.REGISTER_SUBMIT_ERRORED, {
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
    let { required: e, checked: t } = (0, B.mZ)();
    return e
        ? (0, l.jsx)("div", {
              className: et.Ot,
              children: (0, l.jsx)(ee.J, {
                  label: N.intl.string(N.t["0p3R0+"]),
                  checked: t,
                  onChange: B.Bw,
                  labelType: "secondary",
              }),
          })
        : null;
}
var er = n(927813);
let el = /\.$/,
    ei = (e) =>
        Array.isArray(e)
            ? e
                  .map((e) => e.replace(el, ""))
                  .join(". ")
                  .trim()
            : e;
function ea(e) {
    let [t, n] = i.useState(() => null != e && !e),
        [r, l] = i.useState(e);
    return null == r && null != e ? (l(e), n(!e)) : r !== e && l(e), [t, n];
}
function es() {
    let [e, t] = i.useState(!1),
        n = i.useRef(null);
    return (
        i.useEffect(
            () => () => {
                null != n.current && clearTimeout(n.current);
            },
            [],
        ),
        [
            e,
            i.useCallback((e) => {
                null != n.current && clearTimeout(n.current),
                    t(!0),
                    (n.current = setTimeout(() => {
                        t(!1), (n.current = null);
                    }, e * er.A.Millis.SECOND));
            }, []),
        ]
    );
}
var eo = n(731286);
function eu(e) {
    let { consent: t, consentRequired: n, onConsentChange: r } = e;
    return n
        ? (0, l.jsx)("div", {
              className: eo.IQ,
              children: (0, l.jsx)(ee.J, {
                  label: N.intl.format(N.t.qMDAP0, { termsURL: x.X7G.TERMS, privacyURL: x.X7G.PRIVACY }),
                  checked: t,
                  onChange: r,
                  labelType: "secondary",
              }),
          })
        : (0, l.jsx)(b.E, {
              variant: "text-sm/normal",
              color: "text-subtle",
              className: s()(et.Ot, eo.E2),
              children: N.intl.format(N.t["KI+BSb"], { termsURL: x.X7G.TERMS, privacyURL: x.X7G.PRIVACY }),
          });
}
n(801541);
var ec = n(889137),
    ed = n(546727),
    e_ = n(5052);
function eh(e) {
    let t,
        { username: n, suggestion: r, globalName: i, isUsernameFocused: a, onClickSuggestion: s } = e,
        o = (0, e_.i)(n, !0, !0),
        u = n.length > 0;
    return (
        (t = u
            ? (0, ec.YW)(o)
                  .with({ type: ed.q.ERROR, message: ec.P.select() }, (e) =>
                      (0, l.jsx)(b.E, { className: eo.vU, variant: "text-sm/normal", children: e }),
                  )
                  .with({ type: ed.q.AVAILABLE, message: ec.P.select() }, (e) =>
                      (0, l.jsx)(b.E, { className: eo.vq, variant: "text-sm/normal", children: e }),
                  )
                  .otherwise(() =>
                      (0, l.jsx)(b.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          children: N.intl.string(N.t.z7c4bP),
                      }),
                  )
            : null != r && r.length > 0 && i.length > 0
              ? (0, l.jsx)(b.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: N.intl.format(N.t.nDGqqq, { suggestion: r, nameOnClick: s }),
                })
              : (0, l.jsx)(b.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: N.intl.string(N.t.z7c4bP),
                })),
        (0, l.jsx)(G, { show: (u && o?.type === ed.q.ERROR) || a, top: -12, bottom: 20, children: t })
    );
}
function em(e) {
    let {
            initialEmail: t,
            invite: n,
            giftCode: r,
            guildTemplate: a,
            onApiErrors: o,
            onEmailChange: u,
            onGotoLogin: c,
            onRegister: h,
        } = e,
        [m, f] = i.useState(!1),
        [E, p] = i.useState(!1),
        I = async () => {
            q.length > 0 && !w.A.wasRegistrationSuggestionFetched(q) && (await j.A.fetchSuggestionsRegistration(q));
        },
        v = (e) => {
            M.default.track(x.HAw.REGISTER_INPUT_FOCUS, { field: e });
        },
        S = (e) => {
            M.default.track(x.HAw.REGISTER_INPUT_BLUR, { field: e });
        },
        L = (0, d.bG)([D.A], () => D.A.getAuthenticationConsentRequired()),
        U = (0, d.bG)([w.A], () => w.A.registrationUsernameSuggestion()),
        O = i.useRef(null),
        k = i.useRef(null),
        H = i.useRef(null),
        W = i.useRef(null),
        [Q, z] = i.useState(t),
        [q, K] = i.useState(""),
        [Z, $] = i.useState(""),
        [X, Y] = i.useState(""),
        [ee, er] = i.useState(null),
        [el, ec] = ea(L),
        [ed, e_] = i.useState(!1),
        [em, eg] = es(),
        [ef, eE] = i.useState({}),
        { message: eA, email: ep, username: ex, global_name: eN, password: eI, date_of_birth: ev } = ef,
        [eS, ey] = i.useState(null),
        [eb, eC] = i.useState(null),
        [eT, eR] = i.useState(null),
        [ej, ew] = i.useState(null),
        eL = null != L && el;
    !(function (e) {
        let { apiErrors: t, emailRef: n, usernameRef: r, globalNameRef: l, passwordRef: a } = e,
            s = (0, g.A)(t);
        i.useEffect(() => {
            null == s ||
                (s !== t &&
                    (null != t.email || null != t.phone
                        ? n.current?.focus()
                        : null != t.username
                          ? r.current?.focus()
                          : null != t.global_name
                            ? l.current?.focus()
                            : null != t.password && a.current?.focus()));
        }, [t, s, n, r, l, a]);
    })({ apiErrors: ef, emailRef: O, usernameRef: k, globalNameRef: H, passwordRef: W });
    let eU = i.useCallback(async () => {
            let e = null != r ? r.skuId : null,
                t = B.mZ.getState(),
                l = (0, F.uJ)(U) ? null : Z === U;
            P._.dispatch(x.jej.WAVE_EMPHASIZE), e_(!0), eE({});
            try {
                await J({
                    email: Q,
                    username: Z,
                    globalName: q,
                    consent: el,
                    password: X,
                    invite: n?.code,
                    usedUsernameSuggestion: l,
                    guildTemplateCode: a?.code,
                    giftCodeSKUId: e,
                    birthday: ee,
                    promoEmailConsent: t.required ? t : null,
                }),
                    h?.();
            } catch (t) {
                if ((e_(!1), !(t instanceof T.LG))) return;
                let e = (0, V.W)(t);
                eE(e), o?.(e), "number" == typeof e.retry_after && eg(e.retry_after);
            }
        }, [r, a, n, Q, o, h, U, Z, q, X, ee, el, eg]),
        eO = i.useCallback(
            (e) => {
                if ((e?.preventDefault(), null == L)) return;
                let t = !1;
                0 === Q.length && (ey(N.intl.string(N.t.EkokLy)), (t = !0)),
                    0 === Z.length && (eC(N.intl.string(N.t.EkokLy)), (t = !0)),
                    0 === X.length && (eR(N.intl.string(N.t.EkokLy)), (t = !0)),
                    null == ee && (ew(N.intl.string(N.t.EkokLy)), (t = !0)),
                    t || eU();
            },
            [Q, Z, X, ee, L, eU],
        ),
        ek = null;
    return (
        "string" == typeof eA && (ek = (0, l.jsx)(A.ME, { className: s()(et.QX, eo.gJ), children: eA })),
        (0, l.jsx)("form", {
            onSubmit: eO,
            children: (0, l.jsxs)(A.eB, {
                className: et.QX,
                children: [
                    (0, l.jsx)(A.pd, {
                        autoFocus: !0,
                        className: et.SX,
                        label: N.intl.string(N.t.dI4d4S),
                        name: "email",
                        value: Q,
                        onChange: (e) => {
                            z(e), u?.(e), ey(0 === e.length ? N.intl.string(N.t.EkokLy) : null);
                        },
                        error: eS ?? ei(ep),
                        type: "email",
                        autoComplete: "username",
                        setRef: O,
                        required: !0,
                        onFocus: () => v("email"),
                        onBlur: () => S("email"),
                    }),
                    (0, l.jsx)(A.pd, {
                        label: N.intl.string(N.t["9AjdkD"]),
                        className: et.SX,
                        name: "global_name",
                        value: q,
                        onChange: K,
                        error: ei(eN),
                        maxLength: 32,
                        autoComplete: "off",
                        setRef: H,
                        onFocus: () => {
                            f(!0), v("global_name");
                        },
                        onBlur: () => {
                            f(!1), S("global_name");
                        },
                    }),
                    (0, l.jsx)(G, {
                        show: m,
                        top: -12,
                        bottom: 20,
                        children: (0, l.jsx)(b.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: N.intl.string(N.t["330TCc"]),
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        onBlur: () => p(!1),
                        onFocus: () => {
                            p(!0), I();
                        },
                        tabIndex: -1,
                        children: [
                            (0, l.jsx)(A.pd, {
                                label: N.intl.string(N.t.TWzdWj),
                                className: et.SX,
                                name: "username",
                                value: Z,
                                onChange: (e) => {
                                    $(e.toLocaleLowerCase()), eC(0 === e.length ? N.intl.string(N.t.EkokLy) : null);
                                },
                                error: eb ?? ei(ex),
                                autoComplete: "off",
                                setRef: k,
                                required: !0,
                                onFocus: () => v("username"),
                                onBlur: () => S("username"),
                            }),
                            (0, l.jsx)(eh, {
                                username: Z,
                                suggestion: U,
                                globalName: q,
                                isUsernameFocused: E,
                                onClickSuggestion: () => {
                                    k.current?.focus(), null != U && U.length > 0 && $(U);
                                },
                            }),
                        ],
                    }),
                    (0, l.jsx)(A.pd, {
                        label: N.intl.string(N.t["CIGa+7"]),
                        name: "password",
                        value: X,
                        onChange: (e) => {
                            Y(e), eR(0 === e.length ? N.intl.string(N.t.EkokLy) : null);
                        },
                        error: eT ?? ei(eI),
                        type: "password",
                        autoComplete: "new-password",
                        setRef: W,
                        required: !0,
                        onFocus: () => v("password"),
                        onBlur: () => S("password"),
                    }),
                    (0, l.jsx)(R.A, {
                        label: N.intl.string(N.t.rhBeKe),
                        wrapperClassName: eo.UJ,
                        name: "date_of_birth",
                        onChange: (e) => {
                            er(e), null != e && ew(null);
                        },
                        error: ej ?? ei(ev),
                        value: ee,
                        required: !0,
                        onFocus: v,
                        onBlur: S,
                    }),
                    (0, l.jsx)(en, {}),
                    (0, l.jsx)(eu, { consent: el, consentRequired: L, onConsentChange: ec }),
                    (0, l.jsx)(y.m, {
                        text: !el && L ? N.intl.string(N.t.AY4IVA) : null,
                        children: (0, l.jsx)("div", {
                            className: et.QX,
                            children: (0, l.jsx)(_.$, {
                                text: N.intl.string(N.t["825cFy"]),
                                variant: "primary",
                                fullWidth: !0,
                                type: "submit",
                                loading: ed,
                                disabled: !eL || em,
                            }),
                        }),
                    }),
                    ek,
                    (0, l.jsx)("div", {
                        className: et.QX,
                        children: (0, l.jsx)(C.Q, {
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
var eg = n(292666),
    ef = n(504394),
    eE = n(359438),
    eA = n(383302);
function ep(e) {
    let { authBoxClassName: t, name: n, onNameChange: r } = e;
    return (0, l.jsxs)(A.Ay, {
        className: t,
        children: [
            (0, l.jsx)(ef.M, {}),
            (0, l.jsxs)(A.eB, {
                className: eo.y0,
                children: [
                    (0, l.jsx)(y.m, {
                        text: N.intl.string(N.t["hBB85/"]),
                        position: "right",
                        children: (0, l.jsx)(A.pd, {
                            label: N.intl.string(N.t["9AjdkD"]),
                            autoFocus: !0,
                            className: et.QB,
                            name: "username",
                            value: n,
                            placeholder: N.intl.string(N.t["09Q8yp"]),
                            onChange: r,
                            onFocus: () => {
                                M.default.track(x.HAw.REGISTER_INPUT_FOCUS, { field: "username" });
                            },
                            onBlur: () => {
                                M.default.track(x.HAw.REGISTER_INPUT_BLUR, { field: "username" });
                            },
                        }),
                    }),
                    (0, l.jsx)(b.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        className: s()(et.QX, eo.E2),
                        children: N.intl.format(N.t["KI+BSb"], { termsURL: x.X7G.TERMS, privacyURL: x.X7G.PRIVACY }),
                    }),
                    (0, l.jsx)("div", {
                        className: et.Ot,
                        children: (0, l.jsx)(_.$, {
                            text: N.intl.string(N.t["825cFy"]),
                            variant: "primary",
                            fullWidth: !0,
                            disabled: !0,
                        }),
                    }),
                    (0, l.jsx)("div", {
                        className: et.QX,
                        children: (0, l.jsx)(C.Q, {
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
    let { consentRequired: t, consent: n, registering: r } = e,
        a = i.useMemo(() => null != t && n, [t, n]);
    return (0, l.jsx)(y.m, {
        text: !n && t ? N.intl.string(N.t.AY4IVA) : null,
        children: (0, l.jsx)("div", {
            className: et.Ot,
            children: (0, l.jsx)(_.$, {
                text: N.intl.string(N.t["825cFy"]),
                variant: "primary",
                fullWidth: !0,
                type: "submit",
                loading: r,
                disabled: !a,
            }),
        }),
    });
}
function eN(e) {
    let t,
        { invite: n, authBoxClassName: r, onApiErrors: a, onGotoLogin: s, onRegister: o } = e,
        u = (0, d.bG)([D.A], () => D.A.getAuthenticationConsentRequired()),
        c = n?.guild_scheduled_event != null,
        _ = i.useRef(null);
    t =
        n?.guild_scheduled_event != null
            ? (0, l.jsx)(eE.X, { channel: n.channel, guildScheduledEvent: n.guild_scheduled_event })
            : (0, l.jsx)("div", { className: et.S3, children: (0, l.jsx)(ef.A, { invite: n, inUnclaimedFlow: !0 }) });
    let [h, m] = i.useState(""),
        [g, f] = i.useState(null),
        [E, p] = ea(u),
        [I, v] = i.useState(!1),
        [S, y] = i.useState({}),
        { username: b, global_name: j, date_of_birth: w } = S,
        [L, U] = es();
    i.useEffect(() => {
        null == g && _.current?.focus();
    }, [g, _]);
    let [O, k] = i.useState(null),
        [G, F] = i.useState(null),
        B = i.useCallback(async () => {
            P._.dispatch(x.jej.WAVE_EMPHASIZE), v(!0), y({});
            try {
                await (function (e) {
                    let { invite: t = null, giftCodeSKUId: n = null, ...r } = e;
                    return J({ ...r, invite: t, giftCodeSKUId: n });
                })({ consent: E, invite: n.code, globalName: h, birthday: g }),
                    o?.();
            } catch (t) {
                if ((v(!1), !(t instanceof T.LG))) return;
                let e = (0, V.W)(t);
                y(e), a?.(e), "number" == typeof e.retry_after && U(e.retry_after);
            }
        }, [n, h, g, E, a, o, U, y, v]),
        H = i.useCallback(
            (e) => {
                if ((e?.preventDefault(), null === u)) return;
                let t = !1;
                0 === h.length && (k(N.intl.string(N.t.EkokLy)), (t = !0)),
                    null == g && (F(N.intl.string(N.t.EkokLy)), (t = !0)),
                    t || B();
            },
            [h, g, u, B, k, F],
        );
    return n.state === x.elq.RESOLVING
        ? (0, l.jsx)(ep, { authBoxClassName: r, name: h, onNameChange: m })
        : (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)(A.Ay, {
                      tag: "section",
                      className: r,
                      children: (0, l.jsxs)("form", {
                          onSubmit: H,
                          children: [
                              t,
                              c ? (0, l.jsx)("div", { className: eo.yF }) : null,
                              (0, l.jsxs)(A.eB, {
                                  className: c ? void 0 : eo.y0,
                                  children: [
                                      (0, l.jsx)(eg.k, {
                                          helperText: N.intl.string(N.t["330TCc"]),
                                          label: N.intl.string(N.t["9AjdkD"]),
                                          error: O ?? ei(j ?? b),
                                          autoFocus: !0,
                                          name: "global_name",
                                          value: h,
                                          placeholder: N.intl.string(N.t["09Q8yp"]),
                                          onChange: m,
                                          onFocus: () => {
                                              M.default.track(x.HAw.REGISTER_INPUT_FOCUS, { field: "global_name" });
                                          },
                                          onBlur: () => {
                                              M.default.track(x.HAw.REGISTER_INPUT_BLUR, { field: "global_name" });
                                          },
                                      }),
                                      (0, l.jsx)(R.A, {
                                          label: N.intl.string(N.t.rhBeKe),
                                          wrapperClassName: eo.DC,
                                          name: "date_of_birth",
                                          onChange: (e) => {
                                              f(e), null != e && F(null);
                                          },
                                          error: G ?? ei(w),
                                          value: g,
                                      }),
                                      (0, l.jsx)(eu, { consent: E, consentRequired: u, onConsentChange: p }),
                                      (0, l.jsx)(ex, { consentRequired: u, consent: E, registering: I }),
                                      (0, l.jsx)("div", {
                                          className: et.QX,
                                          children: (0, l.jsx)(C.Q, {
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
                      ? (0, l.jsx)(A.Ay, {
                            className: et.QX,
                            children: (0, l.jsx)(eA.N, { guild: n.guild, onlineCount: n.approximate_presence_count }),
                        })
                      : null,
              ],
          });
}
var eI = n(491509),
    ev = n(895600),
    eS = n(274303),
    ey = n(942614),
    eb = n(976860),
    eC = n(210714),
    eT = n(650048),
    eR = n(161928),
    ej = n(538796);
n(100544);
var ew =
        (((r = {}).IDENTITY = "identity"),
        (r.DISPLAY_NAME = "display_name"),
        (r.ACCOUNT_INFORMATION = "account_information"),
        (r.FULL = "full"),
        (r.AGE_GATE = "age_gate"),
        (r.INVITE = "invite"),
        (r.SMS_VERIFY = "sms_verify"),
        r),
    eL = n(771016);
function eU(e) {
    let {
            authBoxClassName: t,
            giftCode: n,
            giftCodeSKU: r,
            guildTemplate: a,
            invite: E,
            location: p,
            redirectTo: I,
            onLoginStart: y,
            onRegister: b,
            transitionTo: C = eb.pX,
        } = e,
        T = (0, d.bG)([D.A], () => D.A.getAuthenticationConsentRequired()),
        R = (0, d.bG)([Z.default], () => Z.default.isAuthenticated()),
        j = (0, d.bG)([f.A], () => f.A.isUnderageAnonymous()),
        w = (0, d.bG)([eS.A], () => eS.A.getHasLoggedInAccounts()),
        L = null != e.location ? (0, o.parse)(e.location.search) : {},
        [U, O] = i.useState(L.email ?? ""),
        [k, G] = i.useState({}),
        F = (0, g.A)(R),
        B = (function (e, t, n) {
            if (null != e) return "gift";
            if (null != t) return "guild_template";
            if (null != n) {
                if (null != n.guild) return "guild_invite";
                else if (null != n.channel) return "dm_invite";
                else if (null != n.inviter) return "friend_invite";
            }
            return null;
        })(n, a, E),
        V = null != E && (null != E.guild || null != E.channel),
        H = null != E && null == E.guild && null == E.channel && null != E.inviter,
        W = i.useCallback(() => {
            R && (null != I ? C(I) : C(eT.A.defaultRoute));
        }, [R, I, C]);
    (0, c.Ay)(() => {
        W(),
            M.default.track(
                x.HAw.REGISTER_VIEWED,
                {
                    location: null != E ? "Invite Register Page" : "Non-Invite Register Page",
                    registration_source: B,
                    ...(null != r ? (0, eI.A)(r, !1, !1) : {}),
                },
                { flush: !0 },
            ),
            null == T && m.A.getLocationMetadata(),
            (0, eC.d)("register");
    }),
        i.useEffect(() => {
            R && !1 === F && ((0, ey.C)(eL.zY.ORGANIC_REGISTERED), W());
        }, [R, F, W]);
    let Q = ew.FULL;
    j || null != k.date_of_birth ? (Q = ew.AGE_GATE) : V && (Q = ew.INVITE),
        (0, S.A)(
            {
                type: u.ImpressionTypes.VIEW,
                name: u.ImpressionNames.USER_REGISTRATION,
                properties: { impression_group: u.ImpressionGroups.USER_REGISTRATION_FLOW, step: Q },
            },
            {},
            [Q],
        );
    let z = i.useCallback(
        (e) => {
            let t,
                r = null != p ? (0, o.parse)(p.search) : {};
            null != E
                ? (t = x.BVt.INVITE_LOGIN(E.code))
                : null != n
                  ? (t = x.BVt.GIFT_CODE_LOGIN(n.code))
                  : null != a
                    ? (t = x.BVt.GUILD_TEMPLATE_LOGIN(a.code))
                    : null != I
                      ? ((t = x.BVt.LOGIN), (r.redirect_to = I))
                      : ((t = x.BVt.LOGIN), "" !== U && (r = { email: U })),
                m.A.loginReset(),
                C(t, { search: (0, o.stringify)(r), source: "register" }),
                y?.(e),
                P._.dispatch(x.jej.WAVE_EMPHASIZE);
        },
        [U, E, n, a, I, p, y, C],
    );
    if (j || null != k.date_of_birth) return (0, l.jsx)(v, {});
    if (null != E && V)
        return (0, l.jsx)(eN, { invite: E, authBoxClassName: t, onApiErrors: G, onGotoLogin: z, onRegister: b });
    let q = (0, l.jsx)(A.hE, { children: N.intl.string(N.t.wC4TlR) }, "title"),
        K = !1;
    null != a
        ? ((q = (0, l.jsx)(ev.A, { guildTemplate: a })), (K = !0))
        : null != n
          ? (q = (0, l.jsx)(eR.A, { giftCode: n }))
          : null != E &&
            H &&
            E.state === x.elq.RESOLVED &&
            (q = (0, l.jsx)("div", { className: et.S3, children: (0, l.jsx)(ef.A, { invite: E, isRegister: !0 }) }));
    let $ = (0, l.jsx)(em, {
        initialEmail: L.email ?? "",
        invite: E,
        giftCode: n,
        guildTemplate: a,
        onApiErrors: G,
        onEmailChange: O,
        onGotoLogin: z,
        onRegister: b,
    });
    return K
        ? (0, l.jsx)(ej.A, {
              tag: "section",
              className: s()(t, eo.Sy),
              children: () => [
                  q,
                  (0, l.jsxs)(
                      "div",
                      {
                          className: eo.Uu,
                          children: [(0, l.jsx)(A.hE, { className: eo.lR, children: N.intl.string(N.t.wC4TlR) }), $],
                      },
                      "register-title",
                  ),
              ],
          })
        : (0, l.jsxs)(A.Ay, {
              tag: "section",
              className: t,
              children: [
                  w
                      ? (0, l.jsx)("div", {
                            className: eo.AX,
                            children: (0, l.jsx)(_.$, {
                                onClick: z,
                                variant: "secondary",
                                text: N.intl.string(N.t["1MrpWO"]),
                                icon: h.n,
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
