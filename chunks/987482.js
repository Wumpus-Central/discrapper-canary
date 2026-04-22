n.r(t), n.d(t, { default: () => w });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(481613),
    o = n.n(s),
    d = n(607399),
    u = n(247775),
    c = n(311907),
    A = n(821609),
    h = n(138017),
    _ = n(715482),
    E = n(189213),
    p = n(861672),
    m = n(477782),
    g = n(265872),
    I = n(534514),
    C = n(834730),
    f = n(315982),
    T = n(961350),
    S = n(287809),
    N = n(954571),
    O = n(53505),
    L = n(652215),
    y = n(985018),
    v = n(982085);
let b = [
        { getOs: () => y.intl.string(y.t.NK5ySJ), icon: v.Bt, url: () => (0, O.oW)("osx", !1), platformKey: 0 },
        { getOs: () => y.intl.string(y.t.OvKGE6), icon: v.KF, url: () => (0, O.oW)("win", !1), platformKey: 1 },
        {
            getOs: () => y.intl.string(y.t.dJB4PN),
            icon: v.pS,
            url: [
                { url: () => (0, O.oW)("linux", !1, "deb"), getText: () => y.intl.string(y.t.Sodsus) },
                { url: () => (0, O.oW)("linux", !1, "tar.gz"), getText: () => y.intl.string(y.t.G3U6IV) },
            ],
            platformKey: 2,
        },
    ],
    D = [
        { getOs: () => y.intl.string(y.t.wCVyNT), icon: v.s4, url: () => L.AMi.IOS, platformKey: 3 },
        { getOs: () => y.intl.string(y.t.wuQpJD), icon: v.yA, url: () => L.AMi.ANDROID, platformKey: 4 },
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
            ? (0, i.jsx)(g.Y, {
                  renderPopout: d,
                  targetElementRef: l,
                  align: "left",
                  position: "bottom",
                  onRequestOpen: () => o(!0),
                  onRequestClose: () => o(!1),
                  children: (e) =>
                      (0, i.jsx)(A.$, {
                          ...e,
                          buttonRef: l,
                          text: y.intl.string(y.t["1WjMbC"]),
                          variant: "primary",
                          size: "sm",
                          fullWidth: !0,
                          icon: s ? h.j : _.g,
                          iconPosition: "end",
                      }),
              })
            : (0, i.jsx)(A.$, {
                  text: y.intl.string(y.t["1WjMbC"]),
                  onClick: () => a(t, n()),
                  variant: "primary",
                  size: "sm",
                  fullWidth: !0,
                  role: "link",
              });
    },
    P = (e) => {
        let { platform: t, onClick: n, onMouseEnter: r, isActive: a } = e,
            { getOs: s, icon: o, url: d, platformKey: u } = t,
            c = s(),
            A = l()(v.Kk, o);
        return (0, i.jsx)("li", {
            className: l()(v.iD, { [v.vu]: a }),
            onMouseEnter: () => r(u),
            children: (0, i.jsxs)("div", {
                className: v.FG,
                children: [
                    (0, i.jsxs)("div", {
                        className: v.aA,
                        children: [(0, i.jsx)("div", { className: A }), (0, i.jsx)("div", { className: l()(v.vu, A) })],
                    }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(I.D, { className: v.$r, variant: "heading-lg/semibold", children: c }),
                            (0, i.jsx)("div", {
                                className: v.l6,
                                children: (0, i.jsx)(R, { os: c, url: d, onClick: n }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    };
function w(e) {
    let { source: t, onClose: n, transitionState: a } = e,
        s = (0, c.bG)([S.default], () => S.default.getCurrentUser()),
        A = (0, c.bG)([T.default], () => T.default.getFingerprint()),
        h = null == s || s.isClaimed(),
        [_, p] = r.useState(
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
        (null != u.getToken() || null != A) &&
            N.default.track(L.HAw.DOWNLOAD_APP, {
                platform: e,
                ptb: !1,
                released: !0,
                has_e_mail: h,
                referring_location: t,
                qr_code: !1,
            }),
            h ? window.open(i, "_blank") : (n(), f.R());
    }
    function g(e) {
        p(e);
    }
    return (
        r.useEffect(() => {
            N.default.track(L.HAw.OPEN_MODAL, { type: "Download App", source: { location: t } });
        }, [t]),
        (0, i.jsx)(E.Modal, {
            title: y.intl.string(y.t["BK8LK+"]),
            actions: void 0,
            onClose: n,
            transitionState: a,
            preview: (0, i.jsx)(C.E, { variant: "text-sm/normal", children: y.intl.format(y.t["RJS+1P"], {}) }),
            children: (0, i.jsxs)("div", {
                className: v.kL,
                children: [
                    !d.Fr &&
                        (0, i.jsxs)("div", {
                            className: v.Fp,
                            children: [
                                (0, i.jsx)(I.D, {
                                    variant: "heading-md/normal",
                                    color: "text-subtle",
                                    className: v.wx,
                                    children: y.intl.string(y.t["0KK0bP"]),
                                }),
                                (0, i.jsx)("ul", {
                                    className: l()(v.Bn, v.Fw),
                                    children: b.map((e) =>
                                        (0, i.jsx)(
                                            P,
                                            { isActive: _ === e.platformKey, platform: e, onClick: m, onMouseEnter: g },
                                            e.platformKey,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                    (0, i.jsxs)("div", {
                        className: v.Fp,
                        children: [
                            !d.Fr &&
                                (0, i.jsx)(I.D, {
                                    variant: "heading-md/normal",
                                    color: "text-subtle",
                                    className: v.wx,
                                    children: y.intl.string(y.t.RdSNWa),
                                }),
                            (0, i.jsx)("ul", {
                                className: l()(v.Bn, v.f$),
                                children: D.map((e) =>
                                    (0, i.jsx)(
                                        P,
                                        { isActive: _ === e.platformKey, platform: e, onClick: m, onMouseEnter: g },
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
