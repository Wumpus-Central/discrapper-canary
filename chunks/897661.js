a.d(t, { b: () => i });
var l = a(311907),
    n = a(836602),
    s = a(696451),
    r = a(427262);
function i(e, t) {
    let a = r.Ay.useName(e);
    return (
        (0, l.bG)([n.A, s.Ay], () => {
            let a = n.A.getPendingChanges(t);
            return null != t ? (a.pendingNickname ?? s.Ay.getNick(t, e?.id)) : a.pendingGlobalName;
        }, [t, e]) ??
        a ??
        ""
    );
}
