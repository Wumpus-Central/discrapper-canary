"use strict";
n.d(t, { EQ: () => u, H6: () => _, Ov: () => h, WK: () => l, nI: () => f, wT: () => c }),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162);
var i = n(115943),
    r = n.n(i),
    s = n(837015),
    a = n(641886);
n(818348);
var o = n(375708);
function l(e) {
    return null == e ? null : { skuId: e.skuId, src: e.asset, imgAlt: e.label, palette: _(e.palette) };
}
function u(e) {
    if (0 === e.items.length) return null;
    let t = e.items[0];
    return (0, s.F)(t) ? l(t) : null;
}
function c(e) {
    return e.name !== a.KO && (e.name !== a.AK || (d(e.darkBackground) && d(e.lightBackground)));
}
function d(e) {
    return /^#([0-9a-fA-F]{6})$/.test(e);
}
let _ = (e) => a.fc[e] ?? a.Wj;
function f(e) {
    let t = r().decode(e),
        n = r().toRGBA8(t)[0],
        i = document.createElement("canvas");
    (i.width = t.width), (i.height = t.height);
    let s = i.getContext("2d"),
        a = new ImageData(new Uint8ClampedArray(n), t.width, t.height);
    return s.putImageData(a, 0, 0), i.toDataURL("image/png");
}
function h() {
    return {
        mallow: {
            name: o.intl.string(o.t.SbKDHi),
            avatarSrc:
                "https://cdn.discordapp.com/assets/content/6dcafe1231097505560fd098f0e6698990f0082369d34c35d8c3ee9615709f84.png",
        },
        phibi: {
            name: o.intl.string(o.t["LMSo+F"]),
            avatarSrc:
                "https://cdn.discordapp.com/assets/content/17ae2ee3b8476755370ca9fa4d776d0bb811e50962409a7ae2dedd1b96c95eab.png",
        },
        locke: {
            name: o.intl.string(o.t.g5Dumi),
            avatarSrc:
                "https://cdn.discordapp.com/assets/content/a82a9daadc5c7842f183c0f61966b07d3aeeea478b7c8a4b8af48334eb1ce15f.png",
        },
        cherry: {
            name: o.intl.string(o.t.p5Z3Ol),
            avatarSrc:
                "https://cdn.discordapp.com/assets/content/afc2e8306ce540dccac7da1ca0871684d0bf67e77967ff0f679be84a0a6e51b7.png",
        },
        boom: {
            name: o.intl.string(o.t.ncslie),
            avatarSrc:
                "https://cdn.discordapp.com/assets/content/e264a2b0b8d963edd255c223abf1c0554f00a2f3a38640e509a38bc03d73b606.png",
        },
    };
}
