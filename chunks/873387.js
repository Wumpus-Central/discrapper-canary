n.d(t, { g: () => u });
var r = n(149765),
    i = n(442837),
    l = n(665906),
    a = n(271383),
    o = n(496675),
    s = n(594174),
    c = n(981631);
function u(e) {
    let t = e.getGuildId(),
        n = (0, i.e7)([a.ZP, s.default], () => {
            var e, n;
            let r = s.default.getCurrentUser();
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
        { messagesDisabled: u } = (0, i.cj)([o.Z], () => {
            let t = e.isPrivate(),
                i = o.Z.computePermissions(e),
                a = r.e$(i, c.Plq.SEND_MESSAGES),
                s = (0, l.xl)(e);
            return { messagesDisabled: n || (!t && !a) || s };
        }, [e, n]);
    return !u;
}
