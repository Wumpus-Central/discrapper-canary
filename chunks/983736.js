n.d(t, {
    Dc: () => d,
    OA: () => l,
    _C: () => u,
    kT: () => c
}),
    n(566702);
var r = n(823379),
    i = n(63568),
    o = n(246364),
    a = n(592286),
    s = n(981631);
let l = (e) => {
    let { required: t, response: n, field_type: i } = e;
    if (!t) return !0;
    if (null == n) return !1;
    switch (i) {
        case o.QJ.TERMS:
        case o.QJ.VERIFICATION:
            return !!n;
        case o.QJ.TEXT_INPUT:
        case o.QJ.PARAGRAPH:
            return 'string' == typeof n && '' !== n.trim();
        case o.QJ.MULTIPLE_CHOICE:
            return 'number' == typeof n;
        default:
            return (0, r.vE)(i);
    }
};
function c(e) {
    return a.lI.has(null == e ? void 0 : e.field_type);
}
function u(e) {
    return a.hZ.has(null == e ? void 0 : e.field_type);
}
function d(e) {
    if (null == e) return !1;
    let { enabled: t } = i.tW.getCurrentConfig(
        {
            guildId: e.id,
            location: 'GuildRecord'
        },
        { autoTrackExposure: !1 }
    );
    return t ? e.hasFeature(s.oNc.MEMBER_VERIFICATION_GATE_ENABLED) : e.hasVerificationGate();
}
