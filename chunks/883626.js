n.d(e, { M: () => f });
var i = n(54381),
    l = n(473749),
    s = n(481060),
    u = n(493683),
    r = n(915009),
    a = n(631885),
    o = n(509613),
    T = n(970013),
    S = n(313789),
    c = n(997950),
    E = n(639814),
    d = n(342386),
    g = n(625245),
    _ = n(769851),
    I = n(627531),
    N = n(347854),
    A = n(696467),
    O = n(388032),
    C = n(517319);
let f = (0, o.k4)(S.n.CONTENT_AND_SOCIAL_PERMISSIONS_CATEGORY, {
    useTitle: () => O.intl.string(O.t["y62Z/d"]),
    useNotice: () => {
        let t = (0, E.is)(),
            e = (0, r.LN)(),
            n = (0, a.ZM)(),
            o = l.useCallback(() => {
                (0, d.default)(), u.Z.openPrivateChannel({ recipientIds: n });
            }, [n]);
        return l.useMemo(() => {
            if (t === c.Th && e)
                return {
                    type: T.v.INLINE_NOTICE,
                    noticeType: "info",
                    useText: () =>
                        O.intl.format(C.default.i284fU, {
                            hook: (t, e) =>
                                (0, i.jsx)(
                                    s.Anchor,
                                    {
                                        onClick: o,
                                        children: t,
                                    },
                                    e,
                                ),
                            count: n.length,
                        }),
                };
        }, [o, e, n.length, t]);
    },
    buildLayout: () => [g.N, N.k, A.u, I.S, _.n],
});
