n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(239091),
    l = n(782568),
    u = n(364640),
    c = n(124072),
    d = n(198620),
    f = n(746878),
    _ = n(981631),
    p = n(237310),
    h = n(913022);
function m(e) {
    return {
        react(t, r, m) {
            let g = m.noStyleAndInteraction
                    ? void 0
                    : async (n) => {
                          let i = await (0, d.B_)(t.attachmentUrl);
                          e.shouldStopPropagation && (null == n || n.stopPropagation()), u.Z.trackLinkClicked(i), e.shouldCloseDefaultModals && (0, s.pTH)(), (0, l.Z)(i);
                      },
                E = m.noStyleAndInteraction
                    ? _.dG4
                    : (e) => {
                          (0, o.jW)(e, async () => {
                              let { default: e } = await n.e('98466').then(n.bind(n, 151578));
                              return (n) =>
                                  (0, i.jsx)(e, {
                                      ...n,
                                      attachmentUrl: t.attachmentUrl,
                                      attachmentName: t.attachmentName
                                  });
                          });
                      };
            return (0, i.jsxs)(
                c.Z,
                {
                    role: 'link',
                    href: t.attachmentUrl,
                    onClick: g,
                    onContextMenu: E,
                    className: 'attachmentLink',
                    children: [
                        (0, i.jsx)(s.Ujz, {
                            size: 'xs',
                            className: a()(h.icon, p.icon),
                            color: s.TVs.colors.MENTION_FOREGROUND
                        }),
                        (0, f.S)(t, r, m)
                    ]
                },
                m.key
            );
        }
    };
}
