n.d(t, { Z: () => p }), n(47120), n(977457);
var r = n(192379),
    i = n(392711),
    o = n(442837),
    a = n(881052),
    s = n(699682),
    l = n(81897),
    c = n(752048),
    u = n(771845),
    d = n(621853),
    f = n(484459);
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, p, _] = (0, o.Wu)([d.Z], () => [d.Z.getMutualFriends(e.id), d.Z.getMutualGuilds(e.id), d.Z.isFetchingProfile(e.id)]),
        h = (0, l.Z)(),
        [m, g] = (0, r.useState)(null),
        E = t && null == m && !_,
        v = !e.bot && null == n,
        b = null == p,
        y = E && (v || b);
    (0, r.useEffect)(() => {
        y &&
            (async () => {
                try {
                    await (0, f.Z)(e.id, void 0, {
                        withMutualFriends: !e.bot,
                        withMutualGuilds: !0,
                        abortSignal: h
                    });
                } catch (e) {
                    g(new a.Hx(e));
                }
            })();
    }, [y, e.id, e.bot, h]);
    let O = (0, o.e7)([c.Z], () => c.Z.getUserAffinitiesMap()),
        S = (0, o.e7)([u.ZP], () => u.ZP.getFlattenedGuildIds()),
        I = (0, r.useMemo)(
            () =>
                null == n || n.length < 2
                    ? n
                    : (0, i.sortBy)(n, (e) => {
                          var t, n;
                          let { user: r } = e;
                          return -((null !== (n = null === (t = O.get(r.id)) || void 0 === t ? void 0 : t.communicationProbability) && void 0 !== n ? n : -1) * 1);
                      }),
            [n, O]
        ),
        T = (0, r.useMemo)(() => {
            if (null == p || p.length < 2) return p;
            let e = Object.fromEntries(S.map((e, t) => [e, t]));
            return (0, i.sortBy)(p, (t) => {
                var n;
                let { guild: r } = t;
                return null !== (n = e[r.id]) && void 0 !== n ? n : S.length;
            });
        }, [p, S]),
        N = (0, s.Z)(I),
        A = (0, s.Z)(T);
    return {
        mutualFriends: null != I ? I : N,
        mutualGuilds: null != T ? T : A,
        isFetching: _
    };
}
