n.d(t, { EQ: () => d, H6: () => E, Ov: () => A, WK: () => o, nI: () => u, wT: () => c }),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162);
var i = n(115943),
    a = n.n(i),
    r = n(837015),
    s = n(641886);
n(818348);
var l = n(985018);
function o(e) {
    return null == e ? null : { skuId: e.skuId, src: e.asset, imgAlt: e.label, palette: E(e.palette) };
}
function d(e) {
    if (0 === e.items.length) return null;
    let t = e.items[0];
    return (0, r.F)(t) ? o(t) : null;
}
function c(e) {
    return e.name !== s.KO && (e.name !== s.AK || (_(e.darkBackground) && _(e.lightBackground)));
}
function _(e) {
    return /^#([0-9a-fA-F]{6})$/.test(e);
}
let E = (e) => s.fc[e] ?? s.Wj;
function u(e) {
    let t = a().decode(e),
        n = a().toRGBA8(t)[0],
        i = document.createElement("canvas");
    (i.width = t.width), (i.height = t.height);
    let r = i.getContext("2d"),
        s = new ImageData(new Uint8ClampedArray(n), t.width, t.height);
    return r.putImageData(s, 0, 0), i.toDataURL("image/png");
}
function A() {
    return {
        mallow: {
            name: l.intl.string(l.t.SbKDHi),
            avatarSrc:
                "https://cdn.discordapp.com/assets/content/6dcafe1231097505560fd098f0e6698990f0082369d34c35d8c3ee9615709f84.png",
        },
        phibi: {
            name: l.intl.string(l.t["LMSo+F"]),
            avatarSrc:
                "https://cdn.discordapp.com/assets/content/17ae2ee3b8476755370ca9fa4d776d0bb811e50962409a7ae2dedd1b96c95eab.png",
        },
        locke: {
            name: l.intl.string(l.t.g5Dumi),
            avatarSrc:
                "https://cdn.discordapp.com/assets/content/a82a9daadc5c7842f183c0f61966b07d3aeeea478b7c8a4b8af48334eb1ce15f.png",
        },
        cherry: {
            name: l.intl.string(l.t.p5Z3Ol),
            avatarSrc:
                "https://cdn.discordapp.com/assets/content/afc2e8306ce540dccac7da1ca0871684d0bf67e77967ff0f679be84a0a6e51b7.png",
        },
        boom: {
            name: l.intl.string(l.t.ncslie),
            avatarSrc:
                "https://cdn.discordapp.com/assets/content/e264a2b0b8d963edd255c223abf1c0554f00a2f3a38640e509a38bc03d73b606.png",
        },
    };
}
