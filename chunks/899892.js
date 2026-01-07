n.d(t, { Z: () => u });
var r = n(473749),
    i = n(442837),
    o = n(899667),
    l = n(317169),
    a = n(556970),
    s = n(388032);
function u(e, t) {
    let { spent: n } = (0, l.Z)(e),
        u = (0, i.e7)([o.Z], () => o.Z.getAppliedGuildBoostsForGuild(e), [e]),
        c =
            n -
            r.useMemo(() => {
                var e, t, n;
                return null !=
                    (n =
                        null == u ||
                        null == (t = u.filter) ||
                        null == (e = t.call(u, (e) => !e.ended && null == e.endsAt))
                            ? void 0
                            : e.length)
                    ? n
                    : 0;
            }, [u]);
    return r.useMemo(
        () =>
            c <= 0
                ? {
                      shouldShow: !1,
                      title: "",
                      description: "",
                      requiredBoostCount: 0,
                  }
                : {
                      shouldShow: !0,
                      title: s.intl.string(a.default.n5hQhc),
                      description: s.intl.formatToPlainString(a.default.iAaAiG, {
                          boostCount: c,
                          perksString: t.join(", "),
                      }),
                      requiredBoostCount: c,
                  },
        [c, t],
    );
}
