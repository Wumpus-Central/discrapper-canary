n.d(t, {
    Iu: () => G,
    Jw: () => k,
    _r: () => B,
    cX: () => F,
    lv: () => U,
    v: () => L,
});
var r = n(392711),
    i = n.n(r),
    a = n(490757),
    o = n(429827),
    s = n(353928),
    l = n(336892),
    c = n(624833),
    u = n(944314),
    d = n(399358),
    f = n(945835),
    _ = n(912931),
    p = n(966552),
    h = n(561763),
    m = n(529306),
    g = n(90075),
    E = n(862666),
    b = n(252611),
    y = n(136144),
    O = n(316137),
    v = n(654123),
    I = n(660020),
    T = n(980084),
    S = n(24688),
    A = n(200997),
    C = n(633302),
    N = n(134432),
    R = n(594174),
    P = n(768581),
    w = n(176354),
    D = n(353368),
    x = n(388032);
let L = {
        start: 10,
        end: 15,
    },
    M = [a],
    j = [o, s, l, c, u, d, f, _, p, h, m, g, E, b, y, O, v, I, T, S, A],
    k = {
        [D.q.BASIC]: M,
        [D.q.PREMIUM]: j,
    },
    U = i().memoize(
        (e) =>
            new Promise((t) => {
                let n = new Image();
                (n.src = e),
                    (n.crossOrigin = "Anonymous"),
                    (n.onload = () => {
                        let r = D.v * (0, N.x_)();
                        if (n.width === r && n.height === r) t(e);
                        else {
                            var i;
                            let e = document.createElement("canvas");
                            (e.width = r),
                                (e.height = r),
                                null == (i = e.getContext("2d")) || i.drawImage(n, 0, 0),
                                t(e.toDataURL("image/png"));
                        }
                    });
            }),
    ),
    G = (e, t) => {
        let n = k[e];
        if (null != t && e === D.q.PREMIUM) {
            let e = t.end + 1;
            return Math.floor(Math.random() * (t.start - e) + e);
        }
        return Math.floor(Math.random() * n.length);
    };
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D.v;
    if (null != e.id) {
        var n;
        return P.ZP.getEmojiURL({
            id: e.id,
            animated: null != (n = e.animated) && n,
            size: t,
        });
    }
    let r = C.ZP.convertSurrogateToName(e.name, !1),
        i = C.ZP.getByName(r);
    return null != i ? w.ZP.getURL(i.surrogates) : "";
}
function Z(e, t) {
    return i()(e)
        .map((e) => {
            var n;
            return null != (n = e[t]) ? n : null;
        })
        .filter((e) => null != e)
        .uniq()
        .value();
}
function F(e) {
    var t, n, r, i, a, o;
    if (e.length < 1) return "";
    let s = Z(e, "userId"),
        l = Z(e, "emojiName"),
        c = l.length < 2 ? (null != (t = null == l ? void 0 : l[0]) ? t : "") : l.join(", ");
    return s.length < 1
        ? ""
        : 1 === s.length
          ? x.intl.formatToPlainString(x.t.yZYxzF, {
                firstUsername: null == (n = R.default.getUser(s[0])) ? void 0 : n.username,
                emojiNames: c,
            })
          : 2 === s.length
            ? x.intl.formatToPlainString(x.t["8rmtbd"], {
                  firstUsername: null == (r = R.default.getUser(s[0])) ? void 0 : r.username,
                  secondUsername: null == (i = R.default.getUser(s[1])) ? void 0 : i.username,
                  emojiNames: c,
              })
            : x.intl.formatToPlainString(x.t["/okjv0"], {
                  firstUsername: null == (a = R.default.getUser(s[0])) ? void 0 : a.username,
                  secondUsername: null == (o = R.default.getUser(s[1])) ? void 0 : o.username,
                  count: s.length - 2,
                  emojiNames: c,
              });
}
