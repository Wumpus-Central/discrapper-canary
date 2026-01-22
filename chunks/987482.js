n.r(t), n.d(t, { default: () => C }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(481613),
    o = n.n(s),
    c = n(607399),
    u = n(247775),
    d = n(311907),
    p = n(732955),
    f = n(397927),
    h = n(315982),
    A = n(961350),
    g = n(287809),
    m = n(954571),
    b = n(53505),
    _ = n(652215),
    E = n(985018),
    O = n(386144);
let y = [
        {
            getOs: () => E.intl.string(E.t.NK5ySJ),
            icon: O.Bt,
            url: () => (0, b.oW)("osx", !1),
            platformKey: 0,
        },
        {
            getOs: () => E.intl.string(E.t.OvKGE6),
            icon: O.KF,
            url: () => (0, b.oW)("win", !1),
            platformKey: 1,
        },
        {
            getOs: () => E.intl.string(E.t.dJB4PN),
            icon: O.pS,
            url: [
                {
                    url: () => (0, b.oW)("linux", !1, "deb"),
                    getText: () => E.intl.string(E.t.Sodsus),
                },
                {
                    url: () => (0, b.oW)("linux", !1, "tar.gz"),
                    getText: () => E.intl.string(E.t.G3U6IV),
                },
            ],
            platformKey: 2,
        },
    ],
    I = [
        {
            getOs: () => E.intl.string(E.t.wCVyNT),
            icon: O.s4,
            url: () => _.AMi.IOS,
            platformKey: 3,
        },
        {
            getOs: () => E.intl.string(E.t.wuQpJD),
            icon: O.yA,
            url: () => _.AMi.ANDROID,
            platformKey: 4,
        },
    ],
    v = (e) => {
        let { os: t, url: n, onClick: l } = e,
            a = i.useRef(null),
            [s, o] = i.useState(!1),
            c = i.useCallback(
                (e) => {
                    let { closePopout: i } = e;
                    return Array.isArray(n)
                        ? (0, r.jsx)(f.W1t, {
                              navId: "download-app-menu",
                              "aria-label": E.intl.string(E.t["+1H47t"]),
                              onClose: i,
                              onSelect: void 0,
                              children: n.map((e) =>
                                  (0, r.jsx)(
                                      f.Drp,
                                      {
                                          id: e.url(),
                                          label: e.getText(),
                                          action: () => l(t, e.url()),
                                      },
                                      e.url(),
                                  ),
                              ),
                          })
                        : null;
                },
                [t, n, l],
            );
        return Array.isArray(n)
            ? (0, r.jsx)(f.YNO, {
                  renderPopout: c,
                  targetElementRef: a,
                  align: "left",
                  position: "bottom",
                  onRequestOpen: () => o(!0),
                  onRequestClose: () => o(!1),
                  children: (e) => {
                      var t, n;
                      return (0, r.jsx)(
                          p.$nd,
                          ((t = (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      r = Object.keys(n);
                                  "function" == typeof Object.getOwnPropertySymbols &&
                                      (r = r.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          }),
                                      )),
                                      r.forEach(function (t) {
                                          var r;
                                          (r = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: r,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0,
                                                    })
                                                  : (e[t] = r);
                                      });
                              }
                              return e;
                          })({}, e)),
                          (n = n =
                              {
                                  buttonRef: a,
                                  text: E.intl.string(E.t["1WjMbC"]),
                                  variant: "primary",
                                  size: "sm",
                                  fullWidth: !0,
                                  icon: s ? p.jQp : p.g8p,
                                  iconPosition: "end",
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, r);
                                    }
                                    return n;
                                })(Object(n)).forEach(function (e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                }),
                          t),
                      );
                  },
              })
            : (0, r.jsx)(p.$nd, {
                  text: E.intl.string(E.t["1WjMbC"]),
                  onClick: () => l(t, n()),
                  variant: "primary",
                  size: "sm",
                  fullWidth: !0,
                  role: "link",
              });
    },
    S = (e) => {
        let { platform: t, onClick: n, onMouseEnter: i, isActive: l } = e,
            { getOs: s, icon: o, url: c, platformKey: u } = t,
            d = s(),
            p = a()(O.Kk, o);
        return (0, r.jsx)("li", {
            className: a()(O.iD, { [O.vu]: l }),
            onMouseEnter: () => i(u),
            children: (0, r.jsxs)("div", {
                className: O.FG,
                children: [
                    (0, r.jsxs)("div", {
                        className: O.aA,
                        children: [(0, r.jsx)("div", { className: p }), (0, r.jsx)("div", { className: a()(O.vu, p) })],
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(f.Heading, {
                                className: O.$r,
                                variant: "heading-lg/semibold",
                                children: d,
                            }),
                            (0, r.jsx)("div", {
                                className: O.l6,
                                children: (0, r.jsx)(v, {
                                    os: d,
                                    url: c,
                                    onClick: n,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    };
function C(e) {
    let { source: t, onClose: n, transitionState: l } = e,
        s = (0, d.bG)([g.default], () => g.default.getCurrentUser()),
        b = (0, d.bG)([A.default], () => A.default.getFingerprint()),
        v = null == s || s.isClaimed(),
        [C, N] = i.useState(
            (function () {
                var e;
                switch (null == (e = o().os) ? void 0 : e.family) {
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
    function T(e, r) {
        (null != u.getToken() || null != b) &&
            m.default.track(_.HAw.DOWNLOAD_APP, {
                platform: e,
                ptb: !1,
                released: !0,
                has_e_mail: v,
                referring_location: t,
                qr_code: !1,
            }),
            v ? window.open(r, "_blank") : (n(), h.R());
    }
    function j(e) {
        N(e);
    }
    return (
        i.useEffect(() => {
            m.default.track(_.HAw.OPEN_MODAL, {
                type: "Download App",
                source: { location: t },
            });
        }, [t]),
        (0, r.jsx)(p.aFV, {
            title: E.intl.string(E.t["BK8LK+"]),
            actions: void 0,
            onClose: n,
            transitionState: l,
            preview: (0, r.jsx)(f.Text, {
                variant: "text-sm/normal",
                children: E.intl.format(E.t["RJS+1P"], {}),
            }),
            children: (0, r.jsxs)("div", {
                className: O.kL,
                children: [
                    !c.Fr &&
                        (0, r.jsxs)("div", {
                            className: O.Fp,
                            children: [
                                (0, r.jsx)(f.Heading, {
                                    variant: "heading-md/normal",
                                    color: "text-subtle",
                                    className: O.wx,
                                    children: E.intl.string(E.t["0KK0bP"]),
                                }),
                                (0, r.jsx)("ul", {
                                    className: a()(O.Bn, O.Fw),
                                    children: y.map((e) =>
                                        (0, r.jsx)(
                                            S,
                                            {
                                                isActive: C === e.platformKey,
                                                platform: e,
                                                onClick: T,
                                                onMouseEnter: j,
                                            },
                                            e.platformKey,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                    (0, r.jsxs)("div", {
                        className: O.Fp,
                        children: [
                            !c.Fr &&
                                (0, r.jsx)(f.Heading, {
                                    variant: "heading-md/normal",
                                    color: "text-subtle",
                                    className: O.wx,
                                    children: E.intl.string(E.t.RdSNWa),
                                }),
                            (0, r.jsx)("ul", {
                                className: a()(O.Bn, O.f$),
                                children: I.map((e) =>
                                    (0, r.jsx)(
                                        S,
                                        {
                                            isActive: C === e.platformKey,
                                            platform: e,
                                            onClick: T,
                                            onMouseEnter: j,
                                        },
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
