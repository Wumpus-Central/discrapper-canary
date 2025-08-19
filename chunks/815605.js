n.d(t, {
    Vz: () => c,
    Zn: () => d,
    aB: () => u,
}),
    n(49124),
    n(704826),
    n(35282);
var i = n(392711),
    l = n(772848),
    r = n(134432),
    o = n(963838),
    a = n(302221),
    s = n(347904);
let c = 7.5,
    u = (0, i.memoize)(
        (e, t, n, i) =>
            new Promise((e) => {
                let l = new Image();
                (l.src = t),
                    (l.crossOrigin = "Anonymous"),
                    (l.onload = () => {
                        let t = 32 * (0, r.x_)(),
                            o = JSON.stringify(n);
                        if (
                            (null != i && (o = (0, s.s4)(o, (0, a.oo)(i))),
                            (l.width === t && l.height === t) || (0 === l.width && 0 === l.height))
                        )
                            e(JSON.parse(o));
                        else {
                            let t = (128 / l.width) * l.height;
                            e(
                                JSON.parse(
                                    (o = (o = o.replace(/"w":128,"h":128/, '"w":128,"h":'.concat(t))).replace(
                                        /"a":{"a":0,"k":\[64,64/,
                                        '"a":{"a":0,"k":[64,'.concat(t / 2),
                                    )),
                                ),
                            );
                        }
                    });
            }),
    );
function d(e, t, n, i) {
    let { emojiSize: r, key: a, messageId: s } = null != i ? i : {},
        c = (0, o._r)(e, null != r ? 2 * r : void 0);
    return {
        channelId: n,
        messageId: s,
        emoji: e,
        animationId: (0, l.Z)(),
        url: c,
        key: a,
        color: t,
    };
}
