s.d(e, { AB: () => o, K9: () => p, FF: () => c }), s(64700);
var r,
    a = s(758836),
    c =
        21552 == s.j
            ? (((r = {})[(r.NONE = 0)] = "NONE"),
              (r[(r.TOOLTIP = 1)] = "TOOLTIP"),
              (r[(r.BADGE = 2)] = "BADGE"),
              (r[(r.COACHMARK = 3)] = "COACHMARK"),
              (r[(r.TAB_TOOLTIP = 4)] = "TAB_TOOLTIP"),
              r)
            : null;
class i {
    src;
    style;
    animated;
    constructor({ src: t, style: e, animated: s }) {
        (this.src = t), (this.style = e), (this.animated = s);
    }
    getSrc = (() => {
        var t = this;
        return function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return "string" == typeof t.src ? t.src : e ? t.src.dark : t.src.light;
        };
    })();
}
let n = {
    ROBERT: new i({
        src: "https://cdn.discordapp.com/assets/content/060c53a66797d6553200b73930246646e051a218278baaab488c6f68131e48a6.png",
        style: { position: "absolute", width: "400px", right: "-200px", zIndex: 10 },
    }),
    SHY: new i({
        src: "https://cdn.discordapp.com/assets/content/2703bc2130d4f7dac25f48d500e205e57e974fa4128116d805dc94a7d9455dce.png",
        style: { position: "absolute", width: "600px", left: "calc(50vw - 300px)", top: "calc(50vh - 300px)" },
    }),
    STORM: new i({
        src: "https://cdn.discordapp.com/assets/content/69a3e8179a8eb5068d6b88b77259a8617ba14ee86a066d3e62e0e4a6e6de0622.png",
        style: { position: "absolute", width: "850px", left: "calc(50vw - 425px)", top: "calc(50vh - 425px)" },
    }),
    ORB_PURCHASE: new i({
        src: {
            dark: "https://cdn.discordapp.com/assets/content/ec4b256109d63f6ecc0bd00d502a06490b4dfada6ac6cdbfa43b6e18a79ec0b4.webm",
            light: "https://cdn.discordapp.com/assets/content/91ca767336f297f17a2cb38ab1f072a7510a624925cbd5fe1ca7ce9ba8f8d6d8.webm",
        },
        animated: !0,
        style: { position: "fixed", width: "100%", height: "100%", top: 0, left: 0, objectFit: "cover" },
    }),
};
function o(t) {
    let { purchaseType: e, skuId: s } = t;
    if (e === a.gs.ORB) return n.ORB_PURCHASE;
    switch (s) {
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
            return n.STORM;
        case "1220513977683935373":
        case "1220432647453409384":
        case "1220432697718083614":
            return n.SHY;
        default:
            return null;
    }
}
function p(t) {
    return "1262491137386614805" === t ? n.ROBERT : null;
}
