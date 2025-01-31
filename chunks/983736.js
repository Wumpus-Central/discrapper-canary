n.d(t, {
    Dc: () => d,
    OA: () => l,
    _C: () => c,
    kT: () => u
});
var i = n(823379),
    r = n(63568),
    a = n(246364),
    s = n(592286),
    o = n(981631);
let l = (e) => {
    let { required: t, response: n, field_type: r } = e;
    if (!t) return !0;
    if (null == n) return !1;
    switch (r) {
        case a.QJ.TERMS:
        case a.QJ.VERIFICATION:
            return !!n;
        case a.QJ.TEXT_INPUT:
        case a.QJ.PARAGRAPH:
            return 'string' == typeof n && '' !== n.trim();
        case a.QJ.MULTIPLE_CHOICE:
            return 'number' == typeof n;
        default:
            return (0, i.vE)(r);
    }
};
function u(e) {
    return s.lI.has(null == e ? void 0 : e.field_type);
}
function c(e) {
    return s.hZ.has(null == e ? void 0 : e.field_type);
}
function d(e) {
    if (null == e) return !1;
    let { enabled: t } = r.tW.getCurrentConfig(
        {
            guildId: e.id,
            location: 'GuildRecord'
        },
        { autoTrackExposure: !1 }
    );
    return t ? e.hasFeature(o.oNc.MEMBER_VERIFICATION_GATE_ENABLED) : e.hasVerificationGate();
}
