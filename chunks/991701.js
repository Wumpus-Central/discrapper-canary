n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(827734),
    l = n(397927),
    c = n(654107),
    u = n(831209),
    d = n(543699),
    f = n(950191),
    p = n(195898),
    _ = n(576622),
    h = n(155886),
    m = n(652215),
    g = n(996988),
    E = n(346170);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = S(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let I = function (e) {
    var t, n, a, b, O, S;
    let {
            style: I,
            src: T,
            backgroundSrc: C,
            userId: N,
            guildId: R,
            pulseSpeakingIndicator: w = !1,
            speaking: P = !1,
        } = e,
        D = v(e, ["style", "src", "backgroundSrc", "userId", "guildId", "pulseSpeakingIndicator", "speaking"]),
        x = null != C ? C : T,
        L = (0, c.Ay)(x, o.A.unsafe_rawColors.PRIMARY_800.css),
        j = (0, f.Ay)(null != N ? N : m.dJq, R),
        M = null != (t = (0, d.tM)(null == j || null == (b = j.themeColors) ? void 0 : b[0])) ? t : m.NJ8.DARK,
        { profileThemeStyle: k, profileThemeClassName: U } = (0, p.A)({
            theme: M,
            themeType: g.d.VIDEO_TILE_BACKGROUND,
            primaryColor: null != (n = null == j || null == (O = j.themeColors) ? void 0 : O[0]) ? n : null,
            secondaryColor: null != (a = null == j || null == (S = j.themeColors) ? void 0 : S[1]) ? a : null,
        }),
        { useProfileColors: G } = (0, h.a5)("VideoBackground-web");
    if (
        (i.useEffect(() => {
            null != N &&
                G &&
                (0, _.A)(N, void 0, {
                    guildId: R,
                    dispatchWait: !0,
                });
        }, [G, N, R]),
        null == T)
    )
        return null;
    let V = (0, r.jsx)(
            l.euF,
            y(
                {
                    className: E.R,
                    src: T,
                },
                D,
            ),
        ),
        F = A(y({}, I), { backgroundColor: L });
    return (0, r.jsx)("div", {
        style: G ? y({}, I, k) : y({}, F),
        className: s()(E.T, { [U]: G }),
        children: w
            ? (0, r.jsx)(u.A, {
                  shouldAnimate: P,
                  children: V,
              })
            : V,
    });
};
