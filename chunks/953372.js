n.d(t, { Z: () => T });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(793030),
    l = n(442837),
    u = n(833664),
    c = n(750881),
    d = n(545957),
    f = n(699516),
    _ = n(584973),
    p = n(303524),
    h = n(170187),
    m = n(329520),
    g = n(868781),
    E = n(122943),
    v = n(556638),
    y = n(981631),
    I = n(694978);
function T(e) {
    let { user: t, activities: n, applicationStream: a, voiceChannel: T, textClassName: b, emojiClassName: S, textSize: A = 'xs', animate: N = !0, hasQuest: C = !1, hideEmoji: R = !1, hideTooltip: O = !1 } = e,
        D = 'live-activity-status-web',
        { blockeeExperimentEnabled: L, blockerExperimentEnabled: x } = (0, c.NR)(D);
    (0, d.Z)(null == t ? void 0 : t.id, D);
    let P = L && (null == a ? void 0 : a.discoverable) === !1 ? null : a,
        w = r.useMemo(() => {
            var e, t;
            let i =
                null == n
                    ? void 0
                    : n.find((e) => {
                          let { type: t } = e;
                          return t === y.IIU.CUSTOM_STATUS;
                      });
            if (null == i) return null;
            let r = null !== (t = null === (e = i.state) || void 0 === e ? void 0 : e.trim()) && void 0 !== t ? t : null;
            return null == ('' === r ? null : r) && null == i.emoji ? null : i;
        }, [n]),
        M = (0, l.e7)([f.Z], () => f.Z.isBlockedOrIgnored(null == t ? void 0 : t.id));
    if (x && M) return null;
    let k = (null == t ? void 0 : t.bot) === !0,
        U = (null == w ? void 0 : w.state) != null && 'xs' === A,
        G = () => {
            if (null != P)
                return (0, i.jsx)(m.Z, {
                    game: null == n ? void 0 : n.find(u.Z),
                    textVariant: 'text-'.concat(A, '/medium'),
                    textClassName: b,
                    hideText: U,
                    hideIcon: k,
                    hideTooltip: O
                });
            if (null != T)
                return (0, i.jsx)(E.Z, {
                    channel: T,
                    textVariant: 'text-'.concat(A, '/medium'),
                    textClassName: b,
                    hideText: U,
                    hideTooltip: O
                });
            let e =
                null == n
                    ? void 0
                    : n.find((e) => {
                          let { type: t } = e;
                          return t !== y.IIU.CUSTOM_STATUS && t !== y.IIU.HANG_STATUS;
                      });
            return null != e
                ? (0, i.jsx)(g.Z, {
                      activity: e,
                      textVariant: 'text-'.concat(A, '/medium'),
                      textClassName: b,
                      hideText: U,
                      hideIcon: k,
                      hideTooltip: O
                  })
                : null;
        },
        B = () => {
            if (null == w) return null;
            let e = w.emoji,
                t = w.state;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    null != e &&
                        !R &&
                        (0, i.jsx)(_.Z, {
                            emoji: e,
                            animate: N,
                            hideTooltip: O,
                            className: S
                        }),
                    null != t &&
                        (0, i.jsx)(h.Z, {
                            variant: 'text-'.concat(A, '/medium'),
                            className: b,
                            children: t
                        })
                ]
            });
        };
    return (0, i.jsxs)('div', {
        className: s()(I.container, {
            [I.textXs]: 'xs' === A,
            [I.textSm]: 'sm' === A
        }),
        children: [
            G(),
            (0, i.jsx)(o.xv, {
                variant: 'text-'.concat(A, '/normal'),
                className: s()(I.text, I.dot, b),
                children: v.l
            }),
            B(),
            C && (0, i.jsx)(p.Z, {})
        ]
    });
}
