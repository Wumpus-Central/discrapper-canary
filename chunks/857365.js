n.d(t, { A: () => E });
var i = n(451988),
    r = n(73153),
    a = n(272355),
    l = n(961350),
    s = n(954571),
    o = n(927813),
    d = n(728458),
    u = n(881615),
    c = n(789999),
    A = n(652215);
let h = l.default.getToken();
class _ extends a.A {
    focusedOrForegrounded = (0, c.R)();
    heartbeatInterval = new i.IX();
    schedulerStarted = !1;
    lastHeartbeatTimestamp = 0;
    _initialize() {
        (this.focusedOrForegrounded = (0, c.R)()),
            l.default.addChangeListener(this.handleAuthenticationChange),
            r.h.subscribe("WINDOW_FOCUS", this.handleWindowFocus),
            r.h.subscribe("APP_STATE_UPDATE", this.handleAppStateUpdate),
            r.h.subscribe("QUESTS_ENROLL_SUCCESS", this.handleEnrollmentSuccess),
            r.h.subscribe("LOGIN_SUCCESS", this.handleLogin),
            r.h.subscribe("LOGOUT", this.handleLogout),
            this.scheduleHeartbeatTracking();
    }
    _terminate() {
        this.stopAnalyticHeartbeat(),
            l.default.removeChangeListener(this.handleAuthenticationChange),
            r.h.unsubscribe("WINDOW_FOCUS", this.handleWindowFocus),
            r.h.unsubscribe("APP_STATE_UPDATE", this.handleAppStateUpdate),
            r.h.unsubscribe("QUESTS_ENROLL_SUCCESS", this.handleEnrollmentSuccess),
            r.h.unsubscribe("LOGIN_SUCCESS", this.handleLogin),
            r.h.unsubscribe("LOGOUT", this.handleLogout);
    }
    maybeStartHeartbeat = () => {
        this.heartbeatInterval.isStarted() ||
            (this.trackHeartbeat(), this.heartbeatInterval.start(5 * o.A.Millis.MINUTE, this.trackHeartbeat));
    };
    startAnalyticHeartbeat = () => {
        this.schedulerStarted ||
            ((this.schedulerStarted = !0),
            d.A.addBreadcrumb({ category: "ad", message: "Starting ad session heartbeat" }),
            this.maybeStartHeartbeat());
    };
    trackHeartbeat = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!e.schedulerStarted && !t) {
                d.A.addBreadcrumb({ category: "ad", message: "Ad heartbeat called but scheduler not started" }),
                    e.heartbeatInterval.stop();
                return;
            }
            let n = performance.now(),
                i = n - e.lastHeartbeatTimestamp,
                r = 5 * o.A.Millis.MINUTE;
            if (!t && e.lastHeartbeatTimestamp > 0 && i < r) return;
            let a = (0, u.sN)();
            s.default.track(A.HAw.CLIENT_AD_HEARTBEAT, {
                client_ad_session_id: a.uuid,
                client_heartbeat_initialization_timestamp: a.createdAtTimestamp,
                client_heartbeat_version: 3,
            }),
                (e.lastHeartbeatTimestamp = n);
        };
    })();
    stopAnalyticHeartbeat = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "DEFAULT";
            e.schedulerStarted &&
                ((e.schedulerStarted = !1),
                (e.lastHeartbeatTimestamp = 0),
                d.A.addBreadcrumb({ category: "ad", message: `Stopping ad session heartbeat: ${t}` }),
                e.heartbeatInterval.stop());
        };
    })();
    scheduleHeartbeatTracking = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "DEFAULT";
            if (e.focusedOrForegrounded && null != h)
                try {
                    e.startAnalyticHeartbeat();
                } catch (e) {
                    d.A.captureException(e);
                }
            else e.stopAnalyticHeartbeat(t);
        };
    })();
    handleLogin = () => {
        this.scheduleHeartbeatTracking(), this.trackHeartbeat(!0);
    };
    handleLogout = () => {
        this.stopAnalyticHeartbeat("USER_LOGOUT"), (0, u.Db)();
    };
    handleEnrollmentSuccess = () => {
        (0, u.sN)(!0);
    };
    handleWindowFocus = (e) => {
        let { focused: t } = e;
        (this.focusedOrForegrounded = t), this.scheduleHeartbeatTracking("WINDOW_FOCUS");
    };
    handleAppStateUpdate = (e) => {
        let { state: t } = e;
        (this.focusedOrForegrounded = t === A.g6G.ACTIVE), this.scheduleHeartbeatTracking("APP_STATE_UPDATE");
    };
    handleAuthenticationChange = () => {
        let e = l.default.getToken();
        h !== e && ((h = e), (0, u.Db)(), this.stopAnalyticHeartbeat()), this.scheduleHeartbeatTracking();
    };
}
let E = new _();
