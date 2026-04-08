n.r(t), n.d(t, { default: () => v });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(481613),
    o = n.n(s),
    d = n(607399),
    c = n(247775),
    u = n(311907),
    A = n(732955),
    h = n(397927),
    _ = n(315982),
    m = n(961350),
    p = n(287809),
    g = n(954571),
    E = n(53505),
    I = n(652215),
    f = n(985018),
    C = n(342453);
let T = [
        { getOs: () => f.intl.string(f.t.NK5ySJ), icon: C.Bt, url: () => (0, E.oW)("osx", !1), platformKey: 0 },
        { getOs: () => f.intl.string(f.t.OvKGE6), icon: C.KF, url: () => (0, E.oW)("win", !1), platformKey: 1 },
        {
            getOs: () => f.intl.string(f.t.dJB4PN),
            icon: C.pS,
            url: [
                { url: () => (0, E.oW)("linux", !1, "deb"), getText: () => f.intl.string(f.t.Sodsus) },
                { url: () => (0, E.oW)("linux", !1, "tar.gz"), getText: () => f.intl.string(f.t.G3U6IV) },
            ],
            platformKey: 2,
        },
    ],
    N = [
        { getOs: () => f.intl.string(f.t.wCVyNT), icon: C.s4, url: () => I.AMi.IOS, platformKey: 3 },
        { getOs: () => f.intl.string(f.t.wuQpJD), icon: C.yA, url: () => I.AMi.ANDROID, platformKey: 4 },
    ],
    S = (e) => {
        let { os: t, url: n, onClick: a } = e,
            l = r.useRef(null),
            [s, o] = r.useState(!1),
            d = r.useCallback(
                (e) => {
                    let { closePopout: r } = e;
                    return Array.isArray(n)
                        ? (0, i.jsx)(h.W1t, {
                              "data-menu-migrated": !0,
                              navId: "download-app-menu",
                              "aria-label": f.intl.string(f.t["+1H47t"]),
                              onClose: r,
                              onSelect: void 0,
                              children: n.map((e) =>
                                  (0, i.jsx)(
                                      h.Drp,
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
            ? (0, i.jsx)(h.YNO, {
                  renderPopout: d,
                  targetElementRef: l,
                  align: "left",
                  position: "bottom",
                  onRequestOpen: () => o(!0),
                  onRequestClose: () => o(!1),
                  children: (e) =>
                      (0, i.jsx)(A.$nd, {
                          ...e,
                          buttonRef: l,
                          text: f.intl.string(f.t["1WjMbC"]),
                          variant: "primary",
                          size: "sm",
                          fullWidth: !0,
                          icon: s ? A.jQp : A.g8p,
                          iconPosition: "end",
                      }),
              })
            : (0, i.jsx)(A.$nd, {
                  text: f.intl.string(f.t["1WjMbC"]),
                  onClick: () => a(t, n()),
                  variant: "primary",
                  size: "sm",
                  fullWidth: !0,
                  role: "link",
              });
    },
    x = (e) => {
        let { platform: t, onClick: n, onMouseEnter: r, isActive: a } = e,
            { getOs: s, icon: o, url: d, platformKey: c } = t,
            u = s(),
            A = l()(C.Kk, o);
        return (0, i.jsx)("li", {
            className: l()(C.iD, { [C.vu]: a }),
            onMouseEnter: () => r(c),
            children: (0, i.jsxs)("div", {
                className: C.FG,
                children: [
                    (0, i.jsxs)("div", {
                        className: C.aA,
                        children: [(0, i.jsx)("div", { className: A }), (0, i.jsx)("div", { className: l()(C.vu, A) })],
                    }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(h.Heading, { className: C.$r, variant: "heading-lg/semibold", children: u }),
                            (0, i.jsx)("div", {
                                className: C.l6,
                                children: (0, i.jsx)(S, { os: u, url: d, onClick: n }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    };
function v(e) {
    let { source: t, onClose: n, transitionState: a } = e,
        s = (0, u.bG)([p.default], () => p.default.getCurrentUser()),
        E = (0, u.bG)([m.default], () => m.default.getFingerprint()),
        S = null == s || s.isClaimed(),
        [v, b] = r.useState(
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
    function y(e, i) {
        (null != c.getToken() || null != E) &&
            g.default.track(I.HAw.DOWNLOAD_APP, {
                platform: e,
                ptb: !1,
                released: !0,
                has_e_mail: S,
                referring_location: t,
                qr_code: !1,
            }),
            S ? window.open(i, "_blank") : (n(), _.R());
    }
    function O(e) {
        b(e);
    }
    return (
        r.useEffect(() => {
            g.default.track(I.HAw.OPEN_MODAL, { type: "Download App", source: { location: t } });
        }, [t]),
        (0, i.jsx)(A.aFV, {
            title: f.intl.string(f.t["BK8LK+"]),
            actions: void 0,
            onClose: n,
            transitionState: a,
            preview: (0, i.jsx)(h.Text, { variant: "text-sm/normal", children: f.intl.format(f.t["RJS+1P"], {}) }),
            children: (0, i.jsxs)("div", {
                className: C.kL,
                children: [
                    !d.Fr &&
                        (0, i.jsxs)("div", {
                            className: C.Fp,
                            children: [
                                (0, i.jsx)(h.Heading, {
                                    variant: "heading-md/normal",
                                    color: "text-subtle",
                                    className: C.wx,
                                    children: f.intl.string(f.t["0KK0bP"]),
                                }),
                                (0, i.jsx)("ul", {
                                    className: l()(C.Bn, C.Fw),
                                    children: T.map((e) =>
                                        (0, i.jsx)(
                                            x,
                                            { isActive: v === e.platformKey, platform: e, onClick: y, onMouseEnter: O },
                                            e.platformKey,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                    (0, i.jsxs)("div", {
                        className: C.Fp,
                        children: [
                            !d.Fr &&
                                (0, i.jsx)(h.Heading, {
                                    variant: "heading-md/normal",
                                    color: "text-subtle",
                                    className: C.wx,
                                    children: f.intl.string(f.t.RdSNWa),
                                }),
                            (0, i.jsx)("ul", {
                                className: l()(C.Bn, C.f$),
                                children: N.map((e) =>
                                    (0, i.jsx)(
                                        x,
                                        { isActive: v === e.platformKey, platform: e, onClick: y, onMouseEnter: O },
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
