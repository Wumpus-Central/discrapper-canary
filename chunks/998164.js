n.d(t, { Z: () => j });
var r = n(200651),
    i = n(192379),
    s = n(399606),
    a = n(481060),
    l = n(710344),
    o = n(734893),
    c = n(8426),
    d = n(969632),
    u = n(430677),
    m = n(388032),
    p = n(339945);
function g(e) {
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
function b() {
    return (0, r.jsx)('div', {
        className: p.actionItemContainer,
        children: (0, r.jsxs)('div', {
            className: p.actionItem,
            children: [
                (0, r.jsx)('div', {
                    className: p.actionItemEmojiWrapper,
                    children: (0, r.jsx)(a.snC, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 20,
                        width: 22
                    })
                }),
                (0, r.jsx)('div', {
                    className: p.actionItemText,
                    children: (0, r.jsx)(a.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: m.NW.string(m.t['K/i3iY'])
                    })
                })
            ]
        })
    });
}
function x(e) {
    let { guildId: t, onAddAction: s } = e,
        l = i.useCallback(() => {
            if (null != t)
                return (0, a.ZDy)(async () => {
                    let { default: e } = await n.e('14653').then(n.bind(n, 380716));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            h(g({}, n), {
                                guildId: t,
                                onSave: s
                            })
                        );
                });
        }, [t, s]);
    return (0, r.jsxs)(a.P3F, {
        className: p.addActionItem,
        onClick: l,
        children: [
            (0, r.jsx)(a.oFk, {
                size: 'xs',
                color: 'currentColor'
            }),
            (0, r.jsx)(a.Text, {
                variant: 'text-md/normal',
                color: 'none',
                children: m.NW.string(m.t.qce3EB)
            })
        ]
    });
}
let j = function (e) {
    let { guildId: t } = e,
        n = (0, s.Wu)([d.Z], () => {
            var e;
            return null !== (e = d.Z.getSettings().newMemberActions) && void 0 !== e ? e : f;
        }),
        a = i.useCallback(
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
            (e, r, i, s) => {
                var a;
                let l = null === (a = n[e]) || void 0 === a ? void 0 : a.channelId;
                if (null == l) return;
                let o = d.Z.getSettings();
                null != o &&
                    ((0, c.el)(l, r),
                    (0, c.oo)(t, o, !0).then(() => {
                        (0, c.ad)(t, l, i, s);
                    }));
            },
            [n, t]
        ),
        j = i.useCallback(
            (e) => {
                var t;
                let r = null === (t = n[e]) || void 0 === t ? void 0 : t.channelId;
                null != r && (0, c.Hr)(r);
            },
            [n]
        ),
        N = n.map((e) => h(g({}, e), { id: e.channelId })),
        v = i.useCallback(
            (e) => {
                (0, c.hS)(e);
                let n = d.Z.getSettings();
                null != n && (0, c.oo)(t, n, !0);
            },
            [t]
        ),
        { handleDragStart: _, handleDragReset: O, handleDragComplete: y } = (0, l.Z)(N, v);
    return (0, r.jsxs)('div', {
        className: p.section,
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
                        onDragStart: _,
                        onDragReset: O,
                        onDragComplete: y
                    },
                    e.channelId
                )
            ),
            (0, r.jsx)(b, {}),
            n.length < o.O9 &&
                (0, r.jsx)(x, {
                    guildId: t,
                    onAddAction: a
                })
        ]
    });
};
