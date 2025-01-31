l.d(n, { Z: () => p });
var t = l(200651),
    i = l(192379),
    r = l(120356),
    a = l.n(r),
    s = l(454585),
    o = l(937889),
    u = l(970184),
    c = l(985184),
    d = l(870456),
    m = l(841129),
    h = l(665162);
function p(e) {
    let { content: n, className: l } = e,
        r = (function (e) {
            let n = (0, u.CJ)();
            return (0, i.useMemo)(() => {
                let l;
                return null === n
                    ? null
                    : ((l =
                          null != n.message
                              ? (0, o.rs)(n.message, d.u)
                              : (0, o.p6)({
                                    channelId: n.channelId,
                                    renderOptions: d.u
                                })),
                      s.Z.parse(e, !0, l));
            }, [e, n]);
        })(n),
        p = (0, c.Gt)();
    return (0, t.jsx)('div', {
        className: a()(l, h.markup, m.markdownContainer, { [m.containerSizedText]: p }),
        children: r
    });
}
