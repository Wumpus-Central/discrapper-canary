n.d(t, { Z: () => S }), n(47120);
var r = n(200651);
n(192379);
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
        ? (0, r.jsx)(o.hGI, {
              className: j.screenArrowIcon,
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
    var t, n, l, a;
    let { nativePickerEnabled: m } = e,
        [{ preset: S, resolution: C, fps: N, muteStreamAudio: y, selectedSource: Z, sourceType: I, audioSourceId: w }] = (0, h.E_)(),
        { twoClickVariant: O } = (0, d.a)({
            location: 'go_live_modal_refresh',
            autoTrackExposure: !1
        }),
        T = (0, c.Z)(),
        [E, P] = null != (l = (0, x.Z)(S)) ? l : [C, N],
        R = (0, u.L)(S),
        W = (0, f.M)(E),
        k = I === s.vA.CAMERA,
        A = null != Z || (!!O && (!m || k)),
        M = null != Z ? (null == Z || null == (t = Z.id) ? void 0 : t.startsWith(s.vA.CAMERA)) : k,
        L = A ? void 0 : S === p.tI.PRESET_VIDEO ? _.NW.string(g.Z.MuHUFR) : S === p.tI.PRESET_DOCUMENTS ? _.NW.string(g.Z.y0JuYW) : void 0;
    return (0, r.jsxs)('div', {
        className: j.root,
        children: [
            A && (0, r.jsx)(b, { source: Z }),
            (0, r.jsxs)('div', {
                className: j.summary,
                children: [
                    (0, r.jsx)(o.Text, {
                        className: j.sourceOrPresetName,
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: A ? (null != (a = null == Z ? void 0 : Z.name) ? a : _.NW.string(g.Z['hJMA+/'])) : R
                    }),
                    (0, r.jsxs)(o.Text, {
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
                                                (0, r.jsx)(o.ewm, {
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
                                                (0, r.jsx)(o.OyP, {
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
                                      children: [(0, r.jsx)(v, {}), (0, r.jsx)('span', { children: null == (n = T[null != w ? w : '']) ? void 0 : n.name })]
                                  })
                                : null
                        ]
                    })
                ]
            })
        ]
    });
}
