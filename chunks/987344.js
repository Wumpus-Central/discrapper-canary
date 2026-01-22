n.d(t, {
    A: () => i,
});
var r = n(64700),
    l = n(967198);

function i(e) {
    r.useEffect(() => {
        let t = null;

        function n() {
            let n = l.A.getGuildId();
            n !== t && ((t = null != n ? n : null), e(null != n ? n : null, !1));
        }
        return (
            l.A.addChangeListener(n),
            () => {
                l.A.removeChangeListener(n);
            }
        );
    }, [e]);
}
