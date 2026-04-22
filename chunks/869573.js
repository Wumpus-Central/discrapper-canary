n.d(t, { Q: () => r });
var l = n(64700),
    i = n(166532),
    a = n(293700);
function r(e, t, n) {
    l.useEffect(() => {
        null != e && e !== i.pn.AWAITING_PURCHASE_TOKEN_AUTH && t === a.C.PENDING
            ? n(i.pn.AWAITING_PURCHASE_TOKEN_AUTH)
            : e === i.pn.AWAITING_PURCHASE_TOKEN_AUTH && t === a.C.SUCCESS && n(i.pn.REVIEW);
    }, [e, t, n]);
}
