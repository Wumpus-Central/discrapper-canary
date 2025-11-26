n.d(t, { Z: () => g }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(55160),
    l = n(679080),
    c = n(318766),
    u = n(28546),
    d = n(713913),
    f = n(541716),
    _ = n(957825),
    p = n(388032),
    h = n(564355);
function m(e, t) {
    let { disabled: n, type: a, pickerView: m = _.X1.EMOJI } = e,
        [g, E, b] = (0, u.Iu)((e) => [e.activeView, e.activeViewType, e.pickerId], s.X),
        y = (0, d.v)(l.S),
        O = a === f.Ie.NORMAL,
        { tooltipsWithKeybinds: v, expressionsCombinedIntoEmojiButton: I } = d.n.useConfig({ location: "EmojiButton" }),
        T = I ? void 0 : O ? y : void 0,
        S = v && I && O ? p.intl.string(p.t.DSBQ6F) : void 0,
        A = i.useCallback(() => {
            (0, u.RO)(m, a);
        }, [a, m]);
    return n
        ? null
        : (0, r.jsx)("div", {
              className: o()(_.CT, h.buttonContainer),
              ref: t,
              children: (0, r.jsx)(c.Z, {
                  "aria-label": S,
                  tooltipText: S,
                  className: h.emojiButton,
                  onClick: A,
                  active: g === m && E === a,
                  "aria-controls": b,
                  tabIndex: 0,
                  focusProps: {
                      offset: {
                          top: 4,
                          bottom: 4,
                          left: -4,
                          right: -4,
                      },
                  },
                  keyboardShortcut: T,
                  canShowNUXPremiumTooltip: O,
              }),
          });
}
let g = i.memo(i.forwardRef(m));
