n.d(t, { $T: () => A, Ay: () => M, C6: () => _, C7: () => C, O$: () => R, Oz: () => S, sK: () => I, s_: () => y });
var i = n(64700),
    l = n(735438),
    r = n.n(l),
    s = n(702841),
    a = n(636537),
    o = n(228366),
    u = n(845584),
    d = n(432371),
    c = n(446458),
    h = n(734057),
    p = n(927813),
    m = n(822074),
    f = n(652215);
let E = 30 * p.A.Millis.SECOND;
async function g(e, t) {
    let n, i;
    if (!m.A.shouldFetch(e, t)) return;
    let l = Date.now();
    o.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARY", channelId: e, summaryId: t, requestedAt: l });
    try {
        let n = await a.Bo.get({ url: f.BVt.CHANNEL_SUMMARY(e, t), rejectWithError: !1 });
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
    if (!m.A.shouldFetch(e)) return;
    let i = Date.now();
    o.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARIES", channelId: e, requestedAt: i });
    try {
        n = await a.Bo.get({ url: f.BVt.CHANNEL_SUMMARIES(e), rejectWithError: !1 });
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
function _(e, t) {
    o.h.dispatch({ type: "SET_HIGHLIGHTED_SUMMARY", channelId: e, summaryId: t ?? null });
}
function S() {
    o.h.dispatch({ type: "TOGGLE_TOPICS_BAR" });
}
function I(e, t) {
    null != e && null != t && g(e, t),
        o.h.dispatch({ type: "SET_SELECTED_SUMMARY", channelId: e, summaryId: t ?? null });
}
function y(e, t) {
    o.h.dispatch({ type: "UPDATE_VISIBLE_MESSAGES", topVisibleMessage: e ?? null, bottomVisibleMessage: t ?? null });
}
function C(e, t) {
    o.h.dispatch({ type: "SET_SUMMARY_FEEDBACK", summary: e, rating: t });
}
async function T() {
    let e, t;
    if (!m.A.shouldFetchChannelAffinities()) return Promise.resolve(null);
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
async function v(e) {
    let t,
        n,
        { useQuickSwitcher: i = !0, useChannelAffinities: l = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    e = e ?? [];
    let r = Date.now();
    if (
        0 ===
        (e = e
            .concat(m.A.defaultChannelIds({ withQuickSwitcher: i, withChannelAffinities: l }))
            .filter((e) => {
                let t = h.A.getChannel(e);
                return (0, d.pk)(t, !1, !0);
            })
            .filter((e) => {
                let t = Date.now(),
                    n = m.A.status(e);
                if (n?.fetching) return !1;
                let i = n?.lastReceivedAt;
                return null == i || t - i > E;
            })
            .slice(0, 50)).length
    )
        return Promise.resolve(null);
    o.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARIES_BULK", channelIds: e, requestedAt: r });
    try {
        n = await a.Bo.post({ url: f.BVt.USER_SUMMARIES, body: { channel_ids: e }, rejectWithError: !1 });
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
async function R(e) {
    try {
        await a.Bo.del({ url: f.BVt.CHANNEL_SUMMARY(e.channelId, e.id), rejectWithError: !1 }),
            o.h.dispatch({ type: "DELETE_SUMMARY", summary: e });
    } catch (e) {
        throw new u.LG(e);
    }
}
let N =
        21552 == n.j
            ? {
                  setSummaryFeedback: C,
                  updateVisibleMessages: y,
                  setSelectedSummary: I,
                  setHighlightedSummary: _,
                  fetchSummaries: A,
                  fetchSummariesBulk: v,
                  useChannelSummaries: function (e) {
                      let { channelIds: t = [] } = e;
                      return (
                          !(function () {
                              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                  t = (0, s.bG)([c.A], () => c.A.isConnected()),
                                  n = i.useMemo(() => e.join(","), [e]);
                              i.useEffect(() => {
                                  t && e();
                                  async function e() {
                                      try {
                                          await T();
                                      } catch (e) {}
                                      await v(n.split(","));
                                  }
                              }, [n, t]);
                          })(t),
                          (0, s.yK)([m.A], () => m.A.topSummaries(), [])
                      );
                  },
                  deleteSummary: R,
              }
            : null,
    M = 21552 == n.j ? N : null;
