n.d(t, { $T: () => x, Ay: () => M, C6: () => C, C7: () => j, O$: () => I, Oz: () => E, sK: () => _, s_: () => N });
var l = n(582128),
    s = n(435558),
    a = n.n(s),
    i = n(702841),
    r = n(636537),
    c = n(73153),
    o = n(913122),
    u = n(432371),
    d = n(403010),
    m = n(734057),
    h = n(927813),
    f = n(822074),
    p = n(652215);
let g = 30 * h.A.Millis.SECOND;
async function A(e, t) {
    let n, l;
    if (!f.A.shouldFetch(e, t)) return;
    let s = Date.now();
    c.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARY", channelId: e, summaryId: t, requestedAt: s });
    try {
        let n = await r.Bo.get({ url: p.BVt.CHANNEL_SUMMARY(e, t), rejectWithError: !1 });
        l = n?.body;
    } catch (e) {
        n = new o.LG(e);
    }
    c.h.dispatch({
        type: "RECEIVE_CHANNEL_SUMMARY",
        channelId: e,
        summary: l,
        error: n,
        requestedAt: s,
        receivedAt: Date.now(),
    });
}
async function x(e) {
    let t, n;
    if (!f.A.shouldFetch(e)) return;
    let l = Date.now();
    c.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARIES", channelId: e, requestedAt: l });
    try {
        n = await r.Bo.get({ url: p.BVt.CHANNEL_SUMMARIES(e), rejectWithError: !1 });
    } catch (e) {
        t = new o.LG(e);
    }
    let s = n?.body?.summaries instanceof Array ? n.body.summaries : (n?.body ?? []);
    ((s = a().takeRight(s, 75)),
        c.h.dispatch({
            type: "RECEIVE_CHANNEL_SUMMARIES",
            channelId: e,
            summaries: s,
            error: t ?? void 0,
            requestedAt: l,
            receivedAt: Date.now(),
        }));
}
function C(e, t) {
    c.h.dispatch({ type: "SET_HIGHLIGHTED_SUMMARY", channelId: e, summaryId: t ?? null });
}
function E() {
    c.h.dispatch({ type: "TOGGLE_TOPICS_BAR" });
}
function _(e, t) {
    (null != e && null != t && A(e, t),
        c.h.dispatch({ type: "SET_SELECTED_SUMMARY", channelId: e, summaryId: t ?? null }));
}
function N(e, t) {
    c.h.dispatch({ type: "UPDATE_VISIBLE_MESSAGES", topVisibleMessage: e ?? null, bottomVisibleMessage: t ?? null });
}
function j(e, t) {
    c.h.dispatch({ type: "SET_SUMMARY_FEEDBACK", summary: e, rating: t });
}
async function v() {
    let e, t;
    if (!f.A.shouldFetchChannelAffinities()) return Promise.resolve(null);
    let n = Date.now();
    c.h.dispatch({ type: "REQUEST_CHANNEL_AFFINITIES", requestedAt: n });
    try {
        t = await r.Bo.get({ url: "/users/@me/affinities/channels", rejectWithError: !1 });
    } catch (t) {
        e = new o.LG(t);
    }
    let l = t?.body?.channel_affinities;
    c.h.dispatch({
        type: "RECEIVE_CHANNEL_AFFINITIES",
        affinities: l,
        error: e ?? void 0,
        requestedAt: n,
        receivedAt: Date.now(),
    });
}
async function S(e) {
    let t,
        n,
        { useQuickSwitcher: l = !0, useChannelAffinities: s = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    e = e ?? [];
    let a = Date.now();
    if (
        0 ===
        (e = e
            .concat(f.A.defaultChannelIds({ withQuickSwitcher: l, withChannelAffinities: s }))
            .filter((e) => {
                let t = m.A.getChannel(e);
                return (0, u.pk)(t, !1, !0);
            })
            .filter((e) => {
                let t = Date.now(),
                    n = f.A.status(e);
                if (n?.fetching) return !1;
                let l = n?.lastReceivedAt;
                return null == l || t - l > g;
            })
            .slice(0, 50)).length
    )
        return Promise.resolve(null);
    c.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARIES_BULK", channelIds: e, requestedAt: a });
    try {
        n = await r.Bo.post({ url: p.BVt.USER_SUMMARIES, body: { channel_ids: e }, rejectWithError: !1 });
    } catch (e) {
        t = new o.LG(e);
    }
    let i = n?.body.summaries;
    c.h.dispatch({
        type: "RECEIVE_CHANNEL_SUMMARIES_BULK",
        requestedAt: a,
        receivedAt: Date.now(),
        summaries: i,
        requestArgs: { channelIds: e },
        error: t,
    });
}
async function I(e) {
    try {
        (await r.Bo.del({ url: p.BVt.CHANNEL_SUMMARY(e.channelId, e.id), rejectWithError: !1 }),
            c.h.dispatch({ type: "DELETE_SUMMARY", summary: e }));
    } catch (e) {
        throw new o.LG(e);
    }
}
let y =
        221552 == n.j
            ? {
                  setSummaryFeedback: j,
                  updateVisibleMessages: N,
                  setSelectedSummary: _,
                  setHighlightedSummary: C,
                  fetchSummaries: x,
                  fetchSummariesBulk: S,
                  useChannelSummaries: function (e) {
                      let { channelIds: t = [] } = e;
                      return (
                          !(function () {
                              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                  t = (0, i.bG)([d.A], () => d.A.isConnected()),
                                  n = l.useMemo(() => e.join(","), [e]);
                              l.useEffect(() => {
                                  t && e();
                                  async function e() {
                                      try {
                                          await v();
                                      } catch (e) {}
                                      await S(n.split(","));
                                  }
                              }, [n, t]);
                          })(t),
                          (0, i.yK)([f.A], () => f.A.topSummaries(), [])
                      );
                  },
                  deleteSummary: I,
              }
            : null,
    M = 221552 == n.j ? y : null;
