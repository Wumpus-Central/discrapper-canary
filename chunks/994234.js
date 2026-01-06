n.d(t, { Z: () => g });
var r = n(473749),
    i = n(442837),
    l = n(481060),
    a = n(906732),
    o = n(879892),
    s = n(430824),
    c = n(607346),
    u = n(343334),
    d = n(278646),
    f = n(535396),
    h = n(981631);
function p(e, t, n) {
    n && (0, l.pTH)(), (0, d.h)(e, t);
}
function g(e, t) {
    let { analyticsLocations: n } = (0, a.ZP)(),
        { onToggle: l, isLoading: d, error: g } = (0, u.Z)(e, t),
        b = (0, i.e7)([s.Z], () => s.Z.getGuild(e)),
        m = (0, c.Z)(e, t);
    return {
        onActivate: r.useCallback(
            function () {
                var e;
                let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { shouldCloseAllModals: i = !0 } = r;
                if (null != b && null != t)
                    return m < t.cost
                        ? void (0, o.u)({
                              analyticsLocation: {
                                  page: h.ZY5.GUILD_POWERUPS_OVERVIEW,
                                  section: h.jXE.GUILD_POWERUPS_OVERVIEW_CARD,
                              },
                              numberOfBoostsToAdd: t.cost - m,
                              analyticsLocations: n,
                              guild: b,
                              intent: t.type === f.Us.LEVEL ? f.P2.LEVEL : f.P2.PERK,
                              onSubscribeComplete: () => {
                                  var e;
                                  return null == (e = l(!0))
                                      ? void 0
                                      : e.then(() => {
                                            p(b.id, t, i);
                                        });
                              },
                          })
                        : null == (e = l(!0))
                          ? void 0
                          : e.then(() => {
                                p(b.id, t, i);
                            });
            },
            [l, t, m, n, b],
        ),
        isLoading: d,
        error: g,
    };
}
