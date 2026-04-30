"use strict";
n.d(t, {
    D1: () => E,
    Eo: () => m,
    Hk: () => A,
    R4: () => g,
    Uz: () => p,
    _V: () => h,
    d1: () => c,
    pR: () => d,
    wC: () => f,
});
var i = n(95561),
    r = n(734057),
    s = n(763827),
    a = n(174459),
    o = n(486020),
    l = n(577718),
    u = n(652215);
function c(e) {
    return null != e && "object" == typeof e && "id" in e && e.type === l.yZ.BACKGROUND;
}
function d(e) {
    return "number" == typeof e && e in l.ZQ;
}
function _(e) {
    return d(e) ? l.wJ.includes(e) : !!c(e) && ((0, o.VI)(e.asset) || (0, o.q6)(e.asset));
}
function f(e) {
    return null != e ? "Video Background" : "None";
}
function h(e) {
    return null == e
        ? "None"
        : c(e)
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
function p(e, t, n) {
    let o = s.A.getGuildId(),
        l = s.A.getChannelId(),
        c = r.A.getChannel(l),
        d = (0, i.JK)(o, l, !0);
    a.default.track(u.HAw.VIDEO_EFFECT_UPDATED, {
        location: t,
        effect_type: f(e),
        effect_detail: h(e),
        effect_state: n,
        channel_id: l,
        channel_type: c?.type,
        guild_id: o,
        voice_state_count: d.voice_state_count,
        video_stream_count: d.video_stream_count,
        media_session_id: s.A.getMediaSessionId(),
        rtc_connection_id: s.A.getRTCConnectionId(),
        is_animated: _(e),
    });
}
function E(e, t, n) {
    a.default.track(u.HAw.VIDEO_BACKGROUND_ADDED, { is_animated: _(e), is_video: t, is_from_tenor: n });
}
function m(e) {
    a.default.track(u.HAw.VIDEO_BACKGROUND_DELETED, { is_animated: _(e) });
}
function g(e) {
    return null == e
        ? { oneofKind: void 0 }
        : c(e)
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
