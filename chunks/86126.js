n.d(t, { Z: () => v });
var r = n(255367),
    i = n(73800),
    l = n(512722),
    s = n.n(l),
    a = n(442837),
    o = n(755721),
    c = n(481060),
    d = n(674180),
    u = n(584825),
    m = n(289393),
    g = n(727843),
    p = n(14263),
    f = n(783454),
    h = n(388032),
    x = n(301849),
    b = n(522659);
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e) {
    var t;
    let { onDeleteEditState: l } = e,
        { editStateId: v, guildId: O, groupListingId: C } = (0, g.N)(),
        y = (0, a.e7)([m.Z], () => m.Z.getSubscriptionListing(v)),
        N = null == y ? void 0 : y.id,
        I = (0, p.Z)(O),
        E = i.useMemo(() => {
            var e;
            return null != I && null != y && (null != (e = I[y.role_id]) ? e : 0);
        }, [I, y]),
        S = 0 === E,
        T = null == N,
        P = null != (t = null == y ? void 0 : y.archived) && t,
        { deleteSubscriptionListing: w, submitting: R } = (0, u.r4)(),
        { archiveSubscriptionListing: Z, submitting: D } = (0, u._1)(),
        A = () => {
            let e = async () => {
                (T || (s()(null != C, 'group listing doesnt exist'), s()(null != N, 'subscription listing doesnt exist'), await w(O, C, N))) && (null == l || l());
            };
            (0, c.ZDy)(async () => {
                let { ConfirmModal: t } = await Promise.resolve().then(n.bind(n, 481060));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        _(
                            j(
                                {
                                    header: h.intl.string(h.t['8ZRTsr']),
                                    confirmText: h.intl.string(h.t.GMtG6u),
                                    cancelText: h.intl.string(h.t['ETE/oK']),
                                    onConfirm: () => {
                                        e();
                                    },
                                    confirmButtonColor: o.zx.Colors.RED
                                },
                                n
                            ),
                            {
                                children: (0, r.jsx)(c.Text, {
                                    variant: 'text-md/normal',
                                    children: h.intl.string(h.t.Y4KjUF)
                                })
                            }
                        )
                    );
            });
        },
        { allowSelfRemoveMonetization: L } = (0, d.gX)(O);
    return null == y
        ? null
        : (0, r.jsx)(f.Z, {
              title: h.intl.string(h.t['7Si8Ul']),
              children: P
                  ? (0, r.jsxs)(c.hjN, {
                        title: h.intl.string(h.t['2D14T0']),
                        disabled: !L,
                        children: [
                            (0, r.jsx)(c.R94, {
                                type: c.R94.Types.DESCRIPTION,
                                className: x.formDescription,
                                disabled: !L,
                                children: h.intl.string(h.t.Y4KjUF)
                            }),
                            (0, r.jsx)(c.ua7, {
                                shouldShow: !S,
                                text: h.intl.formatToPlainString(h.t.ABeonZ, { listingMemberCount: E }),
                                children: (e) =>
                                    (0, r.jsx)(
                                        o.zx,
                                        _(j({}, e), {
                                            wrapperClassName: b.deleteListingButton,
                                            color: o.zx.Colors.RED,
                                            onClick: A,
                                            submitting: R,
                                            disabled: !L || !S,
                                            children: h.intl.string(h.t.GMtG6u)
                                        })
                                    )
                            })
                        ]
                    })
                  : (0, r.jsxs)(c.hjN, {
                        title: h.intl.string(h.t['MS/4U1']),
                        disabled: !L,
                        children: [
                            (0, r.jsx)(c.R94, {
                                type: c.R94.Types.DESCRIPTION,
                                className: x.formDescription,
                                disabled: !L,
                                children: h.intl.string(h.t['5/Jeg4'])
                            }),
                            (0, r.jsx)(o.zx, {
                                wrapperClassName: b.deleteListingButton,
                                color: o.zx.Colors.RED,
                                onClick: () => {
                                    (s()(null != C, 'group listing doesnt exist'),
                                        s()(null != N, 'subscription listing doesnt exist'),
                                        (0, c.ZDy)(async () => {
                                            let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 481060));
                                            return (t) =>
                                                (0, r.jsx)(
                                                    e,
                                                    _(
                                                        j(
                                                            {
                                                                header: h.intl.string(h.t['8ZRTsr']),
                                                                confirmText: h.intl.string(h.t.RL0wjo),
                                                                cancelText: h.intl.string(h.t['ETE/oK']),
                                                                onConfirm: () => {
                                                                    Z(O, C, N);
                                                                },
                                                                confirmButtonColor: o.zx.Colors.RED
                                                            },
                                                            t
                                                        ),
                                                        {
                                                            children: (0, r.jsx)(c.Text, {
                                                                variant: 'text-md/normal',
                                                                children: h.intl.string(h.t['5/Jeg4'])
                                                            })
                                                        }
                                                    )
                                                );
                                        }));
                                },
                                submitting: D,
                                disabled: !L,
                                children: h.intl.string(h.t.RL0wjo)
                            })
                        ]
                    })
          });
}
