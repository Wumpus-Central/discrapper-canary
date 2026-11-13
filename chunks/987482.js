n.r(t);
var s = n(477900),
    l = n(582128),
    i = n(503698),
    r = n.n(i),
    a = n(481613),
    o = n.n(a),
    c = n(607399),
    u = n(247775),
    d = n(855986),
    m = n(821609),
    p = n(138017),
    f = n(715482),
    x = n(224640),
    g = n(20742),
    h = n(430993),
    j = n(364840),
    v = n(165862),
    y = n(477782),
    b = n(265872),
    K = n(534514),
    A = n(834730),
    N = n(315982),
    C = n(46653),
    k = n(287809),
    w = n(129230),
    O = n(53505),
    S = n(652215),
    D = n(792996),
    E = n(799622);
let W = [
        { getOs: () => D.intl.string(D.t.NK5ySJ), icon: E.Bt, url: () => (0, O.oW)("osx", !1), platformKey: 0 },
        { getOs: () => D.intl.string(D.t.OvKGE6), icon: E.KF, url: () => (0, O.oW)("win", !1), platformKey: 1 },
        {
            getOs: () => D.intl.string(D.t.dJB4PN),
            icon: E.pS,
            url: [
                { url: () => (0, O.oW)("linux", !1, "deb"), getText: () => D.intl.string(D.t.Sodsus) },
                { url: () => (0, O.oW)("linux", !1, "tar.gz"), getText: () => D.intl.string(D.t.G3U6IV) },
            ],
            platformKey: 2,
        },
    ],
    M = [
        { getOs: () => D.intl.string(D.t.wCVyNT), icon: E.s4, url: () => S.AMi.IOS, platformKey: 3 },
        { getOs: () => D.intl.string(D.t.wuQpJD), icon: E.yA, url: () => S.AMi.ANDROID, platformKey: 4 },
    ],
    F = { getOs: () => D.intl.string(D.t.OPUqI3), icon: E.yX, url: () => S.AMi.META_QUEST, platformKey: 5 };
function R(e) {
    let { os: t, url: n, onClick: i } = e,
        r = l.useRef(null),
        [a, o] = l.useState(!1),
        c = l.useCallback(
            (e) => {
                let { closePopout: l } = e;
                return Array.isArray(n)
                    ? (0, s.jsx)(v.W, {
                          "data-menu-migrated": !0,
                          navId: "download-app-menu",
                          "aria-label": D.intl.string(D.t["+1H47t"]),
                          onClose: l,
                          onSelect: void 0,
                          children: n.map((e) =>
                              (0, s.jsx)(
                                  y.Dr,
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
        ? (0, s.jsx)(b.Y, {
              renderPopout: c,
              targetElementRef: r,
              align: "left",
              position: "bottom",
              onRequestOpen: () => o(!0),
              onRequestClose: () => o(!1),
              children: (e) =>
                  (0, s.jsx)(m.$, {
                      ...e,
                      buttonRef: r,
                      text: D.intl.string(D.t["1WjMbC"]),
                      variant: "primary",
                      size: "sm",
                      fullWidth: !0,
                      icon: a ? p.ChevronLargeUpIcon : f.ChevronLargeDownIcon,
                      iconPosition: "end",
                  }),
          })
        : (0, s.jsx)(m.$, {
              text: D.intl.string(D.t["1WjMbC"]),
              onClick: () => i(t, n()),
              variant: "primary",
              size: "sm",
              fullWidth: !0,
              role: "link",
          });
}
function _(e) {
    let { platform: t, onClick: n, onMouseEnter: l, isActive: i } = e,
        { getOs: a, icon: o, url: c, platformKey: u } = t,
        d = a(),
        m = r()(E.Kk, o);
    return (0, s.jsx)("li", {
        className: r()(E.iD, { [E.vu]: i }),
        onMouseEnter: () => l(u),
        children: (0, s.jsxs)("div", {
            className: E.FG,
            children: [
                (0, s.jsxs)("div", {
                    className: E.aA,
                    children: [(0, s.jsx)("div", { className: m }), (0, s.jsx)("div", { className: r()(E.vu, m) })],
                }),
                (0, s.jsxs)("div", {
                    children: [
                        (0, s.jsx)(K.D, { className: E.$r, variant: "heading-lg/semibold", children: d }),
                        (0, s.jsx)("div", { className: E.l6, children: (0, s.jsx)(R, { os: d, url: c, onClick: n }) }),
                    ],
                }),
            ],
        }),
    });
}
n.d(
    t,
    {},
    {
        default: function (e) {
            let { source: t, onClose: n, transitionState: i } = e,
                a = (0, d.bG)([k.default], () => k.default.getCurrentUser()),
                m = (0, d.bG)([C.default], () => C.default.getFingerprint()),
                p = null == a || a.isClaimed(),
                [f, v] = l.useState(
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
            function y(e, s) {
                ((null != u.getToken() || null != m) &&
                    w.default.track(S.HAw.DOWNLOAD_APP, {
                        platform: e,
                        ptb: !1,
                        released: !0,
                        has_e_mail: p,
                        referring_location: t,
                        qr_code: !1,
                    }),
                    p ? window.open(s, "_blank") : (n(), N.R()));
            }
            function b(e) {
                v(e);
            }
            return (
                l.useEffect(() => {
                    w.default.track(S.HAw.OPEN_MODAL, { type: "Download App", source: { location: t } });
                }, [t]),
                (0, s.jsxs)(x.d, {
                    size: c.Fr ? "md" : "lg",
                    onClose: n,
                    transitionState: i,
                    "aria-label": D.intl.string(D.t["BK8LK+"]),
                    children: [
                        (0, s.jsx)(g.rQ, { title: D.intl.string(D.t["BK8LK+"]) }),
                        (0, s.jsx)(h.c, {
                            children: (0, s.jsxs)("div", {
                                className: E.kL,
                                children: [
                                    !c.Fr &&
                                        (0, s.jsxs)("div", {
                                            className: E.Fp,
                                            children: [
                                                (0, s.jsx)(K.D, {
                                                    variant: "heading-sm/medium",
                                                    color: "text-subtle",
                                                    className: E.wx,
                                                    children: D.intl.string(D.t["0KK0bP"]),
                                                }),
                                                (0, s.jsxs)("ul", {
                                                    className: r()(E.Bn, E.Fw),
                                                    children: [
                                                        W.map((e) =>
                                                            (0, s.jsx)(
                                                                _,
                                                                {
                                                                    isActive: f === e.platformKey,
                                                                    platform: e,
                                                                    onClick: y,
                                                                    onMouseEnter: b,
                                                                },
                                                                e.platformKey,
                                                            ),
                                                        ),
                                                        (0, s.jsx)(
                                                            _,
                                                            {
                                                                isActive: f === F.platformKey,
                                                                platform: F,
                                                                onClick: y,
                                                                onMouseEnter: b,
                                                            },
                                                            F.platformKey,
                                                        ),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    (0, s.jsxs)("div", {
                                        className: E.Fp,
                                        children: [
                                            !c.Fr &&
                                                (0, s.jsx)(K.D, {
                                                    variant: "heading-sm/medium",
                                                    color: "text-subtle",
                                                    className: E.wx,
                                                    children: D.intl.string(D.t.RdSNWa),
                                                }),
                                            (0, s.jsx)("ul", {
                                                className: r()(E.Bn, E.f$),
                                                children: M.map((e) =>
                                                    (0, s.jsx)(
                                                        _,
                                                        {
                                                            isActive: f === e.platformKey,
                                                            platform: e,
                                                            onClick: y,
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
                        (0, s.jsx)(j.j, {
                            children: (0, s.jsx)(A.E, {
                                variant: "body-sm/normal",
                                children: D.intl.format(D.t["RJS+1P"], {}),
                            }),
                        }),
                    ],
                })
            );
        },
    },
);
