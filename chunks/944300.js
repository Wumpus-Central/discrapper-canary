"use strict";
n.d(t, { A: () => I });
var i = n(627968),
    s = n(64700),
    r = n(492462),
    l = n(511815),
    a = n(189213),
    o = n(139033),
    c = n(192308),
    d = n(834730),
    u = n(830215),
    _ = n(557722),
    h = n(961350),
    m = n(954571),
    p = n(203982),
    g = n(351671),
    A = n(15552),
    f = n(212640),
    x = n(652215),
    E = n(985018);
function I(e) {
    let {
            invite: t,
            guildTemplate: n,
            giftCode: I,
            handoffAvailable: v,
            authenticated: N,
            transitionTo: j,
            replaceWith: C,
            redirectTo: T,
            location: b,
            loginSource: S,
        } = e,
        [y, R] = s.useState(() => v),
        [w, O] = s.useState(() => N),
        [L, k] = s.useState(""),
        [G, U] = s.useState(() => {
            let e = null != b ? (0, r.parse)(b.search) : {};
            return e.email ?? e.login ?? "";
        }),
        [D, P] = s.useState(""),
        [B, M] = s.useState(!1),
        [V, F] = s.useState(null),
        [W, H] = s.useState(!1),
        [z] = s.useState(() => new AbortController()),
        [K, Q] = s.useState({}),
        q = s.useRef(null),
        Y = s.useRef(null),
        X = s.useRef(null);
    !y || v || N || R(!1);
    let $ = s.useMemo(() => {
            if (null != S) return S;
            if (null != I) return "gift";
            if (null != n) return "guild_template";
            if (null != t) {
                if (null != t.guild) return "guild_invite";
                if (null != t.channel) return "dm_invite";
                if (null != t.inviter) return "friend_invite";
            }
            return null != T ? (0, g.Q)(T) : null;
        }, [S, I, n, t, T]),
        Z = null != I ? I.skuId : null,
        J = s.useCallback(
            (e) => {
                let t = null != e ? (0, r.parse)(e.search) : {};
                if ((delete t.redirect_to, null != T)) {
                    if ((0, f.RZ)(T)) return void (0, f.NY)(T);
                    null != C ? C(T) : j(T);
                } else if (null == t.service) j(x.BVt.APP);
                else {
                    let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + x.Rsh.SSO,
                        n = { ...t, token: h.default.getToken() };
                    window.location = `${e}?${(0, r.stringify)(n)}`;
                }
            },
            [T, C, j],
        ),
        ee = s.useCallback(
            function (e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                e && null != t && (O(!0), n ? u.A.verifySSOToken("login").then(() => J(t)) : J(t));
            },
            [J],
        ),
        et = s.useCallback(
            (e) => {
                Q({}),
                    m.default.track(x.HAw.LOGIN_SUCCESSFUL, {
                        source: x.mdB.QR_CODE,
                        login_source: $,
                        gift_code_sku_id: Z,
                        is_new_user: !1,
                        login_method: "remote_auth",
                        login_instance_id: e ?? null,
                    });
            },
            [$, Z],
        ),
        en = s.useCallback(() => {
            z.abort("Login state reset"), Q({}), u.A.loginReset();
        }, [z]),
        ei = s.useCallback((e) => {
            q.current = e ?? null;
        }, []),
        es = s.useCallback((e) => {
            Y.current = e ?? null;
        }, []),
        er = s.useCallback(
            async function (e) {
                let { undelete: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                e?.preventDefault(), z.abort("Starting password login"), p._.dispatch(x.jej.WAVE_EMPHASIZE), Q({});
                try {
                    await u.A.login({
                        login: L + G,
                        password: D,
                        undelete: n ?? B,
                        source: $,
                        giftCodeSKUId: Z,
                        invite: t,
                    });
                } catch (e) {
                    Q((0, A.p)(e));
                }
            },
            [z, G, L, D, B, $, Z, t],
        ),
        el = s.useCallback(
            async (e) => {
                let t = L + G;
                Q({});
                try {
                    let { token: n } = await _.A.verifyPhone(t, e, !1);
                    await u.A.authorizeIPAddress(n), er();
                } catch (e) {
                    null != e.body && null != e.body.message && F(e.body.message);
                }
            },
            [L, G, er],
        ),
        ea = s.useCallback(
            async (e) => {
                F(null);
                try {
                    let { token: t } = await _.A.verifyPhone(L + G, e, !1);
                    j(x.BVt.RESET, { search: (0, r.stringify)({ token: t, from_login: "true" }) });
                } catch (e) {
                    null != e.body && null != e.body.message && F(e.body.message);
                }
            },
            [L, G, j],
        ),
        eo = s.useCallback(
            async (e) => {
                null != e && e.preventDefault(), null != q.current && q.current.focus();
                let t = L + G;
                Q({});
                try {
                    p._.dispatch(x.jej.WAVE_EMPHASIZE);
                    let e = await u.A.forgotPassword(t);
                    if (!1 === e) return;
                    e === l.D.ONE_TIME_LOGIN
                        ? (0, c.openModal)((e) => {
                              let t = [
                                  {
                                      variant: "primary",
                                      text: E.intl.string(E.t.BddRzS),
                                      onClick: e.onClose,
                                      fullWidth: !0,
                                  },
                              ];
                              return (0, i.jsx)(a.Modal, {
                                  title: E.intl.string(E.t["6Ecyts"]),
                                  actions: t,
                                  ...e,
                                  children: (0, i.jsx)(d.E, {
                                      variant: "text-md/normal",
                                      children: E.intl.string(E.t.iAcrqV),
                                  }),
                              });
                          })
                        : (0, o.A)({
                              title: E.intl.string(E.t.f5Pi7A),
                              subtitle: E.intl.format(E.t["6u5hQ9"], { email: t }),
                          });
                } catch (e) {
                    Q((0, A.p)(e));
                }
            },
            [L, G],
        ),
        ec = s.useCallback(() => {
            _.A.resendCode(L + G);
        }, [L, G]),
        ed = s.useCallback((e) => {
            null != e && e.preventDefault(), u.A.loginReset(), P(""), k(""), U(""), M(!1), R(!1), O(!1), Q({});
        }, []),
        eu = s.useCallback(() => {
            M(!0), er(void 0, { undelete: !0 });
        }, [er]),
        e_ = s.useCallback(() => {
            let e,
                i = null != b ? (0, r.parse)(b.search) : {};
            "" !== G && (i.email = G),
                null != t
                    ? ((i.mode = "register"), (e = x.BVt.INVITE(t.code)))
                    : null != I
                      ? ((i.mode = "register"), (e = x.BVt.GIFT_CODE(I.code)))
                      : null != n
                        ? (e = x.BVt.GUILD_TEMPLATE(n.code))
                        : null != T
                          ? ((e = x.BVt.REGISTER), (i.redirect_to = T))
                          : (e = x.BVt.REGISTER),
                en(),
                j(e, { search: (0, r.stringify)(i) }),
                p._.dispatch(x.jej.WAVE_EMPHASIZE);
        }, [G, t, I, n, T, b, en, j]);
    return {
        checkingHandoff: y,
        redirecting: w,
        login: G,
        password: D,
        phoneVerifyError: V,
        dismissedChooseAccount: W,
        setDismissedChooseAccount: H,
        errors: K,
        conditionalMediationAbortController: z,
        loginSource: $,
        giftCodeSKUId: Z,
        loginOrSSO: ee,
        loginRef: q,
        passwordRef: Y,
        codeRef: X,
        handleLogin: er,
        handleIPAuthorize: el,
        handlePasswordReset: ea,
        handleForgotPassword: eo,
        handleResendCode: ec,
        handleReset: ed,
        handleCancelAccountDeletion: eu,
        handleGotoRegister: e_,
        handleAuthSuccess: et,
        loginReset: en,
        onLoginChange: s.useCallback((e, t) => {
            U(e), k(t);
        }, []),
        onPasswordChange: s.useCallback((e) => {
            P(e);
        }, []),
        setLoginRef: ei,
        setPasswordRef: es,
    };
}
