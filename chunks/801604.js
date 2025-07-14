(n.d(t, { Z: () => O }), n(388685));
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    s = n(268146),
    o = n(442837),
    a = n(481060),
    c = n(925329),
    d = n(72897),
    u = n(131951),
    f = n(358085),
    m = n(668519),
    h = n(672811),
    p = n(891180),
    x = n(556389),
    g = n(615161),
    _ = n(396678),
    v = n(37113),
    j = n(676462),
    b = n(388032),
    S = n(326879);
function C() {
    return (0, r.jsx)('span', {
        className: S.ellipsis,
        children: '\u2022'
    });
}
function y(e) {
    let { source: t } = e;
    return null == t
        ? (0, r.jsx)(a.hGI, {
              className: S.screenArrowIcon,
              size: 'md',
              color: 'currentColor'
          })
        : (0, x.T)(t)
          ? (0, r.jsx)(c.Z, {
                game: null,
                pid: t.pid
            })
          : null == t.icon || '' === t.icon
            ? (0, r.jsx)(a.hGI, {
                  className: S.screenArrowIcon,
                  size: 'md',
                  color: 'currentColor'
              })
            : (0, r.jsx)('img', {
                  src: t.icon,
                  alt: '',
                  className: S.sourceIcon
              });
}
function O(e) {
    var t, n, i, c;
    let { nativePickerEnabled: x } = e,
        [{ preset: O, resolution: Z, fps: w, muteStreamAudio: I, selectedSource: N, sourceType: T, audioSourceId: E }] = (0, g.E_)(),
        { twoClickVariant: P } = (0, m.a)({
            location: 'go_live_modal_refresh',
            autoTrackExposure: !1
        }),
        R = (0, d.zX)({ location: 'StreamSettingsSummary' }),
        [A, k] = null != (i = (0, _.Z)(O)) ? i : [Z, w],
        M = (0, h.L)(O),
        L = (0, p.M)(A),
        D = T === s.vA.CAMERA,
        B = null != N || (!!P && (!x || D)),
        U = null != N ? (null == N || null == (t = N.id) ? void 0 : t.startsWith(s.vA.CAMERA)) : D,
        G = B ? void 0 : O === v.tI.PRESET_VIDEO ? b.intl.string(j.default.MuHUFR) : O === v.tI.PRESET_DOCUMENTS ? b.intl.string(j.default.y0JuYW) : void 0,
        W = (0, o.e7)([u.Z], () => u.Z.getUseSystemScreensharePicker() && (0, f.isLinux)());
    return (0, r.jsxs)('div', {
        className: S.root,
        children: [
            B && (0, r.jsx)(y, { source: N }),
            (0, r.jsxs)('div', {
                className: S.summary,
                children: [
                    (0, r.jsx)(a.Text, {
                        className: S.sourceOrPresetName,
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: B ? (null != (c = null == N ? void 0 : N.name) ? c : b.intl.string(j.default['hJMA+/'])) : M
                    }),
                    (0, r.jsxs)(a.Text, {
                        className: S.summaryDetail,
                        variant: 'text-xs/medium',
                        color: 'text-muted',
                        children: [
                            B &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsxs)('span', {
                                            className: S.iconSummaryContainer,
                                            children: [
                                                (0, r.jsx)(a.ewm, {
                                                    className: S.icon,
                                                    size: 'xxs',
                                                    color: 'currentColor'
                                                }),
                                                M
                                            ]
                                        }),
                                        (0, r.jsx)(C, {})
                                    ]
                                }),
                            null != G &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)('span', { children: G }), (0, r.jsx)(C, {})]
                                }),
                            (0, r.jsx)('span', { children: L }),
                            (0, r.jsx)(C, {}),
                            (0, r.jsx)('span', { children: ''.concat(k, 'fps') }),
                            I &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(C, {}),
                                        (0, r.jsxs)('span', {
                                            className: S.iconSummaryContainer,
                                            children: [
                                                (0, r.jsx)(a.OyP, {
                                                    className: l()(S.icon, S.mutedIcon),
                                                    size: 'xxs',
                                                    color: 'currentColor'
                                                }),
                                                b.intl.string(j.default.FzMGWV)
                                            ]
                                        })
                                    ]
                                }),
                            !I &&
                                !U &&
                                W &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)(C, {}), b.intl.string(j.default['n9/rUl'])]
                                }),
                            U
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(C, {}),
                                          (0, r.jsx)('span', {
                                              children:
                                                  null ==
                                                  (n = R.find((e) => {
                                                      let { id: t } = e;
                                                      return E === t;
                                                  }))
                                                      ? void 0
                                                      : n.name
                                          })
                                      ]
                                  })
                                : null
                        ]
                    })
                ]
            })
        ]
    });
}
