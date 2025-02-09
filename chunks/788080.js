n.d(t, {
    FB: () => f,
    Pu: () => C,
    Vt: () => h,
    XX: () => u,
    Zs: () => x,
    c7: () => g,
    eS: () => m,
    fr: () => _,
    ox: () => p
}),
    n(724458);
var i = n(913527),
    l = n.n(i),
    a = n(406432),
    r = n(531441),
    s = n(800530),
    o = n(981631),
    c = n(959517),
    d = n(388032);
function u(e) {
    return l()().to(l()(e));
}
function m(e) {
    var t, n;
    return (0, a.CO)(e.filename) || (0, a.NU)(e.filename) ? ''.concat(c._j).concat(null !== (t = e.filename) && void 0 !== t ? t : '.png') : null !== (n = e.filename) && void 0 !== n ? n : '';
}
function _(e) {
    var t, n, i, l;
    if (null == e.fields) return;
    let a = e.fields.reduce((e, t) => ((e[t.rawName] = t.rawValue), e), {});
    return {
        header: null !== (t = a[s.I5.HEADER]) && void 0 !== t ? t : '',
        icon: a[s.I5.ICON_TYPE],
        body: null !== (n = a[s.I5.BODY]) && void 0 !== n ? n : '',
        ctas: (null !== (i = a[s.I5.CTAS]) && void 0 !== i ? i : '').split(',').filter((e) => '' !== e),
        timestamp: parseFloat(null !== (l = a[s.I5.TIMESTAMP]) && void 0 !== l ? l : 0),
        theme: a[s.I5.THEME],
        learn_more_link: a[s.I5.LEARN_MORE_LINK],
        classification_id: a[s.I5.CLASSIFICATION_ID]
    };
}
function h(e) {
    return e.type !== r.lK.MESSAGE || ('' === e.content && 0 === e.attachments.length);
}
let p = (e) =>
        ({
            [s.bK.DIDNT_VIOLATE_POLICY]: d.intl.string(d.t.mZffAg),
            [s.bK.TOO_STRICT_UNFAIR]: d.intl.string(d.t.wgZVAg),
            [s.bK.DONT_AGREE_PENALTY]: d.intl.string(d.t.eu8G4u),
            [s.bK.SOMETHING_ELSE]: d.intl.string(d.t.XU3s6u)
        })[e],
    g = (e) => (null == e || 0 === e.length ? '' : 1 === e.length ? e.toUpperCase() : ''.concat(e.charAt(0).toUpperCase()).concat(e.slice(1)));
function f(e) {
    return null != e && null != e.guild_metadata;
}
let x = (e) => (e === o.evJ.DSA_APPEAL_REQUEST_DEFLECTION ? d.intl.string(d.t['0qyXXF']) : d.intl.string(d.t.aPmsx8));
function C(e) {
    let t = e.max_expiration_time;
    if (null == t) return null;
    try {
        return new Date(t);
    } catch {
        return null;
    }
}
