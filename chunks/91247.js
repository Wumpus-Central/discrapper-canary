r.d(n, {
    TO: function () {
        return f;
    },
    dm: function () {
        return c;
    },
    uB: function () {
        return v;
    },
    vW: function () {
        return g;
    },
    zH: function () {
        return E;
    }
});
var i = r(653041);
var a = r(956067),
    o = r(218543),
    s = r(594174),
    l = r(626135),
    u = r(981631);
function c(e, n, r, i, s) {
    var c, f, p;
    let h = d(n);
    null != i && a.Z.addDetail('payload_size(kb)', Math.round(i.uncompressed_byte_size / 1024)), a.Z.addDetail('server_time(ms)', null !== (c = h.identify_total_server_duration_ms) && void 0 !== c ? c : 0);
    let _ = {
        ...i,
        ...h,
        ...m(n),
        ...s,
        duration_ms_since_identify_start: r - e.identifyStartTime,
        duration_ms_since_connection_start: r - e.connectionStartTime,
        duration_ms_since_emit_start: Date.now() - r,
        is_reconnect: e.hasConnectedOnce,
        is_fast_connect: e.isFastConnect,
        did_force_clear_guild_hashes: e.didForceClearGuildHashes,
        identify_uncompressed_byte_size: e.identifyUncompressedByteSize,
        identify_compressed_byte_size: e.identifyCompressedByteSize,
        had_cache_at_startup: null !== (f = e.analytics.hadCacheAtStartup) && void 0 !== f && f,
        used_cache_at_startup: null !== (p = e.analytics.usedCacheAtStartup) && void 0 !== p && p
    };
    o.Z.attachReadyPayloadProperties(_), l.default.track(u.rMx.READY_PAYLOAD_RECEIVED, _, { logEventProperties: !0 });
}
function d(e) {
    let { _trace: n } = e,
        r = {};
    try {
        let e = JSON.parse(n);
        null != e[0] && '' !== e[0] && e[0].startsWith('gateway-') && (r.identify_total_server_duration_ms = Math.floor(e[1].micros / 1000)),
            _(e, (e, n) => {
                'start_session' === e ? (r.identify_api_duration_ms = Math.floor(n / 1000)) : 'guilds_connect' === e && (r.identify_guilds_duration_ms = Math.floor(n / 1000));
            });
    } catch (e) {}
    return r;
}
function f(e) {
    try {
        var n;
        let r = p(null === (n = e._trace) || void 0 === n ? void 0 : n[0]);
        if (null != r) return r;
    } catch (e) {}
    return null != e._trace ? e._trace.join(' -> ') : '???';
}
function p(e) {
    return null == e ? null : h(JSON.parse(e), '');
}
function h(e, n) {
    if (null == e) return '';
    let r = '';
    for (let i = 0; i < e.length; i += 2)
        r +=
            '\n'
                .concat(n)
                .concat(e[i], ': ')
                .concat(e[i + 1].micros / 1000) + h(e[i + 1].calls, n + '|  ');
    return r;
}
function _(e, n) {
    if (null != e && e.length > 0)
        for (let r = 0; r < e.length; r += 2) {
            let i = e[r],
                a = e[r + 1];
            n(i, a.micros), _(a.calls, n);
        }
}
function m(e) {
    let { guilds: n } = e,
        r = 0,
        i = 0;
    return (
        n.forEach((e) => {
            if (e.unavailable) return;
            let n = 'partial' === e.data_mode ? e.partial_updates.channels : e.channels;
            null != n &&
                null != n.forEach &&
                n.forEach((e) => {
                    i++, e.type === u.d4z.GUILD_CATEGORY && r++;
                });
        }),
        {
            num_guilds: n.length,
            num_guild_channels: i,
            num_guild_category_channels: r
        }
    );
}
function g(e) {
    var n, r;
    let i = Date.now(),
        { guilds: a, merged_presences: o, merged_members: s, read_state: l, private_channels: u, user_guild_settings: c, user_settings: d, user_settings_proto: f, experiments: p, guild_experiments: h, relationships: _, users: m, ...g } = e,
        E = [],
        v = [],
        y = [],
        b = [],
        I = [],
        T = [],
        S = [],
        A = [];
    return (
        a.forEach((e) => {
            var n;
            if (e.unavailable) return;
            let { features: r, ...i } = null !== (n = e.properties) && void 0 !== n ? n : {},
                { threads: a, guild_scheduled_events: o, ...s } = e;
            E.push('partial' === e.data_mode ? e.partial_updates.channels : e.channels), v.push('partial' === e.data_mode ? e.partial_updates.roles : e.roles), y.push('partial' === e.data_mode ? e.partial_updates.emojis : e.emojis), b.push(a), I.push('partial' === e.data_mode ? e.partial_updates.stickers : e.stickers), T.push(r), S.push(o), A.push(s, i);
        }),
        {
            presences_size: JSON.stringify(null !== (n = null == o ? void 0 : o.friends) && void 0 !== n ? n : []).length,
            users_size: JSON.stringify(m).length,
            read_states_size: JSON.stringify(l).length,
            private_channels_size: JSON.stringify(u).length,
            user_settings_size: JSON.stringify(null != d ? d : '').length + (null != f ? f : '').length,
            experiments_size: JSON.stringify(null != p ? p : []).length + JSON.stringify(null != h ? h : []).length,
            user_guild_settings_size: JSON.stringify(c).length,
            relationships_size: JSON.stringify(_).length,
            remaining_data_size: JSON.stringify(null != g ? g : {}).length,
            guild_channels_size: JSON.stringify(E).length,
            guild_members_size: JSON.stringify(null != s ? s : []).length,
            guild_presences_size: JSON.stringify(null !== (r = null == o ? void 0 : o.guilds) && void 0 !== r ? r : []).length,
            guild_roles_size: JSON.stringify(v).length,
            guild_emojis_size: JSON.stringify(y).length,
            guild_threads_size: JSON.stringify(b).length,
            guild_stickers_size: JSON.stringify(I).length,
            guild_events_size: JSON.stringify(S).length,
            guild_features_size: JSON.stringify(T).length,
            guild_remaining_data_size: JSON.stringify(A).length,
            size_metrics_duration_ms: Date.now() - i
        }
    );
}
function E(e) {
    return {
        connectTime: null != e ? e : 0,
        numEvents: 0,
        largestWaitTime: 0,
        dispatchTime: 0,
        totalWaitTime: 0,
        initialWaitTime: 0,
        startTime: performance.now(),
        lastUpdateTime: performance.now()
    };
}
function v(e) {
    var n;
    !(!(null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.isStaff()) && 0.5 > Math.random()) &&
        l.default.track(
            u.rMx.CONNECTION_RESUMED,
            {
                connect_time_ms: e.connectTime,
                resume_time_ms: Math.floor(performance.now() - e.startTime),
                num_events: e.numEvents,
                largest_wait_time_ms: Math.floor(e.largestWaitTime),
                initial_wait_time_ms: Math.floor(e.initialWaitTime),
                total_wait_time_ms: Math.floor(e.totalWaitTime),
                total_dispatch_time_ms: Math.floor(e.dispatchTime)
            },
            { logEventProperties: !0 }
        );
}
