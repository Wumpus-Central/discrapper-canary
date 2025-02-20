n.d(t, { Z: () => s }), n(47120);
var r = n(192379),
    i = n(442837),
    l = n(131704),
    o = n(423589),
    a = n(390289);
function s(e) {
    let t = (0, o.Mn)('useShouldRenderBanner'),
        [n, s] = r.useState('');
    r.useEffect(() => {
        s('');
    }, [e.id]);
    let c = (0, i.e7)([a.Z], () => a.Z.getLastActionTime(e.id));
    r.useEffect(() => {
        l.$N.has(e.type) && n !== e.id && t && a.Z.maybeAutoUpgradeChannel(e.id) && s(e.id);
    }, [n, t, c, e]);
    let u = r.useCallback(() => s(''), []);
    return {
        showUnreadsNotice: n === e.id,
        clearUnreadsNotice: u
    };
}
