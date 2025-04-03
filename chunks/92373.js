n.d(t, { Z: () => g });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(442837),
    c = n(210753),
    d = n(77498),
    u = n(388032),
    m = n(402770);
let g = function (e) {
    let { applicationId: t, imageContainerClassName: n, onClick: s, selected: g, locked: p = !1, otherGamesCount: h = 0 } = e,
        f = (0, l.dQu)(l.TVs.colors.WHITE),
        { isFetching: b, coverImageUrl: x } = (0, c.$)(t, {
            coverImageHeight: 336,
            coverImageWidth: 252
        }),
        j = (0, o.e7)([d.Z], () => {
            var e, n;
            return null != (n = null == (e = d.Z.getDetectableGame(t)) ? void 0 : e.name) ? n : '';
        }),
        N = i.useCallback(() => {
            null == s || s(t);
        }, [t, s]),
        _ = i.useMemo(
            () =>
                b
                    ? null
                    : null == x
                      ? (0, r.jsx)('div', {
                            className: m.gameUnknownImage,
                            children: (0, r.jsx)(l.IMN, { size: 'lg' })
                        })
                      : (0, r.jsx)('img', {
                            className: m.gameImage,
                            alt: j,
                            src: x
                        }),
            [x, b, j]
        );
    return (0, r.jsxs)('div', {
        className: m.selectedGame,
        children: [
            (0, r.jsxs)(l.P3F, {
                onClick: N,
                className: a()(n, b ? m.gameImageLoading : void 0, m.gameImageBackground),
                children: [
                    g &&
                        (0, r.jsx)('div', {
                            className: m.checkBackground,
                            children: (0, r.jsx)(l.owK, {
                                size: 'md',
                                color: 'currentColor',
                                secondaryColor: f.hex(),
                                className: a()(m.selectedGameCheck, { [m.selectedGameCheckLocked]: p })
                            })
                        }),
                    _,
                    h > 0 &&
                        (0, r.jsx)('div', {
                            className: m.remainingGame,
                            children: (0, r.jsx)(l.Text, {
                                variant: 'text-xs/normal',
                                color: 'always-white',
                                children: u.NW.format(u.t.F6iMs7, { count: h })
                            })
                        })
                ]
            }),
            (0, r.jsxs)(l.Text, {
                className: m.gameName,
                variant: 'text-xs/normal',
                color: 'header-primary',
                children: [j, p && (0, r.jsx)(l.mBM, { size: 'xxs' })]
            })
        ]
    });
};
