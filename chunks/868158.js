r.d(n, {
    Eb: function () {
        return O;
    },
    Fx: function () {
        return L;
    },
    IM: function () {
        return D;
    },
    J2: function () {
        return U;
    },
    r$: function () {
        return R;
    }
});
var i = r(653041);
var a = r(47120);
var o = r(411104);
var s = r(512722),
    l = r.n(s),
    u = r(392711),
    c = r.n(u),
    d = r(287328),
    f = r(406966),
    p = r(795513),
    h = r(591526),
    _ = r(261875),
    m = r(768433),
    g = r(710845),
    E = r(339085),
    v = r(926491),
    y = r(131704),
    b = r(430824),
    I = r(306680),
    T = r(411198);
let S = new g.Z('ReadyPayloadUtils'),
    A = {},
    C = null,
    N = {};
function R(e, n) {
    var r;
    let { guilds: i, merged_members: a, merged_presences: o, ...s } = e,
        l = w(N, null == o ? void 0 : o.friends),
        u =
            null !==
                (r =
                    null == i
                        ? void 0
                        : i.map((e, n) => {
                              let r = w(N, null == o ? void 0 : o.guilds[n]),
                                  i = w(N, null == a ? void 0 : a[n]);
                              return {
                                  ...e,
                                  unavailable: void 0 === e.voice_states,
                                  presences: r,
                                  members: i
                              };
                          })) && void 0 !== r
                ? r
                : [],
        c = x(n, i, (e) => ({
            id: e.id,
            members: e.members,
            presences: e.presences,
            activity_instances: e.activity_instances,
            voice_states: e.voice_states,
            unavailable: !1
        }));
    return (
        null != c && u.push(c),
        (N = {}),
        {
            ...s,
            presences: l,
            guilds: u
        }
    );
}
function O() {
    let e = d.Z.database(),
        n = (0, m.O)() ? f.Z.getCommittedVersions() : Promise.resolve({}),
        r = (0, m.O)() ? h.Z.getGuildIds() : Promise.resolve(new Set());
    return Promise.all([n, r, null != e ? p.Z.okAsync(e) : Promise.resolve(!1)]).then((e) => {
        let [n, r, i] = e;
        return {
            guildVersions: n,
            guildChannels: r,
            databaseOk: i
        };
    });
}
function D(e, n, r) {
    var i;
    let { users: a, relationships: o, private_channels: s, merged_members: u, guilds: d, ...f } = e;
    M(r);
    let p = w((N = c().keyBy(a, (e) => e.id)), o);
    null == s ||
        s.forEach((e) => {
            let n = e.recipient_ids;
            null != n && (e.recipients = n.map((e) => (l()(null != N[e], 'Missing user in compressed ready payload'), N[e]))), delete e.recipient_ids;
        });
    let h = null !== (i = null == d ? void 0 : d.map((e, n) => (!0 === e.unavailable ? e : ((e.members = w(N, null == u ? void 0 : u[n])), k(e))))) && void 0 !== i ? i : [],
        _ = x(n, d, (e) => k(e));
    return (
        null != _ && h.push(_),
        {
            ...f,
            users: a,
            presences: [],
            relationships: p,
            guilds: h,
            private_channels: null != s ? s : []
        }
    );
}
function x(e, n, r) {
    return null == C || C.identifyTime !== e || (null != n && n.some((e) => e.id === C.guild.id)) ? null : r(C.guild);
}
function L(e, n) {
    var r, i, a;
    let o = b.Z.getGuild(e.id),
        s = U(
            e,
            null == o
                ? void 0
                : {
                      properties: T.tK(o),
                      roles: b.Z.getRoles(o.id),
                      emojis: null !== (i = null === (r = E.ZP.getGuilds()[o.id]) || void 0 === r ? void 0 : r.rawEmojis) && void 0 !== i ? i : null,
                      stickers: null !== (a = v.Z.getRawStickersByGuild().get(o.id)) && void 0 !== a ? a : null,
                      readStates: {}
                  }
        );
    return (
        (C = {
            guild: e,
            identifyTime: n
        }),
        s
    );
}
function w(e, n) {
    let r = [];
    return (
        null == n ||
            n.forEach((n) => {
                if (null == n) return;
                let i = n.user_id;
                null != i && (l()(null != e[i], 'Missing user['.concat(i, '] in compressed ready payload')), (n.user = e[i])), delete n.user_id, r.push(n);
            }),
        r
    );
}
function P(e) {
    let n = A[e];
    return delete A[e], n;
}
function M(e) {
    null != d.Z.database() && !1 === e.databaseOk && _.Z.replaceDisableAllDatabases('ReadyPayloadUtils: database was not ok'), (A = {});
    let n = Object.values(b.Z.getGuilds()),
        r = E.ZP.getGuilds(),
        i = v.Z.getRawStickersByGuild(),
        a = I.ZP.getReadStatesByChannel();
    for (let u of n) {
        var o, s, l;
        if (u.id in e.guildVersions && !!e.guildChannels.has(u.id))
            A[u.id] = {
                properties: T.tK(u),
                roles: b.Z.getRoles(u.id),
                emojis: null !== (s = null === (o = r[u.id]) || void 0 === o ? void 0 : o.rawEmojis) && void 0 !== s ? s : null,
                stickers: null !== (l = i.get(u.id)) && void 0 !== l ? l : null,
                readStates: a
            };
    }
}
function k(e) {
    var n, r, i, a, o, s, l, u, c, d, f, p;
    let h = P(e.id);
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
            threads: null !== (a = null === (i = e.threads) || void 0 === i ? void 0 : i.map((n) => (0, y.q_)(n, e.id))) && void 0 !== a ? a : [],
            threadMessages: B(e.threads),
            channels: e.channels.map((n) => ((n.guild_id = e.id), (0, y.q_)(n, e.id))),
            version: e.version,
            hasThreadsSubscription: e.has_threads_subscription
        };
    if (null == h) throw (S.log('no cache entry for partial guild (guild: '.concat(e.id, ', type: ready)')), Error('Guild data was missing from store, but hash was still available.'));
    return {
        id: e.id,
        dataMode: e.data_mode,
        channels: null,
        channelUpdates: {
            writes: null !== (o = null === (n = e.partial_updates.channels) || void 0 === n ? void 0 : n.map((n) => (0, y.q_)(n, e.id))) && void 0 !== o ? o : [],
            deletes: null !== (s = e.partial_updates.deleted_channel_ids) && void 0 !== s ? s : []
        },
        channelTimestampUpdates: e.channel_updates,
        emojis: null == h.emojis ? null : G(h.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
        emojiUpdates: {
            writes: null !== (l = e.partial_updates.emojis) && void 0 !== l ? l : [],
            deletes: null !== (u = e.partial_updates.deleted_emoji_ids) && void 0 !== u ? u : []
        },
        guild_scheduled_events: e.guild_scheduled_events,
        joined_at: e.joined_at,
        lastMessages: e.last_messages,
        member_count: e.member_count,
        members: e.members,
        premium_subscription_count: e.premium_subscription_count,
        properties: null !== (c = e.properties) && void 0 !== c ? c : null,
        roles: T.EO(e.id, h.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
        stage_instances: e.stage_instances,
        stickers: null == h.stickers ? null : G(h.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
        stickerUpdates: {
            writes: null !== (d = e.partial_updates.stickers) && void 0 !== d ? d : [],
            deletes: null !== (f = e.partial_updates.deleted_sticker_ids) && void 0 !== f ? f : []
        },
        unableToSyncDeletes: e.unable_to_sync_deletes,
        threads: null !== (p = null === (r = e.threads) || void 0 === r ? void 0 : r.map((n) => (0, y.q_)(n, e.id))) && void 0 !== p ? p : [],
        threadMessages: B(e.threads),
        version: e.version,
        hasThreadsSubscription: e.has_threads_subscription
    };
}
function U(e, n) {
    var r, i, a, o, s, l, u, c, d, f, p, h;
    if ((null == n && (n = P(e.id)), 'partial' !== e.data_mode))
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
            threads: null !== (o = null === (a = e.threads) || void 0 === a ? void 0 : a.map((n) => (0, y.q_)(n, e.id))) && void 0 !== o ? o : [],
            threadMessages: B(e.threads),
            channels: e.channels.map((n) => ((n.guild_id = e.id), (0, y.q_)(n, e.id))),
            presences: e.presences,
            activity_instances: e.activity_instances,
            voice_states: e.voice_states,
            version: e.version,
            hasThreadsSubscription: e.has_threads_subscription
        };
    if (null == n) throw (S.log('no cache entry for partial guild (guild: '.concat(e.id, ', type: post_ready)')), Error('Guild data was missing from store, but hash was still available.'));
    return {
        id: e.id,
        channels: null,
        channelUpdates: {
            writes: null !== (s = null === (r = e.partial_updates.channels) || void 0 === r ? void 0 : r.map((n) => (0, y.q_)(n, e.id))) && void 0 !== s ? s : [],
            deletes: null !== (l = e.partial_updates.deleted_channel_ids) && void 0 !== l ? l : []
        },
        channelTimestampUpdates: e.channel_updates,
        activity_instances: e.activity_instances,
        emojis: null == n.emojis ? null : G(n.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
        emojiUpdates: {
            writes: null !== (u = e.partial_updates.emojis) && void 0 !== u ? u : [],
            deletes: null !== (c = e.partial_updates.deleted_emoji_ids) && void 0 !== c ? c : []
        },
        guild_scheduled_events: e.guild_scheduled_events,
        joined_at: e.joined_at,
        lastMessages: e.last_messages,
        member_count: e.member_count,
        members: e.members,
        premium_subscription_count: e.premium_subscription_count,
        presences: e.presences,
        properties: null !== (d = e.properties) && void 0 !== d ? d : n.properties,
        roles: T.EO(e.id, n.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
        stage_instances: e.stage_instances,
        stickers: null == n.stickers ? null : G(n.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
        stickerUpdates: {
            writes: null !== (f = e.partial_updates.stickers) && void 0 !== f ? f : [],
            deletes: null !== (p = e.partial_updates.deleted_sticker_ids) && void 0 !== p ? p : []
        },
        unableToSyncDeletes: e.unable_to_sync_deletes,
        threads: null !== (h = null === (i = e.threads) || void 0 === i ? void 0 : i.map((n) => (0, y.q_)(n, e.id))) && void 0 !== h ? h : [],
        threadMessages: B(e.threads),
        voice_states: e.voice_states,
        version: e.version,
        hasThreadsSubscription: e.has_threads_subscription
    };
}
function B(e) {
    let n = [];
    if (null != e) for (let r of e) null != r.most_recent_message && n.push(r.most_recent_message);
    return n;
}
function G(e, n, r) {
    n = null != n ? n : [];
    let i = new Set((null != r ? r : []).concat(n.map((e) => e.id)));
    return e.filter((e) => !i.has(e.id)).concat(n);
}
