n.d(t, {
    ZP: () => d,
    aJ: () => u,
}),
    n(415506),
    n(539854),
    n(388685);
var i = n(951288),
    r = n(647438),
    l = n(392711),
    a = n.n(l),
    o = n(566898),
    s = n(981631),
    c = n(835025);
function u(e) {
    let { compact: t, messageGroups: n, groupRange: i, attachments: r, fontSize: l, groupSpacing: c } = e;
    if (r > n)
        throw Error("generateMessageSpecs: too many attachments relative to messageGroups: ".concat(n, ", ").concat(r));
    let u = l / s.yqN.FONT_SIZE_DEFAULT,
        d = t ? o.iv : o.pk,
        p = t ? o.Pb : o.XX,
        h = 0,
        f = Array(n)
            .fill(null)
            .map(() => {
                let e = a().random(1, i);
                return (h += c * u), (h += d * u), (h += (e - 1) * p * u), e;
            }),
        m = f.map((e, t) => t),
        g = [];
    for (; g.length < r; ) {
        let e = {
            width: a().random(140, 400),
            height: a().random(100, 320),
        };
        g.push([m.splice(a().random(0, m.length - 1), 1)[0], e]), (h += e.height + o.M9 * u);
    }
    return {
        messages: f,
        attachmentSpecs: g,
        totalHeight: h,
        groupSpacing: c,
    };
}
function d(e) {
    let { compact: t, messages: n, attachmentSpecs: l, totalHeight: a, groupSpacing: s } = e;
    return r.useMemo(() => {
        let e = Array(n.length).fill(void 0);
        for (let [t, n] of l) e[t] = n;
        return (0, i.jsx)("div", {
            className: c.wrapper,
            style: { height: a },
            children: n.map((n, r) =>
                (0, i.jsx)(
                    o.ZP,
                    {
                        groupSpacing: s,
                        compact: t,
                        messages: n,
                        attachmentSpecs: e[r],
                    },
                    r,
                ),
            ),
        });
    }, [t, n, l, a, s]);
}
