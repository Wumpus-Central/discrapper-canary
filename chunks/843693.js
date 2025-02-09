n.d(t, {
    ZP: () => L,
    wU: () => C
}),
    n(47120);
var i,
    r = n(442837),
    a = n(759174),
    s = n(846519),
    o = n(570140),
    l = n(314897),
    u = n(944486),
    c = n(585483),
    d = n(351780),
    f = n(641033),
    _ = n(524484),
    p = n(981631);
function h(e, t, n) {
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
let m = 7,
    g = 1000,
    E = new Set(),
    v = new a.h(
        function (e) {
            let { userId: t, channelId: n } = e;
            return [t, n];
        },
        function (e) {
            let { userId: t, channelId: n } = e;
            return ''.concat(n, '-').concat(t);
        }
    );
function y(e) {
    return null != e && (e.value > 0 || (null == e ? void 0 : e.multiplier) > 1);
}
let I = new a.h(
        function (e) {
            let {
                messageId: t,
                channelId: n,
                combo: { userId: i }
            } = e;
            return [t, n, i];
        },
        function (e) {
            let {
                messageId: t,
                channelId: n,
                combo: { userId: i }
            } = e;
            return ''.concat(n, '-').concat(i, '-').concat(t);
        }
    ),
    T = (e) => {
        let { userId: t, channelId: n } = e;
        return ''.concat(t, '-').concat(n);
    };
function b(e) {
    var t, n, i, r, a, o;
    let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        u = v.get(T(e)),
        c = {
            ...u,
            ...e,
            value: null !== (n = null !== (t = e.value) && void 0 !== t ? t : null == u ? void 0 : u.value) && void 0 !== n ? n : 0,
            multiplier: Math.min(null !== (r = null !== (i = e.multiplier) && void 0 !== i ? i : null == u ? void 0 : u.multiplier) && void 0 !== r ? r : 1, m),
            decayInterval: null !== (a = null == u ? void 0 : u.decayInterval) && void 0 !== a ? a : new s.Xp()
        };
    v.set(T(e), c),
        l &&
            (null === (o = c.decayInterval) ||
                void 0 === o ||
                o.start(g, () => {
                    let e = v.get(T(c));
                    if (null != e) {
                        let n = c.multiplier !== e.multiplier && c.value !== e.value;
                        if (e.value <= 0 || n) {
                            var t;
                            null === (t = e.decayInterval) || void 0 === t || t.stop(),
                                e.value <= 0 &&
                                    (b({
                                        ...e,
                                        value: 0,
                                        multiplier: 1
                                    }),
                                    D.emitChange());
                        } else
                            b({
                                ...e,
                                value: e.value - 1
                            }),
                                D.emitChange();
                    }
                }));
}
function S(e) {
    I.set(e.messageId, e);
}
function A(e) {
    let { type: t, ...n } = e;
    if (!d.Z.isEnabled()) return !1;
    b(n);
}
function N(e) {
    let { comboMessage: t } = e;
    if (!d.Z.isEnabled()) return !1;
    S(t);
}
function C(e, t, n, i) {
    return !(e !== t || null == n || i.has(n)) && (i.add(n), !0);
}
function R(e) {
    var t, n;
    let {
        channelId: i,
        message: { mentions: r, author: a, nonce: s }
    } = e;
    if (!d.Z.isEnabled()) return !1;
    let o = l.default.getId();
    if (!C(null == a ? void 0 : a.id, o, s, E)) return !1;
    let u = v.get(
        T({
            userId: null !== (t = null == a ? void 0 : a.id) && void 0 !== t ? t : '???',
            channelId: i
        })
    );
    if (d.Z.screenshakeEnabled && d.Z.screenshakeEnabledLocations[_.oZ.MENTION] && null != r && null != r.find((e) => e.id === o)) {
        let e = null != u ? (null !== (n = (0, f.KH)(u, _.qi.LEVEL_4)) && void 0 !== n ? n : 0.001) : 4 * Math.random();
        return (
            c.S.dispatch(p.CkL.SHAKE_APP, {
                duration: 1000,
                intensity: e
            }),
            !0
        );
    }
    return !1;
}
class O extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(l.default, u.Z);
    }
    getComboScore(e, t) {
        let n = v.get(
            T({
                userId: e,
                channelId: t
            })
        );
        return null == n ? 0 : (0, f.Eo)(n);
    }
    getUserCombo(e, t) {
        return v.get(
            T({
                userId: e,
                channelId: t
            })
        );
    }
    isComboing(e, t) {
        let n = this.getUserCombo(e, t);
        return null != n && n.value >= d.Z.combosRequiredCount && y(n);
    }
    getMessageCombo(e) {
        var t;
        let n = I.get(e);
        return null !== (t = null == n ? void 0 : n.combo) && void 0 !== t ? t : void 0;
    }
    getMostRecentMessageCombo(e) {
        let t = I.values(e);
        return t[t.length - 1];
    }
    getUserComboShakeIntensity(e, t, n, i) {
        let r = this.getUserCombo(e, t);
        return null != r ? (0, f.KH)(r, i) * n : 0;
    }
}
h(O, 'displayName', 'PoggermodeStore');
let D = new O(o.Z, {
        POGGERMODE_UPDATE_COMBO: A,
        POGGERMODE_UPDATE_MESSAGE_COMBO: N,
        MESSAGE_CREATE: R
    }),
    L = D;
