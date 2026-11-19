var l = n(582128),
    s = n(435558),
    a = n.n(s),
    r = n(164636),
    i = n(620632),
    o = n(73153),
    c = n(627784),
    u = n(432371),
    d = n(225123),
    m = n(734057),
    h = n(927813),
    p = n(391820),
    f = n(652215);
let g = 30 * h.A.Millis.SECOND;
async function C(e) {
    let t, n;
    if (!p.A.shouldFetch(e)) return;
    let l = Date.now();
    o.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARIES", channelId: e, requestedAt: l });
    try {
        n = await i.Bo.get({ url: f.BVt.CHANNEL_SUMMARIES(e), rejectWithError: !1 });
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
function A(e, t) {
    o.h.dispatch({ type: "SET_HIGHLIGHTED_SUMMARY", channelId: e, summaryId: t ?? null });
}
function x(e, t) {
    (null != e &&
        null != t &&
        (async function (e, t) {
            let n, l;
            if (!p.A.shouldFetch(e, t)) return;
            let s = Date.now();
            o.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARY", channelId: e, summaryId: t, requestedAt: s });
            try {
                let n = await i.Bo.get({ url: f.BVt.CHANNEL_SUMMARY(e, t), rejectWithError: !1 });
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
function j(e, t) {
    o.h.dispatch({ type: "SET_SUMMARY_FEEDBACK", summary: e, rating: t });
}
async function _(e) {
    let t,
        n,
        { useQuickSwitcher: l = !0, useChannelAffinities: s = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    e = e ?? [];
    let a = Date.now();
    if (
        0 ===
        (e = e
            .concat(p.A.defaultChannelIds({ withQuickSwitcher: l, withChannelAffinities: s }))
            .filter((e) => {
                let t = m.A.getChannel(e);
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
    o.h.dispatch({ type: "REQUEST_CHANNEL_SUMMARIES_BULK", channelIds: e, requestedAt: a });
    try {
        n = await i.Bo.post({ url: f.BVt.USER_SUMMARIES, body: { channel_ids: e }, rejectWithError: !1 });
    } catch (e) {
        t = new c.LG(e);
    }
    let r = n?.body.summaries;
    o.h.dispatch({
        type: "RECEIVE_CHANNEL_SUMMARIES_BULK",
        requestedAt: a,
        receivedAt: Date.now(),
        summaries: r,
        requestArgs: { channelIds: e },
        error: t,
    });
}
async function N(e) {
    try {
        (await i.Bo.del({ url: f.BVt.CHANNEL_SUMMARY(e.channelId, e.id), rejectWithError: !1 }),
            o.h.dispatch({ type: "DELETE_SUMMARY", summary: e }));
    } catch (e) {
        throw new c.LG(e);
    }
}
let v =
        221552 == n.j
            ? {
                  setSummaryFeedback: j,
                  updateVisibleMessages: E,
                  setSelectedSummary: x,
                  setHighlightedSummary: A,
                  fetchSummaries: C,
                  fetchSummariesBulk: _,
                  useChannelSummaries: function (e) {
                      let { channelIds: t = [] } = e;
                      return (
                          !(function () {
                              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                  t = (0, r.bG)([d.A], () => d.A.isConnected()),
                                  n = l.useMemo(() => e.join(","), [e]);
                              l.useEffect(() => {
                                  t &&
                                      (async function () {
                                          try {
                                              await (async function () {
                                                  let e, t;
                                                  if (!p.A.shouldFetchChannelAffinities()) return Promise.resolve(null);
                                                  let n = Date.now();
                                                  o.h.dispatch({ type: "REQUEST_CHANNEL_AFFINITIES", requestedAt: n });
                                                  try {
                                                      t = await i.Bo.get({
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
                                          await _(n.split(","));
                                      })();
                              }, [n, t]);
                          })(t),
                          (0, r.yK)([p.A], () => p.A.topSummaries(), [])
                      );
                  },
                  deleteSummary: N,
              }
            : null,
    I = 221552 == n.j ? v : null;
n.d(
    t,
    {},
    {
        $T: C,
        Ay: I,
        C6: A,
        C7: j,
        O$: N,
        Oz: function () {
            o.h.dispatch({ type: "TOGGLE_TOPICS_BAR" });
        },
        sK: x,
        s_: E,
    },
);
