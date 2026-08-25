"use strict";
n.d(t, { A: () => F }), n(321073), n(667532);
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(506774),
    l = n(228366),
    o = n(92077),
    d = n(952818),
    c = n(280450),
    u = n(568004),
    _ = n(674378),
    E = n(962052),
    A = n(723702),
    h = n(340829),
    I = n(652215),
    f = n(613057);
let p = [f.Hi.AUTHENTICATION_FAILED, f.Hi.NOT_ENTITLED],
    T = "DispatchManagerStore",
    m = [],
    g = [],
    S = !1,
    N = null,
    C = null,
    R = !1,
    O = new Map(),
    L = !1,
    y = null;
function D() {
    let e = { queue: m, paused: S, userActions: Array.from(O) };
    s.w.set(T, e);
}
function v() {
    let e = m[0];
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
function b(e, t) {
    let n = (0, _.gW)(e, t);
    return m.findIndex((e) => e.comboId === n);
}
function M(e, t, n, i) {
    let r = (0, _.gW)(e, t),
        a = { comboId: r, action: i },
        s = g.indexOf(r);
    -1 !== s && g.splice(s, 1);
    let l = b(e, t);
    0 !== l && (n ? -1 === l && (m.push(a), v()) : (l > 0 && m.splice(l, 1), m.unshift(a), v())),
        !n && S && E.A.resume(),
        D();
}
function P(e, t) {
    let n = (0, _.gW)(e, t),
        i = g.indexOf(n);
    -1 !== i && g.splice(i, 1);
    let r = b(e, t);
    -1 !== r && (m.splice(r, 1), D()), v();
}
function U(e) {
    let { applicationId: t, branchId: n } = e;
    P(t, n);
}
function w(e) {
    let { applicationId: t, branchId: n } = e,
        i = (0, _.gW)(t, n),
        r = g.indexOf(i);
    -1 !== r && g.splice(r, 1);
}
function G() {
    let e = c.default.getToken(),
        t = c.default.getId();
    null != e && E.A.setCredentials(t, e);
}
function x() {
    for (let e of d.Ay.getRunningDiscordApplicationIds()) o.ZT(e, e);
    let e = d.Ay.getVisibleGame();
    return S || null == e || e.pid === y || o.v7(), (y = null == e ? null : e.pid), !1;
}
class k extends a.Ay.Store {
    static displayName = "DispatchManagerStore";
    initialize() {
        let e = s.w.get(T) ?? { queue: null, paused: null, userActions: null };
        null != e.queue && (m = e.queue.map((e) => ("string" == typeof e ? { comboId: e, action: "Patch" } : e))),
            null != e.paused && (S = e.paused),
            null != e.userActions && (O = new Map(Array.from(e.userActions))),
            this.waitFor(h.A, d.Ay),
            this.syncWith([d.Ay], x),
            this.waitFor(u.A, c.default, h.A);
    }
    get activeItems() {
        return m.map((e) => {
            let { comboId: t } = e;
            return (0, _.r0)(t);
        });
    }
    get finishedItems() {
        return g.map(_.r0);
    }
    get paused() {
        return S;
    }
    getQueuePosition(e, t) {
        return b(e, t);
    }
    isCorruptInstallation() {
        return L;
    }
}
let F = new k(l.h, {
    DISPATCH_APPLICATION_INSTALL: function (e) {
        let { applicationId: t, branchId: n } = e;
        O.set((0, _.gW)(t, n), "Install"), M(t, n, !1, "Patch");
    },
    DISPATCH_APPLICATION_UPDATE: function (e) {
        let { applicationId: t, branchId: n, automatic: i } = e;
        M(t, n, i, "Patch");
    },
    DISPATCH_APPLICATION_UNINSTALL: function (e) {
        U(e), w(e);
    },
    DISPATCH_APPLICATION_CANCEL: U,
    DISPATCH_APPLICATION_REPAIR: function (e) {
        let { applicationId: t, branchId: n } = e;
        O.set((0, _.gW)(t, n), "Repair"), M(t, n, !1, "Repair");
    },
    DISPATCH_APPLICATION_MOVE_UP: function (e) {
        let { applicationId: t, branchId: n } = e,
            i = b(t, n);
        if (i < 1) return !1;
        m.splice(0, 0, m.splice(i, 1)[0]), v(), S && E.A.resume(), D();
    },
    DISPATCH_APPLICATION_REMOVE_FINISHED: w,
    DISPATCH_APPLICATION_STATE_UPDATE: function (e) {
        let { state: t } = e;
        !R && ((R = !0), v(), S || E.A.resume());
        let n = S;
        (S = t.paused), (N = t.currentTask), (C = t.nextTask);
        let i = !1;
        (m = m.filter((e) => {
            let { comboId: t } = e,
                { applicationId: n, branchId: a } = (0, _.r0)(t),
                s = h.A.getState(n, a),
                l = u.A.getTargetBuildId(n, a),
                d = u.A.getTargetManifests(n, a);
            if (
                null != s &&
                s.type === I.WTw.UP_TO_DATE &&
                s.buildId === s.targetBuildId &&
                s.buildId === l &&
                r().isEqual(s.manifestIds, s.targetManifestIds) &&
                r().isEqual(s.manifestIds, d)
            ) {
                if ((g.push(t), O.has(t))) {
                    switch (O.get(t)) {
                        case "Install":
                            o.BK(n, s);
                            break;
                        case "Repair":
                            o.jU(n, s);
                    }
                    O.delete(t);
                }
                return (i = !0), !1;
            }
            return !0;
        })),
            v(),
            (i || n !== S) && D();
    },
    DISPATCH_APPLICATION_ERROR: function (e) {
        let { error: t } = e,
            { code: n } = t;
        if (null != n) {
            if (p.includes(n)) G();
            else if (n === f.Hi.APPLICATION_NOT_FOUND) {
                let { context: e } = t;
                if (null != e) {
                    let { application_id: t, branch_id: n } = e;
                    P(t, n);
                }
            }
        }
    },
    CONNECTION_OPEN: function () {
        (0, A.isDesktop)() && G();
    },
    LOGOUT: function () {
        s.w.remove(T), (0, A.isDesktop)() && E.A.pause();
    },
});
