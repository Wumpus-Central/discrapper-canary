(n.d(t, {
    ZP: () => f,
    aJ: () => d
}),
    n(415506),
    n(539854),
    n(388685));
var r = n(255367),
    i = n(73800),
    a = n(392711),
    o = n.n(a),
    s = n(566898),
    l = n(981631),
    c = n(189271);
function u() {
    return {
        width: o().random(140, 400),
        height: o().random(100, 320)
    };
}
function d(e) {
    let { compact: t, messageGroups: n, groupRange: r, attachments: i, fontSize: a, groupSpacing: c } = e;
    if (i > n) throw Error('generateMessageSpecs: too many attachments relative to messageGroups: '.concat(n, ', ').concat(i));
    let d = a / l.yqN.FONT_SIZE_DEFAULT,
        f = t ? s.iv : s.pk,
        _ = t ? s.Pb : s.XX,
        p = 0,
        h = Array(n)
            .fill(null)
            .map(() => {
                let e = o().random(1, r);
                return ((p += c * d), (p += f * d), (p += (e - 1) * _ * d), e);
            }),
        m = h.map((e, t) => t),
        g = [];
    for (; g.length < i; ) {
        let e = u();
        (g.push([m.splice(o().random(0, m.length - 1), 1)[0], e]), (p += e.height + s.M9 * d));
    }
    return {
        messages: h,
        attachmentSpecs: g,
        totalHeight: p,
        groupSpacing: c
    };
}
function f(e) {
    let { compact: t, messages: n, attachmentSpecs: a, totalHeight: o, groupSpacing: l } = e;
    return i.useMemo(() => {
        let e = Array(n.length).fill(void 0);
        for (let [t, n] of a) e[t] = n;
        return (0, r.jsx)('div', {
            className: c.wrapper,
            style: { height: o },
            children: n.map((n, i) =>
                (0, r.jsx)(
                    s.ZP,
                    {
                        groupSpacing: l,
                        compact: t,
                        messages: n,
                        attachmentSpecs: e[i]
                    },
                    i
                )
            )
        });
    }, [t, n, a, o, l]);
}
