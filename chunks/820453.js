n.d(t, { A: () => C }), n(896048);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    o = n(311907),
    c = n(397927),
    s = n(565645),
    u = n(937773),
    f = n(770335),
    d = n(734057),
    b = n(723702),
    m = n(969632),
    p = n(287618),
    g = n(412136),
    O = n(307731),
    j = n(698279),
    y = n(985018),
    h = n(270465);
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        l,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (
        ((a = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                a = Object.getOwnPropertyNames(e);
            for (r = 0; r < a.length; r++)
                (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function w(e) {
    let {
        hasUpload: t,
        mediaUrl: n,
        mediaFilename: l,
        imageClassName: a,
        emoji: i,
        emojiClassName: o,
        fallback: c,
    } = e;
    return t
        ? (0, r.jsx)("img", {
              src: n,
              alt: l,
              className: a,
          })
        : null != i
          ? (0, r.jsx)(s.A, {
                className: o,
                emojiId: i.id,
                emojiName: i.type === f.i.UNICODE ? i.optionallyDiverseSequence : i.name,
                animated: i.animated,
            })
          : c;
}
function P(e) {
    let { onSelect: t, onEditMedia: n, onDeleteMedia: l, closePopout: a } = e;
    return (0, r.jsx)("div", {
        className: h.li,
        children: (0, r.jsx)(c.W1t, {
            navId: "poll-media-edit-menu",
            onClose: a,
            "aria-label": y.intl.string(y.t["cV+h7B"]),
            onSelect: t,
            children: (0, r.jsxs)(c.rXV, {
                children: [
                    (0, r.jsx)(c.Drp, {
                        id: "poll-media-replace",
                        label: y.intl.string(y.t.CZeRhU),
                        action: n,
                    }),
                    (0, r.jsx)(c.Drp, {
                        id: "poll-media-delete",
                        label: y.intl.string(y.t.IhMxgu),
                        action: l,
                        color: "danger",
                    }),
                ],
            }),
        }),
    });
}
function A(e) {
    let {
            channelId: t,
            localCreationAnswerId: n,
            buttonImage: a,
            onEmojiSelect: s,
            onEmojiRemove: f,
            answerIndex: b,
            shouldShowEmojiPicker: g,
            toggleEmojiPicker: A,
            containerRef: C,
        } = e,
        R = l.useRef(null),
        k = (0, o.bG)([d.A], () => d.A.getChannel(t)),
        {
            emoji: E,
            isLoadingMedia: x,
            hasUpload: S,
            mediaUrl: D,
            mediaFilename: N,
        } = (0, p.A)({
            channelId: t,
            localCreationAnswerId: n,
            image: a,
        }),
        I = S || null != E,
        _ = l.useCallback(() => {
            f(b);
        }, [f, b]),
        T = l.useMemo(
            () =>
                S
                    ? y.intl.formatToPlainString(y.t.vcC7Qn, {
                          imageName: (0, m.Kj)(N),
                          answerNumber: b + 1,
                      })
                    : null != E
                      ? y.intl.formatToPlainString(y.t.ncOAha, {
                            emojiName: E.name,
                            answerNumber: b + 1,
                        })
                      : y.intl.formatToPlainString(y.t.emdpNo, { answerNumber: b + 1 }),
            [S, E, b, N],
        ),
        U = l.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)("div", {
                    className: h.Fb,
                    children: (0, r.jsx)(u.A, {
                        channel: k,
                        pickerIntention: O.b_.POLLS,
                        closePopout: t,
                        onNavigateAway: t,
                        onSelectEmoji: (e) => {
                            let { emoji: n, willClose: r } = e;
                            null != n && s(n, b), r && t();
                        },
                    }),
                });
            },
            [k, s, b],
        ),
        L = l.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(P, {
                    onSelect: t,
                    onEditMedia: A,
                    onDeleteMedia: _,
                    closePopout: t,
                });
            },
            [_, A],
        ),
        K = x
            ? (0, r.jsx)(c.y$y, { className: h.EC })
            : (0, r.jsx)(w, {
                  hasUpload: S,
                  mediaUrl: D,
                  mediaFilename: N,
                  imageClassName: i()(h.$_, h.qX),
                  emoji: E,
                  emojiClassName: i()(h.$_, h.qZ),
                  fallback: (0, r.jsx)(c.nm2, {
                      size: "sm",
                      color: "currentColor",
                      className: h.vr,
                  }),
              }),
        Y = i()(j.VQ, h.GB, { [h.ZV]: I });
    return (0, r.jsx)(c.YNO, {
        targetElementRef: C,
        renderPopout: U,
        shouldShow: g,
        onRequestClose: A,
        animation: c.YNO.Animation.NONE,
        position: "bottom",
        spacing: 2,
        children: (e) => {
            let { "aria-controls": t, "aria-expanded": n } = e;
            return (
                v(e, ["aria-controls", "aria-expanded"]),
                (0, r.jsx)(c.YNO, {
                    targetElementRef: R,
                    animation: c.YNO.Animation.NONE,
                    position: "bottom",
                    renderPopout: L,
                    children: (e) => {
                        var l, a;
                        let { onClick: i, "aria-controls": o, "aria-expanded": s } = e,
                            u = v(e, ["onClick", "aria-controls", "aria-expanded"]);
                        return (0, r.jsxs)(
                            c.DUT,
                            ((l = (function (e) {
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
                            })({ innerRef: R }, u)),
                            (a = a =
                                {
                                    className: Y,
                                    onClick: I && !g ? i : A,
                                    "aria-label": T,
                                    "aria-controls": null != t ? t : o,
                                    "aria-expanded": n || s,
                                    children: [
                                        K,
                                        I &&
                                            (0, r.jsx)(c.R2l, {
                                                size: "md",
                                                color: "currentColor",
                                                className: h.IZ,
                                                "aria-hidden": !0,
                                            }),
                                    ],
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(a)).forEach(function (e) {
                                      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
                                  }),
                            l),
                        );
                    },
                })
            );
        },
    });
}
function C(e) {
    let {
            channelId: t,
            answer: n,
            index: a,
            isLastAnswer: i,
            onAnswerTextChange: o,
            onEmojiSelect: s,
            onEmojiRemove: u,
            canRemoveAnswer: f,
            onRemoveAnswer: d,
            addAnswer: p,
            submitPoll: O,
            error: j,
            ref: h,
            answerRowRefs: v,
        } = e,
        w = l.useRef(null),
        P = l.useRef(null),
        C = l.useRef(null);
    l.useImperativeHandle(h, () => ({
        focusDeleteButton: () => {
            var e;
            return null == (e = P.current) ? void 0 : e.focus();
        },
        focusInput: () => {
            var e;
            return null == (e = C.current) ? void 0 : e.focus();
        },
    }));
    let [R, k] = l.useState(!1),
        E = l.useCallback(() => {
            k((e) => !e);
        }, []),
        x = l.useCallback(
            (e) => {
                let t = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
                    r = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey);
                switch (e.key.toLowerCase()) {
                    case "enter":
                        var l;
                        i &&
                            (e.preventDefault(),
                            ((0, m.ND)(n) || "macos" !== (0, b.getOS)() ? t : r) ? (e.stopPropagation(), O()) : p()),
                            null == (l = v.current[a + 1]) || l.focusInput();
                        break;
                    case "e":
                        ("macos" === (0, b.getOS)() ? r : t) && (e.preventDefault(), e.stopPropagation(), E());
                }
            },
            [p, n, v, a, i, O, E],
        ),
        S = (0, r.jsx)(A, {
            containerRef: w,
            channelId: t,
            buttonImage: n.image,
            onEmojiSelect: s,
            onEmojiRemove: u,
            localCreationAnswerId: n.localCreationAnswerId,
            answerIndex: a,
            shouldShowEmojiPicker: R,
            toggleEmojiPicker: E,
        });
    return (0, r.jsx)("div", {
        ref: w,
        children: (0, r.jsx)(c.ksK, {
            error: j,
            leading: {
                type: "emoji",
                button: S,
            },
            trailing: f
                ? {
                      "aria-label": y.intl.formatToPlainString(y.t["22fjEc"], { answerNumber: a + 1 }),
                      icon: c.ucK,
                      onClick: () => d(a),
                      buttonRef: P,
                  }
                : void 0,
            "aria-label": y.intl.formatToPlainString(y.t["3+V8G9"], { answerNumber: a + 1 }),
            placeholder: y.intl.string(y.t.NNHVlv),
            value: n.text,
            onChange: (e) =>
                o({
                    text: e,
                    index: a,
                    localCreationAnswerId: n.localCreationAnswerId,
                }),
            onKeyDown: x,
            maxLength: g.dv,
            inputRef: C,
        }),
    });
}
