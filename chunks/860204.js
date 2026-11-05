n.d(t, { A: () => O });
var i = n(991690),
    r = n(73153),
    a = n(308368),
    s = n(308528),
    l = n(729937),
    o = n(181658),
    d = n(872142),
    c = n(90804),
    u = n(85982),
    _ = n(587895),
    E = n(378570),
    A = n(843002),
    f = n(734057),
    h = n(977997),
    I = n(292702),
    p = n(173912),
    m = n(617297),
    T = n(366430),
    g = n(165610),
    S = n(652215),
    N = n(917550),
    C = n(792996);
async function O(e) {
    let { application: t, userId: n, activity: O, sessionId: R, channelId: L, messageId: y, intent: D = N.W.PLAY } = e,
        b = t.id;
    null != R && r.h.dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId: b });
    let v = O ?? (null != R ? { application_id: b, session_id: R } : null),
        P =
            null != v && (0, p.m)(b)
                ? await (async function (e, t) {
                      try {
                          let n = await (0, l.yb)(e, t);
                          return "string" == typeof n?.channel_id ? n.channel_id : void 0;
                      } catch {
                          return;
                      }
                  })(v, n)
                : void 0,
        M = (0, T.It)(_.A.getApplication(b)),
        U = !M.has(i.U.MAIN) && M.has(i.U.APP_CHANNEL),
        w = null != P ? await (0, m.A)(b, { preferredChannelId: P, fallback: U }) : null,
        G =
            null == w
                ? await (async function (e, t, n) {
                      let i = h.A.getVoiceStateForSession(t, n) ?? h.A.getVoiceStateForUser(t),
                          r = i?.channelId;
                      if (null == r) return null;
                      let a = f.A.getChannel(r) ?? (await s.A.openChannel(r));
                      return a?.type === S.rbe.GUILD_VOICE && a.application_id === e ? a.id : null;
                  })(b, n, v?.session_id ?? R)
                : null;
    function x() {
        return (r.h.dispatch({ type: "ACTIVITY_JOIN_FAILED", applicationId: b }), !1);
    }
    if (null == w && null == G && !M.has(i.U.MAIN)) {
        if (!U) return ((0, u.A)(C.intl.string(C.t["7XR9+7"])), x());
        null == P && (w = await (0, m.A)(b));
    }
    if (null != G) {
        if (!(await (0, c.A)({ channelId: G }))) return x();
        (0, E.iN)(G);
    }
    let k = null;
    if (null != R)
        try {
            ({ secret: k } = await a.A.getJoinSecret(n, R, b, null != y ? L : (G ?? w?.channelId ?? L), y));
        } catch (t) {
            let e = await (0, d.f)(new o.A(t), b);
            return ((0, u.A)(e.errorCode === S.t02.UNKNOWN_SESSION ? C.intl.string(C.t["7XR9+7"]) : e.message), x());
        }
    let { frameId: F, launched: B } =
        null != G
            ? { frameId: (0, g.VA)(b, (0, A.e)(G)), launched: Promise.resolve() }
            : (0, p.A)({
                  applicationId: b,
                  channel: w,
                  invite: null != L && null != y ? { channelId: L, messageId: y } : void 0,
              });
    if (null == k) return !0;
    r.h.dispatch({ type: "ACTIVITY_JOIN_NAVIGATION_COMPLETE", applicationId: b });
    try {
        (await B, await I.A.waitFrameSubscribed(F, S.ZE4.ACTIVITY_JOIN));
    } catch {
        return x();
    }
    return (
        r.h.dispatch({
            type: "ACTIVITY_JOIN",
            applicationId: b,
            parentApplicationId: null,
            frameId: F,
            secret: k,
            intent: D,
            embedded: !0,
        }),
        !0
    );
}
