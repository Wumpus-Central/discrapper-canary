"use strict";
n.r(t), n.d(t, { default: () => I });
var r = n(804552),
    i = n(128170),
    a = n(29583),
    s = n(735394),
    o = n(291048),
    l = n(84776),
    u = n(368617),
    c = n(998280),
    d = n(618027),
    _ = n(98430),
    f = n(728898),
    h = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    p = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    g = /^'([^]*?)'?$/,
    E = /''/g,
    A = /[a-zA-Z]/;
function I(e, t, n) {
    (0, d.A)(2, arguments);
    var g,
        E,
        I,
        y,
        S,
        v,
        C,
        b,
        N,
        R,
        O,
        D,
        L,
        w,
        x,
        P,
        M,
        k,
        U = String(t),
        G = (0, _.q)(),
        F = null != (g = null != (E = null == n ? void 0 : n.locale) ? E : G.locale) ? g : f.A,
        V = (0, c.A)(
            null !=
                (I =
                    null !=
                    (y =
                        null !=
                        (S =
                            null != (v = null == n ? void 0 : n.firstWeekContainsDate)
                                ? v
                                : null == n || null == (C = n.locale) || null == (b = C.options)
                                  ? void 0
                                  : b.firstWeekContainsDate)
                            ? S
                            : G.firstWeekContainsDate)
                        ? y
                        : null == (N = G.locale) || null == (R = N.options)
                          ? void 0
                          : R.firstWeekContainsDate)
                ? I
                : 1,
        );
    if (!(V >= 1 && V <= 7)) throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var B = (0, c.A)(
        null !=
            (O =
                null !=
                (D =
                    null !=
                    (L =
                        null != (w = null == n ? void 0 : n.weekStartsOn)
                            ? w
                            : null == n || null == (x = n.locale) || null == (P = x.options)
                              ? void 0
                              : P.weekStartsOn)
                        ? L
                        : G.weekStartsOn)
                    ? D
                    : null == (M = G.locale) || null == (k = M.options)
                      ? void 0
                      : k.weekStartsOn)
            ? O
            : 0,
    );
    if (!(B >= 0 && B <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (!F.localize) throw RangeError("locale must contain localize property");
    if (!F.formatLong) throw RangeError("locale must contain formatLong property");
    var j = (0, a.default)(e);
    if (!(0, r.default)(j)) throw RangeError("Invalid time value");
    var H = (0, l.A)(j),
        Y = (0, i.A)(j, H),
        W = { firstWeekContainsDate: V, weekStartsOn: B, locale: F, _originalDate: j };
    return U.match(p)
        .map(function (e) {
            var t = e[0];
            return "p" === t || "P" === t ? (0, o.A[t])(e, F.formatLong) : e;
        })
        .join("")
        .match(h)
        .map(function (r) {
            if ("''" === r) return "'";
            var i = r[0];
            if ("'" === i) return T(r);
            var a = s.A[i];
            if (a)
                return (
                    !(null != n && n.useAdditionalWeekYearTokens) && (0, u.xM)(r) && (0, u.lJ)(r, t, String(e)),
                    !(null != n && n.useAdditionalDayOfYearTokens) && (0, u.ef)(r) && (0, u.lJ)(r, t, String(e)),
                    a(Y, r, F.localize, W)
                );
            if (i.match(A))
                throw RangeError("Format string contains an unescaped latin alphabet character `" + i + "`");
            return r;
        })
        .join("");
}
function T(e) {
    var t = e.match(g);
    return t ? t[1].replace(E, "'") : e;
}
