n.d(t, {
    Vz: () => c,
    Zn: () => d,
    aB: () => u
}),
    n(26686),
    n(757143),
    n(301563);
var i = n(392711),
    r = n(772848),
    o = n(134432),
    a = n(963838),
    s = n(302221),
    l = n(347904);
let c = 7.5,
    u = (0, i.memoize)(
        (e, t, n, i) =>
            new Promise((e) => {
                let r = new Image();
                (r.src = t),
                    (r.crossOrigin = 'Anonymous'),
                    (r.onload = () => {
                        let t = 32 * (0, o.x_)(),
                            a = JSON.stringify(n);
                        if ((null != i && (a = (0, l.s4)(a, (0, s.oo)(i))), (r.width === t && r.height === t) || (0 === r.width && 0 === r.height))) e(JSON.parse(a));
                        else {
                            let t = (128 / r.width) * r.height;
                            e(JSON.parse((a = (a = a.replace(/"w":128,"h":128/, '"w":128,"h":'.concat(t))).replace(/"a":{"a":0,"k":\[64,64/, '"a":{"a":0,"k":[64,'.concat(t / 2)))));
                        }
                    });
            })
    );
function d(e, t, n, i) {
    let { emojiSize: o, key: s, messageId: l } = null != i ? i : {},
        c = (0, a._r)(e, null != o ? 2 * o : void 0);
    return {
        channelId: n,
        messageId: l,
        emoji: e,
        animationId: (0, r.Z)(),
        url: c,
        key: s,
        color: t
    };
}
