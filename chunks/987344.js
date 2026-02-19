"use strict";
n.d(t, { A: () => l });
var i = n(64700),
    s = n(967198);
function l(e) {
    i.useEffect(() => {
        let t = null;
        function n() {
            let n = s.A.getGuildId();
            n !== t && ((t = n ?? null), e(n ?? null, !1));
        }
        return (
            s.A.addChangeListener(n),
            () => {
                s.A.removeChangeListener(n);
            }
        );
    }, [e]);
}
