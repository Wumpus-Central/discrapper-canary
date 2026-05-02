"use strict";
n.r(t), n.d(t, { default: () => M });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(481613),
    l = n.n(o),
    u = n(607399),
    c = n(247775),
    d = n(17928),
    _ = n(821609),
    f = n(138017),
    h = n(715482),
    p = n(189213),
    E = n(980707),
    m = n(477782),
    g = n(922016),
    A = n(534514),
    I = n(834730),
    T = n(315982),
    S = n(495544),
    N = n(287809),
    y = n(174459),
    C = n(53505),
    v = n(652215),
    O = n(375708),
    R = n(982085);
let b = [
        { getOs: () => O.intl.string(O.t.NK5ySJ), icon: R.Bt, url: () => (0, C.oW)("osx", !1), platformKey: 0 },
        { getOs: () => O.intl.string(O.t.OvKGE6), icon: R.KF, url: () => (0, C.oW)("win", !1), platformKey: 1 },
        {
            getOs: () => O.intl.string(O.t.dJB4PN),
            icon: R.pS,
            url: [
                { url: () => (0, C.oW)("linux", !1, "deb"), getText: () => O.intl.string(O.t.Sodsus) },
                { url: () => (0, C.oW)("linux", !1, "tar.gz"), getText: () => O.intl.string(O.t.G3U6IV) },
            ],
            platformKey: 2,
        },
    ],
    D = [
        { getOs: () => O.intl.string(O.t.wCVyNT), icon: R.s4, url: () => v.AMi.IOS, platformKey: 3 },
        { getOs: () => O.intl.string(O.t.wuQpJD), icon: R.yA, url: () => v.AMi.ANDROID, platformKey: 4 },
    ],
    L = (e) => {
        let { os: t, url: n, onClick: s } = e,
            a = r.useRef(null),
            [o, l] = r.useState(!1),
            u = r.useCallback(
                (e) => {
                    let { closePopout: r } = e;
                    return Array.isArray(n)
                        ? (0, i.jsx)(E.W, {
                              "data-menu-migrated": !0,
                              navId: "download-app-menu",
                              "aria-label": O.intl.string(O.t["+1H47t"]),
                              onClose: r,
                              onSelect: void 0,
                              children: n.map((e) =>
                                  (0, i.jsx)(
                                      m.Dr,
                                      { id: e.url(), label: e.getText(), action: () => s(t, e.url()) },
                                      e.url(),
                                  ),
                              ),
                          })
                        : null;
                },
                [t, n, s],
            );
        return Array.isArray(n)
            ? (0, i.jsx)(g.Y, {
                  renderPopout: u,
                  targetElementRef: a,
                  align: "left",
                  position: "bottom",
                  onRequestOpen: () => l(!0),
                  onRequestClose: () => l(!1),
                  children: (e) =>
                      (0, i.jsx)(_.$, {
                          ...e,
                          buttonRef: a,
                          text: O.intl.string(O.t["1WjMbC"]),
                          variant: "primary",
                          size: "sm",
                          fullWidth: !0,
                          icon: o ? f.j : h.g,
                          iconPosition: "end",
                      }),
              })
            : (0, i.jsx)(_.$, {
                  text: O.intl.string(O.t["1WjMbC"]),
                  onClick: () => s(t, n()),
                  variant: "primary",
                  size: "sm",
                  fullWidth: !0,
                  role: "link",
              });
    },
    w = (e) => {
        let { platform: t, onClick: n, onMouseEnter: r, isActive: s } = e,
            { getOs: o, icon: l, url: u, platformKey: c } = t,
            d = o(),
            _ = a()(R.Kk, l);
        return (0, i.jsx)("li", {
            className: a()(R.iD, { [R.vu]: s }),
            onMouseEnter: () => r(c),
            children: (0, i.jsxs)("div", {
                className: R.FG,
                children: [
                    (0, i.jsxs)("div", {
                        className: R.aA,
                        children: [(0, i.jsx)("div", { className: _ }), (0, i.jsx)("div", { className: a()(R.vu, _) })],
                    }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(A.D, { className: R.$r, variant: "heading-lg/semibold", children: d }),
                            (0, i.jsx)("div", {
                                className: R.l6,
                                children: (0, i.jsx)(L, { os: d, url: u, onClick: n }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    };
function M(e) {
    let { source: t, onClose: n, transitionState: s } = e,
        o = (0, d.bG)([N.default], () => N.default.getCurrentUser()),
        _ = (0, d.bG)([S.default], () => S.default.getFingerprint()),
        f = null == o || o.isClaimed(),
        [h, E] = r.useState(
            (function () {
                switch (l().os?.family) {
                    case "OS X":
                        return 0;
                    case "Windows":
                        return 1;
                    case "Ubuntu":
                    case "Debian":
                    case "Fedora":
                    case "Red Hat":
                    case "SuSE":
                    case "Linux":
                        return 2;
                    case "iOS":
                        return 3;
                    case "Android":
                        return 4;
                    default:
                        return;
                }
            })(),
        );
    function m(e, i) {
        (null != c.getToken() || null != _) &&
            y.default.track(v.HAw.DOWNLOAD_APP, {
                platform: e,
                ptb: !1,
                released: !0,
                has_e_mail: f,
                referring_location: t,
                qr_code: !1,
            }),
            f ? window.open(i, "_blank") : (n(), T.R());
    }
    function g(e) {
        E(e);
    }
    return (
        r.useEffect(() => {
            y.default.track(v.HAw.OPEN_MODAL, { type: "Download App", source: { location: t } });
        }, [t]),
        (0, i.jsx)(p.Modal, {
            title: O.intl.string(O.t["BK8LK+"]),
            actions: void 0,
            onClose: n,
            transitionState: s,
            preview: (0, i.jsx)(I.E, { variant: "text-sm/normal", children: O.intl.format(O.t["RJS+1P"], {}) }),
            children: (0, i.jsxs)("div", {
                className: R.kL,
                children: [
                    !u.Fr &&
                        (0, i.jsxs)("div", {
                            className: R.Fp,
                            children: [
                                (0, i.jsx)(A.D, {
                                    variant: "heading-md/normal",
                                    color: "text-subtle",
                                    className: R.wx,
                                    children: O.intl.string(O.t["0KK0bP"]),
                                }),
                                (0, i.jsx)("ul", {
                                    className: a()(R.Bn, R.Fw),
                                    children: b.map((e) =>
                                        (0, i.jsx)(
                                            w,
                                            { isActive: h === e.platformKey, platform: e, onClick: m, onMouseEnter: g },
                                            e.platformKey,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                    (0, i.jsxs)("div", {
                        className: R.Fp,
                        children: [
                            !u.Fr &&
                                (0, i.jsx)(A.D, {
                                    variant: "heading-md/normal",
                                    color: "text-subtle",
                                    className: R.wx,
                                    children: O.intl.string(O.t.RdSNWa),
                                }),
                            (0, i.jsx)("ul", {
                                className: a()(R.Bn, R.f$),
                                children: D.map((e) =>
                                    (0, i.jsx)(
                                        w,
                                        { isActive: h === e.platformKey, platform: e, onClick: m, onMouseEnter: g },
                                        e.platformKey,
                                    ),
                                ),
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
