n.d(t, { Z: () => h });
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(442837),
    c = n(210753),
    d = n(77498),
    u = n(388032),
    m = n(169351);
let h = function (e) {
    let { applicationId: t, imageContainerClassName: n, onClick: l, selected: h, locked: g = !1, otherGamesCount: x = 0 } = e,
        p = (0, a.dQu)(a.TVs.colors.WHITE),
        { isFetching: _, coverImageUrl: C } = (0, c.$)(t, {
            coverImageHeight: 336,
            coverImageWidth: 252
        }),
        f = (0, o.e7)([d.Z], () => {
            var e, n;
            return null !== (n = null === (e = d.Z.getDetectableGame(t)) || void 0 === e ? void 0 : e.name) && void 0 !== n ? n : '';
        }),
        v = r.useCallback(() => {
            null == l || l(t);
        }, [t, l]),
        N = r.useMemo(
            () =>
                _
                    ? null
                    : null == C
                      ? (0, i.jsx)('div', {
                            className: m.gameUnknownImage,
                            children: (0, i.jsx)(a.IMN, { size: 'lg' })
                        })
                      : (0, i.jsx)('img', {
                            className: m.gameImage,
                            alt: f,
                            src: C
                        }),
            [C, _, f]
        );
    return (0, i.jsxs)('div', {
        className: m.selectedGame,
        children: [
            (0, i.jsxs)(a.P3F, {
                onClick: v,
                className: s()(n, _ ? m.gameImageLoading : void 0, m.gameImageBackground),
                children: [
                    h &&
                        (0, i.jsx)('div', {
                            className: m.checkBackground,
                            children: (0, i.jsx)(a.owK, {
                                size: 'md',
                                color: 'currentColor',
                                secondaryColor: p.hex(),
                                className: s()(m.selectedGameCheck, { [m.selectedGameCheckLocked]: g })
                            })
                        }),
                    N,
                    x > 0 &&
                        (0, i.jsx)('div', {
                            className: m.remainingGame,
                            children: (0, i.jsx)(a.Text, {
                                variant: 'text-xs/normal',
                                color: 'always-white',
                                children: u.intl.format(u.t.F6iMs7, { count: x })
                            })
                        })
                ]
            }),
            (0, i.jsxs)(a.Text, {
                className: m.gameName,
                variant: 'text-xs/normal',
                color: 'header-primary',
                children: [f, g && (0, i.jsx)(a.mBM, { size: 'xxs' })]
            })
        ]
    });
};
