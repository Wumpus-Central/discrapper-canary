n.d(t, { D: () => f, M: () => p });
var i = n(991690),
    r = n(933958),
    u = n(91242),
    a = n(326843),
    l = n(995802),
    c = n(964404),
    A = n(778597),
    o = n(111534),
    s = n(754027),
    d = n(165610);
function p(e) {
    var t;
    let n;
    return (
        !!(0, a.A)(e, c.Ay) &&
        !!(0, l.Pc)(e.applicationId) &&
        ((t = e.id), (null == (n = u.A.getMainFrame()) || n.id === t) && null == r.Ay.getCurrentEmbeddedActivity()) &&
        (e.surface.type !== i.U.VOICE_CHANNEL || !!(0, s.Q5)(e.surface) || A.A.isAppVisible(e.surface.channelId, !0))
    );
}
function f(e) {
    return (
        (0, s.Q5)(e.surface) || (e.intent === d.sV.MAIN && e.applicationId === o.A.getLastBuilderPreviewApplicationId())
    );
}
