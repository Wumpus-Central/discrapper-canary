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
        _,
        p = (0, r.j)(),
        h = (0, o.Z)(null != (n = null != (s = null != (l = null != (c = null == t ? void 0 : t.weekStartsOn) ? c : null == t || null == (u = t.locale) || null == (d = u.options) ? void 0 : d.weekStartsOn) ? l : p.weekStartsOn) ? s : null == (f = p.locale) || null == (_ = f.options) ? void 0 : _.weekStartsOn) ? n : 0);
    if (!(h >= 0 && h <= 6)) throw RangeError('weekStartsOn must be between 0 and 6 inclusively');
    var m = (0, i.default)(e),
        g = m.getDay(),
        E = (g < h ? -7 : 0) + 6 - (g - h);
    return m.setDate(m.getDate() + E), m.setHours(23, 59, 59, 999), m;
}
