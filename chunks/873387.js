n.d(t, { g: () => s });
var r = n(149765),
    l = n(442837),
    i = n(665906),
    o = n(271383),
    a = n(496675),
    c = n(594174),
    u = n(981631);
function s(e) {
    let t = e.getGuildId(),
        n = (0, l.e7)([o.ZP, c.default], () => {
            var e, n;
            let r = c.default.getCurrentUser();
            return null != (n = null != t && null != r ? (null == (e = o.ZP.getMember(t, r.id)) ? void 0 : e.isPending) : null) && n;
        }),
        { messagesDisabled: s } = (0, l.cj)(
            [a.Z],
            () => {
                let t = e.isPrivate(),
                    l = a.Z.computePermissions(e),
                    o = r.e$(l, u.Plq.SEND_MESSAGES),
                    c = (0, i.xl)(e);
                return { messagesDisabled: n || (!t && !o) || c };
            },
            [e, n]
        );
    return !s;
}
