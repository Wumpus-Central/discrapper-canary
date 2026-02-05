"use strict";
n.d(t, { A: () => Z }), n(321073), n(667532);
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(506774),
    o = n(73153),
    l = n(92077),
    u = n(15285),
    c = n(961350),
    d = n(568004),
    _ = n(674378),
    f = n(962052),
    p = n(723702),
    h = n(194871),
    m = n(652215),
    g = n(613057);
let E = [g.Hi.AUTHENTICATION_FAILED, g.Hi.NOT_ENTITLED],
    A = "DispatchManagerStore",
    I = [],
    T = [],
    y = !1,
    S = null,
    v = null,
    C = !1,
    b = new Map(),
    N = !1,
    R = null;
function O() {
    let e = { queue: I, paused: y, userActions: Array.from(b) };
    s.w.set(A, e);
}
function D(e, t) {
    return (
        (null != S && S.applicationId === e && S.branchId === t) ||
        (null != v && v.applicationId === e && v.branchId === t)
    );
}
function L() {
    let e = I[0];
    if (null != e) {
        let { comboId: t, action: n } = e,
            { applicationId: r, branchId: i } = (0, _.r0)(t);
        if (!D(r, i)) {
            let e = c.default.getToken(),
                t = c.default.getId();
            if (null == e) throw Error("missing user token");
            N = !f.A.setCurrentTask(r, i, n, t, e);
        }
    }
}
function w(e, t) {
    let n = (0, _.gW)(e, t);
    return I.findIndex((e) => e.comboId === n);
}
function x(e, t, n, r) {
    let i = (0, _.gW)(e, t),
        a = { comboId: i, action: r },
        s = T.indexOf(i);
    -1 !== s && T.splice(s, 1);
    let o = w(e, t);
    0 !== o && (n ? -1 === o && (I.push(a), L()) : (o > 0 && I.splice(o, 1), I.unshift(a), L())),
        !n && y && f.A.resume(),
        O();
}
function P(e, t) {
    let n = (0, _.gW)(e, t),
        r = T.indexOf(n);
    -1 !== r && T.splice(r, 1);
    let i = w(e, t);
    -1 !== i && (I.splice(i, 1), O()), L();
}
function M(e) {
    let { applicationId: t, branchId: n } = e;
    b.set((0, _.gW)(t, n), "Install"), x(t, n, !1, "Patch");
}
function k(e) {
    V(e), B(e);
}
function U(e) {
    let { applicationId: t, branchId: n } = e;
    b.set((0, _.gW)(t, n), "Repair"), x(t, n, !1, "Repair");
}
function G(e) {
    let { applicationId: t, branchId: n, automatic: r } = e;
    x(t, n, r, "Patch");
}
function V(e) {
    let { applicationId: t, branchId: n } = e;
    P(t, n);
}
function F(e) {
    let { applicationId: t, branchId: n } = e,
        r = w(t, n);
    if (r < 1) return !1;
    I.splice(0, 0, I.splice(r, 1)[0]), L(), y && f.A.resume(), O();
}
function B(e) {
    let { applicationId: t, branchId: n } = e,
        r = (0, _.gW)(t, n),
        i = T.indexOf(r);
    -1 !== i && T.splice(i, 1);
}
function j(e) {
    let { state: t } = e;
    !C && ((C = !0), L(), y || f.A.resume());
    let n = y;
    (y = t.paused), (S = t.currentTask), (v = t.nextTask);
    let r = !1;
    (I = I.filter((e) => {
        let { comboId: t } = e,
            { applicationId: n, branchId: a } = (0, _.r0)(t),
            s = h.A.getState(n, a),
            o = d.A.getTargetBuildId(n, a),
            u = d.A.getTargetManifests(n, a);
        if (
            null != s &&
            s.type === m.WTw.UP_TO_DATE &&
            s.buildId === s.targetBuildId &&
            s.buildId === o &&
            i().isEqual(s.manifestIds, s.targetManifestIds) &&
            i().isEqual(s.manifestIds, u)
        ) {
            if ((T.push(t), b.has(t))) {
                switch (b.get(t)) {
                    case "Install":
                        l.BK(n, s);
                        break;
                    case "Repair":
                        l.jU(n, s);
                }
                b.delete(t);
            }
            return (r = !0), !1;
        }
        return !0;
    })),
        L(),
        (r || n !== y) && O();
}
function H() {
    let e = c.default.getToken(),
        t = c.default.getId();
    null != e && f.A.setCredentials(t, e);
}
function Y(e) {
    let { error: t } = e,
        { code: n } = t;
    if (null != n) {
        if (E.includes(n)) H();
        else if (n === g.Hi.APPLICATION_NOT_FOUND) {
            let { context: e } = t;
            if (null != e) {
                let { application_id: t, branch_id: n } = e;
                P(t, n);
            }
        }
    }
}
function W() {
    for (let e of u.Ay.getRunningDiscordApplicationIds()) l.ZT(e, e);
    let e = u.Ay.getVisibleGame();
    return y || null == e || e.pid === R || l.v7(), (R = null == e ? null : e.pid), !1;
}
function K() {
    (0, p.isDesktop)() && H();
}
function z() {
    s.w.remove(A), (0, p.isDesktop)() && f.A.pause();
}
function $(e) {
    return e.map((e) => ("string" == typeof e ? { comboId: e, action: "Patch" } : e));
}
class q extends a.Ay.Store {
    static displayName = "DispatchManagerStore";
    initialize() {
        let e = s.w.get(A) ?? { queue: null, paused: null, userActions: null };
        null != e.queue && (I = $(e.queue)),
            null != e.paused && (y = e.paused),
            null != e.userActions && (b = new Map(Array.from(e.userActions))),
            this.waitFor(h.A, u.Ay),
            this.syncWith([u.Ay], W),
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
        return y;
    }
    getQueuePosition(e, t) {
        return w(e, t);
    }
    isCorruptInstallation() {
        return N;
    }
}
let Z = new q(o.h, {
    DISPATCH_APPLICATION_INSTALL: M,
    DISPATCH_APPLICATION_UPDATE: G,
    DISPATCH_APPLICATION_UNINSTALL: k,
    DISPATCH_APPLICATION_CANCEL: V,
    DISPATCH_APPLICATION_REPAIR: U,
    DISPATCH_APPLICATION_MOVE_UP: F,
    DISPATCH_APPLICATION_REMOVE_FINISHED: B,
    DISPATCH_APPLICATION_STATE_UPDATE: j,
    DISPATCH_APPLICATION_ERROR: Y,
    CONNECTION_OPEN: K,
    LOGOUT: z,
});
