t.d(n, {
    g: function () {
        return u;
    }
});
var i = t(149765),
    l = t(442837),
    a = t(665906),
    o = t(271383),
    d = t(496675),
    r = t(594174),
    c = t(981631);
function u(e) {
    let n = e.getGuildId(),
        t = (0, l.e7)([o.ZP, r.default], () => {
            var e, t;
            let i = r.default.getCurrentUser();
            return null !== (t = null != n && null != i ? (null === (e = o.ZP.getMember(n, i.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== t && t;
        }),
        { messagesDisabled: u } = (0, l.cj)(
            [d.Z],
            () => {
                let n = e.isPrivate(),
                    l = d.Z.computePermissions(e),
                    o = i.e$(l, c.Plq.SEND_MESSAGES),
                    r = (0, a.xl)(e);
                return { messagesDisabled: t || (!n && !o) || r };
            },
            [e, t]
        );
    return !u;
}
