n.d(t, { Z: () => S }), n(388685);
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    s = n(268146),
    a = n(481060),
    o = n(925329),
    c = n(687058),
    d = n(668519),
    u = n(672811),
    f = n(891180),
    m = n(556389),
    h = n(615161),
    x = n(396678),
    p = n(37113),
    g = n(843874),
    _ = n(388032),
    j = n(326879);
function v() {
    return (0, r.jsx)('span', {
        className: j.ellipsis,
        children: '\u2022'
    });
}
function b(e) {
    let { source: t } = e;
    return null == t
        ? (0, r.jsx)(a.hGI, {
              className: j.screenArrowIcon,
              size: 'md',
              color: 'currentColor'
          })
        : (0, m.T)(t)
          ? (0, r.jsx)(o.Z, {
                game: null,
                pid: t.pid
            })
          : null == t.icon || '' === t.icon
            ? (0, r.jsx)(a.hGI, {
                  className: j.screenArrowIcon,
                  size: 'md',
                  color: 'currentColor'
              })
            : (0, r.jsx)('img', {
                  src: t.icon,
                  alt: '',
                  className: j.sourceIcon
              });
}
function S(e) {
    var t, n, l, o;
    let { nativePickerEnabled: m } = e,
        [{ preset: S, resolution: C, fps: y, muteStreamAudio: Z, selectedSource: I, sourceType: w, audioSourceId: O }] = (0, h.E_)(),
        { twoClickVariant: N } = (0, d.a)({
            location: 'go_live_modal_refresh',
            autoTrackExposure: !1
        }),
        T = (0, c.Z)(),
        [E, P] = null != (l = (0, x.Z)(S)) ? l : [C, y],
        R = (0, u.L)(S),
        k = (0, f.M)(E),
        A = w === s.vA.CAMERA,
        M = null != I || (!!N && (!m || A)),
        L = null != I ? (null == I || null == (t = I.id) ? void 0 : t.startsWith(s.vA.CAMERA)) : A,
        D = M ? void 0 : S === p.tI.PRESET_VIDEO ? _.intl.string(g.default.MuHUFR) : S === p.tI.PRESET_DOCUMENTS ? _.intl.string(g.default.y0JuYW) : void 0;
    return (0, r.jsxs)('div', {
        className: j.root,
        children: [
            M && (0, r.jsx)(b, { source: I }),
            (0, r.jsxs)('div', {
                className: j.summary,
                children: [
                    (0, r.jsx)(a.Text, {
                        className: j.sourceOrPresetName,
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: M ? (null != (o = null == I ? void 0 : I.name) ? o : _.intl.string(g.default['hJMA+/'])) : R
                    }),
                    (0, r.jsxs)(a.Text, {
                        className: j.summaryDetail,
                        variant: 'text-xs/medium',
                        color: 'text-muted',
                        children: [
                            M &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsxs)('span', {
                                            className: j.iconSummaryContainer,
                                            children: [
                                                (0, r.jsx)(a.ewm, {
                                                    className: j.icon,
                                                    size: 'xxs',
                                                    color: 'currentColor'
                                                }),
                                                R
                                            ]
                                        }),
                                        (0, r.jsx)(v, {})
                                    ]
                                }),
                            null != D &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)('span', { children: D }), (0, r.jsx)(v, {})]
                                }),
                            (0, r.jsx)('span', { children: k }),
                            (0, r.jsx)(v, {}),
                            (0, r.jsx)('span', { children: ''.concat(P, 'fps') }),
                            Z &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(v, {}),
                                        (0, r.jsxs)('span', {
                                            className: j.iconSummaryContainer,
                                            children: [
                                                (0, r.jsx)(a.OyP, {
                                                    className: i()(j.icon, j.mutedIcon),
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
                                      children: [(0, r.jsx)(v, {}), (0, r.jsx)('span', { children: null == (n = T[null != O ? O : '']) ? void 0 : n.name })]
                                  })
                                : null
                        ]
                    })
                ]
            })
        ]
    });
}
