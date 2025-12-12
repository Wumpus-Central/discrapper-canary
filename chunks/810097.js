n.d(t, {
    ZP: () => T,
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
    p = n(510659),
    _ = n(228168),
    m = n(388032),
    h = n(46833);
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
    S = {
        [_.n_.AVATAR]: () => m.intl.string(m.t["fEUP/i"]),
        [_.n_.STATUS]: () => m.intl.string(m.t.TKdBC8),
        [_.n_.ACTIVITY]: () => m.intl.string(m.t.bSe71F),
    },
    I = {
        [_.n_.AVATAR]: () => m.intl.string(m.t.xvN0fV),
        [_.n_.STATUS]: () => m.intl.string(m.t["C/vzS7"]),
        [_.n_.ACTIVITY]: () => m.intl.string(m.t.ObfsSj),
    };
function T(e) {
    let {
            user: t,
            sourceType: n,
            isVisible: a,
            isExpandable: g,
            interactionSourceId: b,
            targetRef: O,
            onAction: v,
            renderMoreButtonPopout: T,
        } = e,
        C = i.useRef(null),
        A = (0, s.e7)([d.default], () => d.default.getId() === t.id),
        N = (0, f.Z)(t.id),
        { onInteraction: P, onInteractionPopoutTargetRefChange: R } = (0, p.Xo)();
    if (t.bot || A || !N) return null;
    let w = () => {
            R(O),
                n === _.n_.AVATAR
                    ? v({ action: "PRESS_REACT_AVATAR" })
                    : n === _.n_.STATUS
                      ? v({ action: "PRESS_REACT_CUSTOM_STATUS" })
                      : v({ action: "PRESS_REACT_ACTIVITY" }),
                null == P ||
                    P({
                        interactionType: _.P.REACT,
                        interactionSource: n,
                        interactionSourceId: b,
                    });
        },
        D = () => {
            R(O),
                n === _.n_.AVATAR
                    ? v({ action: "PRESS_REPLY_AVATAR" })
                    : n === _.n_.STATUS
                      ? v({ action: "PRESS_REPLY_CUSTOM_STATUS" })
                      : v({ action: "PRESS_REPLY_ACTIVITY" }),
                null == P ||
                    P({
                        interactionType: _.P.REPLY,
                        interactionSource: n,
                        interactionSourceId: b,
                    });
        };
    return (0, r.jsxs)(u.ZP, {
        className: o()(h.popover, {
            [h.visible]: a,
            [h.expandable]: g,
            [h.statusPopover]: n === _.n_.STATUS,
            [h.avatarPopover]: n === _.n_.AVATAR,
            [h.activityPopover]: n === _.n_.ACTIVITY,
        }),
        children: [
            (0, r.jsx)(l.u, {
                asContainer: !0,
                text: m.intl.string(m.t.nhaI4b),
                shouldShow: a,
                delay: 0,
                ariaHidden: !0,
                children: (0, r.jsx)(u.zx, {
                    onClick: w,
                    className: h.button,
                    "aria-label": S[n](),
                    "aria-haspopup": "dialog",
                    children: (0, r.jsx)(c.EO4, {
                        size: "xs",
                        className: h.icon,
                    }),
                }),
            }),
            (0, r.jsx)(l.u, {
                asContainer: !0,
                text: m.intl.string(m.t.RmDYKK),
                shouldShow: a,
                delay: 0,
                ariaHidden: !0,
                children: (0, r.jsx)(u.zx, {
                    onClick: D,
                    className: h.button,
                    "aria-label": I[n](),
                    "aria-haspopup": "dialog",
                    children: (0, r.jsx)(c.n$P, {
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
                          R(C), null == (t = e.onClick) || t.call(e);
                      };
                      return (0, r.jsx)(l.u, {
                          asContainer: !0,
                          text: m.intl.string(m.t["UKOtz+"]),
                          shouldShow: a,
                          delay: 0,
                          ariaHidden: !0,
                          children: (0, r.jsx)(
                              u.zx,
                              y(E({ ref: C }, e), {
                                  onClick: t,
                                  className: h.button,
                                  "aria-label": m.intl.string(m.t["UKOtz+"]),
                                  children: (0, r.jsx)(c.xhG, {
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
