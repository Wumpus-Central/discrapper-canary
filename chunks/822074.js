"use strict";
let l, i, s, r;
n.d(t, { A: () => k }), n(321073);
var a = n(435558),
    o = n.n(a),
    u = n(17928),
    c = n(228366),
    d = n(432371),
    h = n(115718),
    m = n(736056),
    f = n(174768),
    p = n(734057),
    g = n(71393),
    x = n(573163),
    A = n(309010),
    C = n(543465),
    E = n(287809),
    I = n(927813),
    y = n(935208);
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
var S = n(521732);
let N = {},
    _ = {},
    T = {},
    j = [],
    b = {},
    R = { status: "ok", lastRequest: null, lastResponse: null },
    O = [],
    M = [];
function L() {
    O = f.A.getProps()
        .results.filter((e) => e.type === h.rD.TEXT_CHANNEL && 0 === e.record.type)
        .map((e) => e.record.id);
}
class w extends u.Ay.PersistedStore {
    static persistKey = "SummaryStore";
    getState() {
        return { shouldShowTopicsBar: l };
    }
    initialize(e) {
        (l = e?.shouldShowTopicsBar ?? !0),
            this.waitFor(p.A, m.A, g.A, f.A, x.Ay, A.Ay, C.Ay, E.default),
            this.syncWith([f.A], L);
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
                    y.default.extractTimestamp(e.endId) > new Date().getTime() - 5 * I.A.Millis.HOUR,
            )
            .sort((e, t) => y.default.extractTimestamp(t.endId) - y.default.extractTimestamp(e.endId));
    }
    summaries(e) {
        return N[e] ?? M;
    }
    shouldShowTopicsBar() {
        return l;
    }
    findSummary(e, t) {
        return this.summaries(e).find((e) => e.id === t) ?? null;
    }
    selectedSummary(e) {
        return null != r && r.channelId === e && null != r.summaryId ? this.findSummary(e, r?.summaryId) : null;
    }
    summaryFeedback(e) {
        return null == e ? null : T[e.id];
    }
    isFetching(e, t) {
        return null != t ? _[e]?.summaryId === t : _[e]?.fetching === !0;
    }
    status(e) {
        return _[e];
    }
    shouldFetch(e, t) {
        let n = _[e],
            l = p.A.getChannel(e);
        if (!(0, d.pk)(l)) return !1;
        if (null != t) {
            let e = n?.summaryIdLastRequestedAt ?? 0,
                l = Date.now() - e;
            return t !== n?.summaryId || l > S.hf;
        }
        let i = n?.lastReceivedAt ?? 0;
        return !n?.fetching && 0 === i;
    }
    channelAffinities() {
        return j;
    }
    channelAffinitiesById() {
        return b;
    }
    channelAffinitiesStatus() {
        return R;
    }
    shouldFetchChannelAffinities() {
        return !(
            "fetching" === R.status ||
            (null != R.lastResponse && Date.now() - R.lastResponse < 30 * I.A.Millis.SECOND)
        );
    }
    defaultChannelIds(e) {
        let { withQuickSwitcher: t, withChannelAffinities: n, withUnreads: l, numChannels: i = 25 } = e,
            s = [];
        return (
            t && (s = s.concat(O)),
            n && (s = s.concat(j.map((e) => e.channel_id))),
            l &&
                (s = s.filter((e) => {
                    let t = p.A.getChannel(e);
                    return null != t && !C.Ay.isChannelMuted(t.guild_id, e) && x.Ay.hasUnread(e);
                })),
            (s = s.filter((e) => {
                let t = p.A.getChannel(e);
                return (0, d.pk)(t, !1, !1);
            })).slice(0, i)
        );
    }
    visibleSummaryIndex() {
        return s;
    }
}
let k = new w(c.h, {
    CONNECTION_OPEN: () => !1,
    CHANNEL_SELECT(e) {
        let { channelId: t } = e;
        r?.channelId !== t && (r = null);
    },
    TOGGLE_TOPICS_BAR() {
        l = !l;
    },
    RECEIVE_CHANNEL_SUMMARY(e) {
        let { summary: t, channelId: n, error: l, receivedAt: i } = e;
        if (null != t && Object.keys(t).length > 0) {
            let e = v(t, n),
                l = [...(N[n] ?? [])],
                i = l.findIndex((t) => t.id === e?.id);
            i > -1 ? (l[i] = e) : l.push(e), (N[n] = l);
        }
        let s = { ...(_[n] ?? { fetching: !1 }), summaryId: void 0, summaryIdLastReceivedAt: i, summaryIdError: l };
        _[n] = s;
    },
    REQUEST_CHANNEL_SUMMARY(e) {
        let { channelId: t, summaryId: n, requestedAt: l } = e;
        _[t] = { ...(_[t] ?? { fetching: !1 }), summaryId: n, summaryIdLastRequestedAt: l };
    },
    RECEIVE_CHANNEL_SUMMARIES(e) {
        let { summaries: t, channelId: n, error: l, receivedAt: i } = e,
            s = t.filter((e) => Object.keys(e).length > 0).map((e) => v(e, n));
        if (null != r && r.channelId === n && !s.some((e) => e.id === r?.summaryId)) {
            let e = (N[n] ?? []).find((e) => e.id === r?.summaryId);
            null != e && s.push(e);
        }
        N[n] = (0, a.sortBy)(s, (e) => y.default.extractTimestamp(e.startId)).reverse();
        let o = { ..._[n], fetching: !1, error: void 0, lastReceivedAt: i };
        null != l && (o.error = l), (_[n] = o);
    },
    REQUEST_CHANNEL_SUMMARIES(e) {
        _[e.channelId] = { ...(_[e.channelId] ?? {}), fetching: !0, lastRequestedAt: e.requestedAt };
    },
    SET_HIGHLIGHTED_SUMMARY(e) {
        if ((null == i && null == e.channelId) || (e.channelId === i?.channelId && e.summaryId === i?.summaryId))
            return !1;
        if (
            null != (i = null != e.channelId ? { channelId: e.channelId, summaryId: e.summaryId ?? null } : null) &&
            i.channelId === e.channelId &&
            null != i.summaryId
        ) {
            let e = N[i.channelId];
            s = e?.findIndex((e) => e.id === i?.summaryId);
        }
    },
    UPDATE_VISIBLE_MESSAGES(e) {
        let t = A.Ay.getChannelId();
        if (null != t)
            if (null != i && i.channelId === t && null != i.summaryId) {
                let e = N[i.channelId];
                s = e?.findIndex((e) => e.id === i?.summaryId);
            } else
                s = N[t]?.findIndex((t) => {
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
            : (t !== r?.channelId || e.summaryId !== r?.summaryId) &&
                  void (r = { channelId: t, summaryId: e.summaryId ?? null });
    },
    SET_SUMMARY_FEEDBACK(e) {
        let { summary: t, rating: n } = e;
        null != n ? (T[t.id] = n) : delete T[t.id];
    },
    REQUEST_CHANNEL_AFFINITIES() {
        R = { ...R, status: "fetching", lastRequest: Date.now() };
    },
    RECEIVE_CHANNEL_AFFINITIES(e) {
        let { affinities: t, error: n } = e;
        if (null != n) {
            (j = []), (b = {}), (R = { ...R, status: "error", lastResponse: Date.now() });
            return;
        }
        (j = t ?? []),
            (b = t?.reduce((e, t) => ((e[t.channel_id] = t.affinity), e), {}) ?? {}),
            (R = { ...R, status: "ok", lastResponse: Date.now() });
    },
    REQUEST_CHANNEL_SUMMARIES_BULK(e) {
        let { channelIds: t, requestedAt: n } = e,
            l = t.reduce((e, t) => {
                let l = _[t] ?? {};
                return (e[t] = { ...l, fetching: !0, lastRequestedAt: n, error: void 0 }), e;
            }, {});
        _ = { ..._, ...l };
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
                            .sortBy((e) => y.default.extractTimestamp(e.startId))
                            .takeRight(75)
                            .reverse()
                            .filter((e) => Object.keys(e).length > 0)
                            .value();
                    return (e[n] = i), e;
                }, {}),
            r = i.reduce(
                (e, t) => {
                    let i = _[t] ?? {},
                        r = s[t];
                    return (
                        null != r && (e.summariesByChannel[t] = r),
                        (e.summaryFetchStatusByChannel[t] = { ...i, fetching: !1, error: l, lastReceivedAt: n }),
                        e
                    );
                },
                { summariesByChannel: {}, summaryFetchStatusByChannel: {} },
            );
        (N = { ...N, ...r.summariesByChannel }), (_ = { ..._, ...r.summaryFetchStatusByChannel });
    },
    CONVERSATION_SUMMARY_UPDATE(e) {
        let { channel_id: t, summaries: n, guild_id: l } = e,
            i = Date.now(),
            s = o()
                .chain(n)
                .sortBy((e) => y.default.extractTimestamp(e.start_id))
                .filter((e) => Object.keys(e).length > 0)
                .map((e) => v(e, t))
                .reverse()
                .value(),
            r = N[t] ?? [],
            a = o()
                .chain(s)
                .concat(r)
                .sortBy((e) => y.default.extractTimestamp(e.startId))
                .takeRight(75)
                .uniqBy("id")
                .reverse()
                .value();
        (N[t] = a), (_[t] = { ..._[t], error: void 0, fetching: _[t]?.fetching ?? !1, lastReceivedAt: i });
    },
    CLEAR_CONVERSATION_SUMMARIES() {
        (N = {}), (_ = {});
    },
    DELETE_SUMMARY(e) {
        let t = e.summary.channelId,
            n = (N[t] ?? []).indexOf(e.summary);
        -1 !== n && N[t].splice(n, 1);
    },
});
