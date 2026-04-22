a.d(t, { A: () => c });
var s = a(627968),
    r = a(64700),
    n = a(503698),
    i = a.n(n),
    o = a(984162),
    d = a(533873);
let l = r.forwardRef((e, t) => {
    let { className: a } = e,
        n = r.useRef(null);
    return (
        r.useImperativeHandle(t, () => ({
            play: () => {
                n.current?.play();
            },
            pause: () => n.current?.pause(),
        })),
        (0, s.jsx)("div", {
            className: i()(a, d.k),
            children: (0, s.jsx)(o.C, { ref: n, autoplay: !1, stateMachine: "State Machine 1", fit: "contain" }),
        })
    );
});
l.displayName = "PremiumRewardsBentoBoxAsset";
let c = l;
