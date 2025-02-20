n.d(t, { Z: () => O }), n(566702);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(793030),
    l = n(442837),
    c = n(833664),
    u = n(750881),
    d = n(545957),
    f = n(699516),
    p = n(584973),
    _ = n(303524),
    h = n(170187),
    m = n(329520),
    g = n(868781),
    E = n(122943),
    v = n(556638),
    b = n(981631),
    y = n(967616);
function O(e) {
    let { user: t, activities: n, applicationStream: o, voiceChannel: O, textClassName: S, emojiClassName: I, textSize: T = 'xs', animate: N = !0, hasQuest: A = !1, hideEmoji: C = !1, hideTooltip: R = !1 } = e,
        P = 'live-activity-status-web',
        { blockeeExperimentEnabled: w, blockerExperimentEnabled: D } = (0, u.NR)(P);
    (0, d.Z)(null == t ? void 0 : t.id, P);
    let x = w && (null == o ? void 0 : o.discoverable) === !1 ? null : o,
        L = i.useMemo(() => {
            var e, t;
            let r =
                null == n
                    ? void 0
                    : n.find((e) => {
                          let { type: t } = e;
                          return t === b.IIU.CUSTOM_STATUS;
                      });
            if (null == r) return null;
            let i = null !== (t = null === (e = r.state) || void 0 === e ? void 0 : e.trim()) && void 0 !== t ? t : null;
            return null == ('' === i ? null : i) && null == r.emoji ? null : r;
        }, [n]),
        M = (0, l.e7)([f.Z], () => f.Z.isBlockedOrIgnored(null == t ? void 0 : t.id));
    if (D && M) return null;
    let k = (null == t ? void 0 : t.bot) === !0,
        j = (null == L ? void 0 : L.state) != null && 'xs' === T,
        U = () => {
            if (null != x)
                return (0, r.jsx)(m.Z, {
                    game: null == n ? void 0 : n.find(c.Z),
                    textVariant: 'text-'.concat(T, '/medium'),
                    textClassName: S,
                    hideText: j,
                    hideIcon: k,
                    hideTooltip: R
                });
            if (null != O)
                return (0, r.jsx)(E.Z, {
                    channel: O,
                    textVariant: 'text-'.concat(T, '/medium'),
                    textClassName: S,
                    hideText: j,
                    hideTooltip: R
                });
            let e =
                null == n
                    ? void 0
                    : n.find((e) => {
                          let { type: t } = e;
                          return t !== b.IIU.CUSTOM_STATUS && t !== b.IIU.HANG_STATUS;
                      });
            return null != e
                ? (0, r.jsx)(g.Z, {
                      activity: e,
                      textVariant: 'text-'.concat(T, '/medium'),
                      textClassName: S,
                      hideText: j,
                      hideIcon: k,
                      hideTooltip: R
                  })
                : null;
        },
        G = () => {
            if (null == L) return null;
            let e = L.emoji,
                t = L.state;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    null != e &&
                        !C &&
                        (0, r.jsx)(p.Z, {
                            emoji: e,
                            animate: N,
                            hideTooltip: R,
                            className: I
                        }),
                    null != t &&
                        (0, r.jsx)(h.Z, {
                            variant: 'text-'.concat(T, '/medium'),
                            className: S,
                            children: t
                        })
                ]
            });
        };
    return (0, r.jsxs)('div', {
        className: a()(y.container, {
            [y.textXs]: 'xs' === T,
            [y.textSm]: 'sm' === T
        }),
        children: [
            U(),
            (0, r.jsx)(s.xv, {
                variant: 'text-'.concat(T, '/normal'),
                className: a()(y.text, y.dot, S),
                children: v.l
            }),
            G(),
            A && (0, r.jsx)(_.Z, {})
        ]
    });
}
