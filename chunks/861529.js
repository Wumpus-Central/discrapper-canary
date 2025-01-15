t.d(n, {
    Z: function () {
        return p;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(120356),
    a = t.n(r),
    o = t(454585),
    s = t(937889),
    c = t(970184),
    u = t(985184),
    d = t(870456),
    m = t(423786),
    f = t(426953);
function p(e) {
    let { content: n, className: t } = e,
        r = (function (e) {
            let n = (0, c.CJ)();
            return (0, i.useMemo)(() => {
                let t;
                return null === n
                    ? null
                    : ((t =
                          null != n.message
                              ? (0, s.rs)(n.message, d.u)
                              : (0, s.p6)({
                                    channelId: n.channelId,
                                    renderOptions: d.u
                                })),
                      o.Z.parse(e, !0, t));
            }, [e, n]);
        })(n),
        p = (0, u.Gt)();
    return (0, l.jsx)('div', {
        className: a()(t, f.markup, m.markdownContainer, { [m.containerSizedText]: p }),
        children: r
    });
}
