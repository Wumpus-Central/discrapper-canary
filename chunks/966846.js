"use strict";
n.d(t, { A: () => F }), n(321073), n(667532);
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(506774),
    o = n(73153),
    l = n(92077),
    u = n(15285),
    c = n(961350),
    d = n(568004),
    _ = n(674378),
    f = n(962052),
    p = n(723702),
    h = n(194871),
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
    O = !1,
    R = null;
function b() {
    let e = { queue: I, paused: S, userActions: Array.from(C) };
    a.w.set(A, e);
}
function D() {
    let e = I[0];
    if (null != e) {
        let { comboId: t, action: n } = e,
            { applicationId: r, branchId: i } = (0, _.r0)(t);
        if (
            (null == y || y.applicationId !== r || y.branchId !== i) &&
            (null == N || N.applicationId !== r || N.branchId !== i) &&
            1
        ) {
            let e = c.default.getToken(),
                t = c.default.getId();
            if (null == e) throw Error("missing user token");
            O = !f.A.setCurrentTask(r, i, n, t, e);
        }
    }
}
function L(e, t) {
    let n = (0, _.gW)(e, t);
    return I.findIndex((e) => e.comboId === n);
}
function w(e, t, n, r) {
    let i = (0, _.gW)(e, t),
        s = { comboId: i, action: r },
        a = T.indexOf(i);
    -1 !== a && T.splice(a, 1);
    let o = L(e, t);
    0 !== o && (n ? -1 === o && (I.push(s), D()) : (o > 0 && I.splice(o, 1), I.unshift(s), D())),
        !n && S && f.A.resume(),
        b();
}
function M(e, t) {
    let n = (0, _.gW)(e, t),
        r = T.indexOf(n);
    -1 !== r && T.splice(r, 1);
    let i = L(e, t);
    -1 !== i && (I.splice(i, 1), b()), D();
}
function P(e) {
    let { applicationId: t, branchId: n } = e;
    M(t, n);
}
function x(e) {
    let { applicationId: t, branchId: n } = e,
        r = (0, _.gW)(t, n),
        i = T.indexOf(r);
    -1 !== i && T.splice(i, 1);
}
function k() {
    let e = c.default.getToken(),
        t = c.default.getId();
    null != e && f.A.setCredentials(t, e);
}
function U() {
    for (let e of u.Ay.getRunningDiscordApplicationIds()) l.ZT(e, e);
    let e = u.Ay.getVisibleGame();
    return S || null == e || e.pid === R || l.v7(), (R = null == e ? null : e.pid), !1;
}
class G extends s.Ay.Store {
    static displayName = "DispatchManagerStore";
    initialize() {
        let e = a.w.get(A) ?? { queue: null, paused: null, userActions: null };
        null != e.queue && (I = e.queue.map((e) => ("string" == typeof e ? { comboId: e, action: "Patch" } : e))),
            null != e.paused && (S = e.paused),
            null != e.userActions && (C = new Map(Array.from(e.userActions))),
            this.waitFor(h.A, u.Ay),
            this.syncWith([u.Ay], U),
            this.waitFor(d.A, c.default, h.A);
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
        return O;
    }
}
let F = new G(o.h, {
    DISPATCH_APPLICATION_INSTALL: function (e) {
        let { applicationId: t, branchId: n } = e;
        C.set((0, _.gW)(t, n), "Install"), w(t, n, !1, "Patch");
    },
    DISPATCH_APPLICATION_UPDATE: function (e) {
        let { applicationId: t, branchId: n, automatic: r } = e;
        w(t, n, r, "Patch");
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
            r = L(t, n);
        if (r < 1) return !1;
        I.splice(0, 0, I.splice(r, 1)[0]), D(), S && f.A.resume(), b();
    },
    DISPATCH_APPLICATION_REMOVE_FINISHED: x,
    DISPATCH_APPLICATION_STATE_UPDATE: function (e) {
        let { state: t } = e;
        !v && ((v = !0), D(), S || f.A.resume());
        let n = S;
        (S = t.paused), (y = t.currentTask), (N = t.nextTask);
        let r = !1;
        (I = I.filter((e) => {
            let { comboId: t } = e,
                { applicationId: n, branchId: s } = (0, _.r0)(t),
                a = h.A.getState(n, s),
                o = d.A.getTargetBuildId(n, s),
                u = d.A.getTargetManifests(n, s);
            if (
                null != a &&
                a.type === E.WTw.UP_TO_DATE &&
                a.buildId === a.targetBuildId &&
                a.buildId === o &&
                i().isEqual(a.manifestIds, a.targetManifestIds) &&
                i().isEqual(a.manifestIds, u)
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
                return (r = !0), !1;
            }
            return !0;
        })),
            D(),
            (r || n !== S) && b();
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
        (0, p.isDesktop)() && k();
    },
    LOGOUT: function () {
        a.w.remove(A), (0, p.isDesktop)() && f.A.pause();
    },
});
