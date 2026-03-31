n.d(t, { H: () => u, q: () => h });
var i = n(562465),
    l = n(73153),
    s = n(725613),
    a = n(734057),
    r = n(927813),
    o = n(769022),
    c = n(652215);
let d = 10 * r.A.Millis.MINUTE;
function u(e) {
    l.h.dispatch({ type: "VOICE_CHANNEL_HISTORY_START_TRACKING", channelId: e });
}
function h(e) {
    let t = o.A.getLastFetchTime(e);
    (null != t && Date.now() - t < d) ||
        (l.h.dispatch({ type: "VOICE_CHANNEL_HISTORY_UPDATE_LAST_FETCH_TIME", channelId: e, timestamp: Date.now() }),
        A(e));
}
async function A(e) {
    try {
        let t = a.A.getChannel(e),
            n = s.A.getStartTime(t);
        if (null == n) return;
        let r = { session_start_time: new Date(n).toISOString() },
            { body: o } = await i.Bo.get({ url: c.Rsh.CHANNEL_VOICE_HISTORY(e), rejectWithError: !0, query: r }),
            d = (o.voice_leaves ?? []).map((e) => ({ userId: e.user_id, leftAt: e.timestamp })),
            u = (o.activities ?? []).map((e) => ({
                userId: e.author_id,
                applicationId: e.application_id ?? void 0,
                applicationName: e.application_name ?? "",
                endedAt: e.timestamp,
            }));
        l.h.dispatch({ type: "VOICE_CHANNEL_HISTORY_FETCH_COMPLETE", channelId: e, voiceLeaves: d, activities: u });
    } catch {}
}
