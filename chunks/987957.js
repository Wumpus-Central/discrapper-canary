n.d(t, {
    A: () => y,
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(417597),
    c = n(990078),
    o = n(397927),
    d = n(713654),
    u = n(599119),
    f = n(202027),
    g = n(374084),
    b = n(111487),
    m = n(734057),
    p = n(71393),
    x = n(486020),
    h = n(132514),
    j = n(985018),
    O = n(659233);
let y = function (e) {
    var t, l, y, v, A;
    let {
            guildId: E,
            action: N,
            actionIndex: _,
            onChange: S,
            onDelete: T,
            onDragStart: I,
            onDragComplete: C,
            onDragReset: P,
        } = e,
        w = (0, a.bG)([m.A], () => m.A.getChannel(N.channelId)),
        R = (0, a.bG)([p.A], () => p.A.getGuild(E)),
        D = (0, a.bG)([h.A], () => h.A.getPendingData()[N.channelId]),
        { customEmoji: G, unicodeEmoji: L } = (0, f.A)(
            null == (l = N.emoji) ? void 0 : l.id,
            null == (y = N.emoji) ? void 0 : y.name,
        ),
        k = null == N.emoji || null != G || null != L,
        M = x.Ay.getNewMemberActionIconURL({
            channelId: N.channelId,
            icon: N.icon,
        }),
        U = null != D ? D.iconData : M,
        F = null;
    null != w && (0, g.Rc)(w) ? k || (F = j.intl.string(j.t.wAkIZW)) : (F = j.intl.string(j.t.CbTEKP));
    let {
            drag: B,
            dragSourcePosition: H,
            drop: V,
            setIsDraggable: K,
        } = (0, u.A)({
            type: "NEW_MEMBER_ACTION",
            index: _,
            optionId: N.channelId,
            onDragStart: I,
            onDragComplete: C,
            onDragReset: P,
        }),
        z = i.useCallback(() => {
            if (null != E)
                return (0, o.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("54569"), n.e("76945")]).then(n.bind(n, 251632));
                    return (t) => {
                        var n, i;
                        return (0, r.jsx)(
                            e,
                            ((n = (function (e) {
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
                            })({}, t)),
                            (i = i =
                                {
                                    guildId: E,
                                    action: N,
                                    onSave: (e, t, n) => S(_, e, t, n),
                                    onDelete: () => T(_),
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(i)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                  }),
                            n),
                        );
                    };
                });
        }, [E, N, _, S, T]);
    if (null == w || null == R) return null;
    let Y = null != (t = (0, d.gU)(w)) ? t : o.N$i;
    return (0, r.jsxs)("div", {
        className: O.L8,
        children: [
            (0, r.jsxs)("div", {
                className: s()(O.kv, {
                    [O.A]: null != H && _ < H,
                    [O.Ze]: null != H && _ > H,
                    [O.e5]: null != F,
                }),
                ref: (e) => {
                    B(V(e));
                },
                children: [
                    (0, r.jsx)("div", {
                        className: O.cK,
                        onMouseEnter: () => K(!0),
                        onMouseLeave: () => K(!1),
                        children: (0, r.jsx)(o.WP0, {
                            size: "xs",
                            color: "currentColor",
                            className: O.co,
                        }),
                    }),
                    null != U
                        ? (0, r.jsx)("div", {
                              className: O.P0,
                              children: (0, r.jsx)("img", {
                                  src: U,
                                  className: O.Kk,
                                  width: 48,
                                  height: 48,
                                  alt: "",
                                  "aria-hidden": !0,
                              }),
                          })
                        : (0, r.jsx)("div", {
                              className: O.zV,
                              children: (0, r.jsx)(b.A, {
                                  emojiId: null == (v = N.emoji) ? void 0 : v.id,
                                  emojiName: null == (A = N.emoji) ? void 0 : A.name,
                                  size: b.g.MEDIUM,
                                  defaultComponent: (0, r.jsx)(Y, {}),
                              }),
                          }),
                    (0, r.jsxs)("div", {
                        className: O.tV,
                        children: [
                            (0, r.jsx)(o.Text, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                children: N.title,
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                children: j.intl.format(j.t.Ngk8Nr, {
                                    channelName: w.name,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(c.m, {
                        text: j.intl.string(j.t.bt75uw),
                        children: (0, r.jsx)(o.K0, {
                            icon: o.R2l,
                            size: "sm",
                            variant: "primary",
                            onClick: z,
                            "aria-label": j.intl.string(j.t.bt75uw),
                        }),
                    }),
                ],
            }),
            null != F &&
                (0, r.jsx)(o.Text, {
                    variant: "text-xs/medium",
                    color: "text-feedback-critical",
                    children: F,
                }),
        ],
    });
};
