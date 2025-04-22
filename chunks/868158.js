n.d(t, {
    Eb: () => w,
    Fx: () => x,
    IM: () => D,
    J2: () => G,
    r$: () => P
}),
    n(539854),
    n(388685),
    n(415506);
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
    g = n(430824),
    E = n(306680),
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
function v(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = T(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let A = new _.Z('ReadyPayloadUtils'),
    N = {},
    C = null,
    R = {};
function P(e, t) {
    var n,
        { guilds: r, merged_members: i, merged_presences: a } = e,
        o = S(e, ['guilds', 'merged_members', 'merged_presences']);
    let s = M(R, null == a ? void 0 : a.friends),
        l =
            null !=
            (n =
                null == r
                    ? void 0
                    : r.map((e, t) => {
                          let n = M(R, null == a ? void 0 : a.guilds[t]),
                              r = M(R, null == i ? void 0 : i[t]);
                          return I(v({}, e), {
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
        I(v({}, o), {
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
        d = S(e, ['users', 'relationships', 'private_channels', 'merged_members', 'guilds']);
    j(n);
    let f = M((R = o().keyBy(a, (e) => e.id)), s);
    null == l ||
        l.forEach((e) => {
            let t = e.recipient_ids;
            null != t && (e.recipients = t.map((e) => (i()(null != R[e], 'Missing user in compressed ready payload'), R[e]))), delete e.recipient_ids;
        });
    let _ = null != (r = null == u ? void 0 : u.map((e, t) => (!0 === e.unavailable ? e : ((e.members = M(R, null == c ? void 0 : c[t])), U(e))))) ? r : [],
        p = L(t, u, (e) => U(e));
    return (
        null != p && _.push(p),
        I(v({}, d), {
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
    let a = g.Z.getGuild(e.id),
        o = G(
            e,
            null == a
                ? void 0
                : {
                      properties: b.tK(a),
                      roles: g.Z.getRoles(a.id),
                      emojis: null != (r = null == (n = p.ZP.getGuilds()[a.id]) ? void 0 : n.rawEmojis) ? r : null,
                      stickers: null != (i = h.Z.getRawStickersByGuild().get(a.id)) ? i : null,
                      readStates: {}
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
function M(e, t) {
    let n = [];
    return (
        null == t ||
            t.forEach((t) => {
                if (null == t) return;
                let r = t.user_id;
                null != r && (i()(null != e[r], 'Missing user['.concat(r, '] in compressed ready payload')), (t.user = e[r])), delete t.user_id, n.push(t);
            }),
        n
    );
}
function k(e) {
    let t = N[e];
    return delete N[e], t;
}
function j(e) {
    null != s.Z.database() && !1 === e.databaseOk && d.Z.replaceDisableAllDatabases('ReadyPayloadUtils: database was not ok'), (N = {});
    let t = Object.values(g.Z.getGuilds()),
        n = p.ZP.getGuilds(),
        r = h.Z.getRawStickersByGuild(),
        i = E.ZP.getReadStatesByChannel();
    for (let s of t) {
        var a, o, l;
        s.id in e.guildVersions &&
            e.guildChannels.has(s.id) &&
            (N[s.id] = {
                properties: b.tK(s),
                roles: g.Z.getRoles(s.id),
                emojis: null != (o = null == (a = n[s.id]) ? void 0 : a.rawEmojis) ? o : null,
                stickers: null != (l = r.get(s.id)) ? l : null,
                readStates: i
            });
    }
}
function U(e) {
    var t, n, r, i, a, o, s, l, c, u, d, f;
    let _ = k(e.id);
    if ('partial' !== e.data_mode)
        return {
            id: e.id,
            dataMode: e.data_mode,
            emojis: e.emojis,
            guild_scheduled_events: e.guild_scheduled_events,
            joined_at: e.joined_at,
            lastMessages: e.last_messages,
            member_count: e.member_count,
            members: e.members,
            premium_subscription_count: e.premium_subscription_count,
            properties: e.properties,
            roles: e.roles,
            stage_instances: e.stage_instances,
            stickers: e.stickers,
            threads: null != (i = null == (r = e.threads) ? void 0 : r.map((t) => (0, m.q_)(t, e.id))) ? i : [],
            threadMessages: B(e.threads),
            channels: e.channels.map((t) => ((t.guild_id = e.id), (0, m.q_)(t, e.id))),
            version: e.version,
            hasThreadsSubscription: e.has_threads_subscription
        };
    if (null == _) throw (A.log('no cache entry for partial guild (guild: '.concat(e.id, ', type: ready)')), Error('Guild data was missing from store, but hash was still available.'));
    return {
        id: e.id,
        dataMode: e.data_mode,
        channels: null,
        channelUpdates: {
            writes: null != (a = null == (t = e.partial_updates.channels) ? void 0 : t.map((t) => (0, m.q_)(t, e.id))) ? a : [],
            deletes: null != (o = e.partial_updates.deleted_channel_ids) ? o : []
        },
        channelTimestampUpdates: e.channel_updates,
        emojis: null == _.emojis ? null : V(_.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
        emojiUpdates: {
            writes: null != (s = e.partial_updates.emojis) ? s : [],
            deletes: null != (l = e.partial_updates.deleted_emoji_ids) ? l : []
        },
        guild_scheduled_events: e.guild_scheduled_events,
        joined_at: e.joined_at,
        lastMessages: e.last_messages,
        member_count: e.member_count,
        members: e.members,
        premium_subscription_count: e.premium_subscription_count,
        properties: null != (c = e.properties) ? c : null,
        roles: b.EO(e.id, _.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
        stage_instances: e.stage_instances,
        stickers: null == _.stickers ? null : V(_.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
        stickerUpdates: {
            writes: null != (u = e.partial_updates.stickers) ? u : [],
            deletes: null != (d = e.partial_updates.deleted_sticker_ids) ? d : []
        },
        unableToSyncDeletes: e.unable_to_sync_deletes,
        threads: null != (f = null == (n = e.threads) ? void 0 : n.map((t) => (0, m.q_)(t, e.id))) ? f : [],
        threadMessages: B(e.threads),
        version: e.version,
        hasThreadsSubscription: e.has_threads_subscription
    };
}
function G(e, t) {
    var n, r, i, a, o, s, l, c, u, d, f, _;
    if ((null == t && (t = k(e.id)), 'partial' !== e.data_mode))
        return {
            id: e.id,
            emojis: e.emojis,
            guild_scheduled_events: e.guild_scheduled_events,
            joined_at: e.joined_at,
            lastMessages: e.last_messages,
            member_count: e.member_count,
            members: e.members,
            premium_subscription_count: e.premium_subscription_count,
            properties: e.properties,
            roles: e.roles,
            stage_instances: e.stage_instances,
            stickers: e.stickers,
            threads: null != (a = null == (i = e.threads) ? void 0 : i.map((t) => (0, m.q_)(t, e.id))) ? a : [],
            threadMessages: B(e.threads),
            channels: e.channels.map((t) => ((t.guild_id = e.id), (0, m.q_)(t, e.id))),
            presences: e.presences,
            activity_instances: e.activity_instances,
            voice_states: e.voice_states,
            version: e.version,
            hasThreadsSubscription: e.has_threads_subscription
        };
    if (null == t) throw (A.log('no cache entry for partial guild (guild: '.concat(e.id, ', type: post_ready)')), Error('Guild data was missing from store, but hash was still available.'));
    return {
        id: e.id,
        channels: null,
        channelUpdates: {
            writes: null != (o = null == (n = e.partial_updates.channels) ? void 0 : n.map((t) => (0, m.q_)(t, e.id))) ? o : [],
            deletes: null != (s = e.partial_updates.deleted_channel_ids) ? s : []
        },
        channelTimestampUpdates: e.channel_updates,
        activity_instances: e.activity_instances,
        emojis: null == t.emojis ? null : V(t.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
        emojiUpdates: {
            writes: null != (l = e.partial_updates.emojis) ? l : [],
            deletes: null != (c = e.partial_updates.deleted_emoji_ids) ? c : []
        },
        guild_scheduled_events: e.guild_scheduled_events,
        joined_at: e.joined_at,
        lastMessages: e.last_messages,
        member_count: e.member_count,
        members: e.members,
        premium_subscription_count: e.premium_subscription_count,
        presences: e.presences,
        properties: null != (u = e.properties) ? u : t.properties,
        roles: b.EO(e.id, t.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
        stage_instances: e.stage_instances,
        stickers: null == t.stickers ? null : V(t.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
        stickerUpdates: {
            writes: null != (d = e.partial_updates.stickers) ? d : [],
            deletes: null != (f = e.partial_updates.deleted_sticker_ids) ? f : []
        },
        unableToSyncDeletes: e.unable_to_sync_deletes,
        threads: null != (_ = null == (r = e.threads) ? void 0 : r.map((t) => (0, m.q_)(t, e.id))) ? _ : [],
        threadMessages: B(e.threads),
        voice_states: e.voice_states,
        version: e.version,
        hasThreadsSubscription: e.has_threads_subscription
    };
}
function B(e) {
    let t = [];
    if (null != e) for (let n of e) null != n.most_recent_message && t.push(n.most_recent_message);
    return t;
}
function V(e, t, n) {
    t = null != t ? t : [];
    let r = new Set((null != n ? n : []).concat(t.map((e) => e.id)));
    return e.filter((e) => !r.has(e.id)).concat(t);
}
