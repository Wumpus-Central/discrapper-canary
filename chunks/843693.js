r.d(n, {
    wU: function () {
        return O;
    }
});
var i,
    a = r(47120);
var o = r(442837),
    s = r(759174),
    l = r(846519),
    u = r(570140),
    c = r(314897),
    d = r(944486),
    f = r(585483),
    p = r(351780),
    h = r(641033),
    _ = r(524484),
    m = r(981631);
function g(e, n, r) {
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
let E = 7,
    v = 1000,
    y = new Set(),
    b = new s.h(
        function (e) {
            let { userId: n, channelId: r } = e;
            return [n, r];
        },
        function (e) {
            let { userId: n, channelId: r } = e;
            return ''.concat(r, '-').concat(n);
        }
    );
function I(e) {
    return null != e && (e.value > 0 || (null == e ? void 0 : e.multiplier) > 1);
}
let T = new s.h(
        function (e) {
            let {
                messageId: n,
                channelId: r,
                combo: { userId: i }
            } = e;
            return [n, r, i];
        },
        function (e) {
            let {
                messageId: n,
                channelId: r,
                combo: { userId: i }
            } = e;
            return ''.concat(r, '-').concat(i, '-').concat(n);
        }
    ),
    S = (e) => {
        let { userId: n, channelId: r } = e;
        return ''.concat(n, '-').concat(r);
    };
function A(e) {
    var n, r, i, a, o, s;
    let u = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        c = b.get(S(e)),
        d = {
            ...c,
            ...e,
            value: null !== (r = null !== (n = e.value) && void 0 !== n ? n : null == c ? void 0 : c.value) && void 0 !== r ? r : 0,
            multiplier: Math.min(null !== (a = null !== (i = e.multiplier) && void 0 !== i ? i : null == c ? void 0 : c.multiplier) && void 0 !== a ? a : 1, E),
            decayInterval: null !== (o = null == c ? void 0 : c.decayInterval) && void 0 !== o ? o : new l.Xp()
        };
    b.set(S(e), d),
        u &&
            (null === (s = d.decayInterval) ||
                void 0 === s ||
                s.start(v, () => {
                    let e = b.get(S(d));
                    if (null != e) {
                        let r = d.multiplier !== e.multiplier && d.value !== e.value;
                        if (e.value <= 0 || r) {
                            var n;
                            null === (n = e.decayInterval) || void 0 === n || n.stop(),
                                e.value <= 0 &&
                                    (A({
                                        ...e,
                                        value: 0,
                                        multiplier: 1
                                    }),
                                    x.emitChange());
                        } else
                            A({
                                ...e,
                                value: e.value - 1
                            }),
                                x.emitChange();
                    }
                }));
}
function C(e) {
    T.set(e.messageId, e);
}
function N(e) {
    let { type: n, ...r } = e;
    if (!p.Z.isEnabled()) return !1;
    A(r);
}
function R(e) {
    let { comboMessage: n } = e;
    if (!p.Z.isEnabled()) return !1;
    C(n);
}
function O(e, n, r, i) {
    return !(e !== n || null == r || i.has(r)) && (i.add(r), !0);
}
function D(e) {
    var n, r;
    let {
        channelId: i,
        message: { mentions: a, author: o, nonce: s }
    } = e;
    if (!p.Z.isEnabled()) return !1;
    let l = c.default.getId();
    if (!O(null == o ? void 0 : o.id, l, s, y)) return !1;
    let u = b.get(
        S({
            userId: null !== (n = null == o ? void 0 : o.id) && void 0 !== n ? n : '???',
            channelId: i
        })
    );
    if (p.Z.screenshakeEnabled && p.Z.screenshakeEnabledLocations[_.oZ.MENTION] && null != a && null != a.find((e) => e.id === l)) {
        let e = null != u ? (null !== (r = (0, h.KH)(u, _.qi.LEVEL_4)) && void 0 !== r ? r : 0.001) : 4 * Math.random();
        return (
            f.S.dispatch(m.CkL.SHAKE_APP, {
                duration: 1000,
                intensity: e
            }),
            !0
        );
    }
    return !1;
}
class L extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(c.default, d.Z);
    }
    getComboScore(e, n) {
        let r = b.get(
            S({
                userId: e,
                channelId: n
            })
        );
        return null == r ? 0 : (0, h.Eo)(r);
    }
    getUserCombo(e, n) {
        return b.get(
            S({
                userId: e,
                channelId: n
            })
        );
    }
    isComboing(e, n) {
        let r = this.getUserCombo(e, n);
        return null != r && r.value >= p.Z.combosRequiredCount && I(r);
    }
    getMessageCombo(e) {
        var n;
        let r = T.get(e);
        return null !== (n = null == r ? void 0 : r.combo) && void 0 !== n ? n : void 0;
    }
    getMostRecentMessageCombo(e) {
        let n = T.values(e);
        return n[n.length - 1];
    }
    getUserComboShakeIntensity(e, n, r, i) {
        let a = this.getUserCombo(e, n);
        return null != a ? (0, h.KH)(a, i) * r : 0;
    }
}
g(L, 'displayName', 'PoggermodeStore');
let x = new L(u.Z, {
    POGGERMODE_UPDATE_COMBO: N,
    POGGERMODE_UPDATE_MESSAGE_COMBO: R,
    MESSAGE_CREATE: D
});
n.ZP = x;
