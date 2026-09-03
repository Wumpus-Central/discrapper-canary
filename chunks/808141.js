r.d(t, { w: () => i });
var n = r(361854);
function i(e, t) {
    (0, n.N)(() => {
        if (e && e.ref && t)
            return (
                (e.ref.current = t.current),
                () => {
                    e.ref && (e.ref.current = null);
                }
            );
    });
}
