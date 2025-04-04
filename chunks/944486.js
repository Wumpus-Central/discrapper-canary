let r, i, o, a, s, l, c;
n.d(t, {
    C: () => V,
    Z: () => eo
}),
    n(47120);
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
    v = n(984933),
    O = n(430824),
    I = n(131951),
    S = n(914010),
    T = n(981631),
    N = n(176505);
function A(e, t, n) {
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
                A(e, t, n[t]);
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
    M = {},
    k = {},
    j = new Set();
function U(e) {
    return String(e);
}
function G() {
    __OVERLAY__ ||
        p.K.set(w, {
            selectedChannelId: o,
            selectedVoiceChannelId: s,
            lastChannelFollowingDestination: a,
            lastConnectedTime: l,
            selectedChannelIds: x,
            mostRecentSelectedTextChannelIds: k,
            knownThreadIds: f()(x)
                .values()
                .concat(f().values(k))
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
        let t = v.ZP.getDefaultChannel(e);
        if (null != t) return t.id;
    }
}
function F(e, t) {
    if (null == e || null == t || k[e] === t) return !1;
    let n = y.Z.getChannel(t),
        r = null != n && (0, g.zi)(n.type),
        i = (null == n ? void 0 : n.getGuildId()) === e;
    return !!r && !!i && ((k[e] = t), !0);
}
function V(e) {
    let t = y.Z.getMutableBasicGuildChannelsForGuild(e),
        n = f().find(t, (e) => e.type === T.d4z.GUILD_VOICE);
    return null == n ? void 0 : n.id;
}
function Z() {
    let e = !1,
        t = O.Z.getGuilds();
    return (
        f().each(x, (t, n) => {
            (null != t && (y.Z.hasChannel(t) || t === o || j.has(t) || (0, N.ME)(t))) || (delete x[n], delete M[n], (e = !0));
        }),
        f().each(k, (t, n) => {
            (null != t && (y.Z.hasChannel(t) || j.has(t))) || (delete k[n], (e = !0));
        }),
        f().each(t, (e) => {
            let t = x[e.id];
            null == k[e.id] && F(e.id, t);
        }),
        null != l && Date.now() - l >= D && ((s = null), (e = !0)),
        e
    );
}
function H(e) {
    (r = e.sessionId), null != s && null == y.Z.getChannel(s) && (s = null), Z() && G();
}
function W(e) {
    (r = e.sessionId), (s = e.selectedVoiceChannelId), (x = {}), (M = {}), (o = e.selectedChannelId), (x[e.selectedGuildId] = e.selectedChannelId), F(e.selectedGuildId, o), Z();
}
function Y() {
    r = null;
}
function K(e) {
    let { guildId: t, channelId: n } = e;
    if (void 0 === t) return !1;
    null == n && (n = B(t)), null != o && n !== o && (i = o), (o = n), F(t, n), x[U(t)] !== n && ((M[U(t)] = x[U(t)]), (x[U(t)] = o)), G();
}
function z(e) {
    let { channelId: t } = e;
    if (null == t) {
        let e = y.Z.getChannel(s),
            t = null == e ? void 0 : e.guild_id;
        null != t && t !== S.Z.getGuildId() && x[t] === s && (x[t] = B(t));
    }
    (s = t), G();
}
function q(e, t, n) {
    if ((j.delete(e), null == t)) {
        let n = S.Z.getGuildId();
        x[U(n)] === e && (t = n);
    }
    let r = null != O.Z.getGuild(t) ? t : null,
        i = !1;
    s === e && ((s = null), (i = !0)), x[U(r)] === e && ((x[U(r)] = null != n ? n : B(U(r))), S.Z.getGuildId() === r && (0, m.dL)(T.Z5c.CHANNEL(t, x[U(r)])), (i = !0)), null != r && k[r] === e && (delete k[r], (i = !0)), i && G();
}
function Q(e) {
    let {
        channel: { id: t, guild_id: n, parent_id: r }
    } = e;
    q(t, n, r);
}
function X(e) {
    let { channels: t } = e;
    for (let e of t) e.isScheduledForDeletion() && q(e.id, e.guild_id, e.parent_id);
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
    delete k[t], delete x[t], G();
}
function ee(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        var n, i, o;
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
                r = null == (o = y.Z.getChannel(t.channelId)) ? void 0 : o.getGuildId();
            ((null != n && r === n) || s === t.channelId) && (s = null), G();
        }
        return !0;
    }, !1);
}
function et(e) {
    let { channelId: t, guildId: n } = e;
    (null == a || t !== a.channelId) &&
        ((a = {
            channelId: t,
            guildId: n
        }),
        G());
}
function en() {
    (x = {}), (o = null), (i = void 0), (k = {}), (a = {}), (s = null), p.K.remove(w);
}
function er(e) {
    let { channel: t } = e;
    switch (t.type) {
        case T.d4z.GUILD_ANNOUNCEMENT:
        case T.d4z.GUILD_TEXT:
            let n = t.guild_id;
            if ((null != n && null == k[n] && (k[n] = t.id), null != n && null == x[n])) return (x[n] = B(n)), !0;
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
                          selectedChannelId: o,
                          selectedVoiceChannelId: s,
                          lastChannelFollowingDestination: a,
                          lastConnectedTime: l,
                          selectedChannelIds: x,
                          mostRecentSelectedTextChannelIds: k
                      };
            null != n.knownThreadIds && (j = new Set(n.knownThreadIds)), (s = n.selectedVoiceChannelId), (a = n.lastChannelFollowingDestination), (l = n.lastConnectedTime), (k = null != (t = n.mostRecentSelectedTextChannelIds) ? t : {}), null != n.selectedChannelIds && (x = P(C({}, n.selectedChannelIds), { null: null }));
        }
        this.mustEmitChanges((e) => 'CONNECTION_OPEN' !== e.type && 'VOICE_STATE_UPDATES' !== e.type), this.waitFor(O.Z, y.Z, S.Z, v.ZP, I.Z);
    }
    getChannelId(e) {
        var t, n;
        let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            i = U(e === T.ME ? null : null != (t = null != e ? e : S.Z.getGuildId()) ? t : null);
        return r ? (null != (n = x[i]) ? n : B(i)) : x[i];
    }
    getVoiceChannelId() {
        return I.Z.isSupported() ? s : null;
    }
    getMostRecentSelectedTextChannelId(e) {
        var t;
        return null == e ? null : null != (t = k[e]) ? t : null;
    }
    getCurrentlySelectedChannelId(e) {
        return null != e ? x[e] : o;
    }
    getLastSelectedChannelId(e) {
        return null != e ? M[e] : i;
    }
    getLastSelectedChannels(e) {
        return M[e];
    }
    getLastChannelFollowingDestination() {
        return a;
    }
}
A(ei, 'displayName', 'SelectedChannelStore');
let eo = new ei(h.Z, {
    CONNECTION_OPEN: H,
    OVERLAY_INITIALIZE: W,
    CONNECTION_CLOSED: Y,
    CHANNEL_SELECT: K,
    CHANNEL_CREATE: er,
    CHANNEL_DELETE: Q,
    CHANNEL_UPDATES: X,
    THREAD_DELETE: Q,
    GUILD_CREATE: J,
    GUILD_DELETE: $,
    VOICE_CHANNEL_SELECT: z,
    VOICE_STATE_UPDATES: ee,
    CHANNEL_FOLLOWER_CREATED: et,
    LOGOUT: en
});
