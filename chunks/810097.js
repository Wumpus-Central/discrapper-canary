n.d(t, {
    ZP: () => T,
    _1: () => y,
    jd: () => O,
});
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(951394),
    u = n(314897),
    d = n(837411),
    f = n(510659),
    _ = n(228168),
    p = n(388032),
    h = n(734623);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = 2700,
    O = "> -# *",
    v = {
        [_.n_.AVATAR]: () => p.intl.string(p.t["fEUP/v"]),
        [_.n_.STATUS]: () => p.intl.string(p.t.TKdBCw),
        [_.n_.ACTIVITY]: () => p.intl.string(p.t.bSe71N),
    },
    I = {
        [_.n_.AVATAR]: () => p.intl.string(p.t.xvN0fX),
        [_.n_.STATUS]: () => p.intl.string(p.t["C/vzS0"]),
        [_.n_.ACTIVITY]: () => p.intl.string(p.t.ObfsSk),
    };
function T(e) {
    let {
            user: t,
            sourceType: n,
            isVisible: a,
            isExpandable: m,
            interactionSourceId: E,
            targetRef: y,
            onAction: O,
            renderMoreButtonPopout: T,
        } = e,
        S = i.useRef(null),
        A = (0, s.e7)([u.default], () => u.default.getId() === t.id),
        C = (0, d.Z)(t.id),
        { onInteraction: N, onInteractionPopoutTargetRefChange: R } = (0, f.Xo)();
    if (t.bot || A || !C) return null;
    let P = () => {
            R(y),
                n === _.n_.AVATAR
                    ? O({ action: "PRESS_REACT_AVATAR" })
                    : n === _.n_.STATUS
                      ? O({ action: "PRESS_REACT_CUSTOM_STATUS" })
                      : O({ action: "PRESS_REACT_ACTIVITY" }),
                null == N ||
                    N({
                        interactionType: _.P.REACT,
                        interactionSource: n,
                        interactionSourceId: E,
                    });
        },
        w = () => {
            R(y),
                n === _.n_.AVATAR
                    ? O({ action: "PRESS_REPLY_AVATAR" })
                    : n === _.n_.STATUS
                      ? O({ action: "PRESS_REPLY_CUSTOM_STATUS" })
                      : O({ action: "PRESS_REPLY_ACTIVITY" }),
                null == N ||
                    N({
                        interactionType: _.P.REPLY,
                        interactionSource: n,
                        interactionSourceId: E,
                    });
        };
    return (0, r.jsxs)(c.ZP, {
        className: o()(h.popover, {
            [h.visible]: a,
            [h.expandable]: m,
            [h.statusPopover]: n === _.n_.STATUS,
            [h.avatarPopover]: n === _.n_.AVATAR,
            [h.activityPopover]: n === _.n_.ACTIVITY,
        }),
        children: [
            (0, r.jsx)(l.DY3, {
                text: p.intl.string(p.t.nhaI4e),
                shouldShow: a,
                className: h.tooltipContainer,
                delay: 0,
                "aria-label": !1,
                children: (0, r.jsx)(c.zx, {
                    onClick: P,
                    className: h.button,
                    "aria-label": v[n](),
                    "aria-haspopup": "dialog",
                    children: (0, r.jsx)(l.EO4, {
                        size: "xs",
                        className: h.icon,
                    }),
                }),
            }),
            (0, r.jsx)(l.DY3, {
                text: p.intl.string(p.t.RmDYKC),
                shouldShow: a,
                className: h.tooltipContainer,
                delay: 0,
                "aria-label": !1,
                children: (0, r.jsx)(c.zx, {
                    onClick: w,
                    className: h.button,
                    "aria-label": I[n](),
                    "aria-haspopup": "dialog",
                    children: (0, r.jsx)(l.n$P, {
                        size: "xs",
                        className: h.icon,
                    }),
                }),
            }),
            null == T
                ? void 0
                : T((e) => {
                      let t = () => {
                          var t;
                          R(S), null == (t = e.onClick) || t.call(e);
                      };
                      return (0, r.jsx)(l.DY3, {
                          text: p.intl.string(p.t.UKOtz8),
                          shouldShow: a,
                          className: h.tooltipContainer,
                          delay: 0,
                          "aria-label": !1,
                          children: (0, r.jsx)(
                              c.zx,
                              b(g({ ref: S }, e), {
                                  onClick: t,
                                  className: h.button,
                                  "aria-label": p.intl.string(p.t.UKOtz8),
                                  children: (0, r.jsx)(l.xhG, {
                                      size: "xs",
                                      className: h.icon,
                                  }),
                              }),
                          ),
                      });
                  }),
        ],
    });
}
