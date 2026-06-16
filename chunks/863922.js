"use strict";
n.d(t, { $T: () => A, Ay: () => j, C6: () => E, C7: () => S, O$: () => _, Oz: () => C, sK: () => I, s_: () => y });
var l = n(64700),
    i = n(735438),
    s = n.n(i),
    r = n(702841),
    a = n(636537),
    o = n(228366),
    c = n(913122),
    u = n(432371),
    d = n(617710),
    h = n(734057),
    m = n(927813),
    p = n(822074),
    f = n(652215);
let g = 30 * m.A.Millis.SECOND;
async function x(e, t) {
    let n, l;
    if (!p.A.shouldFetch(e, t)) return;
    let i = Date.now();
    o.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARY", channelId: e, summaryId: t, requestedAt: i });
    try {
        let n = await a.Bo.get({ url: f.BVt.CHANNEL_SUMMARY(e, t), rejectWithError: !1 });
        l = n?.body;
    } catch (e) {
        n = new c.LG(e);
    }
    o.h.dispatch({
        type: "RECEIVE_CHANNEL_SUMMARY",
        channelId: e,
        summary: l,
        error: n,
        requestedAt: i,
        receivedAt: Date.now(),
    });
}
async function A(e) {
    let t, n;
    if (!p.A.shouldFetch(e)) return;
    let l = Date.now();
    o.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARIES", channelId: e, requestedAt: l });
    try {
        n = await a.Bo.get({ url: f.BVt.CHANNEL_SUMMARIES(e), rejectWithError: !1 });
    } catch (e) {
        t = new c.LG(e);
    }
    let i = n?.body?.summaries instanceof Array ? n.body.summaries : (n?.body ?? []);
    (i = s().takeRight(i, 75)),
        o.h.dispatch({
            type: "RECEIVE_CHANNEL_SUMMARIES",
            channelId: e,
            summaries: i,
            error: t ?? void 0,
            requestedAt: l,
            receivedAt: Date.now(),
        });
}
function E(e, t) {
    o.h.dispatch({ type: "SET_HIGHLIGHTED_SUMMARY", channelId: e, summaryId: t ?? null });
}
function C() {
    o.h.dispatch({ type: "TOGGLE_TOPICS_BAR" });
}
function I(e, t) {
    null != e && null != t && x(e, t),
        o.h.dispatch({ type: "SET_SELECTED_SUMMARY", channelId: e, summaryId: t ?? null });
}
function y(e, t) {
    o.h.dispatch({ type: "UPDATE_VISIBLE_MESSAGES", topVisibleMessage: e ?? null, bottomVisibleMessage: t ?? null });
}
function S(e, t) {
    o.h.dispatch({ type: "SET_SUMMARY_FEEDBACK", summary: e, rating: t });
}
async function v() {
    let e, t;
    if (!p.A.shouldFetchChannelAffinities()) return Promise.resolve(null);
    let n = Date.now();
    o.h.dispatch({ type: "REQUEST_CHANNEL_AFFINITIES", requestedAt: n });
    try {
        t = await a.Bo.get({ url: "/users/@me/affinities/channels", rejectWithError: !1 });
    } catch (t) {
        e = new c.LG(t);
    }
    let l = t?.body?.channel_affinities;
    o.h.dispatch({
        type: "RECEIVE_CHANNEL_AFFINITIES",
        affinities: l,
        error: e ?? void 0,
        requestedAt: n,
        receivedAt: Date.now(),
    });
}
async function N(e) {
    let t,
        n,
        { useQuickSwitcher: l = !0, useChannelAffinities: i = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    e = e ?? [];
    let s = Date.now();
    if (
        0 ===
        (e = e
            .concat(p.A.defaultChannelIds({ withQuickSwitcher: l, withChannelAffinities: i }))
            .filter((e) => {
                let t = h.A.getChannel(e);
                return (0, u.pk)(t, !1, !0);
            })
            .filter((e) => {
                let t = Date.now(),
                    n = p.A.status(e);
                if (n?.fetching) return !1;
                let l = n?.lastReceivedAt;
                return null == l || t - l > g;
            })
            .slice(0, 50)).length
    )
        return Promise.resolve(null);
    o.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARIES_BULK", channelIds: e, requestedAt: s });
    try {
        n = await a.Bo.post({ url: f.BVt.USER_SUMMARIES, body: { channel_ids: e }, rejectWithError: !1 });
    } catch (e) {
        t = new c.LG(e);
    }
    let r = n?.body.summaries;
    o.h.dispatch({
        type: "RECEIVE_CHANNEL_SUMMARIES_BULK",
        requestedAt: s,
        receivedAt: Date.now(),
        summaries: r,
        requestArgs: { channelIds: e },
        error: t,
    });
}
async function _(e) {
    try {
        await a.Bo.del({ url: f.BVt.CHANNEL_SUMMARY(e.channelId, e.id), rejectWithError: !1 }),
            o.h.dispatch({ type: "DELETE_SUMMARY", summary: e });
    } catch (e) {
        throw new c.LG(e);
    }
}
let T =
        21552 == n.j
            ? {
                  setSummaryFeedback: S,
                  updateVisibleMessages: y,
                  setSelectedSummary: I,
                  setHighlightedSummary: E,
                  fetchSummaries: A,
                  fetchSummariesBulk: N,
                  useChannelSummaries: function (e) {
                      let { channelIds: t = [] } = e;
                      return (
                          !(function () {
                              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                  t = (0, r.bG)([d.A], () => d.A.isConnected()),
                                  n = l.useMemo(() => e.join(","), [e]);
                              l.useEffect(() => {
                                  t && e();
                                  async function e() {
                                      try {
                                          await v();
                                      } catch (e) {}
                                      await N(n.split(","));
                                  }
                              }, [n, t]);
                          })(t),
                          (0, r.yK)([p.A], () => p.A.topSummaries(), [])
                      );
                  },
                  deleteSummary: _,
              }
            : null,
    j = 21552 == n.j ? T : null;
