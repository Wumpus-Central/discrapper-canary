r.d(t, { B: () => o });
var n = r(64700),
    i = r(310594);
function o(e, t, r) {
    var o = (0, n.useMemo)(
        function () {
            return new i.c(e, t, r);
        },
        [t, r],
    );
    return (
        (0, n.useEffect)(
            function () {
                o.spec = e;
            },
            [e],
        ),
        o
    );
}
