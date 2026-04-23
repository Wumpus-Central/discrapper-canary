"use strict";
s.d(t, { J: () => r, s: () => a });
var n,
    l = s(64700),
    r =
        (((n = {}).MOUNTED = "mounted"),
        (n.SORT_OUT = "sort-out"),
        (n.SORT_IN = "sort-in"),
        (n.SHUFFLE_OUT = "shuffle-out"),
        (n.SHUFFLE_IN = "shuffle-in"),
        (n.FINISHED = "finished"),
        n);
let a = () => {
    let [e, t] = l.useState("mounted"),
        [s, n] = l.useState(!1),
        r = l.useRef(null);
    return (
        l.useEffect(() => {
            s && "finished" === e && (null !== r.current && r.current.focus(), n(!1));
        }, [e, s]),
        {
            animationPhase: e,
            startAnimation: l.useCallback((e) => {
                let { isShuffling: s, onOutroComplete: l, returnRef: a } = e;
                a?.current != null && ((r.current = a.current), n(!0)),
                    t(s ? "shuffle-out" : "sort-out"),
                    setTimeout(
                        () => {
                            l(),
                                t(s ? "shuffle-in" : "sort-in"),
                                setTimeout(
                                    () => {
                                        t("finished");
                                    },
                                    s ? 200 : 300,
                                );
                        },
                        s ? 250 : 300,
                    );
            }, []),
        }
    );
};
