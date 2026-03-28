"use strict";
n.d(t, { f: () => a, u: () => l });
var r = n(64700),
    i = n(735438),
    s = n(860923),
    a = (function (e) {
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
            [a, l] = r.useState(),
            u = (0, s.A)(),
            c = r.useMemo(() => u?.characters[e], [u, e]),
            d = r.useCallback(() => {
                if (null == c) return a;
                let e = c[t];
                return (0, i.sample)(e);
            }, [a, c, t]);
        r.useEffect(() => {
            l(d());
        }, [u, e, d]),
            r.useEffect(() => {
                l(() => d());
            }, [t]);
        let _ = () => {
                let e = 10,
                    n = 0,
                    r = new Set([t]);
                for (; n < e; ) n += 1;
                return r;
            },
            f = (e) => (e === t ? t : o[e].includes(t) ? (n(e), e) : t);
        return {
            animationState: t,
            updateAnimationState: f,
            asset: a,
            setAsset: l,
            sampleAsset: d,
            findAnimationTree: _,
            characterAssets: c,
        };
    };
