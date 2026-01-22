n.d(t, {
    A: () => g,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(942381),
    l = n(877991),
    c = n(375499),
    u = n(151271),
    d = n(184761),
    f = n(355622),
    p = n(698279),
    _ = n(985018),
    h = n(111314);

function m(e, t) {
    let { disabled: n, type: a, channelId: m, pickerView: g = p.kx.EMOJI } = e,
        [E, b, y, O] = (0, u.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], o.x),
        A = (0, d.p)(l.L),
        v = a === f.oU.NORMAL,
        { tooltipsWithKeybinds: S, expressionsCombinedIntoEmojiButton: I } = d.C.useConfig({
            location: "EmojiButton",
        }),
        T = I ? void 0 : v ? A : void 0,
        C = S && I && v ? _.intl.string(_.t.DSBQ6F) : void 0,
        N = i.useCallback(() => {
            (0, u.r$)(g, a, m);
        }, [a, g, m]);
    return n
        ? null
        : (0, r.jsx)("div", {
              className: s()(p.VQ, h.UD),
              ref: t,
              children: (0, r.jsx)(c.A, {
                  "aria-label": C,
                  tooltipText: C,
                  className: h.Z8,
                  onClick: N,
                  active: E === g && b === a && O === m,
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
                  keyboardShortcut: T,
                  canShowNUXPremiumTooltip: v,
              }),
          });
}
let g = i.memo(i.forwardRef(m));
