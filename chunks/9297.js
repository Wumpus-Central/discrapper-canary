n.d(e, { i: () => T });
var i = n(473749),
    l = n(630759),
    s = n(509613),
    u = n(970013),
    r = n(313789),
    a = n(612039),
    o = n(616211),
    S = n(388032);
let T = (0, s.k4)(r.n.VOICE_SECURITY_CATEGORY, {
    useTitle: () => S.intl.string(S.t.WWaFn5),
    useNotice: function () {
        return i.useMemo(
            () => ({
                type: u.v.INLINE_NOTICE,
                noticeType: "info",
                useText: () => S.intl.format(S.t["/6sFWa"], { helpArticle: (0, l.uV)() }),
            }),
            [],
        );
    },
    buildLayout: () => [a.E, o.n],
});
