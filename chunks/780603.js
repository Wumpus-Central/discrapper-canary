n.d(t, { Z: () => s });
var r = n(528734),
    i = n(951516),
    o = n(217224),
    a = n(633605);
function s(e, t) {
    (0, i.Z)(1, arguments);
    var n,
        s,
        l,
        c,
        u,
        d,
        f,
        _,
        p = (0, a.j)(),
        h = (0, o.Z)(null != (n = null != (s = null != (l = null != (c = null == t ? void 0 : t.weekStartsOn) ? c : null == t || null == (u = t.locale) || null == (d = u.options) ? void 0 : d.weekStartsOn) ? l : p.weekStartsOn) ? s : null == (f = p.locale) || null == (_ = f.options) ? void 0 : _.weekStartsOn) ? n : 0);
    if (!(h >= 0 && h <= 6)) throw RangeError('weekStartsOn must be between 0 and 6 inclusively');
    var m = (0, r.default)(e),
        g = m.getUTCDay(),
        E = 7 * (g < h) + g - h;
    return m.setUTCDate(m.getUTCDate() - E), m.setUTCHours(0, 0, 0, 0), m;
}
