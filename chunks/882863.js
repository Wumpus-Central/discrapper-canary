n.d(t, { A: () => c });
var i = n(64700),
    l = n(157559),
    a = n(845584),
    r = n(306522),
    s = n(975807),
    o = n(985018);
function c(e, t) {
    let [n, c] = i.useState(!1);
    return {
        isLoading: n,
        downloadAttachment: i.useCallback(
            async (n) => {
                if (null != e && null != t) {
                    c(!0);
                    try {
                        let { url: i } = await r.P0({ guildId: e, productId: t, attachmentId: n });
                        await (0, s.A)(i);
                    } catch (t) {
                        let e = t instanceof a.LG ? t.getAnyErrorMessage() : void 0;
                        l.A.show({ title: o.intl.string(o.t.R0RpRX), body: e ?? o.intl.string(o.t.eAn6z2) });
                    } finally {
                        c(!1);
                    }
                }
            },
            [e, t],
        ),
    };
}
