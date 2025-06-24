n.d(t, {
    Vz: () => c,
    Zn: () => d,
    aB: () => u
}),
    n(49124),
    n(704826),
    n(35282);
var i = n(392711),
    o = n(772848),
    l = n(134432),
    r = n(963838),
    a = n(302221),
    s = n(347904);
let c = 7.5,
    u = (0, i.memoize)(
        (e, t, n, i) =>
            new Promise((e) => {
                let o = new Image();
                (o.src = t),
                    (o.crossOrigin = 'Anonymous'),
                    (o.onload = () => {
                        let t = 32 * (0, l.x_)(),
                            r = JSON.stringify(n);
                        if ((null != i && (r = (0, s.s4)(r, (0, a.oo)(i))), (o.width === t && o.height === t) || (0 === o.width && 0 === o.height))) e(JSON.parse(r));
                        else {
                            let t = (128 / o.width) * o.height;
                            e(JSON.parse((r = (r = r.replace(/"w":128,"h":128/, '"w":128,"h":'.concat(t))).replace(/"a":{"a":0,"k":\[64,64/, '"a":{"a":0,"k":[64,'.concat(t / 2)))));
                        }
                    });
            })
    );
function d(e, t, n, i) {
    let { emojiSize: l, key: a, messageId: s } = null != i ? i : {},
        c = (0, r._r)(e, null != l ? 2 * l : void 0);
    return {
        channelId: n,
        messageId: s,
        emoji: e,
        animationId: (0, o.Z)(),
        url: c,
        key: a,
        color: t
    };
}
