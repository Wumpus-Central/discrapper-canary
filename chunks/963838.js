n.d(t, {
    Iu: () => G,
    Jw: () => k,
    _r: () => Z,
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
    p = n(912931),
    _ = n(966552),
    m = n(561763),
    h = n(529306),
    g = n(90075),
    E = n(862666),
    b = n(252611),
    y = n(136144),
    O = n(316137),
    v = n(654123),
    S = n(660020),
    I = n(980084),
    T = n(24688),
    C = n(200997),
    A = n(633302),
    N = n(134432),
    P = n(594174),
    R = n(768581),
    D = n(176354),
    w = n(353368),
    x = n(388032);
let L = {
        start: 10,
        end: 15,
    },
    j = [a],
    M = [o, s, l, c, u, d, f, p, _, m, h, g, E, b, y, O, v, S, I, T, C],
    k = {
        [w.q.BASIC]: j,
        [w.q.PREMIUM]: M,
    },
    U = i().memoize(
        (e) =>
            new Promise((t) => {
                let n = new Image();
                (n.src = e),
                    (n.crossOrigin = "Anonymous"),
                    (n.onload = () => {
                        let r = w.v * (0, N.x_)();
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
        if (null != t && e === w.q.PREMIUM) {
            let e = t.end + 1;
            return Math.floor(Math.random() * (t.start - e) + e);
        }
        return Math.floor(Math.random() * n.length);
    };
function Z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w.v;
    if (null != e.id) {
        var n;
        return R.ZP.getEmojiURL({
            id: e.id,
            animated: null != (n = e.animated) && n,
            size: t,
        });
    }
    let r = A.ZP.convertSurrogateToName(e.name, !1),
        i = A.ZP.getByName(r);
    return null != i ? D.ZP.getURL(i.surrogates) : "";
}
function B(e, t) {
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
    let s = B(e, "userId"),
        l = B(e, "emojiName"),
        c = l.length < 2 ? (null != (t = null == l ? void 0 : l[0]) ? t : "") : l.join(", ");
    return s.length < 1
        ? ""
        : 1 === s.length
          ? x.intl.formatToPlainString(x.t.yZYxzF, {
                firstUsername: null == (n = P.default.getUser(s[0])) ? void 0 : n.username,
                emojiNames: c,
            })
          : 2 === s.length
            ? x.intl.formatToPlainString(x.t["8rmtbd"], {
                  firstUsername: null == (r = P.default.getUser(s[0])) ? void 0 : r.username,
                  secondUsername: null == (i = P.default.getUser(s[1])) ? void 0 : i.username,
                  emojiNames: c,
              })
            : x.intl.formatToPlainString(x.t["/okjv0"], {
                  firstUsername: null == (a = P.default.getUser(s[0])) ? void 0 : a.username,
                  secondUsername: null == (o = P.default.getUser(s[1])) ? void 0 : o.username,
                  count: s.length - 2,
                  emojiNames: c,
              });
}
