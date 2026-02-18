"use strict";
let r, i;
n.r(t), n.d(t, { default: () => ek }), n(321073), n(142703);
var s = n(247775),
    a = n(80703),
    o = n(311907),
    l = n(562465),
    u = n(506774),
    c = n(73153),
    d = n(155718),
    _ = n(421924),
    f = n(15552),
    p = n(248415),
    h = n(53943),
    m = n(626584),
    E = n(620233),
    g = n(976860),
    A = n(918518),
    I = n(252919),
    T = n(954571),
    S = n(612181),
    y = n(728458),
    v = n(115036),
    N = n(536802),
    C = n(652215),
    b = n(204925);
let R = new m.A("AuthenticationStore"),
    O = "fingerprint",
    D = "analytics_installation",
    L = "user_id_cache",
    w = null,
    x = null,
    M = null,
    P = null,
    k = null,
    U = null,
    G = null,
    F = null,
    V = C.aUe.NONE,
    B = !1,
    H = [],
    j = "",
    Y = !1,
    W = null,
    K = !1,
    z = !1,
    $ = null,
    q = null,
    Z = !1,
    X = !1,
    Q = [];
function J(e) {
    let t = null != s.getToken(),
        n = null != u.w.get(C.ilC);
    R.verbose(e, { tokenManagerHasToken: t, storageHasToken: n });
}
function ee() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (((k = u.w.get(O)), (G = u.w.get(D) ?? null), null != $)) return $;
    let t = null != k ? k : s.getToken();
    !(0, g.m)() || (!e && null != t) || v.A.isHandoffAvailable() || et({ withGuildExperiments: !0 });
}
function et(e) {
    let { withGuildExperiments: t } = e,
        n = {},
        r = T.default.getSuperPropertiesBase64();
    null != r && (n["X-Super-Properties"] = r),
        null != k && (n["X-Fingerprint"] = k),
        null != G && (n["X-Installation-ID"] = G),
        ($ = l.Bo.get({
            url: C.Rsh.EXPERIMENTS,
            query: { with_guild_experiments: t },
            headers: n,
            context: { location: (0, g.SB)() },
            retries: 3,
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(
            (e) => {
                let { fingerprint: t, assignments: n, guild_experiments: r } = e.body;
                t && c.h.dispatch({ type: "FINGERPRINT", fingerprint: t }),
                    c.h.dispatch({
                        type: "EXPERIMENTS_FETCH_SUCCESS",
                        fingerprint: t,
                        experiments: n,
                        guildExperiments: r,
                    }),
                    ($ = null),
                    (0, _.hK)();
            },
            () => {
                ($ = null), c.h.dispatch({ type: "EXPERIMENTS_FETCH_FAILURE" });
            },
        ));
}
function en() {
    (U = k), (k = null), u.w.remove(O);
}
function er(e, t) {
    J("setAuthToken called."), (null == t || t !== w) && s.removeAnalyticsToken(), s.setToken(e, t);
}
function ei(e) {
    (F = e), s.setAnalyticsToken(e);
}
function es() {
    return J("removeAuthToken called."), s.removeAnalyticsToken(), s.removeToken();
}
function ea(e) {
    let { isPasswordAttempt: t } = e;
    (V = C.aUe.LOGGING_IN), (X = X || !0 === t);
}
function eo(e) {
    let { isMultiAccount: t } = e;
    (V = C.aUe.NONE), (j = ""), (Y = !1), (W = null), (i = null), (r = null), t || (ef(), es(), ee(!1));
}
function el() {
    V = C.aUe.NONE;
}
function eu(e) {
    let { token: t } = e;
    (V = C.aUe.NONE), er(t), en(), (j = ""), (Y = !1), (W = null), (i = null), ef(), (Z = !1);
}
function ec(e) {
    let { error: t } = e;
    (j = ""),
        (Y = !1),
        (W = null),
        (i = null),
        ef(),
        (V = null != (0, f.p)(t).date_of_birth ? C.aUe.LOGIN_AGE_GATE : C.aUe.NONE);
}
function ed() {
    Z = !0;
}
function e_(e) {
    let { error: t } = e;
    (j = ""),
        (Y = !1),
        (W = null),
        (Z = !1),
        (i = null),
        (V = null != (0, f.W)(t).date_of_birth ? C.aUe.LOGIN_AGE_GATE : C.aUe.NONE);
}
function ef() {
    let e = [];
    null != W && e.push({ type: "webauthn", challenge: W }),
        K && e.push({ type: "totp" }),
        z && e.push({ type: "backup" }),
        Y && e.push({ type: "sms" }),
        (Q = e);
}
function ep(e) {
    let { ticket: t, sms: n, webauthn: r, backup: s, totp: a, loginInstanceId: o } = e;
    null != t && ((j = t), (Y = n), (W = r ?? null), (z = s), (K = a), (i = o), ef()), (V = C.aUe.MFA_STEP);
}
function eh() {
    V = C.aUe.LOGGING_IN_MFA;
}
function em(e) {
    (V = C.aUe.ACCOUNT_SCHEDULED_FOR_DELETION), (r = e.credentials);
}
function eE(e) {
    (V = C.aUe.ACCOUNT_DISABLED), (r = e.credentials);
}
function eg(e) {
    (V = C.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION), (r = e.credentials);
}
function eA(e) {
    (V = C.aUe.PHONE_IP_AUTHORIZATION), (r = e.credentials);
}
function eI(e) {
    let t = e.fingerprint;
    null == k
        ? null != t
            ? (T.default.track(C.HAw.USER_FINGERPRINT_CHANGED, {
                  old_fingerprint: null != U ? (0, a.d)(U) : null,
                  new_fingerprint: (0, a.d)(t),
              }),
              (k = t),
              (U = t),
              u.w.set(O, k))
            : ee()
        : null != t &&
          k !== t &&
          T.default.track(C.HAw.EXTERNAL_FINGERPRINT_DROPPED, {
              fingerprint: (0, a.d)(k),
              dropped_fingerprint: (0, a.d)(t),
          });
}
function eT(e) {
    let { installation: t } = e;
    if (null != G && G.length > 0) return !1;
    (G = t), A.A.canUseInstallationId() && u.w.set(D, t);
}
function eS(e) {
    let { token: t } = e;
    er(t), en();
}
function ey(e) {
    let {
        user: t,
        sessionId: n,
        authSessionIdHash: r,
        analyticsToken: i,
        auth: s,
        staticAuthSessionId: a,
        apexExperiments: o,
    } = e;
    J("handleConnectionOpen called"),
        y.A.setUser(t.id, t.username, t.email ?? void 0, (0, I.A)(t)),
        (x = n),
        (M = r),
        (P = a),
        ei(i),
        (w = t.id),
        void 0 !== s && (H = s.authenticator_types),
        u.w.set(L, t.id),
        o?.installation != null && eT({ type: "INSTALLATION_ID", installation: o.installation });
}
function ev(e) {
    let { user: t, sessionId: n, analyticsToken: r, token: i } = e;
    y.A.setUser(t.id, t.username, t.email ?? void 0, (0, I.A)(t)),
        (x = n),
        (F = r),
        er(i, t.id),
        null != r && ei(r),
        en(),
        (w = t.id),
        u.w.set(L, t.id);
}
function eN(e) {
    let { code: t } = e;
    J(`handleConnectionClosed called with code ${t}.`);
    let r = n(192308).hasModalOpen;
    if (4004 === t) {
        if (B || r(b.jc) || r(b.Uy)) return void eR();
        T.default.track(C.HAw.APP_USER_DEAUTHENTICATED, { user_id: u.w.get(L) }),
            eO(),
            setImmediate(() => (0, g.pX)(C.BVt.DEFAULT_LOGGED_OUT));
    }
}
function eC(e) {
    let { token: t, userId: n } = e;
    J("handleUpdateToken called"), er(t, n), en();
}
function eb(e) {
    let { authSessionIdHash: t } = e;
    null != t && (M = t);
}
function eR() {
    (B = !0),
        eO(),
        c.h.wait(() => {
            (0, g.pX)(C.BVt.REGISTER);
        });
}
function eO(e) {
    J("handleLogout called.");
    let t = es();
    e?.isSwitchingAccount || (t && en(), ee()),
        o.Ay.PersistedStore.clearAll({
            omit: [
                "InstallationManagerStore",
                "AgeGateStore",
                "NativePermissionsStore",
                "MultiAccountStore",
                "DraftStore",
                "OverlayStoreV2",
                "StreamerModeStore",
                "LoginRequiredActionStore",
                "LayoutStore",
                "OverlaySettingsStore",
                "ApexExperimentStore",
            ],
            type: e?.isSwitchingAccount ? "user-data-only" : "all",
        }),
        N.A.clearAll(),
        h.IU(),
        y.A.clearUser(),
        u.w.remove(L),
        (w = null),
        (x = null),
        (V = e?.isSwitchingAccount ? C.aUe.LOGGING_IN : C.aUe.NONE),
        (j = ""),
        (W = null),
        (Y = !1),
        (Z = !1),
        (X = !1),
        ef();
}
function eD() {
    V = C.aUe.FORGOT_PASSWORD;
}
function eL() {
    V = C.aUe.NONE;
}
function ew(e) {
    let { user: t } = e;
    (w = t.id), void 0 !== t.authenticator_types && (H = t.authenticator_types), u.w.set(L, t.id);
}
function ex(e) {
    let { suspendedUserToken: t } = e;
    (Z = !1), (q = t), setImmediate(() => (0, g.pX)(C.BVt.ACCOUNT_STANDING));
}
function eM() {
    (q = null), (V = C.aUe.NONE), eO(), setImmediate(() => (0, g.pX)(C.BVt.DEFAULT_LOGGED_OUT));
}
class eP extends o.Ay.Store {
    static displayName = "AuthenticationStore";
    initialize() {
        (w = u.w.get(L)),
            (G = u.w.get(D) ?? null),
            null == s.getToken() && (ee(), (null == G || 0 === G.length) && (0, E.Tv)(null)),
            this.addChangeListener(() => (0, p.f)(w));
    }
    getLoginStatus() {
        return V;
    }
    getId() {
        return w;
    }
    getSessionId() {
        return x;
    }
    getAuthSessionIdHash() {
        return M;
    }
    getStaticAuthSessionId() {
        return P;
    }
    getToken() {
        return (0, S.gf)();
    }
    isAuthenticated() {
        return (0, S.wR)();
    }
    getFingerprint() {
        return k;
    }
    getInstallationForTracking() {
        return A.A.canUseInstallationId() ? G : null;
    }
    getAnalyticsToken() {
        return F ?? s.getAnalyticsToken();
    }
    getMFATicket() {
        return j;
    }
    getMFAMethods() {
        return Q;
    }
    getLoginInstanceId() {
        return i;
    }
    hasTOTPEnabled() {
        return H.includes(d.Wq.TOTP);
    }
    getCredentials() {
        if (null == r) throw Error("no credentials");
        return r;
    }
    allowLogoutRedirect() {
        return !B;
    }
    getSuspendedUserToken() {
        return q;
    }
    getIsPasswordlessActive() {
        return Z;
    }
    attemptedPasswordLogin() {
        return X;
    }
}
let ek = new eP(
    c.h,
    {
        CONNECTION_OPEN: ey,
        OVERLAY_INITIALIZE: ev,
        CONNECTION_CLOSED: eN,
        AUTH_SESSION_CHANGE: eb,
        LOGIN: ea,
        LOGIN_SUCCESS: eu,
        LOGIN_FAILURE: ec,
        LOGIN_MFA_STEP: ep,
        LOGIN_MFA: eh,
        LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: em,
        LOGIN_ACCOUNT_DISABLED: eE,
        LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: eg,
        LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: eA,
        LOGIN_RESET: eo,
        LOGIN_STATUS_RESET: el,
        LOGIN_SUSPENDED_USER: ex,
        LOGOUT: eO,
        FINGERPRINT: eI,
        INSTALLATION_ID: eT,
        REGISTER_SUCCESS: eS,
        FORGOT_PASSWORD_REQUEST: eD,
        FORGOT_PASSWORD_SENT: eL,
        UPDATE_TOKEN: eC,
        EXPERIMENTS_FETCH: et,
        CURRENT_USER_UPDATE: ew,
        AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eR,
        CLOSE_SUSPENDED_USER: eM,
        PASSWORDLESS_FAILURE: e_,
        PASSWORDLESS_START: ed,
    },
    c.A.Early,
);
