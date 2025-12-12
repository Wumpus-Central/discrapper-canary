n.d(t, { Z: () => O }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(952265),
    s = n(681715),
    o = n(481060),
    c = n(493773),
    d = n(378298),
    u = n(513646),
    p = n(276618),
    h = n(367408),
    f = n(473092),
    g = n(819640),
    m = n(665149),
    b = n(134612),
    y = n(388032);
let O = i.memo(function (e) {
    let { channel: t } = e,
        O = (0, u.h)(t.id),
        x = (0, p.o)(t.id),
        j = (0, h.M)(t.id),
        v = (0, a.useHasAnyModalOpen)(),
        C = (0, l.e7)([g.Z], () => g.Z.hasLayers()),
        I = i.useCallback(
            () => (x ? y.intl.string(y.t["16QyDv"]) : null != j ? y.intl.string(y.t.kCN9i0) : null),
            [x, j],
        ),
        _ = i.useMemo(() => (x || null != j) && !v && !C, [x, j, v, C]),
        [S, E] = i.useState(I());
    i.useEffect(() => {
        null != j &&
            null != O &&
            (o.uvj.announce(y.intl.string(y.t.acsXuG)),
            setTimeout(() => {
                (0, d.T)(t.id, [j.id]);
            }, 5000),
            (0, f.KQ)({
                channelId: t.id,
                senderId: t.getRecipientId(),
                warningId: j.id,
                warningType: j.type,
                isNudgeWarning: null != j,
                viewName: f.pb.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            x &&
                (o.uvj.announce(y.intl.string(y.t["1dxCqG"])),
                setTimeout(() => {
                    (0, d.Ot)(t.id);
                }, 5000));
    }, [t, j, O, x]),
        (0, c.ZP)(() => {
            null != O &&
                (0, f.KQ)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: O.id,
                    warningType: O.type,
                    isNudgeWarning: null != j,
                    viewName: f.pb.SAFETY_TOOLS_BUTTON,
                });
        }),
        i.useEffect(() => {
            let e = I();
            null != e && E(e);
        }, [x, j, I]);
    let Z = i.useCallback(() => {
        null != j && (0, d.T)(t.id, [j.id]),
            null != O &&
                ((0, o.ZDy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("37031"), n.e("89650"), n.e("94253")]).then(
                            n.bind(n, 611446),
                        );
                        return (n) => {
                            let { onClose: i, transitionState: l } = n;
                            return (0, r.jsx)(e, {
                                otherUserId: t.getRecipientId(),
                                channelId: t.id,
                                warningId: O.id,
                                warningType: O.type,
                                onClose: i,
                                transitionState: l,
                            });
                        };
                    },
                    { modalKey: b.X_ },
                ),
                (0, f.qc)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: O.id,
                    warningType: O.type,
                    cta: f.NM.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != j,
                }));
    }, [j, O, t]);
    return null == O
        ? null
        : (0, r.jsx)(s.u, {
              forceOpen: _,
              text: S,
              position: "bottom",
              children: (0, r.jsx)(m.ZP.Icon, {
                  icon: o.b7C,
                  onClick: Z,
                  tooltip: y.intl.string(y.t.rpc2qv),
                  tooltipDisabled: null != j,
              }),
          });
});
