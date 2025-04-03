n.d(t, {
    ZP: () => k,
    wU: () => D
}),
    n(47120);
var r,
    i = n(442837),
    o = n(759174),
    a = n(846519),
    s = n(570140),
    l = n(314897),
    c = n(944486),
    u = n(585483),
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
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let v = 7,
    O = 1000,
    I = new Set(),
    S = new o.h(
        function (e) {
            let { userId: t, channelId: n } = e;
            return [t, n];
        },
        function (e) {
            let { userId: t, channelId: n } = e;
            return ''.concat(n, '-').concat(t);
        }
    );
function T(e) {
    return null != e && (e.value > 0 || (null == e ? void 0 : e.multiplier) > 1);
}
let N = new o.h(
        function (e) {
            let {
                messageId: t,
                channelId: n,
                combo: { userId: r }
            } = e;
            return [t, n, r];
        },
        function (e) {
            let {
                messageId: t,
                channelId: n,
                combo: { userId: r }
            } = e;
            return ''.concat(n, '-').concat(r, '-').concat(t);
        }
    ),
    A = (e) => {
        let { userId: t, channelId: n } = e;
        return ''.concat(t, '-').concat(n);
    };
function C(e) {
    var t, n, r, i, o, s;
    let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        c = S.get(A(e)),
        u = E(m({}, c, e), {
            value: null != (n = null != (t = e.value) ? t : null == c ? void 0 : c.value) ? n : 0,
            multiplier: Math.min(null != (i = null != (r = e.multiplier) ? r : null == c ? void 0 : c.multiplier) ? i : 1, v),
            decayInterval: null != (o = null == c ? void 0 : c.decayInterval) ? o : new a.Xp()
        });
    S.set(A(e), u),
        l &&
            (null == (s = u.decayInterval) ||
                s.start(O, () => {
                    let e = S.get(A(u));
                    if (null != e) {
                        let n = u.multiplier !== e.multiplier && u.value !== e.value;
                        if (e.value <= 0 || n) {
                            var t;
                            null == (t = e.decayInterval) || t.stop(),
                                e.value <= 0 &&
                                    (C(
                                        E(m({}, e), {
                                            value: 0,
                                            multiplier: 1
                                        })
                                    ),
                                    M.emitChange());
                        } else C(E(m({}, e), { value: e.value - 1 })), M.emitChange();
                    }
                }));
}
function R(e) {
    N.set(e.messageId, e);
}
function P(e) {
    var { type: t } = e,
        n = b(e, ['type']);
    if (!d.Z.isEnabled()) return !1;
    C(n);
}
function w(e) {
    let { comboMessage: t } = e;
    if (!d.Z.isEnabled()) return !1;
    R(t);
}
function D(e, t, n, r) {
    return !(e !== t || null == n || r.has(n)) && (r.add(n), !0);
}
function L(e) {
    var t, n;
    let {
        channelId: r,
        message: { mentions: i, author: o, nonce: a }
    } = e;
    if (!d.Z.isEnabled()) return !1;
    let s = l.default.getId();
    if (!D(null == o ? void 0 : o.id, s, a, I)) return !1;
    let c = S.get(
        A({
            userId: null != (t = null == o ? void 0 : o.id) ? t : '???',
            channelId: r
        })
    );
    if (d.Z.screenshakeEnabled && d.Z.screenshakeEnabledLocations[_.oZ.MENTION] && null != i && null != i.find((e) => e.id === s)) {
        let e = null != c ? (null != (n = (0, f.KH)(c, _.qi.LEVEL_4)) ? n : 0.001) : 4 * Math.random();
        return (
            u.S.dispatch(p.CkL.SHAKE_APP, {
                duration: 1000,
                intensity: e
            }),
            !0
        );
    }
    return !1;
}
class x extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(l.default, c.Z);
    }
    getComboScore(e, t) {
        let n = S.get(
            A({
                userId: e,
                channelId: t
            })
        );
        return null == n ? 0 : (0, f.Eo)(n);
    }
    getUserCombo(e, t) {
        return S.get(
            A({
                userId: e,
                channelId: t
            })
        );
    }
    isComboing(e, t) {
        let n = this.getUserCombo(e, t);
        return null != n && n.value >= d.Z.combosRequiredCount && T(n);
    }
    getMessageCombo(e) {
        var t;
        let n = N.get(e);
        return null != (t = null == n ? void 0 : n.combo) ? t : void 0;
    }
    getMostRecentMessageCombo(e) {
        let t = N.values(e);
        return t[t.length - 1];
    }
    getUserComboShakeIntensity(e, t, n, r) {
        let i = this.getUserCombo(e, t);
        return null != i ? (0, f.KH)(i, r) * n : 0;
    }
}
h(x, 'displayName', 'PoggermodeStore');
let M = new x(s.Z, {
        POGGERMODE_UPDATE_COMBO: P,
        POGGERMODE_UPDATE_MESSAGE_COMBO: w,
        MESSAGE_CREATE: L
    }),
    k = M;
