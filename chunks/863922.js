"use strict";
n.d(t, { $T: () => g, Ay: () => O, C6: () => A, C7: () => N, O$: () => v, Oz: () => I, sK: () => T, s_: () => S });
var i = n(64700),
    r = n(735438),
    s = n.n(r),
    a = n(702841),
    o = n(636537),
    l = n(228366),
    u = n(845584),
    c = n(432371),
    d = n(587626),
    _ = n(734057),
    f = n(927813),
    h = n(822074),
    p = n(652215);
let E = 30 * f.A.Millis.SECOND;
async function m(e, t) {
    let n, i;
    if (!h.A.shouldFetch(e, t)) return;
    let r = Date.now();
    l.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARY", channelId: e, summaryId: t, requestedAt: r });
    try {
        let n = await o.Bo.get({ url: p.BVt.CHANNEL_SUMMARY(e, t), rejectWithError: !1 });
        i = n?.body;
    } catch (e) {
        n = new u.LG(e);
    }
    l.h.dispatch({
        type: "RECEIVE_CHANNEL_SUMMARY",
        channelId: e,
        summary: i,
        error: n,
        requestedAt: r,
        receivedAt: Date.now(),
    });
}
async function g(e) {
    let t, n;
    if (!h.A.shouldFetch(e)) return;
    let i = Date.now();
    l.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARIES", channelId: e, requestedAt: i });
    try {
        n = await o.Bo.get({ url: p.BVt.CHANNEL_SUMMARIES(e), rejectWithError: !1 });
    } catch (e) {
        t = new u.LG(e);
    }
    let r = n?.body?.summaries instanceof Array ? n.body.summaries : (n?.body ?? []);
    (r = s().takeRight(r, 75)),
        l.h.dispatch({
            type: "RECEIVE_CHANNEL_SUMMARIES",
            channelId: e,
            summaries: r,
            error: t ?? void 0,
            requestedAt: i,
            receivedAt: Date.now(),
        });
}
function A(e, t) {
    l.h.dispatch({ type: "SET_HIGHLIGHTED_SUMMARY", channelId: e, summaryId: t ?? null });
}
function I() {
    l.h.dispatch({ type: "TOGGLE_TOPICS_BAR" });
}
function T(e, t) {
    null != e && null != t && m(e, t),
        l.h.dispatch({ type: "SET_SELECTED_SUMMARY", channelId: e, summaryId: t ?? null });
}
function S(e, t) {
    l.h.dispatch({ type: "UPDATE_VISIBLE_MESSAGES", topVisibleMessage: e ?? null, bottomVisibleMessage: t ?? null });
}
function N(e, t) {
    l.h.dispatch({ type: "SET_SUMMARY_FEEDBACK", summary: e, rating: t });
}
async function y() {
    let e, t;
    if (!h.A.shouldFetchChannelAffinities()) return Promise.resolve(null);
    let n = Date.now();
    l.h.dispatch({ type: "REQUEST_CHANNEL_AFFINITIES", requestedAt: n });
    try {
        t = await o.Bo.get({ url: "/users/@me/affinities/channels", rejectWithError: !1 });
    } catch (t) {
        e = new u.LG(t);
    }
    let i = t?.body?.channel_affinities;
    l.h.dispatch({
        type: "RECEIVE_CHANNEL_AFFINITIES",
        affinities: i,
        error: e ?? void 0,
        requestedAt: n,
        receivedAt: Date.now(),
    });
}
async function C(e) {
    let t,
        n,
        { useQuickSwitcher: i = !0, useChannelAffinities: r = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    e = e ?? [];
    let s = Date.now();
    if (
        0 ===
        (e = e
            .concat(h.A.defaultChannelIds({ withQuickSwitcher: i, withChannelAffinities: r }))
            .filter((e) => {
                let t = _.A.getChannel(e);
                return (0, c.pk)(t, !1, !0);
            })
            .filter((e) => {
                let t = Date.now(),
                    n = h.A.status(e);
                if (n?.fetching) return !1;
                let i = n?.lastReceivedAt;
                return null == i || t - i > E;
            })
            .slice(0, 50)).length
    )
        return Promise.resolve(null);
    l.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARIES_BULK", channelIds: e, requestedAt: s });
    try {
        n = await o.Bo.post({ url: p.BVt.USER_SUMMARIES, body: { channel_ids: e }, rejectWithError: !1 });
    } catch (e) {
        t = new u.LG(e);
    }
    let a = n?.body.summaries;
    l.h.dispatch({
        type: "RECEIVE_CHANNEL_SUMMARIES_BULK",
        requestedAt: s,
        receivedAt: Date.now(),
        summaries: a,
        requestArgs: { channelIds: e },
        error: t,
    });
}
async function v(e) {
    try {
        await o.Bo.del({ url: p.BVt.CHANNEL_SUMMARY(e.channelId, e.id), rejectWithError: !1 }),
            l.h.dispatch({ type: "DELETE_SUMMARY", summary: e });
    } catch (e) {
        throw new u.LG(e);
    }
}
let O = {
    setSummaryFeedback: N,
    updateVisibleMessages: S,
    setSelectedSummary: T,
    setHighlightedSummary: A,
    fetchSummaries: g,
    fetchSummariesBulk: C,
    useChannelSummaries: function (e) {
        let { channelIds: t = [] } = e;
        return (
            !(function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = (0, a.bG)([d.A], () => d.A.isConnected()),
                    n = i.useMemo(() => e.join(","), [e]);
                i.useEffect(() => {
                    t && e();
                    async function e() {
                        try {
                            await y();
                        } catch (e) {}
                        await C(n.split(","));
                    }
                }, [n, t]);
            })(t),
            (0, a.yK)([h.A], () => h.A.topSummaries(), [])
        );
    },
    deleteSummary: v,
};
