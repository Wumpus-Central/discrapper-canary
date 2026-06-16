_.d(r, { OW: () => e, _V: () => A, oO: () => N });
var o = _(499979),
    E = _(381849),
    C = _(375708);
let s = [o.pJ.HOURS, o.pJ.MINUTES];
function N(a) {
    let { unit: r, time: _ } = (0, o.$l)(a, s),
        N = (0, E.i)();
    if (null == _) return C.intl.formatToPlainString(N.minutes, { minutes: 0 });
    let e = Math.round(_);
    return r === o.pJ.HOURS
        ? C.intl.formatToPlainString(N.hours, { hours: e })
        : C.intl.formatToPlainString(N.minutes, { minutes: e });
}
function e(a) {
    switch (a) {
        case 0:
            return "https://cdn.discordapp.com/assets/content/97c629a74c9d42f45a5e3b5f38cad7c76415bafebb327ee641972ea0c346d9ed.png";
        case 1:
            return "https://cdn.discordapp.com/assets/content/28f1a6c284fccda18aa7a5281e3024c576a39012b5e8c9d44d4862e4ff3bc4ec.png";
        case 2:
            return "https://cdn.discordapp.com/assets/content/377e58c9356f0ba294b41aa722b33093952e438e21d5c4571e3ed239a61529fd.png";
        case 3:
            return "https://cdn.discordapp.com/assets/content/d6edacbdf55ab0dcfe31b314adacb43d2fc04830f49d995d1f8b48fb46549104.png";
        case 4:
            return "https://cdn.discordapp.com/assets/content/885205a22b61b7423bf5d9539a2499897b226a224577b6daa5918376d57c3289.png";
        case 5:
            return "https://cdn.discordapp.com/assets/content/2ccab1029478c8ca37ea278aea6c260f89d0abfab3e3171c5dde1badb3cb61e3.png";
        case 6:
            return "https://cdn.discordapp.com/assets/content/5548a717f75e56c4efc11115ddab778b222576682a73b2835ff6549e461f619d.png";
        case 7:
            return "https://cdn.discordapp.com/assets/content/b5faf6e2a128b6095a769868d700f10e55c5db3fcca3c29a555bc8514fcd6eaa.png";
        case 8:
            return "https://cdn.discordapp.com/assets/content/e92df3121365bb2c6554ea3a219542b6d485a8d508bd62f6b7d9314aade4500d.png";
        default:
            return "https://cdn.discordapp.com/assets/content/63e156d9534821fc67f772dace48c7add4186191274c63bebbd0895ee9a1d4d5.png";
    }
}
function A(a) {
    return Math.min(Math.max(Math.round(a / 10), 1), 9);
}
