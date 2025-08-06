n.d(t, { g: () => u });
var r = n(149765),
    i = n(442837),
    o = n(665906),
    a = n(271383),
    s = n(496675),
    l = n(594174),
    c = n(981631);
function u(e) {
    let t = e.getGuildId(),
        n = (0, i.e7)([a.ZP, l.default], () => {
            var e, n;
            let r = l.default.getCurrentUser();
            return (
                null !=
                    (n =
                        null != t && null != r
                            ? null == (e = a.ZP.getMember(t, r.id))
                                ? void 0
                                : e.isPending
                            : null) && n
            );
        }),
        { messagesDisabled: u } = (0, i.cj)([s.Z], () => {
            let t = e.isPrivate(),
                i = s.Z.computePermissions(e),
                a = r.e$(i, c.Plq.SEND_MESSAGES),
                l = (0, o.xl)(e);
            return { messagesDisabled: n || (!t && !a) || l };
        }, [e, n]);
    return !u;
}
