n.d(t, { Z: () => h });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(454585),
    l = n(937889),
    c = n(970184),
    u = n(985184),
    d = n(870456),
    f = n(317997),
    _ = n(73433);
function p(e) {
    let t = (0, c.CJ)();
    return (0, i.useMemo)(() => {
        let n;
        return null === t
            ? null
            : ((n =
                  null != t.message
                      ? (0, l.rs)(t.message, d.u)
                      : (0, l.p6)({
                            channelId: t.channelId,
                            renderOptions: d.u
                        })),
              s.Z.parse(e, !0, n));
    }, [e, t]);
}
function h(e) {
    let { content: t, className: n } = e,
        i = p(t),
        a = (0, u.Gt)();
    return (0, r.jsx)('div', {
        className: o()(n, _.markup, f.markdownContainer, { [f.containerSizedText]: a }),
        children: i
    });
}
