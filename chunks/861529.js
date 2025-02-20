r.d(t, { Z: () => f });
var n = r(200651),
    l = r(192379),
    i = r(120356),
    o = r.n(i),
    a = r(454585),
    c = r(937889),
    s = r(970184),
    u = r(985184),
    d = r(870456),
    p = r(483758),
    b = r(368365);
function f(e) {
    let { content: t, className: r } = e,
        i = (function (e) {
            let t = (0, s.CJ)();
            return (0, l.useMemo)(() => {
                let r;
                return null === t
                    ? null
                    : ((r =
                          null != t.message
                              ? (0, c.rs)(t.message, d.u)
                              : (0, c.p6)({
                                    channelId: t.channelId,
                                    renderOptions: d.u
                                })),
                      a.Z.parse(e, !0, r));
            }, [e, t]);
        })(t),
        f = (0, u.Gt)();
    return (0, n.jsx)('div', {
        className: o()(r, b.markup, p.markdownContainer, { [p.containerSizedText]: f }),
        children: i
    });
}
