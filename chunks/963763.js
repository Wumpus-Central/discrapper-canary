n.d(t, { A: () => o });
var a = n(627968),
    s = n(64700),
    i = n(158954),
    l = n(739560),
    r = n(387265);
function o(e) {
    let { items: t, onChange: n } = e,
        [o, d] = (0, l.A)(),
        c = (0, s.useCallback)(
            (e) => {
                d(e), n?.(e);
            },
            [d, n],
        );
    return (0, a.jsx)(i.BJc, {
        gap: 16,
        children: t.filter((e) => isNaN(Number(e))).map((e) => (0, a.jsx)(r.A, { content: e, onChange: c }, e)),
    });
}
