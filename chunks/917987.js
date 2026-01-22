l.d(t, {
    J: () => s,
    s: () => a,
}),
    l(896048);
var n,
    r = l(64700),
    s =
        (((n = {}).MOUNTED = "mounted"),
        (n.SORT_OUT = "sort-out"),
        (n.SORT_IN = "sort-in"),
        (n.SHUFFLE_OUT = "shuffle-out"),
        (n.SHUFFLE_IN = "shuffle-in"),
        (n.FINISHED = "finished"),
        n);
let a = () => {
    let [e, t] = r.useState("mounted"),
        [l, n] = r.useState(!1),
        s = r.useRef(null);
    return (
        r.useEffect(() => {
            l && "finished" === e && (null !== s.current && s.current.focus(), n(!1));
        }, [e, l]),
        {
            animationPhase: e,
            startAnimation: r.useCallback((e) => {
                let { isShuffling: l, onOutroComplete: r, returnRef: a } = e;
                (null == a ? void 0 : a.current) != null && ((s.current = a.current), n(!0)),
                    t(l ? "shuffle-out" : "sort-out"),
                    setTimeout(
                        () => {
                            r(),
                                t(l ? "shuffle-in" : "sort-in"),
                                setTimeout(
                                    () => {
                                        t("finished");
                                    },
                                    l ? 200 : 300,
                                );
                        },
                        l ? 250 : 300,
                    );
            }, []),
        }
    );
};
