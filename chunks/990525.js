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
var h = n(682713);
let p = (e) => {
    let { voiceFilter: t, hasNitro: n } = e,
        { activeVoice: a, mostRecentlyRequestedVoiceId: p } = (0, u.o)(),
        m = (0, d.z)(t.id),
        f = t.id === a,
        g = !t.available && !t.temporarilyAvailable,
        _ = t.temporarilyAvailable && !n && !f,
        C = !f && t.id === p,
        x = l.useCallback(() => {
            (n || !g) && (0, c.v6)(a === t.id ? null : t.id);
        }, [a, t.id, g, n]),
        v = h[t.styleKey];
    return (0, i.jsxs)(o.P3F, {
        onClick: x,
        className: r()(h.filter, v, {
            [h.selected]: f,
            [h.locked]: g && !f,
            [h.unlocked]: !g
        }),
        children: [
            (0, i.jsxs)('div', {
                className: h.iconTreatmentsWrapper,
                children: [
                    (0, i.jsxs)('div', {
                        className: r()(h.profile, {
                            [h.unlocked]: !g,
                            [h.underDevelopment]: t.underDevelopment
                        }),
                        children: [
                            (0, i.jsx)('img', {
                                className: r()(h.thumbnail),
                                alt: '',
                                src: null == m ? void 0 : m.iconURL,
                                draggable: !1
                            }),
                            (0, i.jsx)('div', { className: r()(h.insetBorder) })
                        ]
                    }),
                    f &&
                        (0, i.jsx)('div', {
                            className: h.iconCircle,
                            children: (0, i.jsx)(o.owK, {
                                size: 'md',
                                color: 'currentColor',
                                colorClass: h.checkmark,
                                secondaryColor: s.Z.unsafe_rawColors.WHITE_500.css
                            })
                        }),
                    g &&
                        !f &&
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
                    _ &&
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
                    C &&
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
                color: t.underDevelopment ? 'header-muted' : 'header-primary',
                children: null == m ? void 0 : m.name
            })
        ]
    });
};
