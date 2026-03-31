n.d(t, { A: () => s });
var i = n(64700),
    l = n(967198);
function s(e) {
    i.useEffect(() => {
        let t = null;
        function n() {
            let n = l.A.getGuildId();
            n !== t && ((t = n ?? null), e(n ?? null, !1));
        }
        return (
            l.A.addChangeListener(n),
            () => {
                l.A.removeChangeListener(n);
            }
        );
    }, [e]);
}
