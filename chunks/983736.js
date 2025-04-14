n.d(t, {
    Dc: () => c,
    OA: () => s,
    _C: () => l
}),
    n(781311);
var r = n(823379),
    i = n(246364),
    o = n(592286),
    a = n(981631);
let s = (e) => {
    let { required: t, response: n, field_type: o } = e;
    if (!t) return !0;
    if (null == n) return !1;
    switch (o) {
        case i.QJ.TERMS:
        case i.QJ.VERIFICATION:
            return !!n;
        case i.QJ.TEXT_INPUT:
        case i.QJ.PARAGRAPH:
            return 'string' == typeof n && '' !== n.trim();
        case i.QJ.MULTIPLE_CHOICE:
            return 'number' == typeof n;
        default:
            return (0, r.vE)(o);
    }
};
function l(e) {
    return o.hZ.has(null == e ? void 0 : e.field_type);
}
function c(e) {
    return null != e && e.hasFeature(a.oNc.MEMBER_VERIFICATION_GATE_ENABLED);
}
