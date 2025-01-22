var i,
    a,
    o,
    s = r(47120);
var l = r(411104);
var u = r(653041);
var c = r(733860);
var d = r(392711),
    f = r.n(d),
    p = r(442837),
    h = r(433517),
    _ = r(570140),
    m = r(51025),
    g = r(594190),
    E = r(314897),
    v = r(173747),
    y = r(780570),
    b = r(830168),
    I = r(358085),
    T = r(417363),
    S = r(981631),
    A = r(186901);
function C(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e.INSTALL = 'Install'), (e.REPAIR = 'Repair');
})(i || (i = {})),
    !(function (e) {
        (e.PATCH = 'Patch'), (e.REPAIR = 'Repair');
    })(a || (a = {}));
let N = [A.ff.AUTHENTICATION_FAILED, A.ff.NOT_ENTITLED],
    R = 'DispatchManagerStore',
    O = [],
    D = [],
    x = !1,
    L = null,
    w = null,
    P = !1,
    M = new Map(),
    k = !1,
    U = null;
function B() {
    let e = {
        queue: O,
        paused: x,
        userActions: Array.from(M)
    };
    h.K.set(R, e);
}
function G(e, n) {
    return (null != L && L.applicationId === e && L.branchId === n) || (null != w && w.applicationId === e && w.branchId === n) || !1;
}
function Z() {
    let e = O[0];
    if (null != e) {
        let { comboId: n, action: r } = e,
            { applicationId: i, branchId: a } = (0, y.CP)(n);
        if (!G(i, a)) {
            let e = E.default.getToken(),
                n = E.default.getId();
            if (null == e) throw Error('missing user token');
            k = !b.Z.setCurrentTask(i, a, r, n, e);
        }
    }
}
function F(e, n) {
    let r = (0, y.Tu)(e, n);
    return O.findIndex((e) => e.comboId === r);
}
function V(e, n, r, i) {
    let a = (0, y.Tu)(e, n),
        o = {
            comboId: a,
            action: i
        },
        s = D.indexOf(a);
    -1 !== s && D.splice(s, 1);
    let l = F(e, n);
    0 !== l && (r ? -1 === l && (O.push(o), Z()) : (l > 0 && O.splice(l, 1), O.unshift(o), Z())), !r && x && b.Z.resume(), B();
}
function j(e, n) {
    let r = (0, y.Tu)(e, n),
        i = D.indexOf(r);
    -1 !== i && D.splice(i, 1);
    let a = F(e, n);
    -1 !== a && (O.splice(a, 1), B()), Z();
}
function H(e) {
    let { applicationId: n, branchId: r } = e;
    M.set((0, y.Tu)(n, r), 'Install'), V(n, r, !1, 'Patch');
}
function Y(e) {
    z(e), Q(e);
}
function W(e) {
    let { applicationId: n, branchId: r } = e;
    M.set((0, y.Tu)(n, r), 'Repair'), V(n, r, !1, 'Repair');
}
function K(e) {
    let { applicationId: n, branchId: r, automatic: i } = e;
    V(n, r, i, 'Patch');
}
function z(e) {
    let { applicationId: n, branchId: r } = e;
    j(n, r);
}
function q(e) {
    let { applicationId: n, branchId: r } = e,
        i = F(n, r);
    if (i < 1) return !1;
    O.splice(0, 0, O.splice(i, 1)[0]), Z(), x && b.Z.resume(), B();
}
function Q(e) {
    let { applicationId: n, branchId: r } = e,
        i = (0, y.Tu)(n, r),
        a = D.indexOf(i);
    -1 !== a && D.splice(a, 1);
}
function X(e) {
    let { state: n } = e;
    !P && ((P = !0), Z(), !x && b.Z.resume());
    let r = x;
    (x = n.paused), (L = n.currentTask), (w = n.nextTask);
    let i = !1;
    (O = O.filter((e) => {
        let { comboId: n } = e,
            { applicationId: r, branchId: a } = (0, y.CP)(n),
            o = T.Z.getState(r, a),
            s = v.Z.getTargetBuildId(r, a),
            l = v.Z.getTargetManifests(r, a);
        if (null != o && o.type === S.vxO.UP_TO_DATE && o.buildId === o.targetBuildId && o.buildId === s && f().isEqual(o.manifestIds, o.targetManifestIds) && f().isEqual(o.manifestIds, l)) {
            if ((D.push(n), M.has(n))) {
                switch (M.get(n)) {
                    case 'Install':
                        m.XT(r, o);
                        break;
                    case 'Repair':
                        m.Wx(r, o);
                }
                M.delete(n);
            }
            return (i = !0), !1;
        }
        return !0;
    })),
        Z(),
        (i || r !== x) && B();
}
function J() {
    let e = E.default.getToken(),
        n = E.default.getId();
    if (null != e) b.Z.setCredentials(n, e);
}
function $(e) {
    let { error: n } = e,
        { code: r } = n;
    if (null != r) {
        if (N.includes(r)) J();
        else if (r === A.ff.APPLICATION_NOT_FOUND) {
            let { context: e } = n;
            if (null != e) {
                let { application_id: n, branch_id: r } = e;
                j(n, r);
            }
        }
    }
}
function ee() {
    for (let e of g.ZP.getRunningDiscordApplicationIds()) m.al(e, e);
    let e = g.ZP.getVisibleGame();
    return !x && null != e && e.pid !== U && m.wO(), (U = null == e ? null : e.pid), !1;
}
function et() {
    (0, I.isDesktop)() && J();
}
function en() {
    h.K.remove(R), (0, I.isDesktop)() && b.Z.pause();
}
function er(e) {
    return e.map((e) =>
        'string' == typeof e
            ? {
                  comboId: e,
                  action: 'Patch'
              }
            : e
    );
}
class ei extends (o = p.ZP.Store) {
    initialize() {
        var e;
        let n =
            null !== (e = h.K.get(R)) && void 0 !== e
                ? e
                : {
                      queue: null,
                      paused: null,
                      userActions: null
                  };
        null != n.queue && (O = er(n.queue)), null != n.paused && (x = n.paused), null != n.userActions && (M = new Map(Array.from(n.userActions))), this.waitFor(T.Z, g.ZP), this.syncWith([g.ZP], ee), this.waitFor(T.Z);
    }
    get activeItems() {
        return O.map((e) => {
            let { comboId: n } = e;
            return (0, y.CP)(n);
        });
    }
    get finishedItems() {
        return D.map(y.CP);
    }
    get paused() {
        return x;
    }
    getQueuePosition(e, n) {
        return F(e, n);
    }
    isCorruptInstallation() {
        return k;
    }
}
C(ei, 'displayName', 'DispatchManagerStore'),
    (n.Z = new ei(_.Z, {
        DISPATCH_APPLICATION_INSTALL: H,
        DISPATCH_APPLICATION_UPDATE: K,
        DISPATCH_APPLICATION_UNINSTALL: Y,
        DISPATCH_APPLICATION_CANCEL: z,
        DISPATCH_APPLICATION_REPAIR: W,
        DISPATCH_APPLICATION_MOVE_UP: q,
        DISPATCH_APPLICATION_REMOVE_FINISHED: Q,
        DISPATCH_APPLICATION_STATE_UPDATE: X,
        DISPATCH_APPLICATION_ERROR: $,
        CONNECTION_OPEN: et,
        LOGOUT: en
    }));
