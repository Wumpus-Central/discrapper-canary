n.d(t, { Z: () => o });
var i = n(442837),
    l = n(223892),
    r = n(430824),
    a = n(594174),
    s = n(981631);
function o(e) {
    var t;
    let n = (0, i.e7)([r.Z], () => r.Z.getGuild(e)),
        o = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
        d = (null == n ? void 0 : n.ownerId) === (null == o ? void 0 : o.id),
        c = (0, l.Sd)();
    return d && null !== (t = null == n ? void 0 : n.hasFeature(s.oNc.COMMUNITY)) && void 0 !== t && t && c && !((null == n ? void 0 : n.hasFeature(s.oNc.CREATOR_MONETIZABLE)) || (null == n ? void 0 : n.hasFeature(s.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) || (null == n ? void 0 : n.hasFeature(s.oNc.CREATOR_MONETIZABLE_DISABLED)));
}
