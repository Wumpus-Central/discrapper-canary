(n.d(e, { default: () => b }), n(388685));
var r = n(255367),
    l = n(73800),
    c = n(374470),
    i = n(481060),
    s = n(239091),
    o = n(877794),
    a = n(358085),
    u = n(998502),
    p = n(388032);
function b(t) {
    let { text: e, target: n, onHeightUpdate: b, onSelect: d } = t,
        f = l.useCallback(() => {
            ((0, s.Zy)(), (0, c.k)(n, HTMLElement) && (n.focus(), setTimeout(() => n.focus(), 0)));
        }, [n]),
        [h, y] = (0, o.Z)({
            text: e,
            target: n,
            onHeightUpdate: b
        });
    if (!a.isPlatformEmbedded || !((0, c.k)(n, HTMLInputElement) || (0, c.k)(n, HTMLTextAreaElement))) return null;
    let O =
        '' !== e
            ? [
                  (0, r.jsx)(
                      i.sNh,
                      {
                          id: 'copy',
                          label: p.intl.string(p.t.OpuAlJ),
                          hint: (0, a.isMac)() ? '\u2318C' : 'Ctrl+C',
                          action: () => u.ZP.copy(e)
                      },
                      'copy'
                  ),
                  (0, r.jsx)(
                      i.sNh,
                      {
                          id: 'cut',
                          label: p.intl.string(p.t.pNPVhY),
                          hint: (0, a.isMac)() ? '\u2318X' : 'Ctrl+X',
                          action: () => setTimeout(() => u.ZP.cut(), 0)
                      },
                      'cut'
                  )
              ]
            : null;
    return (0, r.jsxs)(i.v2r, {
        navId: 'textarea-context',
        onClose: f,
        'aria-label': p.intl.string(p.t.NWlDSE),
        onSelect: d,
        children: [
            (0, r.jsx)(i.kSQ, { children: h }),
            (0, r.jsx)(i.kSQ, { children: y }),
            (0, r.jsxs)(i.kSQ, {
                children: [
                    O,
                    (0, r.jsx)(i.sNh, {
                        id: 'paste',
                        label: p.intl.string(p.t.lMUxVl),
                        hint: (0, a.isMac)() ? '\u2318V' : 'Ctrl+V',
                        action: () => setTimeout(() => u.ZP.paste(), 0)
                    })
                ]
            })
        ]
    });
}
