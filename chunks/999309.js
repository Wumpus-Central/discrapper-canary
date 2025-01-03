n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(442837),
    r = n(223892),
    l = n(430824),
    a = n(594174),
    s = n(981631);
function o(e) {
    var t;
    let n = (0, i.e7)([l.Z], () => l.Z.getGuild(e)),
        o = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
        c = (null == n ? void 0 : n.ownerId) === (null == o ? void 0 : o.id),
        d = (0, r.Sd)();
    return c && null !== (t = null == n ? void 0 : n.hasFeature(s.oNc.COMMUNITY)) && void 0 !== t && t && d && !((null == n ? void 0 : n.hasFeature(s.oNc.CREATOR_MONETIZABLE)) || (null == n ? void 0 : n.hasFeature(s.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) || (null == n ? void 0 : n.hasFeature(s.oNc.CREATOR_MONETIZABLE_DISABLED)));
}
