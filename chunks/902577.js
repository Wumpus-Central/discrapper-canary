a.d(t, { A: () => o });
var r = a(627968),
    s = a(64700),
    n = a(645758);
let i = s.forwardRef((e, t) => {
    let { className: a } = e,
        i = s.useRef(null);
    return (
        s.useImperativeHandle(t, () => ({
            play: () => {
                i.current?.play();
            },
            pause: () => i.current?.pause(),
        })),
        (0, r.jsx)("div", {
            className: a,
            style: { width: "100%", height: "100%" },
            children: (0, r.jsx)(n.E, {
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
