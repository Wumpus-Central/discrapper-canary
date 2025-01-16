n.d(t, {
    Z: function () {
        return Z;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(399606),
    a = n(704215),
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
    C = n(871499),
    x = n(131951),
    v = n(459273),
    _ = n(304388),
    I = n(981631),
    E = n(127379),
    b = n(388032);
function Z(e) {
    let { channel: t, themeable: Z, whichPopoutIsOpen: N, setWhichPopoutIsOpen: S } = e,
        {
            Component: T,
            events: { onMouseEnter: j, onMouseLeave: A }
        } = (0, s.j)(),
        y = t.getGuildId(),
        { mute: P, suppress: M } = (0, f.Z)(t),
        R = (0, r.e7)([x.Z], () => x.Z.isDeaf()),
        L = P || M || R,
        k = (0, u.sR)({ isSoundboardButtonDisabled: L }),
        [O, D] = (0, d.cv)(k),
        { groupedButtons: w, mode: B } = (0, m.ZP)({ location: 'ActionBarSoundboardButton' }),
        U = B === m.BK.GroupedButtonsRedMic ? 'green' : void 0;
    function H() {
        if (P) return b.intl.string(b.t['Ox4/zc']);
        if (M) return b.intl.string(b.t['+YBKYG']);
        if (R) return b.intl.string(b.t.X1lQlp);
    }
    function G(e) {
        null != y &&
            (0, c.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) =>
                    (0, i.jsx)(e, {
                        guildId: y,
                        ...t
                    });
            });
    }
    let F = l.useRef(null),
        V = l.useCallback(() => {
            var e;
            null === (e = F.current) || void 0 === e || e.hidePopout();
        }, []);
    return (
        (0, v.yp)({
            event: I.CkL.TOGGLE_SOUNDBOARD,
            handler: V
        }),
        (0, i.jsx)(_.Z, {
            ref: F,
            isPopoutBlocked: null != N && N !== E.D.SOUNDBOARD,
            onPopoutClose: () => (null == S ? void 0 : S(void 0)),
            onPopoutOpen: () => (null == S ? void 0 : S(E.D.SOUNDBOARD)),
            align: w ? 'center' : 'left',
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return L
                    ? null
                    : (0, i.jsx)(g.Z, {
                          children: (0, i.jsx)(p.Z, {
                              guildId: y,
                              channel: t,
                              onClose: n,
                              gridNotice:
                                  O === a.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
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
                    ? (0, i.jsx)(C.d, {
                          themeable: Z,
                          label: H(),
                          iconComponent: T,
                          disabled: L,
                          onContextMenu: G,
                          ...e,
                          onMouseEnter: (t) => {
                              e.onMouseEnter(t), j();
                          },
                          onMouseLeave: () => {
                              e.onMouseLeave(), A();
                          },
                          color: e.isActive ? U : void 0,
                          className: ''
                      })
                    : (0, i.jsx)(C.Z, {
                          themeable: Z,
                          label: H(),
                          iconComponent: o.SoundboardIcon,
                          disabled: L,
                          onContextMenu: G,
                          ...e
                      })
        })
    );
}
