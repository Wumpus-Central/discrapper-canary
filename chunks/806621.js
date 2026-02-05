n.d(t, { r: () => d });
var i = n(311907),
    l = n(380335),
    a = n(74114),
    s = n(320501),
    r = n(994500),
    o = n(287809),
    c = n(652215);
function d(e) {
    let t = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot),
        n = t ? e.getRecipientId() : null,
        d = (0, a.l)(e.id);
    return (0, i.bG)([s.A, l.A, r.A, o.default], () => {
        if (
            null != d ||
            !t ||
            l.A.isMessageRequest(e.id) ||
            (null != n && r.A.getRelationshipType(n) === c.eA$.BLOCKED)
        )
            return !1;
        if (null != n) {
            let e = o.default.getUser(n);
            if (null != e && e.hasFlag(c.nhx.PROVISIONAL_ACCOUNT)) return !1;
        }
        let i = s.A.getMessages(e.id);
        return i.ready && !i.hasMoreBefore && !i.hasMoreAfter && i.length < 25 && !s.A.hasCurrentUserSentMessage(e.id);
    }, [d, t, e.id, n]);
}
