n.r(e),
    n.d(e, {
        default: function () {
            return p;
        }
    }),
    n(47120);
var l = n(200651),
    i = n(192379),
    c = n(513431),
    r = n(481060),
    u = n(239091),
    a = n(886036),
    s = n(877794),
    o = n(358085),
    d = n(998502),
    f = n(388032);
function p(t) {
    let { text: e, target: n, onHeightUpdate: p, onSelect: E, isChannelTextArea: h = !1 } = t,
        m = i.useCallback(() => {
            (0, u.Zy)(), (0, c.k)(n, HTMLElement) && (n.focus(), setTimeout(() => n.focus(), 0));
        }, [n]),
        [M, b] = (0, s.Z)({
            text: e,
            target: n,
            onHeightUpdate: p
        }),
        x = (0, a.Z)();
    if (!o.isPlatformEmbedded || !((0, c.k)(n, HTMLInputElement) || (0, c.k)(n, HTMLTextAreaElement))) return null;
    let k =
        '' !== e
            ? [
                  (0, l.jsx)(
                      r.MenuItem,
                      {
                          id: 'copy',
                          label: f.intl.string(f.t.OpuAlJ),
                          hint: (0, o.isMac)() ? '\u2318C' : 'Ctrl+C',
                          action: () => d.ZP.copy(e)
                      },
                      'copy'
                  ),
                  (0, l.jsx)(
                      r.MenuItem,
                      {
                          id: 'cut',
                          label: f.intl.string(f.t.pNPVhY),
                          hint: (0, o.isMac)() ? '\u2318X' : 'Ctrl+X',
                          action: () => setTimeout(() => d.ZP.cut(), 0)
                      },
                      'cut'
                  )
              ]
            : null;
    return (0, l.jsxs)(r.Menu, {
        navId: 'textarea-context',
        onClose: m,
        'aria-label': f.intl.string(f.t.NWlDSE),
        onSelect: E,
        children: [
            h && (0, l.jsx)(r.MenuGroup, { children: x }),
            (0, l.jsx)(r.MenuGroup, { children: M }),
            (0, l.jsx)(r.MenuGroup, { children: b }),
            (0, l.jsxs)(r.MenuGroup, {
                children: [
                    k,
                    (0, l.jsx)(r.MenuItem, {
                        id: 'paste',
                        label: f.intl.string(f.t.lMUxVl),
                        hint: (0, o.isMac)() ? '\u2318V' : 'Ctrl+V',
                        action: () => setTimeout(() => d.ZP.paste(), 0)
                    })
                ]
            })
        ]
    });
}
