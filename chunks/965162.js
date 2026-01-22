n.d(t, {
    D1: () => g,
    Eo: () => E,
    Hk: () => y,
    R4: () => b,
    Uz: () => m,
    _V: () => h,
    d1: () => u,
    pR: () => d,
    wC: () => p,
});
var r = n(58149),
    i = n(734057),
    a = n(383501),
    s = n(954571),
    o = n(486020),
    l = n(577718),
    c = n(652215);
function u(e) {
    return null != e && "object" == typeof e && "id" in e && e.type === l.yZ.BACKGROUND;
}
function d(e) {
    return "number" == typeof e && e in l.ZQ;
}
function f(e) {
    return d(e) ? l.wJ.includes(e) : !!u(e) && ((0, o.VI)(e.asset) || (0, o.q6)(e.asset));
}
function p(e) {
    return null != e ? "Video Background" : "None";
}
function _(e) {
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
}
function h(e) {
    return null == e ? "None" : u(e) ? "Custom" : "blur" === e ? "Blur" : "Preset - ".concat(_(e));
}
function m(e, t, n) {
    let o = a.A.getGuildId(),
        l = a.A.getChannelId(),
        u = i.A.getChannel(l),
        d = (0, r.JK)(o, l, !0);
    s.default.track(c.HAw.VIDEO_EFFECT_UPDATED, {
        location: t,
        effect_type: p(e),
        effect_detail: h(e),
        effect_state: n,
        channel_id: l,
        channel_type: null == u ? void 0 : u.type,
        guild_id: o,
        voice_state_count: d.voice_state_count,
        video_stream_count: d.video_stream_count,
        media_session_id: a.A.getMediaSessionId(),
        rtc_connection_id: a.A.getRTCConnectionId(),
        is_animated: f(e),
    });
}
function g(e, t, n) {
    s.default.track(c.HAw.VIDEO_BACKGROUND_ADDED, {
        is_animated: f(e),
        is_video: t,
        is_from_tenor: n,
    });
}
function E(e) {
    s.default.track(c.HAw.VIDEO_BACKGROUND_DELETED, { is_animated: f(e) });
}
function b(e) {
    return null == e
        ? { oneofKind: void 0 }
        : u(e)
          ? {
                oneofKind: "customAsset",
                customAsset: {
                    id: e.id,
                    assetHash: e.asset,
                },
            }
          : "blur" === e
            ? {
                  oneofKind: "blur",
                  blur: { useBlur: !0 },
              }
            : {
                  oneofKind: "presetOption",
                  presetOption: e,
              };
}
function y(e, t) {
    if (null == e || void 0 === e.oneofKind) return null;
    switch (e.oneofKind) {
        case "customAsset":
            return {
                type: l.yZ.BACKGROUND,
                id: e.customAsset.id,
                user_id: t,
                asset: e.customAsset.assetHash,
            };
        case "blur":
            return e.blur.useBlur ? "blur" : null;
        case "presetOption":
            return e.presetOption;
    }
}
