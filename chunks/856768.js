var n = l(477900),
    i = l(582128),
    s = l(503698),
    C = l.n(s),
    a = l(646514),
    r = l(628274),
    d = l(36525),
    o = l(862482),
    c = l(192308),
    u = l(866665),
    m = l(821609),
    h = l(950305),
    H = l(602853),
    g = l(834730),
    x = l(123292),
    f = l(215026),
    j = l(871682),
    p = l(778858),
    v = l(149468),
    V = l(46653),
    b = l(129230),
    A = l(504049);
l(543079);
var M = l(587426),
    L = l(134413),
    D = l(652215),
    R = l(792996),
    E = l(723264);
function N(e) {
    let { guildId: t, userIds: i } = e,
        s = i.size > 100;
    return (0, n.jsx)(u.m, {
        text: R.intl.formatToPlainString(R.t.FbJEFq, { max: 100 }),
        shouldShow: s,
        asContainer: !0,
        children: (0, n.jsx)(m.$, {
            size: "sm",
            variant: "secondary",
            disabled: s,
            text: R.intl.string(R.t.M5fcYt),
            onClick: function () {
                (0, c.mM)(async () => {
                    let { default: e } = await Promise.all([
                        l.e(498324),
                        l.e(809577),
                        l.e(190739),
                        l.e(144472),
                        l.e(778966),
                        l.e(977025),
                    ]).then(l.bind(l, 925144));
                    return (l) => (0, n.jsx)(e, { ...l, guildId: t, userIds: i });
                });
            },
        }),
    });
}
l.d(
    t,
    {},
    {
        A: function (e) {
            let { guildId: t } = e,
                { canAccessBulkActions: s, canAccessBulkBan: u, canAccessBulkRole: m } = (0, L.lN)(t),
                { selectedUserIds: I, clearSelection: S } = (0, M.A)(t),
                y = I.size > 0,
                Z = i.useMemo(() => new Set(u ? [...I].filter((e) => (0, L.Ph)(t, e)) : []), [I, u, t]);
            function _(e, t, l, n) {
                p.A.startBulkBan(e, t, l, n);
            }
            function w() {
                (b.default.track(D.HAw.BULK_MODERATION_ACTION_STARTED, {
                    ...(0, v.H$)(t),
                    action_type: A.Nj.BAN,
                    target_user_ids: [...Z],
                    mod_user_id: V.default.getId(),
                    location: "MemberSafetyPageActionNotice",
                }),
                    (0, c.mM)(async () => {
                        let { default: e } = await Promise.all([l.e(420282), l.e(691671), l.e(802504)]).then(
                            l.bind(l, 333179),
                        );
                        return (l) => (0, n.jsx)(e, { ...l, guildId: t, canBulkBan: u, userIds: Z, onBanMultiple: _ });
                    }));
            }
            let U = i.useCallback(() => {
                    S();
                }, [S]),
                k = (0, n.jsxs)("span", {
                    className: E.zC,
                    children: [
                        (0, n.jsx)(h.UserIcon, {
                            size: "custom",
                            width: 24,
                            height: 24,
                            color: (0, H.r)(a.A.unsafe_rawColors.PRIMARY_500).hex(),
                        }),
                        (0, n.jsx)(g.E, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: R.intl.format(R.t.TstoSZ, { count: I.size }),
                        }),
                        (0, n.jsx)(x.Q, { text: R.intl.string(R.t.yW6ZdE), onClick: U }),
                    ],
                }),
                O = (0, n.jsxs)("span", {
                    className: E.UD,
                    children: [
                        (0, n.jsx)(f.HammerIcon, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                        (0, n.jsx)(g.E, {
                            variant: "body-sm/semibold",
                            color: "currentColor",
                            children: R.intl.string(R.t["2a50fF"]),
                        }),
                    ],
                }),
                T = m
                    ? (0, n.jsxs)("span", {
                          className: E.lr,
                          children: [
                              k,
                              (0, n.jsxs)("span", {
                                  className: E.UD,
                                  children: [
                                      (0, n.jsx)(N, { guildId: t, userIds: I }),
                                      u
                                          ? (0, n.jsx)(o.$n, {
                                                size: o.$n.Sizes.SMALL,
                                                color: o.XD.RED,
                                                disabled: 0 === Z.size,
                                                onClick: w,
                                                children: O,
                                            })
                                          : null,
                                  ],
                              }),
                          ],
                      })
                    : k;
            return s
                ? (0, n.jsx)(r.F, {
                      component: "div",
                      className: C()(E.n2, { [E.hw]: m }),
                      children:
                          y &&
                          (0, n.jsx)(j.F, {
                              className: m ? E.Ic : void 0,
                              children: (0, n.jsx)(d.A, {
                                  onSave: u && !m ? w : void 0,
                                  disabled: 0 === Z.size,
                                  onSaveText: O,
                                  onSaveButtonColor: o.XD.RED,
                                  message: T,
                              }),
                          }),
                  })
                : null;
        },
    },
);
