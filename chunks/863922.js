"use strict";
n.d(t, { $T: () => T, Ay: () => L, C6: () => y, C7: () => b, O$: () => D, Oz: () => S, sK: () => v, s_: () => C });
var r = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(417597),
    o = n(562465),
    l = n(73153),
    u = n(198982),
    c = n(432371),
    d = n(142120),
    _ = n(734057),
    f = n(927813),
    p = n(513272),
    h = n(652215);
let m = 75,
    g = 50,
    E = 30 * f.A.Millis.SECOND,
    A = null;
async function I(e, t) {
    let n, r;
    if (!p.A.shouldFetch(e, t)) return;
    let i = Date.now();
    l.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARY", channelId: e, summaryId: t, requestedAt: i });
    try {
        let n = await o.Bo.get({ url: h.BVt.CHANNEL_SUMMARY(e, t), rejectWithError: !1 });
        r = n?.body;
    } catch (e) {
        n = new u.LG(e);
    }
    l.h.dispatch({
        type: "RECEIVE_CHANNEL_SUMMARY",
        channelId: e,
        summary: r,
        error: n,
        requestedAt: i,
        receivedAt: Date.now(),
    });
}
async function T(e) {
    let t, n;
    if (!p.A.shouldFetch(e)) return;
    let r = Date.now();
    l.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARIES", channelId: e, requestedAt: r });
    try {
        n = await o.Bo.get({ url: h.BVt.CHANNEL_SUMMARIES(e), rejectWithError: !1 });
    } catch (e) {
        t = new u.LG(e);
    }
    let i = n?.body?.summaries instanceof Array ? n.body.summaries : (n?.body ?? []);
    (i = a().takeRight(i, m)),
        l.h.dispatch({
            type: "RECEIVE_CHANNEL_SUMMARIES",
            channelId: e,
            summaries: i,
            error: t ?? void 0,
            requestedAt: r,
            receivedAt: Date.now(),
        });
}
function y(e, t) {
    l.h.dispatch({ type: "SET_HIGHLIGHTED_SUMMARY", channelId: e, summaryId: t ?? null });
}
function S() {
    l.h.dispatch({ type: "TOGGLE_TOPICS_BAR" });
}
function v(e, t) {
    null != e && null != t && I(e, t),
        l.h.dispatch({ type: "SET_SELECTED_SUMMARY", channelId: e, summaryId: t ?? null });
}
function C(e, t) {
    l.h.dispatch({ type: "UPDATE_VISIBLE_MESSAGES", topVisibleMessage: e ?? null, bottomVisibleMessage: t ?? null });
}
function b(e, t) {
    l.h.dispatch({ type: "SET_SUMMARY_FEEDBACK", summary: e, rating: t });
}
async function N() {
    let e, t;
    if (!p.A.shouldFetchChannelAffinities()) return Promise.resolve(null);
    let n = Date.now();
    l.h.dispatch({ type: "REQUEST_CHANNEL_AFFINITIES", requestedAt: n });
    try {
        t = await o.Bo.get({ url: "/users/@me/affinities/channels", rejectWithError: !1 });
    } catch (t) {
        e = new u.LG(t);
    }
    let r = t?.body?.channel_affinities;
    l.h.dispatch({
        type: "RECEIVE_CHANNEL_AFFINITIES",
        affinities: r,
        error: e ?? void 0,
        requestedAt: n,
        receivedAt: Date.now(),
    });
}
async function R(e) {
    let t,
        n,
        { useQuickSwitcher: r = !0, useChannelAffinities: i = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    e = e ?? [];
    let a = Date.now();
    if (
        0 ===
        (e = e
            .concat(p.A.defaultChannelIds({ withQuickSwitcher: r, withChannelAffinities: i }))
            .filter((e) => {
                let t = _.A.getChannel(e);
                return (0, c.pk)(t, !1, !0);
            })
            .filter((e) => {
                let t = Date.now(),
                    n = p.A.status(e);
                if (n?.fetching) return !1;
                let r = n?.lastReceivedAt;
                return null == r || t - r > E;
            })
            .slice(0, g)).length
    )
        return Promise.resolve(null);
    l.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARIES_BULK", channelIds: e, requestedAt: a });
    try {
        n = await o.Bo.post({ url: h.BVt.USER_SUMMARIES, body: { channel_ids: e }, rejectWithError: !1 });
    } catch (e) {
        t = new u.LG(e);
    }
    let s = n?.body.summaries;
    l.h.dispatch({
        type: "RECEIVE_CHANNEL_SUMMARIES_BULK",
        requestedAt: a,
        receivedAt: Date.now(),
        summaries: s,
        requestArgs: { channelIds: e },
        error: t,
    });
}
function O() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = (0, s.bG)([d.A], () => d.A.isConnected()),
        n = r.useMemo(() => e.join(","), [e]);
    r.useEffect(() => {
        t && e();
        async function e() {
            try {
                await N();
            } catch (e) {}
            await R(n.split(","));
        }
    }, [n, t]);
}
async function D(e) {
    try {
        await o.Bo.del({ url: h.BVt.CHANNEL_SUMMARY(e.channelId, e.id), rejectWithError: !1 }),
            l.h.dispatch({ type: "DELETE_SUMMARY", summary: e });
    } catch (e) {
        throw new u.LG(e);
    }
}
let L = {
    setSummaryFeedback: b,
    updateVisibleMessages: C,
    setSelectedSummary: v,
    setHighlightedSummary: y,
    fetchSummaries: T,
    fetchSummariesBulk: R,
    useChannelSummaries: function (e) {
        let { channelIds: t = [] } = e;
        return O(t), (0, s.yK)([p.A], () => p.A.topSummaries(), []);
    },
    deleteSummary: D,
};
