n.d(t, { g: () => u });
var r = n(149765),
    i = n(442837),
    a = n(665906),
    o = n(271383),
    s = n(496675),
    l = n(594174),
    c = n(981631);
function u(e) {
    let t = e.getGuildId(),
        n = (0, i.e7)([o.ZP, l.default], () => {
            var e, n;
            let r = l.default.getCurrentUser();
            return (
                null !=
                    (n =
                        null != t && null != r
                            ? null == (e = o.ZP.getMember(t, r.id))
                                ? void 0
                                : e.isPending
                            : null) && n
            );
        }),
        { messagesDisabled: u } = (0, i.cj)([s.Z], () => {
            let t = e.isPrivate(),
                i = s.Z.computePermissions(e),
                o = r.e$(i, c.Plq.SEND_MESSAGES),
                l = (0, a.xl)(e);
            return { messagesDisabled: n || (!t && !o) || l };
        }, [e, n]);
    return !u;
}
