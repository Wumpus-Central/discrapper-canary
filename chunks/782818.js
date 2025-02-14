n.d(t, { Z: () => T }), n(47120);
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
    x = n(643879),
    p = n(225516),
    f = n(598989),
    g = n(898331),
    h = n(841183),
    C = n(981631),
    A = n(388032),
    j = n(267458);
function v(e) {
    let { avatar: t, orderNumber: n } = e,
        { id: a, storageHash: i, description: s } = t,
        { avatarSrc: r, eventHandlers: o } = (0, h.Z)({
            avatarId: a,
            storageHash: i
        }),
        { onMouseEnter: d, onMouseLeave: u } = o;
    return (0, l.jsx)(c.P3F, {
        onClick: C.dG4,
        onMouseEnter: d,
        onMouseLeave: u,
        className: j.recentAvatarButton,
        'aria-label': A.intl.formatToPlainString(A.t['tmJ75+'], {
            orderNumber: n,
            description: s
        }),
        children: (0, l.jsx)('img', {
            src: r,
            alt: s,
            className: j.recentAvatar
        })
    });
}
function N(e) {
    let { numberOfLockedAvatarSlots: t } = e;
    return (0, l.jsxs)(c.P3F, {
        className: j.premiumUpsellButton,
        onClick: C.dG4,
        'aria-label': A.intl.formatToPlainString(A.t.D4829v, { numberOfLockedAvatarSlots: t }),
        children: [
            (0, l.jsxs)(c.Text, {
                variant: 'text-lg/normal',
                color: 'text-normal',
                'aria-hidden': !0,
                children: ['+', t]
            }),
            (0, l.jsx)(o.m, {
                className: j.premiumUpsellLockIcon,
                size: 'xxs'
            })
        ]
    });
}
function E(e) {
    let { hasIncreasedRecentAvatarsLimit: t } = e,
        { avatars: n, loading: i } = (0, f.S)(),
        { recentAvatarsLimit: s, numberOfLockedAvatarSlots: r } = (0, x.p)(t),
        o = n.length > s ? n.slice(0, s) : n,
        d = o.length,
        u = Math.max(s - d, 0);
    return (a.useEffect(() => {
        (0, p.N)();
    }, []),
    i)
        ? (0, l.jsx)(c.$jN, { className: j.spinner })
        : (0, l.jsxs)('div', {
              className: j.recentAvatarContainer,
              children: [
                  d > 0 &&
                      (0, l.jsx)('ul', {
                          'aria-label': A.intl.string(A.t.lsU63N),
                          className: j.recentAvatarList,
                          children: o.map((e, t) =>
                              (0, l.jsx)(
                                  'li',
                                  {
                                      children: (0, l.jsx)(v, {
                                          avatar: e,
                                          orderNumber: t + 1
                                      })
                                  },
                                  e.id
                              )
                          )
                      }),
                  u > 0 &&
                      (0, l.jsxs)('div', {
                          className: j.emptyAvatarSlots,
                          children: [(0, l.jsx)(c.nn4, { children: A.intl.format(A.t['8W2HOz'], { numberOfEmptyAvatarSlots: u }) }), [...Array(u)].map((e) => (0, l.jsx)(g.Z, { className: j.avatarPlaceholder }, e))]
                      }),
                  !t && (0, l.jsx)(N, { numberOfLockedAvatarSlots: r })
              ]
          });
}
function T(e) {
    let { className: t, onClose: n } = e,
        i = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
        o = m.ZP.canUseIncreasedRecentAvatarsLimit(i),
        { recentAvatarsLimit: p } = (0, x.p)(o),
        f = a.useCallback(() => {
            (0, d.$)(n);
        }, [n]);
    return (0, l.jsxs)('div', {
        className: s()(j.container, t),
        children: [
            (0, l.jsxs)('div', {
                className: j.text,
                children: [
                    (0, l.jsx)(c.X6q, {
                        variant: 'eyebrow',
                        color: 'header-secondary',
                        children: A.intl.string(A.t.Bnq9zM)
                    }),
                    (0, l.jsxs)(c.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        children: [A.intl.format(A.t['+CyJu7'], { recentAvatarsLimit: p }), ' ', !o && A.intl.format(A.t.Xs2Otb, { onClick: f })]
                    })
                ]
            }),
            (0, l.jsx)(E, { hasIncreasedRecentAvatarsLimit: o })
        ]
    });
}
