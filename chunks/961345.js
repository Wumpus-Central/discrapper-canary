"use strict";
n.r(t), n.d(t, { default: () => A });
var r = n(804552),
    i = n(128170),
    s = n(29583),
    a = n(735394),
    o = n(291048),
    l = n(84776),
    u = n(368617),
    c = n(998280),
    d = n(618027),
    _ = n(98430),
    f = n(728898),
    p = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    h = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    m = /^'([^]*?)'?$/,
    E = /''/g,
    g = /[a-zA-Z]/;
function A(e, t, n) {
    (0, d.A)(2, arguments);
    var m,
        E,
        A,
        T,
        S,
        y,
        v,
        N,
        C,
        b,
        R,
        O,
        D,
        L,
        w,
        x,
        M,
        P,
        k = String(t),
        U = (0, _.q)(),
        G = null != (m = null != (E = null == n ? void 0 : n.locale) ? E : U.locale) ? m : f.A,
        F = (0, c.A)(
            null !=
                (A =
                    null !=
                    (T =
                        null !=
                        (S =
                            null != (y = null == n ? void 0 : n.firstWeekContainsDate)
                                ? y
                                : null == n || null == (v = n.locale) || null == (N = v.options)
                                  ? void 0
                                  : N.firstWeekContainsDate)
                            ? S
                            : U.firstWeekContainsDate)
                        ? T
                        : null == (C = U.locale) || null == (b = C.options)
                          ? void 0
                          : b.firstWeekContainsDate)
                ? A
                : 1,
        );
    if (!(F >= 1 && F <= 7)) throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var V = (0, c.A)(
        null !=
            (R =
                null !=
                (O =
                    null !=
                    (D =
                        null != (L = null == n ? void 0 : n.weekStartsOn)
                            ? L
                            : null == n || null == (w = n.locale) || null == (x = w.options)
                              ? void 0
                              : x.weekStartsOn)
                        ? D
                        : U.weekStartsOn)
                    ? O
                    : null == (M = U.locale) || null == (P = M.options)
                      ? void 0
                      : P.weekStartsOn)
            ? R
            : 0,
    );
    if (!(V >= 0 && V <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (!G.localize) throw RangeError("locale must contain localize property");
    if (!G.formatLong) throw RangeError("locale must contain formatLong property");
    var B = (0, s.default)(e);
    if (!(0, r.default)(B)) throw RangeError("Invalid time value");
    var H = (0, l.A)(B),
        j = (0, i.A)(B, H),
        Y = { firstWeekContainsDate: F, weekStartsOn: V, locale: G, _originalDate: B };
    return k
        .match(h)
        .map(function (e) {
            var t = e[0];
            return "p" === t || "P" === t ? (0, o.A[t])(e, G.formatLong) : e;
        })
        .join("")
        .match(p)
        .map(function (r) {
            if ("''" === r) return "'";
            var i = r[0];
            if ("'" === i) return I(r);
            var s = a.A[i];
            if (s)
                return (
                    !(null != n && n.useAdditionalWeekYearTokens) && (0, u.xM)(r) && (0, u.lJ)(r, t, String(e)),
                    !(null != n && n.useAdditionalDayOfYearTokens) && (0, u.ef)(r) && (0, u.lJ)(r, t, String(e)),
                    s(j, r, G.localize, Y)
                );
            if (i.match(g))
                throw RangeError("Format string contains an unescaped latin alphabet character `" + i + "`");
            return r;
        })
        .join("");
}
function I(e) {
    var t = e.match(m);
    return t ? t[1].replace(E, "'") : e;
}
