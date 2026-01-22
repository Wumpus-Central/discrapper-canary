l.d(t, {
    b: () => o,
});
var n = l(311907),
    a = l(833336),
    s = l(696451),
    r = l(752319),
    i = l(427262);

function o(e, t) {
    var l, o;
    let c = null != (l = i.Ay.useName(e)) ? l : "",
        d =
            null !=
            (o = (0, n.bG)([a.A, r.A, s.Ay], () => {
                if (null != t) {
                    var l;
                    return null != (l = a.A.getPendingNickname()) ? l : s.Ay.getNick(t, null == e ? void 0 : e.id);
                }
                return r.A.getPendingGlobalName();
            }, [t, e]))
                ? o
                : c;
    return null != d ? d : c;
}
