n.d(t, { Z: () => s }), n(388685);
var i = n(473749),
    r = n(442837),
    l = n(131704),
    a = n(423589),
    o = n(390289);
function s(e) {
    let t = (0, a.Mn)("useShouldRenderBanner"),
        [n, s] = i.useState("");
    i.useEffect(() => {
        s("");
    }, [e.id]);
    let c = (0, r.e7)([o.Z], () => o.Z.getLastActionTime(e.id));
    i.useEffect(() => {
        l.$N.has(e.type) && n !== e.id && t && o.Z.maybeAutoUpgradeChannel(e.id) && s(e.id);
    }, [n, t, c, e]);
    let u = i.useCallback(() => s(""), []);
    return {
        showUnreadsNotice: n === e.id,
        clearUnreadsNotice: u,
    };
}
