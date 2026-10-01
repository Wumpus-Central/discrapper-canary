let n, a, l, i;
(s.d(t, { A: () => L }), s(321073));
var r = s(435558),
    o = s.n(r),
    u = s(17928),
    d = s(73153),
    c = s(432371),
    h = s(115718),
    m = s(736056),
    p = s(174768),
    f = s(734057),
    g = s(71393),
    v = s(573163),
    C = s(309010),
    A = s(543465),
    x = s(287809),
    y = s(927813),
    S = s(935208);
function _(e, t) {
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
var E = s(521732);
let N = {},
    j = {},
    M = {},
    I = [],
    T = {},
    b = { status: "ok", lastRequest: null, lastResponse: null },
    w = [],
    R = [];
function D() {
    w = p.A.getProps()
        .results.filter((e) => e.type === h.rD.TEXT_CHANNEL && 0 === e.record.type)
        .map((e) => e.record.id);
}
class k extends u.Ay.PersistedStore {
    static persistKey = "SummaryStore";
    getState() {
        return { shouldShowTopicsBar: n };
    }
    initialize(e) {
        ((n = e?.shouldShowTopicsBar ?? !0),
            this.waitFor(f.A, m.A, g.A, p.A, v.Ay, C.Ay, A.Ay, x.default),
            this.syncWith([p.A], D));
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
                    S.default.extractTimestamp(e.endId) > new Date().getTime() - 5 * y.A.Millis.HOUR,
            )
            .sort((e, t) => S.default.extractTimestamp(t.endId) - S.default.extractTimestamp(e.endId));
    }
    summaries(e) {
        return N[e] ?? R;
    }
    shouldShowTopicsBar() {
        return n;
    }
    findSummary(e, t) {
        return this.summaries(e).find((e) => e.id === t) ?? null;
    }
    selectedSummary(e) {
        return null != i && i.channelId === e && null != i.summaryId ? this.findSummary(e, i?.summaryId) : null;
    }
    summaryFeedback(e) {
        return null == e ? null : M[e.id];
    }
    isFetching(e, t) {
        return null != t ? j[e]?.summaryId === t : j[e]?.fetching === !0;
    }
    status(e) {
        return j[e];
    }
    shouldFetch(e, t) {
        let s = j[e],
            n = f.A.getChannel(e);
        if (!(0, c.pk)(n)) return !1;
        if (null != t) {
            let e = s?.summaryIdLastRequestedAt ?? 0,
                n = Date.now() - e;
            return t !== s?.summaryId || n > E.hf;
        }
        let a = s?.lastReceivedAt ?? 0;
        return !s?.fetching && 0 === a;
    }
    channelAffinities() {
        return I;
    }
    channelAffinitiesById() {
        return T;
    }
    channelAffinitiesStatus() {
        return b;
    }
    shouldFetchChannelAffinities() {
        return !(
            "fetching" === b.status ||
            (null != b.lastResponse && Date.now() - b.lastResponse < 30 * y.A.Millis.SECOND)
        );
    }
    defaultChannelIds(e) {
        let { withQuickSwitcher: t, withChannelAffinities: s, withUnreads: n, numChannels: a = 25 } = e,
            l = [];
        return (
            t && (l = l.concat(w)),
            s && (l = l.concat(I.map((e) => e.channel_id))),
            n &&
                (l = l.filter((e) => {
                    let t = f.A.getChannel(e);
                    return null != t && !A.Ay.isChannelMuted(t.guild_id, e) && v.Ay.hasUnread(e);
                })),
            (l = l.filter((e) => {
                let t = f.A.getChannel(e);
                return (0, c.pk)(t, !1, !1);
            })).slice(0, a)
        );
    }
    visibleSummaryIndex() {
        return l;
    }
}
let L = new k(d.h, {
    CONNECTION_OPEN: () => !1,
    CHANNEL_SELECT(e) {
        let { channelId: t } = e;
        i?.channelId !== t && (i = null);
    },
    TOGGLE_TOPICS_BAR() {
        n = !n;
    },
    RECEIVE_CHANNEL_SUMMARY(e) {
        let { summary: t, channelId: s, error: n, receivedAt: a } = e;
        if (null != t && Object.keys(t).length > 0) {
            let e = _(t, s),
                n = [...(N[s] ?? [])],
                a = n.findIndex((t) => t.id === e?.id);
            (a > -1 ? (n[a] = e) : n.push(e), (N[s] = n));
        }
        let l = { ...(j[s] ?? { fetching: !1 }), summaryId: void 0, summaryIdLastReceivedAt: a, summaryIdError: n };
        j[s] = l;
    },
    REQUEST_CHANNEL_SUMMARY(e) {
        let { channelId: t, summaryId: s, requestedAt: n } = e;
        j[t] = { ...(j[t] ?? { fetching: !1 }), summaryId: s, summaryIdLastRequestedAt: n };
    },
    RECEIVE_CHANNEL_SUMMARIES(e) {
        let { summaries: t, channelId: s, error: n, receivedAt: a } = e,
            l = t.filter((e) => Object.keys(e).length > 0).map((e) => _(e, s));
        if (null != i && i.channelId === s && !l.some((e) => e.id === i?.summaryId)) {
            let e = (N[s] ?? []).find((e) => e.id === i?.summaryId);
            null != e && l.push(e);
        }
        N[s] = (0, r.sortBy)(l, (e) => S.default.extractTimestamp(e.startId)).reverse();
        let o = { ...j[s], fetching: !1, error: void 0, lastReceivedAt: a };
        (null != n && (o.error = n), (j[s] = o));
    },
    REQUEST_CHANNEL_SUMMARIES(e) {
        j[e.channelId] = { ...(j[e.channelId] ?? {}), fetching: !0, lastRequestedAt: e.requestedAt };
    },
    SET_HIGHLIGHTED_SUMMARY(e) {
        if ((null == a && null == e.channelId) || (e.channelId === a?.channelId && e.summaryId === a?.summaryId))
            return !1;
        if (
            null != (a = null != e.channelId ? { channelId: e.channelId, summaryId: e.summaryId ?? null } : null) &&
            a.channelId === e.channelId &&
            null != a.summaryId
        ) {
            let e = N[a.channelId];
            l = e?.findIndex((e) => e.id === a?.summaryId);
        }
    },
    UPDATE_VISIBLE_MESSAGES(e) {
        let t = C.Ay.getChannelId();
        if (null != t)
            if (null != a && a.channelId === t && null != a.summaryId) {
                let e = N[a.channelId];
                l = e?.findIndex((e) => e.id === a?.summaryId);
            } else
                l = N[t]?.findIndex((t) => {
                    var s, n, a, l;
                    return (
                        (s = e.topVisibleMessage),
                        (n = e.bottomVisibleMessage),
                        (a = t.startId),
                        (l = t.endId),
                        !(null == s || s > l) && !(null == n || n < a)
                    );
                });
    },
    SET_SELECTED_SUMMARY(e) {
        let t = e.channelId;
        return null == t
            ? null
            : (t !== i?.channelId || e.summaryId !== i?.summaryId) &&
                  void (i = { channelId: t, summaryId: e.summaryId ?? null });
    },
    SET_SUMMARY_FEEDBACK(e) {
        let { summary: t, rating: s } = e;
        null != s ? (M[t.id] = s) : delete M[t.id];
    },
    REQUEST_CHANNEL_AFFINITIES() {
        b = { ...b, status: "fetching", lastRequest: Date.now() };
    },
    RECEIVE_CHANNEL_AFFINITIES(e) {
        let { affinities: t, error: s } = e;
        if (null != s) {
            ((I = []), (T = {}), (b = { ...b, status: "error", lastResponse: Date.now() }));
            return;
        }
        ((I = t ?? []),
            (T = t?.reduce((e, t) => ((e[t.channel_id] = t.affinity), e), {}) ?? {}),
            (b = { ...b, status: "ok", lastResponse: Date.now() }));
    },
    REQUEST_CHANNEL_SUMMARIES_BULK(e) {
        let { channelIds: t, requestedAt: s } = e,
            n = t.reduce((e, t) => {
                let n = j[t] ?? {};
                return ((e[t] = { ...n, fetching: !0, lastRequestedAt: s, error: void 0 }), e);
            }, {});
        j = { ...j, ...n };
    },
    RECEIVE_CHANNEL_SUMMARIES_BULK(e) {
        let {
                summaries: t,
                receivedAt: s,
                error: n,
                requestArgs: { channelIds: a },
            } = e,
            l = o()
                .toPairs(t)
                .reduce((e, t) => {
                    let [s, n] = t,
                        a = o()
                            .chain(n.map((e) => _(e, s)))
                            .sortBy((e) => S.default.extractTimestamp(e.startId))
                            .takeRight(75)
                            .reverse()
                            .filter((e) => Object.keys(e).length > 0)
                            .value();
                    return ((e[s] = a), e);
                }, {}),
            i = a.reduce(
                (e, t) => {
                    let a = j[t] ?? {},
                        i = l[t];
                    return (
                        null != i && (e.summariesByChannel[t] = i),
                        (e.summaryFetchStatusByChannel[t] = { ...a, fetching: !1, error: n, lastReceivedAt: s }),
                        e
                    );
                },
                { summariesByChannel: {}, summaryFetchStatusByChannel: {} },
            );
        ((N = { ...N, ...i.summariesByChannel }), (j = { ...j, ...i.summaryFetchStatusByChannel }));
    },
    CONVERSATION_SUMMARY_UPDATE(e) {
        let { channel_id: t, summaries: s, guild_id: n } = e,
            a = Date.now(),
            l = o()
                .chain(s)
                .sortBy((e) => S.default.extractTimestamp(e.start_id))
                .filter((e) => Object.keys(e).length > 0)
                .map((e) => _(e, t))
                .reverse()
                .value(),
            i = N[t] ?? [],
            r = o()
                .chain(l)
                .concat(i)
                .sortBy((e) => S.default.extractTimestamp(e.startId))
                .takeRight(75)
                .uniqBy("id")
                .reverse()
                .value();
        ((N[t] = r), (j[t] = { ...j[t], error: void 0, fetching: j[t]?.fetching ?? !1, lastReceivedAt: a }));
    },
    CLEAR_CONVERSATION_SUMMARIES() {
        ((N = {}), (j = {}));
    },
    DELETE_SUMMARY(e) {
        let t = e.summary.channelId,
            s = (N[t] ?? []).indexOf(e.summary);
        -1 !== s && N[t].splice(s, 1);
    },
});
