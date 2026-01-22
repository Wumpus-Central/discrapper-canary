n.d(t, {
    A: () => g,
}),
    n(896048);
var r = n(451988),
    i = n(73153),
    l = n(272355),
    a = n(961350),
    s = n(954571),
    o = n(927813),
    c = n(728458),
    u = n(881615),
    d = n(789999),
    p = n(652215);

function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let h = a.default.getToken();
class A extends l.A {
    _initialize() {
        (this.focusedOrForegrounded = (0, d.R)()),
            a.default.addChangeListener(this.handleAuthenticationChange),
            i.h.subscribe("WINDOW_FOCUS", this.handleWindowFocus),
            i.h.subscribe("APP_STATE_UPDATE", this.handleAppStateUpdate),
            i.h.subscribe("QUESTS_ENROLL_SUCCESS", this.handleEnrollmentSuccess),
            i.h.subscribe("LOGIN_SUCCESS", this.handleLogin),
            i.h.subscribe("LOGOUT", this.handleLogout),
            this.scheduleHeartbeatTracking();
    }
    _terminate() {
        this.stopAnalyticHeartbeat(),
            a.default.removeChangeListener(this.handleAuthenticationChange),
            i.h.unsubscribe("WINDOW_FOCUS", this.handleWindowFocus),
            i.h.unsubscribe("APP_STATE_UPDATE", this.handleAppStateUpdate),
            i.h.unsubscribe("QUESTS_ENROLL_SUCCESS", this.handleEnrollmentSuccess),
            i.h.unsubscribe("LOGIN_SUCCESS", this.handleLogin),
            i.h.unsubscribe("LOGOUT", this.handleLogout);
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            f(this, "focusedOrForegrounded", (0, d.R)()),
            f(this, "heartbeatInterval", new r.IX()),
            f(this, "schedulerStarted", !1),
            f(this, "lastHeartbeatTimestamp", 0),
            f(this, "maybeStartHeartbeat", () => {
                this.heartbeatInterval.isStarted() ||
                    (this.trackHeartbeat(), this.heartbeatInterval.start(5 * o.A.Millis.MINUTE, this.trackHeartbeat));
            }),
            f(this, "startAnalyticHeartbeat", () => {
                this.schedulerStarted ||
                    ((this.schedulerStarted = !0),
                    c.A.addBreadcrumb({
                        category: "ad",
                        message: "Starting ad session heartbeat",
                    }),
                    this.maybeStartHeartbeat());
            }),
            f(this, "trackHeartbeat", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (!t.schedulerStarted && !e) {
                    c.A.addBreadcrumb({
                        category: "ad",
                        message: "Ad heartbeat called but scheduler not started",
                    }),
                        t.heartbeatInterval.stop();
                    return;
                }
                let n = performance.now(),
                    r = n - t.lastHeartbeatTimestamp,
                    i = 5 * o.A.Millis.MINUTE;
                if (!e && t.lastHeartbeatTimestamp > 0 && r < i) return;
                let l = (0, u.sN)();
                s.default.track(p.HAw.CLIENT_AD_HEARTBEAT, {
                    client_ad_session_id: l.uuid,
                    client_heartbeat_initialization_timestamp: l.createdAtTimestamp,
                    client_heartbeat_version: 3,
                }),
                    (t.lastHeartbeatTimestamp = n);
            }),
            f(this, "stopAnalyticHeartbeat", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "DEFAULT";
                t.schedulerStarted &&
                    ((t.schedulerStarted = !1),
                    (t.lastHeartbeatTimestamp = 0),
                    c.A.addBreadcrumb({
                        category: "ad",
                        message: "Stopping ad session heartbeat: ".concat(e),
                    }),
                    t.heartbeatInterval.stop());
            }),
            f(this, "scheduleHeartbeatTracking", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "DEFAULT";
                if (t.focusedOrForegrounded && null != h)
                    try {
                        t.startAnalyticHeartbeat();
                    } catch (e) {
                        c.A.captureException(e);
                    }
                else t.stopAnalyticHeartbeat(e);
            }),
            f(this, "handleLogin", () => {
                this.scheduleHeartbeatTracking(), this.trackHeartbeat(!0);
            }),
            f(this, "handleLogout", () => {
                this.stopAnalyticHeartbeat("USER_LOGOUT"), (0, u.Db)();
            }),
            f(this, "handleEnrollmentSuccess", () => {
                (0, u.sN)(!0);
            }),
            f(this, "handleWindowFocus", (e) => {
                let { focused: t } = e;
                (this.focusedOrForegrounded = t), this.scheduleHeartbeatTracking("WINDOW_FOCUS");
            }),
            f(this, "handleAppStateUpdate", (e) => {
                let { state: t } = e;
                (this.focusedOrForegrounded = t === p.g6G.ACTIVE), this.scheduleHeartbeatTracking("APP_STATE_UPDATE");
            }),
            f(this, "handleAuthenticationChange", () => {
                let e = a.default.getToken();
                h !== e && ((h = e), (0, u.Db)(), this.stopAnalyticHeartbeat()), this.scheduleHeartbeatTracking();
            });
    }
}
let g = new A();
