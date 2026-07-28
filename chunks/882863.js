n.d(e, { A: () => l });
var r = n(582128),
    a = n(157559),
    i = n(913122),
    c = n(306522),
    o = n(975807),
    s = n(375708);
function l(t, e) {
    let [n, l] = r.useState(!1);
    return {
        isLoading: n,
        downloadAttachment: r.useCallback(
            async (n) => {
                if (null != t && null != e) {
                    l(!0);
                    try {
                        let { url: r } = await c.P0({ guildId: t, productId: e, attachmentId: n });
                        await (0, o.A)(r);
                    } catch (e) {
                        let t = e instanceof i.LG ? e.getAnyErrorMessage() : void 0;
                        a.A.show({ title: s.intl.string(s.t.R0RpRX), body: t ?? s.intl.string(s.t.eAn6z2) });
                    } finally {
                        l(!1);
                    }
                }
            },
            [t, e],
        ),
    };
}
