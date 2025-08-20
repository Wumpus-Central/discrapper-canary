n.d(t, {
    ZP: () => N,
    _1: () => T,
    jd: () => S,
});
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(704215),
    c = n(481060),
    u = n(951394),
    d = n(266454),
    f = n(314897),
    _ = n(837411),
    p = n(510659),
    h = n(652853),
    m = n(228168),
    g = n(671955),
    E = n(388032),
    b = n(734623);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = 2700,
    S = "> -# *",
    A = {
        [m.n_.AVATAR]: () => E.intl.string(E.t["fEUP/v"]),
        [m.n_.STATUS]: () => E.intl.string(E.t.TKdBCw),
        [m.n_.ACTIVITY]: () => E.intl.string(E.t.bSe71N),
    },
    C = {
        [m.n_.AVATAR]: () => E.intl.string(E.t.xvN0fX),
        [m.n_.STATUS]: () => E.intl.string(E.t["C/vzS0"]),
        [m.n_.ACTIVITY]: () => E.intl.string(E.t.ObfsSk),
    };
function N(e) {
    let {
            user: t,
            sourceType: n,
            isVisible: a,
            isExpandable: y,
            interactionSourceId: v,
            targetRef: T,
            onAction: S,
            renderMoreButtonPopout: N,
        } = e,
        R = i.useRef(null),
        P = (0, s.e7)([f.default], () => f.default.getId() === t.id),
        w = (0, _.Z)(t.id),
        { themeType: D } = (0, h.z)(),
        { onInteraction: x, onInteractionPopoutTargetRefChange: L } = (0, p.Xo)();
    if (t.bot || P || !w) return null;
    let j = () => {
            L(T),
                n === m.n_.AVATAR
                    ? S({ action: "PRESS_REACT_AVATAR" })
                    : n === m.n_.STATUS
                      ? S({ action: "PRESS_REACT_CUSTOM_STATUS" })
                      : S({ action: "PRESS_REACT_ACTIVITY" }),
                null == x ||
                    x({
                        interactionType: m.P.REACT,
                        interactionSource: n,
                        interactionSourceId: v,
                    }),
                D === g.l.POPOUT && (0, d.Q3)(l.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK);
        },
        M = () => {
            L(T),
                n === m.n_.AVATAR
                    ? S({ action: "PRESS_REPLY_AVATAR" })
                    : n === m.n_.STATUS
                      ? S({ action: "PRESS_REPLY_CUSTOM_STATUS" })
                      : S({ action: "PRESS_REPLY_ACTIVITY" }),
                null == x ||
                    x({
                        interactionType: m.P.REPLY,
                        interactionSource: n,
                        interactionSourceId: v,
                    }),
                D === g.l.POPOUT && (0, d.Q3)(l.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK);
        };
    return (0, r.jsxs)(u.ZP, {
        className: o()(b.popover, {
            [b.visible]: a,
            [b.expandable]: y,
            [b.statusPopover]: n === m.n_.STATUS,
            [b.avatarPopover]: n === m.n_.AVATAR,
            [b.activityPopover]: n === m.n_.ACTIVITY,
        }),
        children: [
            (0, r.jsx)(c.DY3, {
                text: E.intl.string(E.t.nhaI4e),
                shouldShow: a,
                className: b.tooltipContainer,
                delay: 0,
                "aria-label": !1,
                children: (0, r.jsx)(u.zx, {
                    onClick: j,
                    className: b.button,
                    "aria-label": A[n](),
                    "aria-haspopup": "dialog",
                    children: (0, r.jsx)(c.EO4, {
                        size: "xs",
                        className: b.icon,
                    }),
                }),
            }),
            (0, r.jsx)(c.DY3, {
                text: E.intl.string(E.t.RmDYKC),
                shouldShow: a,
                className: b.tooltipContainer,
                delay: 0,
                "aria-label": !1,
                children: (0, r.jsx)(u.zx, {
                    onClick: M,
                    className: b.button,
                    "aria-label": C[n](),
                    "aria-haspopup": "dialog",
                    children: (0, r.jsx)(c.n$P, {
                        size: "xs",
                        className: b.icon,
                    }),
                }),
            }),
            null == N
                ? void 0
                : N((e) => {
                      let t = () => {
                          var t;
                          L(R), null == (t = e.onClick) || t.call(e);
                      };
                      return (0, r.jsx)(c.DY3, {
                          text: E.intl.string(E.t.UKOtz8),
                          shouldShow: a,
                          className: b.tooltipContainer,
                          delay: 0,
                          "aria-label": !1,
                          children: (0, r.jsx)(
                              u.zx,
                              I(O({ ref: R }, e), {
                                  onClick: t,
                                  className: b.button,
                                  "aria-label": E.intl.string(E.t.UKOtz8),
                                  children: (0, r.jsx)(c.xhG, {
                                      size: "xs",
                                      className: b.icon,
                                  }),
                              }),
                          ),
                      });
                  }),
        ],
    });
}
