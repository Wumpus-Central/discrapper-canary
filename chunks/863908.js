n.d(t, { Z: () => l });
var r = n(785141),
    i = n(272395),
    o = n(5192),
    a = n(981631),
    s = n(388032);
function l(e, t, n, l) {
    if (e.state === a.jm8.RECONNECTING) {
        var c;
        let e = (0, i.tc)({ location: 'getScreenMessageForStream' }),
            t = null == (c = (0, r.hp)(r.u.STREAM_RECONNECTING)) ? void 0 : c.errorCode;
        return {
            mainText: s.NW.string(s.t.pdFFKy),
            supportingText: s.NW.string(s.t['+PuO2N']),
            errorCodeText: e ? s.NW.formatToPlainString(s.t['ejOT9/'], { errorCode: t }) : void 0
        };
    }
    return e.state === a.jm8.PAUSED
        ? n
            ? {
                  mainText: s.NW.string(s.t['5q17w8']),
                  supportingText: s.NW.string(s.t.LV1NSE)
              }
            : {
                  mainText: s.NW.string(s.t['5q17w8']),
                  supportingText: s.NW.formatToPlainString(s.t.meVVlZ, { username: o.ZP.getName(e.guildId, e.channelId, t) })
              }
        : l
          ? {
                mainText: s.NW.string(s.t.JmaKtL),
                supportingText: s.NW.string(s.t['hC3+BA'])
            }
          : null;
}
