n.d(t, { Z: () => p }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(574583),
    l = n(318766),
    c = n(28546),
    u = n(541716),
    d = n(957825),
    f = n(744114);
function _(e, t) {
    let { disabled: n, type: a, pickerView: _ = d.X1.EMOJI } = e,
        [p, h, m] = (0, c.Iu)((e) => [e.activeView, e.activeViewType, e.pickerId], s.X),
        g = i.useCallback(() => {
            (0, c.RO)(_, a);
        }, [a, _]);
    return n
        ? null
        : (0, r.jsx)("div", {
              className: o()(d.CT, f.buttonContainer),
              ref: t,
              children: (0, r.jsx)(l.Z, {
                  className: f.emojiButton,
                  onClick: g,
                  active: p === _ && h === a,
                  "aria-controls": m,
                  tabIndex: 0,
                  focusProps: {
                      offset: {
                          top: 4,
                          bottom: 4,
                          left: -4,
                          right: -4,
                      },
                  },
                  allowKeybindHint: a === u.Ie.NORMAL,
              }),
          });
}
let p = i.memo(i.forwardRef(_));
