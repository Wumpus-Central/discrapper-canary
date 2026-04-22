"use strict";
n.r(t), n.d(t, { default: () => A });
var r = n(804552),
    i = n(128170),
    s = n(29583),
    a = n(735394),
    o = n(291048),
    l = n(84776),
    u = n(368617),
    d = n(998280),
    c = n(618027),
    _ = n(98430),
    f = n(728898),
    E = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    h = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    p = /^'([^]*?)'?$/,
    m = /''/g,
    g = /[a-zA-Z]/;
function A(e, t, n) {
    (0, c.A)(2, arguments);
    var A,
        I,
        T,
        S,
        y,
        N,
        O,
        R,
        v,
        C,
        b,
        D,
        L,
        w,
        M,
        P,
        U,
        k,
        x = String(t),
        G = (0, _.q)(),
        V = null != (A = null != (I = null == n ? void 0 : n.locale) ? I : G.locale) ? A : f.A,
        F = (0, d.A)(
            null !=
                (T =
                    null !=
                    (S =
                        null !=
                        (y =
                            null != (N = null == n ? void 0 : n.firstWeekContainsDate)
                                ? N
                                : null == n || null == (O = n.locale) || null == (R = O.options)
                                  ? void 0
                                  : R.firstWeekContainsDate)
                            ? y
                            : G.firstWeekContainsDate)
                        ? S
                        : null == (v = G.locale) || null == (C = v.options)
                          ? void 0
                          : C.firstWeekContainsDate)
                ? T
                : 1,
        );
    if (!(F >= 1 && F <= 7)) throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var B = (0, d.A)(
        null !=
            (b =
                null !=
                (D =
                    null !=
                    (L =
                        null != (w = null == n ? void 0 : n.weekStartsOn)
                            ? w
                            : null == n || null == (M = n.locale) || null == (P = M.options)
                              ? void 0
                              : P.weekStartsOn)
                        ? L
                        : G.weekStartsOn)
                    ? D
                    : null == (U = G.locale) || null == (k = U.options)
                      ? void 0
                      : k.weekStartsOn)
            ? b
            : 0,
    );
    if (!(B >= 0 && B <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (!V.localize) throw RangeError("locale must contain localize property");
    if (!V.formatLong) throw RangeError("locale must contain formatLong property");
    var H = (0, s.default)(e);
    if (!(0, r.default)(H)) throw RangeError("Invalid time value");
    var Y = (0, l.A)(H),
        W = (0, i.A)(H, Y),
        j = { firstWeekContainsDate: F, weekStartsOn: B, locale: V, _originalDate: H };
    return x
        .match(h)
        .map(function (e) {
            var t = e[0];
            return "p" === t || "P" === t ? (0, o.A[t])(e, V.formatLong) : e;
        })
        .join("")
        .match(E)
        .map(function (r) {
            if ("''" === r) return "'";
            var i,
                s,
                o = r[0];
            if ("'" === o) {
                return (s = (i = r).match(p)) ? s[1].replace(m, "'") : i;
            }
            var l = a.A[o];
            if (l)
                return (
                    !(null != n && n.useAdditionalWeekYearTokens) && (0, u.xM)(r) && (0, u.lJ)(r, t, String(e)),
                    !(null != n && n.useAdditionalDayOfYearTokens) && (0, u.ef)(r) && (0, u.lJ)(r, t, String(e)),
                    l(W, r, V.localize, j)
                );
            if (o.match(g))
                throw RangeError("Format string contains an unescaped latin alphabet character `" + o + "`");
            return r;
        })
        .join("");
}
