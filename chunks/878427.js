n.d(e, { M: () => S });
var i = n(473749),
    l = n(442837),
    s = n(857595),
    u = n(651123),
    r = n(509613),
    a = n(740492),
    o = n(313789),
    T = n(388032);
let S = (0, r.J9)(o.n.HIGH_DYNAMIC_RANGE, {
    useTitle: () => T.intl.string(T.t.nemtgW),
    useSubtitle: () => T.intl.string(T.t["O/Gjvn"]),
    useBadge: () => "beta",
    useOptions: function () {
        return i.useMemo(
            () => [
                {
                    name: T.intl.string(T.t.D5Fma9),
                    desc: T.intl.string(T.t.Qj75ck),
                    value: "no-limit",
                },
                {
                    name: T.intl.string(T.t.ldcGIH),
                    desc: T.intl.string(T.t["+V/bDk"]),
                    value: "standard",
                },
            ],
            [],
        );
    },
    usePredicate: function () {
        return (0, u.z)("HDRDynamicRangeSetting");
    },
    setValue: function (t) {
        (0, s.zH)(t);
    },
    useValue: function () {
        return (0, l.e7)([a.ZP], () => a.ZP.hdrDynamicRange);
    },
    useSearchTerms: () => ["HDR", T.intl.string(T.t["O/Gjvn"])],
});
