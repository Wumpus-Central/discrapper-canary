n.d(t, { Z: () => Z }), n(47120);
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
    f = n(294629),
    g = n(390322),
    _ = n(871499),
    C = n(131951),
    x = n(459273),
    v = n(304388),
    E = n(981631),
    I = n(127379),
    b = n(388032);
function Z(e) {
    let { channel: t, themeable: Z, whichPopoutIsOpen: N, setWhichPopoutIsOpen: T } = e,
        {
            Component: S,
            events: { onMouseEnter: j, onMouseLeave: y }
        } = (0, s.j)(),
        A = t.getGuildId(),
        { mute: P, suppress: R } = (0, f.Z)(t),
        M = (0, a.e7)([C.Z], () => C.Z.isDeaf()),
        L = P || R || M,
        k = (0, u.sR)({ isSoundboardButtonDisabled: L }),
        [O, D] = (0, d.cv)(k),
        { groupedButtons: w, mode: U } = (0, m.ZP)({ location: 'ActionBarSoundboardButton' }),
        B = U === m.BK.GroupedButtonsRedMic ? 'green' : void 0;
    function F() {
        return P ? b.intl.string(b.t['Ox4/zc']) : R ? b.intl.string(b.t['+YBKYG']) : M ? b.intl.string(b.t.X1lQlp) : void 0;
    }
    function H(e) {
        null != A &&
            (0, c.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) =>
                    (0, i.jsx)(e, {
                        guildId: A,
                        ...t
                    });
            });
    }
    let G = l.useRef(null),
        V = l.useCallback(() => {
            var e;
            null === (e = G.current) || void 0 === e || e.hidePopout();
        }, []);
    return (
        (0, x.yp)({
            event: E.CkL.TOGGLE_SOUNDBOARD,
            handler: V
        }),
        (0, i.jsx)(v.Z, {
            ref: G,
            isPopoutBlocked: null != N && N !== I.D.SOUNDBOARD,
            onPopoutClose: () => (null == T ? void 0 : T(void 0)),
            onPopoutOpen: () => (null == T ? void 0 : T(I.D.SOUNDBOARD)),
            align: w ? 'center' : 'left',
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return L
                    ? null
                    : (0, i.jsx)(g.Z, {
                          children: (0, i.jsx)(p.Z, {
                              guildId: A,
                              channel: t,
                              onClose: n,
                              gridNotice:
                                  O === r.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                  (0, i.jsx)(h.o, {
                                      onClose: n,
                                      markAsDismissed: D
                                  }),
                              analyticsSource: 'action bar button'
                          })
                      });
            },
            children: (e) =>
                w
                    ? (0, i.jsx)(_.d, {
                          themeable: Z,
                          label: F(),
                          iconComponent: S,
                          disabled: L,
                          onContextMenu: H,
                          ...e,
                          onMouseEnter: (t) => {
                              e.onMouseEnter(t), j();
                          },
                          onMouseLeave: () => {
                              e.onMouseLeave(), y();
                          },
                          color: e.isActive ? B : void 0,
                          className: ''
                      })
                    : (0, i.jsx)(_.Z, {
                          themeable: Z,
                          label: F(),
                          iconComponent: o.KY1,
                          disabled: L,
                          onContextMenu: H,
                          ...e
                      })
        })
    );
}
