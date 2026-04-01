n.d(t, { H: () => h, q: () => A });
var i = n(562465),
    l = n(73153),
    s = n(686956),
    a = n(725613),
    r = n(734057),
    o = n(927813),
    d = n(769022),
    c = n(652215);
let u = 10 * o.A.Millis.MINUTE;
function h(e) {
    l.h.dispatch({ type: "VOICE_CHANNEL_HISTORY_START_TRACKING", channelId: e });
}
function A(e) {
    let t = d.A.getLastFetchTime(e);
    (null != t && Date.now() - t < u) ||
        (l.h.dispatch({ type: "VOICE_CHANNEL_HISTORY_UPDATE_LAST_FETCH_TIME", channelId: e, timestamp: Date.now() }),
        _(e));
}
async function _(e) {
    try {
        let t = r.A.getChannel(e),
            n = a.A.getStartTime(t);
        if (null == n) return;
        let o = { session_start_time: new Date(n).toISOString() },
            { body: d } = await i.Bo.get({ url: c.Rsh.CHANNEL_VOICE_HISTORY(e), rejectWithError: !0, query: o }),
            u = (d.voice_leaves ?? []).map((e) => ({ userId: e.user_id, leftAt: e.timestamp })),
            h = (d.activities ?? []).map((e) => ({
                userId: e.author_id,
                applicationId: e.application_id ?? void 0,
                applicationName: e.application_name ?? "",
                endedAt: e.timestamp,
            }));
        if (
            (l.h.dispatch({
                type: "VOICE_CHANNEL_HISTORY_FETCH_COMPLETE",
                channelId: e,
                voiceLeaves: u,
                activities: h,
            }),
            null != t && null != t.guild_id)
        ) {
            let e = [...u.map((e) => e.userId), ...h.map((e) => e.userId)];
            e.length > 0 && s.A.requestMembersById(t.guild_id, e, !1);
        }
    } catch {}
}
