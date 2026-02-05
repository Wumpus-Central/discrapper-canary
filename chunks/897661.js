l.d(t, { b: () => o });
var s = l(311907),
    a = l(833336),
    n = l(836602),
    i = l(696451),
    r = l(427262);
function o(e, t) {
    let l = r.Ay.useName(e) ?? "";
    return (
        (0, s.bG)(
            [a.A, n.A, i.Ay],
            () =>
                null != t
                    ? (a.A.getPendingNickname() ?? i.Ay.getNick(t, e?.id))
                    : n.A.getPendingChanges().pendingGlobalName,
            [t, e],
        ) ??
        l ??
        l
    );
}
