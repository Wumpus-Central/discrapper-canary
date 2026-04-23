n.r(t), n.d(t, { default: () => P });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(481613),
    o = n.n(s),
    d = n(607399),
    u = n(247775),
    c = n(17928),
    _ = n(821609),
    A = n(138017),
    h = n(715482),
    E = n(189213),
    p = n(550079),
    m = n(477782),
    I = n(922016),
    g = n(534514),
    C = n(834730),
    T = n(315982),
    f = n(495544),
    N = n(287809),
    S = n(954571),
    O = n(53505),
    L = n(652215),
    y = n(985018),
    b = n(982085);
let v = [
        { getOs: () => y.intl.string(y.t.NK5ySJ), icon: b.Bt, url: () => (0, O.oW)("osx", !1), platformKey: 0 },
        { getOs: () => y.intl.string(y.t.OvKGE6), icon: b.KF, url: () => (0, O.oW)("win", !1), platformKey: 1 },
        {
            getOs: () => y.intl.string(y.t.dJB4PN),
            icon: b.pS,
            url: [
                { url: () => (0, O.oW)("linux", !1, "deb"), getText: () => y.intl.string(y.t.Sodsus) },
                { url: () => (0, O.oW)("linux", !1, "tar.gz"), getText: () => y.intl.string(y.t.G3U6IV) },
            ],
            platformKey: 2,
        },
    ],
    D = [
        { getOs: () => y.intl.string(y.t.wCVyNT), icon: b.s4, url: () => L.AMi.IOS, platformKey: 3 },
        { getOs: () => y.intl.string(y.t.wuQpJD), icon: b.yA, url: () => L.AMi.ANDROID, platformKey: 4 },
    ],
    R = (e) => {
        let { os: t, url: n, onClick: a } = e,
            l = r.useRef(null),
            [s, o] = r.useState(!1),
            d = r.useCallback(
                (e) => {
                    let { closePopout: r } = e;
                    return Array.isArray(n)
                        ? (0, i.jsx)(p.W, {
                              "data-menu-migrated": !0,
                              navId: "download-app-menu",
                              "aria-label": y.intl.string(y.t["+1H47t"]),
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
            ? (0, i.jsx)(I.Y, {
                  renderPopout: d,
                  targetElementRef: l,
                  align: "left",
                  position: "bottom",
                  onRequestOpen: () => o(!0),
                  onRequestClose: () => o(!1),
                  children: (e) =>
                      (0, i.jsx)(_.$, {
                          ...e,
                          buttonRef: l,
                          text: y.intl.string(y.t["1WjMbC"]),
                          variant: "primary",
                          size: "sm",
                          fullWidth: !0,
                          icon: s ? A.j : h.g,
                          iconPosition: "end",
                      }),
              })
            : (0, i.jsx)(_.$, {
                  text: y.intl.string(y.t["1WjMbC"]),
                  onClick: () => a(t, n()),
                  variant: "primary",
                  size: "sm",
                  fullWidth: !0,
                  role: "link",
              });
    },
    M = (e) => {
        let { platform: t, onClick: n, onMouseEnter: r, isActive: a } = e,
            { getOs: s, icon: o, url: d, platformKey: u } = t,
            c = s(),
            _ = l()(b.Kk, o);
        return (0, i.jsx)("li", {
            className: l()(b.iD, { [b.vu]: a }),
            onMouseEnter: () => r(u),
            children: (0, i.jsxs)("div", {
                className: b.FG,
                children: [
                    (0, i.jsxs)("div", {
                        className: b.aA,
                        children: [(0, i.jsx)("div", { className: _ }), (0, i.jsx)("div", { className: l()(b.vu, _) })],
                    }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(g.D, { className: b.$r, variant: "heading-lg/semibold", children: c }),
                            (0, i.jsx)("div", {
                                className: b.l6,
                                children: (0, i.jsx)(R, { os: c, url: d, onClick: n }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    };
function P(e) {
    let { source: t, onClose: n, transitionState: a } = e,
        s = (0, c.bG)([N.default], () => N.default.getCurrentUser()),
        _ = (0, c.bG)([f.default], () => f.default.getFingerprint()),
        A = null == s || s.isClaimed(),
        [h, p] = r.useState(
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
        (null != u.getToken() || null != _) &&
            S.default.track(L.HAw.DOWNLOAD_APP, {
                platform: e,
                ptb: !1,
                released: !0,
                has_e_mail: A,
                referring_location: t,
                qr_code: !1,
            }),
            A ? window.open(i, "_blank") : (n(), T.R());
    }
    function I(e) {
        p(e);
    }
    return (
        r.useEffect(() => {
            S.default.track(L.HAw.OPEN_MODAL, { type: "Download App", source: { location: t } });
        }, [t]),
        (0, i.jsx)(E.Modal, {
            title: y.intl.string(y.t["BK8LK+"]),
            actions: void 0,
            onClose: n,
            transitionState: a,
            preview: (0, i.jsx)(C.E, { variant: "text-sm/normal", children: y.intl.format(y.t["RJS+1P"], {}) }),
            children: (0, i.jsxs)("div", {
                className: b.kL,
                children: [
                    !d.Fr &&
                        (0, i.jsxs)("div", {
                            className: b.Fp,
                            children: [
                                (0, i.jsx)(g.D, {
                                    variant: "heading-md/normal",
                                    color: "text-subtle",
                                    className: b.wx,
                                    children: y.intl.string(y.t["0KK0bP"]),
                                }),
                                (0, i.jsx)("ul", {
                                    className: l()(b.Bn, b.Fw),
                                    children: v.map((e) =>
                                        (0, i.jsx)(
                                            M,
                                            { isActive: h === e.platformKey, platform: e, onClick: m, onMouseEnter: I },
                                            e.platformKey,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                    (0, i.jsxs)("div", {
                        className: b.Fp,
                        children: [
                            !d.Fr &&
                                (0, i.jsx)(g.D, {
                                    variant: "heading-md/normal",
                                    color: "text-subtle",
                                    className: b.wx,
                                    children: y.intl.string(y.t.RdSNWa),
                                }),
                            (0, i.jsx)("ul", {
                                className: l()(b.Bn, b.f$),
                                children: D.map((e) =>
                                    (0, i.jsx)(
                                        M,
                                        { isActive: h === e.platformKey, platform: e, onClick: m, onMouseEnter: I },
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
