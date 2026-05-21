"use strict";
n.r(t), n.d(t, { default: () => G });
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
    p = n(224640),
    E = n(20742),
    m = n(430993),
    g = n(364840),
    A = n(980707),
    I = n(477782),
    T = n(922016),
    S = n(534514),
    N = n(834730),
    y = n(315982),
    C = n(160394),
    v = n(495544),
    O = n(287809),
    R = n(174459),
    b = n(53505),
    D = n(652215),
    L = n(375708),
    w = n(982085);
let M = [
        { getOs: () => L.intl.string(L.t.NK5ySJ), icon: w.Bt, url: () => (0, b.oW)("osx", !1), platformKey: 0 },
        { getOs: () => L.intl.string(L.t.OvKGE6), icon: w.KF, url: () => (0, b.oW)("win", !1), platformKey: 1 },
        {
            getOs: () => L.intl.string(L.t.dJB4PN),
            icon: w.pS,
            url: [
                { url: () => (0, b.oW)("linux", !1, "deb"), getText: () => L.intl.string(L.t.Sodsus) },
                { url: () => (0, b.oW)("linux", !1, "tar.gz"), getText: () => L.intl.string(L.t.G3U6IV) },
            ],
            platformKey: 2,
        },
    ],
    P = [
        { getOs: () => L.intl.string(L.t.wCVyNT), icon: w.s4, url: () => D.AMi.IOS, platformKey: 3 },
        { getOs: () => L.intl.string(L.t.wuQpJD), icon: w.yA, url: () => D.AMi.ANDROID, platformKey: 4 },
    ],
    x = { getOs: () => L.intl.string(L.t.OPUqI3), icon: w.yX, url: () => D.AMi.META_QUEST, platformKey: 5 },
    U = (e) => {
        let { os: t, url: n, onClick: s } = e,
            a = r.useRef(null),
            [o, l] = r.useState(!1),
            u = r.useCallback(
                (e) => {
                    let { closePopout: r } = e;
                    return Array.isArray(n)
                        ? (0, i.jsx)(A.W, {
                              "data-menu-migrated": !0,
                              navId: "download-app-menu",
                              "aria-label": L.intl.string(L.t["+1H47t"]),
                              onClose: r,
                              onSelect: void 0,
                              children: n.map((e) =>
                                  (0, i.jsx)(
                                      I.Dr,
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
            ? (0, i.jsx)(T.Y, {
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
                          text: L.intl.string(L.t["1WjMbC"]),
                          variant: "primary",
                          size: "sm",
                          fullWidth: !0,
                          icon: o ? f.j : h.g,
                          iconPosition: "end",
                      }),
              })
            : (0, i.jsx)(_.$, {
                  text: L.intl.string(L.t["1WjMbC"]),
                  onClick: () => s(t, n()),
                  variant: "primary",
                  size: "sm",
                  fullWidth: !0,
                  role: "link",
              });
    },
    k = (e) => {
        let { platform: t, onClick: n, onMouseEnter: r, isActive: s } = e,
            { getOs: o, icon: l, url: u, platformKey: c } = t,
            d = o(),
            _ = a()(w.Kk, l);
        return (0, i.jsx)("li", {
            className: a()(w.iD, { [w.vu]: s }),
            onMouseEnter: () => r(c),
            children: (0, i.jsxs)("div", {
                className: w.FG,
                children: [
                    (0, i.jsxs)("div", {
                        className: w.aA,
                        children: [(0, i.jsx)("div", { className: _ }), (0, i.jsx)("div", { className: a()(w.vu, _) })],
                    }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(S.D, { className: w.$r, variant: "heading-lg/semibold", children: d }),
                            (0, i.jsx)("div", {
                                className: w.l6,
                                children: (0, i.jsx)(U, { os: d, url: u, onClick: n }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    };
function G(e) {
    let { source: t, onClose: n, transitionState: s } = e,
        o = (0, d.bG)([O.default], () => O.default.getCurrentUser()),
        _ = (0, d.bG)([v.default], () => v.default.getFingerprint()),
        f = null == o || o.isClaimed(),
        { enabled: h } = C.A.useConfig({ location: "DownloadAppsModal" }),
        [A, I] = r.useState(
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
    function T(e, i) {
        (null != c.getToken() || null != _) &&
            R.default.track(D.HAw.DOWNLOAD_APP, {
                platform: e,
                ptb: !1,
                released: !0,
                has_e_mail: f,
                referring_location: t,
                qr_code: !1,
            }),
            f ? window.open(i, "_blank") : (n(), y.R());
    }
    function b(e) {
        I(e);
    }
    return (
        r.useEffect(() => {
            R.default.track(D.HAw.OPEN_MODAL, { type: "Download App", source: { location: t } });
        }, [t]),
        (0, i.jsxs)(p.d, {
            size: !u.Fr && h ? "lg" : "md",
            onClose: n,
            transitionState: s,
            "aria-label": L.intl.string(L.t["BK8LK+"]),
            children: [
                (0, i.jsx)(E.rQ, { title: L.intl.string(L.t["BK8LK+"]) }),
                (0, i.jsx)(m.c, {
                    children: (0, i.jsxs)("div", {
                        className: w.kL,
                        children: [
                            !u.Fr &&
                                (0, i.jsxs)("div", {
                                    className: w.Fp,
                                    children: [
                                        (0, i.jsx)(S.D, {
                                            variant: "heading-md/normal",
                                            color: "text-subtle",
                                            className: w.wx,
                                            children: L.intl.string(L.t["0KK0bP"]),
                                        }),
                                        (0, i.jsxs)("ul", {
                                            className: a()(w.Bn, w.Fw),
                                            children: [
                                                M.map((e) =>
                                                    (0, i.jsx)(
                                                        k,
                                                        {
                                                            isActive: A === e.platformKey,
                                                            platform: e,
                                                            onClick: T,
                                                            onMouseEnter: b,
                                                        },
                                                        e.platformKey,
                                                    ),
                                                ),
                                                h &&
                                                    (0, i.jsx)(
                                                        k,
                                                        {
                                                            isActive: A === x.platformKey,
                                                            platform: x,
                                                            onClick: T,
                                                            onMouseEnter: b,
                                                        },
                                                        x.platformKey,
                                                    ),
                                            ],
                                        }),
                                    ],
                                }),
                            (0, i.jsxs)("div", {
                                className: w.Fp,
                                children: [
                                    !u.Fr &&
                                        (0, i.jsx)(S.D, {
                                            variant: "heading-md/normal",
                                            color: "text-subtle",
                                            className: w.wx,
                                            children: L.intl.string(L.t.RdSNWa),
                                        }),
                                    (0, i.jsx)("ul", {
                                        className: a()(w.Bn, w.f$),
                                        children: P.map((e) =>
                                            (0, i.jsx)(
                                                k,
                                                {
                                                    isActive: A === e.platformKey,
                                                    platform: e,
                                                    onClick: T,
                                                    onMouseEnter: b,
                                                },
                                                e.platformKey,
                                            ),
                                        ),
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                (0, i.jsx)(g.j, {
                    children: (0, i.jsx)(N.E, {
                        variant: "text-sm/normal",
                        children: L.intl.format(L.t["RJS+1P"], {}),
                    }),
                }),
            ],
        })
    );
}
