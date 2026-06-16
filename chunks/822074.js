"use strict";
let i, r, s, a;
n.d(t, { A: () => x }), n(321073);
var o = n(735438),
    l = n.n(o),
    u = n(17928),
    c = n(228366),
    d = n(432371),
    _ = n(115718),
    h = n(736056),
    f = n(174768),
    p = n(734057),
    E = n(71393),
    m = n(222823),
    g = n(309010),
    A = n(543465),
    I = n(287809),
    T = n(927813),
    S = n(935208);
function y(e, t) {
    return {
        id: e.id,
        topic: e.topic,
        summShort: e.summ_short,
        people: Array.from(new Set(e.people)),
        startId: e.start_id,
        endId: e.end_id,
        count: e.count,
        channelId: t,
        source: e.source,
        type: e.type,
    };
}
var C = n(521732);
let N = {},
    v = {},
    R = {},
    O = [],
    b = {},
    D = { status: "ok", lastRequest: null, lastResponse: null },
    L = [],
    w = [];
function M() {
    L = f.A.getProps()
        .results.filter((e) => e.type === _.rD.TEXT_CHANNEL && 0 === e.record.type)
        .map((e) => e.record.id);
}
class P extends u.Ay.PersistedStore {
    static persistKey = "SummaryStore";
    getState() {
        return { shouldShowTopicsBar: i };
    }
    initialize(e) {
        (i = e?.shouldShowTopicsBar ?? !0),
            this.waitFor(p.A, h.A, E.A, f.A, m.Ay, g.A, A.Ay, I.default),
            this.syncWith([f.A], M);
    }
    allSummaries() {
        return N;
    }
    topSummaries() {
        return Object.values(N)
            .flat()
            .filter(
                (e) =>
                    e.people.length > 1 &&
                    S.default.extractTimestamp(e.endId) > new Date().getTime() - 5 * T.A.Millis.HOUR,
            )
            .sort((e, t) => S.default.extractTimestamp(t.endId) - S.default.extractTimestamp(e.endId));
    }
    summaries(e) {
        return N[e] ?? w;
    }
    shouldShowTopicsBar() {
        return i;
    }
    findSummary(e, t) {
        return this.summaries(e).find((e) => e.id === t) ?? null;
    }
    selectedSummary(e) {
        return null != a && a.channelId === e && null != a.summaryId ? this.findSummary(e, a?.summaryId) : null;
    }
    summaryFeedback(e) {
        return null == e ? null : R[e.id];
    }
    isFetching(e, t) {
        return null != t ? v[e]?.summaryId === t : v[e]?.fetching === !0;
    }
    status(e) {
        return v[e];
    }
    shouldFetch(e, t) {
        let n = v[e],
            i = p.A.getChannel(e);
        if (!(0, d.pk)(i)) return !1;
        if (null != t) {
            let e = n?.summaryIdLastRequestedAt ?? 0,
                i = Date.now() - e;
            return t !== n?.summaryId || i > C.hf;
        }
        let r = n?.lastReceivedAt ?? 0;
        return !n?.fetching && 0 === r;
    }
    channelAffinities() {
        return O;
    }
    channelAffinitiesById() {
        return b;
    }
    channelAffinitiesStatus() {
        return D;
    }
    shouldFetchChannelAffinities() {
        return !(
            "fetching" === D.status ||
            (null != D.lastResponse && Date.now() - D.lastResponse < 30 * T.A.Millis.SECOND)
        );
    }
    defaultChannelIds(e) {
        let { withQuickSwitcher: t, withChannelAffinities: n, withUnreads: i, numChannels: r = 25 } = e,
            s = [];
        return (
            t && (s = s.concat(L)),
            n && (s = s.concat(O.map((e) => e.channel_id))),
            i &&
                (s = s.filter((e) => {
                    let t = p.A.getChannel(e);
                    return null != t && !A.Ay.isChannelMuted(t.guild_id, e) && m.Ay.hasUnread(e);
                })),
            (s = s.filter((e) => {
                let t = p.A.getChannel(e);
                return (0, d.pk)(t, !1, !1);
            })).slice(0, r)
        );
    }
    visibleSummaryIndex() {
        return s;
    }
}
let x = new P(c.h, {
    CONNECTION_OPEN: () => !1,
    CHANNEL_SELECT(e) {
        let { channelId: t } = e;
        a?.channelId !== t && (a = null);
    },
    TOGGLE_TOPICS_BAR() {
        i = !i;
    },
    RECEIVE_CHANNEL_SUMMARY(e) {
        let { summary: t, channelId: n, error: i, receivedAt: r } = e;
        if (null != t && Object.keys(t).length > 0) {
            let e = y(t, n),
                i = [...(N[n] ?? [])],
                r = i.findIndex((t) => t.id === e?.id);
            r > -1 ? (i[r] = e) : i.push(e), (N[n] = i);
        }
        let s = { ...(v[n] ?? { fetching: !1 }), summaryId: void 0, summaryIdLastReceivedAt: r, summaryIdError: i };
        v[n] = s;
    },
    REQUEST_CHANNEL_SUMMARY(e) {
        let { channelId: t, summaryId: n, requestedAt: i } = e;
        v[t] = { ...(v[t] ?? { fetching: !1 }), summaryId: n, summaryIdLastRequestedAt: i };
    },
    RECEIVE_CHANNEL_SUMMARIES(e) {
        let { summaries: t, channelId: n, error: i, receivedAt: r } = e,
            s = t.filter((e) => Object.keys(e).length > 0).map((e) => y(e, n));
        if (null != a && a.channelId === n && !s.some((e) => e.id === a?.summaryId)) {
            let e = (N[n] ?? []).find((e) => e.id === a?.summaryId);
            null != e && s.push(e);
        }
        N[n] = (0, o.sortBy)(s, (e) => S.default.extractTimestamp(e.startId)).reverse();
        let l = { ...v[n], fetching: !1, error: void 0, lastReceivedAt: r };
        null != i && (l.error = i), (v[n] = l);
    },
    REQUEST_CHANNEL_SUMMARIES(e) {
        v[e.channelId] = { ...(v[e.channelId] ?? {}), fetching: !0, lastRequestedAt: e.requestedAt };
    },
    SET_HIGHLIGHTED_SUMMARY(e) {
        if ((null == r && null == e.channelId) || (e.channelId === r?.channelId && e.summaryId === r?.summaryId))
            return !1;
        if (
            null != (r = null != e.channelId ? { channelId: e.channelId, summaryId: e.summaryId ?? null } : null) &&
            r.channelId === e.channelId &&
            null != r.summaryId
        ) {
            let e = N[r.channelId];
            s = e?.findIndex((e) => e.id === r?.summaryId);
        }
    },
    UPDATE_VISIBLE_MESSAGES(e) {
        let t = g.A.getChannelId();
        if (null != t)
            if (null != r && r.channelId === t && null != r.summaryId) {
                let e = N[r.channelId];
                s = e?.findIndex((e) => e.id === r?.summaryId);
            } else
                s = N[t]?.findIndex((t) => {
                    var n, i, r, s;
                    return (
                        (n = e.topVisibleMessage),
                        (i = e.bottomVisibleMessage),
                        (r = t.startId),
                        (s = t.endId),
                        !(null == n || n > s) && !(null == i || i < r)
                    );
                });
    },
    SET_SELECTED_SUMMARY(e) {
        let t = e.channelId;
        return null == t
            ? null
            : (t !== a?.channelId || e.summaryId !== a?.summaryId) &&
                  void (a = { channelId: t, summaryId: e.summaryId ?? null });
    },
    SET_SUMMARY_FEEDBACK(e) {
        let { summary: t, rating: n } = e;
        null != n ? (R[t.id] = n) : delete R[t.id];
    },
    REQUEST_CHANNEL_AFFINITIES() {
        D = { ...D, status: "fetching", lastRequest: Date.now() };
    },
    RECEIVE_CHANNEL_AFFINITIES(e) {
        let { affinities: t, error: n } = e;
        if (null != n) {
            (O = []), (b = {}), (D = { ...D, status: "error", lastResponse: Date.now() });
            return;
        }
        (O = t ?? []),
            (b = t?.reduce((e, t) => ((e[t.channel_id] = t.affinity), e), {}) ?? {}),
            (D = { ...D, status: "ok", lastResponse: Date.now() });
    },
    REQUEST_CHANNEL_SUMMARIES_BULK(e) {
        let { channelIds: t, requestedAt: n } = e,
            i = t.reduce((e, t) => {
                let i = v[t] ?? {};
                return (e[t] = { ...i, fetching: !0, lastRequestedAt: n, error: void 0 }), e;
            }, {});
        v = { ...v, ...i };
    },
    RECEIVE_CHANNEL_SUMMARIES_BULK(e) {
        let {
                summaries: t,
                receivedAt: n,
                error: i,
                requestArgs: { channelIds: r },
            } = e,
            s = l()
                .toPairs(t)
                .reduce((e, t) => {
                    let [n, i] = t,
                        r = l()
                            .chain(i.map((e) => y(e, n)))
                            .sortBy((e) => S.default.extractTimestamp(e.startId))
                            .takeRight(75)
                            .reverse()
                            .filter((e) => Object.keys(e).length > 0)
                            .value();
                    return (e[n] = r), e;
                }, {}),
            a = r.reduce(
                (e, t) => {
                    let r = v[t] ?? {},
                        a = s[t];
                    return (
                        null != a && (e.summariesByChannel[t] = a),
                        (e.summaryFetchStatusByChannel[t] = { ...r, fetching: !1, error: i, lastReceivedAt: n }),
                        e
                    );
                },
                { summariesByChannel: {}, summaryFetchStatusByChannel: {} },
            );
        (N = { ...N, ...a.summariesByChannel }), (v = { ...v, ...a.summaryFetchStatusByChannel });
    },
    CONVERSATION_SUMMARY_UPDATE(e) {
        let { channel_id: t, summaries: n, guild_id: i } = e,
            r = Date.now(),
            s = l()
                .chain(n)
                .sortBy((e) => S.default.extractTimestamp(e.start_id))
                .filter((e) => Object.keys(e).length > 0)
                .map((e) => y(e, t))
                .reverse()
                .value(),
            a = N[t] ?? [],
            o = l()
                .chain(s)
                .concat(a)
                .sortBy((e) => S.default.extractTimestamp(e.startId))
                .takeRight(75)
                .uniqBy("id")
                .reverse()
                .value();
        (N[t] = o), (v[t] = { ...v[t], error: void 0, fetching: v[t]?.fetching ?? !1, lastReceivedAt: r });
    },
    CLEAR_CONVERSATION_SUMMARIES() {
        (N = {}), (v = {});
    },
    DELETE_SUMMARY(e) {
        let t = e.summary.channelId,
            n = (N[t] ?? []).indexOf(e.summary);
        -1 !== n && N[t].splice(n, 1);
    },
});
