n.d(t, {
    ZP: () => M,
    wU: () => w,
}),
    n(388685);
var r,
    i = n(442837),
    a = n(759174),
    o = n(846519),
    s = n(570140),
    l = n(314897),
    c = n(944486),
    u = n(585483),
    d = n(351780),
    f = n(641033),
    p = n(524484),
    _ = n(981631);
function m(e, t, n) {
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
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let O = 7,
    v = 1000,
    S = new Set(),
    I = new a.h(
        function (e) {
            let { userId: t, channelId: n } = e;
            return [t, n];
        },
        function (e) {
            let { userId: t, channelId: n } = e;
            return "".concat(n, "-").concat(t);
        },
    );
function T(e) {
    return null != e && (e.value > 0 || (null == e ? void 0 : e.multiplier) > 1);
}
let A = new a.h(
        function (e) {
            let {
                messageId: t,
                channelId: n,
                combo: { userId: r },
            } = e;
            return [t, n, r];
        },
        function (e) {
            let {
                messageId: t,
                channelId: n,
                combo: { userId: r },
            } = e;
            return "".concat(n, "-").concat(r, "-").concat(t);
        },
    ),
    C = (e) => {
        let { userId: t, channelId: n } = e;
        return "".concat(t, "-").concat(n);
    };
function N(e) {
    var t, n, r, i, a, s;
    let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        c = I.get(C(e)),
        u = E(h({}, c, e), {
            value: null != (n = null != (t = e.value) ? t : null == c ? void 0 : c.value) ? n : 0,
            multiplier: Math.min(
                null != (i = null != (r = e.multiplier) ? r : null == c ? void 0 : c.multiplier) ? i : 1,
                O,
            ),
            decayInterval: null != (a = null == c ? void 0 : c.decayInterval) ? a : new o.Xp(),
        });
    I.set(C(e), u),
        l &&
            (null == (s = u.decayInterval) ||
                s.start(v, () => {
                    let e = I.get(C(u));
                    if (null != e) {
                        let n = u.multiplier !== e.multiplier && u.value !== e.value;
                        if (e.value <= 0 || n) {
                            var t;
                            null == (t = e.decayInterval) || t.stop(),
                                e.value <= 0 &&
                                    (N(
                                        E(h({}, e), {
                                            value: 0,
                                            multiplier: 1,
                                        }),
                                    ),
                                    j.emitChange());
                        } else N(E(h({}, e), { value: e.value - 1 })), j.emitChange();
                    }
                }));
}
function P(e) {
    A.set(e.messageId, e);
}
function R(e) {
    var { type: t } = e,
        n = b(e, ["type"]);
    if (!d.Z.isEnabled()) return !1;
    N(n);
}
function D(e) {
    let { comboMessage: t } = e;
    if (!d.Z.isEnabled()) return !1;
    P(t);
}
function w(e, t, n, r) {
    return !(e !== t || null == n || r.has(n)) && (r.add(n), !0);
}
function x(e) {
    var t, n;
    let {
        channelId: r,
        message: { mentions: i, author: a, nonce: o },
    } = e;
    if (!d.Z.isEnabled()) return !1;
    let s = l.default.getId();
    if (!w(null == a ? void 0 : a.id, s, o, S)) return !1;
    let c = I.get(
        C({
            userId: null != (t = null == a ? void 0 : a.id) ? t : "???",
            channelId: r,
        }),
    );
    if (
        d.Z.screenshakeEnabled &&
        d.Z.screenshakeEnabledLocations[p.oZ.MENTION] &&
        null != i &&
        null != i.find((e) => e.id === s)
    ) {
        let e = null != c ? (null != (n = (0, f.KH)(c, p.qi.LEVEL_4)) ? n : 0.001) : 4 * Math.random();
        return (
            u.S.dispatch(_.CkL.SHAKE_APP, {
                duration: 1000,
                intensity: e,
            }),
            !0
        );
    }
    return !1;
}
class L extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(l.default, d.Z, c.Z);
    }
    getComboScore(e, t) {
        let n = I.get(
            C({
                userId: e,
                channelId: t,
            }),
        );
        return null == n ? 0 : (0, f.Eo)(n);
    }
    getUserCombo(e, t) {
        return I.get(
            C({
                userId: e,
                channelId: t,
            }),
        );
    }
    isComboing(e, t) {
        let n = this.getUserCombo(e, t);
        return null != n && n.value >= d.Z.combosRequiredCount && T(n);
    }
    getMessageCombo(e) {
        var t;
        let n = A.get(e);
        return null != (t = null == n ? void 0 : n.combo) ? t : void 0;
    }
    getMostRecentMessageCombo(e) {
        let t = A.values(e);
        return t[t.length - 1];
    }
    getUserComboShakeIntensity(e, t, n, r) {
        let i = this.getUserCombo(e, t);
        return null != i ? (0, f.KH)(i, r) * n : 0;
    }
}
m(L, "displayName", "PoggermodeStore");
let j = new L(s.Z, {
        POGGERMODE_UPDATE_COMBO: R,
        POGGERMODE_UPDATE_MESSAGE_COMBO: D,
        MESSAGE_CREATE: x,
    }),
    M = j;
