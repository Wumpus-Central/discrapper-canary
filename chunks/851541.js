"use strict";
n.d(t, { A: () => o });
var r = n(284009),
    i = n.n(r);
n(273946);
var a = n(583954);
class s {
    color = "black";
    font = { style: "normal", weight: 300, size: 24, family: ["serif"], truncate: a.Kq.None };
    filter = {
        blur: 0,
        brightness: 1,
        contrast: 1,
        grayscale: 0,
        hueRotation: 0,
        invert: 0,
        opacity: 1,
        saturate: 1,
        sepia: 0,
    };
    assetMap;
    canvas;
    constructor(e, t) {
        (this.canvas = e), (this.assetMap = t);
    }
    getCanvas() {
        return this.canvas;
    }
    setColor(e) {
        this.color = e;
    }
    setFont(e) {
        (this.font.style = e.style ?? this.font.style),
            (this.font.size = e.size ?? this.font.size),
            (this.font.weight = e.weight ?? this.font.weight),
            (this.font.family = e.family ?? this.font.family),
            (this.font.truncate = e.truncate ?? this.font.truncate);
    }
    setFilter(e) {
        (this.filter.blur = e.blur ?? this.filter.blur),
            (this.filter.brightness = e.brightness ?? this.filter.brightness),
            (this.filter.contrast = e.contrast ?? this.filter.contrast),
            (this.filter.grayscale = e.grayscale ?? this.filter.grayscale),
            (this.filter.hueRotation = e.hueRotation ?? this.filter.hueRotation),
            (this.filter.invert = e.invert ?? this.filter.invert),
            (this.filter.opacity = e.opacity ?? this.filter.opacity),
            (this.filter.saturate = e.saturate ?? this.filter.saturate),
            (this.filter.sepia = e.sepia ?? this.filter.sepia);
    }
    getFilterString() {
        let e = ["brightness", "contrast", "grayscale", "invert", "opacity", "saturate", "sepia"];
        return [
            `blur(${this.filter.blur}px)`,
            `hue-rotate(${this.filter.hueRotation}deg)`,
            ...e.map((e) => `${e}(${this.filter[e]})`),
        ].join(" ");
    }
    getLoadedImage(e) {
        i()(null != this.assetMap, "DiscordCanvas: An AssetStore has not been initialized.");
        let t = this.assetMap.get(e);
        return void 0 === t
            ? void console.error(
                  `DiscordCanvas: AssetMap hasn't loaded ${e}.  Make sure to load it before trying to render.`,
              )
            : t;
    }
    drawRoundedImageWithFallbacks(e, t, n, r, i) {
        for (let s of e) {
            let e = this.drawRoundedImage(s, t, n, r, i);
            if (e !== a.uS.Failure) return e;
        }
        return a.uS.Failure;
    }
}
let o = s;
