n.d(t, {
    D1: () => T,
    Eo: () => S,
    Hk: () => O,
    R4: () => N,
    Uz: () => A,
    _V: () => I,
    d1: () => E,
    pR: () => d,
    wC: () => u,
});
var i = n(58149),
    r = n(734057),
    a = n(763827),
    s = n(954571),
    _ = n(486020),
    l = n(577718),
    o = n(652215);
function E(e) {
    return null != e && "object" == typeof e && "id" in e && e.type === l.yZ.BACKGROUND;
}
function d(e) {
    return "number" == typeof e && e in l.ZQ;
}
function c(e) {
    return d(e) ? l.wJ.includes(e) : !!E(e) && ((0, _.VI)(e.asset) || (0, _.q6)(e.asset));
}
function u(e) {
    return null != e ? "Video Background" : "None";
}
function I(e) {
    return null == e
        ? "None"
        : E(e)
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
function A(e, t, n) {
    let _ = a.A.getGuildId(),
        l = a.A.getChannelId(),
        E = r.A.getChannel(l),
        d = (0, i.JK)(_, l, !0);
    s.default.track(o.HAw.VIDEO_EFFECT_UPDATED, {
        location: t,
        effect_type: u(e),
        effect_detail: I(e),
        effect_state: n,
        channel_id: l,
        channel_type: E?.type,
        guild_id: _,
        voice_state_count: d.voice_state_count,
        video_stream_count: d.video_stream_count,
        media_session_id: a.A.getMediaSessionId(),
        rtc_connection_id: a.A.getRTCConnectionId(),
        is_animated: c(e),
    });
}
function T(e, t, n) {
    s.default.track(o.HAw.VIDEO_BACKGROUND_ADDED, { is_animated: c(e), is_video: t, is_from_tenor: n });
}
function S(e) {
    s.default.track(o.HAw.VIDEO_BACKGROUND_DELETED, { is_animated: c(e) });
}
function N(e) {
    return null == e
        ? { oneofKind: void 0 }
        : E(e)
          ? { oneofKind: "customAsset", customAsset: { id: e.id, assetHash: e.asset } }
          : "blur" === e
            ? { oneofKind: "blur", blur: { useBlur: !0 } }
            : { oneofKind: "presetOption", presetOption: e };
}
function O(e, t) {
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
