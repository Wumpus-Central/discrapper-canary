n.d(t, { Z: () => s });
var r = n(442837),
    i = n(223892),
    l = n(430824),
    o = n(594174),
    a = n(981631);
function s(e) {
    var t;
    let n = (0, r.e7)([l.Z], () => l.Z.getGuild(e)),
        s = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
        c = (null == n ? void 0 : n.ownerId) === (null == s ? void 0 : s.id),
        u = (0, i.Sd)();
    return c && null !== (t = null == n ? void 0 : n.hasFeature(a.oNc.COMMUNITY)) && void 0 !== t && t && u && !((null == n ? void 0 : n.hasFeature(a.oNc.CREATOR_MONETIZABLE)) || (null == n ? void 0 : n.hasFeature(a.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) || (null == n ? void 0 : n.hasFeature(a.oNc.CREATOR_MONETIZABLE_DISABLED)));
}
