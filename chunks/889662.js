n.d(t, { default: () => b }), n(47120);
var r = n(200651),
    c = n(192379),
    l = n(374470),
    i = n(481060),
    s = n(239091),
    o = n(886036),
    a = n(877794),
    u = n(358085),
    d = n(998502),
    p = n(388032);
function b(e) {
    let { text: t, target: n, onHeightUpdate: b, onSelect: f, isChannelTextArea: h = !1 } = e,
        E = c.useCallback(() => {
            (0, s.Zy)(), (0, l.k)(n, HTMLElement) && (n.focus(), setTimeout(() => n.focus(), 0));
        }, [n]),
        [O, j] = (0, a.Z)({
            text: t,
            target: n,
            onHeightUpdate: b
        }),
        y = (0, o.Z)();
    if (!u.isPlatformEmbedded || !((0, l.k)(n, HTMLInputElement) || (0, l.k)(n, HTMLTextAreaElement))) return null;
    let k =
        '' !== t
            ? [
                  (0, r.jsx)(
                      i.sNh,
                      {
                          id: 'copy',
                          label: p.NW.string(p.t.OpuAlJ),
                          hint: (0, u.isMac)() ? '\u2318C' : 'Ctrl+C',
                          action: () => d.ZP.copy(t)
                      },
                      'copy'
                  ),
                  (0, r.jsx)(
                      i.sNh,
                      {
                          id: 'cut',
                          label: p.NW.string(p.t.pNPVhY),
                          hint: (0, u.isMac)() ? '\u2318X' : 'Ctrl+X',
                          action: () => setTimeout(() => d.ZP.cut(), 0)
                      },
                      'cut'
                  )
              ]
            : null;
    return (0, r.jsxs)(i.v2r, {
        navId: 'textarea-context',
        onClose: E,
        'aria-label': p.NW.string(p.t.NWlDSE),
        onSelect: f,
        children: [
            h && (0, r.jsx)(i.kSQ, { children: y }),
            (0, r.jsx)(i.kSQ, { children: O }),
            (0, r.jsx)(i.kSQ, { children: j }),
            (0, r.jsxs)(i.kSQ, {
                children: [
                    k,
                    (0, r.jsx)(i.sNh, {
                        id: 'paste',
                        label: p.NW.string(p.t.lMUxVl),
                        hint: (0, u.isMac)() ? '\u2318V' : 'Ctrl+V',
                        action: () => setTimeout(() => d.ZP.paste(), 0)
                    })
                ]
            })
        ]
    });
}
