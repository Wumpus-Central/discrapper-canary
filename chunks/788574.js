a.d(t, { A: () => c });
var r = a(627968),
    s = a(64700),
    n = a(503698),
    i = a.n(n),
    o = a(984162),
    l = a(533873);
let d = s.forwardRef((e, t) => {
    let { className: a } = e,
        n = s.useRef(null);
    return (
        s.useImperativeHandle(t, () => ({
            play: () => {
                n.current?.play();
            },
            pause: () => n.current?.pause(),
        })),
        (0, r.jsx)("div", {
            className: i()(a, l.k),
            children: (0, r.jsx)(o.C, { ref: n, autoplay: !1, stateMachine: "State Machine 1", fit: "contain" }),
        })
    );
});
d.displayName = "PremiumRewardsBentoBoxAsset";
let c = d;
