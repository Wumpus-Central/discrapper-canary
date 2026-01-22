n.d(t, { A: () => o }), n(896048);
var a = n(627968),
    l = n(64700),
    i = n(158954),
    r = n(739560),
    s = n(387265);
function o(e) {
    let { items: t, onChange: n } = e,
        [o, c] = (0, r.A)(),
        d = (0, l.useCallback)(
            (e) => {
                c(e), null == n || n(e);
            },
            [c, n],
        );
    return (0, a.jsx)(i.BJc, {
        gap: 16,
        children: t
            .filter((e) => isNaN(Number(e)))
            .map((e) =>
                (0, a.jsx)(
                    s.A,
                    {
                        content: e,
                        onChange: d,
                    },
                    e,
                ),
            ),
    });
}
