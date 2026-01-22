n.d(t, {
    Q: () => s,
});
var r = n(64700),
    i = n(166532),
    a = n(293700);

function s(e, t, n) {
    r.useEffect(() => {
        null != e && e !== i.pn.AWAITING_PURCHASE_TOKEN_AUTH && t === a.C.PENDING
            ? n(i.pn.AWAITING_PURCHASE_TOKEN_AUTH)
            : e === i.pn.AWAITING_PURCHASE_TOKEN_AUTH && t === a.C.SUCCESS && n(i.pn.REVIEW);
    }, [e, t, n]);
}
