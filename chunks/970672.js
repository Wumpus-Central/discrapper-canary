i.d(e, { W: () => l, h: () => u });
var a = i(129014),
    d = i(976860),
    r = i(495544),
    n = i(723702),
    s = i(652215);
let u = n.isPlatformEmbedded
        ? s.tEg
        : (t, e) => {
              if (!(0, d.MX)()) return a.default.request(s.e$_.DEEP_LINK, { type: t, params: e });
          },
    l = n.isPlatformEmbedded
        ? s.tEg
        : (t, e) => {
              if (!r.default.isAuthenticated())
                  return u(t, {
                      ...(e || {}),
                      fingerprint: r.default.getFingerprint(),
                      installationId: r.default.getInstallationForTracking(),
                  });
          };
