"use strict";
n.d(t, { W: () => c, h: () => o });
var i = n(129014),
    s = n(976860),
    r = n(961350),
    l = n(723702),
    a = n(652215);
let o = l.isPlatformEmbedded
        ? a.tEg
        : (e, t) => {
              if (!(0, s.MX)()) return i.default.request(a.e$_.DEEP_LINK, { type: e, params: t });
          },
    c = l.isPlatformEmbedded
        ? a.tEg
        : (e, t) => {
              if (!r.default.isAuthenticated())
                  return o(e, {
                      ...(t || {}),
                      fingerprint: r.default.getFingerprint(),
                      installationId: r.default.getInstallationForTracking(),
                  });
          };
