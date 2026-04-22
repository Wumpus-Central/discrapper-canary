n.d(t, { A: () => D });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    o = n(311907),
    s = n(861672),
    c = n(477782),
    u = n(289873),
    m = n(460905),
    d = n(265872),
    f = n(939249),
    g = n(22231),
    b = n(292666),
    p = n(241326),
    h = n(565645),
    A = n(937773),
    C = n(770335),
    R = n(734057),
    j = n(723702),
    k = n(969632),
    x = n(287618),
    _ = n(412136),
    w = n(307731),
    E = n(698279),
    P = n(985018),
    I = n(231876);
function S(e) {
    let {
        hasUpload: t,
        mediaUrl: n,
        mediaFilename: a,
        imageClassName: i,
        emoji: r,
        emojiClassName: o,
        fallback: s,
    } = e;
    return t
        ? (0, l.jsx)("img", { src: n, alt: a, className: i })
        : null != r
          ? (0, l.jsx)(h.A, {
                className: o,
                emojiId: r.id,
                emojiName: r.type === C.i.UNICODE ? r.optionallyDiverseSequence : r.name,
                animated: r.animated,
            })
          : s;
}
function N(e) {
    let { onSelect: t, onEditMedia: n, onDeleteMedia: a, closePopout: i } = e;
    return (0, l.jsx)("div", {
        className: I.li,
        children: (0, l.jsx)(s.W, {
            "data-menu-migrated-auto": !0,
            navId: "poll-media-edit-menu",
            onClose: i,
            "aria-label": P.intl.string(P.t["cV+h7B"]),
            onSelect: t,
            children: (0, l.jsxs)(c.rX, {
                children: [
                    (0, l.jsx)(c.Dr, { id: "poll-media-replace", label: P.intl.string(P.t.CZeRhU), action: n }),
                    (0, l.jsx)(c.Dr, {
                        id: "poll-media-delete",
                        label: P.intl.string(P.t.IhMxgu),
                        action: a,
                        color: "danger",
                    }),
                ],
            }),
        }),
    });
}
function v(e) {
    let {
            channelId: t,
            localCreationAnswerId: n,
            buttonImage: i,
            onEmojiSelect: s,
            onEmojiRemove: c,
            answerIndex: b,
            shouldShowEmojiPicker: p,
            toggleEmojiPicker: h,
            containerRef: C,
        } = e,
        j = a.useRef(null),
        _ = (0, o.bG)([R.A], () => R.A.getChannel(t)),
        {
            emoji: v,
            isLoadingMedia: D,
            hasUpload: y,
            mediaUrl: O,
            mediaFilename: T,
        } = (0, x.A)({ channelId: t, localCreationAnswerId: n, image: i }),
        L = y || null != v,
        U = a.useCallback(() => {
            c(b);
        }, [c, b]),
        K = a.useMemo(
            () =>
                y
                    ? P.intl.formatToPlainString(P.t.vcC7Qn, { imageName: (0, k.Kj)(T), answerNumber: b + 1 })
                    : null != v
                      ? P.intl.formatToPlainString(P.t.ncOAha, { emojiName: v.name, answerNumber: b + 1 })
                      : P.intl.formatToPlainString(P.t.emdpNo, { answerNumber: b + 1 }),
            [y, v, b, T],
        ),
        Y = a.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, l.jsx)("div", {
                    className: I.Fb,
                    children: (0, l.jsx)(A.A, {
                        channel: _,
                        pickerIntention: w.EmojiIntention.POLLS,
                        closePopout: t,
                        onNavigateAway: t,
                        onSelectEmoji: (e) => {
                            let { emoji: n, willClose: l } = e;
                            null != n && s(n, b), l && t();
                        },
                    }),
                });
            },
            [_, s, b],
        ),
        B = a.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, l.jsx)(N, { onSelect: t, onEditMedia: h, onDeleteMedia: U, closePopout: t });
            },
            [U, h],
        ),
        W = D
            ? (0, l.jsx)(u.y, { className: I.EC })
            : (0, l.jsx)(S, {
                  hasUpload: y,
                  mediaUrl: O,
                  mediaFilename: T,
                  imageClassName: r()(I.$_, I.qX),
                  emoji: v,
                  emojiClassName: r()(I.$_, I.qZ),
                  fallback: (0, l.jsx)(m.n, { size: "sm", color: "currentColor", className: I.vr }),
              }),
        q = r()(E.VQ, I.GB, { [I.ZV]: L });
    return (0, l.jsx)(d.Y, {
        targetElementRef: C,
        renderPopout: Y,
        shouldShow: p,
        onRequestClose: h,
        animation: d.Y.Animation.NONE,
        position: "bottom",
        spacing: 2,
        children: (e) => {
            let { "aria-controls": t, "aria-expanded": n, ...a } = e;
            return (0, l.jsx)(d.Y, {
                targetElementRef: j,
                animation: d.Y.Animation.NONE,
                position: "bottom",
                renderPopout: B,
                children: (e) => {
                    let { onClick: a, "aria-controls": i, "aria-expanded": r, ...o } = e;
                    return (0, l.jsxs)(f.D, {
                        innerRef: j,
                        ...o,
                        className: q,
                        onClick: L && !p ? a : h,
                        "aria-label": K,
                        "aria-controls": t ?? i,
                        "aria-expanded": n || r,
                        children: [
                            W,
                            L &&
                                (0, l.jsx)(g.R, {
                                    size: "md",
                                    color: "currentColor",
                                    className: I.IZ,
                                    "aria-hidden": !0,
                                }),
                        ],
                    });
                },
            });
        },
    });
}
function D(e) {
    let {
            channelId: t,
            answer: n,
            index: i,
            isLastAnswer: r,
            onAnswerTextChange: o,
            onEmojiSelect: s,
            onEmojiRemove: c,
            canRemoveAnswer: u,
            onRemoveAnswer: m,
            addAnswer: d,
            submitPoll: f,
            error: g,
            ref: h,
            answerRowRefs: A,
        } = e,
        C = a.useRef(null),
        R = a.useRef(null),
        x = a.useRef(null);
    a.useImperativeHandle(h, () => ({
        focusDeleteButton: () => R.current?.focus(),
        focusInput: () => x.current?.focus(),
    }));
    let [w, E] = a.useState(!1),
        I = a.useCallback(() => {
            E((e) => !e);
        }, []),
        S = a.useCallback(
            (e) => {
                let t = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
                    l = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey);
                switch (e.key.toLowerCase()) {
                    case "enter":
                        r &&
                            (e.preventDefault(),
                            ((0, k.ND)(n) || "macos" !== (0, j.getOS)() ? t : l) ? (e.stopPropagation(), f()) : d()),
                            A.current[i + 1]?.focusInput();
                        break;
                    case "e":
                        ("macos" === (0, j.getOS)() ? l : t) && (e.preventDefault(), e.stopPropagation(), I());
                }
            },
            [d, n, A, i, r, f, I],
        ),
        N = (0, l.jsx)(v, {
            containerRef: C,
            channelId: t,
            buttonImage: n.image,
            onEmojiSelect: s,
            onEmojiRemove: c,
            localCreationAnswerId: n.localCreationAnswerId,
            answerIndex: i,
            shouldShowEmojiPicker: w,
            toggleEmojiPicker: I,
        });
    return (0, l.jsx)("div", {
        ref: C,
        children: (0, l.jsx)(b.k, {
            error: g,
            leading: { type: "emoji", button: N },
            trailing: u
                ? {
                      "aria-label": P.intl.formatToPlainString(P.t["22fjEc"], { answerNumber: i + 1 }),
                      icon: p.u,
                      onClick: () => m(i),
                      buttonRef: R,
                  }
                : void 0,
            "aria-label": P.intl.formatToPlainString(P.t["3+V8G9"], { answerNumber: i + 1 }),
            placeholder: P.intl.string(P.t.NNHVlv),
            value: n.text,
            onChange: (e) => o({ text: e, index: i, localCreationAnswerId: n.localCreationAnswerId }),
            onKeyDown: S,
            maxLength: _.dv,
            inputRef: x,
        }),
    });
}
