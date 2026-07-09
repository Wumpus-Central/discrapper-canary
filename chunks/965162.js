"use strict";
n.d(t, {
    D1: () => I,
    Eo: () => f,
    Hk: () => T,
    R4: () => p,
    Uz: () => h,
    _V: () => A,
    d1: () => c,
    pR: () => u,
    wC: () => E,
});
var i = n(95561),
    r = n(734057),
    a = n(763827),
    s = n(174459),
    l = n(486020),
    o = n(577718),
    d = n(652215);
function c(e) {
    return !!(null != e && "object" == typeof e && "id" in e) && (e.type === o.yZ.BACKGROUND || (e.type, !1));
}
function u(e) {
    return "number" == typeof e && e in o.ZQ;
}
function _(e) {
    return u(e) ? o.wJ.includes(e) : !!c(e) && ((0, l.VI)(e.asset) || (0, l.q6)(e.asset));
}
function E(e) {
    return null != e ? "Video Background" : "None";
}
function A(e) {
    return null == e
        ? "None"
        : c(e)
          ? "Custom"
          : "blur" === e
            ? "Blur"
            : `Preset - ${(function (e) {
                  switch (e) {
                      case o.ZQ.OPTION_1:
                          return "Cybercity";
                      case o.ZQ.OPTION_2:
                          return "Discord the Movie";
                      case o.ZQ.OPTION_3:
                          return "Wumpus Vacation";
                      case o.ZQ.OPTION_4:
                          return "Vaporwave";
                      case o.ZQ.OPTION_7:
                          return "Capernite Day";
                      case o.ZQ.OPTION_8:
                          return "Capernite Night";
                      case o.ZQ.OPTION_9:
                          return "Hacker Den";
                      case o.ZQ.OPTION_10:
                          return "Wumpice";
                  }
              })(e)}`;
}
function h(e, t, n) {
    let l = a.A.getGuildId(),
        o = a.A.getChannelId(),
        c = r.A.getChannel(o),
        u = (0, i.JK)(l, o, !0);
    s.default.track(d.HAw.VIDEO_EFFECT_UPDATED, {
        location: t,
        effect_type: E(e),
        effect_detail: A(e),
        effect_state: n,
        channel_id: o,
        channel_type: c?.type,
        guild_id: l,
        voice_state_count: u.voice_state_count,
        video_stream_count: u.video_stream_count,
        media_session_id: a.A.getMediaSessionId(),
        rtc_connection_id: a.A.getRTCConnectionId(),
        is_animated: _(e),
    });
}
function I(e, t, n) {
    s.default.track(d.HAw.VIDEO_BACKGROUND_ADDED, { is_animated: _(e), is_video: t, is_from_tenor: n });
}
function f(e) {
    s.default.track(d.HAw.VIDEO_BACKGROUND_DELETED, { is_animated: _(e) });
}
function p(e) {
    return null == e
        ? { oneofKind: void 0 }
        : c(e)
          ? { oneofKind: "customAsset", customAsset: { id: e.id, assetHash: e.asset } }
          : "blur" === e
            ? { oneofKind: "blur", blur: { useBlur: !0 } }
            : { oneofKind: "presetOption", presetOption: e };
}
function T(e, t) {
    if (null == e || void 0 === e.oneofKind) return null;
    switch (e.oneofKind) {
        case "customAsset":
            return { type: o.yZ.BACKGROUND, id: e.customAsset.id, user_id: t, asset: e.customAsset.assetHash };
        case "blur":
            return e.blur.useBlur ? "blur" : null;
        case "presetOption":
            return e.presetOption;
    }
}
