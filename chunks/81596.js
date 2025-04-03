n.d(t, { default: () => h }), n(47120);
var i = n(200651),
    a = n(192379),
    r = n(442837),
    o = n(481060),
    c = n(230711),
    l = n(485267),
    d = n(564990),
    s = n(353647),
    _ = n(527790),
    f = n(540440),
    E = n(365583),
    u = n(388032),
    T = n(807069);
function h(e) {
    let { user: t, entry: n, transitionState: h, onAction: N, onClose: x, onOpenGameSettings: p } = e,
        [R, S] = (0, r.Wu)([s.Z], () => [s.Z.isDeletingEntryHistory, s.Z.deleteOutboxEntryError]);
    return (
        a.useEffect(() => l.Bt, []),
        (0, i.jsxs)(o.Y0X, {
            size: o.CgR.SMALL,
            transitionState: h,
            children: [
                (0, i.jsxs)(o.hzk, {
                    className: T.content,
                    children: [
                        null != S
                            ? (0, i.jsxs)('div', {
                                  className: T.error,
                                  children: [
                                      (0, i.jsx)(o.k$p, { color: o.TVs.colors.STATUS_DANGER }),
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-sm/medium',
                                          children: u.NW.string(u.t.FMbL3t)
                                      })
                                  ]
                              })
                            : null,
                        (0, i.jsx)(o.X6q, {
                            variant: 'heading-lg/semibold',
                            children: (0, f.y)(n)
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            tag: 'span',
                            children: u.NW.format(u.t.KV72oa, {
                                settingsHook: (e, t) => {
                                    let a = (0, E.C)({
                                        entry: n,
                                        onOpenGameSettings: p
                                    });
                                    return (0, i.jsx)(
                                        o.eee,
                                        {
                                            onClick: () => {
                                                null == N || N({ action: 'PRESS_CLEAR_HISTORY_DISCLAIMER' }), null != a ? a() : c.Z.open(), x();
                                            },
                                            children: e
                                        },
                                        t
                                    );
                                }
                            })
                        }),
                        (0, i.jsx)(_.Z, {
                            user: t,
                            entry: n,
                            className: T.card,
                            hideContextMenu: !0
                        })
                    ]
                }),
                (0, i.jsxs)(o.mzw, {
                    className: T.footer,
                    children: [
                        (0, i.jsx)(o.zxk, {
                            disabled: R,
                            color: o.Ttl.RED,
                            size: o.PhG.SMALL,
                            onClick: () => {
                                null == N || N({ action: 'PRESS_CLEAR_HISTORY_BUTTON' }), (0, d.CV)(n, t.id, x);
                            },
                            children: null != S ? u.NW.string(u.t['5911LS']) : u.NW.string(u.t.VkKicX)
                        }),
                        (0, i.jsx)(o.zxk, {
                            onClick: x,
                            size: o.PhG.SMALL,
                            look: o.iLD.FILLED,
                            color: o.Ttl.TRANSPARENT,
                            children: u.NW.string(u.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    );
}
