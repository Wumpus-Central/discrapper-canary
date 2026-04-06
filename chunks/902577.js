r.d(t, { A: () => l });
var n = r(627968),
    a = r(64700),
    i = r(158954);
let s = a.forwardRef((e, t) => {
    let { className: r } = e,
        s = a.useRef(null);
    return (
        a.useImperativeHandle(t, () => ({
            play: () => {
                s.current?.play();
            },
            pause: () => s.current?.pause(),
        })),
        (0, n.jsx)("div", {
            className: r,
            style: { width: "100%", height: "100%" },
            children: (0, n.jsx)(i.E44, {
                ref: s,
                autoplay: !1,
                artboard: "Torbs_Multiply",
                stateMachine: "SM_Torbs_Multiply",
                fit: "contain",
                style: { width: "100%", height: "100%" },
            }),
        })
    );
});
s.displayName = "QuestOrbsMultiplierBentoBoxAsset";
let l = s;
