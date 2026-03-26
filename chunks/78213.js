l.d(t, { A: () => v });
var n = l(627968),
    a = l(64700),
    i = l(311907),
    s = l(397927),
    r = l(565645),
    u = l(414079),
    o = l(713517),
    d = l(375499),
    c = l(937773),
    m = l(808728),
    f = l(730906),
    h = l(307731),
    g = l(985018),
    x = l(906796);
function v(e) {
    let {
            className: t,
            guildId: l,
            error: v,
            emojiId: j,
            emojiName: p,
            isRequiredField: N = !0,
            shouldUpdateBothEmojiFields: b = !1,
            setEmojiId: y,
            setEmojiName: C,
        } = e,
        A = (0, f.A)({ emojiId: j, emojiName: p }),
        w = (0, i.bG)([m.Ay], () => (null != l ? m.Ay.getDefaultChannel(l) : null)),
        S = a.useRef(null),
        { isHoveringOrFocusing: M } = (0, o.A)(S),
        E = () => {
            C(void 0), y(void 0);
        },
        T = (e) => {
            e.stopPropagation(), E();
        },
        k = a.useMemo(() => {
            let e = null != j && "" !== j,
                t = null != p && "" !== p,
                l = null != A && "" !== A,
                n = t && !Number.isNaN(parseInt(p)) && !l && !e;
            return { hasEmojiId: e, hasEmojiName: t, hasEmojiDisplayName: l, isDeletedCustomEmoji: n };
        }, [j, p, A]),
        P = !k.isDeletedCustomEmoji && k.hasEmojiDisplayName;
    return (0, n.jsx)("div", {
        className: t,
        children: (0, n.jsx)(s.D0$, {
            required: N,
            label: g.intl.string(g.t["3BQmiC"]),
            errorMessage: v ?? void 0,
            children: (0, n.jsx)(s.YNO, {
                targetElementRef: S,
                animation: s.YNO.Animation.NONE,
                position: "top",
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, n.jsx)(c.A, {
                        closePopout: t,
                        pickerIntention: h.b_.SOUNDBOARD,
                        onNavigateAway: t,
                        onSelectEmoji: (e) => {
                            let { emoji: l, willClose: n } = e,
                                a = l?.id == null;
                            E(), a ? C(l?.optionallyDiverseSequence) : (b && C(l?.name), y(l?.id)), n && t();
                        },
                        guildId: l,
                        channel: w,
                    });
                },
                children: (e, t) => {
                    let { isShown: l } = t;
                    return (0, n.jsxs)(s.FON, {
                        ...e,
                        className: x.LM,
                        ref: S,
                        children: [
                            (0, n.jsx)(d.A, {
                                active: l,
                                tabIndex: 0,
                                renderButtonContents:
                                    !k.isDeletedCustomEmoji && (k.hasEmojiId || k.hasEmojiName)
                                        ? () => (0, n.jsx)(r.A, { emojiName: p, emojiId: j })
                                        : null,
                            }),
                            (0, n.jsx)(s.Text, {
                                variant: "text-md/normal",
                                lineClamp: 1,
                                color: P ? "text-default" : "text-muted",
                                children: P ? `:${A}:` : g.intl.string(g.t.QTK0TJ),
                            }),
                            P && M && (0, n.jsx)(u.A, { ...e, onClick: T }),
                        ],
                    });
                },
            }),
        }),
    });
}
