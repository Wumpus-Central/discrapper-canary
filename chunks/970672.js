n.d(t, { W: () => d, h: () => o });
var i = n(129014),
    a = n(976860),
    l = n(961350),
    r = n(723702),
    s = n(652215);
let o = r.isPlatformEmbedded
        ? s.tEg
        : (e, t) => {
              if (!(0, a.MX)()) return i.default.request(s.e$_.DEEP_LINK, { type: e, params: t });
          },
    d = r.isPlatformEmbedded
        ? s.tEg
        : (e, t) => {
              if (!l.default.isAuthenticated())
                  return o(e, {
                      ...(t || {}),
                      fingerprint: l.default.getFingerprint(),
                      installationId: l.default.getInstallationForTracking(),
                  });
          };
