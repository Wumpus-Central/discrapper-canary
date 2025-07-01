(n.d(t, {
    Vz: () => c,
    Zn: () => d,
    aB: () => u
}),
    n(49124),
    n(704826),
    n(35282));
var i = n(392711),
    r = n(772848),
    l = n(134432),
    o = n(963838),
    a = n(302221),
    s = n(347904);
let c = 7.5,
    u = (0, i.memoize)(
        (e, t, n, i) =>
            new Promise((e) => {
                let r = new Image();
                ((r.src = t),
                    (r.crossOrigin = 'Anonymous'),
                    (r.onload = () => {
                        let t = 32 * (0, l.x_)(),
                            o = JSON.stringify(n);
                        if ((null != i && (o = (0, s.s4)(o, (0, a.oo)(i))), (r.width === t && r.height === t) || (0 === r.width && 0 === r.height))) e(JSON.parse(o));
                        else {
                            let t = (128 / r.width) * r.height;
                            e(JSON.parse((o = (o = o.replace(/"w":128,"h":128/, '"w":128,"h":'.concat(t))).replace(/"a":{"a":0,"k":\[64,64/, '"a":{"a":0,"k":[64,'.concat(t / 2)))));
                        }
                    }));
            })
    );
function d(e, t, n, i) {
    let { emojiSize: l, key: a, messageId: s } = null != i ? i : {},
        c = (0, o._r)(e, null != l ? 2 * l : void 0);
    return {
        channelId: n,
        messageId: s,
        emoji: e,
        animationId: (0, r.Z)(),
        url: c,
        key: a,
        color: t
    };
}
