n.d(t, { J: () => p });
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(692547),
    o = n(481060),
    c = n(743498),
    d = n(56848),
    u = n(378441);
n(388032);
var h = n(698545);
let p = (e) => {
    var t, n;
    let { voiceFilter: a, hasNitro: p } = e,
        { activeVoice: m, mostRecentlyRequestedVoiceId: f } = (0, u.o)(),
        g = (0, d.z)(a.id),
        _ = a.id === m,
        C = !a.available && !a.temporarilyAvailable,
        x = a.temporarilyAvailable && !p && !_,
        v = !_ && a.id === f,
        E = l.useCallback(() => {
            (p || !C) && (0, c.v6)(m === a.id ? null : a.id);
        }, [m, a.id, C, p]);
    return (0, i.jsxs)(o.P3F, {
        onClick: E,
        style: {
            '--custom-voice-filter-icon-bg-color-one': null == g ? void 0 : null === (t = g.iconBgColors) || void 0 === t ? void 0 : t[0],
            '--custom-voice-filter-icon-bg-color-two': null == g ? void 0 : null === (n = g.iconBgColors) || void 0 === n ? void 0 : n[1]
        },
        className: r()(h.filter, {
            [h.selected]: _,
            [h.locked]: C && !_,
            [h.unlocked]: !C
        }),
        children: [
            (0, i.jsxs)('div', {
                className: h.iconTreatmentsWrapper,
                children: [
                    (0, i.jsx)('div', {
                        className: r()(h.thumbnailWrapper, {
                            [h.unlocked]: !C,
                            [h.underDevelopment]: a.underDevelopment
                        }),
                        children: (0, i.jsx)('img', {
                            className: r()(h.thumbnail),
                            alt: '',
                            src: null == g ? void 0 : g.iconURL,
                            draggable: !1
                        })
                    }),
                    _ &&
                        (0, i.jsx)('div', {
                            className: h.iconCircle,
                            children: (0, i.jsx)(o.owK, {
                                size: 'md',
                                color: 'currentColor',
                                colorClass: h.checkmark,
                                secondaryColor: s.Z.unsafe_rawColors.WHITE_500.css
                            })
                        }),
                    C &&
                        !_ &&
                        (0, i.jsx)('div', {
                            className: r()([h.iconCircle, h.lockedCircle]),
                            children: (0, i.jsx)(o.mBM, {
                                size: 'custom',
                                height: 16,
                                width: 16,
                                color: 'currentColor',
                                colorClass: h.lockedIcon
                            })
                        }),
                    x &&
                        (0, i.jsx)('div', {
                            className: r()([h.iconCircle, h.clockCircle]),
                            children: (0, i.jsx)(o.T39, {
                                size: 'custom',
                                height: 16,
                                width: 16,
                                color: 'currentColor',
                                colorClass: h.clockIcon
                            })
                        }),
                    v &&
                        (0, i.jsx)('div', {
                            className: h.spinnerWrapper,
                            children: (0, i.jsx)(o.$jN, {
                                type: o.$jN.Type.CHASING_DOTS,
                                animated: !0,
                                className: h.spinner
                            })
                        })
                ]
            }),
            (0, i.jsx)(o.Text, {
                className: h.filterName,
                variant: 'text-xs/medium',
                color: a.underDevelopment ? 'header-muted' : 'header-primary',
                children: null == g ? void 0 : g.name
            })
        ]
    });
};
