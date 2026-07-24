"use strict";
n.r(t), n.d(t, { default: () => x });
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
    S = n(297264),
    N = n(834730),
    C = n(315982),
    O = n(280450),
    R = n(287809),
    L = n(174459),
    y = n(53505),
    D = n(652215),
    v = n(375708),
    b = n(333053);
let M = [
        { getOs: () => v.intl.string(v.t.NK5ySJ), icon: b.Bt, url: () => (0, y.oW)("osx", !1), platformKey: 0 },
        { getOs: () => v.intl.string(v.t.OvKGE6), icon: b.KF, url: () => (0, y.oW)("win", !1), platformKey: 1 },
        {
            getOs: () => v.intl.string(v.t.dJB4PN),
            icon: b.pS,
            url: [
                { url: () => (0, y.oW)("linux", !1, "deb"), getText: () => v.intl.string(v.t.Sodsus) },
                { url: () => (0, y.oW)("linux", !1, "tar.gz"), getText: () => v.intl.string(v.t.G3U6IV) },
            ],
            platformKey: 2,
        },
    ],
    P = [
        { getOs: () => v.intl.string(v.t.wCVyNT), icon: b.s4, url: () => D.AMi.IOS, platformKey: 3 },
        { getOs: () => v.intl.string(v.t.wuQpJD), icon: b.yA, url: () => D.AMi.ANDROID, platformKey: 4 },
    ],
    U = { getOs: () => v.intl.string(v.t.OPUqI3), icon: b.yX, url: () => D.AMi.META_QUEST, platformKey: 5 };
function w(e) {
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
                          "aria-label": v.intl.string(v.t["+1H47t"]),
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
                      text: v.intl.string(v.t["1WjMbC"]),
                      variant: "primary",
                      size: "sm",
                      fullWidth: !0,
                      icon: l ? E.j : A.g,
                      iconPosition: "end",
                  }),
          })
        : (0, i.jsx)(_.$, {
              text: v.intl.string(v.t["1WjMbC"]),
              onClick: () => a(t, n()),
              variant: "primary",
              size: "sm",
              fullWidth: !0,
              role: "link",
          });
}
function G(e) {
    let { platform: t, onClick: n, onMouseEnter: r, isActive: a } = e,
        { getOs: l, icon: o, url: d, platformKey: c } = t,
        u = l(),
        _ = s()(b.Kk, o);
    return (0, i.jsx)("li", {
        className: s()(b.iD, { [b.vu]: a }),
        onMouseEnter: () => r(c),
        children: (0, i.jsxs)("div", {
            className: b.FG,
            children: [
                (0, i.jsxs)("div", {
                    className: b.aA,
                    children: [(0, i.jsx)("div", { className: _ }), (0, i.jsx)("div", { className: s()(b.vu, _) })],
                }),
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(S.D, { className: b.$r, variant: "heading-lg/semibold", children: u }),
                        (0, i.jsx)("div", { className: b.l6, children: (0, i.jsx)(w, { os: u, url: d, onClick: n }) }),
                    ],
                }),
            ],
        }),
    });
}
function x(e) {
    let { source: t, onClose: n, transitionState: a } = e,
        l = (0, u.bG)([R.default], () => R.default.getCurrentUser()),
        _ = (0, u.bG)([O.default], () => O.default.getFingerprint()),
        E = null == l || l.isClaimed(),
        [A, T] = r.useState(
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
    function m(e, i) {
        (null != c.getToken() || null != _) &&
            L.default.track(D.HAw.DOWNLOAD_APP, {
                platform: e,
                ptb: !1,
                released: !0,
                has_e_mail: E,
                referring_location: t,
                qr_code: !1,
            }),
            E ? window.open(i, "_blank") : (n(), C.R());
    }
    function g(e) {
        T(e);
    }
    return (
        r.useEffect(() => {
            L.default.track(D.HAw.OPEN_MODAL, { type: "Download App", source: { location: t } });
        }, [t]),
        (0, i.jsxs)(h.d, {
            size: d.Fr ? "md" : "lg",
            onClose: n,
            transitionState: a,
            "aria-label": v.intl.string(v.t["BK8LK+"]),
            children: [
                (0, i.jsx)(I.rQ, { title: v.intl.string(v.t["BK8LK+"]) }),
                (0, i.jsx)(f.c, {
                    children: (0, i.jsxs)("div", {
                        className: b.kL,
                        children: [
                            !d.Fr &&
                                (0, i.jsxs)("div", {
                                    className: b.Fp,
                                    children: [
                                        (0, i.jsx)(S.D, {
                                            variant: "heading-md/normal",
                                            color: "text-subtle",
                                            className: b.wx,
                                            children: v.intl.string(v.t["0KK0bP"]),
                                        }),
                                        (0, i.jsxs)("ul", {
                                            className: s()(b.Bn, b.Fw),
                                            children: [
                                                M.map((e) =>
                                                    (0, i.jsx)(
                                                        G,
                                                        {
                                                            isActive: A === e.platformKey,
                                                            platform: e,
                                                            onClick: m,
                                                            onMouseEnter: g,
                                                        },
                                                        e.platformKey,
                                                    ),
                                                ),
                                                (0, i.jsx)(
                                                    G,
                                                    {
                                                        isActive: A === U.platformKey,
                                                        platform: U,
                                                        onClick: m,
                                                        onMouseEnter: g,
                                                    },
                                                    U.platformKey,
                                                ),
                                            ],
                                        }),
                                    ],
                                }),
                            (0, i.jsxs)("div", {
                                className: b.Fp,
                                children: [
                                    !d.Fr &&
                                        (0, i.jsx)(S.D, {
                                            variant: "heading-md/normal",
                                            color: "text-subtle",
                                            className: b.wx,
                                            children: v.intl.string(v.t.RdSNWa),
                                        }),
                                    (0, i.jsx)("ul", {
                                        className: s()(b.Bn, b.f$),
                                        children: P.map((e) =>
                                            (0, i.jsx)(
                                                G,
                                                {
                                                    isActive: A === e.platformKey,
                                                    platform: e,
                                                    onClick: m,
                                                    onMouseEnter: g,
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
                        children: v.intl.format(v.t["RJS+1P"], {}),
                    }),
                }),
            ],
        })
    );
}
