"use strict";
n.r(t), n.d(t, { default: () => k });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(481613),
    o = n.n(l),
    d = n(607399),
    c = n(247775),
    u = n(17928),
    _ = n(821609),
    E = n(138017),
    A = n(715482),
    h = n(224640),
    I = n(20742),
    f = n(430993),
    p = n(364840),
    T = n(980707),
    m = n(477782),
    g = n(922016),
    S = n(534514),
    N = n(834730),
    C = n(315982),
    O = n(160394),
    R = n(280450),
    L = n(287809),
    D = n(174459),
    y = n(53505),
    v = n(652215),
    b = n(375708),
    M = n(982085);
let P = [
        { getOs: () => b.intl.string(b.t.NK5ySJ), icon: M.Bt, url: () => (0, y.oW)("osx", !1), platformKey: 0 },
        { getOs: () => b.intl.string(b.t.OvKGE6), icon: M.KF, url: () => (0, y.oW)("win", !1), platformKey: 1 },
        {
            getOs: () => b.intl.string(b.t.dJB4PN),
            icon: M.pS,
            url: [
                { url: () => (0, y.oW)("linux", !1, "deb"), getText: () => b.intl.string(b.t.Sodsus) },
                { url: () => (0, y.oW)("linux", !1, "tar.gz"), getText: () => b.intl.string(b.t.G3U6IV) },
            ],
            platformKey: 2,
        },
    ],
    U = [
        { getOs: () => b.intl.string(b.t.wCVyNT), icon: M.s4, url: () => v.AMi.IOS, platformKey: 3 },
        { getOs: () => b.intl.string(b.t.wuQpJD), icon: M.yA, url: () => v.AMi.ANDROID, platformKey: 4 },
    ],
    w = { getOs: () => b.intl.string(b.t.OPUqI3), icon: M.yX, url: () => v.AMi.META_QUEST, platformKey: 5 };
function G(e) {
    let { os: t, url: n, onClick: a } = e,
        s = r.useRef(null),
        [l, o] = r.useState(!1),
        d = r.useCallback(
            (e) => {
                let { closePopout: r } = e;
                return Array.isArray(n)
                    ? (0, i.jsx)(T.W, {
                          "data-menu-migrated": !0,
                          navId: "download-app-menu",
                          "aria-label": b.intl.string(b.t["+1H47t"]),
                          onClose: r,
                          onSelect: void 0,
                          children: n.map((e) =>
                              (0, i.jsx)(
                                  m.Dr,
                                  { id: e.url(), label: e.getText(), action: () => a(t, e.url()) },
                                  e.url(),
                              ),
                          ),
                      })
                    : null;
            },
            [t, n, a],
        );
    return Array.isArray(n)
        ? (0, i.jsx)(g.Y, {
              renderPopout: d,
              targetElementRef: s,
              align: "left",
              position: "bottom",
              onRequestOpen: () => o(!0),
              onRequestClose: () => o(!1),
              children: (e) =>
                  (0, i.jsx)(_.$, {
                      ...e,
                      buttonRef: s,
                      text: b.intl.string(b.t["1WjMbC"]),
                      variant: "primary",
                      size: "sm",
                      fullWidth: !0,
                      icon: l ? E.j : A.g,
                      iconPosition: "end",
                  }),
          })
        : (0, i.jsx)(_.$, {
              text: b.intl.string(b.t["1WjMbC"]),
              onClick: () => a(t, n()),
              variant: "primary",
              size: "sm",
              fullWidth: !0,
              role: "link",
          });
}
function x(e) {
    let { platform: t, onClick: n, onMouseEnter: r, isActive: a } = e,
        { getOs: l, icon: o, url: d, platformKey: c } = t,
        u = l(),
        _ = s()(M.Kk, o);
    return (0, i.jsx)("li", {
        className: s()(M.iD, { [M.vu]: a }),
        onMouseEnter: () => r(c),
        children: (0, i.jsxs)("div", {
            className: M.FG,
            children: [
                (0, i.jsxs)("div", {
                    className: M.aA,
                    children: [(0, i.jsx)("div", { className: _ }), (0, i.jsx)("div", { className: s()(M.vu, _) })],
                }),
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(S.D, { className: M.$r, variant: "heading-lg/semibold", children: u }),
                        (0, i.jsx)("div", { className: M.l6, children: (0, i.jsx)(G, { os: u, url: d, onClick: n }) }),
                    ],
                }),
            ],
        }),
    });
}
function k(e) {
    let { source: t, onClose: n, transitionState: a } = e,
        l = (0, u.bG)([L.default], () => L.default.getCurrentUser()),
        _ = (0, u.bG)([R.default], () => R.default.getFingerprint()),
        E = null == l || l.isClaimed(),
        { enabled: A } = O.A.useConfig({ location: "DownloadAppsModal" }),
        [T, m] = r.useState(
            (function () {
                switch (o().os?.family) {
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
    function g(e, i) {
        (null != c.getToken() || null != _) &&
            D.default.track(v.HAw.DOWNLOAD_APP, {
                platform: e,
                ptb: !1,
                released: !0,
                has_e_mail: E,
                referring_location: t,
                qr_code: !1,
            }),
            E ? window.open(i, "_blank") : (n(), C.R());
    }
    function y(e) {
        m(e);
    }
    return (
        r.useEffect(() => {
            D.default.track(v.HAw.OPEN_MODAL, { type: "Download App", source: { location: t } });
        }, [t]),
        (0, i.jsxs)(h.d, {
            size: !d.Fr && A ? "lg" : "md",
            onClose: n,
            transitionState: a,
            "aria-label": b.intl.string(b.t["BK8LK+"]),
            children: [
                (0, i.jsx)(I.rQ, { title: b.intl.string(b.t["BK8LK+"]) }),
                (0, i.jsx)(f.c, {
                    children: (0, i.jsxs)("div", {
                        className: M.kL,
                        children: [
                            !d.Fr &&
                                (0, i.jsxs)("div", {
                                    className: M.Fp,
                                    children: [
                                        (0, i.jsx)(S.D, {
                                            variant: "heading-md/normal",
                                            color: "text-subtle",
                                            className: M.wx,
                                            children: b.intl.string(b.t["0KK0bP"]),
                                        }),
                                        (0, i.jsxs)("ul", {
                                            className: s()(M.Bn, M.Fw),
                                            children: [
                                                P.map((e) =>
                                                    (0, i.jsx)(
                                                        x,
                                                        {
                                                            isActive: T === e.platformKey,
                                                            platform: e,
                                                            onClick: g,
                                                            onMouseEnter: y,
                                                        },
                                                        e.platformKey,
                                                    ),
                                                ),
                                                A &&
                                                    (0, i.jsx)(
                                                        x,
                                                        {
                                                            isActive: T === w.platformKey,
                                                            platform: w,
                                                            onClick: g,
                                                            onMouseEnter: y,
                                                        },
                                                        w.platformKey,
                                                    ),
                                            ],
                                        }),
                                    ],
                                }),
                            (0, i.jsxs)("div", {
                                className: M.Fp,
                                children: [
                                    !d.Fr &&
                                        (0, i.jsx)(S.D, {
                                            variant: "heading-md/normal",
                                            color: "text-subtle",
                                            className: M.wx,
                                            children: b.intl.string(b.t.RdSNWa),
                                        }),
                                    (0, i.jsx)("ul", {
                                        className: s()(M.Bn, M.f$),
                                        children: U.map((e) =>
                                            (0, i.jsx)(
                                                x,
                                                {
                                                    isActive: T === e.platformKey,
                                                    platform: e,
                                                    onClick: g,
                                                    onMouseEnter: y,
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
                (0, i.jsx)(p.j, {
                    children: (0, i.jsx)(N.E, {
                        variant: "text-sm/normal",
                        children: b.intl.format(b.t["RJS+1P"], {}),
                    }),
                }),
            ],
        })
    );
}
