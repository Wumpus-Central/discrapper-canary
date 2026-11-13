(n.d(t, { A: () => k }), n(321073), n(667532));
var i = n(435558),
    r = n.n(i),
    a = n(855986),
    s = n(506774),
    l = n(73153),
    o = n(92077),
    d = n(644727),
    c = n(46653),
    u = n(568004),
    _ = n(674378),
    E = n(962052),
    A = n(723702),
    f = n(659096),
    h = n(652215),
    I = n(613057);
let p = [I.Hi.AUTHENTICATION_FAILED, I.Hi.NOT_ENTITLED],
    m = "DispatchManagerStore",
    g = [],
    T = [],
    S = !1,
    N = null,
    C = null,
    O = !1,
    R = new Map(),
    L = !1,
    y = null;
function D() {
    let e = { queue: g, paused: S, userActions: Array.from(R) };
    s.w.set(m, e);
}
function b() {
    let e = g[0];
    if (null != e) {
        let { comboId: t, action: n } = e,
            { applicationId: i, branchId: r } = (0, _.r0)(t);
        if (
            (null == N || N.applicationId !== i || N.branchId !== r) &&
            (null == C || C.applicationId !== i || C.branchId !== r) &&
            1
        ) {
            let e = c.default.getToken(),
                t = c.default.getId();
            if (null == e) throw Error("missing user token");
            L = !E.A.setCurrentTask(i, r, n, t, e);
        }
    }
}
function v(e, t) {
    let n = (0, _.gW)(e, t);
    return g.findIndex((e) => e.comboId === n);
}
function P(e, t, n, i) {
    let r = (0, _.gW)(e, t),
        a = { comboId: r, action: i },
        s = T.indexOf(r);
    -1 !== s && T.splice(s, 1);
    let l = v(e, t);
    (0 !== l && (n ? -1 === l && (g.push(a), b()) : (l > 0 && g.splice(l, 1), g.unshift(a), b())),
        !n && S && E.A.resume(),
        D());
}
function M(e, t) {
    let n = (0, _.gW)(e, t),
        i = T.indexOf(n);
    -1 !== i && T.splice(i, 1);
    let r = v(e, t);
    (-1 !== r && (g.splice(r, 1), D()), b());
}
function U(e, t) {
    let n = (0, _.gW)(e, t),
        i = T.indexOf(n);
    -1 !== i && T.splice(i, 1);
}
function w() {
    let e = c.default.getToken(),
        t = c.default.getId();
    null != e && E.A.setCredentials(t, e);
}
function G() {
    for (let e of d.Ay.getRunningDiscordApplicationIds()) o.ZT(e, e);
    let e = d.Ay.getVisibleGame();
    return (S || null == e || e.pid === y || o.v7(), (y = null == e ? null : e.pid), !1);
}
class x extends a.Ay.Store {
    static displayName = "DispatchManagerStore";
    initialize() {
        let e = s.w.get(m) ?? { queue: null, paused: null, userActions: null };
        (null != e.queue && (g = e.queue.map((e) => ("string" == typeof e ? { comboId: e, action: "Patch" } : e))),
            null != e.paused && (S = e.paused),
            null != e.userActions && (R = new Map(Array.from(e.userActions))),
            this.waitFor(f.A, d.Ay),
            this.syncWith([d.Ay], G),
            this.waitFor(u.A, c.default, f.A));
    }
    get activeItems() {
        return g.map((e) => {
            let { comboId: t } = e;
            return (0, _.r0)(t);
        });
    }
    get finishedItems() {
        return T.map(_.r0);
    }
    get paused() {
        return S;
    }
    getQueuePosition(e, t) {
        return v(e, t);
    }
    isCorruptInstallation() {
        return L;
    }
}
let k = new x(l.h, {
    DISPATCH_APPLICATION_INSTALL: function (e) {
        let { applicationId: t, branchId: n } = e;
        (R.set((0, _.gW)(t, n), "Install"), P(t, n, !1, "Patch"));
    },
    DISPATCH_APPLICATION_UPDATE: function (e) {
        let { applicationId: t, branchId: n, automatic: i } = e;
        P(t, n, i, "Patch");
    },
    DISPATCH_APPLICATION_UNINSTALL: function (e) {
        let { applicationId: t, branchId: n } = e;
        (M(t, n), U(t, n));
    },
    DISPATCH_APPLICATION_CANCEL: function (e) {
        let { applicationId: t, branchId: n } = e;
        M(t, n);
    },
    DISPATCH_APPLICATION_REPAIR: function (e) {
        let { applicationId: t, branchId: n } = e;
        (R.set((0, _.gW)(t, n), "Repair"), P(t, n, !1, "Repair"));
    },
    DISPATCH_APPLICATION_MOVE_UP: function (e) {
        let { applicationId: t, branchId: n } = e,
            i = v(t, n);
        if (i < 1) return !1;
        (g.splice(0, 0, g.splice(i, 1)[0]), b(), S && E.A.resume(), D());
    },
    DISPATCH_APPLICATION_REMOVE_FINISHED: function (e) {
        let { applicationId: t, branchId: n } = e;
        U(t, n);
    },
    DISPATCH_APPLICATION_STATE_UPDATE: function (e) {
        let { state: t } = e;
        !O && ((O = !0), b(), S || E.A.resume());
        let n = S;
        ((S = t.paused), (N = t.currentTask), (C = t.nextTask));
        let i = !1;
        ((g = g.filter((e) => {
            let { comboId: t } = e,
                { applicationId: n, branchId: a } = (0, _.r0)(t),
                s = f.A.getState(n, a),
                l = u.A.getTargetBuildId(n, a),
                d = u.A.getTargetManifests(n, a);
            if (
                null != s &&
                s.type === h.WTw.UP_TO_DATE &&
                s.buildId === s.targetBuildId &&
                s.buildId === l &&
                r().isEqual(s.manifestIds, s.targetManifestIds) &&
                r().isEqual(s.manifestIds, d)
            ) {
                if ((T.push(t), R.has(t))) {
                    switch (R.get(t)) {
                        case "Install":
                            o.BK(n, s);
                            break;
                        case "Repair":
                            o.jU(n, s);
                    }
                    R.delete(t);
                }
                return ((i = !0), !1);
            }
            return !0;
        })),
            b(),
            (i || n !== S) && D());
    },
    DISPATCH_APPLICATION_ERROR: function (e) {
        let { error: t } = e,
            { code: n } = t;
        if (null != n) {
            if (p.includes(n)) w();
            else if (n === I.Hi.APPLICATION_NOT_FOUND) {
                let { context: e } = t;
                if (null != e) {
                    let { application_id: t, branch_id: n } = e;
                    M(t, n);
                }
            }
        }
    },
    CONNECTION_OPEN: function () {
        (0, A.xl)() && w();
    },
    LOGOUT: function () {
        (s.w.remove(m), (0, A.xl)() && E.A.pause());
    },
});
