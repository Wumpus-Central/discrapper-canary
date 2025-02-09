n.d(t, {
    TO: () => c,
    dm: () => l,
    uB: () => g,
    vW: () => h,
    zH: () => m
}),
    n(653041);
var i = n(956067);
n(17089);
var r = n(218543),
    a = n(594174),
    s = n(626135),
    o = n(981631);
function l(e, t, n, a, l) {
    var c, d, f;
    let _ = u(t);
    null != a && i.Z.addDetail('payload_size(kb)', Math.round(a.uncompressed_byte_size / 1024)), i.Z.addDetail('server_time(ms)', null !== (c = _.identify_total_server_duration_ms) && void 0 !== c ? c : 0);
    let h = {
        ...a,
        ..._,
        ...p(t),
        ...l,
        duration_ms_since_identify_start: n - e.identifyStartTime,
        duration_ms_since_connection_start: n - e.connectionStartTime,
        duration_ms_since_emit_start: Date.now() - n,
        is_reconnect: e.hasConnectedOnce,
        is_fast_connect: e.isFastConnect,
        did_force_clear_guild_hashes: e.didForceClearGuildHashes,
        identify_uncompressed_byte_size: e.identifyUncompressedByteSize,
        identify_compressed_byte_size: e.identifyCompressedByteSize,
        had_cache_at_startup: null !== (d = e.analytics.hadCacheAtStartup) && void 0 !== d && d,
        used_cache_at_startup: null !== (f = e.analytics.usedCacheAtStartup) && void 0 !== f && f
    };
    r.Z.attachReadyPayloadProperties(h), s.default.track(o.rMx.READY_PAYLOAD_RECEIVED, h, { logEventProperties: !0 });
}
function u(e) {
    let { _trace: t } = e,
        n = {};
    try {
        let e = JSON.parse(t);
        null != e[0] && '' !== e[0] && e[0].startsWith('gateway-') && (n.identify_total_server_duration_ms = Math.floor(e[1].micros / 1000)),
            _(e, (e, t) => {
                'start_session' === e ? (n.identify_api_duration_ms = Math.floor(t / 1000)) : 'guilds_connect' === e && (n.identify_guilds_duration_ms = Math.floor(t / 1000));
            });
    } catch (e) {}
    return n;
}
function c(e) {
    try {
        var t;
        let n = d(null === (t = e._trace) || void 0 === t ? void 0 : t[0]);
        if (null != n) return n;
    } catch (e) {}
    return null != e._trace ? e._trace.join(' -> ') : '???';
}
function d(e) {
    return null == e ? null : f(JSON.parse(e), '');
}
function f(e, t) {
    if (null == e) return '';
    let n = '';
    for (let i = 0; i < e.length; i += 2)
        (n += '\n'
            .concat(t)
            .concat(e[i], ': ')
            .concat(e[i + 1].micros / 1000)),
            (n += f(e[i + 1].calls, t + '|  '));
    return n;
}
function _(e, t) {
    if (null != e && e.length > 0)
        for (let n = 0; n < e.length; n += 2) {
            let i = e[n],
                r = e[n + 1];
            t(i, r.micros), _(r.calls, t);
        }
}
function p(e) {
    let { guilds: t } = e,
        n = 0,
        i = 0;
    return (
        t.forEach((e) => {
            if (e.unavailable) return;
            let t = 'partial' === e.data_mode ? e.partial_updates.channels : e.channels;
            null != t &&
                null != t.forEach &&
                t.forEach((e) => {
                    i++, e.type === o.d4z.GUILD_CATEGORY && n++;
                });
        }),
        {
            num_guilds: t.length,
            num_guild_channels: i,
            num_guild_category_channels: n
        }
    );
}
function h(e) {
    var t, n;
    let i = Date.now(),
        { guilds: r, merged_presences: a, merged_members: s, read_state: o, private_channels: l, user_guild_settings: u, user_settings: c, user_settings_proto: d, experiments: f, guild_experiments: _, relationships: p, users: h, ...m } = e,
        g = [],
        E = [],
        v = [],
        y = [],
        I = [],
        T = [],
        b = [],
        S = [];
    return (
        r.forEach((e) => {
            var t;
            if (e.unavailable) return;
            let { features: n, ...i } = null !== (t = e.properties) && void 0 !== t ? t : {},
                { threads: r, guild_scheduled_events: a, ...s } = e;
            g.push('partial' === e.data_mode ? e.partial_updates.channels : e.channels), E.push('partial' === e.data_mode ? e.partial_updates.roles : e.roles), v.push('partial' === e.data_mode ? e.partial_updates.emojis : e.emojis), y.push(r), I.push('partial' === e.data_mode ? e.partial_updates.stickers : e.stickers), T.push(n), b.push(a), S.push(s, i);
        }),
        {
            presences_size: JSON.stringify(null !== (t = null == a ? void 0 : a.friends) && void 0 !== t ? t : []).length,
            users_size: JSON.stringify(h).length,
            read_states_size: JSON.stringify(o).length,
            private_channels_size: JSON.stringify(l).length,
            user_settings_size: JSON.stringify(null != c ? c : '').length + (null != d ? d : '').length,
            experiments_size: JSON.stringify(null != f ? f : []).length + JSON.stringify(null != _ ? _ : []).length,
            user_guild_settings_size: JSON.stringify(u).length,
            relationships_size: JSON.stringify(p).length,
            remaining_data_size: JSON.stringify(null != m ? m : {}).length,
            guild_channels_size: JSON.stringify(g).length,
            guild_members_size: JSON.stringify(null != s ? s : []).length,
            guild_presences_size: JSON.stringify(null !== (n = null == a ? void 0 : a.guilds) && void 0 !== n ? n : []).length,
            guild_roles_size: JSON.stringify(E).length,
            guild_emojis_size: JSON.stringify(v).length,
            guild_threads_size: JSON.stringify(y).length,
            guild_stickers_size: JSON.stringify(I).length,
            guild_events_size: JSON.stringify(b).length,
            guild_features_size: JSON.stringify(T).length,
            guild_remaining_data_size: JSON.stringify(S).length,
            size_metrics_duration_ms: Date.now() - i
        }
    );
}
function m(e) {
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
function g(e) {
    var t;
    (!(null === (t = a.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && 0.5 > Math.random()) ||
        s.default.track(
            o.rMx.CONNECTION_RESUMED,
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
