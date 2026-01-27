n.r(t),
    n.d(t, {
        default: () => y,
    });
var r = n(804552),
    i = n(128170),
    a = n(29583),
    o = n(735394),
    s = n(291048),
    l = n(84776),
    c = n(368617),
    u = n(998280),
    d = n(618027),
    f = n(98430),
    p = n(728898),
    _ = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    h = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    m = /^'([^]*?)'?$/,
    g = /''/g,
    E = /[a-zA-Z]/;

function y(e, t, n) {
    (0, d.A)(2, arguments);
    var m,
        g,
        y,
        O,
        v,
        A,
        I,
        S,
        T,
        C,
        N,
        w,
        R,
        P,
        D,
        L,
        x,
        M,
        j = String(t),
        k = (0, f.q)(),
        U = null != (m = null != (g = null == n ? void 0 : n.locale) ? g : k.locale) ? m : p.A,
        G = (0, u.A)(
            null !=
                (y =
                    null !=
                    (O =
                        null !=
                        (v =
                            null != (A = null == n ? void 0 : n.firstWeekContainsDate)
                                ? A
                                : null == n || null == (I = n.locale) || null == (S = I.options)
                                  ? void 0
                                  : S.firstWeekContainsDate)
                            ? v
                            : k.firstWeekContainsDate)
                        ? O
                        : null == (T = k.locale) || null == (C = T.options)
                          ? void 0
                          : C.firstWeekContainsDate)
                ? y
                : 1,
        );
    if (!(G >= 1 && G <= 7)) throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var F = (0, u.A)(
        null !=
            (N =
                null !=
                (w =
                    null !=
                    (R =
                        null != (P = null == n ? void 0 : n.weekStartsOn)
                            ? P
                            : null == n || null == (D = n.locale) || null == (L = D.options)
                              ? void 0
                              : L.weekStartsOn)
                        ? R
                        : k.weekStartsOn)
                    ? w
                    : null == (x = k.locale) || null == (M = x.options)
                      ? void 0
                      : M.weekStartsOn)
            ? N
            : 0,
    );
    if (!(F >= 0 && F <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (!U.localize) throw RangeError("locale must contain localize property");
    if (!U.formatLong) throw RangeError("locale must contain formatLong property");
    var V = (0, a.default)(e);
    if (!(0, r.default)(V)) throw RangeError("Invalid time value");
    var B = (0, l.A)(V),
        H = (0, i.A)(V, B),
        Y = {
            firstWeekContainsDate: G,
            weekStartsOn: F,
            locale: U,
            _originalDate: V,
        };
    return j
        .match(h)
        .map(function (e) {
            var t = e[0];
            return "p" === t || "P" === t ? (0, s.A[t])(e, U.formatLong) : e;
        })
        .join("")
        .match(_)
        .map(function (r) {
            if ("''" === r) return "'";
            var i = r[0];
            if ("'" === i) return b(r);
            var a = o.A[i];
            if (a)
                return (
                    !(null != n && n.useAdditionalWeekYearTokens) && (0, c.xM)(r) && (0, c.lJ)(r, t, String(e)),
                    !(null != n && n.useAdditionalDayOfYearTokens) && (0, c.ef)(r) && (0, c.lJ)(r, t, String(e)),
                    a(H, r, U.localize, Y)
                );
            if (i.match(E))
                throw RangeError("Format string contains an unescaped latin alphabet character `" + i + "`");
            return r;
        })
        .join("");
}

function b(e) {
    var t = e.match(m);
    return t ? t[1].replace(g, "'") : e;
}
