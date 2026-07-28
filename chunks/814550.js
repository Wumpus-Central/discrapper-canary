"use strict";
n.d(t, { f: () => l, u: () => d });
var i,
    r = n(582128),
    a = n(435558),
    s = n(860923),
    l =
        (((i = {}).IDLE = "idle"),
        (i.HEAD_TURN = "headTurn"),
        (i.HEAD_TURN_BACK = "headTurnBack"),
        (i.TALKING = "talking"),
        i);
let o = {
        idle: ["headTurnBack", "talking"],
        headTurn: ["idle", "talking"],
        headTurnBack: ["headTurn"],
        talking: ["idle", "headTurnBack"],
    },
    d = (e) => {
        let [t, n] = r.useState("idle"),
            [i, l] = r.useState(),
            d = (0, s.A)(),
            c = r.useMemo(() => d?.characters[e], [d, e]),
            u = r.useCallback(() => {
                if (null == c) return i;
                let e = c[t];
                return (0, a.sample)(e);
            }, [i, c, t]);
        return (
            r.useEffect(() => {
                l(u());
            }, [d, e, u]),
            r.useEffect(() => {
                l(() => u());
            }, [t]),
            {
                animationState: t,
                updateAnimationState: function (e) {
                    return e === t ? t : o[e].includes(t) ? (n(e), e) : t;
                },
                asset: i,
                setAsset: l,
                sampleAsset: u,
                findAnimationTree: function () {
                    let e = 0,
                        n = new Set([t]);
                    for (; e < 10; ) e += 1;
                    return n;
                },
                characterAssets: c,
            }
        );
    };
