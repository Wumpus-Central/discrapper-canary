i.d(e, { U: () => c });
var n = i(311907),
    l = i(419117),
    s = i(419954),
    r = i(430452),
    a = i(780964),
    u = i(393685),
    o = i(464639),
    d = i(466116),
    T = i(923159),
    A = i(881318),
    S = i(918873),
    E = i(985667),
    g = i(580997),
    _ = i(985018);
let c = (0, s.bd)(a.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
    useTitle: function (t) {
        return t ? _.intl.string(_.t.KHsSWK) : _.intl.string(_.t.PPDo5V);
    },
    useCollapsedSubtitle: () => {
        var t;
        let e;
        return (
            (t = a.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION),
            (e = (0, n.bG)([r.A], () => r.A.isInputProfileCustom())),
            (0, l.A)(t, { limit: e ? 3 : 2 })
        );
    },
    buildLayout: () => [u.C, A.$, d.l, g.A, T.Q, o.e, S.W, E.i],
});
