"use strict";
n.r(t), n.d(t, { default: () => A });
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
    p = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    h = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    m = /^'([^]*?)'?$/,
    g = /''/g,
    E = /[a-zA-Z]/;
function A(e, t, n) {
    (0, d.A)(2, arguments);
    var m,
        g,
        A,
        T,
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
        k = String(t),
        U = (0, _.q)(),
        G = null != (m = null != (g = null == n ? void 0 : n.locale) ? g : U.locale) ? m : f.A,
        V = (0, c.A)(
            null !=
                (A =
                    null !=
                    (T =
                        null !=
                        (y =
                            null != (S = null == n ? void 0 : n.firstWeekContainsDate)
                                ? S
                                : null == n || null == (v = n.locale) || null == (C = v.options)
                                  ? void 0
                                  : C.firstWeekContainsDate)
                            ? y
                            : U.firstWeekContainsDate)
                        ? T
                        : null == (b = U.locale) || null == (N = b.options)
                          ? void 0
                          : N.firstWeekContainsDate)
                ? A
                : 1,
        );
    if (!(V >= 1 && V <= 7)) throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var F = (0, c.A)(
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
                    : null == (P = U.locale) || null == (M = P.options)
                      ? void 0
                      : M.weekStartsOn)
            ? R
            : 0,
    );
    if (!(F >= 0 && F <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (!G.localize) throw RangeError("locale must contain localize property");
    if (!G.formatLong) throw RangeError("locale must contain formatLong property");
    var B = (0, a.default)(e);
    if (!(0, r.default)(B)) throw RangeError("Invalid time value");
    var j = (0, l.A)(B),
        H = (0, i.A)(B, j),
        Y = { firstWeekContainsDate: V, weekStartsOn: F, locale: G, _originalDate: B };
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
            var a = s.A[i];
            if (a)
                return (
                    !(null != n && n.useAdditionalWeekYearTokens) && (0, u.xM)(r) && (0, u.lJ)(r, t, String(e)),
                    !(null != n && n.useAdditionalDayOfYearTokens) && (0, u.ef)(r) && (0, u.lJ)(r, t, String(e)),
                    a(H, r, G.localize, Y)
                );
            if (i.match(E))
                throw RangeError("Format string contains an unescaped latin alphabet character `" + i + "`");
            return r;
        })
        .join("");
}
function I(e) {
    var t = e.match(m);
    return t ? t[1].replace(g, "'") : e;
}
