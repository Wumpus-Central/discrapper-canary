n.d(t, { Z: () => J }), n(388685), n(415506), n(539854), n(290780);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(433517),
    l = n(570140),
    c = n(51025),
    u = n(594190),
    d = n(314897),
    f = n(173747),
    _ = n(780570),
    p = n(830168),
    h = n(358085),
    m = n(417363),
    g = n(981631),
    E = n(186901);
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
let y = [E.ff.AUTHENTICATION_FAILED, E.ff.NOT_ENTITLED],
    O = "DispatchManagerStore",
    v = [],
    I = [],
    T = !1,
    S = null,
    A = null,
    C = !1,
    N = new Map(),
    R = !1,
    P = null;
function D() {
    let e = {
        queue: v,
        paused: T,
        userActions: Array.from(N),
    };
    s.K.set(O, e);
}
function w(e, t) {
    return (
        (null != S && S.applicationId === e && S.branchId === t) ||
        (null != A && A.applicationId === e && A.branchId === t)
    );
}
function L() {
    let e = v[0];
    if (null != e) {
        let { comboId: t, action: n } = e,
            { applicationId: r, branchId: i } = (0, _.CP)(t);
        if (!w(r, i)) {
            let e = d.default.getToken(),
                t = d.default.getId();
            if (null == e) throw Error("missing user token");
            R = !p.Z.setCurrentTask(r, i, n, t, e);
        }
    }
}
function x(e, t) {
    let n = (0, _.Tu)(e, t);
    return v.findIndex((e) => e.comboId === n);
}
function M(e, t, n, r) {
    let i = (0, _.Tu)(e, t),
        a = {
            comboId: i,
            action: r,
        },
        o = I.indexOf(i);
    -1 !== o && I.splice(o, 1);
    let s = x(e, t);
    0 !== s && (n ? -1 === s && (v.push(a), L()) : (s > 0 && v.splice(s, 1), v.unshift(a), L())),
        !n && T && p.Z.resume(),
        D();
}
function k(e, t) {
    let n = (0, _.Tu)(e, t),
        r = I.indexOf(n);
    -1 !== r && I.splice(r, 1);
    let i = x(e, t);
    -1 !== i && (v.splice(i, 1), D()), L();
}
function j(e) {
    let { applicationId: t, branchId: n } = e;
    N.set((0, _.Tu)(t, n), "Install"), M(t, n, !1, "Patch");
}
function U(e) {
    Z(e), V(e);
}
function G(e) {
    let { applicationId: t, branchId: n } = e;
    N.set((0, _.Tu)(t, n), "Repair"), M(t, n, !1, "Repair");
}
function B(e) {
    let { applicationId: t, branchId: n, automatic: r } = e;
    M(t, n, r, "Patch");
}
function Z(e) {
    let { applicationId: t, branchId: n } = e;
    k(t, n);
}
function F(e) {
    let { applicationId: t, branchId: n } = e,
        r = x(t, n);
    if (r < 1) return !1;
    v.splice(0, 0, v.splice(r, 1)[0]), L(), T && p.Z.resume(), D();
}
function V(e) {
    let { applicationId: t, branchId: n } = e,
        r = (0, _.Tu)(t, n),
        i = I.indexOf(r);
    -1 !== i && I.splice(i, 1);
}
function H(e) {
    let { state: t } = e;
    !C && ((C = !0), L(), T || p.Z.resume());
    let n = T;
    (T = t.paused), (S = t.currentTask), (A = t.nextTask);
    let r = !1;
    (v = v.filter((e) => {
        let { comboId: t } = e,
            { applicationId: n, branchId: i } = (0, _.CP)(t),
            o = m.Z.getState(n, i),
            s = f.Z.getTargetBuildId(n, i),
            l = f.Z.getTargetManifests(n, i);
        if (
            null != o &&
            o.type === g.vxO.UP_TO_DATE &&
            o.buildId === o.targetBuildId &&
            o.buildId === s &&
            a().isEqual(o.manifestIds, o.targetManifestIds) &&
            a().isEqual(o.manifestIds, l)
        ) {
            if ((I.push(t), N.has(t))) {
                switch (N.get(t)) {
                    case "Install":
                        c.XT(n, o);
                        break;
                    case "Repair":
                        c.Wx(n, o);
                }
                N.delete(t);
            }
            return (r = !0), !1;
        }
        return !0;
    })),
        L(),
        (r || n !== T) && D();
}
function Y() {
    let e = d.default.getToken(),
        t = d.default.getId();
    null != e && p.Z.setCredentials(t, e);
}
function W(e) {
    let { error: t } = e,
        { code: n } = t;
    if (null != n) {
        if (y.includes(n)) Y();
        else if (n === E.ff.APPLICATION_NOT_FOUND) {
            let { context: e } = t;
            if (null != e) {
                let { application_id: t, branch_id: n } = e;
                k(t, n);
            }
        }
    }
}
function K() {
    for (let e of u.ZP.getRunningDiscordApplicationIds()) c.al(e, e);
    let e = u.ZP.getVisibleGame();
    return T || null == e || e.pid === P || c.wO(), (P = null == e ? null : e.pid), !1;
}
function z() {
    (0, h.isDesktop)() && Y();
}
function q() {
    s.K.remove(O), (0, h.isDesktop)() && p.Z.pause();
}
function X(e) {
    return e.map((e) =>
        "string" == typeof e
            ? {
                  comboId: e,
                  action: "Patch",
              }
            : e,
    );
}
class Q extends (r = o.ZP.Store) {
    initialize() {
        var e;
        let t =
            null != (e = s.K.get(O))
                ? e
                : {
                      queue: null,
                      paused: null,
                      userActions: null,
                  };
        null != t.queue && (v = X(t.queue)),
            null != t.paused && (T = t.paused),
            null != t.userActions && (N = new Map(Array.from(t.userActions))),
            this.waitFor(m.Z, u.ZP),
            this.syncWith([u.ZP], K),
            this.waitFor(f.Z, d.default, m.Z);
    }
    get activeItems() {
        return v.map((e) => {
            let { comboId: t } = e;
            return (0, _.CP)(t);
        });
    }
    get finishedItems() {
        return I.map(_.CP);
    }
    get paused() {
        return T;
    }
    getQueuePosition(e, t) {
        return x(e, t);
    }
    isCorruptInstallation() {
        return R;
    }
}
b(Q, "displayName", "DispatchManagerStore");
let J = new Q(l.Z, {
    DISPATCH_APPLICATION_INSTALL: j,
    DISPATCH_APPLICATION_UPDATE: B,
    DISPATCH_APPLICATION_UNINSTALL: U,
    DISPATCH_APPLICATION_CANCEL: Z,
    DISPATCH_APPLICATION_REPAIR: G,
    DISPATCH_APPLICATION_MOVE_UP: F,
    DISPATCH_APPLICATION_REMOVE_FINISHED: V,
    DISPATCH_APPLICATION_STATE_UPDATE: H,
    DISPATCH_APPLICATION_ERROR: W,
    CONNECTION_OPEN: z,
    LOGOUT: q,
});
