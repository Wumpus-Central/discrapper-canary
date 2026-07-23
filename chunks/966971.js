c.d(t, { AB: () => r, K9: () => p, FF: () => d }), c(64700);
var s,
    a = c(758836),
    d =
        21552 == c.j
            ? (((s = {})[(s.NONE = 0)] = "NONE"),
              (s[(s.TOOLTIP = 1)] = "TOOLTIP"),
              (s[(s.BADGE = 2)] = "BADGE"),
              (s[(s.COACHMARK = 3)] = "COACHMARK"),
              (s[(s.TAB_TOOLTIP = 4)] = "TAB_TOOLTIP"),
              s)
            : null;
class n {
    src;
    style;
    animated;
    constructor({ src: e, style: t, animated: c }) {
        (this.src = e), (this.style = t), (this.animated = c);
    }
    getSrc = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return "string" == typeof e.src ? e.src : t ? e.src.dark : e.src.light;
        };
    })();
}
let i = {
    ROBERT: new n({
        src: "https://cdn.discordapp.com/assets/content/060c53a66797d6553200b73930246646e051a218278baaab488c6f68131e48a6.png",
        style: { position: "absolute", width: "400px", right: "-200px", zIndex: 10 },
    }),
    SHY: new n({
        src: "https://cdn.discordapp.com/assets/content/2703bc2130d4f7dac25f48d500e205e57e974fa4128116d805dc94a7d9455dce.png",
        style: { position: "absolute", width: "600px", left: "calc(50vw - 300px)", top: "calc(50vh - 300px)" },
    }),
    STORM: new n({
        src: "https://cdn.discordapp.com/assets/content/69a3e8179a8eb5068d6b88b77259a8617ba14ee86a066d3e62e0e4a6e6de0622.png",
        style: { position: "absolute", width: "850px", left: "calc(50vw - 425px)", top: "calc(50vh - 425px)" },
    }),
    ORB_PURCHASE: new n({
        src: {
            dark: "https://cdn.discordapp.com/assets/content/ec4b256109d63f6ecc0bd00d502a06490b4dfada6ac6cdbfa43b6e18a79ec0b4.webm",
            light: "https://cdn.discordapp.com/assets/content/91ca767336f297f17a2cb38ab1f072a7510a624925cbd5fe1ca7ce9ba8f8d6d8.webm",
        },
        animated: !0,
        style: { position: "fixed", width: "100%", height: "100%", top: 0, left: 0, objectFit: "cover" },
    }),
};
function r(e) {
    let { purchaseType: t, skuId: c } = e;
    if (t === a.gs.ORB) return i.ORB_PURCHASE;
    switch (c) {
        case "1267521289330102344":
        case "1267521289355268154":
        case "1266160780928352268":
        case "1266160780978556969":
        case "1266161342801383434":
        case "1220513995308400680":
        case "1220513984273186816":
        case "1220513989729976411":
        case "1220514048068812901":
        case "1266493591207940133":
        case "1266493591275044903":
        case "1220432740638523543":
            return i.STORM;
        case "1220513977683935373":
        case "1220432647453409384":
        case "1220432697718083614":
            return i.SHY;
        default:
            return null;
    }
}
function p(e) {
    return "1262491137386614805" === e ? i.ROBERT : null;
}
