i.d(t, { H: () => m, q: () => h });
var n = i(636537),
    l = i(228366),
    s = i(66834),
    a = i(725613),
    r = i(734057),
    d = i(927813),
    o = i(769022),
    u = i(652215);
let c = 10 * d.A.Millis.MINUTE;
function m(e) {
    l.h.dispatch({ type: "VOICE_CHANNEL_HISTORY_START_TRACKING", channelId: e });
}
function h(e) {
    let t = o.A.getLastFetchTime(e);
    (null != t && Date.now() - t < c) ||
        (l.h.dispatch({ type: "VOICE_CHANNEL_HISTORY_UPDATE_LAST_FETCH_TIME", channelId: e, timestamp: Date.now() }),
        g(e));
}
async function g(e) {
    try {
        let t = r.A.getChannel(e),
            i = a.A.getStartTime(t);
        if (null == i) return;
        let d = { session_start_time: new Date(i).toISOString() },
            { body: o } = await n.Bo.get({ url: u.Rsh.CHANNEL_VOICE_HISTORY(e), rejectWithError: !0, query: d }),
            c = (o.voice_leaves ?? []).map((e) => ({ userId: e.user_id, leftAt: e.timestamp })),
            m = (o.activities ?? []).map((e) => ({
                userId: e.author_id,
                applicationId: e.application_id ?? void 0,
                applicationName: e.application_name ?? "",
                endedAt: e.timestamp,
            }));
        if (
            (l.h.dispatch({
                type: "VOICE_CHANNEL_HISTORY_FETCH_COMPLETE",
                channelId: e,
                voiceLeaves: c,
                activities: m,
            }),
            null != t && null != t.guild_id)
        ) {
            let e = [...c.map((e) => e.userId), ...m.map((e) => e.userId)];
            e.length > 0 && s.A.requestMembersById(t.guild_id, e, !1);
        }
    } catch {}
}
