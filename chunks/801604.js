n.d(t, { Z: () => C }), n(388685);
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    s = n(268146),
    o = n(481060),
    a = n(925329),
    c = n(679613),
    d = n(72897),
    u = n(668519),
    f = n(672811),
    m = n(891180),
    h = n(556389),
    p = n(615161),
    x = n(396678),
    g = n(37113),
    _ = n(676462),
    v = n(388032),
    j = n(326879);
function b() {
    return (0, r.jsx)('span', {
        className: j.ellipsis,
        children: '\u2022'
    });
}
function S(e) {
    let { source: t } = e;
    return null == t
        ? (0, r.jsx)(o.hGI, {
              className: j.screenArrowIcon,
              size: 'md',
              color: 'currentColor'
          })
        : (0, h.T)(t)
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
function C(e) {
    var t, n, i, a;
    let { nativePickerEnabled: h } = e,
        [{ preset: C, resolution: y, fps: O, muteStreamAudio: Z, selectedSource: I, sourceType: w, audioSourceId: N }] = (0, p.E_)(),
        { twoClickVariant: T } = (0, u.a)({
            location: 'go_live_modal_refresh',
            autoTrackExposure: !1
        }),
        { sortDevicesByFrecency: E } = (0, c._)({ location: 'StreamSettingsSummary' }),
        P = (0, d.zX)({ sortDevicesByFrecency: E }),
        [R, k] = null != (i = (0, x.Z)(C)) ? i : [y, O],
        A = (0, f.L)(C),
        M = (0, m.M)(R),
        L = w === s.vA.CAMERA,
        D = null != I || (!!T && (!h || L)),
        B = null != I ? (null == I || null == (t = I.id) ? void 0 : t.startsWith(s.vA.CAMERA)) : L,
        G = D ? void 0 : C === g.tI.PRESET_VIDEO ? v.intl.string(_.default.MuHUFR) : C === g.tI.PRESET_DOCUMENTS ? v.intl.string(_.default.y0JuYW) : void 0;
    return (0, r.jsxs)('div', {
        className: j.root,
        children: [
            D && (0, r.jsx)(S, { source: I }),
            (0, r.jsxs)('div', {
                className: j.summary,
                children: [
                    (0, r.jsx)(o.Text, {
                        className: j.sourceOrPresetName,
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: D ? (null != (a = null == I ? void 0 : I.name) ? a : v.intl.string(_.default['hJMA+/'])) : A
                    }),
                    (0, r.jsxs)(o.Text, {
                        className: j.summaryDetail,
                        variant: 'text-xs/medium',
                        color: 'text-muted',
                        children: [
                            D &&
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
                                                A
                                            ]
                                        }),
                                        (0, r.jsx)(b, {})
                                    ]
                                }),
                            null != G &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)('span', { children: G }), (0, r.jsx)(b, {})]
                                }),
                            (0, r.jsx)('span', { children: M }),
                            (0, r.jsx)(b, {}),
                            (0, r.jsx)('span', { children: ''.concat(k, 'fps') }),
                            Z &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(b, {}),
                                        (0, r.jsxs)('span', {
                                            className: j.iconSummaryContainer,
                                            children: [
                                                (0, r.jsx)(o.OyP, {
                                                    className: l()(j.icon, j.mutedIcon),
                                                    size: 'xxs',
                                                    color: 'currentColor'
                                                }),
                                                v.intl.string(_.default.FzMGWV)
                                            ]
                                        })
                                    ]
                                }),
                            B
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(b, {}),
                                          (0, r.jsx)('span', {
                                              children:
                                                  null ==
                                                  (n = P.find((e) => {
                                                      let { id: t } = e;
                                                      return N === t;
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
