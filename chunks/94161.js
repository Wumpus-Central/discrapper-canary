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
    p = n(957825),
    _ = n(388032),
    m = n(72775);
function h(e, t) {
    let { disabled: n, type: a, channelId: h, pickerView: g = p.X1.EMOJI } = e,
        [E, b, y, O] = (0, u.Iu)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], s.X),
        v = (0, d.v)(l.S),
        S = a === f.Ie.NORMAL,
        { tooltipsWithKeybinds: I, expressionsCombinedIntoEmojiButton: T } = d.n.useConfig({ location: "EmojiButton" }),
        C = T ? void 0 : S ? v : void 0,
        A = I && T && S ? _.intl.string(_.t.DSBQ6F) : void 0,
        N = i.useCallback(() => {
            (0, u.RO)(g, a, h);
        }, [a, g, h]);
    return n
        ? null
        : (0, r.jsx)("div", {
              className: o()(p.CT, m.buttonContainer),
              ref: t,
              children: (0, r.jsx)(c.Z, {
                  "aria-label": A,
                  tooltipText: A,
                  className: m.emojiButton,
                  onClick: N,
                  active: E === g && b === a && O === h,
                  "aria-controls": y,
                  tabIndex: 0,
                  focusProps: {
                      offset: {
                          top: 4,
                          bottom: 4,
                          left: -4,
                          right: -4,
                      },
                  },
                  keyboardShortcut: C,
                  canShowNUXPremiumTooltip: S,
              }),
          });
}
let g = i.memo(i.forwardRef(h));
