n.d(e, { default: () => E }), n(47120);
var l = n(200651),
    i = n(192379),
    c = n(374470),
    s = n(481060),
    a = n(239091),
    r = n(886036),
    o = n(877794),
    u = n(358085),
    d = n(998502),
    h = n(388032);
function E(t) {
    let { text: e, target: n, onHeightUpdate: E, onSelect: p, isChannelTextArea: f = !1 } = t,
        k = i.useCallback(() => {
            (0, a.Zy)(), (0, c.k)(n, HTMLElement) && (n.focus(), setTimeout(() => n.focus(), 0));
        }, [n]),
        [b, x] = (0, o.Z)({
            text: e,
            target: n,
            onHeightUpdate: E
        }),
        C = (0, r.Z)();
    if (!u.isPlatformEmbedded || !((0, c.k)(n, HTMLInputElement) || (0, c.k)(n, HTMLTextAreaElement))) return null;
    let L =
        '' !== e
            ? [
                  (0, l.jsx)(
                      s.sNh,
                      {
                          id: 'copy',
                          label: h.intl.string(h.t.OpuAlJ),
                          hint: (0, u.isMac)() ? '\u2318C' : 'Ctrl+C',
                          action: () => d.ZP.copy(e)
                      },
                      'copy'
                  ),
                  (0, l.jsx)(
                      s.sNh,
                      {
                          id: 'cut',
                          label: h.intl.string(h.t.pNPVhY),
                          hint: (0, u.isMac)() ? '\u2318X' : 'Ctrl+X',
                          action: () => setTimeout(() => d.ZP.cut(), 0)
                      },
                      'cut'
                  )
              ]
            : null;
    return (0, l.jsxs)(s.v2r, {
        navId: 'textarea-context',
        onClose: k,
        'aria-label': h.intl.string(h.t.NWlDSE),
        onSelect: p,
        children: [
            f && (0, l.jsx)(s.kSQ, { children: C }),
            (0, l.jsx)(s.kSQ, { children: b }),
            (0, l.jsx)(s.kSQ, { children: x }),
            (0, l.jsxs)(s.kSQ, {
                children: [
                    L,
                    (0, l.jsx)(s.sNh, {
                        id: 'paste',
                        label: h.intl.string(h.t.lMUxVl),
                        hint: (0, u.isMac)() ? '\u2318V' : 'Ctrl+V',
                        action: () => setTimeout(() => d.ZP.paste(), 0)
                    })
                ]
            })
        ]
    });
}
