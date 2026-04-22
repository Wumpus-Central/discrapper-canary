"use strict";
n.d(t, { $T: () => x, Ay: () => T, C6: () => A, C7: () => v, O$: () => b, Oz: () => C, sK: () => E, s_: () => I });
var i = n(64700),
    l = n(735438),
    s = n.n(l),
    r = n(417597),
    a = n(562465),
    o = n(73153),
    c = n(198982),
    u = n(432371),
    d = n(142120),
    h = n(734057),
    m = n(927813),
    p = n(513272),
    f = n(652215);
let g = 30 * m.A.Millis.SECOND;
async function _(e, t) {
    let n, i;
    if (!p.A.shouldFetch(e, t)) return;
    let l = Date.now();
    o.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARY", channelId: e, summaryId: t, requestedAt: l });
    try {
        let n = await a.Bo.get({ url: f.BVt.CHANNEL_SUMMARY(e, t), rejectWithError: !1 });
        i = n?.body;
    } catch (e) {
        n = new c.LG(e);
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
async function x(e) {
    let t, n;
    if (!p.A.shouldFetch(e)) return;
    let i = Date.now();
    o.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARIES", channelId: e, requestedAt: i });
    try {
        n = await a.Bo.get({ url: f.BVt.CHANNEL_SUMMARIES(e), rejectWithError: !1 });
    } catch (e) {
        t = new c.LG(e);
    }
    let l = n?.body?.summaries instanceof Array ? n.body.summaries : (n?.body ?? []);
    (l = s().takeRight(l, 75)),
        o.h.dispatch({
            type: "RECEIVE_CHANNEL_SUMMARIES",
            channelId: e,
            summaries: l,
            error: t ?? void 0,
            requestedAt: i,
            receivedAt: Date.now(),
        });
}
function A(e, t) {
    o.h.dispatch({ type: "SET_HIGHLIGHTED_SUMMARY", channelId: e, summaryId: t ?? null });
}
function C() {
    o.h.dispatch({ type: "TOGGLE_TOPICS_BAR" });
}
function E(e, t) {
    null != e && null != t && _(e, t),
        o.h.dispatch({ type: "SET_SELECTED_SUMMARY", channelId: e, summaryId: t ?? null });
}
function I(e, t) {
    o.h.dispatch({ type: "UPDATE_VISIBLE_MESSAGES", topVisibleMessage: e ?? null, bottomVisibleMessage: t ?? null });
}
function v(e, t) {
    o.h.dispatch({ type: "SET_SUMMARY_FEEDBACK", summary: e, rating: t });
}
async function y() {
    let e, t;
    if (!p.A.shouldFetchChannelAffinities()) return Promise.resolve(null);
    let n = Date.now();
    o.h.dispatch({ type: "REQUEST_CHANNEL_AFFINITIES", requestedAt: n });
    try {
        t = await a.Bo.get({ url: "/users/@me/affinities/channels", rejectWithError: !1 });
    } catch (t) {
        e = new c.LG(t);
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
async function S(e) {
    let t,
        n,
        { useQuickSwitcher: i = !0, useChannelAffinities: l = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    e = e ?? [];
    let s = Date.now();
    if (
        0 ===
        (e = e
            .concat(p.A.defaultChannelIds({ withQuickSwitcher: i, withChannelAffinities: l }))
            .filter((e) => {
                let t = h.A.getChannel(e);
                return (0, u.pk)(t, !1, !0);
            })
            .filter((e) => {
                let t = Date.now(),
                    n = p.A.status(e);
                if (n?.fetching) return !1;
                let i = n?.lastReceivedAt;
                return null == i || t - i > g;
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
async function b(e) {
    try {
        await a.Bo.del({ url: f.BVt.CHANNEL_SUMMARY(e.channelId, e.id), rejectWithError: !1 }),
            o.h.dispatch({ type: "DELETE_SUMMARY", summary: e });
    } catch (e) {
        throw new c.LG(e);
    }
}
let N =
        21552 == n.j
            ? {
                  setSummaryFeedback: v,
                  updateVisibleMessages: I,
                  setSelectedSummary: E,
                  setHighlightedSummary: A,
                  fetchSummaries: x,
                  fetchSummariesBulk: S,
                  useChannelSummaries: function (e) {
                      let { channelIds: t = [] } = e;
                      return (
                          !(function () {
                              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                  t = (0, r.bG)([d.A], () => d.A.isConnected()),
                                  n = i.useMemo(() => e.join(","), [e]);
                              i.useEffect(() => {
                                  t && e();
                                  async function e() {
                                      try {
                                          await y();
                                      } catch (e) {}
                                      await S(n.split(","));
                                  }
                              }, [n, t]);
                          })(t),
                          (0, r.yK)([p.A], () => p.A.topSummaries(), [])
                      );
                  },
                  deleteSummary: b,
              }
            : null,
    T = 21552 == n.j ? N : null;
