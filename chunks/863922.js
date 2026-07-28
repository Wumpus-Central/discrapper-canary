"use strict";
n.d(t, { $T: () => p, Ay: () => L, C6: () => T, C7: () => N, O$: () => R, Oz: () => m, sK: () => g, s_: () => S });
var i = n(582128),
    r = n(435558),
    a = n.n(r),
    s = n(702841),
    l = n(562465),
    o = n(228366),
    d = n(913122),
    c = n(432371),
    u = n(617710),
    _ = n(734057),
    E = n(927813),
    A = n(822074),
    h = n(652215);
let I = 30 * E.A.Millis.SECOND;
async function f(e, t) {
    let n, i;
    if (!A.A.shouldFetch(e, t)) return;
    let r = Date.now();
    o.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARY", channelId: e, summaryId: t, requestedAt: r });
    try {
        let n = await l.Bo.get({ url: h.BVt.CHANNEL_SUMMARY(e, t), rejectWithError: !1 });
        i = n?.body;
    } catch (e) {
        n = new d.LG(e);
    }
    o.h.dispatch({
        type: "RECEIVE_CHANNEL_SUMMARY",
        channelId: e,
        summary: i,
        error: n,
        requestedAt: r,
        receivedAt: Date.now(),
    });
}
async function p(e) {
    let t, n;
    if (!A.A.shouldFetch(e)) return;
    let i = Date.now();
    o.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARIES", channelId: e, requestedAt: i });
    try {
        n = await l.Bo.get({ url: h.BVt.CHANNEL_SUMMARIES(e), rejectWithError: !1 });
    } catch (e) {
        t = new d.LG(e);
    }
    let r = n?.body?.summaries instanceof Array ? n.body.summaries : (n?.body ?? []);
    (r = a().takeRight(r, 75)),
        o.h.dispatch({
            type: "RECEIVE_CHANNEL_SUMMARIES",
            channelId: e,
            summaries: r,
            error: t ?? void 0,
            requestedAt: i,
            receivedAt: Date.now(),
        });
}
function T(e, t) {
    o.h.dispatch({ type: "SET_HIGHLIGHTED_SUMMARY", channelId: e, summaryId: t ?? null });
}
function m() {
    o.h.dispatch({ type: "TOGGLE_TOPICS_BAR" });
}
function g(e, t) {
    null != e && null != t && f(e, t),
        o.h.dispatch({ type: "SET_SELECTED_SUMMARY", channelId: e, summaryId: t ?? null });
}
function S(e, t) {
    o.h.dispatch({ type: "UPDATE_VISIBLE_MESSAGES", topVisibleMessage: e ?? null, bottomVisibleMessage: t ?? null });
}
function N(e, t) {
    o.h.dispatch({ type: "SET_SUMMARY_FEEDBACK", summary: e, rating: t });
}
async function C() {
    let e, t;
    if (!A.A.shouldFetchChannelAffinities()) return Promise.resolve(null);
    let n = Date.now();
    o.h.dispatch({ type: "REQUEST_CHANNEL_AFFINITIES", requestedAt: n });
    try {
        t = await l.Bo.get({ url: "/users/@me/affinities/channels", rejectWithError: !1 });
    } catch (t) {
        e = new d.LG(t);
    }
    let i = t?.body?.channel_affinities;
    o.h.dispatch({
        type: "RECEIVE_CHANNEL_AFFINITIES",
        affinities: i,
        error: e ?? void 0,
        requestedAt: n,
        receivedAt: Date.now(),
    });
}
async function O(e) {
    let t,
        n,
        { useQuickSwitcher: i = !0, useChannelAffinities: r = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    e = e ?? [];
    let a = Date.now();
    if (
        0 ===
        (e = e
            .concat(A.A.defaultChannelIds({ withQuickSwitcher: i, withChannelAffinities: r }))
            .filter((e) => {
                let t = _.A.getChannel(e);
                return (0, c.pk)(t, !1, !0);
            })
            .filter((e) => {
                let t = Date.now(),
                    n = A.A.status(e);
                if (n?.fetching) return !1;
                let i = n?.lastReceivedAt;
                return null == i || t - i > I;
            })
            .slice(0, 50)).length
    )
        return Promise.resolve(null);
    o.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARIES_BULK", channelIds: e, requestedAt: a });
    try {
        n = await l.Bo.post({ url: h.BVt.USER_SUMMARIES, body: { channel_ids: e }, rejectWithError: !1 });
    } catch (e) {
        t = new d.LG(e);
    }
    let s = n?.body.summaries;
    o.h.dispatch({
        type: "RECEIVE_CHANNEL_SUMMARIES_BULK",
        requestedAt: a,
        receivedAt: Date.now(),
        summaries: s,
        requestArgs: { channelIds: e },
        error: t,
    });
}
async function R(e) {
    try {
        await l.Bo.del({ url: h.BVt.CHANNEL_SUMMARY(e.channelId, e.id), rejectWithError: !1 }),
            o.h.dispatch({ type: "DELETE_SUMMARY", summary: e });
    } catch (e) {
        throw new d.LG(e);
    }
}
let L = {
    setSummaryFeedback: N,
    updateVisibleMessages: S,
    setSelectedSummary: g,
    setHighlightedSummary: T,
    fetchSummaries: p,
    fetchSummariesBulk: O,
    useChannelSummaries: function (e) {
        let { channelIds: t = [] } = e;
        return (
            !(function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = (0, s.bG)([u.A], () => u.A.isConnected()),
                    n = i.useMemo(() => e.join(","), [e]);
                i.useEffect(() => {
                    t && e();
                    async function e() {
                        try {
                            await C();
                        } catch (e) {}
                        await O(n.split(","));
                    }
                }, [n, t]);
            })(t),
            (0, s.yK)([A.A], () => A.A.topSummaries(), [])
        );
    },
    deleteSummary: R,
};
