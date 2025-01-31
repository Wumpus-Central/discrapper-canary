n.d(t, {
    Vz: () => c,
    Zn: () => u,
    aB: () => d
}),
    n(757143);
var i = n(392711),
    a = n(772848),
    o = n(134432),
    s = n(963838),
    l = n(302221),
    r = n(347904);
let c = 7.5,
    d = (0, i.memoize)(
        (e, t, n, i) =>
            new Promise((e) => {
                let a = new Image();
                (a.src = t),
                    (a.crossOrigin = 'Anonymous'),
                    (a.onload = () => {
                        let t = 32 * (0, o.x_)(),
                            s = JSON.stringify(n);
                        if ((null != i && (s = (0, r.s4)(s, (0, l.oo)(i))), (a.width === t && a.height === t) || (0 === a.width && 0 === a.height))) e(JSON.parse(s));
                        else {
                            let t = (128 / a.width) * a.height;
                            e(JSON.parse((s = (s = s.replace(/"w":128,"h":128/, '"w":128,"h":'.concat(t))).replace(/"a":{"a":0,"k":\[64,64/, '"a":{"a":0,"k":[64,'.concat(t / 2)))));
                        }
                    });
            })
    );
function u(e, t, n, i) {
    let { emojiSize: o, key: l, messageId: r } = null != i ? i : {},
        c = (0, s._r)(e, null != o ? 2 * o : void 0);
    return {
        channelId: n,
        messageId: r,
        emoji: e,
        animationId: (0, a.Z)(),
        url: c,
        key: l,
        color: t
    };
}
