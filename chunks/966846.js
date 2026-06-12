"use strict";
n.d(t, { A: () => F }), n(321073), n(667532);
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(506774),
    o = n(228366),
    l = n(92077),
    u = n(952818),
    c = n(495544),
    d = n(568004),
    _ = n(674378),
    h = n(962052),
    f = n(723702),
    p = n(340829),
    E = n(652215),
    m = n(613057);
let g = [m.Hi.AUTHENTICATION_FAILED, m.Hi.NOT_ENTITLED],
    A = "DispatchManagerStore",
    I = [],
    T = [],
    S = !1,
    y = null,
    N = null,
    v = !1,
    C = new Map(),
    R = !1,
    O = null;
function b() {
    let e = { queue: I, paused: S, userActions: Array.from(C) };
    a.w.set(A, e);
}
function D() {
    let e = I[0];
    if (null != e) {
        let { comboId: t, action: n } = e,
            { applicationId: i, branchId: r } = (0, _.r0)(t);
        if (
            (null == y || y.applicationId !== i || y.branchId !== r) &&
            (null == N || N.applicationId !== i || N.branchId !== r) &&
            1
        ) {
            let e = c.default.getToken(),
                t = c.default.getId();
            if (null == e) throw Error("missing user token");
            R = !h.A.setCurrentTask(i, r, n, t, e);
        }
    }
}
function L(e, t) {
    let n = (0, _.gW)(e, t);
    return I.findIndex((e) => e.comboId === n);
}
function w(e, t, n, i) {
    let r = (0, _.gW)(e, t),
        s = { comboId: r, action: i },
        a = T.indexOf(r);
    -1 !== a && T.splice(a, 1);
    let o = L(e, t);
    0 !== o && (n ? -1 === o && (I.push(s), D()) : (o > 0 && I.splice(o, 1), I.unshift(s), D())),
        !n && S && h.A.resume(),
        b();
}
function M(e, t) {
    let n = (0, _.gW)(e, t),
        i = T.indexOf(n);
    -1 !== i && T.splice(i, 1);
    let r = L(e, t);
    -1 !== r && (I.splice(r, 1), b()), D();
}
function P(e) {
    let { applicationId: t, branchId: n } = e;
    M(t, n);
}
function x(e) {
    let { applicationId: t, branchId: n } = e,
        i = (0, _.gW)(t, n),
        r = T.indexOf(i);
    -1 !== r && T.splice(r, 1);
}
function k() {
    let e = c.default.getToken(),
        t = c.default.getId();
    null != e && h.A.setCredentials(t, e);
}
function U() {
    for (let e of u.Ay.getRunningDiscordApplicationIds()) l.ZT(e, e);
    let e = u.Ay.getVisibleGame();
    return S || null == e || e.pid === O || l.v7(), (O = null == e ? null : e.pid), !1;
}
class G extends s.Ay.Store {
    static displayName = "DispatchManagerStore";
    initialize() {
        let e = a.w.get(A) ?? { queue: null, paused: null, userActions: null };
        null != e.queue && (I = e.queue.map((e) => ("string" == typeof e ? { comboId: e, action: "Patch" } : e))),
            null != e.paused && (S = e.paused),
            null != e.userActions && (C = new Map(Array.from(e.userActions))),
            this.waitFor(p.A, u.Ay),
            this.syncWith([u.Ay], U),
            this.waitFor(d.A, c.default, p.A);
    }
    get activeItems() {
        return I.map((e) => {
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
        return L(e, t);
    }
    isCorruptInstallation() {
        return R;
    }
}
let F = new G(o.h, {
    DISPATCH_APPLICATION_INSTALL: function (e) {
        let { applicationId: t, branchId: n } = e;
        C.set((0, _.gW)(t, n), "Install"), w(t, n, !1, "Patch");
    },
    DISPATCH_APPLICATION_UPDATE: function (e) {
        let { applicationId: t, branchId: n, automatic: i } = e;
        w(t, n, i, "Patch");
    },
    DISPATCH_APPLICATION_UNINSTALL: function (e) {
        P(e), x(e);
    },
    DISPATCH_APPLICATION_CANCEL: P,
    DISPATCH_APPLICATION_REPAIR: function (e) {
        let { applicationId: t, branchId: n } = e;
        C.set((0, _.gW)(t, n), "Repair"), w(t, n, !1, "Repair");
    },
    DISPATCH_APPLICATION_MOVE_UP: function (e) {
        let { applicationId: t, branchId: n } = e,
            i = L(t, n);
        if (i < 1) return !1;
        I.splice(0, 0, I.splice(i, 1)[0]), D(), S && h.A.resume(), b();
    },
    DISPATCH_APPLICATION_REMOVE_FINISHED: x,
    DISPATCH_APPLICATION_STATE_UPDATE: function (e) {
        let { state: t } = e;
        !v && ((v = !0), D(), S || h.A.resume());
        let n = S;
        (S = t.paused), (y = t.currentTask), (N = t.nextTask);
        let i = !1;
        (I = I.filter((e) => {
            let { comboId: t } = e,
                { applicationId: n, branchId: s } = (0, _.r0)(t),
                a = p.A.getState(n, s),
                o = d.A.getTargetBuildId(n, s),
                u = d.A.getTargetManifests(n, s);
            if (
                null != a &&
                a.type === E.WTw.UP_TO_DATE &&
                a.buildId === a.targetBuildId &&
                a.buildId === o &&
                r().isEqual(a.manifestIds, a.targetManifestIds) &&
                r().isEqual(a.manifestIds, u)
            ) {
                if ((T.push(t), C.has(t))) {
                    switch (C.get(t)) {
                        case "Install":
                            l.BK(n, a);
                            break;
                        case "Repair":
                            l.jU(n, a);
                    }
                    C.delete(t);
                }
                return (i = !0), !1;
            }
            return !0;
        })),
            D(),
            (i || n !== S) && b();
    },
    DISPATCH_APPLICATION_ERROR: function (e) {
        let { error: t } = e,
            { code: n } = t;
        if (null != n) {
            if (g.includes(n)) k();
            else if (n === m.Hi.APPLICATION_NOT_FOUND) {
                let { context: e } = t;
                if (null != e) {
                    let { application_id: t, branch_id: n } = e;
                    M(t, n);
                }
            }
        }
    },
    CONNECTION_OPEN: function () {
        (0, f.isDesktop)() && k();
    },
    LOGOUT: function () {
        a.w.remove(A), (0, f.isDesktop)() && h.A.pause();
    },
});
