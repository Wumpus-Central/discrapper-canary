n.d(t, {
    Vz: () => c,
    Zn: () => d,
    aB: () => u
}),
    n(26686),
    n(757143),
    n(301563);
var i = n(392711),
    o = n(772848),
    r = n(134432),
    a = n(963838),
    s = n(302221),
    l = n(347904);
let c = 7.5,
    u = (0, i.memoize)(
        (e, t, n, i) =>
            new Promise((e) => {
                let o = new Image();
                (o.src = t),
                    (o.crossOrigin = 'Anonymous'),
                    (o.onload = () => {
                        let t = 32 * (0, r.x_)(),
                            a = JSON.stringify(n);
                        if ((null != i && (a = (0, l.s4)(a, (0, s.oo)(i))), (o.width === t && o.height === t) || (0 === o.width && 0 === o.height))) e(JSON.parse(a));
                        else {
                            let t = (128 / o.width) * o.height;
                            e(JSON.parse((a = (a = a.replace(/"w":128,"h":128/, '"w":128,"h":'.concat(t))).replace(/"a":{"a":0,"k":\[64,64/, '"a":{"a":0,"k":[64,'.concat(t / 2)))));
                        }
                    });
            })
    );
function d(e, t, n, i) {
    let { emojiSize: r, key: s, messageId: l } = null != i ? i : {},
        c = (0, a._r)(e, null != r ? 2 * r : void 0);
    return {
        channelId: n,
        messageId: l,
        emoji: e,
        animationId: (0, o.Z)(),
        url: c,
        key: s,
        color: t
    };
}
