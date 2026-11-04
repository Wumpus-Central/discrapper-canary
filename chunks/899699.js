let i;
var r = n(626584),
    a = n(206885),
    s = n(253400);
let l = new r.A("OverlayModuleUtils"),
    o = null;
n.d(
    t,
    {},
    {
        R: function () {
            return null != i
                ? Promise.resolve(i)
                : (null == o &&
                      (o = (async function () {
                          if (!a.O)
                              throw (
                                  l.error("Attempted to load overlay on an unsupported platform."),
                                  Error("Overlay is not supported on this platform.")
                              );
                          try {
                              return (
                                  await s.Ay.ensureModule("discord_overlay2"),
                                  (i = (function (e) {
                                      for (let t of [
                                          "createHostProcess",
                                          "connectProcess",
                                          "disconnectProcess",
                                          "destroyHostProcess",
                                      ])
                                          null == e[t] &&
                                              (l.info(
                                                  `polyfilling OverlayModule.${t}(); Overlay module is probably out of date.`,
                                              ),
                                              (e[t] = () => void 0));
                                      return e;
                                  })(s.Ay.requireModule("discord_overlay2")))
                              );
                          } catch (e) {
                              l.error("failed ensuring discord_overlay2", e);
                              return;
                          }
                      })()),
                  o);
        },
        m: function () {
            if (null == i)
                try {
                    i = s.Ay.requireModule("discord_overlay2");
                } catch (e) {
                    l.error("failed ensuring discord_overlay2", e);
                    return;
                }
            return i;
        },
    },
);
