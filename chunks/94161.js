n.d(t, { Z: () => _ }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(760907),
    l = n(318766),
    c = n(28546),
    u = n(957825),
    d = n(302195);
function f(e, t) {
    let { disabled: n, type: a } = e,
        [f, _, p] = (0, c.Iu)((e) => [e.activeView, e.activeViewType, e.pickerId], s.X),
        h = i.useCallback(() => {
            (0, c.RO)(u.X1.EMOJI, a);
        }, [a]);
    return n
        ? null
        : (0, r.jsx)('div', {
              className: o()(u.CT, d.buttonContainer),
              ref: t,
              children: (0, r.jsx)(l.Z, {
                  className: d.emojiButton,
                  onClick: h,
                  active: f === u.X1.EMOJI && _ === a,
                  'aria-controls': p,
                  tabIndex: 0,
                  focusProps: {
                      offset: {
                          top: 4,
                          bottom: 4,
                          left: -4,
                          right: -4
                      }
                  },
                  shouldShowSoundmojiCoachmark: !0
              })
          });
}
let _ = i.memo(i.forwardRef(f));
