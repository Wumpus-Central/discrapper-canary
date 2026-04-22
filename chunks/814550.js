"use strict";
n.d(t, { f: () => o, u: () => u });
var r,
    i = n(64700),
    s = n(735438),
    a = n(860923),
    o =
        (((r = {}).IDLE = "idle"),
        (r.HEAD_TURN = "headTurn"),
        (r.HEAD_TURN_BACK = "headTurnBack"),
        (r.TALKING = "talking"),
        r);
let l = {
        idle: ["headTurnBack", "talking"],
        headTurn: ["idle", "talking"],
        headTurnBack: ["headTurn"],
        talking: ["idle", "headTurnBack"],
    },
    u = (e) => {
        let [t, n] = i.useState("idle"),
            [r, o] = i.useState(),
            u = (0, a.A)(),
            d = i.useMemo(() => u?.characters[e], [u, e]),
            c = i.useCallback(() => {
                if (null == d) return r;
                let e = d[t];
                return (0, s.sample)(e);
            }, [r, d, t]);
        return (
            i.useEffect(() => {
                o(c());
            }, [u, e, c]),
            i.useEffect(() => {
                o(() => c());
            }, [t]),
            {
                animationState: t,
                updateAnimationState: (e) => (e === t ? t : l[e].includes(t) ? (n(e), e) : t),
                asset: r,
                setAsset: o,
                sampleAsset: c,
                findAnimationTree: () => {
                    let e = 0,
                        n = new Set([t]);
                    for (; e < 10; ) e += 1;
                    return n;
                },
                characterAssets: d,
            }
        );
    };
