n.d(t, { A: () => w }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(397927),
    a = n(182061),
    s = n(886393),
    o = n(307623),
    c = n(660273),
    u = n(707792),
    d = n(41402),
    f = n(271456),
    p = n(200273),
    h = n(565846),
    b = n(57907),
    g = n(375500),
    m = n(707653),
    A = n(50268),
    y = n(584682),
    O = n(58736),
    j = n(378570),
    v = n(203982),
    x = n(170428),
    E = n(933057),
    _ = n(747926),
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
        [n, a] = l.useState(!1),
        s = l.useRef(null);
    function o() {
        a((e) => !e);
    }
    let c = S.intl.string(S.t["UKOtz+"]);
    return (0, r.jsx)(i.YNO, {
        targetElementRef: s,
        shouldShow: n,
        animation: i.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => a(!1),
        renderPopout: function (e) {
            return (0, r.jsx)(P, N(I({}, e), { channel: t }));
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, r.jsx)(
                O.Ay.Icon,
                N(I({}, e), {
                    ref: s,
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
        O = (0, d.A)(t),
        x = (0, b.A)(t),
        E = (0, g.A)(t),
        _ = (0, a.A)(t),
        I = (0, u.A)(t),
        N = (0, h.A)(t.id),
        T = (0, p.A)(t),
        P = (0, o.A)(t),
        w = (0, s.A)(t),
        R = (0, A.A)({
            id: t.id,
            label: S.intl.string(S.t.DQ797g),
        }),
        D = (0, m.A)(t),
        M = (0, f.A)(t);
    function L() {
        (0, j.iN)(t.id);
    }
    return (0, r.jsxs)(i.W1t, {
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
                children: [x, E],
            }),
            (0, r.jsxs)(i.rXV, {
                children: [T, O, N, M],
            }),
            (0, r.jsxs)(i.rXV, {
                children: [
                    (0, r.jsx)(i.Drp, {
                        id: "search",
                        label: S.intl.string(S.t["5h0QOP"]),
                        icon: i.tfB,
                        action: function () {
                            L(),
                                setTimeout(() => {
                                    v._.dispatch(C.jej.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                                }, 2000);
                        },
                    }),
                    (0, r.jsx)(i.Drp, {
                        id: "pins",
                        label: S.intl.string(S.t["2BSH7n"]),
                        icon: i.tfB,
                        action: function () {
                            L(), v._.dispatch(C.jej.TOGGLE_CHANNEL_PINS);
                        },
                    }),
                ],
            }),
            (0, r.jsxs)(i.rXV, {
                children: [D, _, I, P],
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
            t.isForumPost() ? null : (0, r.jsx)(E.A, { channel: t }),
            t.isModeratorReportChannel() ? (0, r.jsx)(x.A, { channel: t }) : null,
            (0, r.jsx)(T, { channel: t }),
            (0, r.jsx)(O.Ay.Icon, {
                icon: i.PGe,
                tooltip: S.intl.string(S.t.cpT0Cq),
                onClick: () => (0, _.xu)((0, y.j)(t), null != n ? n : t.parent_id),
            }),
        ],
    });
}
