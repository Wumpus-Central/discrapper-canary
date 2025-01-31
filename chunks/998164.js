n.d(t, { Z: () => _ });
var i = n(200651),
    r = n(192379),
    l = n(399606),
    s = n(481060),
    a = n(710344),
    o = n(734893),
    c = n(8426),
    d = n(969632),
    u = n(430677),
    m = n(388032),
    h = n(934842);
let g = [];
function x() {
    return (0, i.jsx)('div', {
        className: h.actionItemContainer,
        children: (0, i.jsxs)('div', {
            className: h.actionItem,
            children: [
                (0, i.jsx)('div', {
                    className: h.actionItemEmojiWrapper,
                    children: (0, i.jsx)(s.snC, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 20,
                        width: 22
                    })
                }),
                (0, i.jsx)('div', {
                    className: h.actionItemText,
                    children: (0, i.jsx)(s.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: m.intl.string(m.t['K/i3iY'])
                    })
                })
            ]
        })
    });
}
function p(e) {
    let { guildId: t, onAddAction: l } = e,
        a = r.useCallback(() => {
            if (null != t)
                return (0, s.ZDy)(async () => {
                    let { default: e } = await n.e('14653').then(n.bind(n, 380716));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            guildId: t,
                            onSave: l
                        });
                });
        }, [t, l]);
    return (0, i.jsxs)(s.P3F, {
        className: h.addActionItem,
        onClick: a,
        children: [
            (0, i.jsx)(s.oFk, {
                size: 'xs',
                color: 'currentColor'
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-md/normal',
                color: 'none',
                children: m.intl.string(m.t.qce3EB)
            })
        ]
    });
}
let _ = function (e) {
    let { guildId: t } = e,
        n = (0, l.Wu)([d.Z], () => {
            var e;
            return null !== (e = d.Z.getSettings().newMemberActions) && void 0 !== e ? e : g;
        }),
        s = r.useCallback(
            (e, n) => {
                (0, c.vR)(e);
                let i = d.Z.getSettings();
                if (null == i) return;
                let { channelId: r } = e;
                (0, c.oo)(t, i, !0).then(() => {
                    null != n && (0, c.ad)(t, r, n, !0);
                });
            },
            [t]
        ),
        m = r.useCallback(
            (e, i, r, l) => {
                var s;
                let a = null === (s = n[e]) || void 0 === s ? void 0 : s.channelId;
                if (null == a) return;
                let o = d.Z.getSettings();
                null != o &&
                    ((0, c.el)(a, i),
                    (0, c.oo)(t, o, !0).then(() => {
                        (0, c.ad)(t, a, r, l);
                    }));
            },
            [n, t]
        ),
        _ = r.useCallback(
            (e) => {
                var t;
                let i = null === (t = n[e]) || void 0 === t ? void 0 : t.channelId;
                null != i && (0, c.Hr)(i);
            },
            [n]
        ),
        C = n.map((e) => ({
            ...e,
            id: e.channelId
        })),
        f = r.useCallback(
            (e) => {
                (0, c.hS)(e);
                let n = d.Z.getSettings();
                null != n && (0, c.oo)(t, n, !0);
            },
            [t]
        ),
        { handleDragStart: v, handleDragReset: N, handleDragComplete: j } = (0, a.Z)(C, f);
    return (0, i.jsxs)('div', {
        className: h.section,
        children: [
            n.map((e, n) =>
                (0, i.jsx)(
                    u.Z,
                    {
                        guildId: t,
                        action: e,
                        actionIndex: n,
                        onChange: m,
                        onDelete: _,
                        onDragStart: v,
                        onDragReset: N,
                        onDragComplete: j
                    },
                    e.channelId
                )
            ),
            (0, i.jsx)(x, {}),
            n.length < o.O9 &&
                (0, i.jsx)(p, {
                    guildId: t,
                    onAddAction: s
                })
        ]
    });
};
