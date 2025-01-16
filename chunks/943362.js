r.d(n, {
    Z: function () {
        return g;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(481060),
    l = r(239091),
    u = r(782568),
    c = r(364640),
    d = r(124072),
    f = r(198620),
    _ = r(746878),
    h = r(981631),
    p = r(694206),
    m = r(400357);
function g(e) {
    return {
        react(n, a, g) {
            let E = g.noStyleAndInteraction
                    ? void 0
                    : async (r) => {
                          let i = await (0, f.B_)(n.attachmentUrl);
                          e.shouldStopPropagation && (null == r || r.stopPropagation()), c.Z.trackLinkClicked(i), e.shouldCloseDefaultModals && (0, o.closeAllModals)(), (0, u.Z)(i);
                      },
                v = g.noStyleAndInteraction
                    ? h.dG4
                    : (e) => {
                          (0, l.jW)(e, async () => {
                              let { default: e } = await r.e('98466').then(r.bind(r, 151578));
                              return (r) =>
                                  (0, i.jsx)(e, {
                                      ...r,
                                      attachmentUrl: n.attachmentUrl,
                                      attachmentName: n.attachmentName
                                  });
                          });
                      };
            return (0, i.jsxs)(
                d.Z,
                {
                    role: 'link',
                    href: n.attachmentUrl,
                    onClick: E,
                    onContextMenu: v,
                    className: 'attachmentLink',
                    children: [
                        (0, i.jsx)(o.AttachmentIcon, {
                            size: 'xs',
                            className: s()(m.icon, p.icon),
                            color: o.tokens.colors.MENTION_FOREGROUND
                        }),
                        (0, _.S)(n, a, g)
                    ]
                },
                g.key
            );
        }
    };
}
