n.d(t, {
    ZP: () => S,
    _1: () => O,
    jd: () => v,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(28664),
    c = n(481060),
    u = n(951394),
    d = n(314897),
    f = n(837411),
    _ = n(510659),
    p = n(228168),
    h = n(388032),
    m = n(734623);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = 2700,
    v = "> -# *",
    I = {
        [p.n_.AVATAR]: () => h.intl.string(h.t["fEUP/i"]),
        [p.n_.STATUS]: () => h.intl.string(h.t.TKdBC8),
        [p.n_.ACTIVITY]: () => h.intl.string(h.t.bSe71F),
    },
    T = {
        [p.n_.AVATAR]: () => h.intl.string(h.t.xvN0fV),
        [p.n_.STATUS]: () => h.intl.string(h.t["C/vzS7"]),
        [p.n_.ACTIVITY]: () => h.intl.string(h.t.ObfsSj),
    };
function S(e) {
    let {
            user: t,
            sourceType: n,
            isVisible: a,
            isExpandable: g,
            interactionSourceId: b,
            targetRef: O,
            onAction: v,
            renderMoreButtonPopout: S,
        } = e,
        A = i.useRef(null),
        C = (0, s.e7)([d.default], () => d.default.getId() === t.id),
        N = (0, f.Z)(t.id),
        { onInteraction: R, onInteractionPopoutTargetRefChange: P } = (0, _.Xo)();
    if (t.bot || C || !N) return null;
    let D = () => {
            P(O),
                n === p.n_.AVATAR
                    ? v({ action: "PRESS_REACT_AVATAR" })
                    : n === p.n_.STATUS
                      ? v({ action: "PRESS_REACT_CUSTOM_STATUS" })
                      : v({ action: "PRESS_REACT_ACTIVITY" }),
                null == R ||
                    R({
                        interactionType: p.P.REACT,
                        interactionSource: n,
                        interactionSourceId: b,
                    });
        },
        w = () => {
            P(O),
                n === p.n_.AVATAR
                    ? v({ action: "PRESS_REPLY_AVATAR" })
                    : n === p.n_.STATUS
                      ? v({ action: "PRESS_REPLY_CUSTOM_STATUS" })
                      : v({ action: "PRESS_REPLY_ACTIVITY" }),
                null == R ||
                    R({
                        interactionType: p.P.REPLY,
                        interactionSource: n,
                        interactionSourceId: b,
                    });
        };
    return (0, r.jsxs)(u.ZP, {
        className: o()(m.popover, {
            [m.visible]: a,
            [m.expandable]: g,
            [m.statusPopover]: n === p.n_.STATUS,
            [m.avatarPopover]: n === p.n_.AVATAR,
            [m.activityPopover]: n === p.n_.ACTIVITY,
        }),
        children: [
            (0, r.jsx)(l.u, {
                asContainer: !0,
                text: h.intl.string(h.t.nhaI4b),
                shouldShow: a,
                delay: 0,
                "aria-label": !1,
                children: (0, r.jsx)(u.zx, {
                    onClick: D,
                    className: m.button,
                    "aria-label": I[n](),
                    "aria-haspopup": "dialog",
                    children: (0, r.jsx)(c.EO4, {
                        size: "xs",
                        className: m.icon,
                    }),
                }),
            }),
            (0, r.jsx)(l.u, {
                asContainer: !0,
                text: h.intl.string(h.t.RmDYKK),
                shouldShow: a,
                delay: 0,
                "aria-label": !1,
                children: (0, r.jsx)(u.zx, {
                    onClick: w,
                    className: m.button,
                    "aria-label": T[n](),
                    "aria-haspopup": "dialog",
                    children: (0, r.jsx)(c.n$P, {
                        size: "xs",
                        className: m.icon,
                    }),
                }),
            }),
            null == S
                ? void 0
                : S((e) => {
                      let t = () => {
                          var t;
                          P(A), null == (t = e.onClick) || t.call(e);
                      };
                      return (0, r.jsx)(l.u, {
                          asContainer: !0,
                          text: h.intl.string(h.t["UKOtz+"]),
                          shouldShow: a,
                          delay: 0,
                          "aria-label": !1,
                          children: (0, r.jsx)(
                              u.zx,
                              y(E({ ref: A }, e), {
                                  onClick: t,
                                  className: m.button,
                                  "aria-label": h.intl.string(h.t["UKOtz+"]),
                                  children: (0, r.jsx)(c.xhG, {
                                      size: "xs",
                                      className: m.icon,
                                  }),
                              }),
                          ),
                      });
                  }),
        ],
    });
}
