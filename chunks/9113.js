n.d(t, { A: () => r });
var i = n(64700),
    s = n(256311);
function r(e) {
    i.useEffect(() => {
        if (null != e)
            return (
                s.A.lockChangeLog(e),
                () => {
                    s.A.unlockChangeLog(e);
                }
            );
    }, [e]);
}
