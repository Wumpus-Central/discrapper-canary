"use strict";
let r, i;
n.r(t), n.d(t, { default: () => eU }), n(321073), n(142703);
var s = n(247775),
    a = n(80703),
    o = n(311907),
    l = n(562465),
    u = n(506774),
    c = n(73153),
    d = n(181658),
    _ = n(155718),
    f = n(421924),
    p = n(15552),
    h = n(248415),
    m = n(53943),
    E = n(626584),
    g = n(620233),
    A = n(976860),
    I = n(918518),
    T = n(252919),
    S = n(954571),
    y = n(612181),
    v = n(728458),
    N = n(115036),
    C = n(536802),
    b = n(652215),
    R = n(204925);
let O = new E.A("AuthenticationStore"),
    D = "fingerprint",
    L = "analytics_installation",
    w = "user_id_cache",
    x = null,
    M = null,
    P = null,
    k = null,
    U = null,
    G = null,
    F = null,
    V = null,
    B = b.aUe.NONE,
    H = !1,
    j = [],
    Y = "",
    W = !1,
    K = null,
    z = !1,
    $ = !1,
    q = null,
    Z = null,
    X = !1,
    Q = !1,
    J = [];
function ee(e) {
    let t = null != s.getToken(),
        n = null != u.w.get(b.ilC);
    O.verbose(e, { tokenManagerHasToken: t, storageHasToken: n });
}
function et() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (((U = u.w.get(D)), (F = u.w.get(L) ?? null), null != q)) return q;
    let t = null != U ? U : s.getToken();
    !(0, A.m)() || (!e && null != t) || N.A.isHandoffAvailable() || en({ withGuildExperiments: !0 });
}
function en(e) {
    let { withGuildExperiments: t } = e,
        n = {},
        r = S.default.getSuperPropertiesBase64();
    null != r && (n["X-Super-Properties"] = r),
        null != U && (n["X-Fingerprint"] = U),
        null != F && (n["X-Installation-ID"] = F),
        (q = l.Bo.get({
            url: b.Rsh.EXPERIMENTS,
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
                    (0, f.hK)();
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
    ee("setAuthToken called."), (null == t || t !== x) && s.removeAnalyticsToken(), s.setToken(e, t);
}
function es(e) {
    (V = e), s.setAnalyticsToken(e);
}
function ea() {
    return ee("removeAuthToken called."), s.removeAnalyticsToken(), s.removeToken();
}
function eo(e) {
    let { isPasswordAttempt: t } = e;
    (B = b.aUe.LOGGING_IN), (Q = Q || !0 === t);
}
function el(e) {
    let { isMultiAccount: t } = e;
    (B = b.aUe.NONE), (Y = ""), (W = !1), (K = null), (i = null), (r = null), t || (ep(), ea(), et(!1));
}
function eu() {
    B = b.aUe.NONE;
}
function ec(e) {
    let { token: t } = e;
    (B = b.aUe.NONE), ei(t), er(), (Y = ""), (W = !1), (K = null), (i = null), ep(), (X = !1);
}
function ed(e) {
    let { error: t } = e;
    (Y = ""),
        (W = !1),
        (K = null),
        (i = null),
        ep(),
        (B = null != (0, p.p)(t).date_of_birth ? b.aUe.LOGIN_AGE_GATE : b.aUe.NONE);
}
function e_() {
    X = !0;
}
function ef(e) {
    let { error: t } = e;
    (Y = ""),
        (W = !1),
        (K = null),
        (X = !1),
        (i = null),
        (B = t instanceof d.A && null != (0, p.W)(t).date_of_birth ? b.aUe.LOGIN_AGE_GATE : b.aUe.NONE);
}
function ep() {
    let e = [];
    null != K && e.push({ type: "webauthn", challenge: K }),
        z && e.push({ type: "totp" }),
        $ && e.push({ type: "backup" }),
        W && e.push({ type: "sms" }),
        (J = e);
}
function eh(e) {
    let { ticket: t, sms: n, webauthn: r, backup: s, totp: a, loginInstanceId: o } = e;
    null != t && ((Y = t), (W = n), (K = r ?? null), ($ = s), (z = a), (i = o), ep()), (B = b.aUe.MFA_STEP);
}
function em() {
    B = b.aUe.LOGGING_IN_MFA;
}
function eE(e) {
    (B = b.aUe.ACCOUNT_SCHEDULED_FOR_DELETION), (r = e.credentials);
}
function eg(e) {
    (B = b.aUe.ACCOUNT_DISABLED), (r = e.credentials);
}
function eA(e) {
    (B = b.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION), (r = e.credentials);
}
function eI(e) {
    (B = b.aUe.PHONE_IP_AUTHORIZATION), (r = e.credentials);
}
function eT(e) {
    let t = e.fingerprint;
    null == U
        ? null != t
            ? (S.default.track(b.HAw.USER_FINGERPRINT_CHANGED, {
                  old_fingerprint: null != G ? (0, a.d)(G) : null,
                  new_fingerprint: (0, a.d)(t),
              }),
              (U = t),
              (G = t),
              u.w.set(D, U))
            : et()
        : null != t &&
          U !== t &&
          S.default.track(b.HAw.EXTERNAL_FINGERPRINT_DROPPED, {
              fingerprint: (0, a.d)(U),
              dropped_fingerprint: (0, a.d)(t),
          });
}
function eS(e) {
    let { installation: t } = e;
    if (null != F && F.length > 0) return !1;
    (F = t), I.A.canUseInstallationId() && u.w.set(L, t);
}
function ey(e) {
    let { token: t } = e;
    ei(t), er();
}
function ev(e) {
    let {
        user: t,
        sessionId: n,
        authSessionIdHash: r,
        analyticsToken: i,
        auth: s,
        staticAuthSessionId: a,
        apexExperiments: o,
    } = e;
    ee("handleConnectionOpen called"),
        v.A.setUser(t.id, t.username, t.email ?? void 0, (0, T.A)(t)),
        (M = n),
        (P = r),
        (k = a),
        es(i),
        (x = t.id),
        void 0 !== s && (j = s.authenticator_types),
        u.w.set(w, t.id),
        o?.installation != null && eS({ type: "INSTALLATION_ID", installation: o.installation });
}
function eN(e) {
    let { user: t, sessionId: n, analyticsToken: r, token: i } = e;
    v.A.setUser(t.id, t.username, t.email ?? void 0, (0, T.A)(t)),
        (M = n),
        (V = r),
        ei(i, t.id),
        null != r && es(r),
        er(),
        (x = t.id),
        u.w.set(w, t.id);
}
function eC(e) {
    let { code: t } = e;
    ee(`handleConnectionClosed called with code ${t}.`);
    let r = n(192308).hasModalOpen;
    if (4004 === t) {
        if (H || r(R.jc) || r(R.Uy)) return void eO();
        S.default.track(b.HAw.APP_USER_DEAUTHENTICATED, { user_id: u.w.get(w) }),
            eD(),
            setImmediate(() => (0, A.pX)(b.BVt.DEFAULT_LOGGED_OUT));
    }
}
function eb(e) {
    let { token: t, userId: n } = e;
    ee("handleUpdateToken called"), ei(t, n), er();
}
function eR(e) {
    let { authSessionIdHash: t } = e;
    null != t && (P = t);
}
function eO() {
    (H = !0),
        eD(),
        c.h.wait(() => {
            (0, A.pX)(b.BVt.REGISTER);
        });
}
function eD(e) {
    ee("handleLogout called.");
    let t = ea();
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
        C.A.clearAll(),
        m.IU(),
        v.A.clearUser(),
        u.w.remove(w),
        (x = null),
        (M = null),
        (B = e?.isSwitchingAccount ? b.aUe.LOGGING_IN : b.aUe.NONE),
        (Y = ""),
        (K = null),
        (W = !1),
        (X = !1),
        (Q = !1),
        ep();
}
function eL() {
    B = b.aUe.FORGOT_PASSWORD;
}
function ew() {
    B = b.aUe.NONE;
}
function ex(e) {
    let { user: t } = e;
    (x = t.id), void 0 !== t.authenticator_types && (j = t.authenticator_types), u.w.set(w, t.id);
}
function eM(e) {
    let { suspendedUserToken: t } = e;
    (X = !1), (Z = t), setImmediate(() => (0, A.pX)(b.BVt.ACCOUNT_STANDING));
}
function eP() {
    (Z = null), (B = b.aUe.NONE), eD(), setImmediate(() => (0, A.pX)(b.BVt.DEFAULT_LOGGED_OUT));
}
class ek extends o.Ay.Store {
    static displayName = "AuthenticationStore";
    initialize() {
        (x = u.w.get(w)),
            (F = u.w.get(L) ?? null),
            null == s.getToken() && (et(), (null == F || 0 === F.length) && (0, g.Tv)(null)),
            this.addChangeListener(() => (0, h.f)(x));
    }
    getLoginStatus() {
        return B;
    }
    getId() {
        return x;
    }
    getSessionId() {
        return M;
    }
    getAuthSessionIdHash() {
        return P;
    }
    getStaticAuthSessionId() {
        return k;
    }
    getToken() {
        return (0, y.gf)();
    }
    isAuthenticated() {
        return (0, y.wR)();
    }
    getFingerprint() {
        return U;
    }
    getInstallationForTracking() {
        return I.A.canUseInstallationId() ? F : null;
    }
    getAnalyticsToken() {
        return V ?? s.getAnalyticsToken();
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
        return j.includes(_.Wq.TOTP);
    }
    getCredentials() {
        if (null == r) throw Error("no credentials");
        return r;
    }
    allowLogoutRedirect() {
        return !H;
    }
    getSuspendedUserToken() {
        return Z;
    }
    getIsPasswordlessActive() {
        return X;
    }
    attemptedPasswordLogin() {
        return Q;
    }
}
let eU = new ek(
    c.h,
    {
        CONNECTION_OPEN: ev,
        OVERLAY_INITIALIZE: eN,
        CONNECTION_CLOSED: eC,
        AUTH_SESSION_CHANGE: eR,
        LOGIN: eo,
        LOGIN_SUCCESS: ec,
        LOGIN_FAILURE: ed,
        LOGIN_MFA_STEP: eh,
        LOGIN_MFA: em,
        LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: eE,
        LOGIN_ACCOUNT_DISABLED: eg,
        LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: eA,
        LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: eI,
        LOGIN_RESET: el,
        LOGIN_STATUS_RESET: eu,
        LOGIN_SUSPENDED_USER: eM,
        LOGOUT: eD,
        FINGERPRINT: eT,
        INSTALLATION_ID: eS,
        REGISTER_SUCCESS: ey,
        FORGOT_PASSWORD_REQUEST: eL,
        FORGOT_PASSWORD_SENT: ew,
        UPDATE_TOKEN: eb,
        EXPERIMENTS_FETCH: en,
        CURRENT_USER_UPDATE: ex,
        AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eO,
        CLOSE_SUSPENDED_USER: eP,
        PASSWORDLESS_FAILURE: ef,
        PASSWORDLESS_START: e_,
    },
    c.A.Early,
);
