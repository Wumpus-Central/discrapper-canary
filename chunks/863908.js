n.d(t, { Z: () => s });
var r = n(458725),
    i = n(5192),
    a = n(981631),
    o = n(388032);
function s(e, t, n, s) {
    if (e.state === a.jm8.RECONNECTING) {
        var l;
        let e = null == (l = (0, r.hp)(r.u.STREAM_RECONNECTING)) ? void 0 : l.errorCode;
        return {
            mainText: o.intl.string(o.t.pdFFKy),
            supportingText: o.intl.string(o.t["+PuO2N"]),
            errorCodeText: o.intl.formatToPlainString(o.t["ejOT9/"], { errorCode: e }),
        };
    }
    return e.state === a.jm8.PAUSED
        ? n
            ? {
                  mainText: o.intl.string(o.t["5q17w8"]),
                  supportingText: o.intl.string(o.t.LV1NSE),
              }
            : {
                  mainText: o.intl.string(o.t["5q17w8"]),
                  supportingText: o.intl.formatToPlainString(o.t.meVVlZ, {
                      username: i.ZP.getName(e.guildId, e.channelId, t),
                  }),
              }
        : s
          ? {
                mainText: o.intl.string(o.t.JmaKtL),
                supportingText: o.intl.string(o.t["hC3+BA"]),
            }
          : null;
}
