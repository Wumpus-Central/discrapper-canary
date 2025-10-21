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
            mainText: o.intl.string(o.t["pdFFK+"]),
            supportingText: o.intl.string(o.t["+PuO2N"]),
            errorCodeText: o.intl.formatToPlainString(o.t.ejOT95, { errorCode: e }),
        };
    }
    return e.state === a.jm8.PAUSED
        ? n
            ? {
                  mainText: o.intl.string(o.t["5q17w5"]),
                  supportingText: o.intl.string(o.t.LV1NSN),
              }
            : {
                  mainText: o.intl.string(o.t["5q17w5"]),
                  supportingText: o.intl.formatToPlainString(o.t.meVVlb, {
                      username: i.ZP.getName(e.guildId, e.channelId, t),
                  }),
              }
        : s
          ? {
                mainText: o.intl.string(o.t.JmaKtK),
                supportingText: o.intl.string(o.t["hC3+BD"]),
            }
          : null;
}
