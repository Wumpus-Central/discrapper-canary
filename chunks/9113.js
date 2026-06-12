u.d(n, { A: () => a });
var e = u(64700),
    s = u(256311);
function a(c) {
    e.useEffect(() => {
        if (null != c)
            return (
                s.A.lockChangeLog(c),
                () => {
                    s.A.unlockChangeLog(c);
                }
            );
    }, [c]);
}
