n.d(t, { A: () => k }), n(321073), n(667532);
var i = n(735438),
    l = n.n(i),
    a = n(17928),
    r = n(506774),
    s = n(228366),
    o = n(92077),
    d = n(328153),
    u = n(495544),
    c = n(568004),
    h = n(674378),
    E = n(962052),
    A = n(723702),
    _ = n(340829),
    p = n(652215),
    g = n(613057);
let f = [g.Hi.AUTHENTICATION_FAILED, g.Hi.NOT_ENTITLED],
    I = "DispatchManagerStore",
    S = [],
    T = [],
    m = !1,
    C = null,
    O = null,
    N = !1,
    y = new Map(),
    R = !1,
    L = null;
function v() {
    let e = { queue: S, paused: m, userActions: Array.from(y) };
    r.w.set(I, e);
}
function D() {
    let e = S[0];
    if (null != e) {
        let { comboId: t, action: n } = e,
            { applicationId: i, branchId: l } = (0, h.r0)(t);
        if (
            (null == C || C.applicationId !== i || C.branchId !== l) &&
            (null == O || O.applicationId !== i || O.branchId !== l) &&
            1
        ) {
            let e = u.default.getToken(),
                t = u.default.getId();
            if (null == e) throw Error("missing user token");
            R = !E.A.setCurrentTask(i, l, n, t, e);
        }
    }
}
function U(e, t) {
    let n = (0, h.gW)(e, t);
    return S.findIndex((e) => e.comboId === n);
}
function P(e, t, n, i) {
    let l = (0, h.gW)(e, t),
        a = { comboId: l, action: i },
        r = T.indexOf(l);
    -1 !== r && T.splice(r, 1);
    let s = U(e, t);
    0 !== s && (n ? -1 === s && (S.push(a), D()) : (s > 0 && S.splice(s, 1), S.unshift(a), D())),
        !n && m && E.A.resume(),
        v();
}
function b(e, t) {
    let n = (0, h.gW)(e, t),
        i = T.indexOf(n);
    -1 !== i && T.splice(i, 1);
    let l = U(e, t);
    -1 !== l && (S.splice(l, 1), v()), D();
}
function M(e) {
    let { applicationId: t, branchId: n } = e;
    b(t, n);
}
function w(e) {
    let { applicationId: t, branchId: n } = e,
        i = (0, h.gW)(t, n),
        l = T.indexOf(i);
    -1 !== l && T.splice(l, 1);
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
class V extends a.Ay.Store {
    static displayName = "DispatchManagerStore";
    initialize() {
        let e = r.w.get(I) ?? { queue: null, paused: null, userActions: null };
        null != e.queue && (S = e.queue.map((e) => ("string" == typeof e ? { comboId: e, action: "Patch" } : e))),
            null != e.paused && (m = e.paused),
            null != e.userActions && (y = new Map(Array.from(e.userActions))),
            this.waitFor(_.A, d.Ay),
            this.syncWith([d.Ay], F),
            this.waitFor(c.A, u.default, _.A);
    }
    get activeItems() {
        return S.map((e) => {
            let { comboId: t } = e;
            return (0, h.r0)(t);
        });
    }
    get finishedItems() {
        return T.map(h.r0);
    }
    get paused() {
        return m;
    }
    getQueuePosition(e, t) {
        return U(e, t);
    }
    isCorruptInstallation() {
        return R;
    }
}
let k = new V(s.h, {
    DISPATCH_APPLICATION_INSTALL: function (e) {
        let { applicationId: t, branchId: n } = e;
        y.set((0, h.gW)(t, n), "Install"), P(t, n, !1, "Patch");
    },
    DISPATCH_APPLICATION_UPDATE: function (e) {
        let { applicationId: t, branchId: n, automatic: i } = e;
        P(t, n, i, "Patch");
    },
    DISPATCH_APPLICATION_UNINSTALL: function (e) {
        M(e), w(e);
    },
    DISPATCH_APPLICATION_CANCEL: M,
    DISPATCH_APPLICATION_REPAIR: function (e) {
        let { applicationId: t, branchId: n } = e;
        y.set((0, h.gW)(t, n), "Repair"), P(t, n, !1, "Repair");
    },
    DISPATCH_APPLICATION_MOVE_UP: function (e) {
        let { applicationId: t, branchId: n } = e,
            i = U(t, n);
        if (i < 1) return !1;
        S.splice(0, 0, S.splice(i, 1)[0]), D(), m && E.A.resume(), v();
    },
    DISPATCH_APPLICATION_REMOVE_FINISHED: w,
    DISPATCH_APPLICATION_STATE_UPDATE: function (e) {
        let { state: t } = e;
        !N && ((N = !0), D(), m || E.A.resume());
        let n = m;
        (m = t.paused), (C = t.currentTask), (O = t.nextTask);
        let i = !1;
        (S = S.filter((e) => {
            let { comboId: t } = e,
                { applicationId: n, branchId: a } = (0, h.r0)(t),
                r = _.A.getState(n, a),
                s = c.A.getTargetBuildId(n, a),
                d = c.A.getTargetManifests(n, a);
            if (
                null != r &&
                r.type === p.WTw.UP_TO_DATE &&
                r.buildId === r.targetBuildId &&
                r.buildId === s &&
                l().isEqual(r.manifestIds, r.targetManifestIds) &&
                l().isEqual(r.manifestIds, d)
            ) {
                if ((T.push(t), y.has(t))) {
                    switch (y.get(t)) {
                        case "Install":
                            o.BK(n, r);
                            break;
                        case "Repair":
                            o.jU(n, r);
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
            if (f.includes(n)) G();
            else if (n === g.Hi.APPLICATION_NOT_FOUND) {
                let { context: e } = t;
                if (null != e) {
                    let { application_id: t, branch_id: n } = e;
                    b(t, n);
                }
            }
        }
    },
    CONNECTION_OPEN: function () {
        (0, A.isDesktop)() && G();
    },
    LOGOUT: function () {
        r.w.remove(I), (0, A.isDesktop)() && E.A.pause();
    },
});
