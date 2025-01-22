r.d(n, {
    Iu: function () {
        return Z;
    },
    Jw: function () {
        return B;
    },
    _r: function () {
        return F;
    },
    cX: function () {
        return j;
    },
    lv: function () {
        return G;
    },
    v: function () {
        return M;
    }
});
var i = r(392711),
    a = r.n(i),
    o = r(490757),
    s = r(429827),
    l = r(353928),
    u = r(336892),
    c = r(624833),
    d = r(944314),
    f = r(399358),
    p = r(945835),
    h = r(912931),
    _ = r(966552),
    m = r(561763),
    g = r(529306),
    E = r(90075),
    v = r(862666),
    y = r(252611),
    b = r(136144),
    I = r(316137),
    T = r(654123),
    S = r(660020),
    A = r(980084),
    C = r(24688),
    N = r(200997),
    R = r(633302),
    O = r(134432),
    D = r(594174),
    L = r(768581),
    x = r(176354),
    w = r(353368),
    P = r(388032);
let M = {
        start: 10,
        end: 15
    },
    k = [o],
    U = [s, l, u, c, d, f, p, h, _, m, g, E, v, y, b, I, T, S, A, C, N],
    B = {
        [w.q.BASIC]: k,
        [w.q.PREMIUM]: U
    },
    G = a().memoize(
        (e) =>
            new Promise((n) => {
                let r = new Image();
                (r.src = e),
                    (r.crossOrigin = 'Anonymous'),
                    (r.onload = () => {
                        let i = w.v * (0, O.x_)();
                        if (r.width === i && r.height === i) n(e);
                        else {
                            var a;
                            let e = document.createElement('canvas');
                            (e.width = i), (e.height = i), null === (a = e.getContext('2d')) || void 0 === a || a.drawImage(r, 0, 0), n(e.toDataURL('image/png'));
                        }
                    });
            })
    ),
    Z = (e, n) => {
        let r = B[e];
        if (null != n && e === w.q.PREMIUM) {
            let e = n.end + 1;
            return Math.floor(Math.random() * (n.start - e) + e);
        }
        return Math.floor(Math.random() * r.length);
    };
function F(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w.v;
    if (null != e.id) {
        var r;
        return L.ZP.getEmojiURL({
            id: e.id,
            animated: null !== (r = e.animated) && void 0 !== r && r,
            size: n
        });
    }
    let i = R.ZP.convertSurrogateToName(e.name, !1),
        a = R.ZP.getByName(i);
    return null != a ? x.ZP.getURL(a.surrogates) : '';
}
function V(e, n) {
    return a()(e)
        .map((e) => {
            var r;
            return null !== (r = e[n]) && void 0 !== r ? r : null;
        })
        .filter((e) => null != e)
        .uniq()
        .value();
}
function j(e) {
    var n, r, i, a, o, s;
    if (e.length < 1) return '';
    let l = V(e, 'userId'),
        u = V(e, 'emojiName'),
        c = u.length < 2 ? (null !== (n = null == u ? void 0 : u[0]) && void 0 !== n ? n : '') : u.join(', ');
    if (l.length < 1) return '';
    if (1 === l.length)
        return P.intl.formatToPlainString(P.t.yZYxzM, {
            firstUsername: null === (r = D.default.getUser(l[0])) || void 0 === r ? void 0 : r.username,
            emojiNames: c
        });
    if (2 === l.length)
        return P.intl.formatToPlainString(P.t['8rmtbW'], {
            firstUsername: null === (i = D.default.getUser(l[0])) || void 0 === i ? void 0 : i.username,
            secondUsername: null === (a = D.default.getUser(l[1])) || void 0 === a ? void 0 : a.username,
            emojiNames: c
        });
    else
        return P.intl.formatToPlainString(P.t['/okjv7'], {
            firstUsername: null === (o = D.default.getUser(l[0])) || void 0 === o ? void 0 : o.username,
            secondUsername: null === (s = D.default.getUser(l[1])) || void 0 === s ? void 0 : s.username,
            count: l.length - 2,
            emojiNames: c
        });
}
