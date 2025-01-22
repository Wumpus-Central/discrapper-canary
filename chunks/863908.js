r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(5192),
    a = r(981631),
    o = r(388032);
function s(e, n, r, s) {
    if (e.state === a.jm8.RECONNECTING)
        return {
            mainText: o.intl.string(o.t.pdFFKy),
            supportingText: o.intl.string(o.t['+PuO2N'])
        };
    if (e.state === a.jm8.PAUSED)
        return r
            ? {
                  mainText: o.intl.string(o.t['5q17w8']),
                  supportingText: o.intl.string(o.t.LV1NSE)
              }
            : {
                  mainText: o.intl.string(o.t['5q17w8']),
                  supportingText: o.intl.formatToPlainString(o.t.meVVlZ, { username: i.ZP.getName(e.guildId, e.channelId, n) })
              };
    return s
        ? {
              mainText: o.intl.string(o.t.JmaKtL),
              supportingText: o.intl.string(o.t['hC3+BA'])
          }
        : null;
}
