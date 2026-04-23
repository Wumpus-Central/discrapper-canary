n.d(t, { $T: () => N, Ay: () => h, C6: () => O, C7: () => p, O$: () => D, Oz: () => R, sK: () => f, s_: () => C });
var i = n(64700),
    r = n(735438),
    a = n.n(r),
    s = n(702841),
    _ = n(636537),
    l = n(228366),
    o = n(845584),
    E = n(432371),
    d = n(366853),
    c = n(734057),
    u = n(927813),
    I = n(822074),
    A = n(652215);
let T = 30 * u.A.Millis.SECOND;
async function S(e, t) {
    let n, i;
    if (!I.A.shouldFetch(e, t)) return;
    let r = Date.now();
    l.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARY", channelId: e, summaryId: t, requestedAt: r });
    try {
        let n = await _.Bo.get({ url: A.BVt.CHANNEL_SUMMARY(e, t), rejectWithError: !1 });
        i = n?.body;
    } catch (e) {
        n = new o.LG(e);
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
async function N(e) {
    let t, n;
    if (!I.A.shouldFetch(e)) return;
    let i = Date.now();
    l.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARIES", channelId: e, requestedAt: i });
    try {
        n = await _.Bo.get({ url: A.BVt.CHANNEL_SUMMARIES(e), rejectWithError: !1 });
    } catch (e) {
        t = new o.LG(e);
    }
    let r = n?.body?.summaries instanceof Array ? n.body.summaries : (n?.body ?? []);
    (r = a().takeRight(r, 75)),
        l.h.dispatch({
            type: "RECEIVE_CHANNEL_SUMMARIES",
            channelId: e,
            summaries: r,
            error: t ?? void 0,
            requestedAt: i,
            receivedAt: Date.now(),
        });
}
function O(e, t) {
    l.h.dispatch({ type: "SET_HIGHLIGHTED_SUMMARY", channelId: e, summaryId: t ?? null });
}
function R() {
    l.h.dispatch({ type: "TOGGLE_TOPICS_BAR" });
}
function f(e, t) {
    null != e && null != t && S(e, t),
        l.h.dispatch({ type: "SET_SELECTED_SUMMARY", channelId: e, summaryId: t ?? null });
}
function C(e, t) {
    l.h.dispatch({ type: "UPDATE_VISIBLE_MESSAGES", topVisibleMessage: e ?? null, bottomVisibleMessage: t ?? null });
}
function p(e, t) {
    l.h.dispatch({ type: "SET_SUMMARY_FEEDBACK", summary: e, rating: t });
}
async function m() {
    let e, t;
    if (!I.A.shouldFetchChannelAffinities()) return Promise.resolve(null);
    let n = Date.now();
    l.h.dispatch({ type: "REQUEST_CHANNEL_AFFINITIES", requestedAt: n });
    try {
        t = await _.Bo.get({ url: "/users/@me/affinities/channels", rejectWithError: !1 });
    } catch (t) {
        e = new o.LG(t);
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
async function L(e) {
    let t,
        n,
        { useQuickSwitcher: i = !0, useChannelAffinities: r = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    e = e ?? [];
    let a = Date.now();
    if (
        0 ===
        (e = e
            .concat(I.A.defaultChannelIds({ withQuickSwitcher: i, withChannelAffinities: r }))
            .filter((e) => {
                let t = c.A.getChannel(e);
                return (0, E.pk)(t, !1, !0);
            })
            .filter((e) => {
                let t = Date.now(),
                    n = I.A.status(e);
                if (n?.fetching) return !1;
                let i = n?.lastReceivedAt;
                return null == i || t - i > T;
            })
            .slice(0, 50)).length
    )
        return Promise.resolve(null);
    l.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARIES_BULK", channelIds: e, requestedAt: a });
    try {
        n = await _.Bo.post({ url: A.BVt.USER_SUMMARIES, body: { channel_ids: e }, rejectWithError: !1 });
    } catch (e) {
        t = new o.LG(e);
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
async function D(e) {
    try {
        await _.Bo.del({ url: A.BVt.CHANNEL_SUMMARY(e.channelId, e.id), rejectWithError: !1 }),
            l.h.dispatch({ type: "DELETE_SUMMARY", summary: e });
    } catch (e) {
        throw new o.LG(e);
    }
}
let h = {
    setSummaryFeedback: p,
    updateVisibleMessages: C,
    setSelectedSummary: f,
    setHighlightedSummary: O,
    fetchSummaries: N,
    fetchSummariesBulk: L,
    useChannelSummaries: function (e) {
        let { channelIds: t = [] } = e;
        return (
            !(function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = (0, s.bG)([d.A], () => d.A.isConnected()),
                    n = i.useMemo(() => e.join(","), [e]);
                i.useEffect(() => {
                    t && e();
                    async function e() {
                        try {
                            await m();
                        } catch (e) {}
                        await L(n.split(","));
                    }
                }, [n, t]);
            })(t),
            (0, s.yK)([I.A], () => I.A.topSummaries(), [])
        );
    },
    deleteSummary: D,
};
