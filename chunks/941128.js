n.d(t, { Z: () => J }), n(47120), n(411104), n(653041), n(733860);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(433517),
    l = n(570140),
    u = n(51025),
    c = n(594190),
    d = n(314897),
    f = n(173747),
    _ = n(780570),
    p = n(830168),
    h = n(358085),
    m = n(417363),
    g = n(981631),
    E = n(186901);
function v(e, t, n) {
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
    I = 'DispatchManagerStore',
    T = [],
    b = [],
    S = !1,
    A = null,
    N = null,
    C = !1,
    R = new Map(),
    O = !1,
    D = null;
function L() {
    let e = {
        queue: T,
        paused: S,
        userActions: Array.from(R)
    };
    o.K.set(I, e);
}
function x(e, t) {
    return (null != A && A.applicationId === e && A.branchId === t) || (null != N && N.applicationId === e && N.branchId === t);
}
function P() {
    let e = T[0];
    if (null != e) {
        let { comboId: t, action: n } = e,
            { applicationId: i, branchId: r } = (0, _.CP)(t);
        if (!x(i, r)) {
            let e = d.default.getToken(),
                t = d.default.getId();
            if (null == e) throw Error('missing user token');
            O = !p.Z.setCurrentTask(i, r, n, t, e);
        }
    }
}
function w(e, t) {
    let n = (0, _.Tu)(e, t);
    return T.findIndex((e) => e.comboId === n);
}
function M(e, t, n, i) {
    let r = (0, _.Tu)(e, t),
        a = {
            comboId: r,
            action: i
        },
        s = b.indexOf(r);
    -1 !== s && b.splice(s, 1);
    let o = w(e, t);
    0 !== o && (n ? -1 === o && (T.push(a), P()) : (o > 0 && T.splice(o, 1), T.unshift(a), P())), !n && S && p.Z.resume(), L();
}
function k(e, t) {
    let n = (0, _.Tu)(e, t),
        i = b.indexOf(n);
    -1 !== i && b.splice(i, 1);
    let r = w(e, t);
    -1 !== r && (T.splice(r, 1), L()), P();
}
function U(e) {
    let { applicationId: t, branchId: n } = e;
    R.set((0, _.Tu)(t, n), 'Install'), M(t, n, !1, 'Patch');
}
function G(e) {
    F(e), j(e);
}
function B(e) {
    let { applicationId: t, branchId: n } = e;
    R.set((0, _.Tu)(t, n), 'Repair'), M(t, n, !1, 'Repair');
}
function Z(e) {
    let { applicationId: t, branchId: n, automatic: i } = e;
    M(t, n, i, 'Patch');
}
function F(e) {
    let { applicationId: t, branchId: n } = e;
    k(t, n);
}
function V(e) {
    let { applicationId: t, branchId: n } = e,
        i = w(t, n);
    if (i < 1) return !1;
    T.splice(0, 0, T.splice(i, 1)[0]), P(), S && p.Z.resume(), L();
}
function j(e) {
    let { applicationId: t, branchId: n } = e,
        i = (0, _.Tu)(t, n),
        r = b.indexOf(i);
    -1 !== r && b.splice(r, 1);
}
function H(e) {
    let { state: t } = e;
    C || ((C = !0), P(), S || p.Z.resume());
    let n = S;
    (S = t.paused), (A = t.currentTask), (N = t.nextTask);
    let i = !1;
    (T = T.filter((e) => {
        let { comboId: t } = e,
            { applicationId: n, branchId: r } = (0, _.CP)(t),
            s = m.Z.getState(n, r),
            o = f.Z.getTargetBuildId(n, r),
            l = f.Z.getTargetManifests(n, r);
        if (null != s && s.type === g.vxO.UP_TO_DATE && s.buildId === s.targetBuildId && s.buildId === o && a().isEqual(s.manifestIds, s.targetManifestIds) && a().isEqual(s.manifestIds, l)) {
            if ((b.push(t), R.has(t))) {
                switch (R.get(t)) {
                    case 'Install':
                        u.XT(n, s);
                        break;
                    case 'Repair':
                        u.Wx(n, s);
                }
                R.delete(t);
            }
            return (i = !0), !1;
        }
        return !0;
    })),
        P(),
        (i || n !== S) && L();
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
    for (let e of c.ZP.getRunningDiscordApplicationIds()) u.al(e, e);
    let e = c.ZP.getVisibleGame();
    return S || null == e || e.pid === D || u.wO(), (D = null == e ? null : e.pid), !1;
}
function z() {
    (0, h.isDesktop)() && Y();
}
function q() {
    o.K.remove(I), (0, h.isDesktop)() && p.Z.pause();
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
class X extends (i = s.ZP.Store) {
    initialize() {
        var e;
        let t =
            null !== (e = o.K.get(I)) && void 0 !== e
                ? e
                : {
                      queue: null,
                      paused: null,
                      userActions: null
                  };
        null != t.queue && (T = Q(t.queue)), null != t.paused && (S = t.paused), null != t.userActions && (R = new Map(Array.from(t.userActions))), this.waitFor(m.Z, c.ZP), this.syncWith([c.ZP], K), this.waitFor(m.Z);
    }
    get activeItems() {
        return T.map((e) => {
            let { comboId: t } = e;
            return (0, _.CP)(t);
        });
    }
    get finishedItems() {
        return b.map(_.CP);
    }
    get paused() {
        return S;
    }
    getQueuePosition(e, t) {
        return w(e, t);
    }
    isCorruptInstallation() {
        return O;
    }
}
v(X, 'displayName', 'DispatchManagerStore');
let J = new X(l.Z, {
    DISPATCH_APPLICATION_INSTALL: U,
    DISPATCH_APPLICATION_UPDATE: Z,
    DISPATCH_APPLICATION_UNINSTALL: G,
    DISPATCH_APPLICATION_CANCEL: F,
    DISPATCH_APPLICATION_REPAIR: B,
    DISPATCH_APPLICATION_MOVE_UP: V,
    DISPATCH_APPLICATION_REMOVE_FINISHED: j,
    DISPATCH_APPLICATION_STATE_UPDATE: H,
    DISPATCH_APPLICATION_ERROR: W,
    CONNECTION_OPEN: z,
    LOGOUT: q
});
