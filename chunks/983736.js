n.d(t, {
    Dc: () => c,
    OA: () => s,
    _C: () => l
}),
    n(781311);
var r = n(823379),
    i = n(246364),
    a = n(592286),
    o = n(981631);
let s = (e) => {
    let { required: t, response: n, field_type: a } = e;
    if (!t) return !0;
    if (null == n) return !1;
    switch (a) {
        case i.QJ.TERMS:
        case i.QJ.VERIFICATION:
            return !!n;
        case i.QJ.TEXT_INPUT:
        case i.QJ.PARAGRAPH:
            return 'string' == typeof n && '' !== n.trim();
        case i.QJ.MULTIPLE_CHOICE:
            return 'number' == typeof n;
        default:
            return (0, r.vE)(a);
    }
};
function l(e) {
    return a.hZ.has(null == e ? void 0 : e.field_type);
}
function c(e) {
    return null != e && e.hasFeature(o.oNc.MEMBER_VERIFICATION_GATE_ENABLED);
}
