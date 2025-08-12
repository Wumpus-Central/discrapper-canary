n.d(t, { Z: () => x }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(952265),
    s = n(481060),
    o = n(493773),
    c = n(378298),
    u = n(513646),
    d = n(276618),
    h = n(367408),
    p = n(473092),
    f = n(819640),
    g = n(665149),
    m = n(134612),
    b = n(388032),
    y = n(53987);
let x = i.memo(function (e) {
    let { channel: t } = e,
        x = (0, u.h)(t.id),
        _ = (0, d.o)(t.id),
        j = (0, h.M)(t.id),
        O = (0, a.f9)(),
        v = (0, l.e7)([f.Z], () => f.Z.hasLayers()),
        C = i.useCallback(
            () => (_ ? b.intl.string(b.t["16QyDg"]) : null != j ? b.intl.string(b.t.kCN9i4) : null),
            [_, j],
        ),
        E = i.useMemo(() => (_ || null != j) && !O && !v, [_, j, O, v]),
        [S, I] = i.useState(C());
    i.useEffect(() => {
        null != j &&
            null != x &&
            (s.uvj.announce(b.intl.string(b.t.acsXuL)),
            setTimeout(() => {
                (0, c.T)(t.id, [j.id]);
            }, 5000),
            (0, p.KQ)({
                channelId: t.id,
                senderId: t.getRecipientId(),
                warningId: j.id,
                warningType: j.type,
                isNudgeWarning: null != j,
                viewName: p.pb.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            _ &&
                (s.uvj.announce(b.intl.string(b.t["1dxCqK"])),
                setTimeout(() => {
                    (0, c.Ot)(t.id);
                }, 5000));
    }, [t, j, x, _]),
        (0, o.ZP)(() => {
            null != x &&
                (0, p.KQ)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: x.id,
                    warningType: x.type,
                    isNudgeWarning: null != j,
                    viewName: p.pb.SAFETY_TOOLS_BUTTON,
                });
        }),
        i.useEffect(() => {
            let e = C();
            null != e && I(e);
        }, [_, j, C]);
    let Z = i.useCallback(() => {
        null != j && (0, c.T)(t.id, [j.id]),
            null != x &&
                ((0, s.ZDy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("49508"), n.e("9738"), n.e("782")]).then(
                            n.bind(n, 611446),
                        );
                        return (n) => {
                            let { onClose: i, transitionState: l } = n;
                            return (0, r.jsx)(e, {
                                otherUserId: t.getRecipientId(),
                                channelId: t.id,
                                warningId: x.id,
                                warningType: x.type,
                                onClose: i,
                                transitionState: l,
                            });
                        };
                    },
                    { modalKey: m.X_ },
                ),
                (0, p.qc)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: x.id,
                    warningType: x.type,
                    cta: p.NM.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != j,
                }));
    }, [j, x, t]);
    return null == x
        ? null
        : (0, r.jsx)(s.ua7, {
              forceOpen: E,
              text: S,
              color: s.FGA.BRAND,
              position: "bottom",
              tooltipClassName: y.tooltip,
              tooltipContentClassName: y.tooltipContent,
              children: () =>
                  (0, r.jsx)(g.ZP.Icon, {
                      icon: s.b7C,
                      onClick: Z,
                      tooltip: b.intl.string(b.t.rpc2qq),
                      tooltipDisabled: null != j,
                  }),
          });
});
