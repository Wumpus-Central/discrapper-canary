n.d(t, { W: () => d, h: () => o });
var i = n(129014),
    r = n(976860),
    a = n(961350),
    l = n(723702),
    s = n(652215);
let o = l.isPlatformEmbedded
        ? s.tEg
        : (e, t) => {
              if (!(0, r.MX)()) return i.default.request(s.e$_.DEEP_LINK, { type: e, params: t });
          },
    d = l.isPlatformEmbedded
        ? s.tEg
        : (e, t) => {
              if (!a.default.isAuthenticated()) return o(e, { ...(t || {}), fingerprint: a.default.getFingerprint() });
          };
