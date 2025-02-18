n.d(t, { Z: () => N }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(399606),
    r = n(704215),
    s = n(582019),
    o = n(481060),
    c = n(239091),
    d = n(706140),
    u = n(242291),
    h = n(792165),
    p = n(603074),
    m = n(861254),
    f = n(82965),
    g = n(294629),
    _ = n(390322),
    C = n(871499),
    x = n(131951),
    v = n(459273),
    E = n(304388),
    I = n(981631),
    b = n(127379),
    Z = n(388032);
function N(e) {
    let { channel: t, themeable: N, whichPopoutIsOpen: T, setWhichPopoutIsOpen: S } = e,
        {
            Component: j,
            events: { onMouseEnter: y, onMouseLeave: A }
        } = (0, s.j)(),
        P = t.getGuildId(),
        { mute: R, suppress: M } = (0, g.Z)(t),
        L = (0, a.e7)([x.Z], () => x.Z.isDeaf()),
        k = R || M || L,
        O = (0, u.sR)({ isSoundboardButtonDisabled: k }),
        [D, w] = (0, d.cv)(O),
        { mode: U } = (0, m.ZP)({ location: 'ActionBarSoundboardButton' }),
        B = (0, f.Z)({ location: 'ActionBarSoundboardButton' }),
        F = U === m.BK.GroupedButtonsRedMic ? 'green' : void 0;
    function H() {
        return R ? Z.intl.string(Z.t['Ox4/zc']) : M ? Z.intl.string(Z.t['+YBKYG']) : L ? Z.intl.string(Z.t.X1lQlp) : void 0;
    }
    function G(e) {
        null != P &&
            (0, c.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) =>
                    (0, i.jsx)(e, {
                        guildId: P,
                        ...t
                    });
            });
    }
    let V = l.useRef(null),
        z = l.useCallback(() => {
            var e;
            null === (e = V.current) || void 0 === e || e.hidePopout();
        }, []);
    return (
        (0, v.yp)({
            event: I.CkL.TOGGLE_SOUNDBOARD,
            handler: z
        }),
        (0, i.jsx)(E.Z, {
            ref: V,
            isPopoutBlocked: null != T && T !== b.D.SOUNDBOARD,
            onPopoutClose: () => (null == S ? void 0 : S(void 0)),
            onPopoutOpen: () => (null == S ? void 0 : S(b.D.SOUNDBOARD)),
            align: B ? 'center' : 'left',
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return k
                    ? null
                    : (0, i.jsx)(_.Z, {
                          children: (0, i.jsx)(p.Z, {
                              guildId: P,
                              channel: t,
                              onClose: n,
                              gridNotice:
                                  D === r.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                  (0, i.jsx)(h.o, {
                                      onClose: n,
                                      markAsDismissed: w
                                  }),
                              analyticsSource: 'action bar button'
                          })
                      });
            },
            children: (e) =>
                B
                    ? (0, i.jsx)(C.d, {
                          themeable: N,
                          label: H(),
                          iconComponent: j,
                          disabled: k,
                          onContextMenu: G,
                          ...e,
                          onMouseEnter: (t) => {
                              e.onMouseEnter(t), y();
                          },
                          onMouseLeave: () => {
                              e.onMouseLeave(), A();
                          },
                          color: e.isActive ? F : void 0,
                          className: ''
                      })
                    : (0, i.jsx)(C.Z, {
                          themeable: N,
                          label: H(),
                          iconComponent: o.KY1,
                          disabled: k,
                          onContextMenu: G,
                          ...e
                      })
        })
    );
}
