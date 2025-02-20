n.d(t, { Z: () => p }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(232713),
    l = n(318766),
    c = n(28546),
    u = n(957825),
    d = n(342203);
function f(e, t) {
    let { disabled: n, type: o } = e,
        [f, p, _] = (0, c.Iu)((e) => [e.activeView, e.activeViewType, e.pickerId], s.X),
        h = i.useCallback(() => {
            (0, c.RO)(u.X1.EMOJI, o);
        }, [o]);
    return n
        ? null
        : (0, r.jsx)('div', {
              className: a()(u.CT, d.buttonContainer),
              ref: t,
              children: (0, r.jsx)(l.Z, {
                  className: d.emojiButton,
                  onClick: h,
                  active: f === u.X1.EMOJI && p === o,
                  'aria-controls': _,
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
let p = i.memo(i.forwardRef(f));
