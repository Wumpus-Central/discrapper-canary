r.d(t, { T: () => c }),
    r(388685),
    r(410992),
    r(227481),
    r(730884),
    r(20464),
    r(341884),
    r(364341),
    r(629680),
    r(505025),
    r(918970),
    r(121784),
    r(644351),
    r(146733);
var a = r(473749),
    n = r(710845),
    i = r(76674),
    o = r(586818);
let l = new n.Z("useAnimatedImageCheck");
function c(e) {
    let t = "image/gif" === e.type,
        r = "image/webp" === e.type,
        [n, c] = a.useState(!1),
        [u, s] = a.useState(null),
        f = r && u !== e;
    a.useEffect(() => {
        let a = !1;
        return (
            t
                ? ((0, i.Z)(), c(!1), s(e))
                : r
                  ? (async () => {
                        try {
                            let t = await e.arrayBuffer(),
                                r = new Uint8Array(t),
                                n = await (0, o.b0)(r);
                            a || (c(n), n && (0, o.GS)(), s(e));
                        } catch (t) {
                            a || (l.error("Error checking WebP animation", t), c(!1), s(e));
                        }
                    })()
                  : (c(!1), s(e)),
            () => {
                a = !0;
            }
        );
    }, [e, t, r]);
    let h = n && u === e,
        A = t || h;
    return {
        isGIF: t,
        isWebP: r,
        isAnimatedWebPFile: h,
        isCheckingAnimation: f,
        isEditableAnimatedImage: A,
    };
}
