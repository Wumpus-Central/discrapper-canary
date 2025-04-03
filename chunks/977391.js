n.d(t, {
    ZP: () => d,
    aJ: () => u
}),
    n(411104),
    n(653041),
    n(47120);
var r = n(200651),
    i = n(192379),
    l = n(392711),
    o = n.n(l),
    a = n(566898),
    s = n(981631),
    c = n(189271);
function u(e) {
    let { compact: t, messageGroups: n, groupRange: r, attachments: i, fontSize: l, groupSpacing: c } = e;
    if (i > n) throw Error('generateMessageSpecs: too many attachments relative to messageGroups: '.concat(n, ', ').concat(i));
    let u = l / s.yqN.FONT_SIZE_DEFAULT,
        d = t ? a.iv : a.pk,
        p = t ? a.Pb : a.XX,
        h = 0,
        f = Array(n)
            .fill(null)
            .map(() => {
                let e = o().random(1, r);
                return (h += c * u), (h += d * u), (h += (e - 1) * p * u), e;
            }),
        m = f.map((e, t) => t),
        g = [];
    for (; g.length < i; ) {
        let e = {
            width: o().random(140, 400),
            height: o().random(100, 320)
        };
        g.push([m.splice(o().random(0, m.length - 1), 1)[0], e]), (h += e.height + a.M9 * u);
    }
    return {
        messages: f,
        attachmentSpecs: g,
        totalHeight: h,
        groupSpacing: c
    };
}
function d(e) {
    let { compact: t, messages: n, attachmentSpecs: l, totalHeight: o, groupSpacing: s } = e;
    return i.useMemo(() => {
        let e = Array(n.length).fill(void 0);
        for (let [t, n] of l) e[t] = n;
        return (0, r.jsx)('div', {
            className: c.wrapper,
            style: { height: o },
            children: n.map((n, i) =>
                (0, r.jsx)(
                    a.ZP,
                    {
                        groupSpacing: s,
                        compact: t,
                        messages: n,
                        attachmentSpecs: e[i]
                    },
                    i
                )
            )
        });
    }, [t, n, l, o, s]);
}
