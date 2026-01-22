n.d(t, {
    $T: () => O,
    Ay: () => P,
    C6: () => A,
    C7: () => T,
    O$: () => w,
    Oz: () => v,
    sK: () => S,
    s_: () => I,
}),
    n(747238);
var r = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(417597),
    o = n(562465),
    l = n(73153),
    c = n(198982),
    u = n(432371),
    d = n(142120),
    f = n(734057),
    p = n(927813),
    _ = n(513272),
    h = n(652215);
let m = 75,
    g = 50,
    E = 30 * p.A.Millis.SECOND,
    b = null;
async function y(e, t) {
    let n, r;
    if (!_.A.shouldFetch(e, t)) return;
    let i = Date.now();
    l.h.dispatch({
        type: "REQUEST_CHANNEL_SUMMARY",
        channelId: e,
        summaryId: t,
        requestedAt: i,
    });
    try {
        let n = await o.Bo.get({
            url: h.BVt.CHANNEL_SUMMARY(e, t),
            rejectWithError: !1,
        });
        r = null == n ? void 0 : n.body;
    } catch (e) {
        n = new c.LG(e);
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
async function O(e) {
    var t, n;
    let r, i;
    if (!_.A.shouldFetch(e)) return;
    let s = Date.now();
    l.h.dispatch({
        type: "REQUEST_CHANNEL_SUMMARIES",
        channelId: e,
        requestedAt: s,
    });
    try {
        i = await o.Bo.get({
            url: h.BVt.CHANNEL_SUMMARIES(e),
            rejectWithError: !1,
        });
    } catch (e) {
        r = new c.LG(e);
    }
    let u =
        (null == i || null == (n = i.body) ? void 0 : n.summaries) instanceof Array
            ? i.body.summaries
            : null != (t = null == i ? void 0 : i.body)
              ? t
              : [];
    (u = a().takeRight(u, m)),
        l.h.dispatch({
            type: "RECEIVE_CHANNEL_SUMMARIES",
            channelId: e,
            summaries: u,
            error: null != r ? r : void 0,
            requestedAt: s,
            receivedAt: Date.now(),
        });
}
function A(e, t) {
    l.h.dispatch({
        type: "SET_HIGHLIGHTED_SUMMARY",
        channelId: e,
        summaryId: null != t ? t : null,
    });
}
function v() {
    l.h.dispatch({ type: "TOGGLE_TOPICS_BAR" });
}
function S(e, t) {
    null != e && null != t && y(e, t),
        l.h.dispatch({
            type: "SET_SELECTED_SUMMARY",
            channelId: e,
            summaryId: null != t ? t : null,
        });
}
function I(e, t) {
    l.h.dispatch({
        type: "UPDATE_VISIBLE_MESSAGES",
        topVisibleMessage: null != e ? e : null,
        bottomVisibleMessage: null != t ? t : null,
    });
}
function T(e, t) {
    l.h.dispatch({
        type: "SET_SUMMARY_FEEDBACK",
        summary: e,
        rating: t,
    });
}
async function C() {
    var e;
    let t, n;
    if (!_.A.shouldFetchChannelAffinities()) return Promise.resolve(null);
    let r = Date.now();
    l.h.dispatch({
        type: "REQUEST_CHANNEL_AFFINITIES",
        requestedAt: r,
    });
    try {
        n = await o.Bo.get({
            url: "/users/@me/affinities/channels",
            rejectWithError: !1,
        });
    } catch (e) {
        t = new c.LG(e);
    }
    let i = null == n || null == (e = n.body) ? void 0 : e.channel_affinities;
    l.h.dispatch({
        type: "RECEIVE_CHANNEL_AFFINITIES",
        affinities: i,
        error: null != t ? t : void 0,
        requestedAt: r,
        receivedAt: Date.now(),
    });
}
async function N(e) {
    let t,
        n,
        { useQuickSwitcher: r = !0, useChannelAffinities: i = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    e = null != e ? e : [];
    let a = Date.now();
    if (
        0 ===
        (e = e
            .concat(
                _.A.defaultChannelIds({
                    withQuickSwitcher: r,
                    withChannelAffinities: i,
                }),
            )
            .filter((e) => {
                let t = f.A.getChannel(e);
                return (0, u.pk)(t, !1, !0);
            })
            .filter((e) => {
                let t = Date.now(),
                    n = _.A.status(e);
                if (null == n ? void 0 : n.fetching) return !1;
                let r = null == n ? void 0 : n.lastReceivedAt;
                return null == r || t - r > E;
            })
            .slice(0, g)).length
    )
        return Promise.resolve(null);
    l.h.dispatch({
        type: "REQUEST_CHANNEL_SUMMARIES_BULK",
        channelIds: e,
        requestedAt: a,
    });
    try {
        n = await o.Bo.post({
            url: h.BVt.USER_SUMMARIES,
            body: { channel_ids: e },
            rejectWithError: !1,
        });
    } catch (e) {
        t = new c.LG(e);
    }
    let s = null == n ? void 0 : n.body.summaries;
    l.h.dispatch({
        type: "RECEIVE_CHANNEL_SUMMARIES_BULK",
        requestedAt: a,
        receivedAt: Date.now(),
        summaries: s,
        requestArgs: { channelIds: e },
        error: t,
    });
}
function R() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = (0, s.bG)([d.A], () => d.A.isConnected()),
        n = r.useMemo(() => e.join(","), [e]);
    r.useEffect(() => {
        t && e();
        async function e() {
            try {
                await C();
            } catch (e) {}
            await N(n.split(","));
        }
    }, [n, t]);
}
async function w(e) {
    try {
        await o.Bo.del({
            url: h.BVt.CHANNEL_SUMMARY(e.channelId, e.id),
            rejectWithError: !1,
        }),
            l.h.dispatch({
                type: "DELETE_SUMMARY",
                summary: e,
            });
    } catch (e) {
        throw new c.LG(e);
    }
}
let P = {
    setSummaryFeedback: T,
    updateVisibleMessages: I,
    setSelectedSummary: S,
    setHighlightedSummary: A,
    fetchSummaries: O,
    fetchSummariesBulk: N,
    useChannelSummaries: function (e) {
        let { channelIds: t = [] } = e;
        return R(t), (0, s.yK)([_.A], () => _.A.topSummaries(), []);
    },
    deleteSummary: w,
};
