n.d(t, {
    TO: () => m,
    dm: () => p,
    uB: () => I,
    vW: () => O,
    zH: () => v
}),
    n(539854),
    n(49124);
var r = n(956067);
n(17089);
var i = n(218543),
    a = n(594174),
    o = n(626135),
    s = n(981631);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function p(e, t, n, a, l) {
    var u, f, _;
    let p = h(t);
    null != a && r.Z.addDetail('payload_size(kb)', Math.round(a.uncompressed_byte_size / 1024)), r.Z.addDetail('server_time(ms)', null != (u = p.identify_total_server_duration_ms) ? u : 0);
    let m = d(c({}, a, p, y(t), l), {
        duration_ms_since_identify_start: n - e.identifyStartTime,
        duration_ms_since_connection_start: n - e.connectionStartTime,
        duration_ms_since_emit_start: Date.now() - n,
        is_reconnect: e.hasConnectedOnce,
        is_fast_connect: e.isFastConnect,
        did_force_clear_guild_hashes: e.didForceClearGuildHashes,
        identify_uncompressed_byte_size: e.identifyUncompressedByteSize,
        identify_compressed_byte_size: e.identifyCompressedByteSize,
        had_cache_at_startup: null != (f = e.analytics.hadCacheAtStartup) && f,
        used_cache_at_startup: null != (_ = e.analytics.usedCacheAtStartup) && _
    });
    i.Z.attachReadyPayloadProperties(m), o.default.track(s.rMx.READY_PAYLOAD_RECEIVED, m, { logEventProperties: !0 });
}
function h(e) {
    let { _trace: t } = e,
        n = {};
    try {
        let e = JSON.parse(t);
        null != e[0] && '' !== e[0] && e[0].startsWith('gateway-') && (n.identify_total_server_duration_ms = Math.floor(e[1].micros / 1000)),
            b(e, (e, t) => {
                'start_session' === e ? (n.identify_api_duration_ms = Math.floor(t / 1000)) : 'guilds_connect' === e && (n.identify_guilds_duration_ms = Math.floor(t / 1000));
            });
    } catch (e) {}
    return n;
}
function m(e) {
    try {
        var t;
        let n = g(null == (t = e._trace) ? void 0 : t[0]);
        if (null != n) return n;
    } catch (e) {}
    return null != e._trace ? e._trace.join(' -> ') : '???';
}
function g(e) {
    return null == e ? null : E(JSON.parse(e), '');
}
function E(e, t) {
    if (null == e) return '';
    let n = '';
    for (let r = 0; r < e.length; r += 2)
        (n += '\n'
            .concat(t)
            .concat(e[r], ': ')
            .concat(e[r + 1].micros / 1000)),
            (n += E(e[r + 1].calls, t + '|  '));
    return n;
}
function b(e, t) {
    if (null != e && e.length > 0)
        for (let n = 0; n < e.length; n += 2) {
            let r = e[n],
                i = e[n + 1];
            t(r, i.micros), b(i.calls, t);
        }
}
function y(e) {
    let { guilds: t } = e,
        n = 0,
        r = 0;
    return (
        t.forEach((e) => {
            if (e.unavailable) return;
            let t = 'partial' === e.data_mode ? e.partial_updates.channels : e.channels;
            null != t &&
                null != t.forEach &&
                t.forEach((e) => {
                    r++, e.type === s.d4z.GUILD_CATEGORY && n++;
                });
        }),
        {
            num_guilds: t.length,
            num_guild_channels: r,
            num_guild_category_channels: n
        }
    );
}
function O(e) {
    var t, n;
    let r = Date.now(),
        { guilds: i, merged_presences: a, merged_members: o, read_state: s, private_channels: l, user_guild_settings: c, user_settings: u, user_settings_proto: d, experiments: _, guild_experiments: p, relationships: h, users: m } = e,
        g = f(e, ['guilds', 'merged_presences', 'merged_members', 'read_state', 'private_channels', 'user_guild_settings', 'user_settings', 'user_settings_proto', 'experiments', 'guild_experiments', 'relationships', 'users']),
        E = [],
        b = [],
        y = [],
        O = [],
        v = [],
        I = [],
        S = [],
        T = [];
    return (
        i.forEach((e) => {
            var t;
            if (e.unavailable) return;
            let n = null != (t = e.properties) ? t : {},
                { features: r } = n,
                i = f(n, ['features']),
                { threads: a, guild_scheduled_events: o } = e,
                s = f(e, ['threads', 'guild_scheduled_events']);
            E.push('partial' === e.data_mode ? e.partial_updates.channels : e.channels), b.push('partial' === e.data_mode ? e.partial_updates.roles : e.roles), y.push('partial' === e.data_mode ? e.partial_updates.emojis : e.emojis), O.push(a), v.push('partial' === e.data_mode ? e.partial_updates.stickers : e.stickers), I.push(r), S.push(o), T.push(s, i);
        }),
        {
            presences_size: JSON.stringify(null != (t = null == a ? void 0 : a.friends) ? t : []).length,
            users_size: JSON.stringify(m).length,
            read_states_size: JSON.stringify(s).length,
            private_channels_size: JSON.stringify(l).length,
            user_settings_size: JSON.stringify(null != u ? u : '').length + (null != d ? d : '').length,
            experiments_size: JSON.stringify(null != _ ? _ : []).length + JSON.stringify(null != p ? p : []).length,
            user_guild_settings_size: JSON.stringify(c).length,
            relationships_size: JSON.stringify(h).length,
            remaining_data_size: JSON.stringify(null != g ? g : {}).length,
            guild_channels_size: JSON.stringify(E).length,
            guild_members_size: JSON.stringify(null != o ? o : []).length,
            guild_presences_size: JSON.stringify(null != (n = null == a ? void 0 : a.guilds) ? n : []).length,
            guild_roles_size: JSON.stringify(b).length,
            guild_emojis_size: JSON.stringify(y).length,
            guild_threads_size: JSON.stringify(O).length,
            guild_stickers_size: JSON.stringify(v).length,
            guild_events_size: JSON.stringify(S).length,
            guild_features_size: JSON.stringify(I).length,
            guild_remaining_data_size: JSON.stringify(T).length,
            size_metrics_duration_ms: Date.now() - r
        }
    );
}
function v(e) {
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
function I(e) {
    var t;
    (!(null == (t = a.default.getCurrentUser()) ? void 0 : t.isStaff()) && 0.5 > Math.random()) ||
        o.default.track(
            s.rMx.CONNECTION_RESUMED,
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
