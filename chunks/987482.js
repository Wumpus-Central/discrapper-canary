n.r(t), n.d(t, { default: () => E });
var l = n(627968),
    s = n(64700),
    i = n(503698),
    r = n.n(i),
    a = n(481613),
    o = n.n(a),
    c = n(607399),
    u = n(247775),
    d = n(17928),
    m = n(821609),
    p = n(138017),
    x = n(715482),
    f = n(189213),
    g = n(550079),
    h = n(477782),
    j = n(922016),
    v = n(534514),
    N = n(834730),
    b = n(315982),
    y = n(495544),
    A = n(287809),
    w = n(954571),
    K = n(53505),
    k = n(652215),
    C = n(985018),
    O = n(982085);
let S = [
        { getOs: () => C.intl.string(C.t.NK5ySJ), icon: O.Bt, url: () => (0, K.oW)("osx", !1), platformKey: 0 },
        { getOs: () => C.intl.string(C.t.OvKGE6), icon: O.KF, url: () => (0, K.oW)("win", !1), platformKey: 1 },
        {
            getOs: () => C.intl.string(C.t.dJB4PN),
            icon: O.pS,
            url: [
                { url: () => (0, K.oW)("linux", !1, "deb"), getText: () => C.intl.string(C.t.Sodsus) },
                { url: () => (0, K.oW)("linux", !1, "tar.gz"), getText: () => C.intl.string(C.t.G3U6IV) },
            ],
            platformKey: 2,
        },
    ],
    D = [
        { getOs: () => C.intl.string(C.t.wCVyNT), icon: O.s4, url: () => k.AMi.IOS, platformKey: 3 },
        { getOs: () => C.intl.string(C.t.wuQpJD), icon: O.yA, url: () => k.AMi.ANDROID, platformKey: 4 },
    ],
    W = (e) => {
        let { os: t, url: n, onClick: i } = e,
            r = s.useRef(null),
            [a, o] = s.useState(!1),
            c = s.useCallback(
                (e) => {
                    let { closePopout: s } = e;
                    return Array.isArray(n)
                        ? (0, l.jsx)(g.W, {
                              "data-menu-migrated": !0,
                              navId: "download-app-menu",
                              "aria-label": C.intl.string(C.t["+1H47t"]),
                              onClose: s,
                              onSelect: void 0,
                              children: n.map((e) =>
                                  (0, l.jsx)(
                                      h.Dr,
                                      { id: e.url(), label: e.getText(), action: () => i(t, e.url()) },
                                      e.url(),
                                  ),
                              ),
                          })
                        : null;
                },
                [t, n, i],
            );
        return Array.isArray(n)
            ? (0, l.jsx)(j.Y, {
                  renderPopout: c,
                  targetElementRef: r,
                  align: "left",
                  position: "bottom",
                  onRequestOpen: () => o(!0),
                  onRequestClose: () => o(!1),
                  children: (e) =>
                      (0, l.jsx)(m.$, {
                          ...e,
                          buttonRef: r,
                          text: C.intl.string(C.t["1WjMbC"]),
                          variant: "primary",
                          size: "sm",
                          fullWidth: !0,
                          icon: a ? p.j : x.g,
                          iconPosition: "end",
                      }),
              })
            : (0, l.jsx)(m.$, {
                  text: C.intl.string(C.t["1WjMbC"]),
                  onClick: () => i(t, n()),
                  variant: "primary",
                  size: "sm",
                  fullWidth: !0,
                  role: "link",
              });
    },
    R = (e) => {
        let { platform: t, onClick: n, onMouseEnter: s, isActive: i } = e,
            { getOs: a, icon: o, url: c, platformKey: u } = t,
            d = a(),
            m = r()(O.Kk, o);
        return (0, l.jsx)("li", {
            className: r()(O.iD, { [O.vu]: i }),
            onMouseEnter: () => s(u),
            children: (0, l.jsxs)("div", {
                className: O.FG,
                children: [
                    (0, l.jsxs)("div", {
                        className: O.aA,
                        children: [(0, l.jsx)("div", { className: m }), (0, l.jsx)("div", { className: r()(O.vu, m) })],
                    }),
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(v.D, { className: O.$r, variant: "heading-lg/semibold", children: d }),
                            (0, l.jsx)("div", {
                                className: O.l6,
                                children: (0, l.jsx)(W, { os: d, url: c, onClick: n }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    };
function E(e) {
    let { source: t, onClose: n, transitionState: i } = e,
        a = (0, d.bG)([A.default], () => A.default.getCurrentUser()),
        m = (0, d.bG)([y.default], () => y.default.getFingerprint()),
        p = null == a || a.isClaimed(),
        [x, g] = s.useState(
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
    function h(e, l) {
        (null != u.getToken() || null != m) &&
            w.default.track(k.HAw.DOWNLOAD_APP, {
                platform: e,
                ptb: !1,
                released: !0,
                has_e_mail: p,
                referring_location: t,
                qr_code: !1,
            }),
            p ? window.open(l, "_blank") : (n(), b.R());
    }
    function j(e) {
        g(e);
    }
    return (
        s.useEffect(() => {
            w.default.track(k.HAw.OPEN_MODAL, { type: "Download App", source: { location: t } });
        }, [t]),
        (0, l.jsx)(f.Modal, {
            title: C.intl.string(C.t["BK8LK+"]),
            actions: void 0,
            onClose: n,
            transitionState: i,
            preview: (0, l.jsx)(N.E, { variant: "text-sm/normal", children: C.intl.format(C.t["RJS+1P"], {}) }),
            children: (0, l.jsxs)("div", {
                className: O.kL,
                children: [
                    !c.Fr &&
                        (0, l.jsxs)("div", {
                            className: O.Fp,
                            children: [
                                (0, l.jsx)(v.D, {
                                    variant: "heading-md/normal",
                                    color: "text-subtle",
                                    className: O.wx,
                                    children: C.intl.string(C.t["0KK0bP"]),
                                }),
                                (0, l.jsx)("ul", {
                                    className: r()(O.Bn, O.Fw),
                                    children: S.map((e) =>
                                        (0, l.jsx)(
                                            R,
                                            { isActive: x === e.platformKey, platform: e, onClick: h, onMouseEnter: j },
                                            e.platformKey,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                    (0, l.jsxs)("div", {
                        className: O.Fp,
                        children: [
                            !c.Fr &&
                                (0, l.jsx)(v.D, {
                                    variant: "heading-md/normal",
                                    color: "text-subtle",
                                    className: O.wx,
                                    children: C.intl.string(C.t.RdSNWa),
                                }),
                            (0, l.jsx)("ul", {
                                className: r()(O.Bn, O.f$),
                                children: D.map((e) =>
                                    (0, l.jsx)(
                                        R,
                                        { isActive: x === e.platformKey, platform: e, onClick: h, onMouseEnter: j },
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
