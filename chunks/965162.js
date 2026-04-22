"use strict";
n.d(t, {
    D1: () => p,
    Eo: () => m,
    Hk: () => A,
    R4: () => g,
    Uz: () => h,
    _V: () => E,
    d1: () => d,
    pR: () => c,
    wC: () => f,
});
var r = n(58149),
    i = n(734057),
    s = n(383501),
    a = n(954571),
    o = n(486020),
    l = n(577718),
    u = n(652215);
function d(e) {
    return null != e && "object" == typeof e && "id" in e && e.type === l.yZ.BACKGROUND;
}
function c(e) {
    return "number" == typeof e && e in l.ZQ;
}
function _(e) {
    return c(e) ? l.wJ.includes(e) : !!d(e) && ((0, o.VI)(e.asset) || (0, o.q6)(e.asset));
}
function f(e) {
    return null != e ? "Video Background" : "None";
}
function E(e) {
    return null == e
        ? "None"
        : d(e)
          ? "Custom"
          : "blur" === e
            ? "Blur"
            : `Preset - ${(function (e) {
                  switch (e) {
                      case l.ZQ.OPTION_1:
                          return "Cybercity";
                      case l.ZQ.OPTION_2:
                          return "Discord the Movie";
                      case l.ZQ.OPTION_3:
                          return "Wumpus Vacation";
                      case l.ZQ.OPTION_4:
                          return "Vaporwave";
                      case l.ZQ.OPTION_7:
                          return "Capernite Day";
                      case l.ZQ.OPTION_8:
                          return "Capernite Night";
                      case l.ZQ.OPTION_9:
                          return "Hacker Den";
                      case l.ZQ.OPTION_10:
                          return "Wumpice";
                  }
              })(e)}`;
}
function h(e, t, n) {
    let o = s.A.getGuildId(),
        l = s.A.getChannelId(),
        d = i.A.getChannel(l),
        c = (0, r.JK)(o, l, !0);
    a.default.track(u.HAw.VIDEO_EFFECT_UPDATED, {
        location: t,
        effect_type: f(e),
        effect_detail: E(e),
        effect_state: n,
        channel_id: l,
        channel_type: d?.type,
        guild_id: o,
        voice_state_count: c.voice_state_count,
        video_stream_count: c.video_stream_count,
        media_session_id: s.A.getMediaSessionId(),
        rtc_connection_id: s.A.getRTCConnectionId(),
        is_animated: _(e),
    });
}
function p(e, t, n) {
    a.default.track(u.HAw.VIDEO_BACKGROUND_ADDED, { is_animated: _(e), is_video: t, is_from_tenor: n });
}
function m(e) {
    a.default.track(u.HAw.VIDEO_BACKGROUND_DELETED, { is_animated: _(e) });
}
function g(e) {
    return null == e
        ? { oneofKind: void 0 }
        : d(e)
          ? { oneofKind: "customAsset", customAsset: { id: e.id, assetHash: e.asset } }
          : "blur" === e
            ? { oneofKind: "blur", blur: { useBlur: !0 } }
            : { oneofKind: "presetOption", presetOption: e };
}
function A(e, t) {
    if (null == e || void 0 === e.oneofKind) return null;
    switch (e.oneofKind) {
        case "customAsset":
            return { type: l.yZ.BACKGROUND, id: e.customAsset.id, user_id: t, asset: e.customAsset.assetHash };
        case "blur":
            return e.blur.useBlur ? "blur" : null;
        case "presetOption":
            return e.presetOption;
    }
}
