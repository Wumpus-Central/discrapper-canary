n.d(t, {
    A: () => a,
});
var r = n(64700),
    i = n(256311);

function a(e) {
    r.useEffect(() => {
        if (null != e)
            return (
                i.A.lockChangeLog(e),
                () => {
                    i.A.unlockChangeLog(e);
                }
            );
    }, [e]);
}
