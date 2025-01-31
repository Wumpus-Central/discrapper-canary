n.d(t, { Z: () => s });
var i = n(5192),
    r = n(981631),
    a = n(388032);
function s(e, t, n, s) {
    return e.state === r.jm8.RECONNECTING
        ? {
              mainText: a.intl.string(a.t.pdFFKy),
              supportingText: a.intl.string(a.t['+PuO2N'])
          }
        : e.state === r.jm8.PAUSED
          ? n
              ? {
                    mainText: a.intl.string(a.t['5q17w8']),
                    supportingText: a.intl.string(a.t.LV1NSE)
                }
              : {
                    mainText: a.intl.string(a.t['5q17w8']),
                    supportingText: a.intl.formatToPlainString(a.t.meVVlZ, { username: i.ZP.getName(e.guildId, e.channelId, t) })
                }
          : s
            ? {
                  mainText: a.intl.string(a.t.JmaKtL),
                  supportingText: a.intl.string(a.t['hC3+BA'])
              }
            : null;
}
