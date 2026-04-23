n.d(t, { Q: () => s });
var i = n(64700),
    r = n(166532),
    l = n(293700);
function s(e, t, n) {
    i.useEffect(() => {
        null != e && e !== r.pn.AWAITING_PURCHASE_TOKEN_AUTH && t === l.C.PENDING
            ? n(r.pn.AWAITING_PURCHASE_TOKEN_AUTH)
            : e === r.pn.AWAITING_PURCHASE_TOKEN_AUTH && t === l.C.SUCCESS && n(r.pn.REVIEW);
    }, [e, t, n]);
}
