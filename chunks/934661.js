n.r(t), n.d(t, { default: () => s });
var r = n(633605),
    i = n(528734),
    a = n(217224),
    o = n(951516);
function s(e, t) {
    (0, o.Z)(1, arguments);
    var n,
        s,
        l,
        c,
        u,
        d,
        f,
        p,
        _ = (0, r.j)(),
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
    var h = (0, i.default)(e),
        g = h.getDay(),
        E = (g < m ? -7 : 0) + 6 - (g - m);
    return h.setDate(h.getDate() + E), h.setHours(23, 59, 59, 999), h;
}
