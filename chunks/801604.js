(n.d(t, { Z: () => Z }), n(388685));
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    s = n(268146),
    o = n(442837),
    a = n(481060),
    c = n(728345),
    d = n(925329),
    u = n(72897),
    f = n(131951),
    m = n(358085),
    h = n(668519),
    p = n(672811),
    x = n(891180),
    g = n(556389),
    _ = n(615161),
    v = n(396678),
    j = n(37113),
    S = n(65154),
    b = n(676462),
    C = n(388032),
    y = n(326879);
function O() {
    return (0, r.jsx)('span', {
        className: y.ellipsis,
        children: '\u2022'
    });
}
function I(e) {
    let { source: t } = e,
        { data: n } = (0, c.IX)(null != t && (0, g.T)(t) ? t.id : void 0);
    return null == t
        ? (0, r.jsx)(a.hGI, {
              className: y.screenArrowIcon,
              size: 'md',
              color: 'currentColor'
          })
        : (0, g.T)(t)
          ? (0, r.jsx)(d.Z, {
                game: n,
                pid: t.pid
            })
          : null == t.icon || '' === t.icon
            ? (0, r.jsx)(a.hGI, {
                  className: y.screenArrowIcon,
                  size: 'md',
                  color: 'currentColor'
              })
            : (0, r.jsx)('img', {
                  src: t.icon,
                  alt: '',
                  className: y.sourceIcon
              });
}
function Z(e) {
    var t, n, i, c;
    let { nativePickerEnabled: d } = e,
        [{ preset: g, resolution: Z, fps: w, muteStreamAudio: N, selectedSource: T, sourceType: E, audioSourceId: P }] = (0, _.E_)(),
        { twoClickVariant: R } = (0, h.a)({
            location: 'go_live_modal_refresh',
            autoTrackExposure: !1
        }),
        [A, M] = (0, u.L)(S.h7.AUDIO_INPUT, { location: 'StreamSettingsSummary' }),
        k = A.concat(M),
        [L, D] = null != (i = (0, v.Z)(g)) ? i : [Z, w],
        B = (0, p.L)(g),
        U = (0, x.M)(L),
        G = E === s.vA.CAMERA,
        W = null != T || (!!R && (!d || G)),
        F = null != T ? (null == T || null == (t = T.id) ? void 0 : t.startsWith(s.vA.CAMERA)) : G,
        z = W ? void 0 : g === j.tI.PRESET_VIDEO ? C.intl.string(b.default.MuHUFR) : g === j.tI.PRESET_DOCUMENTS ? C.intl.string(b.default.y0JuYW) : void 0,
        H = (0, o.e7)([f.Z], () => f.Z.getUseSystemScreensharePicker() && (0, m.isLinux)());
    return (0, r.jsxs)('div', {
        className: y.root,
        children: [
            W && (0, r.jsx)(I, { source: T }),
            (0, r.jsxs)('div', {
                className: y.summary,
                children: [
                    (0, r.jsx)(a.Text, {
                        className: y.sourceOrPresetName,
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: W ? (null != (c = null == T ? void 0 : T.name) ? c : C.intl.string(b.default['hJMA+/'])) : B
                    }),
                    (0, r.jsxs)(a.Text, {
                        className: y.summaryDetail,
                        variant: 'text-xs/medium',
                        color: 'text-muted',
                        children: [
                            W &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsxs)('span', {
                                            className: y.iconSummaryContainer,
                                            children: [
                                                (0, r.jsx)(a.ewm, {
                                                    className: y.icon,
                                                    size: 'xxs',
                                                    color: 'currentColor'
                                                }),
                                                B
                                            ]
                                        }),
                                        (0, r.jsx)(O, {})
                                    ]
                                }),
                            null != z &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)('span', { children: z }), (0, r.jsx)(O, {})]
                                }),
                            (0, r.jsx)('span', { children: U }),
                            (0, r.jsx)(O, {}),
                            (0, r.jsx)('span', { children: ''.concat(D, 'fps') }),
                            N &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(O, {}),
                                        (0, r.jsxs)('span', {
                                            className: y.iconSummaryContainer,
                                            children: [
                                                (0, r.jsx)(a.OyP, {
                                                    className: l()(y.icon, y.mutedIcon),
                                                    size: 'xxs',
                                                    color: 'currentColor'
                                                }),
                                                C.intl.string(b.default.FzMGWV)
                                            ]
                                        })
                                    ]
                                }),
                            !N &&
                                !F &&
                                H &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)(O, {}), C.intl.string(b.default['n9/rUl'])]
                                }),
                            F
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(O, {}),
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
