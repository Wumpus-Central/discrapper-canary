n.d(t, { L: () => l });
var r = n(990415),
    i = n(473749),
    a = n(920154),
    o = n(477232),
    s = n(297808);
function l(e) {
    let { isDisabled: t, onBlurWithin: n, onFocusWithin: l, onFocusWithinChange: c } = e,
        u = (0, i.useRef)({ isFocusWithin: !1 }),
        { addGlobalListener: d, removeAllGlobalListeners: f } = (0, a.x)(),
        _ = (0, i.useCallback)(
            (e) => {
                e.currentTarget.contains(e.target) &&
                    u.current.isFocusWithin &&
                    !e.currentTarget.contains(e.relatedTarget) &&
                    ((u.current.isFocusWithin = !1), f(), n && n(e), c && c(!1));
            },
            [n, c, u, f],
        ),
        p = (0, r.d0)(_),
        h = (0, i.useCallback)(
            (e) => {
                if (!e.currentTarget.contains(e.target)) return;
                let t = (0, o.r3)(e.target),
                    n = (0, s.vY)(t);
                if (!u.current.isFocusWithin && n === (0, s.NI)(e.nativeEvent)) {
                    l && l(e), c && c(!0), (u.current.isFocusWithin = !0), p(e);
                    let n = e.currentTarget;
                    d(
                        t,
                        "focus",
                        (e) => {
                            if (u.current.isFocusWithin && !(0, s.bE)(n, e.target)) {
                                let i = new t.defaultView.FocusEvent("blur", { relatedTarget: e.target });
                                (0, r.nh)(i, n), _((0, r.yA)(i));
                            }
                        },
                        { capture: !0 },
                    );
                }
            },
            [l, c, p, d, _],
        );
    return t
        ? {
              focusWithinProps: {
                  onFocus: void 0,
                  onBlur: void 0,
              },
          }
        : {
              focusWithinProps: {
                  onFocus: h,
                  onBlur: _,
              },
          };
}
