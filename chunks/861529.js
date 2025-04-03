r.d(t, { Z: () => b });
var n = r(200651),
    l = r(192379),
    i = r(120356),
    o = r.n(i),
    a = r(454585),
    c = r(937889),
    s = r(970184),
    u = r(985184),
    p = r(870456),
    d = r(317997),
    f = r(73433);
function b(e) {
    let { content: t, className: r } = e,
        i = (function (e) {
            let t = (0, s.CJ)();
            return (0, l.useMemo)(() => {
                let r;
                return null === t
                    ? null
                    : ((r =
                          null != t.message
                              ? (0, c.rs)(t.message, p.u)
                              : (0, c.p6)({
                                    channelId: t.channelId,
                                    renderOptions: p.u
                                })),
                      a.Z.parse(e, !0, r));
            }, [e, t]);
        })(t),
        b = (0, u.Gt)();
    return (0, n.jsx)('div', {
        className: o()(r, f.markup, d.markdownContainer, { [d.containerSizedText]: b }),
        children: i
    });
}
