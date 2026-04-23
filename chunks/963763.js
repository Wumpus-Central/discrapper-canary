a.d(t, { A: () => o });
var n = a(627968),
    l = a(64700),
    i = a(331322),
    s = a(739560),
    r = a(387265);
function o(e) {
    let { items: t, onChange: a } = e,
        [o, d] = (0, s.A)(),
        c = (0, l.useCallback)(
            (e) => {
                d(e), a?.(e);
            },
            [d, a],
        );
    return (0, n.jsx)(i.B, {
        gap: 16,
        children: t.filter((e) => isNaN(Number(e))).map((e) => (0, n.jsx)(r.A, { content: e, onChange: c }, e)),
    });
}
