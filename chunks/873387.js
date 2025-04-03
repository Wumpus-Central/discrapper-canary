n.d(t, { g: () => s });
var r = n(149765),
    l = n(442837),
    o = n(665906),
    i = n(271383),
    a = n(496675),
    c = n(594174),
    u = n(981631);
function s(e) {
    let t = e.getGuildId(),
        n = (0, l.e7)([i.ZP, c.default], () => {
            var e, n;
            let r = c.default.getCurrentUser();
            return null != (n = null != t && null != r ? (null == (e = i.ZP.getMember(t, r.id)) ? void 0 : e.isPending) : null) && n;
        }),
        { messagesDisabled: s } = (0, l.cj)(
            [a.Z],
            () => {
                let t = e.isPrivate(),
                    l = a.Z.computePermissions(e),
                    i = r.e$(l, u.Plq.SEND_MESSAGES),
                    c = (0, o.xl)(e);
                return { messagesDisabled: n || (!t && !i) || c };
            },
            [e, n]
        );
    return !s;
}
