n.d(t, {
    ZP: function () {
        return u;
    },
    aJ: function () {
        return d;
    }
}),
    n(411104),
    n(653041),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(392711),
    a = n.n(r),
    s = n(566898),
    o = n(981631),
    c = n(679905);
function d(e) {
    let { compact: t, messageGroups: n, groupRange: i, attachments: l, fontSize: r, groupSpacing: c } = e;
    if (l > n) throw Error('generateMessageSpecs: too many attachments relative to messageGroups: '.concat(n, ', ').concat(l));
    let d = r / o.yqN.FONT_SIZE_DEFAULT,
        u = t ? s.iv : s.pk,
        h = t ? s.Pb : s.XX,
        p = 0,
        m = Array(n)
            .fill(null)
            .map(() => {
                let e = a().random(1, i);
                return (p += c * d + u * d + (e - 1) * h * d), e;
            }),
        f = m.map((e, t) => t),
        g = [];
    for (; g.length < l; ) {
        let e = {
            width: a().random(140, 400),
            height: a().random(100, 320)
        };
        g.push([f.splice(a().random(0, f.length - 1), 1)[0], e]), (p += e.height + s.M9 * d);
    }
    return {
        messages: m,
        attachmentSpecs: g,
        totalHeight: p,
        groupSpacing: c
    };
}
function u(e) {
    let { compact: t, messages: n, attachmentSpecs: r, totalHeight: a, groupSpacing: o } = e;
    return l.useMemo(() => {
        let e = Array(n.length).fill(void 0);
        for (let [t, n] of r) e[t] = n;
        return (0, i.jsx)('div', {
            className: c.wrapper,
            style: { height: a },
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
    }, [t, n, r, a, o]);
}
