"use strict";
let r, i;
n.r(t), n.d(t, { default: () => e_ }), n(321073), n(142703);
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
    E = n(53943),
    m = n(626584),
    g = n(620233),
    A = n(976860),
    I = n(918518),
    T = n(252919),
    S = n(954571),
    y = n(612181),
    N = n(728458),
    v = n(115036),
    C = n(536802),
    O = n(652215),
    R = n(204925);
let b = new m.A("AuthenticationStore"),
    D = "fingerprint",
    L = "analytics_installation",
    w = "user_id_cache",
    M = null,
    P = null,
    x = null,
    k = null,
    U = null,
    G = null,
    F = null,
    V = null,
    B = O.aUe.NONE,
    H = !1,
    j = [],
    Y = "",
    W = !1,
    K = null,
    $ = !1,
    z = !1,
    q = null,
    X = null,
    Q = !1,
    Z = !1,
    J = [];
function ee(e) {
    let t = null != s.getToken(),
        n = null != u.w.get(O.ilC);
    b.verbose(e, { tokenManagerHasToken: t, storageHasToken: n });
}
function et() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (((U = u.w.get(D)), (F = u.w.get(L) ?? null), null != q)) return q;
    let t = null != U ? U : s.getToken();
    !(0, A.m)() || (!e && null != t) || v.A.isHandoffAvailable() || en({ withGuildExperiments: !0 });
}
function en(e) {
    let { withGuildExperiments: t } = e,
        n = {},
        r = S.default.getSuperPropertiesBase64();
    null != r && (n["X-Super-Properties"] = r),
        null != U && (n["X-Fingerprint"] = U),
        null != F && (n["X-Installation-ID"] = F),
        (q = l.Bo.get({
            url: O.Rsh.EXPERIMENTS,
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
    ee("setAuthToken called."), (null == t || t !== M) && s.removeAnalyticsToken(), s.setToken(e, t);
}
function es(e) {
    (V = e), s.setAnalyticsToken(e);
}
function ea() {
    return ee("removeAuthToken called."), s.removeAnalyticsToken(), s.removeToken();
}
function eo() {
    let e = [];
    null != K && e.push({ type: "webauthn", challenge: K }),
        $ && e.push({ type: "totp" }),
        z && e.push({ type: "backup" }),
        W && e.push({ type: "sms" }),
        (J = e);
}
function el(e) {
    let { installation: t } = e;
    if (null != F && F.length > 0) return !1;
    (F = t), I.A.canUseInstallationId() && u.w.set(L, t);
}
function eu() {
    (H = !0),
        ec(),
        c.h.wait(() => {
            (0, A.pX)(O.BVt.REGISTER);
        });
}
function ec(e) {
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
        E.IU(),
        N.A.clearUser(),
        u.w.remove(w),
        (M = null),
        (P = null),
        (B = e?.isSwitchingAccount ? O.aUe.LOGGING_IN : O.aUe.NONE),
        (Y = ""),
        (K = null),
        (W = !1),
        (Q = !1),
        (Z = !1),
        eo();
}
class ed extends o.Ay.Store {
    static displayName = "AuthenticationStore";
    initialize() {
        (M = u.w.get(w)),
            (F = u.w.get(L) ?? null),
            null == s.getToken() && (et(), (null == F || 0 === F.length) && (0, g.Tv)(null)),
            this.addChangeListener(() => (0, h.f)(M));
    }
    getLoginStatus() {
        return B;
    }
    getId() {
        return M;
    }
    getSessionId() {
        return P;
    }
    getAuthSessionIdHash() {
        return x;
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
        return X;
    }
    getIsPasswordlessActive() {
        return Q;
    }
    attemptedPasswordLogin() {
        return Z;
    }
}
let e_ = new ed(
    c.h,
    {
        CONNECTION_OPEN: function (e) {
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
                N.A.setUser(t.id, t.username, t.email ?? void 0, (0, T.A)(t)),
                (P = n),
                (x = r),
                (k = a),
                es(i),
                (M = t.id),
                void 0 !== s && (j = s.authenticator_types),
                u.w.set(w, t.id),
                o?.installation != null && el({ type: "INSTALLATION_ID", installation: o.installation });
        },
        OVERLAY_INITIALIZE: function (e) {
            let { user: t, sessionId: n, analyticsToken: r, token: i } = e;
            N.A.setUser(t.id, t.username, t.email ?? void 0, (0, T.A)(t)),
                (P = n),
                (V = r),
                ei(i, t.id),
                null != r && es(r),
                er(),
                (M = t.id),
                u.w.set(w, t.id);
        },
        CONNECTION_CLOSED: function (e) {
            let { code: t } = e;
            ee(`handleConnectionClosed called with code ${t}.`);
            let r = n(192308).hasModalOpen;
            if (4004 === t) {
                if (H || r(R.jc) || r(R.Uy)) return void eu();
                S.default.track(O.HAw.APP_USER_DEAUTHENTICATED, { user_id: u.w.get(w) }),
                    ec(),
                    setImmediate(() => (0, A.pX)(O.BVt.DEFAULT_LOGGED_OUT));
            }
        },
        AUTH_SESSION_CHANGE: function (e) {
            let { authSessionIdHash: t } = e;
            null != t && (x = t);
        },
        LOGIN: function (e) {
            let { isPasswordAttempt: t } = e;
            (B = O.aUe.LOGGING_IN), (Z = Z || !0 === t);
        },
        LOGIN_SUCCESS: function (e) {
            let { token: t } = e;
            (B = O.aUe.NONE), ei(t), er(), (Y = ""), (W = !1), (K = null), (i = null), eo(), (Q = !1);
        },
        LOGIN_FAILURE: function (e) {
            let { error: t } = e;
            (Y = ""),
                (W = !1),
                (K = null),
                (i = null),
                eo(),
                (B = null != (0, p.p)(t).date_of_birth ? O.aUe.LOGIN_AGE_GATE : O.aUe.NONE);
        },
        LOGIN_MFA_STEP: function (e) {
            let { ticket: t, sms: n, webauthn: r, backup: s, totp: a, loginInstanceId: o } = e;
            null != t && ((Y = t), (W = n), (K = r ?? null), (z = s), ($ = a), (i = o), eo()), (B = O.aUe.MFA_STEP);
        },
        LOGIN_MFA: function () {
            B = O.aUe.LOGGING_IN_MFA;
        },
        LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: function (e) {
            (B = O.aUe.ACCOUNT_SCHEDULED_FOR_DELETION), (r = e.credentials);
        },
        LOGIN_ACCOUNT_DISABLED: function (e) {
            (B = O.aUe.ACCOUNT_DISABLED), (r = e.credentials);
        },
        LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: function (e) {
            (B = O.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION), (r = e.credentials);
        },
        LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: function (e) {
            (B = O.aUe.PHONE_IP_AUTHORIZATION), (r = e.credentials);
        },
        LOGIN_RESET: function (e) {
            let { isMultiAccount: t } = e;
            (B = O.aUe.NONE), (Y = ""), (W = !1), (K = null), (i = null), (r = null), t || (eo(), ea(), et(!1));
        },
        LOGIN_STATUS_RESET: function () {
            B = O.aUe.NONE;
        },
        LOGIN_SUSPENDED_USER: function (e) {
            let { suspendedUserToken: t } = e;
            (Q = !1), (X = t), setImmediate(() => (0, A.pX)(O.BVt.ACCOUNT_STANDING));
        },
        LOGOUT: ec,
        FINGERPRINT: function (e) {
            let t = e.fingerprint;
            null == U
                ? null != t
                    ? (S.default.track(O.HAw.USER_FINGERPRINT_CHANGED, {
                          old_fingerprint: null != G ? (0, a.d)(G) : null,
                          new_fingerprint: (0, a.d)(t),
                      }),
                      (U = t),
                      (G = t),
                      u.w.set(D, U))
                    : et()
                : null != t &&
                  U !== t &&
                  S.default.track(O.HAw.EXTERNAL_FINGERPRINT_DROPPED, {
                      fingerprint: (0, a.d)(U),
                      dropped_fingerprint: (0, a.d)(t),
                  });
        },
        INSTALLATION_ID: el,
        REGISTER_SUCCESS: function (e) {
            let { token: t } = e;
            ei(t), er();
        },
        FORGOT_PASSWORD_REQUEST: function () {
            B = O.aUe.FORGOT_PASSWORD;
        },
        FORGOT_PASSWORD_SENT: function () {
            B = O.aUe.NONE;
        },
        UPDATE_TOKEN: function (e) {
            let { token: t, userId: n } = e;
            ee("handleUpdateToken called"), ei(t, n), er();
        },
        EXPERIMENTS_FETCH: en,
        CURRENT_USER_UPDATE: function (e) {
            let { user: t } = e;
            (M = t.id), void 0 !== t.authenticator_types && (j = t.authenticator_types), u.w.set(w, t.id);
        },
        AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eu,
        CLOSE_SUSPENDED_USER: function () {
            (X = null), (B = O.aUe.NONE), ec(), setImmediate(() => (0, A.pX)(O.BVt.DEFAULT_LOGGED_OUT));
        },
        PASSWORDLESS_FAILURE: function (e) {
            let { error: t } = e;
            (Y = ""),
                (W = !1),
                (K = null),
                (Q = !1),
                (i = null),
                (B = t instanceof d.A && null != (0, p.W)(t).date_of_birth ? O.aUe.LOGIN_AGE_GATE : O.aUe.NONE);
        },
        PASSWORDLESS_START: function () {
            Q = !0;
        },
    },
    c.A.Early,
);
