"use strict";
r.d(t, { A: () => u });
var n = r(29583),
    a = r(327922),
    s = r(564804),
    i = r(618027),
    o = r(998280),
    l = r(98430);
function u(e, t) {
    (0, i.A)(1, arguments);
    var r = (0, n.default)(e);
    return (
        Math.round(
            ((0, a.A)(r, t).getTime() -
                (function (e, t) {
                    (0, i.A)(1, arguments);
                    var r,
                        n,
                        u,
                        c,
                        d,
                        f,
                        p,
                        h,
                        m = (0, l.q)(),
                        _ = (0, o.A)(
                            null !=
                                (r =
                                    null !=
                                    (n =
                                        null !=
                                        (u =
                                            null != (c = null == t ? void 0 : t.firstWeekContainsDate)
                                                ? c
                                                : null == t || null == (d = t.locale) || null == (f = d.options)
                                                  ? void 0
                                                  : f.firstWeekContainsDate)
                                            ? u
                                            : m.firstWeekContainsDate)
                                        ? n
                                        : null == (p = m.locale) || null == (h = p.options)
                                          ? void 0
                                          : h.firstWeekContainsDate)
                                ? r
                                : 1,
                        ),
                        g = (0, s.A)(e, t),
                        v = new Date(0);
                    return v.setUTCFullYear(g, 0, _), v.setUTCHours(0, 0, 0, 0), (0, a.A)(v, t);
                })(r, t).getTime()) /
                6048e5,
        ) + 1
    );
}
