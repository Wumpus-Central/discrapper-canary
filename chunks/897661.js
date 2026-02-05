s.d(t, { b: () => r });
var l = s(311907),
    a = s(836602),
    n = s(696451),
    i = s(427262);
function r(e, t) {
    let s = i.Ay.useName(e);
    return (
        (0, l.bG)([a.A, n.Ay], () => {
            let s = a.A.getPendingChanges(t);
            return null != t ? (s.pendingNickname ?? n.Ay.getNick(t, e?.id)) : s.pendingGlobalName;
        }, [t, e]) ??
        s ??
        ""
    );
}
