var l = n(582128),
    s = n(435558),
    a = n.n(s),
    i = n(164636),
    r = n(620632),
    o = n(73153),
    c = n(627784),
    u = n(432371),
    d = n(225123),
    m = n(734057),
    h = n(927813),
    f = n(391820),
    p = n(652215);
let g = 30 * h.A.Millis.SECOND;
async function A(e) {
    let t, n;
    if (!f.A.shouldFetch(e)) return;
    let l = Date.now();
    o.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARIES", channelId: e, requestedAt: l });
    try {
        n = await r.Bo.get({ url: p.BVt.CHANNEL_SUMMARIES(e), rejectWithError: !1 });
    } catch (e) {
        t = new c.LG(e);
    }
    let s = n?.body?.summaries instanceof Array ? n.body.summaries : (n?.body ?? []);
    ((s = a().takeRight(s, 75)),
        o.h.dispatch({
            type: "RECEIVE_CHANNEL_SUMMARIES",
            channelId: e,
            summaries: s,
            error: t ?? void 0,
            requestedAt: l,
            receivedAt: Date.now(),
        }));
}
function C(e, t) {
    o.h.dispatch({ type: "SET_HIGHLIGHTED_SUMMARY", channelId: e, summaryId: t ?? null });
}
function x(e, t) {
    (null != e &&
        null != t &&
        (async function (e, t) {
            let n, l;
            if (!f.A.shouldFetch(e, t)) return;
            let s = Date.now();
            o.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARY", channelId: e, summaryId: t, requestedAt: s });
            try {
                let n = await r.Bo.get({ url: p.BVt.CHANNEL_SUMMARY(e, t), rejectWithError: !1 });
                l = n?.body;
            } catch (e) {
                n = new c.LG(e);
            }
            o.h.dispatch({
                type: "RECEIVE_CHANNEL_SUMMARY",
                channelId: e,
                summary: l,
                error: n,
                requestedAt: s,
                receivedAt: Date.now(),
            });
        })(e, t),
        o.h.dispatch({ type: "SET_SELECTED_SUMMARY", channelId: e, summaryId: t ?? null }));
}
function E(e, t) {
    o.h.dispatch({ type: "UPDATE_VISIBLE_MESSAGES", topVisibleMessage: e ?? null, bottomVisibleMessage: t ?? null });
}
function _(e, t) {
    o.h.dispatch({ type: "SET_SUMMARY_FEEDBACK", summary: e, rating: t });
}
async function N(e) {
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
    o.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARIES_BULK", channelIds: e, requestedAt: a });
    try {
        n = await r.Bo.post({ url: p.BVt.USER_SUMMARIES, body: { channel_ids: e }, rejectWithError: !1 });
    } catch (e) {
        t = new c.LG(e);
    }
    let i = n?.body.summaries;
    o.h.dispatch({
        type: "RECEIVE_CHANNEL_SUMMARIES_BULK",
        requestedAt: a,
        receivedAt: Date.now(),
        summaries: i,
        requestArgs: { channelIds: e },
        error: t,
    });
}
async function j(e) {
    try {
        (await r.Bo.del({ url: p.BVt.CHANNEL_SUMMARY(e.channelId, e.id), rejectWithError: !1 }),
            o.h.dispatch({ type: "DELETE_SUMMARY", summary: e }));
    } catch (e) {
        throw new c.LG(e);
    }
}
let I =
        221552 == n.j
            ? {
                  setSummaryFeedback: _,
                  updateVisibleMessages: E,
                  setSelectedSummary: x,
                  setHighlightedSummary: C,
                  fetchSummaries: A,
                  fetchSummariesBulk: N,
                  useChannelSummaries: function (e) {
                      let { channelIds: t = [] } = e;
                      return (
                          !(function () {
                              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                  t = (0, i.bG)([d.A], () => d.A.isConnected()),
                                  n = l.useMemo(() => e.join(","), [e]);
                              l.useEffect(() => {
                                  t &&
                                      (async function () {
                                          try {
                                              await (async function () {
                                                  let e, t;
                                                  if (!f.A.shouldFetchChannelAffinities()) return Promise.resolve(null);
                                                  let n = Date.now();
                                                  o.h.dispatch({ type: "REQUEST_CHANNEL_AFFINITIES", requestedAt: n });
                                                  try {
                                                      t = await r.Bo.get({
                                                          url: "/users/@me/affinities/channels",
                                                          rejectWithError: !1,
                                                      });
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
                                              })();
                                          } catch (e) {}
                                          await N(n.split(","));
                                      })();
                              }, [n, t]);
                          })(t),
                          (0, i.yK)([f.A], () => f.A.topSummaries(), [])
                      );
                  },
                  deleteSummary: j,
              }
            : null,
    v = 221552 == n.j ? I : null;
n.d(
    t,
    {},
    {
        $T: A,
        Ay: v,
        C6: C,
        C7: _,
        O$: j,
        Oz: function () {
            o.h.dispatch({ type: "TOGGLE_TOPICS_BAR" });
        },
        sK: x,
        s_: E,
    },
);
