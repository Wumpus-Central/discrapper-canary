l.d(t, {
    b: () => i,
});
var n = l(311907),
    r = l(833336),
    s = l(836602),
    a = l(696451),
    o = l(427262);

function i(e, t) {
    var l, i;
    let c = null != (l = o.Ay.useName(e)) ? l : "",
        d =
            null !=
            (i = (0, n.bG)([r.A, s.A, a.Ay], () => {
                if (null != t) {
                    var l;
                    return null != (l = r.A.getPendingNickname()) ? l : a.Ay.getNick(t, null == e ? void 0 : e.id);
                }
                return s.A.getPendingChanges().pendingGlobalName;
            }, [t, e]))
                ? i
                : c;
    return null != d ? d : c;
}
