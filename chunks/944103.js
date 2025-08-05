(n.d(t, { Z: () => l }), n(388685));
var r = n(73800),
    i = n(442837),
    a = n(131704),
    o = n(423589),
    s = n(390289);
function l(e) {
    let t = (0, o.Mn)('useShouldRenderBanner'),
        [n, l] = r.useState('');
    r.useEffect(() => {
        l('');
    }, [e.id]);
    let c = (0, i.e7)([s.Z], () => s.Z.getLastActionTime(e.id));
    r.useEffect(() => {
        a.$N.has(e.type) && n !== e.id && t && s.Z.maybeAutoUpgradeChannel(e.id) && l(e.id);
    }, [n, t, c, e]);
    let u = r.useCallback(() => l(''), []);
    return {
        showUnreadsNotice: n === e.id,
        clearUnreadsNotice: u
    };
}
