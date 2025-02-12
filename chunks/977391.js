n.d(t, {
    ZP: () => u,
    aJ: () => d
}),
    n(411104),
    n(653041),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(392711),
    r = n.n(a),
    s = n(566898),
    o = n(981631),
    c = n(142637);
function d(e) {
    let { compact: t, messageGroups: n, groupRange: i, attachments: l, fontSize: a, groupSpacing: c } = e;
    if (l > n) throw Error('generateMessageSpecs: too many attachments relative to messageGroups: '.concat(n, ', ').concat(l));
    let d = a / o.yqN.FONT_SIZE_DEFAULT,
        u = t ? s.iv : s.pk,
        h = t ? s.Pb : s.XX,
        p = 0,
        m = Array(n)
            .fill(null)
            .map(() => {
                let e = r().random(1, i);
                return (p += c * d), (p += u * d), (p += (e - 1) * h * d), e;
            }),
        f = m.map((e, t) => t),
        g = [];
    for (; g.length < l; ) {
        let e = {
            width: r().random(140, 400),
            height: r().random(100, 320)
        };
        g.push([f.splice(r().random(0, f.length - 1), 1)[0], e]), (p += e.height + s.M9 * d);
    }
    return {
        messages: m,
        attachmentSpecs: g,
        totalHeight: p,
        groupSpacing: c
    };
}
function u(e) {
    let { compact: t, messages: n, attachmentSpecs: a, totalHeight: r, groupSpacing: o } = e;
    return l.useMemo(() => {
        let e = Array(n.length).fill(void 0);
        for (let [t, n] of a) e[t] = n;
        return (0, i.jsx)('div', {
            className: c.wrapper,
            style: { height: r },
            children: n.map((n, l) =>
                (0, i.jsx)(
                    s.ZP,
                    {
                        groupSpacing: o,
                        compact: t,
                        messages: n,
                        attachmentSpecs: e[l]
                    },
                    l
                )
            )
        });
    }, [t, n, a, r, o]);
}
