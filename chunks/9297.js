n.d(e, { i: () => S });
var i = n(473749),
    l = n(630759),
    s = n(509613),
    u = n(970013),
    r = n(313789),
    a = n(612039),
    o = n(616211),
    T = n(388032);
let S = (0, s.k4)(r.n.VOICE_SECURITY_CATEGORY, {
    useTitle: () => T.intl.string(T.t.WWaFn5),
    useNotice: function () {
        return i.useMemo(
            () => ({
                type: u.v.INLINE_NOTICE,
                noticeType: "info",
                useText: () => T.intl.format(T.t["/6sFWa"], { helpArticle: (0, l.uV)() }),
            }),
            [],
        );
    },
    buildLayout: () => [a.E, o.n],
});
