n.d(t, { Z: () => J }), n(47120), n(411104), n(653041), n(733860);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let y = [E.ff.AUTHENTICATION_FAILED, E.ff.NOT_ENTITLED],
    v = 'DispatchManagerStore',
    O = [],
    I = [],
    S = !1,
    T = null,
    N = null,
    A = !1,
    C = new Map(),
    R = !1,
    P = null;
function w() {
    let e = {
        queue: O,
        paused: S,
        userActions: Array.from(C)
    };
    s.K.set(v, e);
}
function D(e, t) {
    return (null != T && T.applicationId === e && T.branchId === t) || (null != N && N.applicationId === e && N.branchId === t);
}
function L() {
    let e = O[0];
    if (null != e) {
        let { comboId: t, action: n } = e,
            { applicationId: r, branchId: i } = (0, _.CP)(t);
        if (!D(r, i)) {
            let e = d.default.getToken(),
                t = d.default.getId();
            if (null == e) throw Error('missing user token');
            R = !p.Z.setCurrentTask(r, i, n, t, e);
        }
    }
}
function x(e, t) {
    let n = (0, _.Tu)(e, t);
    return O.findIndex((e) => e.comboId === n);
}
function M(e, t, n, r) {
    let i = (0, _.Tu)(e, t),
        o = {
            comboId: i,
            action: r
        },
        a = I.indexOf(i);
    -1 !== a && I.splice(a, 1);
    let s = x(e, t);
    0 !== s && (n ? -1 === s && (O.push(o), L()) : (s > 0 && O.splice(s, 1), O.unshift(o), L())), !n && S && p.Z.resume(), w();
}
function k(e, t) {
    let n = (0, _.Tu)(e, t),
        r = I.indexOf(n);
    -1 !== r && I.splice(r, 1);
    let i = x(e, t);
    -1 !== i && (O.splice(i, 1), w()), L();
}
function j(e) {
    let { applicationId: t, branchId: n } = e;
    C.set((0, _.Tu)(t, n), 'Install'), M(t, n, !1, 'Patch');
}
function U(e) {
    F(e), Z(e);
}
function G(e) {
    let { applicationId: t, branchId: n } = e;
    C.set((0, _.Tu)(t, n), 'Repair'), M(t, n, !1, 'Repair');
}
function B(e) {
    let { applicationId: t, branchId: n, automatic: r } = e;
    M(t, n, r, 'Patch');
}
function F(e) {
    let { applicationId: t, branchId: n } = e;
    k(t, n);
}
function V(e) {
    let { applicationId: t, branchId: n } = e,
        r = x(t, n);
    if (r < 1) return !1;
    O.splice(0, 0, O.splice(r, 1)[0]), L(), S && p.Z.resume(), w();
}
function Z(e) {
    let { applicationId: t, branchId: n } = e,
        r = (0, _.Tu)(t, n),
        i = I.indexOf(r);
    -1 !== i && I.splice(i, 1);
}
function H(e) {
    let { state: t } = e;
    !A && ((A = !0), L(), S || p.Z.resume());
    let n = S;
    (S = t.paused), (T = t.currentTask), (N = t.nextTask);
    let r = !1;
    (O = O.filter((e) => {
        let { comboId: t } = e,
            { applicationId: n, branchId: i } = (0, _.CP)(t),
            a = m.Z.getState(n, i),
            s = f.Z.getTargetBuildId(n, i),
            l = f.Z.getTargetManifests(n, i);
        if (null != a && a.type === g.vxO.UP_TO_DATE && a.buildId === a.targetBuildId && a.buildId === s && o().isEqual(a.manifestIds, a.targetManifestIds) && o().isEqual(a.manifestIds, l)) {
            if ((I.push(t), C.has(t))) {
                switch (C.get(t)) {
                    case 'Install':
                        c.XT(n, a);
                        break;
                    case 'Repair':
                        c.Wx(n, a);
                }
                C.delete(t);
            }
            return (r = !0), !1;
        }
        return !0;
    })),
        L(),
        (r || n !== S) && w();
}
function W() {
    let e = d.default.getToken(),
        t = d.default.getId();
    null != e && p.Z.setCredentials(t, e);
}
function Y(e) {
    let { error: t } = e,
        { code: n } = t;
    if (null != n) {
        if (y.includes(n)) W();
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
    return S || null == e || e.pid === P || c.wO(), (P = null == e ? null : e.pid), !1;
}
function z() {
    (0, h.isDesktop)() && W();
}
function q() {
    s.K.remove(v), (0, h.isDesktop)() && p.Z.pause();
}
function Q(e) {
    return e.map((e) =>
        'string' == typeof e
            ? {
                  comboId: e,
                  action: 'Patch'
              }
            : e
    );
}
class X extends (r = a.ZP.Store) {
    initialize() {
        var e;
        let t =
            null != (e = s.K.get(v))
                ? e
                : {
                      queue: null,
                      paused: null,
                      userActions: null
                  };
        null != t.queue && (O = Q(t.queue)), null != t.paused && (S = t.paused), null != t.userActions && (C = new Map(Array.from(t.userActions))), this.waitFor(m.Z, u.ZP), this.syncWith([u.ZP], K), this.waitFor(m.Z);
    }
    get activeItems() {
        return O.map((e) => {
            let { comboId: t } = e;
            return (0, _.CP)(t);
        });
    }
    get finishedItems() {
        return I.map(_.CP);
    }
    get paused() {
        return S;
    }
    getQueuePosition(e, t) {
        return x(e, t);
    }
    isCorruptInstallation() {
        return R;
    }
}
b(X, 'displayName', 'DispatchManagerStore');
let J = new X(l.Z, {
    DISPATCH_APPLICATION_INSTALL: j,
    DISPATCH_APPLICATION_UPDATE: B,
    DISPATCH_APPLICATION_UNINSTALL: U,
    DISPATCH_APPLICATION_CANCEL: F,
    DISPATCH_APPLICATION_REPAIR: G,
    DISPATCH_APPLICATION_MOVE_UP: V,
    DISPATCH_APPLICATION_REMOVE_FINISHED: Z,
    DISPATCH_APPLICATION_STATE_UPDATE: H,
    DISPATCH_APPLICATION_ERROR: Y,
    CONNECTION_OPEN: z,
    LOGOUT: q
});
