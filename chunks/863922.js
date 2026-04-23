"use strict";
n.d(t, { $T: () => g, Ay: () => O, C6: () => A, C7: () => y, O$: () => C, Oz: () => I, sK: () => T, s_: () => S });
var r = n(64700),
    i = n(735438),
    s = n.n(i),
    a = n(417597),
    o = n(562465),
    l = n(73153),
    u = n(198982),
    c = n(432371),
    d = n(142120),
    _ = n(734057),
    f = n(927813),
    p = n(513272),
    h = n(652215);
let E = 30 * f.A.Millis.SECOND;
async function m(e, t) {
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
async function g(e) {
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
    (i = s().takeRight(i, 75)),
        l.h.dispatch({
            type: "RECEIVE_CHANNEL_SUMMARIES",
            channelId: e,
            summaries: i,
            error: t ?? void 0,
            requestedAt: r,
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
function y(e, t) {
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
async function v(e) {
    let t,
        n,
        { useQuickSwitcher: r = !0, useChannelAffinities: i = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    e = e ?? [];
    let s = Date.now();
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
            .slice(0, 50)).length
    )
        return Promise.resolve(null);
    l.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARIES_BULK", channelIds: e, requestedAt: s });
    try {
        n = await o.Bo.post({ url: h.BVt.USER_SUMMARIES, body: { channel_ids: e }, rejectWithError: !1 });
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
async function C(e) {
    try {
        await o.Bo.del({ url: h.BVt.CHANNEL_SUMMARY(e.channelId, e.id), rejectWithError: !1 }),
            l.h.dispatch({ type: "DELETE_SUMMARY", summary: e });
    } catch (e) {
        throw new u.LG(e);
    }
}
let O = {
    setSummaryFeedback: y,
    updateVisibleMessages: S,
    setSelectedSummary: T,
    setHighlightedSummary: A,
    fetchSummaries: g,
    fetchSummariesBulk: v,
    useChannelSummaries: function (e) {
        let { channelIds: t = [] } = e;
        return (
            !(function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = (0, a.bG)([d.A], () => d.A.isConnected()),
                    n = r.useMemo(() => e.join(","), [e]);
                r.useEffect(() => {
                    t && e();
                    async function e() {
                        try {
                            await N();
                        } catch (e) {}
                        await v(n.split(","));
                    }
                }, [n, t]);
            })(t),
            (0, a.yK)([p.A], () => p.A.topSummaries(), [])
        );
    },
    deleteSummary: C,
};
