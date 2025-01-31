n.d(t, { Z: () => C });
var i = n(200651),
    r = n(192379),
    l = n(512722),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(674180),
    d = n(584825),
    u = n(289393),
    m = n(727843),
    h = n(14263),
    g = n(783454),
    x = n(388032),
    p = n(83701),
    _ = n(338188);
function C(e) {
    var t;
    let { onDeleteEditState: l } = e,
        { editStateId: C, guildId: f, groupListingId: v } = (0, m.N)(),
        N = (0, a.e7)([u.Z], () => u.Z.getSubscriptionListing(C)),
        j = null == N ? void 0 : N.id,
        I = (0, h.Z)(f),
        E = r.useMemo(() => {
            var e;
            return null != I && null != N && (null !== (e = I[N.role_id]) && void 0 !== e ? e : 0);
        }, [I, N]),
        b = 0 === E,
        T = null == j,
        S = null !== (t = null == N ? void 0 : N.archived) && void 0 !== t && t,
        { deleteSubscriptionListing: R, submitting: Z } = (0, d.r4)(),
        { archiveSubscriptionListing: y, submitting: A } = (0, d._1)(),
        L = () => {
            let e = async () => {
                (T || (s()(null != v, 'group listing doesnt exist'), s()(null != j, 'subscription listing doesnt exist'), await R(f, v, j))) && (null == l || l());
            };
            (0, o.ZDy)(async () => {
                let { ConfirmModal: t } = await Promise.resolve().then(n.bind(n, 481060));
                return (n) =>
                    (0, i.jsx)(t, {
                        header: x.intl.string(x.t['8ZRTsr']),
                        confirmText: x.intl.string(x.t.GMtG6u),
                        cancelText: x.intl.string(x.t['ETE/oK']),
                        onConfirm: () => {
                            e();
                        },
                        confirmButtonColor: o.zxk.Colors.RED,
                        ...n,
                        children: (0, i.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            children: x.intl.string(x.t.Y4KjUF)
                        })
                    });
            });
        },
        { allowSelfRemoveMonetization: D } = (0, c.gX)(f);
    return null == N
        ? null
        : (0, i.jsx)(g.Z, {
              title: x.intl.string(x.t['7Si8Ul']),
              children: S
                  ? (0, i.jsxs)(o.hjN, {
                        title: x.intl.string(x.t['2D14T0']),
                        disabled: !D,
                        children: [
                            (0, i.jsx)(o.R94, {
                                type: o.R94.Types.DESCRIPTION,
                                className: p.formDescription,
                                disabled: !D,
                                children: x.intl.string(x.t.Y4KjUF)
                            }),
                            (0, i.jsx)(o.ua7, {
                                shouldShow: !b,
                                text: x.intl.formatToPlainString(x.t.ABeonZ, { listingMemberCount: E }),
                                children: (e) =>
                                    (0, i.jsx)(o.zxk, {
                                        ...e,
                                        wrapperClassName: _.deleteListingButton,
                                        color: o.zxk.Colors.RED,
                                        onClick: L,
                                        submitting: Z,
                                        disabled: !D || !b,
                                        children: x.intl.string(x.t.GMtG6u)
                                    })
                            })
                        ]
                    })
                  : (0, i.jsxs)(o.hjN, {
                        title: x.intl.string(x.t['MS/4U1']),
                        disabled: !D,
                        children: [
                            (0, i.jsx)(o.R94, {
                                type: o.R94.Types.DESCRIPTION,
                                className: p.formDescription,
                                disabled: !D,
                                children: x.intl.string(x.t['5/Jeg4'])
                            }),
                            (0, i.jsx)(o.zxk, {
                                wrapperClassName: _.deleteListingButton,
                                color: o.zxk.Colors.RED,
                                onClick: () => {
                                    s()(null != v, 'group listing doesnt exist'),
                                        s()(null != j, 'subscription listing doesnt exist'),
                                        (0, o.ZDy)(async () => {
                                            let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 481060));
                                            return (t) =>
                                                (0, i.jsx)(e, {
                                                    header: x.intl.string(x.t['8ZRTsr']),
                                                    confirmText: x.intl.string(x.t.RL0wjo),
                                                    cancelText: x.intl.string(x.t['ETE/oK']),
                                                    onConfirm: () => {
                                                        y(f, v, j);
                                                    },
                                                    confirmButtonColor: o.zxk.Colors.RED,
                                                    ...t,
                                                    children: (0, i.jsx)(o.Text, {
                                                        variant: 'text-md/normal',
                                                        children: x.intl.string(x.t['5/Jeg4'])
                                                    })
                                                });
                                        });
                                },
                                submitting: A,
                                disabled: !D,
                                children: x.intl.string(x.t.RL0wjo)
                            })
                        ]
                    })
          });
}
