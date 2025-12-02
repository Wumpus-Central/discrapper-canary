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
    p = n(780570),
    _ = n(830168),
    m = n(358085),
    h = n(417363),
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
    S = [],
    I = !1,
    T = null,
    A = null,
    C = !1,
    N = new Map(),
    P = !1,
    R = null;
function w() {
    let e = {
        queue: v,
        paused: I,
        userActions: Array.from(N),
    };
    s.K.set(O, e);
}
function D(e, t) {
    return (
        (null != T && T.applicationId === e && T.branchId === t) ||
        (null != A && A.applicationId === e && A.branchId === t)
    );
}
function x() {
    let e = v[0];
    if (null != e) {
        let { comboId: t, action: n } = e,
            { applicationId: r, branchId: i } = (0, p.CP)(t);
        if (!D(r, i)) {
            let e = d.default.getToken(),
                t = d.default.getId();
            if (null == e) throw Error("missing user token");
            P = !_.Z.setCurrentTask(r, i, n, t, e);
        }
    }
}
function L(e, t) {
    let n = (0, p.Tu)(e, t);
    return v.findIndex((e) => e.comboId === n);
}
function j(e, t, n, r) {
    let i = (0, p.Tu)(e, t),
        a = {
            comboId: i,
            action: r,
        },
        o = S.indexOf(i);
    -1 !== o && S.splice(o, 1);
    let s = L(e, t);
    0 !== s && (n ? -1 === s && (v.push(a), x()) : (s > 0 && v.splice(s, 1), v.unshift(a), x())),
        !n && I && _.Z.resume(),
        w();
}
function M(e, t) {
    let n = (0, p.Tu)(e, t),
        r = S.indexOf(n);
    -1 !== r && S.splice(r, 1);
    let i = L(e, t);
    -1 !== i && (v.splice(i, 1), w()), x();
}
function k(e) {
    let { applicationId: t, branchId: n } = e;
    N.set((0, p.Tu)(t, n), "Install"), j(t, n, !1, "Patch");
}
function U(e) {
    B(e), V(e);
}
function G(e) {
    let { applicationId: t, branchId: n } = e;
    N.set((0, p.Tu)(t, n), "Repair"), j(t, n, !1, "Repair");
}
function Z(e) {
    let { applicationId: t, branchId: n, automatic: r } = e;
    j(t, n, r, "Patch");
}
function B(e) {
    let { applicationId: t, branchId: n } = e;
    M(t, n);
}
function F(e) {
    let { applicationId: t, branchId: n } = e,
        r = L(t, n);
    if (r < 1) return !1;
    v.splice(0, 0, v.splice(r, 1)[0]), x(), I && _.Z.resume(), w();
}
function V(e) {
    let { applicationId: t, branchId: n } = e,
        r = (0, p.Tu)(t, n),
        i = S.indexOf(r);
    -1 !== i && S.splice(i, 1);
}
function H(e) {
    let { state: t } = e;
    !C && ((C = !0), x(), I || _.Z.resume());
    let n = I;
    (I = t.paused), (T = t.currentTask), (A = t.nextTask);
    let r = !1;
    (v = v.filter((e) => {
        let { comboId: t } = e,
            { applicationId: n, branchId: i } = (0, p.CP)(t),
            o = h.Z.getState(n, i),
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
            if ((S.push(t), N.has(t))) {
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
        x(),
        (r || n !== I) && w();
}
function Y() {
    let e = d.default.getToken(),
        t = d.default.getId();
    null != e && _.Z.setCredentials(t, e);
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
                M(t, n);
            }
        }
    }
}
function K() {
    for (let e of u.ZP.getRunningDiscordApplicationIds()) c.al(e, e);
    let e = u.ZP.getVisibleGame();
    return I || null == e || e.pid === R || c.wO(), (R = null == e ? null : e.pid), !1;
}
function z() {
    (0, m.isDesktop)() && Y();
}
function q() {
    s.K.remove(O), (0, m.isDesktop)() && _.Z.pause();
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
            null != t.paused && (I = t.paused),
            null != t.userActions && (N = new Map(Array.from(t.userActions))),
            this.waitFor(h.Z, u.ZP),
            this.syncWith([u.ZP], K),
            this.waitFor(f.Z, d.default, h.Z);
    }
    get activeItems() {
        return v.map((e) => {
            let { comboId: t } = e;
            return (0, p.CP)(t);
        });
    }
    get finishedItems() {
        return S.map(p.CP);
    }
    get paused() {
        return I;
    }
    getQueuePosition(e, t) {
        return L(e, t);
    }
    isCorruptInstallation() {
        return P;
    }
}
b(Q, "displayName", "DispatchManagerStore");
let J = new Q(l.Z, {
    DISPATCH_APPLICATION_INSTALL: k,
    DISPATCH_APPLICATION_UPDATE: Z,
    DISPATCH_APPLICATION_UNINSTALL: U,
    DISPATCH_APPLICATION_CANCEL: B,
    DISPATCH_APPLICATION_REPAIR: G,
    DISPATCH_APPLICATION_MOVE_UP: F,
    DISPATCH_APPLICATION_REMOVE_FINISHED: V,
    DISPATCH_APPLICATION_STATE_UPDATE: H,
    DISPATCH_APPLICATION_ERROR: W,
    CONNECTION_OPEN: z,
    LOGOUT: q,
});
