"use strict";
let l, i, s, a;
n.d(t, { A: () => M }), n(321073);
var r = n(735438),
    o = n.n(r),
    c = n(17928),
    u = n(228366),
    d = n(432371),
    h = n(115718),
    m = n(736056),
    p = n(174768),
    f = n(734057),
    g = n(71393),
    _ = n(222823),
    x = n(309010),
    C = n(543465),
    A = n(287809),
    E = n(927813),
    I = n(935208);
function v(e, t) {
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
var y = n(521732);
let b = {},
    S = {},
    N = {},
    j = [],
    T = {},
    w = { status: "ok", lastRequest: null, lastResponse: null },
    R = [],
    L = [];
function k() {
    R = p.A.getProps()
        .results.filter((e) => e.type === h.rD.TEXT_CHANNEL && 0 === e.record.type)
        .map((e) => e.record.id);
}
class O extends c.Ay.PersistedStore {
    static persistKey = "SummaryStore";
    getState() {
        return { shouldShowTopicsBar: l };
    }
    initialize(e) {
        (l = e?.shouldShowTopicsBar ?? !0),
            this.waitFor(f.A, m.A, g.A, p.A, _.Ay, x.A, C.Ay, A.default),
            this.syncWith([p.A], k);
    }
    allSummaries() {
        return b;
    }
    topSummaries() {
        return Object.values(b)
            .flat()
            .filter(
                (e) =>
                    e.people.length > 1 &&
                    I.default.extractTimestamp(e.endId) > new Date().getTime() - 5 * E.A.Millis.HOUR,
            )
            .sort((e, t) => I.default.extractTimestamp(t.endId) - I.default.extractTimestamp(e.endId));
    }
    summaries(e) {
        return b[e] ?? L;
    }
    shouldShowTopicsBar() {
        return l;
    }
    findSummary(e, t) {
        return this.summaries(e).find((e) => e.id === t) ?? null;
    }
    selectedSummary(e) {
        return null != a && a.channelId === e && null != a.summaryId ? this.findSummary(e, a?.summaryId) : null;
    }
    summaryFeedback(e) {
        return null == e ? null : N[e.id];
    }
    isFetching(e, t) {
        return null != t ? S[e]?.summaryId === t : S[e]?.fetching === !0;
    }
    status(e) {
        return S[e];
    }
    shouldFetch(e, t) {
        let n = S[e],
            l = f.A.getChannel(e);
        if (!(0, d.pk)(l)) return !1;
        if (null != t) {
            let e = n?.summaryIdLastRequestedAt ?? 0,
                l = Date.now() - e;
            return t !== n?.summaryId || l > y.hf;
        }
        let i = n?.lastReceivedAt ?? 0;
        return !n?.fetching && 0 === i;
    }
    channelAffinities() {
        return j;
    }
    channelAffinitiesById() {
        return T;
    }
    channelAffinitiesStatus() {
        return w;
    }
    shouldFetchChannelAffinities() {
        return !(
            "fetching" === w.status ||
            (null != w.lastResponse && Date.now() - w.lastResponse < 30 * E.A.Millis.SECOND)
        );
    }
    defaultChannelIds(e) {
        let { withQuickSwitcher: t, withChannelAffinities: n, withUnreads: l, numChannels: i = 25 } = e,
            s = [];
        return (
            t && (s = s.concat(R)),
            n && (s = s.concat(j.map((e) => e.channel_id))),
            l &&
                (s = s.filter((e) => {
                    let t = f.A.getChannel(e);
                    return null != t && !C.Ay.isChannelMuted(t.guild_id, e) && _.Ay.hasUnread(e);
                })),
            (s = s.filter((e) => {
                let t = f.A.getChannel(e);
                return (0, d.pk)(t, !1, !1);
            })).slice(0, i)
        );
    }
    visibleSummaryIndex() {
        return s;
    }
}
let M = new O(u.h, {
    CONNECTION_OPEN: () => !1,
    CHANNEL_SELECT(e) {
        let { channelId: t } = e;
        a?.channelId !== t && (a = null);
    },
    TOGGLE_TOPICS_BAR() {
        l = !l;
    },
    RECEIVE_CHANNEL_SUMMARY(e) {
        let { summary: t, channelId: n, error: l, receivedAt: i } = e;
        if (null != t && Object.keys(t).length > 0) {
            let e = v(t, n),
                l = [...(b[n] ?? [])],
                i = l.findIndex((t) => t.id === e?.id);
            i > -1 ? (l[i] = e) : l.push(e), (b[n] = l);
        }
        let s = { ...(S[n] ?? { fetching: !1 }), summaryId: void 0, summaryIdLastReceivedAt: i, summaryIdError: l };
        S[n] = s;
    },
    REQUEST_CHANNEL_SUMMARY(e) {
        let { channelId: t, summaryId: n, requestedAt: l } = e;
        S[t] = { ...(S[t] ?? { fetching: !1 }), summaryId: n, summaryIdLastRequestedAt: l };
    },
    RECEIVE_CHANNEL_SUMMARIES(e) {
        let { summaries: t, channelId: n, error: l, receivedAt: i } = e,
            s = t.filter((e) => Object.keys(e).length > 0).map((e) => v(e, n));
        if (null != a && a.channelId === n && !s.some((e) => e.id === a?.summaryId)) {
            let e = (b[n] ?? []).find((e) => e.id === a?.summaryId);
            null != e && s.push(e);
        }
        b[n] = (0, r.sortBy)(s, (e) => I.default.extractTimestamp(e.startId)).reverse();
        let o = { ...S[n], fetching: !1, error: void 0, lastReceivedAt: i };
        null != l && (o.error = l), (S[n] = o);
    },
    REQUEST_CHANNEL_SUMMARIES(e) {
        S[e.channelId] = { ...(S[e.channelId] ?? {}), fetching: !0, lastRequestedAt: e.requestedAt };
    },
    SET_HIGHLIGHTED_SUMMARY(e) {
        if ((null == i && null == e.channelId) || (e.channelId === i?.channelId && e.summaryId === i?.summaryId))
            return !1;
        if (
            null != (i = null != e.channelId ? { channelId: e.channelId, summaryId: e.summaryId ?? null } : null) &&
            i.channelId === e.channelId &&
            null != i.summaryId
        ) {
            let e = b[i.channelId];
            s = e?.findIndex((e) => e.id === i?.summaryId);
        }
    },
    UPDATE_VISIBLE_MESSAGES(e) {
        let t = x.A.getChannelId();
        if (null != t)
            if (null != i && i.channelId === t && null != i.summaryId) {
                let e = b[i.channelId];
                s = e?.findIndex((e) => e.id === i?.summaryId);
            } else
                s = b[t]?.findIndex((t) => {
                    var n, l, i, s;
                    return (
                        (n = e.topVisibleMessage),
                        (l = e.bottomVisibleMessage),
                        (i = t.startId),
                        (s = t.endId),
                        !(null == n || n > s) && !(null == l || l < i)
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
        null != n ? (N[t.id] = n) : delete N[t.id];
    },
    REQUEST_CHANNEL_AFFINITIES() {
        w = { ...w, status: "fetching", lastRequest: Date.now() };
    },
    RECEIVE_CHANNEL_AFFINITIES(e) {
        let { affinities: t, error: n } = e;
        if (null != n) {
            (j = []), (T = {}), (w = { ...w, status: "error", lastResponse: Date.now() });
            return;
        }
        (j = t ?? []),
            (T = t?.reduce((e, t) => ((e[t.channel_id] = t.affinity), e), {}) ?? {}),
            (w = { ...w, status: "ok", lastResponse: Date.now() });
    },
    REQUEST_CHANNEL_SUMMARIES_BULK(e) {
        let { channelIds: t, requestedAt: n } = e,
            l = t.reduce((e, t) => {
                let l = S[t] ?? {};
                return (e[t] = { ...l, fetching: !0, lastRequestedAt: n, error: void 0 }), e;
            }, {});
        S = { ...S, ...l };
    },
    RECEIVE_CHANNEL_SUMMARIES_BULK(e) {
        let {
                summaries: t,
                receivedAt: n,
                error: l,
                requestArgs: { channelIds: i },
            } = e,
            s = o()
                .toPairs(t)
                .reduce((e, t) => {
                    let [n, l] = t,
                        i = o()
                            .chain(l.map((e) => v(e, n)))
                            .sortBy((e) => I.default.extractTimestamp(e.startId))
                            .takeRight(75)
                            .reverse()
                            .filter((e) => Object.keys(e).length > 0)
                            .value();
                    return (e[n] = i), e;
                }, {}),
            a = i.reduce(
                (e, t) => {
                    let i = S[t] ?? {},
                        a = s[t];
                    return (
                        null != a && (e.summariesByChannel[t] = a),
                        (e.summaryFetchStatusByChannel[t] = { ...i, fetching: !1, error: l, lastReceivedAt: n }),
                        e
                    );
                },
                { summariesByChannel: {}, summaryFetchStatusByChannel: {} },
            );
        (b = { ...b, ...a.summariesByChannel }), (S = { ...S, ...a.summaryFetchStatusByChannel });
    },
    CONVERSATION_SUMMARY_UPDATE(e) {
        let { channel_id: t, summaries: n, guild_id: l } = e,
            i = Date.now(),
            s = o()
                .chain(n)
                .sortBy((e) => I.default.extractTimestamp(e.start_id))
                .filter((e) => Object.keys(e).length > 0)
                .map((e) => v(e, t))
                .reverse()
                .value(),
            a = b[t] ?? [],
            r = o()
                .chain(s)
                .concat(a)
                .sortBy((e) => I.default.extractTimestamp(e.startId))
                .takeRight(75)
                .uniqBy("id")
                .reverse()
                .value();
        (b[t] = r), (S[t] = { ...S[t], error: void 0, fetching: S[t]?.fetching ?? !1, lastReceivedAt: i });
    },
    CLEAR_CONVERSATION_SUMMARIES() {
        (b = {}), (S = {});
    },
    DELETE_SUMMARY(e) {
        let t = e.summary.channelId,
            n = (b[t] ?? []).indexOf(e.summary);
        -1 !== n && b[t].splice(n, 1);
    },
});
