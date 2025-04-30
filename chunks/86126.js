n.d(t, { Z: () => _ });
var r = n(200651),
    i = n(192379),
    l = n(512722),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(674180),
    u = n(584825),
    d = n(289393),
    m = n(727843),
    g = n(14263),
    p = n(783454),
    h = n(388032),
    f = n(301849),
    x = n(522659);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function j(e, t) {
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
function _(e) {
    var t;
    let { onDeleteEditState: l } = e,
        { editStateId: _, guildId: v, groupListingId: O } = (0, m.N)(),
        C = (0, a.e7)([d.Z], () => d.Z.getSubscriptionListing(_)),
        y = null == C ? void 0 : C.id,
        N = (0, g.Z)(v),
        I = i.useMemo(() => {
            var e;
            return null != N && null != C && (null != (e = N[C.role_id]) ? e : 0);
        }, [N, C]),
        E = 0 === I,
        S = null == y,
        T = null != (t = null == C ? void 0 : C.archived) && t,
        { deleteSubscriptionListing: P, submitting: w } = (0, u.r4)(),
        { archiveSubscriptionListing: R, submitting: Z } = (0, u._1)(),
        D = () => {
            let e = async () => {
                (S || (s()(null != O, 'group listing doesnt exist'), s()(null != y, 'subscription listing doesnt exist'), await P(v, O, y))) && (null == l || l());
            };
            (0, o.ZDy)(async () => {
                let { ConfirmModal: t } = await Promise.resolve().then(n.bind(n, 481060));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        j(
                            b(
                                {
                                    header: h.intl.string(h.t['8ZRTsr']),
                                    confirmText: h.intl.string(h.t.GMtG6u),
                                    cancelText: h.intl.string(h.t['ETE/oK']),
                                    onConfirm: () => {
                                        e();
                                    },
                                    confirmButtonColor: o.zxk.Colors.RED
                                },
                                n
                            ),
                            {
                                children: (0, r.jsx)(o.Text, {
                                    variant: 'text-md/normal',
                                    children: h.intl.string(h.t.Y4KjUF)
                                })
                            }
                        )
                    );
            });
        },
        { allowSelfRemoveMonetization: k } = (0, c.gX)(v);
    return null == C
        ? null
        : (0, r.jsx)(p.Z, {
              title: h.intl.string(h.t['7Si8Ul']),
              children: T
                  ? (0, r.jsxs)(o.hjN, {
                        title: h.intl.string(h.t['2D14T0']),
                        disabled: !k,
                        children: [
                            (0, r.jsx)(o.R94, {
                                type: o.R94.Types.DESCRIPTION,
                                className: f.formDescription,
                                disabled: !k,
                                children: h.intl.string(h.t.Y4KjUF)
                            }),
                            (0, r.jsx)(o.ua7, {
                                shouldShow: !E,
                                text: h.intl.formatToPlainString(h.t.ABeonZ, { listingMemberCount: I }),
                                children: (e) =>
                                    (0, r.jsx)(
                                        o.zxk,
                                        j(b({}, e), {
                                            wrapperClassName: x.deleteListingButton,
                                            color: o.zxk.Colors.RED,
                                            onClick: D,
                                            submitting: w,
                                            disabled: !k || !E,
                                            children: h.intl.string(h.t.GMtG6u)
                                        })
                                    )
                            })
                        ]
                    })
                  : (0, r.jsxs)(o.hjN, {
                        title: h.intl.string(h.t['MS/4U1']),
                        disabled: !k,
                        children: [
                            (0, r.jsx)(o.R94, {
                                type: o.R94.Types.DESCRIPTION,
                                className: f.formDescription,
                                disabled: !k,
                                children: h.intl.string(h.t['5/Jeg4'])
                            }),
                            (0, r.jsx)(o.zxk, {
                                wrapperClassName: x.deleteListingButton,
                                color: o.zxk.Colors.RED,
                                onClick: () => {
                                    s()(null != O, 'group listing doesnt exist'),
                                        s()(null != y, 'subscription listing doesnt exist'),
                                        (0, o.ZDy)(async () => {
                                            let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 481060));
                                            return (t) =>
                                                (0, r.jsx)(
                                                    e,
                                                    j(
                                                        b(
                                                            {
                                                                header: h.intl.string(h.t['8ZRTsr']),
                                                                confirmText: h.intl.string(h.t.RL0wjo),
                                                                cancelText: h.intl.string(h.t['ETE/oK']),
                                                                onConfirm: () => {
                                                                    R(v, O, y);
                                                                },
                                                                confirmButtonColor: o.zxk.Colors.RED
                                                            },
                                                            t
                                                        ),
                                                        {
                                                            children: (0, r.jsx)(o.Text, {
                                                                variant: 'text-md/normal',
                                                                children: h.intl.string(h.t['5/Jeg4'])
                                                            })
                                                        }
                                                    )
                                                );
                                        });
                                },
                                submitting: Z,
                                disabled: !k,
                                children: h.intl.string(h.t.RL0wjo)
                            })
                        ]
                    })
          });
}
