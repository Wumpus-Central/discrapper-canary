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
    g = n(889150),
    _ = n(388032),
    v = n(63770);
function j() {
    return (0, r.jsx)('span', {
        className: v.ellipsis,
        children: '\u2022'
    });
}
function b(e) {
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
function S(e) {
    var t, n, l, a;
    let { nativePickerEnabled: m } = e,
        [{ preset: S, resolution: C, fps: N, muteStreamAudio: y, selectedSource: Z, sourceType: w, audioSourceId: I }] = (0, h.E_)(),
        { twoClickVariant: O } = (0, d.a)({
            location: 'go_live_modal_refresh',
            autoTrackExposure: !1
        }),
        T = (0, c.Z)(),
        [E, P] = null !== (l = (0, x.Z)(S)) && void 0 !== l ? l : [C, N],
        R = (0, u.L)(S),
        W = (0, f.M)(E),
        A = w === s.vA.CAMERA,
        k = null != Z || (!!O && (!m || A)),
        M = null != Z ? (null == Z ? void 0 : null === (t = Z.id) || void 0 === t ? void 0 : t.startsWith(s.vA.CAMERA)) : A,
        L = k ? void 0 : S === p.tI.PRESET_VIDEO ? _.NW.string(g.Z.MuHUFR) : S === p.tI.PRESET_DOCUMENTS ? _.NW.string(g.Z.y0JuYW) : void 0;
    return (0, r.jsxs)('div', {
        className: v.root,
        children: [
            k && (0, r.jsx)(b, { source: Z }),
            (0, r.jsxs)('div', {
                className: v.summary,
                children: [
                    (0, r.jsx)(o.Text, {
                        className: v.sourceOrPresetName,
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: k ? (null !== (a = null == Z ? void 0 : Z.name) && void 0 !== a ? a : _.NW.string(g.Z['hJMA+/'])) : R
                    }),
                    (0, r.jsxs)(o.Text, {
                        className: v.summaryDetail,
                        variant: 'text-xs/medium',
                        color: 'text-muted',
                        children: [
                            k &&
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
                            null != L &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)('span', { children: L }), (0, r.jsx)(j, {})]
                                }),
                            (0, r.jsx)('span', { children: W }),
                            (0, r.jsx)(j, {}),
                            (0, r.jsx)('span', { children: ''.concat(P, 'fps') }),
                            y &&
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
                                                _.NW.string(g.Z.FzMGWV)
                                            ]
                                        })
                                    ]
                                }),
                            M
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [(0, r.jsx)(j, {}), (0, r.jsx)('span', { children: null === (n = T[null != I ? I : '']) || void 0 === n ? void 0 : n.name })]
                                  })
                                : null
                        ]
                    })
                ]
            })
        ]
    });
}
