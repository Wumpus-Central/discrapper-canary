n.d(t, { $T: () => A, Ay: () => N, C6: () => g, C7: () => v, O$: () => w, Oz: () => S, sK: () => I, s_: () => y });
var i = n(64700),
    l = n(735438),
    r = n.n(l),
    s = n(702841),
    a = n(636537),
    o = n(228366),
    u = n(845584),
    c = n(432371),
    d = n(366853),
    p = n(734057),
    h = n(927813),
    f = n(822074),
    m = n(652215);
let E = 30 * h.A.Millis.SECOND;
async function _(e, t) {
    let n, i;
    if (!f.A.shouldFetch(e, t)) return;
    let l = Date.now();
    o.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARY", channelId: e, summaryId: t, requestedAt: l });
    try {
        let n = await a.Bo.get({ url: m.BVt.CHANNEL_SUMMARY(e, t), rejectWithError: !1 });
        i = n?.body;
    } catch (e) {
        n = new u.LG(e);
    }
    o.h.dispatch({
        type: "RECEIVE_CHANNEL_SUMMARY",
        channelId: e,
        summary: i,
        error: n,
        requestedAt: l,
        receivedAt: Date.now(),
    });
}
async function A(e) {
    let t, n;
    if (!f.A.shouldFetch(e)) return;
    let i = Date.now();
    o.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARIES", channelId: e, requestedAt: i });
    try {
        n = await a.Bo.get({ url: m.BVt.CHANNEL_SUMMARIES(e), rejectWithError: !1 });
    } catch (e) {
        t = new u.LG(e);
    }
    let l = n?.body?.summaries instanceof Array ? n.body.summaries : (n?.body ?? []);
    (l = r().takeRight(l, 75)),
        o.h.dispatch({
            type: "RECEIVE_CHANNEL_SUMMARIES",
            channelId: e,
            summaries: l,
            error: t ?? void 0,
            requestedAt: i,
            receivedAt: Date.now(),
        });
}
function g(e, t) {
    o.h.dispatch({ type: "SET_HIGHLIGHTED_SUMMARY", channelId: e, summaryId: t ?? null });
}
function S() {
    o.h.dispatch({ type: "TOGGLE_TOPICS_BAR" });
}
function I(e, t) {
    null != e && null != t && _(e, t),
        o.h.dispatch({ type: "SET_SELECTED_SUMMARY", channelId: e, summaryId: t ?? null });
}
function y(e, t) {
    o.h.dispatch({ type: "UPDATE_VISIBLE_MESSAGES", topVisibleMessage: e ?? null, bottomVisibleMessage: t ?? null });
}
function v(e, t) {
    o.h.dispatch({ type: "SET_SUMMARY_FEEDBACK", summary: e, rating: t });
}
async function C() {
    let e, t;
    if (!f.A.shouldFetchChannelAffinities()) return Promise.resolve(null);
    let n = Date.now();
    o.h.dispatch({ type: "REQUEST_CHANNEL_AFFINITIES", requestedAt: n });
    try {
        t = await a.Bo.get({ url: "/users/@me/affinities/channels", rejectWithError: !1 });
    } catch (t) {
        e = new u.LG(t);
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
async function T(e) {
    let t,
        n,
        { useQuickSwitcher: i = !0, useChannelAffinities: l = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    e = e ?? [];
    let r = Date.now();
    if (
        0 ===
        (e = e
            .concat(f.A.defaultChannelIds({ withQuickSwitcher: i, withChannelAffinities: l }))
            .filter((e) => {
                let t = p.A.getChannel(e);
                return (0, c.pk)(t, !1, !0);
            })
            .filter((e) => {
                let t = Date.now(),
                    n = f.A.status(e);
                if (n?.fetching) return !1;
                let i = n?.lastReceivedAt;
                return null == i || t - i > E;
            })
            .slice(0, 50)).length
    )
        return Promise.resolve(null);
    o.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARIES_BULK", channelIds: e, requestedAt: r });
    try {
        n = await a.Bo.post({ url: m.BVt.USER_SUMMARIES, body: { channel_ids: e }, rejectWithError: !1 });
    } catch (e) {
        t = new u.LG(e);
    }
    let s = n?.body.summaries;
    o.h.dispatch({
        type: "RECEIVE_CHANNEL_SUMMARIES_BULK",
        requestedAt: r,
        receivedAt: Date.now(),
        summaries: s,
        requestArgs: { channelIds: e },
        error: t,
    });
}
async function w(e) {
    try {
        await a.Bo.del({ url: m.BVt.CHANNEL_SUMMARY(e.channelId, e.id), rejectWithError: !1 }),
            o.h.dispatch({ type: "DELETE_SUMMARY", summary: e });
    } catch (e) {
        throw new u.LG(e);
    }
}
let R =
        21552 == n.j
            ? {
                  setSummaryFeedback: v,
                  updateVisibleMessages: y,
                  setSelectedSummary: I,
                  setHighlightedSummary: g,
                  fetchSummaries: A,
                  fetchSummariesBulk: T,
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
                                          await C();
                                      } catch (e) {}
                                      await T(n.split(","));
                                  }
                              }, [n, t]);
                          })(t),
                          (0, s.yK)([f.A], () => f.A.topSummaries(), [])
                      );
                  },
                  deleteSummary: w,
              }
            : null,
    N = 21552 == n.j ? R : null;
