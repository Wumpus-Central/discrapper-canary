n.r(e), n.d(e, { default: () => T });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(481613),
    o = n.n(a),
    c = n(607399),
    u = n(247775),
    d = n(17928),
    m = n(821609),
    p = n(138017),
    f = n(715482),
    x = n(224640),
    g = n(20742),
    j = n(430993),
    h = n(364840),
    v = n(980707),
    y = n(477782),
    A = n(922016),
    b = n(534514),
    K = n(834730),
    N = n(315982),
    k = n(160394),
    w = n(495544),
    C = n(287809),
    O = n(174459),
    S = n(53505),
    D = n(652215),
    E = n(375708),
    M = n(982085);
let W = [
        { getOs: () => E.intl.string(E.t.NK5ySJ), icon: M.Bt, url: () => (0, S.oW)("osx", !1), platformKey: 0 },
        { getOs: () => E.intl.string(E.t.OvKGE6), icon: M.KF, url: () => (0, S.oW)("win", !1), platformKey: 1 },
        {
            getOs: () => E.intl.string(E.t.dJB4PN),
            icon: M.pS,
            url: [
                { url: () => (0, S.oW)("linux", !1, "deb"), getText: () => E.intl.string(E.t.Sodsus) },
                { url: () => (0, S.oW)("linux", !1, "tar.gz"), getText: () => E.intl.string(E.t.G3U6IV) },
            ],
            platformKey: 2,
        },
    ],
    F = [
        { getOs: () => E.intl.string(E.t.wCVyNT), icon: M.s4, url: () => D.AMi.IOS, platformKey: 3 },
        { getOs: () => E.intl.string(E.t.wuQpJD), icon: M.yA, url: () => D.AMi.ANDROID, platformKey: 4 },
    ],
    R = { getOs: () => E.intl.string(E.t.OPUqI3), icon: M.yX, url: () => D.AMi.META_QUEST, platformKey: 5 };
function _(t) {
    let { os: e, url: n, onClick: s } = t,
        r = i.useRef(null),
        [a, o] = i.useState(!1),
        c = i.useCallback(
            (t) => {
                let { closePopout: i } = t;
                return Array.isArray(n)
                    ? (0, l.jsx)(v.W, {
                          "data-menu-migrated": !0,
                          navId: "download-app-menu",
                          "aria-label": E.intl.string(E.t["+1H47t"]),
                          onClose: i,
                          onSelect: void 0,
                          children: n.map((t) =>
                              (0, l.jsx)(
                                  y.Dr,
                                  { id: t.url(), label: t.getText(), action: () => s(e, t.url()) },
                                  t.url(),
                              ),
                          ),
                      })
                    : null;
            },
            [e, n, s],
        );
    return Array.isArray(n)
        ? (0, l.jsx)(A.Y, {
              renderPopout: c,
              targetElementRef: r,
              align: "left",
              position: "bottom",
              onRequestOpen: () => o(!0),
              onRequestClose: () => o(!1),
              children: (t) =>
                  (0, l.jsx)(m.$, {
                      ...t,
                      buttonRef: r,
                      text: E.intl.string(E.t["1WjMbC"]),
                      variant: "primary",
                      size: "sm",
                      fullWidth: !0,
                      icon: a ? p.j : f.g,
                      iconPosition: "end",
                  }),
          })
        : (0, l.jsx)(m.$, {
              text: E.intl.string(E.t["1WjMbC"]),
              onClick: () => s(e, n()),
              variant: "primary",
              size: "sm",
              fullWidth: !0,
              role: "link",
          });
}
function P(t) {
    let { platform: e, onClick: n, onMouseEnter: i, isActive: s } = t,
        { getOs: a, icon: o, url: c, platformKey: u } = e,
        d = a(),
        m = r()(M.Kk, o);
    return (0, l.jsx)("li", {
        className: r()(M.iD, { [M.vu]: s }),
        onMouseEnter: () => i(u),
        children: (0, l.jsxs)("div", {
            className: M.FG,
            children: [
                (0, l.jsxs)("div", {
                    className: M.aA,
                    children: [(0, l.jsx)("div", { className: m }), (0, l.jsx)("div", { className: r()(M.vu, m) })],
                }),
                (0, l.jsxs)("div", {
                    children: [
                        (0, l.jsx)(b.D, { className: M.$r, variant: "heading-lg/semibold", children: d }),
                        (0, l.jsx)("div", { className: M.l6, children: (0, l.jsx)(_, { os: d, url: c, onClick: n }) }),
                    ],
                }),
            ],
        }),
    });
}
function T(t) {
    let { source: e, onClose: n, transitionState: s } = t,
        a = (0, d.bG)([C.default], () => C.default.getCurrentUser()),
        m = (0, d.bG)([w.default], () => w.default.getFingerprint()),
        p = null == a || a.isClaimed(),
        { enabled: f } = k.A.useConfig({ location: "DownloadAppsModal" }),
        [v, y] = i.useState(
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
    function A(t, l) {
        (null != u.getToken() || null != m) &&
            O.default.track(D.HAw.DOWNLOAD_APP, {
                platform: t,
                ptb: !1,
                released: !0,
                has_e_mail: p,
                referring_location: e,
                qr_code: !1,
            }),
            p ? window.open(l, "_blank") : (n(), N.R());
    }
    function S(t) {
        y(t);
    }
    return (
        i.useEffect(() => {
            O.default.track(D.HAw.OPEN_MODAL, { type: "Download App", source: { location: e } });
        }, [e]),
        (0, l.jsxs)(x.d, {
            size: !c.Fr && f ? "lg" : "md",
            onClose: n,
            transitionState: s,
            "aria-label": E.intl.string(E.t["BK8LK+"]),
            children: [
                (0, l.jsx)(g.rQ, { title: E.intl.string(E.t["BK8LK+"]) }),
                (0, l.jsx)(j.c, {
                    children: (0, l.jsxs)("div", {
                        className: M.kL,
                        children: [
                            !c.Fr &&
                                (0, l.jsxs)("div", {
                                    className: M.Fp,
                                    children: [
                                        (0, l.jsx)(b.D, {
                                            variant: "heading-md/normal",
                                            color: "text-subtle",
                                            className: M.wx,
                                            children: E.intl.string(E.t["0KK0bP"]),
                                        }),
                                        (0, l.jsxs)("ul", {
                                            className: r()(M.Bn, M.Fw),
                                            children: [
                                                W.map((t) =>
                                                    (0, l.jsx)(
                                                        P,
                                                        {
                                                            isActive: v === t.platformKey,
                                                            platform: t,
                                                            onClick: A,
                                                            onMouseEnter: S,
                                                        },
                                                        t.platformKey,
                                                    ),
                                                ),
                                                f &&
                                                    (0, l.jsx)(
                                                        P,
                                                        {
                                                            isActive: v === R.platformKey,
                                                            platform: R,
                                                            onClick: A,
                                                            onMouseEnter: S,
                                                        },
                                                        R.platformKey,
                                                    ),
                                            ],
                                        }),
                                    ],
                                }),
                            (0, l.jsxs)("div", {
                                className: M.Fp,
                                children: [
                                    !c.Fr &&
                                        (0, l.jsx)(b.D, {
                                            variant: "heading-md/normal",
                                            color: "text-subtle",
                                            className: M.wx,
                                            children: E.intl.string(E.t.RdSNWa),
                                        }),
                                    (0, l.jsx)("ul", {
                                        className: r()(M.Bn, M.f$),
                                        children: F.map((t) =>
                                            (0, l.jsx)(
                                                P,
                                                {
                                                    isActive: v === t.platformKey,
                                                    platform: t,
                                                    onClick: A,
                                                    onMouseEnter: S,
                                                },
                                                t.platformKey,
                                            ),
                                        ),
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                (0, l.jsx)(h.j, {
                    children: (0, l.jsx)(K.E, {
                        variant: "text-sm/normal",
                        children: E.intl.format(E.t["RJS+1P"], {}),
                    }),
                }),
            ],
        })
    );
}
