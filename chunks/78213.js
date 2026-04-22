l.d(t, { A: () => N });
var n = l(627968),
    a = l(64700),
    i = l(311907),
    s = l(452027),
    r = l(265872),
    u = l(862301),
    o = l(834730),
    d = l(565645),
    c = l(414079),
    m = l(713517),
    f = l(375499),
    h = l(937773),
    g = l(808728),
    x = l(730906),
    v = l(307731),
    j = l(985018),
    p = l(809052);
function N(e) {
    let {
            className: t,
            guildId: l,
            error: N,
            emojiId: A,
            emojiName: C,
            isRequiredField: b = !0,
            shouldUpdateBothEmojiFields: y = !1,
            setEmojiId: w,
            setEmojiName: E,
        } = e,
        S = (0, x.A)({ emojiId: A, emojiName: C }),
        M = (0, i.bG)([g.Ay], () => (null != l ? g.Ay.getDefaultChannel(l) : null)),
        k = a.useRef(null),
        { isHoveringOrFocusing: P } = (0, m.A)(k),
        T = () => {
            E(void 0), w(void 0);
        },
        I = (e) => {
            e.stopPropagation(), T();
        },
        D = a.useMemo(() => {
            let e = null != A && "" !== A,
                t = null != C && "" !== C,
                l = null != S && "" !== S,
                n = t && !Number.isNaN(parseInt(C)) && !l && !e;
            return { hasEmojiId: e, hasEmojiName: t, hasEmojiDisplayName: l, isDeletedCustomEmoji: n };
        }, [A, C, S]),
        F = !D.isDeletedCustomEmoji && D.hasEmojiDisplayName;
    return (0, n.jsx)("div", {
        className: t,
        children: (0, n.jsx)(s.D, {
            required: b,
            label: j.intl.string(j.t["3BQmiC"]),
            errorMessage: N ?? void 0,
            children: (0, n.jsx)(r.Y, {
                targetElementRef: k,
                animation: r.Y.Animation.NONE,
                position: "top",
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, n.jsx)(h.A, {
                        closePopout: t,
                        pickerIntention: v.EmojiIntention.SOUNDBOARD,
                        onNavigateAway: t,
                        onSelectEmoji: (e) => {
                            let { emoji: l, willClose: n } = e,
                                a = l?.id == null;
                            T(), a ? E(l?.optionallyDiverseSequence) : (y && E(l?.name), w(l?.id)), n && t();
                        },
                        guildId: l,
                        channel: M,
                    });
                },
                children: (e, t) => {
                    let { isShown: l } = t;
                    return (0, n.jsxs)(u.F, {
                        ...e,
                        className: p.LM,
                        ref: k,
                        children: [
                            (0, n.jsx)(f.A, {
                                active: l,
                                tabIndex: 0,
                                renderButtonContents:
                                    !D.isDeletedCustomEmoji && (D.hasEmojiId || D.hasEmojiName)
                                        ? () => (0, n.jsx)(d.A, { emojiName: C, emojiId: A })
                                        : null,
                            }),
                            (0, n.jsx)(o.E, {
                                variant: "text-md/normal",
                                lineClamp: 1,
                                color: F ? "text-default" : "text-muted",
                                children: F ? `:${S}:` : j.intl.string(j.t.QTK0TJ),
                            }),
                            F && P && (0, n.jsx)(c.A, { ...e, onClick: I }),
                        ],
                    });
                },
            }),
        }),
    });
}
