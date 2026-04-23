n.d(t, { A: () => k }), n(321073), n(667532);
var i = n(735438),
    r = n.n(i),
    l = n(17928),
    a = n(506774),
    s = n(228366),
    o = n(92077),
    d = n(328153),
    u = n(495544),
    c = n(568004),
    h = n(674378),
    E = n(962052),
    _ = n(723702),
    p = n(340829),
    A = n(652215),
    f = n(613057);
let g = [f.Hi.AUTHENTICATION_FAILED, f.Hi.NOT_ENTITLED],
    I = "DispatchManagerStore",
    T = [],
    S = [],
    m = !1,
    O = null,
    C = null,
    N = !1,
    y = new Map(),
    R = !1,
    L = null;
function v() {
    let e = { queue: T, paused: m, userActions: Array.from(y) };
    a.w.set(I, e);
}
function D() {
    let e = T[0];
    if (null != e) {
        let { comboId: t, action: n } = e,
            { applicationId: i, branchId: r } = (0, h.r0)(t);
        if (
            (null == O || O.applicationId !== i || O.branchId !== r) &&
            (null == C || C.applicationId !== i || C.branchId !== r) &&
            1
        ) {
            let e = u.default.getToken(),
                t = u.default.getId();
            if (null == e) throw Error("missing user token");
            R = !E.A.setCurrentTask(i, r, n, t, e);
        }
    }
}
function b(e, t) {
    let n = (0, h.gW)(e, t);
    return T.findIndex((e) => e.comboId === n);
}
function U(e, t, n, i) {
    let r = (0, h.gW)(e, t),
        l = { comboId: r, action: i },
        a = S.indexOf(r);
    -1 !== a && S.splice(a, 1);
    let s = b(e, t);
    0 !== s && (n ? -1 === s && (T.push(l), D()) : (s > 0 && T.splice(s, 1), T.unshift(l), D())),
        !n && m && E.A.resume(),
        v();
}
function P(e, t) {
    let n = (0, h.gW)(e, t),
        i = S.indexOf(n);
    -1 !== i && S.splice(i, 1);
    let r = b(e, t);
    -1 !== r && (T.splice(r, 1), v()), D();
}
function M(e) {
    let { applicationId: t, branchId: n } = e;
    P(t, n);
}
function w(e) {
    let { applicationId: t, branchId: n } = e,
        i = (0, h.gW)(t, n),
        r = S.indexOf(i);
    -1 !== r && S.splice(r, 1);
}
function G() {
    let e = u.default.getToken(),
        t = u.default.getId();
    null != e && E.A.setCredentials(t, e);
}
function F() {
    for (let e of d.Ay.getRunningDiscordApplicationIds()) o.ZT(e, e);
    let e = d.Ay.getVisibleGame();
    return m || null == e || e.pid === L || o.v7(), (L = null == e ? null : e.pid), !1;
}
class V extends l.Ay.Store {
    static displayName = "DispatchManagerStore";
    initialize() {
        let e = a.w.get(I) ?? { queue: null, paused: null, userActions: null };
        null != e.queue && (T = e.queue.map((e) => ("string" == typeof e ? { comboId: e, action: "Patch" } : e))),
            null != e.paused && (m = e.paused),
            null != e.userActions && (y = new Map(Array.from(e.userActions))),
            this.waitFor(p.A, d.Ay),
            this.syncWith([d.Ay], F),
            this.waitFor(c.A, u.default, p.A);
    }
    get activeItems() {
        return T.map((e) => {
            let { comboId: t } = e;
            return (0, h.r0)(t);
        });
    }
    get finishedItems() {
        return S.map(h.r0);
    }
    get paused() {
        return m;
    }
    getQueuePosition(e, t) {
        return b(e, t);
    }
    isCorruptInstallation() {
        return R;
    }
}
let k = new V(s.h, {
    DISPATCH_APPLICATION_INSTALL: function (e) {
        let { applicationId: t, branchId: n } = e;
        y.set((0, h.gW)(t, n), "Install"), U(t, n, !1, "Patch");
    },
    DISPATCH_APPLICATION_UPDATE: function (e) {
        let { applicationId: t, branchId: n, automatic: i } = e;
        U(t, n, i, "Patch");
    },
    DISPATCH_APPLICATION_UNINSTALL: function (e) {
        M(e), w(e);
    },
    DISPATCH_APPLICATION_CANCEL: M,
    DISPATCH_APPLICATION_REPAIR: function (e) {
        let { applicationId: t, branchId: n } = e;
        y.set((0, h.gW)(t, n), "Repair"), U(t, n, !1, "Repair");
    },
    DISPATCH_APPLICATION_MOVE_UP: function (e) {
        let { applicationId: t, branchId: n } = e,
            i = b(t, n);
        if (i < 1) return !1;
        T.splice(0, 0, T.splice(i, 1)[0]), D(), m && E.A.resume(), v();
    },
    DISPATCH_APPLICATION_REMOVE_FINISHED: w,
    DISPATCH_APPLICATION_STATE_UPDATE: function (e) {
        let { state: t } = e;
        !N && ((N = !0), D(), m || E.A.resume());
        let n = m;
        (m = t.paused), (O = t.currentTask), (C = t.nextTask);
        let i = !1;
        (T = T.filter((e) => {
            let { comboId: t } = e,
                { applicationId: n, branchId: l } = (0, h.r0)(t),
                a = p.A.getState(n, l),
                s = c.A.getTargetBuildId(n, l),
                d = c.A.getTargetManifests(n, l);
            if (
                null != a &&
                a.type === A.WTw.UP_TO_DATE &&
                a.buildId === a.targetBuildId &&
                a.buildId === s &&
                r().isEqual(a.manifestIds, a.targetManifestIds) &&
                r().isEqual(a.manifestIds, d)
            ) {
                if ((S.push(t), y.has(t))) {
                    switch (y.get(t)) {
                        case "Install":
                            o.BK(n, a);
                            break;
                        case "Repair":
                            o.jU(n, a);
                    }
                    y.delete(t);
                }
                return (i = !0), !1;
            }
            return !0;
        })),
            D(),
            (i || n !== m) && v();
    },
    DISPATCH_APPLICATION_ERROR: function (e) {
        let { error: t } = e,
            { code: n } = t;
        if (null != n) {
            if (g.includes(n)) G();
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
        (0, _.isDesktop)() && G();
    },
    LOGOUT: function () {
        a.w.remove(I), (0, _.isDesktop)() && E.A.pause();
    },
});
