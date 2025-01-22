r.d(n, {
    Dc: function () {
        return f;
    },
    OA: function () {
        return u;
    },
    _C: function () {
        return d;
    },
    kT: function () {
        return c;
    }
});
var i = r(823379),
    a = r(63568),
    o = r(246364),
    s = r(592286),
    l = r(981631);
let u = (e) => {
    let { required: n, response: r, field_type: a } = e;
    if (!n) return !0;
    if (null == r) return !1;
    switch (a) {
        case o.QJ.TERMS:
        case o.QJ.VERIFICATION:
            return !!r;
        case o.QJ.TEXT_INPUT:
        case o.QJ.PARAGRAPH:
            return 'string' == typeof r && '' !== r.trim();
        case o.QJ.MULTIPLE_CHOICE:
            return 'number' == typeof r;
        default:
            return (0, i.vE)(a);
    }
};
function c(e) {
    return s.lI.has(null == e ? void 0 : e.field_type);
}
function d(e) {
    return s.hZ.has(null == e ? void 0 : e.field_type);
}
function f(e) {
    if (null == e) return !1;
    let { enabled: n } = a.tW.getCurrentConfig(
        {
            guildId: e.id,
            location: 'GuildRecord'
        },
        { autoTrackExposure: !1 }
    );
    return n ? e.hasFeature(l.oNc.MEMBER_VERIFICATION_GATE_ENABLED) : e.hasVerificationGate();
}
