"use strict";
n.d(t, { f: () => o, u: () => u });
var i,
    r = n(64700),
    s = n(735438),
    a = n(860923),
    o =
        (((i = {}).IDLE = "idle"),
        (i.HEAD_TURN = "headTurn"),
        (i.HEAD_TURN_BACK = "headTurnBack"),
        (i.TALKING = "talking"),
        i);
let l = {
        idle: ["headTurnBack", "talking"],
        headTurn: ["idle", "talking"],
        headTurnBack: ["headTurn"],
        talking: ["idle", "headTurnBack"],
    },
    u = (e) => {
        let [t, n] = r.useState("idle"),
            [i, o] = r.useState(),
            u = (0, a.A)(),
            c = r.useMemo(() => u?.characters[e], [u, e]),
            d = r.useCallback(() => {
                if (null == c) return i;
                let e = c[t];
                return (0, s.sample)(e);
            }, [i, c, t]);
        return (
            r.useEffect(() => {
                o(d());
            }, [u, e, d]),
            r.useEffect(() => {
                o(() => d());
            }, [t]),
            {
                animationState: t,
                updateAnimationState: (e) => (e === t ? t : l[e].includes(t) ? (n(e), e) : t),
                asset: i,
                setAsset: o,
                sampleAsset: d,
                findAnimationTree: () => {
                    let e = 0,
                        n = new Set([t]);
                    for (; e < 10; ) e += 1;
                    return n;
                },
                characterAssets: c,
            }
        );
    };
