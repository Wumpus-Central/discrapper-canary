n.d(t, { Z: () => N });
var r = n(200651),
    i = n(192379),
    s = n(512722),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(674180),
    d = n(584825),
    u = n(289393),
    m = n(727843),
    g = n(14263),
    p = n(783454),
    h = n(388032),
    f = n(301849),
    b = n(522659);
function x(e) {
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
function N(e) {
    var t;
    let { onDeleteEditState: s } = e,
        { editStateId: N, guildId: _, groupListingId: v } = (0, m.N)(),
        C = (0, l.e7)([u.Z], () => u.Z.getSubscriptionListing(N)),
        O = null == C ? void 0 : C.id,
        y = (0, g.Z)(_),
        I = i.useMemo(() => {
            var e;
            return null != y && null != C && (null != (e = y[C.role_id]) ? e : 0);
        }, [y, C]),
        E = 0 === I,
        S = null == O,
        T = null != (t = null == C ? void 0 : C.archived) && t,
        { deleteSubscriptionListing: P, submitting: w } = (0, d.r4)(),
        { archiveSubscriptionListing: R, submitting: Z } = (0, d._1)(),
        D = () => {
            let e = async () => {
                (S || (a()(null != v, 'group listing doesnt exist'), a()(null != O, 'subscription listing doesnt exist'), await P(_, v, O))) && (null == s || s());
            };
            (0, o.ZDy)(async () => {
                let { ConfirmModal: t } = await Promise.resolve().then(n.bind(n, 481060));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        j(
                            x(
                                {
                                    header: h.NW.string(h.t['8ZRTsr']),
                                    confirmText: h.NW.string(h.t.GMtG6u),
                                    cancelText: h.NW.string(h.t['ETE/oK']),
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
                                    children: h.NW.string(h.t.Y4KjUF)
                                })
                            }
                        )
                    );
            });
        },
        { allowSelfRemoveMonetization: A } = (0, c.gX)(_);
    return null == C
        ? null
        : (0, r.jsx)(p.Z, {
              title: h.NW.string(h.t['7Si8Ul']),
              children: T
                  ? (0, r.jsxs)(o.hjN, {
                        title: h.NW.string(h.t['2D14T0']),
                        disabled: !A,
                        children: [
                            (0, r.jsx)(o.R94, {
                                type: o.R94.Types.DESCRIPTION,
                                className: f.formDescription,
                                disabled: !A,
                                children: h.NW.string(h.t.Y4KjUF)
                            }),
                            (0, r.jsx)(o.ua7, {
                                shouldShow: !E,
                                text: h.NW.formatToPlainString(h.t.ABeonZ, { listingMemberCount: I }),
                                children: (e) =>
                                    (0, r.jsx)(
                                        o.zxk,
                                        j(x({}, e), {
                                            wrapperClassName: b.deleteListingButton,
                                            color: o.zxk.Colors.RED,
                                            onClick: D,
                                            submitting: w,
                                            disabled: !A || !E,
                                            children: h.NW.string(h.t.GMtG6u)
                                        })
                                    )
                            })
                        ]
                    })
                  : (0, r.jsxs)(o.hjN, {
                        title: h.NW.string(h.t['MS/4U1']),
                        disabled: !A,
                        children: [
                            (0, r.jsx)(o.R94, {
                                type: o.R94.Types.DESCRIPTION,
                                className: f.formDescription,
                                disabled: !A,
                                children: h.NW.string(h.t['5/Jeg4'])
                            }),
                            (0, r.jsx)(o.zxk, {
                                wrapperClassName: b.deleteListingButton,
                                color: o.zxk.Colors.RED,
                                onClick: () => {
                                    a()(null != v, 'group listing doesnt exist'),
                                        a()(null != O, 'subscription listing doesnt exist'),
                                        (0, o.ZDy)(async () => {
                                            let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 481060));
                                            return (t) =>
                                                (0, r.jsx)(
                                                    e,
                                                    j(
                                                        x(
                                                            {
                                                                header: h.NW.string(h.t['8ZRTsr']),
                                                                confirmText: h.NW.string(h.t.RL0wjo),
                                                                cancelText: h.NW.string(h.t['ETE/oK']),
                                                                onConfirm: () => {
                                                                    R(_, v, O);
                                                                },
                                                                confirmButtonColor: o.zxk.Colors.RED
                                                            },
                                                            t
                                                        ),
                                                        {
                                                            children: (0, r.jsx)(o.Text, {
                                                                variant: 'text-md/normal',
                                                                children: h.NW.string(h.t['5/Jeg4'])
                                                            })
                                                        }
                                                    )
                                                );
                                        });
                                },
                                submitting: Z,
                                disabled: !A,
                                children: h.NW.string(h.t.RL0wjo)
                            })
                        ]
                    })
          });
}
