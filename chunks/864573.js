n.d(t, { Z: () => w }), n(388685), n(539854);
var r = n(255367),
    s = n(73800),
    o = n(392711),
    i = n.n(o),
    a = n(442837),
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
    v = new Image(),
    O = ['#FFFFFF', '#FF73FA', '#FFC0FF', '#FFD836', '#FF9A15', '#A5F7DE', '#51BC9D', '#AEC7FF', '#3E70DD'],
    j = [b.FK.BOUNCE_1, b.FK.BOUNCE_2, b.FK.BOUNCE_3];
function N(e) {
    return Math.floor(Math.random() * e);
}
function _() {
    return Math.random() > 0.5 ? 1 : -1;
}
function P() {
    return i().random(0, O.length - 1);
}
function w(e) {
    var t, n;
    let { isPaused: o, width: i, height: w, windowKey: C } = e,
        Z = u.Mq[b.yN.BOUNCING_LOGO],
        S = (0, s.useRef)(null),
        I = (0, s.useRef)([]),
        E = (0, g.eR)(x),
        k = (0, s.useRef)([]),
        M = (0, a.e7)([d.Z], () => d.Z.getNumPurchasesForItemUpgrade(b.yN.BOUNCING_LOGO, b.uv.BOUNCING_LOGO_MORE_LOGOS)) + 1,
        A = (0, a.e7)([d.Z], () => d.Z.hasPurchasedUpgrade(b.yN.BOUNCING_LOGO, b.uv.BOUNCING_LOGO_CORNERS)),
        R = (0, a.e7)([d.Z], () => d.Z.getNumPurchasesForItemUpgrade(b.yN.BOUNCING_LOGO, b.uv.BOUNCING_LOGO_SPEED)),
        B = (0, a.e7)([d.Z], () => d.Z.hasPurchasedUpgrade(b.yN.BOUNCING_LOGO, b.uv.BOUNCING_LOGO_COLORS)),
        T = null != (t = b.SZ[R]) ? t : b.SZ['0'],
        L = (i / 1920) * T,
        F = (w / 1080) * T,
        [D, U] = (0, p.Z)(b.yN.BOUNCING_LOGO),
        W = (0, s.useRef)(null != (n = D.count) ? n : 0);
    (0, s.useEffect)(() => {
        var e;
        W.current = null != (e = D.count) ? e : 0;
    }, [D.count]),
        (0, m.Z)(j, W.current),
        (0, s.useEffect)(() => {
            (v.onload = () => {
                k.current = O.map((e) =>
                    (function (e, t) {
                        let n = (0, c.oo)(t),
                            r = new OffscreenCanvas(71, 53),
                            s = r.getContext('2d');
                        if (null == s) return r;
                        s.drawImage(e, 0, 0, 71, 53);
                        let o = s.getImageData(0, 0, 71, 53);
                        for (let e = 0; e < o.data.length; e += 4) (o.data[e] *= n.r / 255), (o.data[e + 1] *= n.g / 255), (o.data[e + 2] *= n.b / 255);
                        return s.putImageData(o, 0, 0), r;
                    })(v, e)
                );
            }),
                (v.src = h);
        }, []),
        (0, s.useEffect)(() => {
            if (!(i < 71) && !(w < 53))
                for (let e = 0; e < M - I.current.length; e++)
                    I.current.push({
                        x: N(i - 71),
                        y: N(w - 53),
                        directionX: _(),
                        directionY: _(),
                        color: B ? P() : 0
                    });
        }, [B, w, M, i]),
        (0, s.useEffect)(() => {
            I.current.forEach((e) => {
                (e.x = N(i - 71)), (e.y = N(w - 53));
            });
        }, [w, i]);
    let G = (0, s.useCallback)(
            (e) => {
                I.current.forEach((t) => {
                    (t.x += t.directionX * L * e), (t.y += t.directionY * F * e);
                    let n = t.x <= 0,
                        r = t.x >= i - 71,
                        s = t.y <= 0,
                        o = t.y >= w - 53;
                    n ? (t.directionX = 1) : r && (t.directionX = -1), s ? (t.directionY = 1) : o && (t.directionY = -1), (n || r || s || o) && (U({ count: W.current + 1 }), B && (t.color = P()));
                });
            },
            [B, w, U, L, F, i]
        ),
        K = (0, s.useCallback)(() => {
            I.current.forEach((e) => {
                let t = e.x <= 0 || e.x >= i - 71,
                    n = e.y <= 0 || e.y >= w - 53;
                (t || n) && ((0, l.KH)(b.yN.BOUNCING_LOGO, Z.getPoints(t && n, A, B)), E());
            });
        }, [i, w, Z, A, B, E]),
        V = (0, s.useCallback)(() => {
            var e;
            let t = null == (e = S.current) ? void 0 : e.getContext('2d');
            null != t &&
                (t.clearRect(0, 0, i, w),
                I.current.forEach((e) => {
                    let { x: n, y: r, color: s } = e;
                    null != k.current[s] && t.drawImage(k.current[s], 0, 0, 71, 53, n, r, 71, 53);
                }));
        }, [w, i]),
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
            ref: S,
            className: y.canvas,
            width: i,
            height: w
        })
    );
}
