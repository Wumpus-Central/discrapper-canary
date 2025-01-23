n.d(t, {
    Vz: function () {
        return c;
    },
    Zn: function () {
        return u;
    },
    aB: function () {
        return d;
    }
}),
    n(757143);
var i = n(392711),
    o = n(772848),
    a = n(134432),
    l = n(963838),
    s = n(302221),
    r = n(347904);
let c = 7.5,
    d = (0, i.memoize)(
        (e, t, n, i) =>
            new Promise((e) => {
                let o = new Image();
                (o.src = t),
                    (o.crossOrigin = 'Anonymous'),
                    (o.onload = () => {
                        let t = 32 * (0, a.x_)(),
                            l = JSON.stringify(n);
                        if ((null != i && (l = (0, r.s4)(l, (0, s.oo)(i))), (o.width === t && o.height === t) || (0 === o.width && 0 === o.height))) e(JSON.parse(l));
                        else {
                            let t = (128 / o.width) * o.height;
                            e(JSON.parse((l = (l = l.replace(/"w":128,"h":128/, '"w":128,"h":'.concat(t))).replace(/"a":{"a":0,"k":\[64,64/, '"a":{"a":0,"k":[64,'.concat(t / 2)))));
                        }
                    });
            })
    );
function u(e, t, n, i) {
    let { emojiSize: a, key: s, messageId: r } = null != i ? i : {},
        c = (0, l._r)(e, null != a ? 2 * a : void 0);
    return {
        channelId: n,
        messageId: r,
        emoji: e,
        animationId: (0, o.Z)(),
        url: c,
        key: s,
        color: t
    };
}
