n.d(t, {
    ZP: () => N,
    _1: () => I,
    jd: () => S
});
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(704215),
    c = n(481060),
    u = n(951394),
    d = n(605236),
    f = n(314897),
    _ = n(837411),
    p = n(510659),
    h = n(652853),
    m = n(228168),
    g = n(388032),
    E = n(341969);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = 2700,
    S = '> -# *',
    T = {
        [m.n_.AVATAR]: () => g.intl.string(g.t['fEUP/v']),
        [m.n_.STATUS]: () => g.intl.string(g.t.TKdBCw),
        [m.n_.ACTIVITY]: () => g.intl.string(g.t.bSe71N)
    },
    A = {
        [m.n_.AVATAR]: () => g.intl.string(g.t.xvN0fX),
        [m.n_.STATUS]: () => g.intl.string(g.t['C/vzS0']),
        [m.n_.ACTIVITY]: () => g.intl.string(g.t.ObfsSk)
    };
function N(e) {
    let { user: t, sourceType: n, isVisible: a, isExpandable: b, interactionSourceId: O, targetRef: I, onAction: S, renderMoreButtonPopout: N } = e,
        C = i.useRef(null),
        R = (0, s.e7)([f.default], () => f.default.getId() === t.id),
        P = (0, _.Z)(t.id),
        { themeType: w } = (0, h.z)(),
        { onInteraction: D, onInteractionPopoutTargetRefChange: L } = (0, p.Xo)();
    if (t.bot || R || !P) return null;
    let x = () => {
            L(I),
                n === m.n_.AVATAR ? S({ action: 'PRESS_REACT_AVATAR' }) : n === m.n_.STATUS ? S({ action: 'PRESS_REACT_CUSTOM_STATUS' }) : S({ action: 'PRESS_REACT_ACTIVITY' }),
                null == D ||
                    D({
                        interactionType: m.P.REACT,
                        interactionSource: n,
                        interactionSourceId: O
                    }),
                w === m.lY.POPOUT && (0, d.EW)(l.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK);
        },
        k = () => {
            L(I),
                n === m.n_.AVATAR ? S({ action: 'PRESS_REPLY_AVATAR' }) : n === m.n_.STATUS ? S({ action: 'PRESS_REPLY_CUSTOM_STATUS' }) : S({ action: 'PRESS_REPLY_ACTIVITY' }),
                null == D ||
                    D({
                        interactionType: m.P.REPLY,
                        interactionSource: n,
                        interactionSourceId: O
                    }),
                w === m.lY.POPOUT && (0, d.EW)(l.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK);
        };
    return (0, r.jsxs)(u.ZP, {
        className: o()(E.popover, {
            [E.visible]: a,
            [E.expandable]: b,
            [E.statusPopover]: n === m.n_.STATUS,
            [E.avatarPopover]: n === m.n_.AVATAR,
            [E.activityPopover]: n === m.n_.ACTIVITY
        }),
        children: [
            (0, r.jsx)(c.DY3, {
                text: g.intl.string(g.t.nhaI4e),
                shouldShow: a,
                className: E.tooltipContainer,
                delay: 0,
                'aria-label': !1,
                children: (0, r.jsx)(u.zx, {
                    onClick: x,
                    className: E.button,
                    'aria-label': T[n](),
                    'aria-haspopup': 'dialog',
                    children: (0, r.jsx)(c.EO4, {
                        size: 'xs',
                        className: E.icon
                    })
                })
            }),
            (0, r.jsx)(c.DY3, {
                text: g.intl.string(g.t.RmDYKC),
                shouldShow: a,
                className: E.tooltipContainer,
                delay: 0,
                'aria-label': !1,
                children: (0, r.jsx)(u.zx, {
                    onClick: k,
                    className: E.button,
                    'aria-label': A[n](),
                    'aria-haspopup': 'dialog',
                    children: (0, r.jsx)(c.n$P, {
                        size: 'xs',
                        className: E.icon
                    })
                })
            }),
            null == N
                ? void 0
                : N((e) => {
                      let t = () => {
                          var t;
                          L(C), null == (t = e.onClick) || t.call(e);
                      };
                      return (0, r.jsx)(c.DY3, {
                          text: g.intl.string(g.t.UKOtz8),
                          shouldShow: a,
                          className: E.tooltipContainer,
                          delay: 0,
                          'aria-label': !1,
                          children: (0, r.jsx)(
                              u.zx,
                              v(y({ ref: C }, e), {
                                  onClick: t,
                                  className: E.button,
                                  'aria-label': g.intl.string(g.t.UKOtz8),
                                  children: (0, r.jsx)(c.xhG, {
                                      size: 'xs',
                                      className: E.icon
                                  })
                              })
                          )
                      });
                  })
        ]
    });
}
