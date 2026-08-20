n.r(e), n.d(e, { default: () => P });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(481613),
    o = n.n(a),
    c = n(607399),
    u = n(247775),
    d = n(17928),
    m = n(821609),
    p = n(138017),
    x = n(715482),
    f = n(224640),
    g = n(20742),
    j = n(430993),
    h = n(364840),
    v = n(980707),
    y = n(477782),
    K = n(922016),
    b = n(297264),
    A = n(834730),
    N = n(315982),
    k = n(280450),
    O = n(287809),
    w = n(174459),
    C = n(53505),
    S = n(652215),
    D = n(375708),
    E = n(799622);
let W = [
        { getOs: () => D.intl.string(D.t.NK5ySJ), icon: E.Bt, url: () => (0, C.oW)("osx", !1), platformKey: 0 },
        { getOs: () => D.intl.string(D.t.OvKGE6), icon: E.KF, url: () => (0, C.oW)("win", !1), platformKey: 1 },
        {
            getOs: () => D.intl.string(D.t.dJB4PN),
            icon: E.pS,
            url: [
                { url: () => (0, C.oW)("linux", !1, "deb"), getText: () => D.intl.string(D.t.Sodsus) },
                { url: () => (0, C.oW)("linux", !1, "tar.gz"), getText: () => D.intl.string(D.t.G3U6IV) },
            ],
            platformKey: 2,
        },
    ],
    M = [
        { getOs: () => D.intl.string(D.t.wCVyNT), icon: E.s4, url: () => S.AMi.IOS, platformKey: 3 },
        { getOs: () => D.intl.string(D.t.wuQpJD), icon: E.yA, url: () => S.AMi.ANDROID, platformKey: 4 },
    ],
    F = { getOs: () => D.intl.string(D.t.OPUqI3), icon: E.yX, url: () => S.AMi.META_QUEST, platformKey: 5 };
function R(t) {
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
                          "aria-label": D.intl.string(D.t["+1H47t"]),
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
        ? (0, l.jsx)(K.Y, {
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
                      text: D.intl.string(D.t["1WjMbC"]),
                      variant: "primary",
                      size: "sm",
                      fullWidth: !0,
                      icon: a ? p.j : x.g,
                      iconPosition: "end",
                  }),
          })
        : (0, l.jsx)(m.$, {
              text: D.intl.string(D.t["1WjMbC"]),
              onClick: () => s(e, n()),
              variant: "primary",
              size: "sm",
              fullWidth: !0,
              role: "link",
          });
}
function _(t) {
    let { platform: e, onClick: n, onMouseEnter: i, isActive: s } = t,
        { getOs: a, icon: o, url: c, platformKey: u } = e,
        d = a(),
        m = r()(E.Kk, o);
    return (0, l.jsx)("li", {
        className: r()(E.iD, { [E.vu]: s }),
        onMouseEnter: () => i(u),
        children: (0, l.jsxs)("div", {
            className: E.FG,
            children: [
                (0, l.jsxs)("div", {
                    className: E.aA,
                    children: [(0, l.jsx)("div", { className: m }), (0, l.jsx)("div", { className: r()(E.vu, m) })],
                }),
                (0, l.jsxs)("div", {
                    children: [
                        (0, l.jsx)(b.D, { className: E.$r, variant: "heading-lg/semibold", children: d }),
                        (0, l.jsx)("div", { className: E.l6, children: (0, l.jsx)(R, { os: d, url: c, onClick: n }) }),
                    ],
                }),
            ],
        }),
    });
}
function P(t) {
    let { source: e, onClose: n, transitionState: s } = t,
        a = (0, d.bG)([O.default], () => O.default.getCurrentUser()),
        m = (0, d.bG)([k.default], () => k.default.getFingerprint()),
        p = null == a || a.isClaimed(),
        [x, v] = i.useState(
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
    function y(t, l) {
        (null != u.getToken() || null != m) &&
            w.default.track(S.HAw.DOWNLOAD_APP, {
                platform: t,
                ptb: !1,
                released: !0,
                has_e_mail: p,
                referring_location: e,
                qr_code: !1,
            }),
            p ? window.open(l, "_blank") : (n(), N.R());
    }
    function K(t) {
        v(t);
    }
    return (
        i.useEffect(() => {
            w.default.track(S.HAw.OPEN_MODAL, { type: "Download App", source: { location: e } });
        }, [e]),
        (0, l.jsxs)(f.d, {
            size: c.Fr ? "md" : "lg",
            onClose: n,
            transitionState: s,
            "aria-label": D.intl.string(D.t["BK8LK+"]),
            children: [
                (0, l.jsx)(g.rQ, { title: D.intl.string(D.t["BK8LK+"]) }),
                (0, l.jsx)(j.c, {
                    children: (0, l.jsxs)("div", {
                        className: E.kL,
                        children: [
                            !c.Fr &&
                                (0, l.jsxs)("div", {
                                    className: E.Fp,
                                    children: [
                                        (0, l.jsx)(b.D, {
                                            variant: "heading-md/normal",
                                            color: "text-subtle",
                                            className: E.wx,
                                            children: D.intl.string(D.t["0KK0bP"]),
                                        }),
                                        (0, l.jsxs)("ul", {
                                            className: r()(E.Bn, E.Fw),
                                            children: [
                                                W.map((t) =>
                                                    (0, l.jsx)(
                                                        _,
                                                        {
                                                            isActive: x === t.platformKey,
                                                            platform: t,
                                                            onClick: y,
                                                            onMouseEnter: K,
                                                        },
                                                        t.platformKey,
                                                    ),
                                                ),
                                                (0, l.jsx)(
                                                    _,
                                                    {
                                                        isActive: x === F.platformKey,
                                                        platform: F,
                                                        onClick: y,
                                                        onMouseEnter: K,
                                                    },
                                                    F.platformKey,
                                                ),
                                            ],
                                        }),
                                    ],
                                }),
                            (0, l.jsxs)("div", {
                                className: E.Fp,
                                children: [
                                    !c.Fr &&
                                        (0, l.jsx)(b.D, {
                                            variant: "heading-md/normal",
                                            color: "text-subtle",
                                            className: E.wx,
                                            children: D.intl.string(D.t.RdSNWa),
                                        }),
                                    (0, l.jsx)("ul", {
                                        className: r()(E.Bn, E.f$),
                                        children: M.map((t) =>
                                            (0, l.jsx)(
                                                _,
                                                {
                                                    isActive: x === t.platformKey,
                                                    platform: t,
                                                    onClick: y,
                                                    onMouseEnter: K,
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
                    children: (0, l.jsx)(A.E, {
                        variant: "text-sm/normal",
                        children: D.intl.format(D.t["RJS+1P"], {}),
                    }),
                }),
            ],
        })
    );
}
