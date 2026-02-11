n.r(t), n.d(t, { default: () => f });
var r = n(627968),
    l = n(64700),
    i = n(417597),
    s = n(367513),
    a = n(401843),
    o = n(512513),
    u = n(386467),
    d = n(923917),
    c = n(574172),
    h = n(203736),
    I = n(175203),
    T = n(461782),
    w = n(734057),
    C = n(309010),
    p = n(313961),
    A = n(164617),
    L = n(567987),
    E = n(806931),
    m = n(652215),
    _ = n(985018),
    U = n(66484);
let P = [o.z];
function f(e) {
    let { windowKey: t, channelId: n, participantId: o } = e,
        f = (0, i.bG)([w.A], () => w.A.getChannel(n)),
        g = (0, i.bG)([p.A], () => p.A.getParticipant(n, o), [n, o]),
        y = null != f && null != g,
        M = (0, i.bG)([C.A], () => C.A.getVoiceChannelId() === n);
    l.useEffect(() => {
        (y && M) || c.close(t);
    }, [y, M, t]);
    let O = l.useCallback(
            (e) => {
                let { unmountWindow: t } = e;
                s.A.returnParticipant(n, o), t();
            },
            [n, o],
        ),
        b = (0, L.E)({ channel: f }),
        x = l.useCallback(() => {
            (0, E.Ay)(g) && (0, a.A9)(g.stream, { forceMultiple: !0 });
        }, [g]),
        R = l.useMemo(
            () =>
                null == g
                    ? _.intl.string(_.t.lfzt24)
                    : g.type === E.lp.USER
                      ? g.user.username
                      : g.type === E.lp.STREAM
                        ? _.intl.formatToPlainString(_.t["/DC1y9"], { username: g.user.username })
                        : _.intl.string(_.t["8vlBo7"]),
            [g],
        ),
        S = (0, h.A)();
    return (0, r.jsx)(d.A, {
        withTitleBar: !0,
        keybinds: P,
        windowKey: t,
        title: R,
        channelId: n,
        onBeforeUnload: O,
        appContext: m.BRT.CALL_TILE_POPOUT,
        hideModals: !0,
        children: y
            ? (0, r.jsx)(u.A.Provider, {
                  value: f.guild_id,
                  children: (0, r.jsx)(T.Ay, {
                      timeout: 2e3,
                      children: () =>
                          (0, r.jsx)(I.Ay, {
                              className: U.V,
                              participant: g,
                              channel: f,
                              width: S.width,
                              inCall: !0,
                              popoutType: A.N.CALL_TILE,
                              focused: !0,
                              noBorder: !0,
                              onContextMenu: b,
                              onClick: x,
                          }),
                  }),
              })
            : null,
    });
}
