n.d(t, { Z: () => m });
var r = n(54381),
    i = n(473749),
    o = n(120356),
    a = n.n(o),
    s = n(454585),
    l = n(937889),
    c = n(970184),
    u = n(979372),
    d = n(870456),
    f = n(709136),
    p = n(430864);
function _(e) {
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
                            renderOptions: d.u,
                        })),
              s.Z.parse(e, !0, n));
    }, [e, t]);
}
function m(e) {
    let { content: t, className: n } = e,
        i = _(t),
        o = (0, u._)();
    return (0, r.jsx)("div", {
        className: a()(n, p.markup, f.markdownContainer, o.className),
        children: i,
    });
}
