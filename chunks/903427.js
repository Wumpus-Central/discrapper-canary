i.d(t, {
    K: () => O,
    P: () => I,
});
var n = i(627968),
    l = i(64700),
    s = i(574381),
    r = i(311907),
    a = i(192308),
    u = i(827343),
    o = i(793574),
    d = i(419954),
    T = i(430452),
    c = i(780964),
    A = i(825468),
    S = i(509381),
    _ = i(731854),
    E = i(985018);
let g = !s.Av;

function I() {
    return (0, r.bG)([T.A], () => T.A.getMode() === _.TB.PUSH_TO_TALK);
}
let O = (0, d.zD)(c.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return s.Av ? E.intl.string(E.t.tG4Np5) : E.intl.string(E.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, r.bG)([T.A], () => T.A.getMode());
        return l.useMemo(() => {
            if (!s.Av && e === _.TB.PUSH_TO_TALK)
                return E.intl.format(E.t["VHI4+Y"], {
                    onDownloadClick: () => (0, A._)("Help Text PTT"),
                });
        }, [e]);
    },
    usePredicate: function () {
        return (0, r.bG)([T.A], () => T.A.getActiveInputProfile() !== S.my.STUDIO);
    },
    useValue: function () {
        return (0, r.bG)([T.A], () => T.A.getMode() === _.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, l;
        (t = e ? _.TB.PUSH_TO_TALK : _.TB.VOICE_ACTIVITY),
            (l = [o.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === _.TB.PUSH_TO_TALK &&
                g &&
                (0, a.openModalLazy)(async () => {
                    let { default: e } = await i.e("10919").then(i.bind(i, 556506));
                    return (t) =>
                        (0, n.jsx)(
                            e,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var i = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(i);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (n = n.concat(
                                            Object.getOwnPropertySymbols(i).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(i, e).enumerable;
                                            }),
                                        )),
                                        n.forEach(function (t) {
                                            var n;
                                            (n = i[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: n,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = n);
                                        });
                                }
                                return e;
                            })(
                                {
                                    title: E.intl.string(E.t.Kdt0Gb),
                                    confirmText: E.intl.string(E.t["1WjMbC"]),
                                    cancelText: E.intl.string(E.t.BddRzS),
                                    onConfirm: () => (0, A._)("PTT Limited Modal"),
                                    body: E.intl.string(E.t.NIozvt),
                                },
                                t,
                            ),
                        );
                }),
            u.A.setMode(t, void 0, void 0, {
                analyticsLocations: l,
            });
    },
    useSearchTerms: () => [E.intl.string(E.t["pS+K2L"]), E.intl.string(E.t.nuFtHH)],
});
