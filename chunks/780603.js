n.d(t, { Z: () => s });
var r = n(528734),
    i = n(951516),
    a = n(217224),
    o = n(633605);
function s(e, t) {
    (0, i.Z)(1, arguments);
    var n,
        s,
        l,
        c,
        u,
        d,
        f,
        p,
        _ = (0, o.j)(),
        m = (0, a.Z)(
            null !=
                (n =
                    null !=
                    (s =
                        null !=
                        (l =
                            null != (c = null == t ? void 0 : t.weekStartsOn)
                                ? c
                                : null == t || null == (u = t.locale) || null == (d = u.options)
                                  ? void 0
                                  : d.weekStartsOn)
                            ? l
                            : _.weekStartsOn)
                        ? s
                        : null == (f = _.locale) || null == (p = f.options)
                          ? void 0
                          : p.weekStartsOn)
                ? n
                : 0,
        );
    if (!(m >= 0 && m <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var h = (0, r.default)(e),
        g = h.getUTCDay(),
        E = 7 * (g < m) + g - m;
    return h.setUTCDate(h.getUTCDate() - E), h.setUTCHours(0, 0, 0, 0), h;
}
