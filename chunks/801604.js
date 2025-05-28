n.d(t, { Z: () => b }), n(388685);
var r = n(255367);
n(73800);
var l = n(120356),
    i = n.n(l),
    s = n(268146),
    o = n(481060),
    a = n(925329),
    c = n(687058),
    d = n(668519),
    u = n(672811),
    f = n(891180),
    m = n(556389),
    h = n(615161),
    p = n(396678),
    x = n(37113),
    g = n(576202),
    _ = n(388032),
    v = n(326879);
function j() {
    return (0, r.jsx)('span', {
        className: v.ellipsis,
        children: '\u2022'
    });
}
function S(e) {
    let { source: t } = e;
    return null == t
        ? (0, r.jsx)(o.hGI, {
              className: v.screenArrowIcon,
              size: 'md',
              color: 'currentColor'
          })
        : (0, m.T)(t)
          ? (0, r.jsx)(a.Z, {
                game: null,
                pid: t.pid
            })
          : null == t.icon || '' === t.icon
            ? (0, r.jsx)(o.hGI, {
                  className: v.screenArrowIcon,
                  size: 'md',
                  color: 'currentColor'
              })
            : (0, r.jsx)('img', {
                  src: t.icon,
                  alt: '',
                  className: v.sourceIcon
              });
}
function b(e) {
    var t, n, l, a;
    let { nativePickerEnabled: m } = e,
        [{ preset: b, resolution: C, fps: y, muteStreamAudio: O, selectedSource: Z, sourceType: I, audioSourceId: w }] = (0, h.E_)(),
        { twoClickVariant: N } = (0, d.a)({
            location: 'go_live_modal_refresh',
            autoTrackExposure: !1
        }),
        E = (0, c.Z)(),
        [T, P] = null != (l = (0, p.Z)(b)) ? l : [C, y],
        R = (0, u.L)(b),
        k = (0, f.M)(T),
        A = I === s.vA.CAMERA,
        M = null != Z || (!!N && (!m || A)),
        L = null != Z ? (null == Z || null == (t = Z.id) ? void 0 : t.startsWith(s.vA.CAMERA)) : A,
        D = M ? void 0 : b === x.tI.PRESET_VIDEO ? _.intl.string(g.default.MuHUFR) : b === x.tI.PRESET_DOCUMENTS ? _.intl.string(g.default.y0JuYW) : void 0;
    return (0, r.jsxs)('div', {
        className: v.root,
        children: [
            M && (0, r.jsx)(S, { source: Z }),
            (0, r.jsxs)('div', {
                className: v.summary,
                children: [
                    (0, r.jsx)(o.Text, {
                        className: v.sourceOrPresetName,
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: M ? (null != (a = null == Z ? void 0 : Z.name) ? a : _.intl.string(g.default['hJMA+/'])) : R
                    }),
                    (0, r.jsxs)(o.Text, {
                        className: v.summaryDetail,
                        variant: 'text-xs/medium',
                        color: 'text-muted',
                        children: [
                            M &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsxs)('span', {
                                            className: v.iconSummaryContainer,
                                            children: [
                                                (0, r.jsx)(o.ewm, {
                                                    className: v.icon,
                                                    size: 'xxs',
                                                    color: 'currentColor'
                                                }),
                                                R
                                            ]
                                        }),
                                        (0, r.jsx)(j, {})
                                    ]
                                }),
                            null != D &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)('span', { children: D }), (0, r.jsx)(j, {})]
                                }),
                            (0, r.jsx)('span', { children: k }),
                            (0, r.jsx)(j, {}),
                            (0, r.jsx)('span', { children: ''.concat(P, 'fps') }),
                            O &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(j, {}),
                                        (0, r.jsxs)('span', {
                                            className: v.iconSummaryContainer,
                                            children: [
                                                (0, r.jsx)(o.OyP, {
                                                    className: i()(v.icon, v.mutedIcon),
                                                    size: 'xxs',
                                                    color: 'currentColor'
                                                }),
                                                _.intl.string(g.default.FzMGWV)
                                            ]
                                        })
                                    ]
                                }),
                            L
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [(0, r.jsx)(j, {}), (0, r.jsx)('span', { children: null == (n = E[null != w ? w : '']) ? void 0 : n.name })]
                                  })
                                : null
                        ]
                    })
                ]
            })
        ]
    });
}
