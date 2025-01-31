t.d(n, { g: () => u });
var l = t(149765),
    i = t(442837),
    a = t(665906),
    o = t(271383),
    d = t(496675),
    c = t(594174),
    r = t(981631);
function u(e) {
    let n = e.getGuildId(),
        t = (0, i.e7)([o.ZP, c.default], () => {
            var e, t;
            let l = c.default.getCurrentUser();
            return null !== (t = null != n && null != l ? (null === (e = o.ZP.getMember(n, l.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== t && t;
        }),
        { messagesDisabled: u } = (0, i.cj)(
            [d.Z],
            () => {
                let n = e.isPrivate(),
                    i = d.Z.computePermissions(e),
                    o = l.e$(i, r.Plq.SEND_MESSAGES),
                    c = (0, a.xl)(e);
                return { messagesDisabled: t || (!n && !o) || c };
            },
            [e, t]
        );
    return !u;
}
