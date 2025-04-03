n.d(t, {
    FB: () => L,
    Pu: () => A,
    Vt: () => N,
    XX: () => I,
    Zs: () => p,
    c7: () => S,
    eS: () => l,
    fr: () => u,
    ox: () => d
}),
    n(301563);
var i = n(913527),
    r = n.n(i),
    a = n(406432),
    s = n(531441),
    o = n(800530),
    _ = n(981631),
    E = n(959517),
    c = n(388032);
function I(e) {
    return r()().to(r()(e));
}
function l(e) {
    var t, n;
    return (0, a.CO)(e.filename) || (0, a.NU)(e.filename) ? ''.concat(E._j).concat(null != (t = e.filename) ? t : '.png') : null != (n = e.filename) ? n : '';
}
function u(e) {
    var t, n, i, r;
    if (null == e.fields) return;
    let a = e.fields.reduce((e, t) => ((e[t.rawName] = t.rawValue), e), {});
    return {
        header: null != (t = a[o.I5.HEADER]) ? t : '',
        icon: a[o.I5.ICON_TYPE],
        body: null != (n = a[o.I5.BODY]) ? n : '',
        ctas: (null != (i = a[o.I5.CTAS]) ? i : '').split(',').filter((e) => '' !== e),
        timestamp: parseFloat(null != (r = a[o.I5.TIMESTAMP]) ? r : 0),
        theme: a[o.I5.THEME],
        learn_more_link: a[o.I5.LEARN_MORE_LINK],
        classification_id: a[o.I5.CLASSIFICATION_ID]
    };
}
function N(e) {
    return e.type !== s.lK.MESSAGE || ('' === e.content && 0 === e.attachments.length);
}
let d = (e) =>
        ({
            [o.bK.DIDNT_VIOLATE_POLICY]: c.NW.string(c.t.mZffAg),
            [o.bK.TOO_STRICT_UNFAIR]: c.NW.string(c.t.wgZVAg),
            [o.bK.DONT_AGREE_PENALTY]: c.NW.string(c.t.eu8G4u),
            [o.bK.SOMETHING_ELSE]: c.NW.string(c.t.XU3s6u)
        })[e],
    S = (e) => (null == e || 0 === e.length ? '' : 1 === e.length ? e.toUpperCase() : ''.concat(e.charAt(0).toUpperCase()).concat(e.slice(1)));
function L(e) {
    return null != e && null != e.guild_metadata;
}
let p = (e) => (e === _.evJ.DSA_APPEAL_REQUEST_DEFLECTION ? c.NW.string(c.t['0qyXXF']) : c.NW.string(c.t.aPmsx8));
function A(e) {
    let t = e.max_expiration_time;
    if (null == t) return null;
    try {
        return new Date(t);
    } catch (e) {
        return null;
    }
}
