(n.d(t, {
    Vz: () => c,
    Zn: () => _,
    aB: () => f
}),
    n(49124),
    n(704826),
    n(35282));
var r = n(392711),
    i = n(772848),
    o = n(134432),
    a = n(963838),
    s = n(302221),
    l = n(347904);
let c = 7.5,
    u = 128,
    d = 32,
    f = (0, r.memoize)(
        (e, t, n, r) =>
            new Promise((e) => {
                let i = new Image();
                ((i.src = t),
                    (i.crossOrigin = 'Anonymous'),
                    (i.onload = () => {
                        let t = d * (0, o.x_)(),
                            a = JSON.stringify(n);
                        if ((null != r && (a = (0, l.s4)(a, (0, s.oo)(r))), (i.width === t && i.height === t) || (0 === i.width && 0 === i.height))) e(JSON.parse(a));
                        else {
                            let t = (u / i.width) * i.height;
                            e(JSON.parse((a = (a = a.replace(/"w":128,"h":128/, '"w":128,"h":'.concat(t))).replace(/"a":{"a":0,"k":\[64,64/, '"a":{"a":0,"k":[64,'.concat(t / 2)))));
                        }
                    }));
            })
    );
function _(e, t, n, r) {
    let { emojiSize: o, key: s, messageId: l } = null != r ? r : {},
        c = null != o ? 2 * o : void 0,
        u = (0, a._r)(e, c);
    return {
        channelId: n,
        messageId: l,
        emoji: e,
        animationId: (0, i.Z)(),
        url: u,
        key: s,
        color: t
    };
}
