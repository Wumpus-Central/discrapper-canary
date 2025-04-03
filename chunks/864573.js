n.d(t, { Z: () => P }), n(47120), n(653041);
var r = n(200651),
    s = n(192379),
    o = n(392711),
    a = n.n(o),
    i = n(442837),
    c = n(302221),
    l = n(668826),
    u = n(359013),
    d = n(120421),
    f = n(265513),
    p = n(284539),
    m = n(67411),
    g = n(3072),
    b = n(477839),
    y = n(18804),
    h = n(410757);
let x = n(460665),
    N = new Image(),
    v = ['#FFFFFF', '#FF73FA', '#FFC0FF', '#FFD836', '#FF9A15', '#A5F7DE', '#51BC9D', '#AEC7FF', '#3E70DD'],
    O = [b.FK.BOUNCE_1, b.FK.BOUNCE_2, b.FK.BOUNCE_3];
function j(e) {
    return Math.floor(Math.random() * e);
}
function Z() {
    return Math.random() > 0.5 ? 1 : -1;
}
function _() {
    return a().random(0, v.length - 1);
}
function P(e) {
    var t, n;
    let { isPaused: o, width: a, height: P, windowKey: C } = e,
        w = u.Mq[b.yN.BOUNCING_LOGO],
        E = (0, s.useRef)(null),
        S = (0, s.useRef)([]),
        I = (0, g.eR)(x),
        k = (0, s.useRef)([]),
        M = (0, i.e7)([d.Z], () => d.Z.getNumPurchasesForItemUpgrade(b.yN.BOUNCING_LOGO, b.uv.BOUNCING_LOGO_MORE_LOGOS)) + 1,
        W = (0, i.e7)([d.Z], () => d.Z.hasPurchasedUpgrade(b.yN.BOUNCING_LOGO, b.uv.BOUNCING_LOGO_CORNERS)),
        R = (0, i.e7)([d.Z], () => d.Z.getNumPurchasesForItemUpgrade(b.yN.BOUNCING_LOGO, b.uv.BOUNCING_LOGO_SPEED)),
        A = (0, i.e7)([d.Z], () => d.Z.hasPurchasedUpgrade(b.yN.BOUNCING_LOGO, b.uv.BOUNCING_LOGO_COLORS)),
        T = null != (t = b.SZ[R]) ? t : b.SZ['0'],
        L = (a / 1920) * T,
        B = (P / 1080) * T,
        [D, F] = (0, p.Z)(b.yN.BOUNCING_LOGO),
        U = (0, s.useRef)(null != (n = D.count) ? n : 0);
    (0, s.useEffect)(() => {
        var e;
        U.current = null != (e = D.count) ? e : 0;
    }, [D.count]),
        (0, m.Z)(O, U.current),
        (0, s.useEffect)(() => {
            (N.onload = () => {
                k.current = v.map((e) =>
                    (function (e, t) {
                        let n = (0, c.oo)(t),
                            r = new OffscreenCanvas(71, 53),
                            s = r.getContext('2d');
                        if (null == s) return r;
                        s.drawImage(e, 0, 0, 71, 53);
                        let o = s.getImageData(0, 0, 71, 53);
                        for (let e = 0; e < o.data.length; e += 4) (o.data[e] *= n.r / 255), (o.data[e + 1] *= n.g / 255), (o.data[e + 2] *= n.b / 255);
                        return s.putImageData(o, 0, 0), r;
                    })(N, e)
                );
            }),
                (N.src = h);
        }, []),
        (0, s.useEffect)(() => {
            if (!(a < 71) && !(P < 53))
                for (let e = 0; e < M - S.current.length; e++)
                    S.current.push({
                        x: j(a - 71),
                        y: j(P - 53),
                        directionX: Z(),
                        directionY: Z(),
                        color: A ? _() : 0
                    });
        }, [A, P, M, a]),
        (0, s.useEffect)(() => {
            S.current.forEach((e) => {
                (e.x = j(a - 71)), (e.y = j(P - 53));
            });
        }, [P, a]);
    let G = (0, s.useCallback)(
            (e) => {
                S.current.forEach((t) => {
                    (t.x += t.directionX * L * e), (t.y += t.directionY * B * e);
                    let n = t.x <= 0,
                        r = t.x >= a - 71,
                        s = t.y <= 0,
                        o = t.y >= P - 53;
                    n ? (t.directionX = 1) : r && (t.directionX = -1), s ? (t.directionY = 1) : o && (t.directionY = -1), (n || r || s || o) && (F({ count: U.current + 1 }), A && (t.color = _()));
                });
            },
            [A, P, F, L, B, a]
        ),
        K = (0, s.useCallback)(() => {
            S.current.forEach((e) => {
                let t = e.x <= 0 || e.x >= a - 71,
                    n = e.y <= 0 || e.y >= P - 53;
                (t || n) && ((0, l.KH)(b.yN.BOUNCING_LOGO, w.getPoints(t && n, W, A)), I());
            });
        }, [a, P, w, W, A, I]),
        V = (0, s.useCallback)(() => {
            var e;
            let t = null == (e = E.current) ? void 0 : e.getContext('2d');
            null != t &&
                (t.clearRect(0, 0, a, P),
                S.current.forEach((e) => {
                    let { x: n, y: r, color: s } = e;
                    null != k.current[s] && t.drawImage(k.current[s], 0, 0, 71, 53, n, r, 71, 53);
                }));
        }, [P, a]),
        H = (0, s.useCallback)(
            (e) => {
                G(e), K(), V();
            },
            [V, K, G]
        );
    return (
        (0, f.Z)({
            onFrame: H,
            isPaused: o,
            windowKey: C
        }),
        (0, r.jsx)('canvas', {
            ref: E,
            className: y.canvas,
            width: a,
            height: P
        })
    );
}
