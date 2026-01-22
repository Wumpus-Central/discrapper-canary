n.d(t, {
    f: () => s,
    u: () => l,
}),
    n(896048);
var r = n(64700),
    i = n(735438),
    a = n(860923),
    s = (function (e) {
        return (
            (e.IDLE = "idle"),
            (e.HEAD_TURN = "headTurn"),
            (e.HEAD_TURN_BACK = "headTurnBack"),
            (e.TALKING = "talking"),
            e
        );
    })({});
let o = {
        idle: ["headTurnBack", "talking"],
        headTurn: ["idle", "talking"],
        headTurnBack: ["headTurn"],
        talking: ["idle", "headTurnBack"],
    },
    l = (e) => {
        let [t, n] = r.useState("idle"),
            [s, l] = r.useState(),
            c = (0, a.A)(),
            u = r.useMemo(() => (null == c ? void 0 : c.characters[e]), [c, e]),
            d = r.useCallback(() => {
                if (null == u) return s;
                let e = u[t];
                return (0, i.sample)(e);
            }, [s, u, t]);
        r.useEffect(() => {
            l(d());
        }, [c, e, d]),
            r.useEffect(() => {
                l(() => d());
            }, [t]);
        let f = () => {
                let e = 10,
                    n = !1,
                    r = 0,
                    i = new Set([t]);
                for (; !n && r < e; ) r += 1;
                return i;
            },
            p = (e) => (e === t ? t : o[e].includes(t) ? (n(e), e) : t);
        return {
            animationState: t,
            updateAnimationState: p,
            asset: s,
            setAsset: l,
            sampleAsset: d,
            findAnimationTree: f,
            characterAssets: u,
        };
    };
