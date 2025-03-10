n.d(t, { Z: () => _ }), n(47120);
var r = n(200651);
n(192379);
var l = n(481060),
    i = n(925329),
    s = n(668519),
    o = n(672811),
    a = n(891180),
    c = n(556389),
    d = n(615161),
    u = n(565574),
    f = n(396678),
    h = n(889150),
    m = n(388032),
    x = n(63770);
function g() {
    return (0, r.jsx)('span', {
        className: x.ellipsis,
        children: '\u2022'
    });
}
function p(e) {
    let { source: t } = e;
    return null == t
        ? (0, r.jsx)(l.hGI, {
              className: x.screenArrowIcon,
              size: 'md'
          })
        : (0, c.T)(t)
          ? (0, r.jsx)(i.Z, {
                game: null,
                pid: t.pid
            })
          : null == t.icon || '' === t.icon
            ? (0, r.jsx)(l.hGI, {
                  className: x.screenArrowIcon,
                  size: 'md'
              })
            : (0, r.jsx)('img', {
                  src: t.icon,
                  alt: '',
                  className: x.sourceIcon
              });
}
function _() {
    var e, t;
    let [{ preset: n, resolution: i, fps: c, muteStreamAudio: _, selectedSource: v }] = (0, d.E_)(),
        { twoClickVariant: j } = (0, s.a)({
            location: 'go_live_modal_refresh',
            autoTrackExposure: !1
        }),
        [b, C] = null !== (e = (0, f.Z)(n)) && void 0 !== e ? e : [i, c],
        S = (0, o.L)(n),
        N = (0, a.M)(b),
        y = null != v || j;
    return (0, r.jsxs)('div', {
        className: x.root,
        children: [
            y ? (0, r.jsx)(p, { source: v }) : (0, r.jsx)(u.Z, {}),
            (0, r.jsxs)('div', {
                className: x.summary,
                children: [
                    (0, r.jsx)(l.Text, {
                        className: x.sourceOrPresetName,
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: y ? (null !== (t = null == v ? void 0 : v.name) && void 0 !== t ? t : m.NW.string(h.Z['hJMA+/'])) : S
                    }),
                    (0, r.jsxs)(l.Text, {
                        className: x.summaryDetail,
                        variant: 'text-xs/medium',
                        color: 'text-muted',
                        children: [
                            y &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsxs)('span', {
                                            className: x.iconSummaryContainer,
                                            children: [
                                                (0, r.jsx)(l.ewm, {
                                                    size: 'xxs',
                                                    color: 'currentColor'
                                                }),
                                                S
                                            ]
                                        }),
                                        (0, r.jsx)(g, {})
                                    ]
                                }),
                            m.NW.format(h.Z['7A4ZyM'], { resolution: N }),
                            (0, r.jsx)(g, {}),
                            m.NW.format(h.Z.CmJX8P, { frameRate: C }),
                            _ &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(g, {}),
                                        (0, r.jsxs)('span', {
                                            className: x.iconSummaryContainer,
                                            children: [
                                                (0, r.jsx)(l.OyP, {
                                                    className: x.mutedIcon,
                                                    size: 'xxs',
                                                    color: 'currentColor'
                                                }),
                                                m.NW.string(h.Z.FzMGWV)
                                            ]
                                        })
                                    ]
                                })
                        ]
                    })
                ]
            })
        ]
    });
}
