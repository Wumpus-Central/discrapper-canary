(e.d(n, { default: () => N }), e(388685));
var i = e(255367),
    r = e(73800),
    s = e(442837),
    l = e(755721),
    o = e(481060),
    a = e(230711),
    d = e(485267),
    c = e(564990),
    E = e(353647),
    u = e(527790),
    _ = e(540440),
    h = e(365583),
    T = e(388032),
    x = e(807069);
function N(t) {
    let { user: n, entry: e, transitionState: N, onAction: f, onClose: p, onOpenGameSettings: R } = t,
        [C, L] = (0, s.Wu)([E.Z], () => [E.Z.isDeletingEntryHistory, E.Z.deleteOutboxEntryError]);
    return (
        r.useEffect(() => d.Bt, []),
        (0, i.jsxs)(o.Y0X, {
            size: o.CgR.SMALL,
            transitionState: N,
            parentComponent: 'UserProfileActivityDeleteHistoryModal',
            children: [
                (0, i.jsxs)(o.hzk, {
                    className: x.content,
                    children: [
                        null != L
                            ? (0, i.jsxs)('div', {
                                  className: x.error,
                                  children: [
                                      (0, i.jsx)(o.k$p, { color: o.TVs.colors.STATUS_DANGER }),
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-sm/medium',
                                          children: T.intl.string(T.t.FMbL3t)
                                      })
                                  ]
                              })
                            : null,
                        (0, i.jsx)(o.X6q, {
                            variant: 'heading-lg/semibold',
                            children: (0, _.y)(e)
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            tag: 'span',
                            children: T.intl.format(T.t.KV72oa, {
                                settingsHook: (t, n) => {
                                    let r = (0, h.C)({
                                        entry: e,
                                        onOpenGameSettings: R
                                    });
                                    return (0, i.jsx)(
                                        o.eee,
                                        {
                                            onClick: () => {
                                                (null == f || f({ action: 'PRESS_CLEAR_HISTORY_DISCLAIMER' }), null != r ? r() : a.Z.open(), p());
                                            },
                                            children: t
                                        },
                                        n
                                    );
                                }
                            })
                        }),
                        (0, i.jsx)(u.Z, {
                            user: n,
                            entry: e,
                            className: x.card,
                            hideContextMenu: !0
                        })
                    ]
                }),
                (0, i.jsxs)(o.mzw, {
                    className: x.footer,
                    children: [
                        (0, i.jsx)(o.zxk, {
                            variant: 'critical-primary',
                            size: 'sm',
                            text: null != L ? T.intl.string(T.t['5911LS']) : T.intl.string(T.t.VkKicX),
                            disabled: C,
                            onClick: () => {
                                (null == f || f({ action: 'PRESS_CLEAR_HISTORY_BUTTON' }), (0, c.CV)(e, n.id, p));
                            }
                        }),
                        (0, i.jsx)(l.zx, {
                            onClick: p,
                            size: l.Ph.SMALL,
                            look: l.iL.FILLED,
                            color: l.Tt.TRANSPARENT,
                            children: T.intl.string(T.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    );
}
