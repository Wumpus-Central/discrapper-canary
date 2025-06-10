let r, i, a, o, s, l, c;
n.d(t, {
    C: () => V,
    Z: () => ea
}),
    n(388685);
var u,
    d = n(392711),
    f = n.n(d),
    _ = n(442837),
    p = n(433517),
    h = n(570140),
    m = n(703656),
    g = n(131704),
    E = n(823379),
    b = n(314897),
    y = n(592125),
    O = n(984933),
    v = n(430824),
    I = n(131951),
    T = n(914010),
    S = n(981631),
    A = n(176505);
function N(e, t, n) {
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
function C(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
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
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let w = 'SelectedChannelStore',
    D = 300000,
    L = 60000,
    x = {},
    k = {},
    M = {},
    j = new Set();
function U(e) {
    return String(e);
}
function G() {
    __OVERLAY__ ||
        p.K.set(w, {
            selectedChannelId: a,
            selectedVoiceChannelId: s,
            lastChannelFollowingDestination: o,
            lastConnectedTime: l,
            selectedChannelIds: x,
            mostRecentSelectedTextChannelIds: M,
            knownThreadIds: f()(x)
                .values()
                .concat(f().values(M))
                .filter(E.lm)
                .uniq()
                .filter((e) => {
                    let t = y.Z.getBasicChannel(e);
                    return j.has(e) || (null != t && g.Ec.has(t.type));
                })
                .value()
        });
}
function B(e) {
    if (null != e) {
        let t = O.ZP.getDefaultChannel(e);
        if (null != t) return t.id;
    }
}
function F(e, t) {
    if (null == e || null == t || M[e] === t) return !1;
    let n = y.Z.getChannel(t),
        r = null != n && (0, g.zi)(n.type),
        i = (null == n ? void 0 : n.getGuildId()) === e;
    return !!r && !!i && ((M[e] = t), !0);
}
function V(e) {
    let t = y.Z.getMutableBasicGuildChannelsForGuild(e),
        n = f().find(t, (e) => e.type === S.d4z.GUILD_VOICE);
    return null == n ? void 0 : n.id;
}
function Z() {
    let e = !1,
        t = v.Z.getGuilds();
    return (
        f().each(x, (t, n) => {
            (null != t && (y.Z.hasChannel(t) || t === a || j.has(t) || (0, A.ME)(t))) || (delete x[n], delete k[n], (e = !0));
        }),
        f().each(M, (t, n) => {
            (null != t && (y.Z.hasChannel(t) || j.has(t))) || (delete M[n], (e = !0));
        }),
        f().each(t, (e) => {
            let t = x[e.id];
            null == M[e.id] && F(e.id, t);
        }),
        null != l && Date.now() - l >= D && ((s = null), (e = !0)),
        e
    );
}
function H(e) {
    (r = e.sessionId), null != s && null == y.Z.getChannel(s) && (s = null), Z() && G();
}
function Y(e) {
    (r = e.sessionId), (s = e.selectedVoiceChannelId), (x = {}), (k = {}), (a = e.selectedChannelId), (x[e.selectedGuildId] = e.selectedChannelId), F(e.selectedGuildId, a), Z();
}
function W() {
    r = null;
}
function K(e) {
    let { guildId: t, channelId: n } = e;
    if (void 0 === t) return !1;
    null == n && (n = B(t)), null != a && n !== a && (i = a), (a = n), F(t, n), x[U(t)] !== n && ((k[U(t)] = x[U(t)]), (x[U(t)] = a)), G();
}
function z(e) {
    let { channelId: t } = e;
    if (null == t) {
        let e = y.Z.getChannel(s),
            t = null == e ? void 0 : e.guild_id;
        null != t && t !== T.Z.getGuildId() && x[t] === s && (x[t] = B(t));
    }
    (s = t), G();
}
function q(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if ((j.delete(e), null == t)) {
        let n = T.Z.getGuildId();
        x[U(n)] === e && (t = n);
    }
    let i = null != v.Z.getGuild(t) ? t : null,
        a = !1;
    s === e && ((s = null), (a = !0)), x[U(i)] === e && ((x[U(i)] = r && null != n ? n : B(U(i))), T.Z.getGuildId() === i && (0, m.dL)(S.Z5c.CHANNEL(t, x[U(i)])), (a = !0)), null != i && M[i] === e && (delete M[i], (a = !0)), a && G();
}
function X(e) {
    let { type: t, channel: n } = e;
    q(n.id, n.guild_id, n.parent_id, 'THREAD_DELETE' === t);
}
function Q(e) {
    let { channels: t } = e;
    for (let e of t)
        if (e.isScheduledForDeletion()) {
            let t = g.Ec.has(e.type);
            q(e.id, e.guild_id, e.parent_id, t);
        }
}
function J(e) {
    let { guild: t } = e;
    if (null == x[t.id]) {
        let e = B(t.id);
        (x[t.id] = e), F(t.id, e), G();
    }
}
function $(e) {
    let {
        guild: { id: t, unavailable: n }
    } = e;
    if ((s === x[t] && (s = null), n)) return !1;
    delete M[t], delete x[t], G();
}
function ee(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        var n, i, a;
        if (t.sessionId === r) {
            clearInterval(c);
            let e = null == (n = y.Z.getChannel(s)) ? void 0 : n.getGuildId();
            (t.guildId !== e && null == t.channelId) || (s = t.channelId),
                (l = Date.now()),
                null != s &&
                    (c = setInterval(() => {
                        (l = Date.now()), G();
                    }, L)),
                G();
        } else {
            if (t.userId !== b.default.getId()) return e;
            clearInterval(c), (c = void 0), (l = 0);
            let n = null == (i = y.Z.getChannel(s)) ? void 0 : i.getGuildId(),
                r = null == (a = y.Z.getChannel(t.channelId)) ? void 0 : a.getGuildId();
            ((null != n && r === n) || s === t.channelId) && (s = null), G();
        }
        return !0;
    }, !1);
}
function et(e) {
    let { channelId: t, guildId: n } = e;
    (null == o || t !== o.channelId) &&
        ((o = {
            channelId: t,
            guildId: n
        }),
        G());
}
function en() {
    (x = {}), (a = null), (i = void 0), (M = {}), (o = {}), (s = null), p.K.remove(w);
}
function er(e) {
    let { channel: t } = e;
    switch (t.type) {
        case S.d4z.GUILD_ANNOUNCEMENT:
        case S.d4z.GUILD_TEXT:
            let n = t.guild_id;
            if ((null != n && null == M[n] && (M[n] = t.id), null != n && null == x[n])) return (x[n] = B(n)), !0;
    }
    return !1;
}
class ei extends (u = _.ZP.Store) {
    initialize() {
        if (!__OVERLAY__) {
            var e, t;
            let n =
                null != (e = p.K.get(w))
                    ? e
                    : {
                          selectedChannelId: a,
                          selectedVoiceChannelId: s,
                          lastChannelFollowingDestination: o,
                          lastConnectedTime: l,
                          selectedChannelIds: x,
                          mostRecentSelectedTextChannelIds: M
                      };
            null != n.knownThreadIds && (j = new Set(n.knownThreadIds)), (s = n.selectedVoiceChannelId), (o = n.lastChannelFollowingDestination), (l = n.lastConnectedTime), (M = null != (t = n.mostRecentSelectedTextChannelIds) ? t : {}), null != n.selectedChannelIds && (x = P(C({}, n.selectedChannelIds), { null: null }));
        }
        this.mustEmitChanges((e) => 'CONNECTION_OPEN' !== e.type && 'VOICE_STATE_UPDATES' !== e.type), this.waitFor(v.Z, y.Z, T.Z, O.ZP, I.Z);
    }
    getChannelId(e) {
        var t, n;
        let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            i = U(e === S.ME ? null : null != (t = null != e ? e : T.Z.getGuildId()) ? t : null);
        return r ? (null != (n = x[i]) ? n : B(i)) : x[i];
    }
    getVoiceChannelId() {
        return I.Z.isSupported() ? s : null;
    }
    getMostRecentSelectedTextChannelId(e) {
        var t;
        return null == e ? null : null != (t = M[e]) ? t : null;
    }
    getCurrentlySelectedChannelId(e) {
        return null != e ? x[e] : a;
    }
    getLastSelectedChannelId(e) {
        return null != e ? k[e] : i;
    }
    getLastSelectedChannels(e) {
        return k[e];
    }
    getLastChannelFollowingDestination() {
        return o;
    }
}
N(ei, 'displayName', 'SelectedChannelStore');
let ea = new ei(h.Z, {
    CONNECTION_OPEN: H,
    OVERLAY_INITIALIZE: Y,
    CONNECTION_CLOSED: W,
    CHANNEL_SELECT: K,
    CHANNEL_CREATE: er,
    CHANNEL_DELETE: X,
    CHANNEL_UPDATES: Q,
    THREAD_DELETE: X,
    GUILD_CREATE: J,
    GUILD_DELETE: $,
    VOICE_CHANNEL_SELECT: z,
    VOICE_STATE_UPDATES: ee,
    CHANNEL_FOLLOWER_CREATED: et,
    LOGOUT: en
});
