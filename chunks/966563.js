n.d(t, { A: () => I });
var i = n(73153),
    r = n(308368),
    a = n(729937),
    s = n(181658),
    l = n(950803),
    o = n(85982),
    d = n(371169),
    c = n(734057),
    u = n(576705),
    _ = n(339586),
    E = n(173912),
    A = n(652215),
    h = n(818023),
    f = n(105292);
async function I(e) {
    let { application: t, userId: n, activity: a, sessionId: d, channelId: c, messageId: u, intent: I = h.W9.PLAY } = e,
        m = t.id;
    null != d && i.h.dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId: m });
    let g = a ?? (null != d ? { application_id: m, session_id: d } : null),
        S = null != g && (0, E.m)(m) ? await p(g, n) : void 0,
        N = null != S ? await T(m, S) : null;
    function C() {
        return (i.h.dispatch({ type: "ACTIVITY_JOIN_FAILED", applicationId: m }), !1);
    }
    let O = null;
    if (null != d)
        try {
            ({ secret: O } = await r.A.getJoinSecret(n, d, m, c ?? N?.channelId, u));
        } catch (t) {
            let e = await (0, l.f)(new s.A(t), m);
            return ((0, o.A)(e.errorCode === A.t02.UNKNOWN_SESSION ? f.intl.string(f.t["7XR9+7"]) : e.message), C());
        }
    let { frameId: R, launched: L } = (0, E.A)({ applicationId: m, channel: N });
    if (null == O) return !0;
    i.h.dispatch({ type: "ACTIVITY_JOIN_NAVIGATION_COMPLETE", applicationId: m });
    try {
        (await L, await _.A.waitFrameSubscribed(R, A.ZE4.ACTIVITY_JOIN));
    } catch {
        return C();
    }
    return (
        i.h.dispatch({
            type: "ACTIVITY_JOIN",
            applicationId: m,
            parentApplicationId: null,
            frameId: R,
            secret: O,
            intent: I,
            embedded: !0,
        }),
        !0
    );
}
async function p(e, t) {
    try {
        let n = await (0, a.yb)(e, t);
        return "string" == typeof n?.channel_id ? n.channel_id : void 0;
    } catch {
        return;
    }
}
async function T(e, t) {
    let n = c.A.getChannel(t);
    if (null == n) {
        let n = (await (0, d.l5)(e)).find((e) => e.channel_id === t);
        return null != n ? { guildId: n.guild_id, channelId: n.channel_id } : null;
    }
    return n.type === A.rbe.GUILD_APP && n.application_id === e && u.A.can(A.xBc.VIEW_CHANNEL, n)
        ? { guildId: n.guild_id, channelId: n.id }
        : null;
}
