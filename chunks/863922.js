s.d(t, { $T: () => C, Ay: () => I, C6: () => A, C7: () => _, O$: () => j, Oz: () => x, sK: () => y, s_: () => S });
var n = s(582128),
    a = s(435558),
    l = s.n(a),
    i = s(702841),
    r = s(636537),
    o = s(73153),
    u = s(913122),
    d = s(432371),
    c = s(595528),
    h = s(734057),
    m = s(927813),
    p = s(822074),
    f = s(652215);
let g = 30 * m.A.Millis.SECOND;
async function v(e, t) {
    let s, n;
    if (!p.A.shouldFetch(e, t)) return;
    let a = Date.now();
    o.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARY", channelId: e, summaryId: t, requestedAt: a });
    try {
        let s = await r.Bo.get({ url: f.BVt.CHANNEL_SUMMARY(e, t), rejectWithError: !1 });
        n = s?.body;
    } catch (e) {
        s = new u.LG(e);
    }
    o.h.dispatch({
        type: "RECEIVE_CHANNEL_SUMMARY",
        channelId: e,
        summary: n,
        error: s,
        requestedAt: a,
        receivedAt: Date.now(),
    });
}
async function C(e) {
    let t, s;
    if (!p.A.shouldFetch(e)) return;
    let n = Date.now();
    o.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARIES", channelId: e, requestedAt: n });
    try {
        s = await r.Bo.get({ url: f.BVt.CHANNEL_SUMMARIES(e), rejectWithError: !1 });
    } catch (e) {
        t = new u.LG(e);
    }
    let a = s?.body?.summaries instanceof Array ? s.body.summaries : (s?.body ?? []);
    ((a = l().takeRight(a, 75)),
        o.h.dispatch({
            type: "RECEIVE_CHANNEL_SUMMARIES",
            channelId: e,
            summaries: a,
            error: t ?? void 0,
            requestedAt: n,
            receivedAt: Date.now(),
        }));
}
function A(e, t) {
    o.h.dispatch({ type: "SET_HIGHLIGHTED_SUMMARY", channelId: e, summaryId: t ?? null });
}
function x() {
    o.h.dispatch({ type: "TOGGLE_TOPICS_BAR" });
}
function y(e, t) {
    (null != e && null != t && v(e, t),
        o.h.dispatch({ type: "SET_SELECTED_SUMMARY", channelId: e, summaryId: t ?? null }));
}
function S(e, t) {
    o.h.dispatch({ type: "UPDATE_VISIBLE_MESSAGES", topVisibleMessage: e ?? null, bottomVisibleMessage: t ?? null });
}
function _(e, t) {
    o.h.dispatch({ type: "SET_SUMMARY_FEEDBACK", summary: e, rating: t });
}
async function E() {
    let e, t;
    if (!p.A.shouldFetchChannelAffinities()) return Promise.resolve(null);
    let s = Date.now();
    o.h.dispatch({ type: "REQUEST_CHANNEL_AFFINITIES", requestedAt: s });
    try {
        t = await r.Bo.get({ url: "/users/@me/affinities/channels", rejectWithError: !1 });
    } catch (t) {
        e = new u.LG(t);
    }
    let n = t?.body?.channel_affinities;
    o.h.dispatch({
        type: "RECEIVE_CHANNEL_AFFINITIES",
        affinities: n,
        error: e ?? void 0,
        requestedAt: s,
        receivedAt: Date.now(),
    });
}
async function N(e) {
    let t,
        s,
        { useQuickSwitcher: n = !0, useChannelAffinities: a = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    e = e ?? [];
    let l = Date.now();
    if (
        0 ===
        (e = e
            .concat(p.A.defaultChannelIds({ withQuickSwitcher: n, withChannelAffinities: a }))
            .filter((e) => {
                let t = h.A.getChannel(e);
                return (0, d.pk)(t, !1, !0);
            })
            .filter((e) => {
                let t = Date.now(),
                    s = p.A.status(e);
                if (s?.fetching) return !1;
                let n = s?.lastReceivedAt;
                return null == n || t - n > g;
            })
            .slice(0, 50)).length
    )
        return Promise.resolve(null);
    o.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARIES_BULK", channelIds: e, requestedAt: l });
    try {
        s = await r.Bo.post({ url: f.BVt.USER_SUMMARIES, body: { channel_ids: e }, rejectWithError: !1 });
    } catch (e) {
        t = new u.LG(e);
    }
    let i = s?.body.summaries;
    o.h.dispatch({
        type: "RECEIVE_CHANNEL_SUMMARIES_BULK",
        requestedAt: l,
        receivedAt: Date.now(),
        summaries: i,
        requestArgs: { channelIds: e },
        error: t,
    });
}
async function j(e) {
    try {
        (await r.Bo.del({ url: f.BVt.CHANNEL_SUMMARY(e.channelId, e.id), rejectWithError: !1 }),
            o.h.dispatch({ type: "DELETE_SUMMARY", summary: e }));
    } catch (e) {
        throw new u.LG(e);
    }
}
let M =
        221552 == s.j
            ? {
                  setSummaryFeedback: _,
                  updateVisibleMessages: S,
                  setSelectedSummary: y,
                  setHighlightedSummary: A,
                  fetchSummaries: C,
                  fetchSummariesBulk: N,
                  useChannelSummaries: function (e) {
                      let { channelIds: t = [] } = e;
                      return (
                          !(function () {
                              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                  t = (0, i.bG)([c.A], () => c.A.isConnected()),
                                  s = n.useMemo(() => e.join(","), [e]);
                              n.useEffect(() => {
                                  t && e();
                                  async function e() {
                                      try {
                                          await E();
                                      } catch (e) {}
                                      await N(s.split(","));
                                  }
                              }, [s, t]);
                          })(t),
                          (0, i.yK)([p.A], () => p.A.topSummaries(), [])
                      );
                  },
                  deleteSummary: j,
              }
            : null,
    I = 221552 == s.j ? M : null;
