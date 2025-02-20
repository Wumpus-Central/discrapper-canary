n.d(e, { default: () => T }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    l = n(481060),
    d = n(230711),
    o = n(485267),
    c = n(564990),
    a = n(353647),
    E = n(527790),
    u = n(540440),
    _ = n(365583),
    h = n(388032),
    N = n(145603);
function T(t) {
    let { user: e, entry: n, transitionState: T, onAction: x, onClose: R, onOpenGameSettings: f } = t,
        [L, p] = (0, s.Wu)([a.Z], () => [a.Z.isDeletingEntryHistory, a.Z.deleteOutboxEntryError]);
    return (
        i.useEffect(() => o.Bt, []),
        (0, r.jsxs)(l.Y0X, {
            size: l.CgR.SMALL,
            transitionState: T,
            children: [
                (0, r.jsxs)(l.hzk, {
                    className: N.content,
                    children: [
                        null != p
                            ? (0, r.jsxs)('div', {
                                  className: N.error,
                                  children: [
                                      (0, r.jsx)(l.k$p, { color: l.TVs.colors.STATUS_DANGER }),
                                      (0, r.jsx)(l.Text, {
                                          variant: 'text-sm/medium',
                                          children: h.NW.string(h.t.FMbL3t)
                                      })
                                  ]
                              })
                            : null,
                        (0, r.jsx)(l.X6q, {
                            variant: 'heading-lg/semibold',
                            children: (0, u.y)(n)
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            tag: 'span',
                            children: h.NW.format(h.t.KV72oa, {
                                settingsHook: (t, e) => {
                                    let i = (0, _.C)({
                                        entry: n,
                                        onOpenGameSettings: f
                                    });
                                    return (0, r.jsx)(
                                        l.eee,
                                        {
                                            onClick: () => {
                                                null == x || x({ action: 'PRESS_CLEAR_HISTORY_DISCLAIMER' }), null != i ? i() : d.Z.open(), R();
                                            },
                                            children: t
                                        },
                                        e
                                    );
                                }
                            })
                        }),
                        (0, r.jsx)(E.Z, {
                            user: e,
                            entry: n,
                            className: N.card,
                            hideContextMenu: !0
                        })
                    ]
                }),
                (0, r.jsxs)(l.mzw, {
                    className: N.footer,
                    children: [
                        (0, r.jsx)(l.zxk, {
                            disabled: L,
                            color: l.Ttl.RED,
                            size: l.PhG.SMALL,
                            onClick: () => {
                                null == x || x({ action: 'PRESS_CLEAR_HISTORY_BUTTON' }), (0, c.CV)(n, e.id, R);
                            },
                            children: null != p ? h.NW.string(h.t['5911LS']) : h.NW.string(h.t.VkKicX)
                        }),
                        (0, r.jsx)(l.zxk, {
                            onClick: R,
                            size: l.PhG.SMALL,
                            look: l.iLD.FILLED,
                            color: l.Ttl.TRANSPARENT,
                            children: h.NW.string(h.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    );
}
