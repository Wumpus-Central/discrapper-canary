n.d(t, {
    AV: () => w,
    Ay: () => T,
    P4: () => P,
    kD: () => R,
    sM: () => D,
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(837381),
    o = n(311907),
    c = n(3026),
    u = n(990078),
    d = n(732955),
    f = n(397927),
    p = n(914430),
    h = n(442433),
    b = n(676002),
    g = n(485947),
    m = n(924985),
    A = n(71393),
    y = n(576705),
    O = n(543465),
    j = n(551851),
    v = n(879124),
    x = n(652215),
    E = n(985018),
    _ = n(33925);

function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function S(e, t) {
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

function I(e) {
    e.stopPropagation();
}
let N = l.memo(function (e) {
        let t,
            {
                channel: i,
                connectChannelDragSource: d,
                connectChannelDropTarget: b,
                disableManageChannels: j,
                position: v,
                sortingPosition: N,
                hideIcon: T,
                children: P,
            } = e,
            w = (0, o.bG)([O.Ay], () => O.Ay.isChannelMuted(i.getGuildId(), i.id)),
            R = (0, o.bG)([m.A], () => m.A.isCollapsed(i.id)),
            D = (0, o.bG)([y.A], () => y.A.can(x.xBc.MANAGE_CHANNELS, i));
        t = null != N ? (v > N ? _.mU : _.TR) : _.fx;
        let M = l.useCallback(() => {
                R ? (0, p.fh)(i.id) : (0, p.Gv)(i.id);
            }, [i.id, R]),
            L = l.useCallback(
                (e) => {
                    if ("null" !== i.id) {
                        let t = A.A.getGuild(i.getGuildId());
                        null != t &&
                            (0, h.L3)(e, async () => {
                                let { default: e } = await Promise.all([n.e("75149"), n.e("30997")]).then(
                                    n.bind(n, 725756),
                                );
                                return (n) =>
                                    (0, r.jsx)(
                                        e,
                                        S(C({}, n), {
                                            channel: i,
                                            guild: t,
                                        }),
                                    );
                            });
                    }
                },
                [i],
            ),
            G = l.useCallback(() => {
                let e = i.type === x.rbe.GUILD_CATEGORY ? null : i.type,
                    t = i.getGuildId();
                null != t &&
                    (0, f.mMO)(async () => {
                        let { default: l } = await Promise.all([n.e("64233"), n.e("9743")]).then(n.bind(n, 409200));
                        return (n) =>
                            (0, r.jsx)(
                                l,
                                S(C({}, n), {
                                    channelType: e,
                                    guildId: t,
                                    categoryId: "null" !== i.id ? i.id : null,
                                }),
                            );
                    });
            }, [i]),
            k = (0, s.rm)(i.id),
            { role: U, tabIndex: V } = k,
            F = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    l,
                    i = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                        (r = n[l]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                    return i;
                }
                if (
                    ((i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            l = {},
                            i = Object.getOwnPropertyNames(e);
                        for (r = 0; r < i.length; r++)
                            (n = i[r]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (l[n] = e[n]);
                        return l;
                    })(e, t)),
                    Object.getOwnPropertySymbols)
                )
                    for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                        (r = n[l]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                return i;
            })(k, ["role", "tabIndex"]),
            H = l.useRef(null),
            B = l.useRef(null),
            K = (0, r.jsxs)("li", {
                className: t,
                "data-dnd-name": i.name,
                children: [
                    (0, r.jsx)(f.vN3, {
                        focusTarget: H,
                        ringTarget: B,
                        offset: {
                            left: 4,
                            right: 4,
                        },
                        children: (0, r.jsxs)("div", {
                            ref: B,
                            className: a()(_.Ki, _.iE, {
                                [_.yZ]: R,
                                [_.SU]: w,
                                [_.vk]: !0,
                            }),
                            onContextMenu: L,
                            children: [
                                (0, r.jsxs)(
                                    f.DUT,
                                    S(
                                        C(
                                            {
                                                innerRef: H,
                                                className: _.rb,
                                                tabIndex: V,
                                            },
                                            F,
                                        ),
                                        {
                                            onClick: M,
                                            "aria-label": E.intl.formatToPlainString(E.t.y5l3J2, {
                                                categoryName: i.name,
                                            }),
                                            "aria-expanded": !R,
                                            focusProps: {
                                                enabled: !1,
                                            },
                                            children: [
                                                (0, r.jsx)(g.A, {
                                                    className: _.UU,
                                                    children: (0, r.jsx)(c.A, {
                                                        children: i.name,
                                                    }),
                                                }),
                                                T
                                                    ? null
                                                    : (0, r.jsx)(f.abt, {
                                                          size: "md",
                                                          color: "currentColor",
                                                          className: _.Kk,
                                                      }),
                                            ],
                                        },
                                    ),
                                ),
                                (0, r.jsx)("div", {
                                    onClick: I,
                                    className: _.Y_,
                                    children:
                                        D && !j
                                            ? (0, r.jsx)(u.m, {
                                                  text: E.intl.string(E.t["fUYU+j"]),
                                                  children: (0, r.jsx)(f.DUT, {
                                                      className: a()(_.c9, _.ih),
                                                      onClick: G,
                                                      tabIndex: V,
                                                      role: "button",
                                                      "aria-label": E.intl.string(E.t["fUYU+j"]),
                                                      children: (0, r.jsx)(f.TIR, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                          className: _.hs,
                                                      }),
                                                  }),
                                              })
                                            : null,
                                }),
                            ],
                        }),
                    }),
                    P,
                ],
            });
        return null != b && null != d ? b(d(K)) : K;
    }),
    T = (0, b.a)(N),
    P = l.memo(function (e) {
        let { name: t, onDismiss: n, className: l } = e;
        return (0, r.jsx)("li", {
            className: a()(l, _.fx),
            children: (0, r.jsxs)("div", {
                className: a()(_.Ki, _._V),
                children: [
                    (0, r.jsx)("div", {
                        className: _.rb,
                        children: (0, r.jsx)(g.A, {
                            className: _.UU,
                            children: (0, r.jsx)(c.A, {
                                children: t,
                            }),
                        }),
                    }),
                    null != n
                        ? (0, r.jsx)(u.m, {
                              asContainer: !0,
                              text: E.intl.string(E.t["5qNmsU"]),
                              children: (0, r.jsx)(f.DUT, {
                                  className: _.r,
                                  onClick: n,
                                  children: (0, r.jsx)(f.aXh, {
                                      size: "md",
                                      color: "currentColor",
                                      className: _.X8,
                                  }),
                              }),
                          })
                        : null,
                ],
            }),
        });
    }),
    w = l.memo(function (e) {
        let { category: t } = e,
            n = (0, o.bG)([j.A], () => j.A.isVoiceCategoryCollapsed(t.guild.id)),
            i = l.useCallback(() => {
                n ? (0, v.T)(t.guild.id) : (0, v.E)(t.guild.id);
            }, [t.guild.id, n]);
        return (0, r.jsx)("div", {
            className: _.oA,
            children: (0, r.jsx)(d.$nd, {
                variant: "secondary",
                fullWidth: !0,
                onClick: i,
                icon: f.HKD,
                text: n ? E.intl.string(E.t["/eB9Bg"]) : E.intl.string(E.t.Q2gPWl),
            }),
        });
    }),
    R = l.memo(function (e) {
        let { category: t, channel: n } = e,
            l = (0, o.bG)([j.A], () => j.A.isVoiceCategoryCollapsed(t.guild.id));
        return l || null == n || n.record.type === x.rbe.GUILD_CATEGORY
            ? l
                ? (0, r.jsx)("li", {
                      className: _.fx,
                      children: (0, r.jsx)("div", {
                          className: a()(_.Ki, _._V),
                          children: (0, r.jsx)(g.A, {
                              className: _.UU,
                              children: (0, r.jsx)(c.A, {
                                  children: E.intl.string(E.t["V/u9Dy"]),
                              }),
                          }),
                      }),
                  })
                : null
            : (0, r.jsx)("div", {
                  style: {
                      height: 16,
                  },
              });
    }),
    D = l.memo(function (e) {
        let { channel: t } = e;
        return (0, r.jsx)("li", {
            className: _.fx,
            children: (0, r.jsx)("div", {
                className: a()(_.Ki, _._V),
                children: (0, r.jsx)(g.A, {
                    className: _.UU,
                    children: (0, r.jsx)(c.A, {
                        children: t.name,
                    }),
                }),
            }),
        });
    });
