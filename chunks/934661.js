n.r(t), n.d(t, { default: () => s });
var r = n(633605),
    i = n(528734),
    o = n(217224),
    a = n(951516);
function s(e, t) {
    (0, a.Z)(1, arguments);
    var n,
        s,
        l,
        c,
        u,
        d,
        f,
        p,
        _ = (0, r.j)(),
        h = (0, o.Z)(null !== (n = null !== (s = null !== (l = null !== (c = null == t ? void 0 : t.weekStartsOn) && void 0 !== c ? c : null == t ? void 0 : null === (u = t.locale) || void 0 === u ? void 0 : null === (d = u.options) || void 0 === d ? void 0 : d.weekStartsOn) && void 0 !== l ? l : _.weekStartsOn) && void 0 !== s ? s : null === (f = _.locale) || void 0 === f ? void 0 : null === (p = f.options) || void 0 === p ? void 0 : p.weekStartsOn) && void 0 !== n ? n : 0);
    if (!(h >= 0 && h <= 6)) throw RangeError('weekStartsOn must be between 0 and 6 inclusively');
    var m = (0, i.default)(e),
        g = m.getDay(),
        E = (g < h ? -7 : 0) + 6 - (g - h);
    return m.setDate(m.getDate() + E), m.setHours(23, 59, 59, 999), m;
}
