n.d(t, {
    ZP: () => d,
    aJ: () => u,
}),
    n(415506),
    n(539854),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(392711),
    a = n.n(l),
    o = n(566898),
    s = n(981631),
    c = n(835025);
function u(e) {
    let { compact: t, messageGroups: n, groupRange: r, attachments: i, fontSize: l, groupSpacing: c } = e;
    if (i > n)
        throw Error("generateMessageSpecs: too many attachments relative to messageGroups: ".concat(n, ", ").concat(i));
    let u = l / s.yqN.FONT_SIZE_DEFAULT,
        d = t ? o.iv : o.pk,
        p = t ? o.Pb : o.XX,
        f = 0,
        h = Array(n)
            .fill(null)
            .map(() => {
                let e = a().random(1, r);
                return (f += c * u), (f += d * u), (f += (e - 1) * p * u), e;
            }),
        m = h.map((e, t) => t),
        g = [];
    for (; g.length < i; ) {
        let e = {
            width: a().random(140, 400),
            height: a().random(100, 320),
        };
        g.push([m.splice(a().random(0, m.length - 1), 1)[0], e]), (f += e.height + o.M9 * u);
    }
    return {
        messages: h,
        attachmentSpecs: g,
        totalHeight: f,
        groupSpacing: c,
    };
}
function d(e) {
    let { compact: t, messages: n, attachmentSpecs: l, totalHeight: a, groupSpacing: s } = e;
    return i.useMemo(() => {
        let e = Array(n.length).fill(void 0);
        for (let [t, n] of l) e[t] = n;
        return (0, r.jsx)("div", {
            className: c.wrapper,
            style: { height: a },
            children: n.map((n, i) =>
                (0, r.jsx)(
                    o.ZP,
                    {
                        groupSpacing: s,
                        compact: t,
                        messages: n,
                        attachmentSpecs: e[i],
                    },
                    i,
                ),
            ),
        });
    }, [t, n, l, a, s]);
}
