(n.d(t, {
    Eb: () => w,
    Fx: () => x,
    IM: () => D,
    J2: () => B,
    r$: () => P
}),
    n(539854),
    n(388685),
    n(415506));
var r = n(512722),
    i = n.n(r),
    a = n(392711),
    o = n.n(a),
    s = n(287328),
    l = n(406966),
    c = n(795513),
    u = n(591526),
    d = n(261875),
    f = n(768433),
    _ = n(710845),
    p = n(339085),
    h = n(926491),
    m = n(131704),
    g = n(485386),
    E = n(430824),
    b = n(411198);
function y(e, t, n) {
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
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            }));
    }
    return e;
}
function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = S(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let A = new _.Z('ReadyPayloadUtils'),
    N = {},
    C = null,
    R = {};
function P(e, t) {
    var n,
        { guilds: r, merged_members: i, merged_presences: a } = e,
        o = T(e, ['guilds', 'merged_members', 'merged_presences']);
    let s = k(R, null == a ? void 0 : a.friends),
        l =
            null !=
            (n =
                null == r
                    ? void 0
                    : r.map((e, t) => {
                          let n = k(R, null == a ? void 0 : a.guilds[t]),
                              r = k(R, null == i ? void 0 : i[t]);
                          return I(O({}, e), {
                              unavailable: void 0 === e.voice_states,
                              presences: n,
                              members: r
                          });
                      }))
                ? n
                : [],
        c = L(t, r, (e) => ({
            id: e.id,
            members: e.members,
            presences: e.presences,
            activity_instances: e.activity_instances,
            voice_states: e.voice_states,
            unavailable: !1
        }));
    return (
        null != c && l.push(c),
        (R = {}),
        I(O({}, o), {
            presences: s,
            guilds: l
        })
    );
}
function w() {
    let e = s.Z.database(),
        t = (0, f.O)() ? l.Z.getCommittedVersions() : Promise.resolve({});
    return Promise.all([t, (0, f.O)() ? u.Z.getGuildIds() : Promise.resolve(new Set()), null != e ? c.Z.okAsync(e) : Promise.resolve(!1)]).then((e) => {
        let [t, n, r] = e;
        return {
            guildVersions: t,
            guildChannels: n,
            databaseOk: r
        };
    });
}
function D(e, t, n) {
    var r,
        { users: a, relationships: s, private_channels: l, merged_members: c, guilds: u } = e,
        d = T(e, ['users', 'relationships', 'private_channels', 'merged_members', 'guilds']);
    j(n);
    let f = k((R = o().keyBy(a, (e) => e.id)), s);
    null == l ||
        l.forEach((e) => {
            let t = e.recipient_ids;
            (null != t && (e.recipients = t.map((e) => (i()(null != R[e], 'Missing user in compressed ready payload'), R[e]))), delete e.recipient_ids);
        });
    let _ = null != (r = null == u ? void 0 : u.map((e, t) => (!0 === e.unavailable ? e : ((e.members = k(R, null == c ? void 0 : c[t])), G(e))))) ? r : [],
        p = L(t, u, (e) => G(e));
    return (
        null != p && _.push(p),
        I(O({}, d), {
            users: a,
            presences: [],
            relationships: f,
            guilds: _,
            private_channels: null != l ? l : []
        })
    );
}
function L(e, t, n) {
    return null == C || C.identifyTime !== e || (null != t && t.some((e) => e.id === C.guild.id)) ? null : n(C.guild);
}
function x(e, t) {
    var n, r, i;
    let a = E.Z.getGuild(e.id),
        o = B(
            e,
            null == a
                ? void 0
                : {
                      properties: b.tK(a),
                      roles: g.Z.getRoles(a.id),
                      emojis: null != (r = null == (n = p.ZP.getGuilds()[a.id]) ? void 0 : n.rawEmojis) ? r : null,
                      stickers: null != (i = h.Z.getRawStickersByGuild().get(a.id)) ? i : null
                  }
        );
    return (
        (C = {
            guild: e,
            identifyTime: t
        }),
        o
    );
}
function k(e, t) {
    let n = [];
    return (
        null == t ||
            t.forEach((t) => {
                if (null == t) return;
                let r = t.user_id;
                (null != r && (i()(null != e[r], 'Missing user['.concat(r, '] in compressed ready payload')), (t.user = e[r])), delete t.user_id, n.push(t));
            }),
        n
    );
}
function M(e) {
    let t = N[e];
    return (delete N[e], t);
}
function j(e) {
    (null != s.Z.database() && !1 === e.databaseOk && d.Z.replaceDisableAllDatabases('ReadyPayloadUtils: database was not ok'), (N = {}));
    let t = E.Z.getGuildsArray(),
        n = p.ZP.getGuilds(),
        r = h.Z.getRawStickersByGuild();
    for (let s of t) {
        var i, a, o;
        s.id in e.guildVersions &&
            e.guildChannels.has(s.id) &&
            (N[s.id] = {
                properties: b.tK(s),
                roles: g.Z.getRoles(s.id),
                emojis: null != (a = null == (i = n[s.id]) ? void 0 : i.rawEmojis) ? a : null,
                stickers: null != (o = r.get(s.id)) ? o : null
            });
    }
}
function U(e, t, n) {
    (null != t || (t = []), null != n || (n = []));
    let r = new Set(n);
    for (let { id: e } of t) r.add(e);
    let i = null;
    return (
        null != e && (i = e.filter((e) => !r.has(e.id))).push(...t),
        {
            op: 'update',
            writes: t,
            deletes: n,
            items: i
        }
    );
}
function G(e) {
    var t, n, r, i, a, o, s, l;
    let c = M(e.id);
    if ('partial' !== e.data_mode)
        return {
            id: e.id,
            dataMode: e.data_mode,
            emojis: {
                op: 'full_sync',
                items: e.emojis
            },
            guild_scheduled_events: e.guild_scheduled_events,
            joined_at: e.joined_at,
            lastMessages: e.last_messages,
            member_count: e.member_count,
            members: e.members,
            premium_subscription_count: e.premium_subscription_count,
            properties: e.properties,
            roles: e.roles,
            stage_instances: e.stage_instances,
            stickers: {
                op: 'full_sync',
                items: e.stickers
            },
            threads: null != (i = null == (r = e.threads) ? void 0 : r.map((t) => (0, m.q_)(t, e.id))) ? i : [],
            threadMessages: V(e.threads),
            channels: {
                op: 'full_sync',
                items: e.channels.map((t) => ((t.guild_id = e.id), (0, m.q_)(t, e.id)))
            },
            version: e.version,
            hasThreadsSubscription: e.has_threads_subscription
        };
    if (null == c) throw (A.log('no cache entry for partial guild (guild: '.concat(e.id, ', type: ready)')), Error('Guild data was missing from store, but hash was still available.'));
    return {
        id: e.id,
        dataMode: e.data_mode,
        channels: {
            op: 'update',
            writes: null != (a = null == (t = e.partial_updates.channels) ? void 0 : t.map((t) => (0, m.q_)(t, e.id))) ? a : [],
            deletes: null != (o = e.partial_updates.deleted_channel_ids) ? o : []
        },
        channelTimestampUpdates: e.channel_updates,
        emojis: U(c.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
        guild_scheduled_events: e.guild_scheduled_events,
        joined_at: e.joined_at,
        lastMessages: e.last_messages,
        member_count: e.member_count,
        members: e.members,
        premium_subscription_count: e.premium_subscription_count,
        properties: null != (s = e.properties) ? s : null,
        roles: b.EO(e.id, c.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
        stage_instances: e.stage_instances,
        stickers: U(c.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
        unableToSyncDeletes: e.unable_to_sync_deletes,
        threads: null != (l = null == (n = e.threads) ? void 0 : n.map((t) => (0, m.q_)(t, e.id))) ? l : [],
        threadMessages: V(e.threads),
        version: e.version,
        hasThreadsSubscription: e.has_threads_subscription
    };
}
function B(e, t) {
    var n, r, i, a, o, s, l, c;
    if ((null == t && (t = M(e.id)), 'partial' !== e.data_mode))
        return {
            id: e.id,
            guild_scheduled_events: e.guild_scheduled_events,
            joined_at: e.joined_at,
            lastMessages: e.last_messages,
            member_count: e.member_count,
            members: e.members,
            premium_subscription_count: e.premium_subscription_count,
            properties: e.properties,
            roles: e.roles,
            stage_instances: e.stage_instances,
            threads: null != (a = null == (i = e.threads) ? void 0 : i.map((t) => (0, m.q_)(t, e.id))) ? a : [],
            threadMessages: V(e.threads),
            presences: e.presences,
            activity_instances: e.activity_instances,
            voice_states: e.voice_states,
            version: e.version,
            hasThreadsSubscription: e.has_threads_subscription,
            emojis: {
                op: 'full_sync',
                items: e.emojis
            },
            stickers: {
                op: 'full_sync',
                items: e.stickers
            },
            channels: {
                op: 'full_sync',
                items: e.channels.map((t) => ((t.guild_id = e.id), (0, m.q_)(t, e.id)))
            }
        };
    if (null == t) throw (A.log('no cache entry for partial guild (guild: '.concat(e.id, ', type: post_ready)')), Error('Guild data was missing from store, but hash was still available.'));
    return {
        id: e.id,
        channels: {
            op: 'update',
            writes: null != (o = null == (n = e.partial_updates.channels) ? void 0 : n.map((t) => (0, m.q_)(t, e.id))) ? o : [],
            deletes: null != (s = e.partial_updates.deleted_channel_ids) ? s : []
        },
        channelTimestampUpdates: e.channel_updates,
        activity_instances: e.activity_instances,
        emojis: U(t.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
        guild_scheduled_events: e.guild_scheduled_events,
        joined_at: e.joined_at,
        lastMessages: e.last_messages,
        member_count: e.member_count,
        members: e.members,
        premium_subscription_count: e.premium_subscription_count,
        presences: e.presences,
        properties: null != (l = e.properties) ? l : t.properties,
        roles: b.EO(e.id, t.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
        stage_instances: e.stage_instances,
        stickers: U(t.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
        unableToSyncDeletes: e.unable_to_sync_deletes,
        threads: null != (c = null == (r = e.threads) ? void 0 : r.map((t) => (0, m.q_)(t, e.id))) ? c : [],
        threadMessages: V(e.threads),
        voice_states: e.voice_states,
        version: e.version,
        hasThreadsSubscription: e.has_threads_subscription
    };
}
function V(e) {
    let t = [];
    if (null != e) for (let n of e) null != n.most_recent_message && t.push(n.most_recent_message);
    return t;
}
