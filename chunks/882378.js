n.d(t, { Z: () => _ }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(952265),
    s = n(481060),
    o = n(493773),
    c = n(378298),
    d = n(444957),
    u = n(276618),
    p = n(367408),
    h = n(473092),
    f = n(819640),
    g = n(665149),
    m = n(134612),
    b = n(388032),
    y = n(807597);
let _ = i.memo(function (e) {
    let { channel: t } = e,
        _ = (0, d.h)(t.id),
        O = (0, u.o)(t.id),
        j = (0, p.M)(t.id),
        x = (0, a.f9)(),
        v = (0, l.e7)([f.Z], () => f.Z.hasLayers()),
        C = i.useCallback(
            () => (O ? b.intl.string(b.t["16QyDg"]) : null != j ? b.intl.string(b.t.kCN9i4) : null),
            [O, j],
        ),
        I = i.useMemo(() => (O || null != j) && !x && !v, [O, j, x, v]),
        [E, S] = i.useState(C());
    i.useEffect(() => {
        null != j &&
            null != _ &&
            (s.uvj.announce(b.intl.string(b.t.acsXuL)),
            setTimeout(() => {
                (0, c.T)(t.id, [j.id]);
            }, 5000),
            (0, h.KQ)({
                channelId: t.id,
                senderId: t.getRecipientId(),
                warningId: j.id,
                warningType: j.type,
                isNudgeWarning: null != j,
                viewName: h.pb.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            O &&
                (s.uvj.announce(b.intl.string(b.t["1dxCqK"])),
                setTimeout(() => {
                    (0, c.Ot)(t.id);
                }, 5000));
    }, [t, j, _, O]),
        (0, o.ZP)(() => {
            null != _ &&
                (0, h.KQ)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: _.id,
                    warningType: _.type,
                    isNudgeWarning: null != j,
                    viewName: h.pb.SAFETY_TOOLS_BUTTON,
                });
        }),
        i.useEffect(() => {
            let e = C();
            null != e && S(e);
        }, [O, j, C]);
    let Z = i.useCallback(() => {
        null != j && (0, c.T)(t.id, [j.id]),
            null != _ &&
                ((0, s.ZDy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("37031"), n.e("89650"), n.e("37157")]).then(
                            n.bind(n, 611446),
                        );
                        return (n) => {
                            let { onClose: i, transitionState: l } = n;
                            return (0, r.jsx)(e, {
                                otherUserId: t.getRecipientId(),
                                channelId: t.id,
                                warningId: _.id,
                                warningType: _.type,
                                onClose: i,
                                transitionState: l,
                            });
                        };
                    },
                    { modalKey: m.X_ },
                ),
                (0, h.qc)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: _.id,
                    warningType: _.type,
                    cta: h.NM.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != j,
                }));
    }, [j, _, t]);
    return null == _
        ? null
        : (0, r.jsx)(s.ua7, {
              forceOpen: I,
              text: E,
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
