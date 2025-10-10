n.d(t, { Z: () => j });
var r = n(951288),
    i = n(647438),
    l = n(399606),
    s = n(481060),
    a = n(710344),
    o = n(734893),
    c = n(8426),
    d = n(969632),
    u = n(430677),
    g = n(388032),
    m = n(197530);
function p(e) {
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
function f(e, t) {
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
let h = [];
function x() {
    return (0, r.jsx)("div", {
        className: m.actionItemContainer,
        children: (0, r.jsxs)("div", {
            className: m.actionItem,
            children: [
                (0, r.jsx)("div", {
                    className: m.actionItemEmojiWrapper,
                    children: (0, r.jsx)(s.snC, {
                        size: "custom",
                        color: "currentColor",
                        height: 20,
                        width: 22,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: m.actionItemText,
                    children: (0, r.jsx)(s.Text, {
                        variant: "text-md/semibold",
                        color: "header-primary",
                        children: g.intl.string(g.t["K/i3iY"]),
                    }),
                }),
            ],
        }),
    });
}
function b(e) {
    let { guildId: t, onAddAction: l } = e,
        a = i.useCallback(() => {
            if (null != t)
                return (0, s.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e("7590"), n.e("83975")]).then(n.bind(n, 380716));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            f(p({}, n), {
                                guildId: t,
                                onSave: l,
                            }),
                        );
                });
        }, [t, l]);
    return (0, r.jsxs)(s.P3F, {
        className: m.addActionItem,
        onClick: a,
        children: [
            (0, r.jsx)(s.oFk, {
                size: "xs",
                color: "currentColor",
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-md/normal",
                color: "none",
                children: g.intl.string(g.t.qce3EB),
            }),
        ],
    });
}
let j = function (e) {
    let { guildId: t } = e,
        n = (0, l.Wu)([d.Z], () => {
            var e;
            return null != (e = d.Z.getSettings().newMemberActions) ? e : h;
        }),
        s = i.useCallback(
            (e, n) => {
                (0, c.vR)(e), (0, c.ad)(t, e.channelId, n, !0);
            },
            [t],
        ),
        g = i.useCallback(
            (e, r, i, l) => {
                var s;
                let a = null == (s = n[e]) ? void 0 : s.channelId;
                null != a && null != d.Z.getSettings() && ((0, c.el)(a, r), (0, c.ad)(t, a, i, l));
            },
            [n, t],
        ),
        j = i.useCallback(
            (e) => {
                var t;
                let r = null == (t = n[e]) ? void 0 : t.channelId;
                null != r && (0, c.Hr)(r);
            },
            [n],
        ),
        _ = n.map((e) => f(p({}, e), { id: e.channelId })),
        v = i.useCallback((e) => {
            (0, c.hS)(e);
        }, []),
        { handleDragStart: C, handleDragReset: O, handleDragComplete: y } = (0, a.Z)(_, v);
    return (0, r.jsxs)("div", {
        className: m.section,
        children: [
            n.map((e, n) =>
                (0, r.jsx)(
                    u.Z,
                    {
                        guildId: t,
                        action: e,
                        actionIndex: n,
                        onChange: g,
                        onDelete: j,
                        onDragStart: C,
                        onDragReset: O,
                        onDragComplete: y,
                    },
                    e.channelId,
                ),
            ),
            (0, r.jsx)(x, {}),
            n.length < o.O9 &&
                (0, r.jsx)(b, {
                    guildId: t,
                    onAddAction: s,
                }),
        ],
    });
};
