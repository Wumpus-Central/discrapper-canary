"use strict";
let r, i;
n.r(t), n.d(t, { default: () => eU }), n(321073), n(142703);
var a = n(247775),
    s = n(80703),
    o = n(311907),
    l = n(562465),
    u = n(506774),
    c = n(73153),
    d = n(155718),
    _ = n(421924),
    f = n(15552),
    h = n(248415),
    p = n(53943),
    g = n(626584),
    E = n(620233),
    A = n(976860),
    I = n(918518),
    T = n(252919),
    y = n(954571),
    S = n(612181),
    v = n(728458),
    C = n(115036),
    b = n(536802),
    N = n(652215),
    R = n(204925);
let O = new g.A("AuthenticationStore"),
    D = "fingerprint",
    L = "analytics_installation",
    w = "user_id_cache",
    x = null,
    P = null,
    M = null,
    k = null,
    U = null,
    G = null,
    F = null,
    V = null,
    B = N.aUe.NONE,
    j = !1,
    H = [],
    Y = "",
    W = !1,
    K = null,
    $ = !1,
    z = !1,
    q = null,
    X = null,
    Z = !1,
    Q = !1,
    J = [];
function ee(e) {
    let t = null != a.getToken(),
        n = null != u.w.get(N.ilC);
    O.verbose(e, { tokenManagerHasToken: t, storageHasToken: n });
}
function et() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (((U = u.w.get(D)), (F = u.w.get(L) ?? null), null != q)) return q;
    let t = null != U ? U : a.getToken();
    !(0, A.m)() || (!e && null != t) || C.A.isHandoffAvailable() || en({ withGuildExperiments: !0 });
}
function en(e) {
    let { withGuildExperiments: t } = e,
        n = {},
        r = y.default.getSuperPropertiesBase64();
    null != r && (n["X-Super-Properties"] = r),
        null != U && (n["X-Fingerprint"] = U),
        null != F && (n["X-Installation-ID"] = F),
        (q = l.Bo.get({
            url: N.Rsh.EXPERIMENTS,
            query: { with_guild_experiments: t },
            headers: n,
            context: { location: (0, A.SB)() },
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
                    (q = null),
                    (0, _.hK)();
            },
            () => {
                (q = null), c.h.dispatch({ type: "EXPERIMENTS_FETCH_FAILURE" });
            },
        ));
}
function er() {
    (G = U), (U = null), u.w.remove(D);
}
function ei(e, t) {
    ee("setAuthToken called."), (null == t || t !== x) && a.removeAnalyticsToken(), a.setToken(e, t);
}
function ea(e) {
    (V = e), a.setAnalyticsToken(e);
}
function es() {
    return ee("removeAuthToken called."), a.removeAnalyticsToken(), a.removeToken();
}
function eo(e) {
    let { isPasswordAttempt: t } = e;
    (B = N.aUe.LOGGING_IN), (Q = Q || !0 === t);
}
function el(e) {
    let { isMultiAccount: t } = e;
    (B = N.aUe.NONE), (Y = ""), (W = !1), (K = null), (i = null), (r = null), t || (eh(), es(), et(!1));
}
function eu() {
    B = N.aUe.NONE;
}
function ec(e) {
    let { token: t } = e;
    (B = N.aUe.NONE), ei(t), er(), (Y = ""), (W = !1), (K = null), (i = null), eh(), (Z = !1);
}
function ed(e) {
    let { error: t } = e;
    (Y = ""),
        (W = !1),
        (K = null),
        (i = null),
        eh(),
        (B = null != (0, f.p)(t).date_of_birth ? N.aUe.LOGIN_AGE_GATE : N.aUe.NONE);
}
function e_() {
    Z = !0;
}
function ef(e) {
    let { error: t } = e;
    (Y = ""),
        (W = !1),
        (K = null),
        (Z = !1),
        (i = null),
        (B = null != (0, f.W)(t).date_of_birth ? N.aUe.LOGIN_AGE_GATE : N.aUe.NONE);
}
function eh() {
    let e = [];
    null != K && e.push({ type: "webauthn", challenge: K }),
        $ && e.push({ type: "totp" }),
        z && e.push({ type: "backup" }),
        W && e.push({ type: "sms" }),
        (J = e);
}
function ep(e) {
    let { ticket: t, sms: n, webauthn: r, backup: a, totp: s, loginInstanceId: o } = e;
    null != t && ((Y = t), (W = n), (K = r ?? null), (z = a), ($ = s), (i = o), eh()), (B = N.aUe.MFA_STEP);
}
function em() {
    B = N.aUe.LOGGING_IN_MFA;
}
function eg(e) {
    (B = N.aUe.ACCOUNT_SCHEDULED_FOR_DELETION), (r = e.credentials);
}
function eE(e) {
    (B = N.aUe.ACCOUNT_DISABLED), (r = e.credentials);
}
function eA(e) {
    (B = N.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION), (r = e.credentials);
}
function eI(e) {
    (B = N.aUe.PHONE_IP_AUTHORIZATION), (r = e.credentials);
}
function eT(e) {
    let t = e.fingerprint;
    null == U
        ? null != t
            ? (y.default.track(N.HAw.USER_FINGERPRINT_CHANGED, {
                  old_fingerprint: null != G ? (0, s.d)(G) : null,
                  new_fingerprint: (0, s.d)(t),
              }),
              (U = t),
              (G = t),
              u.w.set(D, U))
            : et()
        : null != t &&
          U !== t &&
          y.default.track(N.HAw.EXTERNAL_FINGERPRINT_DROPPED, {
              fingerprint: (0, s.d)(U),
              dropped_fingerprint: (0, s.d)(t),
          });
}
function ey(e) {
    let { installation: t } = e;
    if (null != F && F.length > 0) return !1;
    (F = t), I.A.canUseInstallationId() && u.w.set(L, t);
}
function eS(e) {
    let { token: t } = e;
    ei(t), er();
}
function ev(e) {
    let {
        user: t,
        sessionId: n,
        authSessionIdHash: r,
        analyticsToken: i,
        auth: a,
        staticAuthSessionId: s,
        apexExperiments: o,
    } = e;
    ee("handleConnectionOpen called"),
        v.A.setUser(t.id, t.username, t.email ?? void 0, (0, T.A)(t)),
        (P = n),
        (M = r),
        (k = s),
        ea(i),
        (x = t.id),
        void 0 !== a && (H = a.authenticator_types),
        u.w.set(w, t.id),
        o?.installation != null && ey({ type: "INSTALLATION_ID", installation: o.installation });
}
function eC(e) {
    let { user: t, sessionId: n, analyticsToken: r, token: i } = e;
    v.A.setUser(t.id, t.username, t.email ?? void 0, (0, T.A)(t)),
        (P = n),
        (V = r),
        ei(i, t.id),
        null != r && ea(r),
        er(),
        (x = t.id),
        u.w.set(w, t.id);
}
function eb(e) {
    let { code: t } = e;
    ee(`handleConnectionClosed called with code ${t}.`);
    let r = n(192308).hasModalOpen;
    if (4004 === t) {
        if (j || r(R.jc) || r(R.Uy)) return void eO();
        y.default.track(N.HAw.APP_USER_DEAUTHENTICATED, { user_id: u.w.get(w) }),
            eD(),
            setImmediate(() => (0, A.pX)(N.BVt.DEFAULT_LOGGED_OUT));
    }
}
function eN(e) {
    let { token: t, userId: n } = e;
    ee("handleUpdateToken called"), ei(t, n), er();
}
function eR(e) {
    let { authSessionIdHash: t } = e;
    null != t && (M = t);
}
function eO() {
    (j = !0),
        eD(),
        c.h.wait(() => {
            (0, A.pX)(N.BVt.REGISTER);
        });
}
function eD(e) {
    ee("handleLogout called.");
    let t = es();
    e?.isSwitchingAccount || (t && er(), et()),
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
        b.A.clearAll(),
        p.IU(),
        v.A.clearUser(),
        u.w.remove(w),
        (x = null),
        (P = null),
        (B = e?.isSwitchingAccount ? N.aUe.LOGGING_IN : N.aUe.NONE),
        (Y = ""),
        (K = null),
        (W = !1),
        (Z = !1),
        (Q = !1),
        eh();
}
function eL() {
    B = N.aUe.FORGOT_PASSWORD;
}
function ew() {
    B = N.aUe.NONE;
}
function ex(e) {
    let { user: t } = e;
    (x = t.id), void 0 !== t.authenticator_types && (H = t.authenticator_types), u.w.set(w, t.id);
}
function eP(e) {
    let { suspendedUserToken: t } = e;
    (Z = !1), (X = t), setImmediate(() => (0, A.pX)(N.BVt.ACCOUNT_STANDING));
}
function eM() {
    (X = null), (B = N.aUe.NONE), eD(), setImmediate(() => (0, A.pX)(N.BVt.DEFAULT_LOGGED_OUT));
}
class ek extends o.Ay.Store {
    static displayName = "AuthenticationStore";
    initialize() {
        (x = u.w.get(w)),
            (F = u.w.get(L) ?? null),
            null == a.getToken() && (et(), (null == F || 0 === F.length) && (0, E.Tv)(null)),
            this.addChangeListener(() => (0, h.f)(x));
    }
    getLoginStatus() {
        return B;
    }
    getId() {
        return x;
    }
    getSessionId() {
        return P;
    }
    getAuthSessionIdHash() {
        return M;
    }
    getStaticAuthSessionId() {
        return k;
    }
    getToken() {
        return (0, S.gf)();
    }
    isAuthenticated() {
        return (0, S.wR)();
    }
    getFingerprint() {
        return U;
    }
    getInstallationForTracking() {
        return I.A.canUseInstallationId() ? F : null;
    }
    getAnalyticsToken() {
        return V ?? a.getAnalyticsToken();
    }
    getMFATicket() {
        return Y;
    }
    getMFAMethods() {
        return J;
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
        return !j;
    }
    getSuspendedUserToken() {
        return X;
    }
    getIsPasswordlessActive() {
        return Z;
    }
    attemptedPasswordLogin() {
        return Q;
    }
}
let eU = new ek(
    c.h,
    {
        CONNECTION_OPEN: ev,
        OVERLAY_INITIALIZE: eC,
        CONNECTION_CLOSED: eb,
        AUTH_SESSION_CHANGE: eR,
        LOGIN: eo,
        LOGIN_SUCCESS: ec,
        LOGIN_FAILURE: ed,
        LOGIN_MFA_STEP: ep,
        LOGIN_MFA: em,
        LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: eg,
        LOGIN_ACCOUNT_DISABLED: eE,
        LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: eA,
        LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: eI,
        LOGIN_RESET: el,
        LOGIN_STATUS_RESET: eu,
        LOGIN_SUSPENDED_USER: eP,
        LOGOUT: eD,
        FINGERPRINT: eT,
        INSTALLATION_ID: ey,
        REGISTER_SUCCESS: eS,
        FORGOT_PASSWORD_REQUEST: eL,
        FORGOT_PASSWORD_SENT: ew,
        UPDATE_TOKEN: eN,
        EXPERIMENTS_FETCH: en,
        CURRENT_USER_UPDATE: ex,
        AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eO,
        CLOSE_SUSPENDED_USER: eM,
        PASSWORDLESS_FAILURE: ef,
        PASSWORDLESS_START: e_,
    },
    c.A.Early,
);
