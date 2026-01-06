n.d(t, { Z: () => p });
var r = n(494497),
    i = n(442837),
    l = n(430824),
    a = n(905128),
    o = n(158638),
    s = n(834209),
    c = n(973772),
    u = n(535396),
    d = n(981631),
    f = n(556970),
    h = n(388032);
function p(e, t) {
    var n;
    let p = (0, i.e7)([l.Z], () => {
            var t;
            return null == (t = l.Z.getGuild(e)) ? void 0 : t.features;
        }),
        g = (0, i.e7)([a.Z], () => a.Z.getStateForGuild(e)),
        b = null == g ? void 0 : g.allPowerups[r.A$],
        m = (0, c.ZP)(e, b),
        y = (0, o.q8)(e, t),
        O = null == b ? void 0 : b.storeRemovalDate,
        v = null != (n = null == p ? void 0 : p.has(d.GuildFeatures.PARTNERED)) && n,
        j = y && null != O && !v && m.type === u.A3.POWERUP_ACTIVATED,
        C = j
            ? {
                  title: h.intl.formatToPlainString(f.default.mgoPkU, { perkName: null == b ? void 0 : b.title }),
                  description: h.intl.formatToPlainString(f.default.UT9pkI, { dateString: (0, s.Z)(O) }),
              }
            : null;
    return {
        shouldShow: j,
        notificationConfig: C,
    };
}
