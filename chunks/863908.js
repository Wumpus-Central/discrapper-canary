n.d(t, { Z: () => l });
var r = n(458725),
    i = n(386146),
    o = n(5192),
    a = n(981631),
    s = n(388032);
function l(e, t, n, l) {
    if (e.state === a.jm8.RECONNECTING) {
        var c;
        let e = (0, i.tc)({ location: 'getScreenMessageForStream' }),
            t = null == (c = (0, r.hp)(r.u.STREAM_RECONNECTING)) ? void 0 : c.errorCode;
        return {
            mainText: s.intl.string(s.t.pdFFKy),
            supportingText: s.intl.string(s.t['+PuO2N']),
            errorCodeText: e ? s.intl.formatToPlainString(s.t['ejOT9/'], { errorCode: t }) : void 0
        };
    }
    return e.state === a.jm8.PAUSED
        ? n
            ? {
                  mainText: s.intl.string(s.t['5q17w8']),
                  supportingText: s.intl.string(s.t.LV1NSE)
              }
            : {
                  mainText: s.intl.string(s.t['5q17w8']),
                  supportingText: s.intl.formatToPlainString(s.t.meVVlZ, { username: o.ZP.getName(e.guildId, e.channelId, t) })
              }
        : l
          ? {
                mainText: s.intl.string(s.t.JmaKtL),
                supportingText: s.intl.string(s.t['hC3+BA'])
            }
          : null;
}
