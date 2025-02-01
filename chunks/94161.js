n.d(t, { Z: () => _ }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(232713),
    l = n(318766),
    u = n(28546),
    c = n(957825),
    d = n(553796);
function f(e, t) {
    let { disabled: n, type: a } = e,
        [f, _, p] = (0, u.Iu)((e) => [e.activeView, e.activeViewType, e.pickerId], o.X),
        h = r.useCallback(() => {
            (0, u.RO)(c.X1.EMOJI, a);
        }, [a]);
    return n
        ? null
        : (0, i.jsx)('div', {
              className: s()(c.CT, d.buttonContainer),
              ref: t,
              children: (0, i.jsx)(l.Z, {
                  className: d.emojiButton,
                  onClick: h,
                  active: f === c.X1.EMOJI && _ === a,
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
let _ = r.memo(r.forwardRef(f));
