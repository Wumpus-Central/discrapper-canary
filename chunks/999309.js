n.d(t, { Z: () => c });
var r = n(442837),
    i = n(223892),
    l = n(601964),
    a = n(430824),
    o = n(594174),
    s = n(981631);
function c(e) {
    var t;
    let n = (0, r.e7)([a.Z], () => a.Z.getGuild(e)),
        c = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
        u = null != n && (0, l.eM)(n, c),
        d = (0, i.Sd)();
    return u && null != (t = null == n ? void 0 : n.features.has(s.oNc.COMMUNITY)) && t && d && !((null == n ? void 0 : n.features.has(s.oNc.CREATOR_MONETIZABLE)) || (null == n ? void 0 : n.features.has(s.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) || (null == n ? void 0 : n.features.has(s.oNc.CREATOR_MONETIZABLE_DISABLED)));
}
