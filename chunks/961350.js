"use strict";
let r, i;
n.r(t), n.d(t, { default: () => ek }), n(321073), n(142703);
var a = n(247775),
    s = n(80703),
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
    g = n(620233),
    E = n(976860),
    A = n(918518),
    I = n(252919),
    T = n(954571),
    y = n(612181),
    S = n(728458),
    v = n(115036),
    C = n(536802),
    b = n(652215),
    N = n(204925);
let R = new m.A("AuthenticationStore"),
    O = "fingerprint",
    D = "analytics_installation",
    L = "user_id_cache",
    w = null,
    x = null,
    P = null,
    M = null,
    k = null,
    U = null,
    G = null,
    V = null,
    F = b.aUe.NONE,
    B = !1,
    j = [],
    H = "",
    Y = !1,
    W = null,
    K = !1,
    z = !1,
    $ = null,
    q = null,
    Z = !1,
    Q = !1,
    X = [];
function J(e) {
    let t = null != a.getToken(),
        n = null != u.w.get(b.ilC);
    R.verbose(e, { tokenManagerHasToken: t, storageHasToken: n });
}
function ee() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (((k = u.w.get(O)), (G = u.w.get(D) ?? null), null != $)) return $;
    let t = null != k ? k : a.getToken();
    !(0, E.m)() || (!e && null != t) || v.A.isHandoffAvailable() || et({ withGuildExperiments: !0 });
}
function et(e) {
    let { withGuildExperiments: t } = e,
        n = {},
        r = T.default.getSuperPropertiesBase64();
    null != r && (n["X-Super-Properties"] = r),
        null != k && (n["X-Fingerprint"] = k),
        null != G && (n["X-Installation-ID"] = G),
        ($ = l.Bo.get({
            url: b.Rsh.EXPERIMENTS,
            query: { with_guild_experiments: t },
            headers: n,
            context: { location: (0, E.SB)() },
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
    J("setAuthToken called."), (null == t || t !== w) && a.removeAnalyticsToken(), a.setToken(e, t);
}
function ei(e) {
    (V = e), a.setAnalyticsToken(e);
}
function ea() {
    return J("removeAuthToken called."), a.removeAnalyticsToken(), a.removeToken();
}
function es(e) {
    let { isPasswordAttempt: t } = e;
    (F = b.aUe.LOGGING_IN), (Q = Q || !0 === t);
}
function eo(e) {
    let { isMultiAccount: t } = e;
    (F = b.aUe.NONE), (H = ""), (Y = !1), (W = null), (i = null), (r = null), t || (ef(), ea(), ee(!1));
}
function el() {
    F = b.aUe.NONE;
}
function eu(e) {
    let { token: t } = e;
    (F = b.aUe.NONE), er(t), en(), (H = ""), (Y = !1), (W = null), (i = null), ef(), (Z = !1);
}
function ec(e) {
    let { error: t } = e;
    (H = ""),
        (Y = !1),
        (W = null),
        (i = null),
        ef(),
        (F = null != (0, f.p)(t).date_of_birth ? b.aUe.LOGIN_AGE_GATE : b.aUe.NONE);
}
function ed() {
    Z = !0;
}
function e_(e) {
    let { error: t } = e;
    (H = ""),
        (Y = !1),
        (W = null),
        (Z = !1),
        (i = null),
        (F = null != (0, f.W)(t).date_of_birth ? b.aUe.LOGIN_AGE_GATE : b.aUe.NONE);
}
function ef() {
    let e = [];
    null != W && e.push({ type: "webauthn", challenge: W }),
        K && e.push({ type: "totp" }),
        z && e.push({ type: "backup" }),
        Y && e.push({ type: "sms" }),
        (X = e);
}
function ep(e) {
    let { ticket: t, sms: n, webauthn: r, backup: a, totp: s, loginInstanceId: o } = e;
    null != t && ((H = t), (Y = n), (W = r ?? null), (z = a), (K = s), (i = o), ef()), (F = b.aUe.MFA_STEP);
}
function eh() {
    F = b.aUe.LOGGING_IN_MFA;
}
function em(e) {
    (F = b.aUe.ACCOUNT_SCHEDULED_FOR_DELETION), (r = e.credentials);
}
function eg(e) {
    (F = b.aUe.ACCOUNT_DISABLED), (r = e.credentials);
}
function eE(e) {
    (F = b.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION), (r = e.credentials);
}
function eA(e) {
    (F = b.aUe.PHONE_IP_AUTHORIZATION), (r = e.credentials);
}
function eI(e) {
    let t = e.fingerprint;
    null == k
        ? null != t
            ? (T.default.track(b.HAw.USER_FINGERPRINT_CHANGED, {
                  old_fingerprint: null != U ? (0, s.d)(U) : null,
                  new_fingerprint: (0, s.d)(t),
              }),
              (k = t),
              (U = t),
              u.w.set(O, k))
            : ee()
        : null != t &&
          k !== t &&
          T.default.track(b.HAw.EXTERNAL_FINGERPRINT_DROPPED, {
              fingerprint: (0, s.d)(k),
              dropped_fingerprint: (0, s.d)(t),
          });
}
function eT(e) {
    let { installation: t } = e;
    if (null != G && G.length > 0) return !1;
    (G = t), A.A.canUseInstallationId() && u.w.set(D, t);
}
function ey(e) {
    let { token: t } = e;
    er(t), en();
}
function eS(e) {
    let {
        user: t,
        sessionId: n,
        authSessionIdHash: r,
        analyticsToken: i,
        auth: a,
        staticAuthSessionId: s,
        apexExperiments: o,
    } = e;
    J("handleConnectionOpen called"),
        S.A.setUser(t.id, t.username, t.email ?? void 0, (0, I.A)(t)),
        (x = n),
        (P = r),
        (M = s),
        ei(i),
        (w = t.id),
        void 0 !== a && (j = a.authenticator_types),
        u.w.set(L, t.id),
        o?.installation != null && eT({ type: "INSTALLATION_ID", installation: o.installation });
}
function ev(e) {
    let { user: t, sessionId: n, analyticsToken: r, token: i } = e;
    S.A.setUser(t.id, t.username, t.email ?? void 0, (0, I.A)(t)),
        (x = n),
        (V = r),
        er(i, t.id),
        null != r && ei(r),
        en(),
        (w = t.id),
        u.w.set(L, t.id);
}
function eC(e) {
    let { code: t } = e;
    J(`handleConnectionClosed called with code ${t}.`);
    let r = n(192308).hasModalOpen;
    if (4004 === t) {
        if (B || r(N.jc) || r(N.Uy)) return void eR();
        T.default.track(b.HAw.APP_USER_DEAUTHENTICATED, { user_id: u.w.get(L) }),
            eO(),
            setImmediate(() => (0, E.pX)(b.BVt.DEFAULT_LOGGED_OUT));
    }
}
function eb(e) {
    let { token: t, userId: n } = e;
    J("handleUpdateToken called"), er(t, n), en();
}
function eN(e) {
    let { authSessionIdHash: t } = e;
    null != t && (P = t);
}
function eR() {
    (B = !0),
        eO(),
        c.h.wait(() => {
            (0, E.pX)(b.BVt.REGISTER);
        });
}
function eO(e) {
    J("handleLogout called.");
    let t = ea();
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
        C.A.clearAll(),
        h.IU(),
        S.A.clearUser(),
        u.w.remove(L),
        (w = null),
        (x = null),
        (F = e?.isSwitchingAccount ? b.aUe.LOGGING_IN : b.aUe.NONE),
        (H = ""),
        (W = null),
        (Y = !1),
        (Z = !1),
        (Q = !1),
        ef();
}
function eD() {
    F = b.aUe.FORGOT_PASSWORD;
}
function eL() {
    F = b.aUe.NONE;
}
function ew(e) {
    let { user: t } = e;
    (w = t.id), void 0 !== t.authenticator_types && (j = t.authenticator_types), u.w.set(L, t.id);
}
function ex(e) {
    let { suspendedUserToken: t } = e;
    (Z = !1), (q = t), setImmediate(() => (0, E.pX)(b.BVt.ACCOUNT_STANDING));
}
function eP() {
    (q = null), (F = b.aUe.NONE), eO(), setImmediate(() => (0, E.pX)(b.BVt.DEFAULT_LOGGED_OUT));
}
class eM extends o.Ay.Store {
    static displayName = "AuthenticationStore";
    initialize() {
        (w = u.w.get(L)),
            (G = u.w.get(D) ?? null),
            null == a.getToken() && (ee(), (null == G || 0 === G.length) && (0, g.Tv)(null)),
            this.addChangeListener(() => (0, p.f)(w));
    }
    getLoginStatus() {
        return F;
    }
    getId() {
        return w;
    }
    getSessionId() {
        return x;
    }
    getAuthSessionIdHash() {
        return P;
    }
    getStaticAuthSessionId() {
        return M;
    }
    getToken() {
        return (0, y.gf)();
    }
    isAuthenticated() {
        return (0, y.wR)();
    }
    getFingerprint() {
        return k;
    }
    getInstallationForTracking() {
        return A.A.canUseInstallationId() ? G : null;
    }
    getAnalyticsToken() {
        return V ?? a.getAnalyticsToken();
    }
    getMFATicket() {
        return H;
    }
    getMFAMethods() {
        return X;
    }
    getLoginInstanceId() {
        return i;
    }
    hasTOTPEnabled() {
        return j.includes(d.Wq.TOTP);
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
        return Q;
    }
}
let ek = new eM(
    c.h,
    {
        CONNECTION_OPEN: eS,
        OVERLAY_INITIALIZE: ev,
        CONNECTION_CLOSED: eC,
        AUTH_SESSION_CHANGE: eN,
        LOGIN: es,
        LOGIN_SUCCESS: eu,
        LOGIN_FAILURE: ec,
        LOGIN_MFA_STEP: ep,
        LOGIN_MFA: eh,
        LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: em,
        LOGIN_ACCOUNT_DISABLED: eg,
        LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: eE,
        LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: eA,
        LOGIN_RESET: eo,
        LOGIN_STATUS_RESET: el,
        LOGIN_SUSPENDED_USER: ex,
        LOGOUT: eO,
        FINGERPRINT: eI,
        INSTALLATION_ID: eT,
        REGISTER_SUCCESS: ey,
        FORGOT_PASSWORD_REQUEST: eD,
        FORGOT_PASSWORD_SENT: eL,
        UPDATE_TOKEN: eb,
        EXPERIMENTS_FETCH: et,
        CURRENT_USER_UPDATE: ew,
        AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eR,
        CLOSE_SUSPENDED_USER: eP,
        PASSWORDLESS_FAILURE: e_,
        PASSWORDLESS_START: ed,
    },
    c.A.Early,
);
