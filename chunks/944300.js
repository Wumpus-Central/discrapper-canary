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
    g = n(203982),
    p = n(351671),
    A = n(15552),
    f = n(212640),
    E = n(652215),
    x = n(985018);
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
            location: y,
            loginSource: b,
        } = e,
        [S, R] = s.useState(() => v),
        [O, L] = s.useState(() => N),
        [w, k] = s.useState(""),
        [G, D] = s.useState(() => {
            let e = null != y ? (0, r.parse)(y.search) : {};
            return e.email ?? e.login ?? "";
        }),
        [P, U] = s.useState(""),
        [B, M] = s.useState(!1),
        [V, F] = s.useState(null),
        [W, H] = s.useState(!1),
        [z] = s.useState(() => new AbortController()),
        [K, Q] = s.useState({}),
        Y = s.useRef(null),
        q = s.useRef(null),
        X = s.useRef(null);
    !S || v || N || R(!1);
    let $ = s.useMemo(() => {
            if (null != b) return b;
            if (null != I) return "gift";
            if (null != n) return "guild_template";
            if (null != t) {
                if (null != t.guild) return "guild_invite";
                if (null != t.channel) return "dm_invite";
                if (null != t.inviter) return "friend_invite";
            }
            return null != T ? (0, p.Q)(T) : null;
        }, [b, I, n, t, T]),
        Z = null != I ? I.skuId : null,
        J = s.useCallback(
            (e) => {
                let t = null != e ? (0, r.parse)(e.search) : {};
                if ((delete t.redirect_to, null != T)) {
                    if ((0, f.RZ)(T)) return void (0, f.NY)(T);
                    null != C ? C(T) : j(T);
                } else if (null == t.service) j(E.BVt.APP);
                else {
                    let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + E.Rsh.SSO,
                        n = { ...t, token: h.default.getToken() };
                    window.location = `${e}?${(0, r.stringify)(n)}`;
                }
            },
            [T, C, j],
        ),
        ee = s.useCallback(
            function (e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                e && null != t && (L(!0), n ? u.A.verifySSOToken("login").then(() => J(t)) : J(t));
            },
            [J],
        ),
        et = s.useCallback(
            (e) => {
                Q({}),
                    m.default.track(E.HAw.LOGIN_SUCCESSFUL, {
                        source: E.mdB.QR_CODE,
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
            Y.current = e ?? null;
        }, []),
        es = s.useCallback((e) => {
            q.current = e ?? null;
        }, []),
        er = s.useCallback(
            async function (e) {
                let { undelete: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                e?.preventDefault(), z.abort("Starting password login"), g._.dispatch(E.jej.WAVE_EMPHASIZE), Q({});
                try {
                    await u.A.login({
                        login: w + G,
                        password: P,
                        undelete: n ?? B,
                        source: $,
                        giftCodeSKUId: Z,
                        invite: t,
                    });
                } catch (e) {
                    Q((0, A.p)(e));
                }
            },
            [z, G, w, P, B, $, Z, t],
        ),
        el = s.useCallback(
            async (e) => {
                let t = w + G;
                Q({});
                try {
                    let { token: n } = await _.A.verifyPhone(t, e, !1);
                    await u.A.authorizeIPAddress(n), er();
                } catch (e) {
                    null != e.body && null != e.body.message && F(e.body.message);
                }
            },
            [w, G, er],
        ),
        ea = s.useCallback(
            async (e) => {
                F(null);
                try {
                    let { token: t } = await _.A.verifyPhone(w + G, e, !1);
                    j(E.BVt.RESET, { search: (0, r.stringify)({ token: t, from_login: "true" }) });
                } catch (e) {
                    null != e.body && null != e.body.message && F(e.body.message);
                }
            },
            [w, G, j],
        ),
        eo = s.useCallback(
            async (e) => {
                null != e && e.preventDefault(), null != Y.current && Y.current.focus();
                let t = w + G;
                Q({});
                try {
                    g._.dispatch(E.jej.WAVE_EMPHASIZE);
                    let e = await u.A.forgotPassword(t);
                    if (!1 === e) return;
                    e === l.D.ONE_TIME_LOGIN
                        ? (0, c.openModal)((e) => {
                              let t = [
                                  {
                                      variant: "primary",
                                      text: x.intl.string(x.t.BddRzS),
                                      onClick: e.onClose,
                                      fullWidth: !0,
                                  },
                              ];
                              return (0, i.jsx)(a.Modal, {
                                  title: x.intl.string(x.t["6Ecyts"]),
                                  actions: t,
                                  ...e,
                                  children: (0, i.jsx)(d.E, {
                                      variant: "text-md/normal",
                                      children: x.intl.string(x.t.iAcrqV),
                                  }),
                              });
                          })
                        : (0, o.A)({
                              title: x.intl.string(x.t.f5Pi7A),
                              subtitle: x.intl.format(x.t["6u5hQ9"], { email: t }),
                          });
                } catch (e) {
                    Q((0, A.p)(e));
                }
            },
            [w, G],
        ),
        ec = s.useCallback(() => {
            _.A.resendCode(w + G);
        }, [w, G]),
        ed = s.useCallback((e) => {
            null != e && e.preventDefault(), u.A.loginReset(), U(""), k(""), D(""), M(!1), R(!1), L(!1), Q({});
        }, []),
        eu = s.useCallback(() => {
            M(!0), er(void 0, { undelete: !0 });
        }, [er]),
        e_ = s.useCallback(() => {
            let e,
                i = null != y ? (0, r.parse)(y.search) : {};
            "" !== G && (i.email = G),
                null != t
                    ? ((i.mode = "register"), (e = E.BVt.INVITE(t.code)))
                    : null != I
                      ? ((i.mode = "register"), (e = E.BVt.GIFT_CODE(I.code)))
                      : null != n
                        ? (e = E.BVt.GUILD_TEMPLATE(n.code))
                        : null != T
                          ? ((e = E.BVt.REGISTER), (i.redirect_to = T))
                          : (e = E.BVt.REGISTER),
                en(),
                j(e, { search: (0, r.stringify)(i) }),
                g._.dispatch(E.jej.WAVE_EMPHASIZE);
        }, [G, t, I, n, T, y, en, j]);
    return {
        checkingHandoff: S,
        redirecting: O,
        login: G,
        password: P,
        phoneVerifyError: V,
        dismissedChooseAccount: W,
        setDismissedChooseAccount: H,
        errors: K,
        conditionalMediationAbortController: z,
        loginSource: $,
        giftCodeSKUId: Z,
        loginOrSSO: ee,
        loginRef: Y,
        passwordRef: q,
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
            D(e), k(t);
        }, []),
        onPasswordChange: s.useCallback((e) => {
            U(e);
        }, []),
        setLoginRef: ei,
        setPasswordRef: es,
    };
}
