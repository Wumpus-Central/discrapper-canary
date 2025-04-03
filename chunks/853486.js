n.d(t, { Z: () => h });
var r = n(200651),
    a = n(192379),
    i = n(481060),
    o = n(665149),
    l = n(51144),
    s = n(246364),
    c = n(666233),
    d = n(50662),
    u = n(395716),
    m = n(673885),
    p = n(981631),
    f = n(388032),
    x = n(237259);
let h = function (e) {
    let { guild: t, guildJoinRequest: h, guildJoinRequestUser: b, onClose: j } = e,
        _ = a.useMemo(() => {
            var e;
            return null != (e = h.formResponses) ? e : [];
        }, [h.formResponses]),
        g = t.hasFeature(p.oNc.CLAN) && h.applicationStatus === s.wB.SUBMITTED,
        v = a.useCallback(
            () =>
                (0, i.ZDy)(async () => {
                    let { default: e } = await n.e('17945').then(n.bind(n, 223926));
                    return (n) => {
                        var a, i;
                        return (0, r.jsx)(
                            e,
                            ((a = (function (e) {
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
                            })({}, n)),
                            (i = i =
                                {
                                    guild: t,
                                    guildJoinRequest: h,
                                    user: b
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(i)).forEach(function (e) {
                                      Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(i, e));
                                  }),
                            a)
                        );
                    };
                }),
            [t, h, b]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.ZP, {
                toolbar: (0, r.jsx)(o.ZP.Icon, {
                    icon: i.Dio,
                    onClick: j,
                    tooltip: f.NW.string(f.t.cpT0Cg)
                }),
                children: [
                    (0, r.jsx)(o.ZP.Icon, {
                        icon: i.tBG,
                        disabled: !0,
                        'aria-label': f.NW.string(f.t.PuCkTU)
                    }),
                    (0, r.jsx)(i.X6q, {
                        variant: 'heading-md/semibold',
                        children: l.ZP.getName(b)
                    })
                ]
            }),
            (0, r.jsx)(d.Z, {
                guildJoinRequest: h,
                guildJoinRequestUser: b,
                guild: t
            }),
            (0, r.jsxs)(i.Ttm, {
                children: [
                    (0, r.jsxs)('div', {
                        className: x.container,
                        children: [
                            (0, r.jsx)(m.Z, {
                                user: b,
                                joinRequestId: h.joinRequestId
                            }),
                            g &&
                                (0, r.jsxs)('div', {
                                    className: x.actionButtons,
                                    children: [
                                        (0, r.jsx)(u.Z, { joinRequest: h }),
                                        (0, r.jsx)(i.zxk, {
                                            color: i.Ttl.PRIMARY,
                                            onClick: v,
                                            children: f.NW.string(f.t.KnIQtb)
                                        })
                                    ]
                                })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: x.disabledFormRenderer,
                        children: (0, r.jsx)(c.Z, {
                            guildId: t.id,
                            formFields: _,
                            user: b
                        })
                    })
                ]
            })
        ]
    });
};
