n.d(t, {
    Vz: () => c,
    Zn: () => p,
    aB: () => f,
}),
    n(49124),
    n(704826),
    n(35282);
var r = n(392711),
    i = n(772848),
    a = n(134432),
    o = n(963838),
    s = n(302221),
    l = n(347904);
let c = 7.5,
    u = 128,
    d = 32,
    f = (0, r.memoize)(
        (e, t, n, r) =>
            new Promise((e) => {
                let i = new Image();
                (i.src = t),
                    (i.crossOrigin = "Anonymous"),
                    (i.onload = () => {
                        let t = d * (0, a.x_)(),
                            o = JSON.stringify(n);
                        if (
                            (null != r && (o = (0, l.s4)(o, (0, s.oo)(r))),
                            (i.width === t && i.height === t) || (0 === i.width && 0 === i.height))
                        )
                            e(JSON.parse(o));
                        else {
                            let t = (u / i.width) * i.height;
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
function p(e, t, n, r) {
    let { emojiSize: a, key: s, messageId: l } = null != r ? r : {},
        c = null != a ? 2 * a : void 0,
        u = (0, o._r)(e, c);
    return {
        channelId: n,
        messageId: l,
        emoji: e,
        animationId: (0, i.Z)(),
        url: u,
        key: s,
        color: t,
    };
}
