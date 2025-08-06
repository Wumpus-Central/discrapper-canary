n.d(t, {
    FB: () => b,
    GE: () => v,
    Pu: () => O,
    Vt: () => m,
    XX: () => _,
    Zs: () => y,
    c7: () => E,
    eS: () => p,
    fr: () => h,
    ox: () => g,
}),
    n(35282);
var r = n(913527),
    i = n.n(r),
    o = n(442837),
    a = n(406432),
    s = n(314897),
    l = n(531441),
    c = n(800530),
    u = n(981631),
    d = n(959517),
    f = n(388032);
function _(e) {
    return i()().to(i()(e));
}
function p(e) {
    var t, n;
    return (0, a.CO)(e.filename) || (0, a.NU)(e.filename)
        ? "".concat(d._j).concat(null != (t = e.filename) ? t : ".png")
        : null != (n = e.filename)
          ? n
          : "";
}
function h(e) {
    var t, n, r, i;
    if (null == e.fields) return;
    let o = e.fields.reduce((e, t) => ((e[t.rawName] = t.rawValue), e), {});
    return {
        header: null != (t = o[c.I5.HEADER]) ? t : "",
        icon: o[c.I5.ICON_TYPE],
        body: null != (n = o[c.I5.BODY]) ? n : "",
        ctas: (null != (r = o[c.I5.CTAS]) ? r : "").split(",").filter((e) => "" !== e),
        timestamp: parseFloat(null != (i = o[c.I5.TIMESTAMP]) ? i : 0),
        theme: o[c.I5.THEME],
        learn_more_link: o[c.I5.LEARN_MORE_LINK],
        classification_id: o[c.I5.CLASSIFICATION_ID],
    };
}
function m(e) {
    return e.type !== l.lK.MESSAGE || ("" === e.content && 0 === e.attachments.length);
}
let g = (e) =>
        ({
            [c.bK.DIDNT_VIOLATE_POLICY]: f.intl.string(f.t.mZffAg),
            [c.bK.TOO_STRICT_UNFAIR]: f.intl.string(f.t.wgZVAg),
            [c.bK.DONT_AGREE_PENALTY]: f.intl.string(f.t.eu8G4u),
            [c.bK.SOMETHING_ELSE]: f.intl.string(f.t.XU3s6u),
        })[e],
    E = (e) =>
        null == e || 0 === e.length
            ? ""
            : 1 === e.length
              ? e.toUpperCase()
              : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));
function b(e) {
    return null != e && null != e.guild_metadata;
}
let y = (e) => (e === u.evJ.DSA_APPEAL_REQUEST_DEFLECTION ? f.intl.string(f.t["0qyXXF"]) : f.intl.string(f.t.aPmsx8));
function O(e) {
    let t = e.max_expiration_time;
    if (null == t) return null;
    try {
        return new Date(t);
    } catch (e) {
        return null;
    }
}
let v = () => null != (0, o.e7)([s.default], () => s.default.getSuspendedUserToken());
