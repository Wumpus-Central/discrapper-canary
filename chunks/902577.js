a.d(t, { A: () => o });
var s = a(627968),
    r = a(64700),
    n = a(645758);
let i = r.forwardRef((e, t) => {
    let { className: a } = e,
        i = r.useRef(null);
    return (
        r.useImperativeHandle(t, () => ({
            play: () => {
                i.current?.play();
            },
            pause: () => i.current?.pause(),
        })),
        (0, s.jsx)("div", {
            className: a,
            style: { width: "100%", height: "100%" },
            children: (0, s.jsx)(n.E, {
                ref: i,
                autoplay: !1,
                artboard: "Torbs_Multiply",
                stateMachine: "SM_Torbs_Multiply",
                fit: "contain",
                style: { width: "100%", height: "100%" },
            }),
        })
    );
});
i.displayName = "QuestOrbsMultiplierBentoBoxAsset";
let o = i;
