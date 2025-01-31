e.d(n, { default: () => x }), e(47120);
var i = e(200651),
    r = e(192379),
    l = e(442837),
    s = e(481060),
    d = e(230711),
    o = e(485267),
    c = e(564990),
    a = e(353647),
    E = e(527790),
    u = e(540440),
    _ = e(365583),
    h = e(388032),
    T = e(51478);
function x(t) {
    let { user: n, entry: e, transitionState: x, onAction: N, onClose: R, onOpenGameSettings: f } = t,
        [L, p] = (0, l.Wu)([a.Z], () => [a.Z.isDeletingEntryHistory, a.Z.deleteOutboxEntryError]);
    return (
        r.useEffect(() => o.Bt, []),
        (0, i.jsxs)(s.Y0X, {
            size: s.CgR.SMALL,
            transitionState: x,
            children: [
                (0, i.jsxs)(s.hzk, {
                    className: T.content,
                    children: [
                        null != p
                            ? (0, i.jsxs)('div', {
                                  className: T.error,
                                  children: [
                                      (0, i.jsx)(s.k$p, { color: s.TVs.colors.STATUS_DANGER }),
                                      (0, i.jsx)(s.Text, {
                                          variant: 'text-sm/medium',
                                          children: h.intl.string(h.t.FMbL3t)
                                      })
                                  ]
                              })
                            : null,
                        (0, i.jsx)(s.X6q, {
                            variant: 'heading-lg/semibold',
                            children: (0, u.y)(e)
                        }),
                        (0, i.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            tag: 'span',
                            children: h.intl.format(h.t.KV72oa, {
                                settingsHook: (t, n) => {
                                    let r = (0, _.C)({
                                        entry: e,
                                        onOpenGameSettings: f
                                    });
                                    return (0, i.jsx)(
                                        s.eee,
                                        {
                                            onClick: () => {
                                                null == N || N({ action: 'PRESS_CLEAR_HISTORY_DISCLAIMER' }), null != r ? r() : d.Z.open(), R();
                                            },
                                            children: t
                                        },
                                        n
                                    );
                                }
                            })
                        }),
                        (0, i.jsx)(E.Z, {
                            user: n,
                            entry: e,
                            className: T.card,
                            hideContextMenu: !0
                        })
                    ]
                }),
                (0, i.jsxs)(s.mzw, {
                    className: T.footer,
                    children: [
                        (0, i.jsx)(s.zxk, {
                            disabled: L,
                            color: s.Ttl.RED,
                            size: s.PhG.SMALL,
                            onClick: () => {
                                null == N || N({ action: 'PRESS_CLEAR_HISTORY_BUTTON' }), (0, c.CV)(e, n.id, R);
                            },
                            children: null != p ? h.intl.string(h.t['5911LS']) : h.intl.string(h.t.VkKicX)
                        }),
                        (0, i.jsx)(s.zxk, {
                            onClick: R,
                            size: s.PhG.SMALL,
                            look: s.iLD.FILLED,
                            color: s.Ttl.TRANSPARENT,
                            children: h.intl.string(h.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    );
}
