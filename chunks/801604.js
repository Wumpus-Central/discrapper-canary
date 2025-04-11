n.d(t, { Z: () => N }), n(388685);
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
function S(e) {
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
function N(e) {
    var t, n, l, o;
    let { nativePickerEnabled: m } = e,
        [{ preset: N, resolution: C, fps: b, muteStreamAudio: y, selectedSource: Z, sourceType: I, audioSourceId: O }] = (0, h.E_)(),
        { twoClickVariant: w } = (0, d.a)({
            location: 'go_live_modal_refresh',
            autoTrackExposure: !1
        }),
        T = (0, c.Z)(),
        [E, P] = null != (l = (0, x.Z)(N)) ? l : [C, b],
        R = (0, u.L)(N),
        W = (0, f.M)(E),
        k = I === s.vA.CAMERA,
        A = null != Z || (!!w && (!m || k)),
        M = null != Z ? (null == Z || null == (t = Z.id) ? void 0 : t.startsWith(s.vA.CAMERA)) : k,
        L = A ? void 0 : N === p.tI.PRESET_VIDEO ? _.NW.string(g.Z.MuHUFR) : N === p.tI.PRESET_DOCUMENTS ? _.NW.string(g.Z.y0JuYW) : void 0;
    return (0, r.jsxs)('div', {
        className: j.root,
        children: [
            A && (0, r.jsx)(S, { source: Z }),
            (0, r.jsxs)('div', {
                className: j.summary,
                children: [
                    (0, r.jsx)(a.Text, {
                        className: j.sourceOrPresetName,
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: A ? (null != (o = null == Z ? void 0 : Z.name) ? o : _.NW.string(g.Z['hJMA+/'])) : R
                    }),
                    (0, r.jsxs)(a.Text, {
                        className: j.summaryDetail,
                        variant: 'text-xs/medium',
                        color: 'text-muted',
                        children: [
                            A &&
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
                            null != L &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)('span', { children: L }), (0, r.jsx)(v, {})]
                                }),
                            (0, r.jsx)('span', { children: W }),
                            (0, r.jsx)(v, {}),
                            (0, r.jsx)('span', { children: ''.concat(P, 'fps') }),
                            y &&
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
                                                _.NW.string(g.Z.FzMGWV)
                                            ]
                                        })
                                    ]
                                }),
                            M
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
