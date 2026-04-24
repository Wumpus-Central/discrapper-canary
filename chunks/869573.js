n.d(t, { Q: () => i });
var l = n(64700),
    r = n(166532),
    u = n(293700);
function i(e, t, n) {
    l.useEffect(() => {
        null != e && e !== r.pn.AWAITING_PURCHASE_TOKEN_AUTH && t === u.C.PENDING
            ? n(r.pn.AWAITING_PURCHASE_TOKEN_AUTH)
            : e === r.pn.AWAITING_PURCHASE_TOKEN_AUTH && t === u.C.SUCCESS && n(r.pn.REVIEW);
    }, [e, t, n]);
}
