n.d(t, { g: () => s });
var r = n(149765),
    l = n(442837),
    o = n(665906),
    a = n(271383),
    i = n(496675),
    c = n(594174),
    u = n(981631);
function s(e) {
    let t = e.getGuildId(),
        n = (0, l.e7)([a.ZP, c.default], () => {
            var e, n;
            let r = c.default.getCurrentUser();
            return null != (n = null != t && null != r ? (null == (e = a.ZP.getMember(t, r.id)) ? void 0 : e.isPending) : null) && n;
        }),
        { messagesDisabled: s } = (0, l.cj)(
            [i.Z],
            () => {
                let t = e.isPrivate(),
                    l = i.Z.computePermissions(e),
                    a = r.e$(l, u.Plq.SEND_MESSAGES),
                    c = (0, o.xl)(e);
                return { messagesDisabled: n || (!t && !a) || c };
            },
            [e, n]
        );
    return !s;
}
