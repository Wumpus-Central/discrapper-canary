i.d(t, { H: () => h, q: () => p });
var r = i(636537),
    n = i(228366),
    o = i(686956),
    a = i(725613),
    l = i(734057),
    s = i(927813),
    u = i(769022),
    d = i(652215);
let c = 10 * s.A.Millis.MINUTE;
function h(e) {
    n.h.dispatch({ type: "VOICE_CHANNEL_HISTORY_START_TRACKING", channelId: e });
}
function p(e) {
    let t = u.A.getLastFetchTime(e);
    (null != t && Date.now() - t < c) ||
        (n.h.dispatch({ type: "VOICE_CHANNEL_HISTORY_UPDATE_LAST_FETCH_TIME", channelId: e, timestamp: Date.now() }),
        _(e));
}
async function _(e) {
    try {
        let t = l.A.getChannel(e),
            i = a.A.getStartTime(t);
        if (null == i) return;
        let s = { session_start_time: new Date(i).toISOString() },
            { body: u } = await r.Bo.get({ url: d.Rsh.CHANNEL_VOICE_HISTORY(e), rejectWithError: !0, query: s }),
            c = (u.voice_leaves ?? []).map((e) => ({ userId: e.user_id, leftAt: e.timestamp })),
            h = (u.activities ?? []).map((e) => ({
                userId: e.author_id,
                applicationId: e.application_id ?? void 0,
                applicationName: e.application_name ?? "",
                endedAt: e.timestamp,
            }));
        if (
            (n.h.dispatch({
                type: "VOICE_CHANNEL_HISTORY_FETCH_COMPLETE",
                channelId: e,
                voiceLeaves: c,
                activities: h,
            }),
            null != t && null != t.guild_id)
        ) {
            let e = [...c.map((e) => e.userId), ...h.map((e) => e.userId)];
            e.length > 0 && o.A.requestMembersById(t.guild_id, e, !1);
        }
    } catch {}
}
