"use strict";
s.d(t, { J: () => l, s: () => a });
var n,
    r = s(64700),
    l =
        (((n = {}).MOUNTED = "mounted"),
        (n.SORT_OUT = "sort-out"),
        (n.SORT_IN = "sort-in"),
        (n.SHUFFLE_OUT = "shuffle-out"),
        (n.SHUFFLE_IN = "shuffle-in"),
        (n.FINISHED = "finished"),
        n);
let a = () => {
    let [e, t] = r.useState("mounted"),
        [s, n] = r.useState(!1),
        l = r.useRef(null);
    return (
        r.useEffect(() => {
            s && "finished" === e && (null !== l.current && l.current.focus(), n(!1));
        }, [e, s]),
        {
            animationPhase: e,
            startAnimation: r.useCallback((e) => {
                let { isShuffling: s, onOutroComplete: r, returnRef: a } = e;
                a?.current != null && ((l.current = a.current), n(!0)),
                    t(s ? "shuffle-out" : "sort-out"),
                    setTimeout(
                        () => {
                            r(),
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
