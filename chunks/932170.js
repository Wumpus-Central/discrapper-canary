"use strict";
n.d(t, { Gx: () => _, Js: () => c, Lh: () => l, Qo: () => d, m6: () => u }), n(321073);
var r = n(61090);
n(423034);
var i = n(614792),
    s = n(287809),
    a = n(954571),
    o = n(652215);
function l(e, t, n, s, l) {
    let u = (function (e) {
        let { _trace: t } = e,
            n = {};
        try {
            let e = JSON.parse(t);
            null != e[0] &&
                "" !== e[0] &&
                e[0].startsWith("gateway-") &&
                (n.identify_total_server_duration_ms = Math.floor(e[1].micros / 1e3)),
                (function e(t, n) {
                    if (null != t && t.length > 0)
                        for (let r = 0; r < t.length; r += 2) {
                            let i = t[r],
                                s = t[r + 1];
                            n(i, s.micros), e(s.calls, n);
                        }
                })(e, (e, t) => {
                    "start_session" === e
                        ? (n.identify_api_duration_ms = Math.floor(t / 1e3))
                        : "guilds_connect" === e && (n.identify_guilds_duration_ms = Math.floor(t / 1e3));
                });
        } catch (e) {}
        return n;
    })(t);
    null != s && r.A.addDetail("payload_size(kb)", Math.round(s.uncompressed_byte_size / 1024)),
        r.A.addDetail("server_time(ms)", u.identify_total_server_duration_ms ?? 0);
    let c = {
        ...s,
        ...u,
        ...(function (e) {
            let { guilds: t } = e,
                n = 0,
                r = 0;
            return (
                t.forEach((e) => {
                    if (e.unavailable) return;
                    let t = "partial" === e.data_mode ? e.partial_updates.channels : e.channels;
                    null != t &&
                        null != t.forEach &&
                        t.forEach((e) => {
                            r++, e.type === o.rbe.GUILD_CATEGORY && n++;
                        });
                }),
                { num_guilds: t.length, num_guild_channels: r, num_guild_category_channels: n }
            );
        })(t),
        ...l,
        duration_ms_since_identify_start: n - e.identifyStartTime,
        duration_ms_since_connection_start: n - e.connectionStartTime,
        duration_ms_since_emit_start: Date.now() - n,
        is_reconnect: e.hasConnectedOnce,
        is_fast_connect: e.isFastConnect,
        did_force_clear_guild_hashes: e.didForceClearGuildHashes,
        identify_uncompressed_byte_size: e.identifyUncompressedByteSize,
        identify_compressed_byte_size: e.identifyCompressedByteSize,
        had_cache_at_startup: e.analytics.hadCacheAtStartup ?? !1,
        used_cache_at_startup: e.analytics.usedCacheAtStartup ?? !1,
    };
    i.A.attachReadyPayloadProperties(c), a.default.track(o.HAw.READY_PAYLOAD_RECEIVED, c, { logEventProperties: !0 });
}
function u(e) {
    try {
        var t;
        let n =
            ((t = e._trace?.[0]),
            null == t
                ? null
                : (function e(t, n) {
                      if (null == t) return "";
                      let r = "";
                      for (let i = 0; i < t.length; i += 2)
                          (r += `
${n}${t[i]}: ${t[i + 1].micros / 1e3}`),
                              (r += e(t[i + 1].calls, n + "|  "));
                      return r;
                  })(JSON.parse(t), ""));
        if (null != n) return n;
    } catch (e) {}
    return null != e._trace ? e._trace.join(" -> ") : "???";
}
function c(e) {
    let t = Date.now(),
        {
            guilds: n,
            merged_presences: r,
            merged_members: i,
            read_state: s,
            private_channels: a,
            user_guild_settings: o,
            user_settings: l,
            user_settings_proto: u,
            experiments: c,
            guild_experiments: d,
            relationships: _,
            users: f,
            ...p
        } = e,
        h = [],
        E = [],
        m = [],
        g = [],
        A = [],
        I = [],
        T = [],
        S = [];
    return (
        n.forEach((e) => {
            if (e.unavailable) return;
            let { features: t, ...n } = e.properties ?? {},
                { threads: r, guild_scheduled_events: i, ...s } = e;
            h.push("partial" === e.data_mode ? e.partial_updates.channels : e.channels),
                E.push("partial" === e.data_mode ? e.partial_updates.roles : e.roles),
                m.push("partial" === e.data_mode ? e.partial_updates.emojis : e.emojis),
                g.push(r),
                A.push("partial" === e.data_mode ? e.partial_updates.stickers : e.stickers),
                I.push(t),
                T.push(i),
                S.push(s, n);
        }),
        {
            presences_size: JSON.stringify(r?.friends ?? []).length,
            users_size: JSON.stringify(f).length,
            read_states_size: JSON.stringify(s).length,
            private_channels_size: JSON.stringify(a).length,
            user_settings_size: JSON.stringify(l ?? "").length + (u ?? "").length,
            experiments_size: JSON.stringify(c ?? []).length + JSON.stringify(d ?? []).length,
            user_guild_settings_size: JSON.stringify(o).length,
            relationships_size: JSON.stringify(_).length,
            remaining_data_size: JSON.stringify(p ?? {}).length,
            guild_channels_size: JSON.stringify(h).length,
            guild_members_size: JSON.stringify(i ?? []).length,
            guild_presences_size: JSON.stringify(r?.guilds ?? []).length,
            guild_roles_size: JSON.stringify(E).length,
            guild_emojis_size: JSON.stringify(m).length,
            guild_threads_size: JSON.stringify(g).length,
            guild_stickers_size: JSON.stringify(A).length,
            guild_events_size: JSON.stringify(T).length,
            guild_features_size: JSON.stringify(I).length,
            guild_remaining_data_size: JSON.stringify(S).length,
            size_metrics_duration_ms: Date.now() - t,
        }
    );
}
function d(e) {
    return {
        connectTime: e ?? 0,
        numEvents: 0,
        largestWaitTime: 0,
        dispatchTime: 0,
        totalWaitTime: 0,
        initialWaitTime: 0,
        startTime: performance.now(),
        lastUpdateTime: performance.now(),
    };
}
function _(e) {
    (!s.default.getCurrentUser()?.isStaff() && 0.5 > Math.random()) ||
        a.default.track(
            o.HAw.CONNECTION_RESUMED,
            {
                connect_time_ms: e.connectTime,
                resume_time_ms: Math.floor(performance.now() - e.startTime),
                num_events: e.numEvents,
                largest_wait_time_ms: Math.floor(e.largestWaitTime),
                initial_wait_time_ms: Math.floor(e.initialWaitTime),
                total_wait_time_ms: Math.floor(e.totalWaitTime),
                total_dispatch_time_ms: Math.floor(e.dispatchTime),
            },
            { logEventProperties: !0 },
        );
}
