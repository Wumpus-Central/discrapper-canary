n.d(t, { A: () => _ });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    o = n(311907),
    s = n(397927),
    c = n(565645),
    u = n(937773),
    m = n(770335),
    d = n(734057),
    f = n(723702),
    g = n(969632),
    b = n(287618),
    p = n(412136),
    h = n(307731),
    A = n(698279),
    C = n(985018),
    R = n(851124);
function j(e) {
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
          ? (0, l.jsx)(c.A, {
                className: o,
                emojiId: r.id,
                emojiName: r.type === m.i.UNICODE ? r.optionallyDiverseSequence : r.name,
                animated: r.animated,
            })
          : s;
}
function k(e) {
    let { onSelect: t, onEditMedia: n, onDeleteMedia: a, closePopout: i } = e;
    return (0, l.jsx)("div", {
        className: R.li,
        children: (0, l.jsx)(s.W1t, {
            "data-menu-migrated-auto": !0,
            navId: "poll-media-edit-menu",
            onClose: i,
            "aria-label": C.intl.string(C.t["cV+h7B"]),
            onSelect: t,
            children: (0, l.jsxs)(s.rXV, {
                children: [
                    (0, l.jsx)(s.Drp, { id: "poll-media-replace", label: C.intl.string(C.t.CZeRhU), action: n }),
                    (0, l.jsx)(s.Drp, {
                        id: "poll-media-delete",
                        label: C.intl.string(C.t.IhMxgu),
                        action: a,
                        color: "danger",
                    }),
                ],
            }),
        }),
    });
}
function x(e) {
    let {
            channelId: t,
            localCreationAnswerId: n,
            buttonImage: i,
            onEmojiSelect: c,
            onEmojiRemove: m,
            answerIndex: f,
            shouldShowEmojiPicker: p,
            toggleEmojiPicker: x,
            containerRef: _,
        } = e,
        w = a.useRef(null),
        E = (0, o.bG)([d.A], () => d.A.getChannel(t)),
        {
            emoji: P,
            isLoadingMedia: I,
            hasUpload: N,
            mediaUrl: S,
            mediaFilename: v,
        } = (0, b.A)({ channelId: t, localCreationAnswerId: n, image: i }),
        D = N || null != P,
        O = a.useCallback(() => {
            m(f);
        }, [m, f]),
        y = a.useMemo(
            () =>
                N
                    ? C.intl.formatToPlainString(C.t.vcC7Qn, { imageName: (0, g.Kj)(v), answerNumber: f + 1 })
                    : null != P
                      ? C.intl.formatToPlainString(C.t.ncOAha, { emojiName: P.name, answerNumber: f + 1 })
                      : C.intl.formatToPlainString(C.t.emdpNo, { answerNumber: f + 1 }),
            [N, P, f, v],
        ),
        T = a.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, l.jsx)("div", {
                    className: R.Fb,
                    children: (0, l.jsx)(u.A, {
                        channel: E,
                        pickerIntention: h.EmojiIntention.POLLS,
                        closePopout: t,
                        onNavigateAway: t,
                        onSelectEmoji: (e) => {
                            let { emoji: n, willClose: l } = e;
                            null != n && c(n, f), l && t();
                        },
                    }),
                });
            },
            [E, c, f],
        ),
        U = a.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, l.jsx)(k, { onSelect: t, onEditMedia: x, onDeleteMedia: O, closePopout: t });
            },
            [O, x],
        ),
        L = I
            ? (0, l.jsx)(s.y$y, { className: R.EC })
            : (0, l.jsx)(j, {
                  hasUpload: N,
                  mediaUrl: S,
                  mediaFilename: v,
                  imageClassName: r()(R.$_, R.qX),
                  emoji: P,
                  emojiClassName: r()(R.$_, R.qZ),
                  fallback: (0, l.jsx)(s.nm2, { size: "sm", color: "currentColor", className: R.vr }),
              }),
        K = r()(A.VQ, R.GB, { [R.ZV]: D });
    return (0, l.jsx)(s.YNO, {
        targetElementRef: _,
        renderPopout: T,
        shouldShow: p,
        onRequestClose: x,
        animation: s.YNO.Animation.NONE,
        position: "bottom",
        spacing: 2,
        children: (e) => {
            let { "aria-controls": t, "aria-expanded": n, ...a } = e;
            return (0, l.jsx)(s.YNO, {
                targetElementRef: w,
                animation: s.YNO.Animation.NONE,
                position: "bottom",
                renderPopout: U,
                children: (e) => {
                    let { onClick: a, "aria-controls": i, "aria-expanded": r, ...o } = e;
                    return (0, l.jsxs)(s.DUT, {
                        innerRef: w,
                        ...o,
                        className: K,
                        onClick: D && !p ? a : x,
                        "aria-label": y,
                        "aria-controls": t ?? i,
                        "aria-expanded": n || r,
                        children: [
                            L,
                            D &&
                                (0, l.jsx)(s.R2l, {
                                    size: "md",
                                    color: "currentColor",
                                    className: R.IZ,
                                    "aria-hidden": !0,
                                }),
                        ],
                    });
                },
            });
        },
    });
}
function _(e) {
    let {
            channelId: t,
            answer: n,
            index: i,
            isLastAnswer: r,
            onAnswerTextChange: o,
            onEmojiSelect: c,
            onEmojiRemove: u,
            canRemoveAnswer: m,
            onRemoveAnswer: d,
            addAnswer: b,
            submitPoll: h,
            error: A,
            ref: R,
            answerRowRefs: j,
        } = e,
        k = a.useRef(null),
        _ = a.useRef(null),
        w = a.useRef(null);
    a.useImperativeHandle(R, () => ({
        focusDeleteButton: () => _.current?.focus(),
        focusInput: () => w.current?.focus(),
    }));
    let [E, P] = a.useState(!1),
        I = a.useCallback(() => {
            P((e) => !e);
        }, []),
        N = a.useCallback(
            (e) => {
                let t = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
                    l = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey);
                switch (e.key.toLowerCase()) {
                    case "enter":
                        r &&
                            (e.preventDefault(),
                            ((0, g.ND)(n) || "macos" !== (0, f.getOS)() ? t : l) ? (e.stopPropagation(), h()) : b()),
                            j.current[i + 1]?.focusInput();
                        break;
                    case "e":
                        ("macos" === (0, f.getOS)() ? l : t) && (e.preventDefault(), e.stopPropagation(), I());
                }
            },
            [b, n, j, i, r, h, I],
        ),
        S = (0, l.jsx)(x, {
            containerRef: k,
            channelId: t,
            buttonImage: n.image,
            onEmojiSelect: c,
            onEmojiRemove: u,
            localCreationAnswerId: n.localCreationAnswerId,
            answerIndex: i,
            shouldShowEmojiPicker: E,
            toggleEmojiPicker: I,
        });
    return (0, l.jsx)("div", {
        ref: k,
        children: (0, l.jsx)(s.ksK, {
            error: A,
            leading: { type: "emoji", button: S },
            trailing: m
                ? {
                      "aria-label": C.intl.formatToPlainString(C.t["22fjEc"], { answerNumber: i + 1 }),
                      icon: s.ucK,
                      onClick: () => d(i),
                      buttonRef: _,
                  }
                : void 0,
            "aria-label": C.intl.formatToPlainString(C.t["3+V8G9"], { answerNumber: i + 1 }),
            placeholder: C.intl.string(C.t.NNHVlv),
            value: n.text,
            onChange: (e) => o({ text: e, index: i, localCreationAnswerId: n.localCreationAnswerId }),
            onKeyDown: N,
            maxLength: p.dv,
            inputRef: w,
        }),
    });
}
