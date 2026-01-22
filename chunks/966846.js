n.d(t, {
    A: () => $,
}),
    n(896048),
    n(65821),
    n(321073),
    n(667532);
var r,
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(506774),
    l = n(73153),
    c = n(92077),
    u = n(15285),
    d = n(961350),
    f = n(568004),
    p = n(674378),
    _ = n(962052),
    h = n(723702),
    m = n(194871),
    g = n(652215),
    E = n(613057);

function b(e, t, n) {
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
let y = [E.Hi.AUTHENTICATION_FAILED, E.Hi.NOT_ENTITLED],
    O = "DispatchManagerStore",
    A = [],
    v = [],
    S = !1,
    I = null,
    T = null,
    C = !1,
    N = new Map(),
    R = !1,
    w = null;

function P() {
    let e = {
        queue: A,
        paused: S,
        userActions: Array.from(N),
    };
    o.w.set(O, e);
}

function D(e, t) {
    return (
        (null != I && I.applicationId === e && I.branchId === t) ||
        (null != T && T.applicationId === e && T.branchId === t)
    );
}

function x() {
    let e = A[0];
    if (null != e) {
        let { comboId: t, action: n } = e,
            { applicationId: r, branchId: i } = (0, p.r0)(t);
        if (!D(r, i)) {
            let e = d.default.getToken(),
                t = d.default.getId();
            if (null == e) throw Error("missing user token");
            R = !_.A.setCurrentTask(r, i, n, t, e);
        }
    }
}

function L(e, t) {
    let n = (0, p.gW)(e, t);
    return A.findIndex((e) => e.comboId === n);
}

function j(e, t, n, r) {
    let i = (0, p.gW)(e, t),
        a = {
            comboId: i,
            action: r,
        },
        s = v.indexOf(i);
    -1 !== s && v.splice(s, 1);
    let o = L(e, t);
    0 !== o && (n ? -1 === o && (A.push(a), x()) : (o > 0 && A.splice(o, 1), A.unshift(a), x())),
        !n && S && _.A.resume(),
        P();
}

function M(e, t) {
    let n = (0, p.gW)(e, t),
        r = v.indexOf(n);
    -1 !== r && v.splice(r, 1);
    let i = L(e, t);
    -1 !== i && (A.splice(i, 1), P()), x();
}

function k(e) {
    let { applicationId: t, branchId: n } = e;
    N.set((0, p.gW)(t, n), "Install"), j(t, n, !1, "Patch");
}

function U(e) {
    F(e), H(e);
}

function G(e) {
    let { applicationId: t, branchId: n } = e;
    N.set((0, p.gW)(t, n), "Repair"), j(t, n, !1, "Repair");
}

function V(e) {
    let { applicationId: t, branchId: n, automatic: r } = e;
    j(t, n, r, "Patch");
}

function F(e) {
    let { applicationId: t, branchId: n } = e;
    M(t, n);
}

function B(e) {
    let { applicationId: t, branchId: n } = e,
        r = L(t, n);
    if (r < 1) return !1;
    A.splice(0, 0, A.splice(r, 1)[0]), x(), S && _.A.resume(), P();
}

function H(e) {
    let { applicationId: t, branchId: n } = e,
        r = (0, p.gW)(t, n),
        i = v.indexOf(r);
    -1 !== i && v.splice(i, 1);
}

function Y(e) {
    let { state: t } = e;
    !C && ((C = !0), x(), S || _.A.resume());
    let n = S;
    (S = t.paused), (I = t.currentTask), (T = t.nextTask);
    let r = !1;
    (A = A.filter((e) => {
        let { comboId: t } = e,
            { applicationId: n, branchId: i } = (0, p.r0)(t),
            s = m.A.getState(n, i),
            o = f.A.getTargetBuildId(n, i),
            l = f.A.getTargetManifests(n, i);
        if (
            null != s &&
            s.type === g.WTw.UP_TO_DATE &&
            s.buildId === s.targetBuildId &&
            s.buildId === o &&
            a().isEqual(s.manifestIds, s.targetManifestIds) &&
            a().isEqual(s.manifestIds, l)
        ) {
            if ((v.push(t), N.has(t))) {
                switch (N.get(t)) {
                    case "Install":
                        c.BK(n, s);
                        break;
                    case "Repair":
                        c.jU(n, s);
                }
                N.delete(t);
            }
            return (r = !0), !1;
        }
        return !0;
    })),
        x(),
        (r || n !== S) && P();
}

function W() {
    let e = d.default.getToken(),
        t = d.default.getId();
    null != e && _.A.setCredentials(t, e);
}

function K(e) {
    let { error: t } = e,
        { code: n } = t;
    if (null != n) {
        if (y.includes(n)) W();
        else if (n === E.Hi.APPLICATION_NOT_FOUND) {
            let { context: e } = t;
            if (null != e) {
                let { application_id: t, branch_id: n } = e;
                M(t, n);
            }
        }
    }
}

function z() {
    for (let e of u.Ay.getRunningDiscordApplicationIds()) c.ZT(e, e);
    let e = u.Ay.getVisibleGame();
    return S || null == e || e.pid === w || c.v7(), (w = null == e ? null : e.pid), !1;
}

function q() {
    (0, h.isDesktop)() && W();
}

function X() {
    o.w.remove(O), (0, h.isDesktop)() && _.A.pause();
}

function Z(e) {
    return e.map((e) =>
        "string" == typeof e
            ? {
                  comboId: e,
                  action: "Patch",
              }
            : e,
    );
}
class Q extends (r = s.Ay.Store) {
    initialize() {
        var e;
        let t =
            null != (e = o.w.get(O))
                ? e
                : {
                      queue: null,
                      paused: null,
                      userActions: null,
                  };
        null != t.queue && (A = Z(t.queue)),
            null != t.paused && (S = t.paused),
            null != t.userActions && (N = new Map(Array.from(t.userActions))),
            this.waitFor(m.A, u.Ay),
            this.syncWith([u.Ay], z),
            this.waitFor(f.A, d.default, m.A);
    }
    get activeItems() {
        return A.map((e) => {
            let { comboId: t } = e;
            return (0, p.r0)(t);
        });
    }
    get finishedItems() {
        return v.map(p.r0);
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
b(Q, "displayName", "DispatchManagerStore");
let $ = new Q(l.h, {
    DISPATCH_APPLICATION_INSTALL: k,
    DISPATCH_APPLICATION_UPDATE: V,
    DISPATCH_APPLICATION_UNINSTALL: U,
    DISPATCH_APPLICATION_CANCEL: F,
    DISPATCH_APPLICATION_REPAIR: G,
    DISPATCH_APPLICATION_MOVE_UP: B,
    DISPATCH_APPLICATION_REMOVE_FINISHED: H,
    DISPATCH_APPLICATION_STATE_UPDATE: Y,
    DISPATCH_APPLICATION_ERROR: K,
    CONNECTION_OPEN: q,
    LOGOUT: X,
});
