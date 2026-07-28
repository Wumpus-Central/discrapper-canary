t.d(n, { d: () => c });
var l = t(477900),
    r = t(582128),
    a = t(457501),
    i = t(78377),
    s = t(302031);
function c(e) {
    let { children: n, node: t } = e,
        c = r.useMemo(() => Array.from((0, a.t)([t])).some((e) => "link" === e.type), [t]),
        d = (0, i.p)();
    return (
        r.useEffect(() => {
            d?.setHasSpoilerEmbeds?.(c);
        }, [d, c]),
        (0, l.jsx)(s.Ay, { type: s.Ay.Types.TEXT, children: () => n })
    );
}
