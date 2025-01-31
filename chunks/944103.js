n.d(t, { Z: () => o }), n(47120);
var i = n(192379),
    l = n(442837),
    a = n(131704),
    r = n(423589),
    s = n(390289);
function o(e) {
    let t = (0, r.Mn)('useShouldRenderBanner'),
        [n, o] = i.useState('');
    i.useEffect(() => {
        o('');
    }, [e.id]);
    let c = (0, l.e7)([s.Z], () => s.Z.getLastActionTime(e.id));
    i.useEffect(() => {
        a.$N.has(e.type) && n !== e.id && t && s.Z.maybeAutoUpgradeChannel(e.id) && o(e.id);
    }, [n, t, c, e]);
    let d = i.useCallback(() => o(''), []);
    return {
        showUnreadsNotice: n === e.id,
        clearUnreadsNotice: d
    };
}
