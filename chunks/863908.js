n.d(t, { Z: () => a });
var r = n(5192),
    i = n(981631),
    o = n(388032);
function a(e, t, n, a) {
    return e.state === i.jm8.RECONNECTING
        ? {
              mainText: o.NW.string(o.t.pdFFKy),
              supportingText: o.NW.string(o.t['+PuO2N'])
          }
        : e.state === i.jm8.PAUSED
          ? n
              ? {
                    mainText: o.NW.string(o.t['5q17w8']),
                    supportingText: o.NW.string(o.t.LV1NSE)
                }
              : {
                    mainText: o.NW.string(o.t['5q17w8']),
                    supportingText: o.NW.formatToPlainString(o.t.meVVlZ, { username: r.ZP.getName(e.guildId, e.channelId, t) })
                }
          : a
            ? {
                  mainText: o.NW.string(o.t.JmaKtL),
                  supportingText: o.NW.string(o.t['hC3+BA'])
              }
            : null;
}
