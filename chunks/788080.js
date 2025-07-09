(n.d(t, {
    FB: () => E,
    GE: () => C,
    Pu: () => x,
    Vt: () => g,
    XX: () => m,
    Zs: () => y,
    c7: () => b,
    eS: () => f,
    fr: () => _,
    ox: () => h
}),
    n(35282));
var r = n(913527),
    i = n.n(r),
    l = n(442837),
    a = n(406432),
    o = n(314897),
    s = n(531441),
    c = n(800530),
    u = n(981631),
    d = n(959517),
    p = n(388032);
function m(e) {
    return i()().to(i()(e));
}
function f(e) {
    var t, n;
    return (0, a.CO)(e.filename) || (0, a.NU)(e.filename) ? ''.concat(d._j).concat(null != (t = e.filename) ? t : '.png') : null != (n = e.filename) ? n : '';
}
function _(e) {
    var t, n, r, i;
    if (null == e.fields) return;
    let l = e.fields.reduce((e, t) => ((e[t.rawName] = t.rawValue), e), {});
    return {
        header: null != (t = l[c.I5.HEADER]) ? t : '',
        icon: l[c.I5.ICON_TYPE],
        body: null != (n = l[c.I5.BODY]) ? n : '',
        ctas: (null != (r = l[c.I5.CTAS]) ? r : '').split(',').filter((e) => '' !== e),
        timestamp: parseFloat(null != (i = l[c.I5.TIMESTAMP]) ? i : 0),
        theme: l[c.I5.THEME],
        learn_more_link: l[c.I5.LEARN_MORE_LINK],
        classification_id: l[c.I5.CLASSIFICATION_ID]
    };
}
function g(e) {
    return e.type !== s.lK.MESSAGE || ('' === e.content && 0 === e.attachments.length);
}
let h = (e) =>
        ({
            [c.bK.DIDNT_VIOLATE_POLICY]: p.intl.string(p.t.mZffAg),
            [c.bK.TOO_STRICT_UNFAIR]: p.intl.string(p.t.wgZVAg),
            [c.bK.DONT_AGREE_PENALTY]: p.intl.string(p.t.eu8G4u),
            [c.bK.SOMETHING_ELSE]: p.intl.string(p.t.XU3s6u)
        })[e],
    b = (e) => (null == e || 0 === e.length ? '' : 1 === e.length ? e.toUpperCase() : ''.concat(e.charAt(0).toUpperCase()).concat(e.slice(1)));
function E(e) {
    return null != e && null != e.guild_metadata;
}
let y = (e) => (e === u.evJ.DSA_APPEAL_REQUEST_DEFLECTION ? p.intl.string(p.t['0qyXXF']) : p.intl.string(p.t.aPmsx8));
function x(e) {
    let t = e.max_expiration_time;
    if (null == t) return null;
    try {
        return new Date(t);
    } catch (e) {
        return null;
    }
}
let C = () => null != (0, l.e7)([o.default], () => o.default.getSuspendedUserToken());
