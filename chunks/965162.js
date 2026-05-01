n.d(t, {
    D1: () => T,
    Eo: () => h,
    Hk: () => N,
    R4: () => S,
    Uz: () => I,
    _V: () => A,
    d1: () => c,
    pR: () => _,
    wC: () => u,
});
var i = n(58149),
    a = n(734057),
    r = n(763827),
    s = n(954571),
    l = n(486020),
    o = n(577718),
    d = n(652215);
function c(e) {
    return null != e && "object" == typeof e && "id" in e && e.type === o.yZ.BACKGROUND;
}
function _(e) {
    return "number" == typeof e && e in o.ZQ;
}
function E(e) {
    return _(e) ? o.wJ.includes(e) : !!c(e) && ((0, l.VI)(e.asset) || (0, l.q6)(e.asset));
}
function u(e) {
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
function I(e, t, n) {
    let l = r.A.getGuildId(),
        o = r.A.getChannelId(),
        c = a.A.getChannel(o),
        _ = (0, i.JK)(l, o, !0);
    s.default.track(d.HAw.VIDEO_EFFECT_UPDATED, {
        location: t,
        effect_type: u(e),
        effect_detail: A(e),
        effect_state: n,
        channel_id: o,
        channel_type: c?.type,
        guild_id: l,
        voice_state_count: _.voice_state_count,
        video_stream_count: _.video_stream_count,
        media_session_id: r.A.getMediaSessionId(),
        rtc_connection_id: r.A.getRTCConnectionId(),
        is_animated: E(e),
    });
}
function T(e, t, n) {
    s.default.track(d.HAw.VIDEO_BACKGROUND_ADDED, { is_animated: E(e), is_video: t, is_from_tenor: n });
}
function h(e) {
    s.default.track(d.HAw.VIDEO_BACKGROUND_DELETED, { is_animated: E(e) });
}
function S(e) {
    return null == e
        ? { oneofKind: void 0 }
        : c(e)
          ? { oneofKind: "customAsset", customAsset: { id: e.id, assetHash: e.asset } }
          : "blur" === e
            ? { oneofKind: "blur", blur: { useBlur: !0 } }
            : { oneofKind: "presetOption", presetOption: e };
}
function N(e, t) {
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
