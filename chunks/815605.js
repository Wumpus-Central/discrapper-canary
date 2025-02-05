i.d(t, {
    Vz: () => c,
    Zn: () => u,
    aB: () => d
}),
    i(757143);
var n = i(392711),
    a = i(772848),
    o = i(134432),
    s = i(963838),
    l = i(302221),
    r = i(347904);
let c = 7.5,
    d = (0, n.memoize)(
        (e, t, i, n) =>
            new Promise((e) => {
                let a = new Image();
                (a.src = t),
                    (a.crossOrigin = 'Anonymous'),
                    (a.onload = () => {
                        let t = 32 * (0, o.x_)(),
                            s = JSON.stringify(i);
                        if ((null != n && (s = (0, r.s4)(s, (0, l.oo)(n))), (a.width === t && a.height === t) || (0 === a.width && 0 === a.height))) e(JSON.parse(s));
                        else {
                            let t = (128 / a.width) * a.height;
                            e(JSON.parse((s = (s = s.replace(/"w":128,"h":128/, '"w":128,"h":'.concat(t))).replace(/"a":{"a":0,"k":\[64,64/, '"a":{"a":0,"k":[64,'.concat(t / 2)))));
                        }
                    });
            })
    );
function u(e, t, i, n) {
    let { emojiSize: o, key: l, messageId: r } = null != n ? n : {},
        c = (0, s._r)(e, null != o ? 2 * o : void 0);
    return {
        channelId: i,
        messageId: r,
        emoji: e,
        animationId: (0, a.Z)(),
        url: c,
        key: l,
        color: t
    };
}
