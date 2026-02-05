"use strict";
n.d(t, { f: () => s, u: () => l });
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
            u = (0, a.A)(),
            c = r.useMemo(() => u?.characters[e], [u, e]),
            d = r.useCallback(() => {
                if (null == c) return s;
                let e = c[t];
                return (0, i.sample)(e);
            }, [s, c, t]);
        r.useEffect(() => {
            l(d());
        }, [u, e, d]),
            r.useEffect(() => {
                l(() => d());
            }, [t]);
        let _ = () => {
                let e = 10,
                    n = !1,
                    r = 0,
                    i = new Set([t]);
                for (; !n && r < e; ) r += 1;
                return i;
            },
            f = (e) => (e === t ? t : o[e].includes(t) ? (n(e), e) : t);
        return {
            animationState: t,
            updateAnimationState: f,
            asset: s,
            setAsset: l,
            sampleAsset: d,
            findAnimationTree: _,
            characterAssets: c,
        };
    };
