t.d(n, { d: () => c });
var l = t(477900),
    r = t(582128),
    a = t(978864),
    s = t(78377),
    i = t(302031);
function c(e) {
    let { children: n, node: t } = e,
        c = r.useMemo(() => Array.from((0, a.t)([t])).some((e) => "link" === e.type), [t]),
        d = (0, s.p)();
    return (
        r.useEffect(() => {
            d?.setHasSpoilerEmbeds?.(c);
        }, [d, c]),
        (0, l.jsx)(i.Ay, { type: i.Ay.Types.TEXT, children: () => n })
    );
}
