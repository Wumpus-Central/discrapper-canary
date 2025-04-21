n.d(t, {
    FB: () => _,
    Pu: () => x,
    Vt: () => f,
    XX: () => d,
    Zs: () => b,
    c7: () => g,
    eS: () => p,
    fr: () => m,
    ox: () => h
}),
    n(35282);
var r = n(913527),
    i = n.n(r),
    l = n(406432),
    a = n(531441),
    o = n(800530),
    s = n(981631),
    c = n(959517),
    u = n(388032);
function d(e) {
    return i()().to(i()(e));
}
function p(e) {
    var t, n;
    return (0, l.CO)(e.filename) || (0, l.NU)(e.filename) ? ''.concat(c._j).concat(null != (t = e.filename) ? t : '.png') : null != (n = e.filename) ? n : '';
}
function m(e) {
    var t, n, r, i;
    if (null == e.fields) return;
    let l = e.fields.reduce((e, t) => ((e[t.rawName] = t.rawValue), e), {});
    return {
        header: null != (t = l[o.I5.HEADER]) ? t : '',
        icon: l[o.I5.ICON_TYPE],
        body: null != (n = l[o.I5.BODY]) ? n : '',
        ctas: (null != (r = l[o.I5.CTAS]) ? r : '').split(',').filter((e) => '' !== e),
        timestamp: parseFloat(null != (i = l[o.I5.TIMESTAMP]) ? i : 0),
        theme: l[o.I5.THEME],
        learn_more_link: l[o.I5.LEARN_MORE_LINK],
        classification_id: l[o.I5.CLASSIFICATION_ID]
    };
}
function f(e) {
    return e.type !== a.lK.MESSAGE || ('' === e.content && 0 === e.attachments.length);
}
let h = (e) =>
        ({
            [o.bK.DIDNT_VIOLATE_POLICY]: u.intl.string(u.t.mZffAg),
            [o.bK.TOO_STRICT_UNFAIR]: u.intl.string(u.t.wgZVAg),
            [o.bK.DONT_AGREE_PENALTY]: u.intl.string(u.t.eu8G4u),
            [o.bK.SOMETHING_ELSE]: u.intl.string(u.t.XU3s6u)
        })[e],
    g = (e) => (null == e || 0 === e.length ? '' : 1 === e.length ? e.toUpperCase() : ''.concat(e.charAt(0).toUpperCase()).concat(e.slice(1)));
function _(e) {
    return null != e && null != e.guild_metadata;
}
let b = (e) => (e === s.evJ.DSA_APPEAL_REQUEST_DEFLECTION ? u.intl.string(u.t['0qyXXF']) : u.intl.string(u.t.aPmsx8));
function x(e) {
    let t = e.max_expiration_time;
    if (null == t) return null;
    try {
        return new Date(t);
    } catch (e) {
        return null;
    }
}
