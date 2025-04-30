n.r(t), n.d(t, { default: () => s });
var r = n(528734),
    i = n(217224),
    o = n(951516),
    a = n(633605);
function s(e, t) {
    (0, o.Z)(1, arguments);
    var n,
        s,
        l,
        c,
        u,
        d,
        f,
        _,
        p = (0, a.j)(),
        h = (0, i.Z)(null != (n = null != (s = null != (l = null != (c = null == t ? void 0 : t.weekStartsOn) ? c : null == t || null == (u = t.locale) || null == (d = u.options) ? void 0 : d.weekStartsOn) ? l : p.weekStartsOn) ? s : null == (f = p.locale) || null == (_ = f.options) ? void 0 : _.weekStartsOn) ? n : 0);
    if (!(h >= 0 && h <= 6)) throw RangeError('weekStartsOn must be between 0 and 6 inclusively');
    var m = (0, r.default)(e),
        g = m.getDay(),
        E = 7 * (g < h) + g - h;
    return m.setDate(m.getDate() - E), m.setHours(0, 0, 0, 0), m;
}
