var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(232713),
    c = r(318766),
    d = r(28546),
    f = r(957825),
    _ = r(553796);
function h(e, n) {
    let { disabled: r, type: i } = e,
        [o, h, p] = (0, d.Iu)((e) => [e.activeView, e.activeViewType, e.pickerId], u.X),
        m = s.useCallback(() => {
            (0, d.RO)(f.X1.EMOJI, i);
        }, [i]);
    return r
        ? null
        : (0, a.jsx)('div', {
              className: l()(f.CT, _.buttonContainer),
              ref: n,
              children: (0, a.jsx)(c.Z, {
                  className: _.emojiButton,
                  onClick: m,
                  active: o === f.X1.EMOJI && h === i,
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
n.Z = s.memo(s.forwardRef(h));
