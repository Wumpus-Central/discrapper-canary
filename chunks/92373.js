var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(442837),
    c = n(210753),
    d = n(77498),
    u = n(388032),
    m = n(735897);
t.Z = function (e) {
    let { applicationId: t, imageContainerClassName: n, onClick: l, selected: h, locked: g = !1, otherGamesCount: x = 0 } = e,
        p = (0, s.useToken)(s.tokens.colors.WHITE),
        { isFetching: f, coverImageUrl: C } = (0, c.$)(t, {
            coverImageHeight: 336,
            coverImageWidth: 252
        }),
        v = (0, o.e7)([d.Z], () => {
            var e, n;
            return null !== (n = null === (e = d.Z.getDetectableGame(t)) || void 0 === e ? void 0 : e.name) && void 0 !== n ? n : '';
        }),
        _ = r.useCallback(() => {
            null == l || l(t);
        }, [t, l]),
        I = r.useMemo(
            () =>
                f
                    ? null
                    : null == C
                      ? (0, i.jsx)('div', {
                            className: m.gameUnknownImage,
                            children: (0, i.jsx)(s.UnknownGameIcon, { size: 'lg' })
                        })
                      : (0, i.jsx)('img', {
                            className: m.gameImage,
                            alt: v,
                            src: C
                        }),
            [C, f, v]
        );
    return (0, i.jsxs)('div', {
        className: m.selectedGame,
        children: [
            (0, i.jsxs)(s.Clickable, {
                onClick: _,
                className: a()(n, f ? m.gameImageLoading : void 0, m.gameImageBackground),
                children: [
                    h &&
                        (0, i.jsx)('div', {
                            className: m.checkBackground,
                            children: (0, i.jsx)(s.CircleCheckIcon, {
                                size: 'md',
                                color: 'currentColor',
                                secondaryColor: p.hex(),
                                className: a()(m.selectedGameCheck, { [m.selectedGameCheckLocked]: g })
                            })
                        }),
                    I,
                    x > 0 &&
                        (0, i.jsx)('div', {
                            className: m.remainingGame,
                            children: (0, i.jsx)(s.Text, {
                                variant: 'text-xs/normal',
                                color: 'always-white',
                                children: u.intl.format(u.t.F6iMs7, { count: x })
                            })
                        })
                ]
            }),
            (0, i.jsxs)(s.Text, {
                className: m.gameName,
                variant: 'text-xs/normal',
                color: 'header-primary',
                children: [v, g && (0, i.jsx)(s.LockIcon, { size: 'xxs' })]
            })
        ]
    });
};
