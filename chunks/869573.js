n.d(t, { Q: () => a });
var l = n(64700),
    r = n(166532),
    i = n(71319);
function a(e, t, n) {
    l.useEffect(() => {
        null != e && e !== r.pn.AWAITING_PURCHASE_TOKEN_AUTH && t === i.C.PENDING
            ? n(r.pn.AWAITING_PURCHASE_TOKEN_AUTH)
            : e === r.pn.AWAITING_PURCHASE_TOKEN_AUTH && t === i.C.SUCCESS && n(r.pn.REVIEW);
    }, [e, t, n]);
}
