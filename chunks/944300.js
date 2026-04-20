"use strict";
n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    r = n(492462),
    l = n(511815),
    a = n(158954),
    o = n(139033),
    c = n(397927),
    d = n(830215),
    u = n(557722),
    _ = n(961350),
    h = n(954571),
    p = n(203982),
    g = n(351671),
    m = n(15552),
    A = n(212640),
    f = n(652215),
    E = n(985018);
function x(e) {
    let {
            invite: t,
            guildTemplate: n,
            giftCode: x,
            handoffAvailable: I,
            authenticated: N,
            transitionTo: v,
            replaceWith: T,
            redirectTo: C,
            location: j,
            loginSource: y,
        } = e,
        [S, b] = s.useState(() => I),
        [R, O] = s.useState(() => N),
        [L, w] = s.useState(""),
        [k, D] = s.useState(() => {
            let e = null != j ? (0, r.parse)(j.search) : {};
            return e.email ?? e.login ?? "";
        }),
        [U, P] = s.useState(""),
        [B, G] = s.useState(!1),
        [M, F] = s.useState(null),
        [V, W] = s.useState(!1),
        [H] = s.useState(() => new AbortController()),
        [K, z] = s.useState({}),
        Q = s.useRef(null),
        q = s.useRef(null),
        Y = s.useRef(null);
    !S || I || N || b(!1);
    let X = s.useMemo(() => {
            if (null != y) return y;
            if (null != x) return "gift";
            if (null != n) return "guild_template";
            if (null != t) {
                if (null != t.guild) return "guild_invite";
                if (null != t.channel) return "dm_invite";
                if (null != t.inviter) return "friend_invite";
            }
            return null != C ? (0, g.Q)(C) : null;
        }, [y, x, n, t, C]),
        J = null != x ? x.skuId : null,
        $ = s.useCallback(
            (e) => {
                let t = null != e ? (0, r.parse)(e.search) : {};
                if ((delete t.redirect_to, null != C)) {
                    if ((0, A.RZ)(C)) return void (0, A.NY)(C);
                    null != T ? T(C) : v(C);
                } else if (null == t.service) v(f.BVt.APP);
                else {
                    let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.Rsh.SSO,
                        n = { ...t, token: _.default.getToken() };
                    window.location = `${e}?${(0, r.stringify)(n)}`;
                }
            },
            [C, T, v],
        ),
        Z = s.useCallback(
            function (e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                e && null != t && (O(!0), n ? d.A.verifySSOToken("login").then(() => $(t)) : $(t));
            },
            [$],
        ),
        ee = s.useCallback(
            (e) => {
                z({}),
                    h.default.track(f.HAw.LOGIN_SUCCESSFUL, {
                        source: f.mdB.QR_CODE,
                        login_source: X,
                        gift_code_sku_id: J,
                        is_new_user: !1,
                        login_method: "remote_auth",
                        login_instance_id: e ?? null,
                    });
            },
            [X, J],
        ),
        et = s.useCallback(() => {
            H.abort("Login state reset"), z({}), d.A.loginReset();
        }, [H]),
        en = s.useCallback((e) => {
            Q.current = e ?? null;
        }, []),
        ei = s.useCallback((e) => {
            q.current = e ?? null;
        }, []),
        es = s.useCallback(
            async function (e) {
                let { undelete: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                e?.preventDefault(), H.abort("Starting password login"), p._.dispatch(f.jej.WAVE_EMPHASIZE), z({});
                try {
                    await d.A.login({
                        login: L + k,
                        password: U,
                        undelete: n ?? B,
                        source: X,
                        giftCodeSKUId: J,
                        invite: t,
                    });
                } catch (e) {
                    z((0, m.p)(e));
                }
            },
            [H, k, L, U, B, X, J, t],
        ),
        er = s.useCallback(
            async (e) => {
                let t = L + k;
                z({});
                try {
                    let { token: n } = await u.A.verifyPhone(t, e, !1);
                    await d.A.authorizeIPAddress(n), es();
                } catch (e) {
                    null != e.body && null != e.body.message && F(e.body.message);
                }
            },
            [L, k, es],
        ),
        el = s.useCallback(
            async (e) => {
                F(null);
                try {
                    let { token: t } = await u.A.verifyPhone(L + k, e, !1);
                    v(f.BVt.RESET, { search: (0, r.stringify)({ token: t, from_login: "true" }) });
                } catch (e) {
                    null != e.body && null != e.body.message && F(e.body.message);
                }
            },
            [L, k, v],
        ),
        ea = s.useCallback(
            async (e) => {
                null != e && e.preventDefault(), null != Q.current && Q.current.focus();
                let t = L + k;
                z({});
                try {
                    p._.dispatch(f.jej.WAVE_EMPHASIZE);
                    let e = await d.A.forgotPassword(t);
                    if (!1 === e) return;
                    e === l.D.ONE_TIME_LOGIN
                        ? (0, c.qfG)((e) => {
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
                                  children: (0, i.jsx)(c.Text, {
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
                    z((0, m.p)(e));
                }
            },
            [L, k],
        ),
        eo = s.useCallback(() => {
            u.A.resendCode(L + k);
        }, [L, k]),
        ec = s.useCallback((e) => {
            null != e && e.preventDefault(), d.A.loginReset(), P(""), w(""), D(""), G(!1), b(!1), O(!1), z({});
        }, []),
        ed = s.useCallback(() => {
            G(!0), es(void 0, { undelete: !0 });
        }, [es]),
        eu = s.useCallback(() => {
            let e,
                i = null != j ? (0, r.parse)(j.search) : {};
            "" !== k && (i.email = k),
                null != t
                    ? ((i.mode = "register"), (e = f.BVt.INVITE(t.code)))
                    : null != x
                      ? ((i.mode = "register"), (e = f.BVt.GIFT_CODE(x.code)))
                      : null != n
                        ? (e = f.BVt.GUILD_TEMPLATE(n.code))
                        : null != C
                          ? ((e = f.BVt.REGISTER), (i.redirect_to = C))
                          : (e = f.BVt.REGISTER),
                et(),
                v(e, { search: (0, r.stringify)(i) }),
                p._.dispatch(f.jej.WAVE_EMPHASIZE);
        }, [k, t, x, n, C, j, et, v]);
    return {
        checkingHandoff: S,
        redirecting: R,
        login: k,
        password: U,
        phoneVerifyError: M,
        dismissedChooseAccount: V,
        setDismissedChooseAccount: W,
        errors: K,
        conditionalMediationAbortController: H,
        loginSource: X,
        giftCodeSKUId: J,
        loginOrSSO: Z,
        loginRef: Q,
        passwordRef: q,
        codeRef: Y,
        handleLogin: es,
        handleIPAuthorize: er,
        handlePasswordReset: el,
        handleForgotPassword: ea,
        handleResendCode: eo,
        handleReset: ec,
        handleCancelAccountDeletion: ed,
        handleGotoRegister: eu,
        handleAuthSuccess: ee,
        loginReset: et,
        onLoginChange: s.useCallback((e, t) => {
            D(e), w(t);
        }, []),
        onPasswordChange: s.useCallback((e) => {
            P(e);
        }, []),
        setLoginRef: en,
        setPasswordRef: ei,
    };
}
