n.d(t, { Z: () => j });
var r = n(200651),
    i = n(192379),
    l = n(399606),
    s = n(481060),
    a = n(710344),
    o = n(734893),
    c = n(8426),
    d = n(969632),
    u = n(430677),
    m = n(388032),
    g = n(773100);
function p(e) {
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
function h(e, t) {
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
let f = [];
function x() {
    return (0, r.jsx)('div', {
        className: g.actionItemContainer,
        children: (0, r.jsxs)('div', {
            className: g.actionItem,
            children: [
                (0, r.jsx)('div', {
                    className: g.actionItemEmojiWrapper,
                    children: (0, r.jsx)(s.snC, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 20,
                        width: 22
                    })
                }),
                (0, r.jsx)('div', {
                    className: g.actionItemText,
                    children: (0, r.jsx)(s.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: m.intl.string(m.t['K/i3iY'])
                    })
                })
            ]
        })
    });
}
function b(e) {
    let { guildId: t, onAddAction: l } = e,
        a = i.useCallback(() => {
            if (null != t)
                return (0, s.ZDy)(async () => {
                    let { default: e } = await n.e('14653').then(n.bind(n, 380716));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            h(p({}, n), {
                                guildId: t,
                                onSave: l
                            })
                        );
                });
        }, [t, l]);
    return (0, r.jsxs)(s.P3F, {
        className: g.addActionItem,
        onClick: a,
        children: [
            (0, r.jsx)(s.oFk, {
                size: 'xs',
                color: 'currentColor'
            }),
            (0, r.jsx)(s.Text, {
                variant: 'text-md/normal',
                color: 'none',
                children: m.intl.string(m.t.qce3EB)
            })
        ]
    });
}
let j = function (e) {
    let { guildId: t } = e,
        n = (0, l.Wu)([d.Z], () => {
            var e;
            return null != (e = d.Z.getSettings().newMemberActions) ? e : f;
        }),
        s = i.useCallback(
            (e, n) => {
                (0, c.vR)(e);
                let r = d.Z.getSettings();
                if (null == r) return;
                let { channelId: i } = e;
                (0, c.oo)(t, r, !0).then(() => {
                    null != n && (0, c.ad)(t, i, n, !0);
                });
            },
            [t]
        ),
        m = i.useCallback(
            (e, r, i, l) => {
                var s;
                let a = null == (s = n[e]) ? void 0 : s.channelId;
                if (null == a) return;
                let o = d.Z.getSettings();
                null != o &&
                    ((0, c.el)(a, r),
                    (0, c.oo)(t, o, !0).then(() => {
                        (0, c.ad)(t, a, i, l);
                    }));
            },
            [n, t]
        ),
        j = i.useCallback(
            (e) => {
                var r;
                let i = null == (r = n[e]) ? void 0 : r.channelId;
                if (null == i) return;
                (0, c.Hr)(i);
                let l = d.Z.getSettings();
                (0, c.oo)(t, l, !0);
            },
            [n, t]
        ),
        _ = n.map((e) => h(p({}, e), { id: e.channelId })),
        v = i.useCallback(
            (e) => {
                (0, c.hS)(e);
                let n = d.Z.getSettings();
                null != n && (0, c.oo)(t, n, !0);
            },
            [t]
        ),
        { handleDragStart: O, handleDragReset: C, handleDragComplete: y } = (0, a.Z)(_, v);
    return (0, r.jsxs)('div', {
        className: g.section,
        children: [
            n.map((e, n) =>
                (0, r.jsx)(
                    u.Z,
                    {
                        guildId: t,
                        action: e,
                        actionIndex: n,
                        onChange: m,
                        onDelete: j,
                        onDragStart: O,
                        onDragReset: C,
                        onDragComplete: y
                    },
                    e.channelId
                )
            ),
            (0, r.jsx)(x, {}),
            n.length < o.O9 &&
                (0, r.jsx)(b, {
                    guildId: t,
                    onAddAction: s
                })
        ]
    });
};
