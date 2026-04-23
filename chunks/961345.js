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
    E = /^'([^]*?)'?$/,
    m = /''/g,
    g = /[a-zA-Z]/;
function A(e, t, n) {
    (0, d.A)(2, arguments);
    var A,
        I,
        T,
        S,
        y,
        N,
        v,
        C,
        O,
        R,
        b,
        D,
        L,
        w,
        M,
        P,
        x,
        k,
        U = String(t),
        G = (0, _.q)(),
        F = null != (A = null != (I = null == n ? void 0 : n.locale) ? I : G.locale) ? A : f.A,
        V = (0, c.A)(
            null !=
                (T =
                    null !=
                    (S =
                        null !=
                        (y =
                            null != (N = null == n ? void 0 : n.firstWeekContainsDate)
                                ? N
                                : null == n || null == (v = n.locale) || null == (C = v.options)
                                  ? void 0
                                  : C.firstWeekContainsDate)
                            ? y
                            : G.firstWeekContainsDate)
                        ? S
                        : null == (O = G.locale) || null == (R = O.options)
                          ? void 0
                          : R.firstWeekContainsDate)
                ? T
                : 1,
        );
    if (!(V >= 1 && V <= 7)) throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var B = (0, c.A)(
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
                    : null == (x = G.locale) || null == (k = x.options)
                      ? void 0
                      : k.weekStartsOn)
            ? b
            : 0,
    );
    if (!(B >= 0 && B <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (!F.localize) throw RangeError("locale must contain localize property");
    if (!F.formatLong) throw RangeError("locale must contain formatLong property");
    var H = (0, s.default)(e);
    if (!(0, r.default)(H)) throw RangeError("Invalid time value");
    var j = (0, l.A)(H),
        Y = (0, i.A)(H, j),
        W = { firstWeekContainsDate: V, weekStartsOn: B, locale: F, _originalDate: H };
    return U.match(h)
        .map(function (e) {
            var t = e[0];
            return "p" === t || "P" === t ? (0, o.A[t])(e, F.formatLong) : e;
        })
        .join("")
        .match(p)
        .map(function (r) {
            if ("''" === r) return "'";
            var i,
                s,
                o = r[0];
            if ("'" === o) {
                return (s = (i = r).match(E)) ? s[1].replace(m, "'") : i;
            }
            var l = a.A[o];
            if (l)
                return (
                    !(null != n && n.useAdditionalWeekYearTokens) && (0, u.xM)(r) && (0, u.lJ)(r, t, String(e)),
                    !(null != n && n.useAdditionalDayOfYearTokens) && (0, u.ef)(r) && (0, u.lJ)(r, t, String(e)),
                    l(Y, r, F.localize, W)
                );
            if (o.match(g))
                throw RangeError("Format string contains an unescaped latin alphabet character `" + o + "`");
            return r;
        })
        .join("");
}
