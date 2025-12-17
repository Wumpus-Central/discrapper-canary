let r, i, a, o, s, l, c;
n.d(t, {
    C: () => H,
    Z: () => es,
}),
    n(388685);
var u,
    d = n(392711),
    f = n.n(d),
    p = n(149765),
    _ = n(442837),
    m = n(433517),
    h = n(570140),
    g = n(703656),
    E = n(131704),
    b = n(823379),
    y = n(314897),
    O = n(592125),
    v = n(984933),
    S = n(430824),
    I = n(131951),
    T = n(496675),
    C = n(914010),
    A = n(981631),
    N = n(176505);
function P(e, t, n) {
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
function R(e) {
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
                P(e, t, n[t]);
            });
    }
    return e;
}
function w(e, t) {
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
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let x = "SelectedChannelStore",
    L = 300000,
    j = 60000,
    M = {},
    k = {},
    U = {},
    G = new Set();
function Z(e) {
    return String(e);
}
function F() {
    __OVERLAY__ ||
        m.K.set(x, {
            selectedChannelId: a,
            selectedVoiceChannelId: s,
            lastChannelFollowingDestination: o,
            lastConnectedTime: l,
            selectedChannelIds: M,
            mostRecentSelectedTextChannelIds: U,
            knownThreadIds: f()(M)
                .values()
                .concat(f().values(U))
                .filter(b.lm)
                .uniq()
                .filter((e) => {
                    let t = O.Z.getBasicChannel(e);
                    return G.has(e) || (null != t && E.Ec.has(t.type));
                })
                .value(),
        });
}
function B(e) {
    if (null != e) {
        let t = v.ZP.getDefaultChannel(e);
        if (null != t) return t.id;
    }
}
function V(e, t) {
    if (null == e || null == t || U[e] === t) return !1;
    let n = O.Z.getChannel(t),
        r = null != n && (0, E.zi)(n.type),
        i = (null == n ? void 0 : n.getGuildId()) === e;
    return !!r && !!i && ((U[e] = t), !0);
}
function H(e) {
    let t = O.Z.getMutableBasicGuildChannelsForGuild(e),
        n = f().find(t, (e) => e.type === A.d4z.GUILD_VOICE);
    return null == n ? void 0 : n.id;
}
function Y() {
    let e = !1,
        t = S.Z.getGuildsArray();
    return (
        f().each(M, (t, n) => {
            (null != t && (O.Z.hasChannel(t) || t === a || G.has(t) || (0, N.ME)(t))) ||
                (delete M[n], delete k[n], (e = !0));
        }),
        f().each(U, (t, n) => {
            (null != t && (O.Z.hasChannel(t) || G.has(t))) || (delete U[n], (e = !0));
        }),
        t.forEach((e) => {
            let t = M[e.id];
            null == U[e.id] && V(e.id, t);
        }),
        null != l && Date.now() - l >= L && ((s = null), (e = !0)),
        e
    );
}
function W(e) {
    if (((r = e.sessionId), null != s)) {
        let e = O.Z.getChannel(s);
        (null != e && T.Z.can(p.$e(A.Plq.VIEW_CHANNEL, A.Plq.CONNECT), e)) || (s = null);
    }
    Y() && F();
}
function K(e) {
    (r = e.sessionId),
        (s = e.selectedVoiceChannelId),
        (M = {}),
        (k = {}),
        (a = e.selectedChannelId),
        (M[e.selectedGuildId] = e.selectedChannelId),
        V(e.selectedGuildId, a),
        Y();
}
function z() {
    r = null;
}
function q(e) {
    let { guildId: t, channelId: n } = e;
    if (void 0 === t) return !1;
    null == n && (n = B(t)),
        null != a && n !== a && (i = a),
        (a = n),
        V(t, n),
        M[Z(t)] !== n && ((k[Z(t)] = M[Z(t)]), (M[Z(t)] = a)),
        F();
}
function Q(e) {
    let { channelId: t } = e;
    if (null == t) {
        let e = O.Z.getChannel(s),
            t = null == e ? void 0 : e.guild_id;
        null != t && t !== C.Z.getGuildId() && M[t] === s && (M[t] = B(t));
    }
    (s = t), F();
}
function X(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if ((G.delete(e), null == t)) {
        let n = C.Z.getGuildId();
        M[Z(n)] === e && (t = n);
    }
    let i = null != S.Z.getGuild(t) ? t : null,
        a = !1;
    s === e && ((s = null), (a = !0)),
        M[Z(i)] === e &&
            ((M[Z(i)] = r && null != n ? n : B(Z(i))),
            C.Z.getGuildId() === i && (0, g.dL)(A.Z5c.CHANNEL(t, M[Z(i)])),
            (a = !0)),
        null != i && U[i] === e && (delete U[i], (a = !0)),
        a && F();
}
function J(e) {
    let { type: t, channel: n } = e;
    X(n.id, n.guild_id, n.parent_id, "THREAD_DELETE" === t);
}
function $(e) {
    let { channels: t } = e;
    for (let e of t)
        if (e.isScheduledForDeletion()) {
            let t = E.Ec.has(e.type);
            X(e.id, e.guild_id, e.parent_id, t);
        }
}
function ee(e) {
    let { guild: t } = e;
    if (null == M[t.id]) {
        let e = B(t.id);
        (M[t.id] = e), V(t.id, e), F();
    }
}
function et(e) {
    let {
        guild: { id: t, unavailable: n },
    } = e;
    if ((s === M[t] && (s = null), n)) return !1;
    delete U[t], delete M[t], F();
}
function en(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        var n, i, a;
        if (t.sessionId === r) {
            clearInterval(c);
            let e = null == (n = O.Z.getChannel(s)) ? void 0 : n.getGuildId();
            (t.guildId !== e && null == t.channelId) || (s = t.channelId),
                (l = Date.now()),
                null != s &&
                    (c = setInterval(() => {
                        (l = Date.now()), F();
                    }, j)),
                F();
        } else {
            if (t.userId !== y.default.getId()) return e;
            clearInterval(c), (c = void 0), (l = 0);
            let n = null == (i = O.Z.getChannel(s)) ? void 0 : i.getGuildId(),
                r = null == (a = O.Z.getChannel(t.channelId)) ? void 0 : a.getGuildId();
            ((null != n && r === n) || s === t.channelId) && (s = null), F();
        }
        return !0;
    }, !1);
}
function er(e) {
    let { channelId: t, guildId: n } = e;
    (null == o || t !== o.channelId) &&
        ((o = {
            channelId: t,
            guildId: n,
        }),
        F());
}
function ei() {
    (M = {}), (a = null), (i = void 0), (U = {}), (o = {}), (s = null), m.K.remove(x);
}
function ea(e) {
    let { channel: t } = e;
    switch (t.type) {
        case A.d4z.GUILD_ANNOUNCEMENT:
        case A.d4z.GUILD_TEXT:
            let n = t.guild_id;
            if ((null != n && null == U[n] && (U[n] = t.id), null != n && null == M[n])) return (M[n] = B(n)), !0;
    }
    return !1;
}
class eo extends (u = _.ZP.Store) {
    initialize() {
        if (!__OVERLAY__) {
            var e, t;
            let n =
                null != (e = m.K.get(x))
                    ? e
                    : {
                          selectedChannelId: a,
                          selectedVoiceChannelId: s,
                          lastChannelFollowingDestination: o,
                          lastConnectedTime: l,
                          selectedChannelIds: M,
                          mostRecentSelectedTextChannelIds: U,
                      };
            null != n.knownThreadIds && (G = new Set(n.knownThreadIds)),
                (s = n.selectedVoiceChannelId),
                (o = n.lastChannelFollowingDestination),
                (l = n.lastConnectedTime),
                (U = null != (t = n.mostRecentSelectedTextChannelIds) ? t : {}),
                null != n.selectedChannelIds && (M = D(R({}, n.selectedChannelIds), { null: null }));
        }
        this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type),
            this.waitFor(y.default, O.Z, v.ZP, S.Z, I.Z, T.Z, C.Z);
    }
    getChannelId(e) {
        var t, n;
        let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            i = Z(e === A.ME ? null : null != (t = null != e ? e : C.Z.getGuildId()) ? t : null);
        return r ? (null != (n = M[i]) ? n : B(i)) : M[i];
    }
    getVoiceChannelId() {
        return I.Z.isSupported() ? s : null;
    }
    getMostRecentSelectedTextChannelId(e) {
        var t;
        return null == e ? null : null != (t = U[e]) ? t : null;
    }
    getCurrentlySelectedChannelId(e) {
        return null != e ? M[e] : a;
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
P(eo, "displayName", "SelectedChannelStore");
let es = new eo(h.Z, {
    CONNECTION_OPEN: W,
    OVERLAY_INITIALIZE: K,
    CONNECTION_CLOSED: z,
    CHANNEL_SELECT: q,
    CHANNEL_CREATE: ea,
    CHANNEL_DELETE: J,
    CHANNEL_UPDATES: $,
    THREAD_DELETE: J,
    GUILD_CREATE: ee,
    GUILD_DELETE: et,
    VOICE_CHANNEL_SELECT: Q,
    VOICE_STATE_UPDATES: en,
    CHANNEL_FOLLOWER_CREATED: er,
    LOGOUT: ei,
});
