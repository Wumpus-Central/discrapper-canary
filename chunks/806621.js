n.d(t, { r: () => u });
var i = n(64700),
    l = n(311907),
    a = n(380335),
    s = n(74114),
    r = n(320501),
    o = n(994500),
    c = n(287809),
    d = n(652215);
function u(e) {
    let t = (0, i.useRef)(!1),
        n = (0, i.useRef)(e.id),
        u = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot),
        h = u ? e.getRecipientId() : null,
        m = (0, s.l)(e.id);
    return (0, l.bG)([r.A, a.A, o.A, c.default], () => {
        if (
            (n.current !== e.id && ((t.current = !1), (n.current = e.id)),
            null != m ||
                !u ||
                a.A.isMessageRequest(e.id) ||
                (null != h && o.A.getRelationshipType(h) === d.eA$.BLOCKED))
        )
            return !1;
        if (null != h) {
            let e = c.default.getUser(h);
            if (null != e && e.hasFlag(d.nhx.PROVISIONAL_ACCOUNT)) return !1;
        }
        let i = r.A.getMessages(e.id),
            l = !i.hasMoreBefore && !i.hasMoreAfter && i.length < 25,
            s = r.A.hasCurrentUserSentWaveBlockingMessage(e.id),
            A = (i.ready || t.current) && l && !s;
        return (t.current = A), A;
    }, [m, u, e.id, h]);
}
