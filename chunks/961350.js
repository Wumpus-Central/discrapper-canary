"use strict";
let r, i;
n.r(t), n.d(t, { default: () => e_ }), n(321073), n(142703);
var s = n(247775),
    a = n(80703),
    o = n(311907),
    l = n(562465),
    u = n(506774),
    d = n(73153),
    c = n(181658),
    _ = n(155718),
    f = n(421924),
    E = n(15552),
    h = n(248415),
    p = n(53943),
    m = n(626584),
    g = n(620233),
    A = n(976860),
    I = n(918518),
    T = n(252919),
    S = n(954571),
    y = n(612181),
    N = n(728458),
    O = n(115036),
    R = n(536802),
    v = n(652215),
    C = n(204925);
let b = new m.A("AuthenticationStore"),
    D = "fingerprint",
    L = "analytics_installation",
    w = "user_id_cache",
    M = null,
    P = null,
    U = null,
    k = null,
    x = null,
    G = null,
    V = null,
    F = null,
    B = v.aUe.NONE,
    H = !1,
    Y = [],
    W = "",
    j = !1,
    K = null,
    $ = !1,
    z = !1,
    q = null,
    X = null,
    Q = !1,
    J = !1,
    Z = [];
function ee(e) {
    let t = null != s.getToken(),
        n = null != u.w.get(v.ilC);
    b.verbose(e, { tokenManagerHasToken: t, storageHasToken: n });
}
function et() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (((x = u.w.get(D)), (V = u.w.get(L) ?? null), null != q)) return q;
    let t = null != x ? x : s.getToken();
    !(0, A.m)() || (!e && null != t) || O.A.isHandoffAvailable() || en({ withGuildExperiments: !0 });
}
function en(e) {
    let { withGuildExperiments: t } = e,
        n = {},
        r = S.default.getSuperPropertiesBase64();
    null != r && (n["X-Super-Properties"] = r),
        null != x && (n["X-Fingerprint"] = x),
        null != V && (n["X-Installation-ID"] = V),
        (q = l.Bo.get({
            url: v.Rsh.EXPERIMENTS,
            query: { with_guild_experiments: t },
            headers: n,
            context: { location: (0, A.SB)() },
            retries: 3,
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(
            (e) => {
                let { fingerprint: t, assignments: n, guild_experiments: r } = e.body;
                t && d.h.dispatch({ type: "FINGERPRINT", fingerprint: t }),
                    d.h.dispatch({
                        type: "EXPERIMENTS_FETCH_SUCCESS",
                        fingerprint: t,
                        experiments: n,
                        guildExperiments: r,
                    }),
                    (q = null),
                    (0, f.hK)();
            },
            () => {
                (q = null), d.h.dispatch({ type: "EXPERIMENTS_FETCH_FAILURE" });
            },
        ));
}
function er() {
    (G = x), (x = null), u.w.remove(D);
}
function ei(e, t) {
    ee("setAuthToken called."), (null == t || t !== M) && s.removeAnalyticsToken(), s.setToken(e, t);
}
function es(e) {
    (F = e), s.setAnalyticsToken(e);
}
function ea() {
    return ee("removeAuthToken called."), s.removeAnalyticsToken(), s.removeToken();
}
function eo() {
    let e = [];
    null != K && e.push({ type: "webauthn", challenge: K }),
        $ && e.push({ type: "totp" }),
        z && e.push({ type: "backup" }),
        j && e.push({ type: "sms" }),
        (Z = e);
}
function el(e) {
    let { installation: t } = e;
    if (null != V && V.length > 0) return !1;
    (V = t), I.A.canUseInstallationId() && u.w.set(L, t);
}
function eu() {
    (H = !0),
        ed(),
        d.h.wait(() => {
            (0, A.pX)(v.BVt.REGISTER);
        });
}
function ed(e) {
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
        R.A.clearAll(),
        p.IU(),
        N.A.clearUser(),
        u.w.remove(w),
        (M = null),
        (P = null),
        (B = e?.isSwitchingAccount ? v.aUe.LOGGING_IN : v.aUe.NONE),
        (W = ""),
        (K = null),
        (j = !1),
        (Q = !1),
        (J = !1),
        eo();
}
class ec extends o.Ay.Store {
    static displayName = "AuthenticationStore";
    initialize() {
        (M = u.w.get(w)),
            (V = u.w.get(L) ?? null),
            null == s.getToken() && (et(), (null == V || 0 === V.length) && (0, g.Tv)(null)),
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
        return U;
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
        return x;
    }
    getInstallationForTracking() {
        return I.A.canUseInstallationId() ? V : null;
    }
    getAnalyticsToken() {
        return F ?? s.getAnalyticsToken();
    }
    getMFATicket() {
        return W;
    }
    getMFAMethods() {
        return Z;
    }
    getLoginInstanceId() {
        return i;
    }
    hasTOTPEnabled() {
        return Y.includes(_.Wq.TOTP);
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
        return J;
    }
}
let e_ = new ec(
    d.h,
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
                (U = r),
                (k = a),
                es(i),
                (M = t.id),
                void 0 !== s && (Y = s.authenticator_types),
                u.w.set(w, t.id),
                o?.installation != null && el({ type: "INSTALLATION_ID", installation: o.installation });
        },
        OVERLAY_INITIALIZE: function (e) {
            let { user: t, sessionId: n, analyticsToken: r, token: i } = e;
            N.A.setUser(t.id, t.username, t.email ?? void 0, (0, T.A)(t)),
                (P = n),
                (F = r),
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
                if (H || r(C.jc) || r(C.Uy)) return void eu();
                S.default.track(v.HAw.APP_USER_DEAUTHENTICATED, { user_id: u.w.get(w) }),
                    ed(),
                    setImmediate(() => (0, A.pX)(v.BVt.DEFAULT_LOGGED_OUT));
            }
        },
        AUTH_SESSION_CHANGE: function (e) {
            let { authSessionIdHash: t } = e;
            null != t && (U = t);
        },
        LOGIN: function (e) {
            let { isPasswordAttempt: t } = e;
            (B = v.aUe.LOGGING_IN), (J = J || !0 === t);
        },
        LOGIN_SUCCESS: function (e) {
            let { token: t } = e;
            (B = v.aUe.NONE), ei(t), er(), (W = ""), (j = !1), (K = null), (i = null), eo(), (Q = !1);
        },
        LOGIN_FAILURE: function (e) {
            let { error: t } = e;
            (W = ""),
                (j = !1),
                (K = null),
                (i = null),
                eo(),
                (B = null != (0, E.p)(t).date_of_birth ? v.aUe.LOGIN_AGE_GATE : v.aUe.NONE);
        },
        LOGIN_MFA_STEP: function (e) {
            let { ticket: t, sms: n, webauthn: r, backup: s, totp: a, loginInstanceId: o } = e;
            null != t && ((W = t), (j = n), (K = r ?? null), (z = s), ($ = a), (i = o), eo()), (B = v.aUe.MFA_STEP);
        },
        LOGIN_MFA: function () {
            B = v.aUe.LOGGING_IN_MFA;
        },
        LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: function (e) {
            (B = v.aUe.ACCOUNT_SCHEDULED_FOR_DELETION), (r = e.credentials);
        },
        LOGIN_ACCOUNT_DISABLED: function (e) {
            (B = v.aUe.ACCOUNT_DISABLED), (r = e.credentials);
        },
        LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: function (e) {
            (B = v.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION), (r = e.credentials);
        },
        LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: function (e) {
            (B = v.aUe.PHONE_IP_AUTHORIZATION), (r = e.credentials);
        },
        LOGIN_RESET: function (e) {
            let { isMultiAccount: t } = e;
            (B = v.aUe.NONE), (W = ""), (j = !1), (K = null), (i = null), (r = null), t || (eo(), ea(), et(!1));
        },
        LOGIN_STATUS_RESET: function () {
            B = v.aUe.NONE;
        },
        LOGIN_SUSPENDED_USER: function (e) {
            let { suspendedUserToken: t } = e;
            (Q = !1), (X = t), setImmediate(() => (0, A.pX)(v.BVt.ACCOUNT_STANDING));
        },
        LOGOUT: ed,
        FINGERPRINT: function (e) {
            let t = e.fingerprint;
            null == x
                ? null != t
                    ? (S.default.track(v.HAw.USER_FINGERPRINT_CHANGED, {
                          old_fingerprint: null != G ? (0, a.d)(G) : null,
                          new_fingerprint: (0, a.d)(t),
                      }),
                      (x = t),
                      (G = t),
                      u.w.set(D, x))
                    : et()
                : null != t &&
                  x !== t &&
                  S.default.track(v.HAw.EXTERNAL_FINGERPRINT_DROPPED, {
                      fingerprint: (0, a.d)(x),
                      dropped_fingerprint: (0, a.d)(t),
                  });
        },
        INSTALLATION_ID: el,
        REGISTER_SUCCESS: function (e) {
            let { token: t } = e;
            ei(t), er();
        },
        FORGOT_PASSWORD_REQUEST: function () {
            B = v.aUe.FORGOT_PASSWORD;
        },
        FORGOT_PASSWORD_SENT: function () {
            B = v.aUe.NONE;
        },
        UPDATE_TOKEN: function (e) {
            let { token: t, userId: n } = e;
            ee("handleUpdateToken called"), ei(t, n), er();
        },
        EXPERIMENTS_FETCH: en,
        CURRENT_USER_UPDATE: function (e) {
            let { user: t } = e;
            (M = t.id), void 0 !== t.authenticator_types && (Y = t.authenticator_types), u.w.set(w, t.id);
        },
        AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eu,
        CLOSE_SUSPENDED_USER: function () {
            (X = null), (B = v.aUe.NONE), ed(), setImmediate(() => (0, A.pX)(v.BVt.DEFAULT_LOGGED_OUT));
        },
        PASSWORDLESS_FAILURE: function (e) {
            let { error: t } = e;
            (W = ""),
                (j = !1),
                (K = null),
                (Q = !1),
                (i = null),
                (B = t instanceof c.A && null != (0, E.W)(t).date_of_birth ? v.aUe.LOGIN_AGE_GATE : v.aUe.NONE);
        },
        PASSWORDLESS_START: function () {
            Q = !0;
        },
    },
    d.A.Early,
);
