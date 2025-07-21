(n.d(t, { Z: () => I }), n(388685));
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
    j = n(65154),
    S = n(676462),
    b = n(388032),
    C = n(326879);
function y() {
    return (0, r.jsx)('span', {
        className: C.ellipsis,
        children: '\u2022'
    });
}
function O(e) {
    let { source: t } = e;
    return null == t
        ? (0, r.jsx)(a.hGI, {
              className: C.screenArrowIcon,
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
                  className: C.screenArrowIcon,
                  size: 'md',
                  color: 'currentColor'
              })
            : (0, r.jsx)('img', {
                  src: t.icon,
                  alt: '',
                  className: C.sourceIcon
              });
}
function I(e) {
    var t, n, i, c;
    let { nativePickerEnabled: x } = e,
        [{ preset: I, resolution: Z, fps: w, muteStreamAudio: N, selectedSource: T, sourceType: E, audioSourceId: P }] = (0, g.E_)(),
        { twoClickVariant: R } = (0, m.a)({
            location: 'go_live_modal_refresh',
            autoTrackExposure: !1
        }),
        [A, M] = (0, d.L)(j.h7.AUDIO_INPUT, { location: 'StreamSettingsSummary' }),
        k = A.concat(M),
        [L, D] = null != (i = (0, _.Z)(I)) ? i : [Z, w],
        B = (0, h.L)(I),
        U = (0, p.M)(L),
        G = E === s.vA.CAMERA,
        W = null != T || (!!R && (!x || G)),
        F = null != T ? (null == T || null == (t = T.id) ? void 0 : t.startsWith(s.vA.CAMERA)) : G,
        z = W ? void 0 : I === v.tI.PRESET_VIDEO ? b.intl.string(S.default.MuHUFR) : I === v.tI.PRESET_DOCUMENTS ? b.intl.string(S.default.y0JuYW) : void 0,
        H = (0, o.e7)([u.Z], () => u.Z.getUseSystemScreensharePicker() && (0, f.isLinux)());
    return (0, r.jsxs)('div', {
        className: C.root,
        children: [
            W && (0, r.jsx)(O, { source: T }),
            (0, r.jsxs)('div', {
                className: C.summary,
                children: [
                    (0, r.jsx)(a.Text, {
                        className: C.sourceOrPresetName,
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: W ? (null != (c = null == T ? void 0 : T.name) ? c : b.intl.string(S.default['hJMA+/'])) : B
                    }),
                    (0, r.jsxs)(a.Text, {
                        className: C.summaryDetail,
                        variant: 'text-xs/medium',
                        color: 'text-muted',
                        children: [
                            W &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsxs)('span', {
                                            className: C.iconSummaryContainer,
                                            children: [
                                                (0, r.jsx)(a.ewm, {
                                                    className: C.icon,
                                                    size: 'xxs',
                                                    color: 'currentColor'
                                                }),
                                                B
                                            ]
                                        }),
                                        (0, r.jsx)(y, {})
                                    ]
                                }),
                            null != z &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)('span', { children: z }), (0, r.jsx)(y, {})]
                                }),
                            (0, r.jsx)('span', { children: U }),
                            (0, r.jsx)(y, {}),
                            (0, r.jsx)('span', { children: ''.concat(D, 'fps') }),
                            N &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(y, {}),
                                        (0, r.jsxs)('span', {
                                            className: C.iconSummaryContainer,
                                            children: [
                                                (0, r.jsx)(a.OyP, {
                                                    className: l()(C.icon, C.mutedIcon),
                                                    size: 'xxs',
                                                    color: 'currentColor'
                                                }),
                                                b.intl.string(S.default.FzMGWV)
                                            ]
                                        })
                                    ]
                                }),
                            !N &&
                                !F &&
                                H &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)(y, {}), b.intl.string(S.default['n9/rUl'])]
                                }),
                            F
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(y, {}),
                                          (0, r.jsx)('span', {
                                              children:
                                                  null ==
                                                  (n = k.find((e) => {
                                                      let { id: t } = e;
                                                      return P === t;
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
