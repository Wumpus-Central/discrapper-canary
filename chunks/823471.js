n.d(t, {
    A: () => w,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(397927),
    s = n(182061),
    a = n(886393),
    o = n(307623),
    c = n(660273),
    u = n(707792),
    d = n(41402),
    p = n(271456),
    h = n(200273),
    f = n(565846),
    g = n(57907),
    m = n(375500),
    b = n(707653),
    A = n(50268),
    y = n(584682),
    _ = n(58736),
    O = n(378570),
    j = n(203982),
    v = n(170428),
    x = n(933057),
    E = n(747926),
    C = n(652215),
    S = n(985018);

function I(e) {
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
}

function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function T(e) {
    let { channel: t } = e,
        [n, s] = l.useState(!1),
        a = l.useRef(null);

    function o() {
        s((e) => !e);
    }
    let c = S.intl.string(S.t["UKOtz+"]);
    return (0, r.jsx)(i.YNO, {
        targetElementRef: a,
        shouldShow: n,
        animation: i.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => s(!1),
        renderPopout: function (e) {
            return (0, r.jsx)(
                P,
                N(I({}, e), {
                    channel: t,
                }),
            );
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, r.jsx)(
                _.Ay.Icon,
                N(I({}, e), {
                    ref: a,
                    onClick: o,
                    tooltip: n ? null : c,
                    icon: i.jNK,
                    "aria-label": c,
                    selected: n,
                }),
            );
        },
    });
}

function P(e) {
    let { channel: t, closePopout: n, onSelect: l } = e,
        y = (0, c.A)(t, "Sidebar Overflow"),
        _ = (0, d.A)(t),
        v = (0, g.A)(t),
        x = (0, m.A)(t),
        E = (0, s.A)(t),
        I = (0, u.A)(t),
        N = (0, f.A)(t.id),
        T = (0, h.A)(t),
        P = (0, o.A)(t),
        w = (0, a.A)(t),
        R = (0, A.A)({
            id: t.id,
            label: S.intl.string(S.t.DQ797g),
        }),
        D = (0, b.A)(t),
        M = (0, p.A)(t);

    function L() {
        (0, O.iN)(t.id);
    }
    return (0, r.jsxs)(i.W1t, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: n,
        "aria-label": S.intl.string(S.t["1NBjqb"]),
        onSelect: l,
        children: [
            (0, r.jsxs)(i.rXV, {
                children: [
                    y,
                    (0, r.jsx)(i.Drp, {
                        id: "open",
                        label: S.intl.string(S.t.IxVmZi),
                        action: L,
                    }),
                ],
            }),
            (0, r.jsxs)(i.rXV, {
                children: [v, x],
            }),
            (0, r.jsxs)(i.rXV, {
                children: [T, _, N, M],
            }),
            (0, r.jsxs)(i.rXV, {
                children: [
                    (0, r.jsx)(i.Drp, {
                        id: "search",
                        label: S.intl.string(S.t["5h0QOP"]),
                        icon: i.tfB,
                        trailingIndicator: {
                            type: "icon",
                            icon: i.tfB,
                        },
                        action: function () {
                            L(),
                                setTimeout(() => {
                                    j._.dispatch(C.jej.FOCUS_SEARCH, {
                                        prefillCurrentChannel: !1,
                                    });
                                }, 2e3);
                        },
                    }),
                    (0, r.jsx)(i.Drp, {
                        id: "pins",
                        label: S.intl.string(S.t["2BSH7n"]),
                        icon: i.tfB,
                        trailingIndicator: {
                            type: "icon",
                            icon: i.tfB,
                        },
                        action: function () {
                            L(), j._.dispatch(C.jej.TOGGLE_CHANNEL_PINS);
                        },
                    }),
                ],
            }),
            (0, r.jsxs)(i.rXV, {
                children: [D, E, I, P],
            }),
            (0, r.jsxs)(i.rXV, {
                children: [w, R],
            }),
        ],
    });
}

function w(e) {
    let { channel: t, baseChannelId: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            t.isForumPost()
                ? null
                : (0, r.jsx)(x.A, {
                      channel: t,
                  }),
            t.isModeratorReportChannel()
                ? (0, r.jsx)(v.A, {
                      channel: t,
                  })
                : null,
            (0, r.jsx)(T, {
                channel: t,
            }),
            (0, r.jsx)(_.Ay.Icon, {
                icon: i.PGe,
                tooltip: S.intl.string(S.t.cpT0Cq),
                onClick: () => (0, E.xu)((0, y.j)(t), null != n ? n : t.parent_id),
            }),
        ],
    });
}
