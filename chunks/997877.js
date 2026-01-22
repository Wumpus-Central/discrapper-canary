n.d(t, { x: () => q });
var r = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    i = n(989349),
    u = n.n(i),
    c = n(837381),
    o = n(311907),
    d = n(397927),
    f = n(966327),
    b = n(928039),
    p = n(629357),
    m = n(47167),
    g = n(598104),
    h = n(255266),
    y = n(72563),
    x = n(223863),
    j = n(95701),
    A = n(734057),
    v = n(71393),
    O = n(576705),
    S = n(290863),
    P = n(222823),
    T = n(994500),
    E = n(287809),
    w = n(405269),
    C = n(403362),
    N = n(427262),
    D = n(652215),
    k = n(790782),
    L = n(985018),
    _ = n(667052);
function R(e) {
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
function M(e, t) {
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
function G(e, t) {
    if (null == e) return {};
    var n,
        r,
        l,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (
        ((a = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                a = Object.getOwnPropertyNames(e);
            for (r = 0; r < a.length; r++)
                (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function I(e) {
    let {
            destination: t,
            icon: n,
            label: a,
            subLabel: i,
            selected: u,
            disabled: o,
            onPressDestination: f,
            "aria-setsize": b,
            "aria-posinset": p,
        } = e,
        m = (0, c.rm)(t.id),
        g = l.useCallback(() => {
            o || null == f || f(t);
        }, [f, o, t]);
    return (0, r.jsxs)(
        d.DUT,
        M(
            R(
                {
                    className: s()(_.HP, { [_.r9]: o }),
                    onClick: g,
                    "aria-selected": u,
                    "aria-setsize": b,
                    "aria-posinset": p,
                },
                m,
            ),
            {
                children: [
                    (0, r.jsxs)("div", {
                        className: _.D_,
                        children: [
                            (0, r.jsx)("div", {
                                className: _.P0,
                                children: n,
                            }),
                            (0, r.jsxs)("div", {
                                className: _.WD,
                                children: [
                                    (0, r.jsx)(d.Text, {
                                        tag: "strong",
                                        className: _.Pf,
                                        variant: "text-md/semibold",
                                        lineClamp: 1,
                                        children: a,
                                    }),
                                    (0, r.jsx)(d.Text, {
                                        className: _.J2,
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: i,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: _.kv,
                        children: (0, r.jsx)(d.P7L, { checked: u }),
                    }),
                ],
            },
        ),
    );
}
function U(e) {
    let { user: t, subLabel: n } = e,
        l = G(e, ["user", "subLabel"]),
        a = N.Ay.useName(t),
        s = N.Ay.useUserTag(t, { decoration: "never" }),
        i = (0, o.bG)([T.A], () => T.A.getNickname(t.id)),
        u = (0, o.bG)([S.A], () => S.A.getStatus(t.id));
    return (0, r.jsx)(
        I,
        M(R({}, l), {
            icon: (0, r.jsx)(f.A, {
                "aria-hidden": !0,
                size: d._3J.SIZE_32,
                user: t,
                status: u,
            }),
            label: null != i ? i : a,
            subLabel: null != n ? n : s,
        }),
    );
}
function H(e) {
    let { channel: t, subLabel: n } = e,
        l = G(e, ["channel", "subLabel"]),
        a = (0, m.Ay)(t),
        s = (0, y.i)(t);
    return (0, r.jsx)(
        I,
        M(R({}, l), {
            icon: (0, r.jsx)(g.A, {
                "aria-hidden": !0,
                size: d._3J.SIZE_32,
                channel: t,
            }),
            label: a,
            subLabel: null != n ? n : s,
        }),
    );
}
function V(e) {
    let { channel: t, subLabel: n } = e,
        l = G(e, ["channel", "subLabel"]),
        a = (0, o.bG)([v.A], () => v.A.getGuild(null == t ? void 0 : t.guild_id)),
        s = (0, m.Ay)(t),
        i = (0, o.bG)([A.A, E.default, T.A], () => {
            let e = A.A.getChannel(t.parent_id);
            return null == e ? null : (0, m.m1)(e, E.default, T.A, !1);
        }),
        c = (0, o.bG)([P.Ay], () => P.Ay.lastMessageTimestamp(t.id, k.P.CHANNEL)),
        f = null == a ? void 0 : a.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? d.bSJ : d.N$i;
        f = (0, r.jsxs)("div", {
            className: _.vr,
            children: [
                (0, r.jsx)(e, {
                    color: d.LU0.colors.TEXT_SUBTLE,
                    className: _.Q9,
                }),
                (0, r.jsx)(d.Text, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    lineClamp: 1,
                    children: i,
                }),
                null != c
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(d.Text, {
                                  className: _.Ql,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: "\u2022",
                              }),
                              (0, r.jsx)(d.Text, {
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: (0, w.Fe)(u()(c)),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    return (0, r.jsx)(
        I,
        M(R({}, l), {
            icon: (0, r.jsx)(h.A, {
                size: h.q.SMALL_32,
                guild: a,
                channel: t,
            }),
            label: s,
            subLabel: null != n ? n : f,
        }),
    );
}
function q(e) {
    let { rowData: t, selectedDestinations: n, handleToggleDestination: a, disableSelection: s } = e,
        i = G(e, ["rowData", "selectedDestinations", "handleToggleDestination", "disableSelection"]),
        u = l.useMemo(() => [t.length], [t.length]),
        o = l.useCallback(() => 48, []),
        f = l.useMemo(() => {
            var e;
            return null != (e = null == n ? void 0 : n.map(x.I)) ? e : [];
        }, [n]),
        m = l.useCallback(
            (e) => {
                let { section: n, row: l } = e;
                if (n > 0) return;
                let { type: i, record: u } = t[l];
                if (i === p.rD.HEADER) return;
                let c =
                        i === p.rD.USER
                            ? {
                                  type: "user",
                                  id: u.id,
                              }
                            : {
                                  type: "channel",
                                  id: u.id,
                              },
                    o = (0, x.I)(c),
                    d = (function (e) {
                        if (
                            e instanceof j.YB &&
                            (0, j.zy)(e.type) &&
                            null != e.rateLimitPerUser &&
                            e.rateLimitPerUser > 0 &&
                            !(O.A.can(D.xBc.MANAGE_CHANNELS, e) || O.A.can(D.xBc.MANAGE_MESSAGES, e))
                        )
                            return { label: L.intl.string(L.t.Icu3bf) };
                    })(u),
                    b = f.includes(o),
                    m = {
                        key: o,
                        destination: c,
                        subLabel: null != d ? d.label : void 0,
                        disabled: (s && !b) || null != d,
                        selected: b,
                        onPressDestination: a,
                        "aria-posinset": l + 1,
                        "aria-setsize": t.length,
                    };
                return i === p.rD.USER
                    ? (0, r.jsx)(U, R({ user: u }, m))
                    : i === p.rD.GROUP_DM
                      ? (0, r.jsx)(H, R({ channel: u }, m))
                      : i === p.rD.TEXT_CHANNEL || i === p.rD.VOICE_CHANNEL
                        ? (0, r.jsx)(V, R({ channel: u }, m))
                        : void (0, C.xb)(i);
            },
            [s, a, t, f],
        ),
        g = l.useRef(null),
        h = (0, b.A)("share-command-modal", g);
    return (0, r.jsx)(c.hD, {
        navigator: h,
        children: (0, r.jsx)(c.PR, {
            children: (e) => {
                let { ref: t } = e,
                    n = G(e, ["ref"]);
                return (0, r.jsx)(
                    d.OZj,
                    M(
                        R(
                            {
                                ref: (e) => {
                                    var n;
                                    (g.current = e),
                                        (t.current = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null);
                                },
                            },
                            n,
                            i,
                        ),
                        {
                            sections: u,
                            sectionHeight: 0,
                            renderRow: m,
                            rowHeight: o,
                        },
                    ),
                );
            },
        }),
    });
}
