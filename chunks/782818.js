n.d(t, { Z: () => F }), n(47120);
var l = n(200651),
    a = n(192379),
    i = n(120356),
    s = n.n(i),
    r = n(442837),
    o = n(824385),
    c = n(481060),
    d = n(98278),
    u = n(594174),
    m = n(74538),
    p = n(643879),
    x = n(225516),
    f = n(598989),
    g = n(898331),
    h = n(841183),
    C = n(981631),
    A = n(486324),
    j = n(388032),
    v = n(267458);
function N(e) {
    let { avatar: t, orderNumber: n, onSelectRecentAvatar: a } = e,
        { id: i, storageHash: s, description: r } = t,
        { avatarSrc: o, eventHandlers: d } = (0, h.Z)({
            avatarId: i,
            storageHash: s
        }),
        { onMouseEnter: u, onMouseLeave: m } = d;
    return (0, l.jsx)(c.P3F, {
        onClick: () => a(t),
        onMouseEnter: u,
        onMouseLeave: m,
        className: v.recentAvatarButton,
        'aria-label': j.intl.formatToPlainString(j.t['tmJ75+'], {
            orderNumber: n,
            description: r
        }),
        children: (0, l.jsx)('img', {
            src: o,
            alt: r,
            className: v.recentAvatar
        })
    });
}
function E(e) {
    let { numberOfLockedAvatarSlots: t } = e;
    return (0, l.jsxs)(c.P3F, {
        className: v.premiumUpsellButton,
        onClick: C.dG4,
        'aria-label': j.intl.formatToPlainString(j.t.D4829v, { numberOfLockedAvatarSlots: t }),
        children: [
            (0, l.jsxs)(c.Text, {
                variant: 'text-lg/normal',
                color: 'text-normal',
                'aria-hidden': !0,
                children: ['+', t]
            }),
            (0, l.jsx)(o.m, {
                className: v.premiumUpsellLockIcon,
                size: 'xxs'
            })
        ]
    });
}
function T(e) {
    let { hasIncreasedRecentAvatarsLimit: t, onComplete: i, onClose: s } = e,
        o = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
        { avatars: d, loading: m, error: h } = (0, f.S)(),
        { recentAvatarsLimit: T, numberOfLockedAvatarSlots: F } = (0, p.pC)(t),
        [_, S] = a.useState(null),
        b = null != _ ? _ : null == h ? void 0 : h.message,
        R = d.length > T ? d.slice(0, T) : d,
        Z = R.length,
        y = Math.max(T - Z, 0),
        w = (0, c.vRw)(),
        I = a.useCallback(
            async (e) => {
                let { id: t, storageHash: a, description: r } = e;
                if (null == o) return;
                S(null);
                let d = (0, p.fD)({
                    userId: o.id,
                    avatarId: t,
                    storageHash: a,
                    size: C.dGM,
                    canAnimate: !0,
                    allowWebp: !1
                });
                try {
                    let e = await fetch(d),
                        t = await e.blob(),
                        { filename: o, type: u } = (0, p.mh)(a, r);
                    s(),
                        (0, c.ZDy)(
                            async () => {
                                let { default: e } = await Promise.all([n.e('59732'), n.e('27952')]).then(n.bind(n, 712451));
                                return (n) =>
                                    (0, l.jsx)(e, {
                                        imgURI: d,
                                        file: new File([t], o, { type: u }),
                                        onCrop: i,
                                        uploadType: A.pC.AVATAR,
                                        showUpsellHeader: !0,
                                        ...n
                                    });
                            },
                            { contextKey: w }
                        );
                } catch (e) {
                    S(j.intl.string(j.t.fZRH9P));
                }
            },
            [w, s, i, o]
        );
    return (a.useEffect(() => {
        (0, x.N)();
    }, []),
    m)
        ? (0, l.jsx)(c.$jN, { className: v.spinner })
        : (0, l.jsxs)('div', {
              className: v.recentAvatarContainer,
              children: [
                  null != b &&
                      !m &&
                      (0, l.jsx)(c.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-danger',
                          className: v.errorMessage,
                          children: b
                      }),
                  Z > 0 &&
                      (0, l.jsx)('ul', {
                          'aria-label': j.intl.string(j.t.lsU63N),
                          className: v.recentAvatarList,
                          children: R.map((e, t) =>
                              (0, l.jsx)(
                                  'li',
                                  {
                                      children: (0, l.jsx)(N, {
                                          avatar: e,
                                          orderNumber: t + 1,
                                          onSelectRecentAvatar: I
                                      })
                                  },
                                  e.id
                              )
                          )
                      }),
                  y > 0 &&
                      (0, l.jsxs)('div', {
                          className: v.emptyAvatarSlots,
                          children: [(0, l.jsx)(c.nn4, { children: j.intl.format(j.t['8W2HOz'], { numberOfEmptyAvatarSlots: y }) }), [...Array(y)].map((e) => (0, l.jsx)(g.Z, { className: v.avatarPlaceholder }, e))]
                      }),
                  !t && (0, l.jsx)(E, { numberOfLockedAvatarSlots: F })
              ]
          });
}
function F(e) {
    let { className: t, onComplete: n, onClose: i } = e,
        o = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
        x = m.ZP.canUseIncreasedRecentAvatarsLimit(o),
        { recentAvatarsLimit: f } = (0, p.pC)(x),
        g = a.useCallback(() => {
            (0, d.$)(i);
        }, [i]);
    return (0, l.jsxs)('div', {
        className: s()(v.container, t),
        children: [
            (0, l.jsxs)('div', {
                className: v.text,
                children: [
                    (0, l.jsx)(c.X6q, {
                        variant: 'eyebrow',
                        color: 'header-secondary',
                        children: j.intl.string(j.t.Bnq9zM)
                    }),
                    (0, l.jsxs)(c.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        children: [j.intl.format(j.t['+CyJu7'], { recentAvatarsLimit: f }), ' ', !x && j.intl.format(j.t.Xs2Otb, { onClick: g })]
                    })
                ]
            }),
            (0, l.jsx)(T, {
                hasIncreasedRecentAvatarsLimit: x,
                onComplete: n,
                onClose: i
            })
        ]
    });
}
