n.d(t, {
    Iu: () => G,
    Jw: () => j,
    _r: () => B,
    cX: () => F,
    lv: () => U,
    v: () => L
});
var r = n(392711),
    i = n.n(r),
    o = n(490757),
    a = n(429827),
    s = n(353928),
    l = n(336892),
    c = n(624833),
    u = n(944314),
    d = n(399358),
    f = n(945835),
    p = n(912931),
    _ = n(966552),
    h = n(561763),
    m = n(529306),
    g = n(90075),
    E = n(862666),
    v = n(252611),
    b = n(136144),
    y = n(316137),
    O = n(654123),
    S = n(660020),
    I = n(980084),
    T = n(24688),
    N = n(200997),
    A = n(633302),
    C = n(134432),
    R = n(594174),
    P = n(768581),
    w = n(176354),
    D = n(353368),
    x = n(388032);
let L = {
        start: 10,
        end: 15
    },
    M = [o],
    k = [a, s, l, c, u, d, f, p, _, h, m, g, E, v, b, y, O, S, I, T, N],
    j = {
        [D.q.BASIC]: M,
        [D.q.PREMIUM]: k
    },
    U = i().memoize(
        (e) =>
            new Promise((t) => {
                let n = new Image();
                (n.src = e),
                    (n.crossOrigin = 'Anonymous'),
                    (n.onload = () => {
                        let r = D.v * (0, C.x_)();
                        if (n.width === r && n.height === r) t(e);
                        else {
                            var i;
                            let e = document.createElement('canvas');
                            (e.width = r), (e.height = r), null === (i = e.getContext('2d')) || void 0 === i || i.drawImage(n, 0, 0), t(e.toDataURL('image/png'));
                        }
                    });
            })
    ),
    G = (e, t) => {
        let n = j[e];
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
            animated: null !== (n = e.animated) && void 0 !== n && n,
            size: t
        });
    }
    let r = A.ZP.convertSurrogateToName(e.name, !1),
        i = A.ZP.getByName(r);
    return null != i ? w.ZP.getURL(i.surrogates) : '';
}
function Z(e, t) {
    return i()(e)
        .map((e) => {
            var n;
            return null !== (n = e[t]) && void 0 !== n ? n : null;
        })
        .filter((e) => null != e)
        .uniq()
        .value();
}
function F(e) {
    var t, n, r, i, o, a;
    if (e.length < 1) return '';
    let s = Z(e, 'userId'),
        l = Z(e, 'emojiName'),
        c = l.length < 2 ? (null !== (t = null == l ? void 0 : l[0]) && void 0 !== t ? t : '') : l.join(', ');
    return s.length < 1
        ? ''
        : 1 === s.length
          ? x.NW.formatToPlainString(x.t.yZYxzM, {
                firstUsername: null === (n = R.default.getUser(s[0])) || void 0 === n ? void 0 : n.username,
                emojiNames: c
            })
          : 2 === s.length
            ? x.NW.formatToPlainString(x.t['8rmtbW'], {
                  firstUsername: null === (r = R.default.getUser(s[0])) || void 0 === r ? void 0 : r.username,
                  secondUsername: null === (i = R.default.getUser(s[1])) || void 0 === i ? void 0 : i.username,
                  emojiNames: c
              })
            : x.NW.formatToPlainString(x.t['/okjv7'], {
                  firstUsername: null === (o = R.default.getUser(s[0])) || void 0 === o ? void 0 : o.username,
                  secondUsername: null === (a = R.default.getUser(s[1])) || void 0 === a ? void 0 : a.username,
                  count: s.length - 2,
                  emojiNames: c
              });
}
