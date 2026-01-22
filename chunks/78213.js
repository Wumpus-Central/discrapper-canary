n.d(t, {
    A: () => p,
});
var l = n(627968),
    i = n(64700),
    a = n(311907),
    r = n(397927),
    s = n(565645),
    u = n(414079),
    o = n(713517),
    c = n(375499),
    d = n(937773),
    f = n(808728),
    m = n(730906),
    g = n(307731),
    h = n(985018),
    v = n(22009);

function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}

function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function p(e) {
    let {
            className: t,
            guildId: n,
            error: p,
            emojiId: j,
            emojiName: y,
            isRequiredField: w = !0,
            shouldUpdateBothEmojiFields: N = !1,
            setEmojiId: O,
            setEmojiName: A,
        } = e,
        C = (0, m.A)({
            emojiId: j,
            emojiName: y,
        }),
        S = (0, a.bG)([f.Ay], () => (null != n ? f.Ay.getDefaultChannel(n) : null)),
        P = i.useRef(null),
        { isHoveringOrFocusing: E } = (0, o.A)(P),
        M = () => {
            A(void 0), O(void 0);
        },
        k = (e) => {
            e.stopPropagation(), M();
        },
        T = i.useMemo(() => {
            let e = null != j && "" !== j,
                t = null != y && "" !== y,
                n = null != C && "" !== C,
                l = t && !Number.isNaN(parseInt(y)) && !n && !e;
            return {
                hasEmojiId: e,
                hasEmojiName: t,
                hasEmojiDisplayName: n,
                isDeletedCustomEmoji: l,
            };
        }, [j, y, C]),
        D = !T.isDeletedCustomEmoji && T.hasEmojiDisplayName;
    return (0, l.jsx)("div", {
        className: t,
        children: (0, l.jsx)(r.D0$, {
            required: w,
            label: h.intl.string(h.t["3BQmiC"]),
            errorMessage: null != p ? p : void 0,
            children: (0, l.jsx)(r.YNO, {
                targetElementRef: P,
                animation: r.YNO.Animation.NONE,
                position: "top",
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, l.jsx)(d.A, {
                        closePopout: t,
                        pickerIntention: g.b_.SOUNDBOARD,
                        onNavigateAway: t,
                        onSelectEmoji: (e) => {
                            let { emoji: n, willClose: l } = e,
                                i = (null == n ? void 0 : n.id) == null;
                            M(),
                                i
                                    ? A(null == n ? void 0 : n.optionallyDiverseSequence)
                                    : (N && A(null == n ? void 0 : n.name), O(null == n ? void 0 : n.id)),
                                l && t();
                        },
                        guildId: n,
                        channel: S,
                    });
                },
                children: (e, t) => {
                    let { isShown: n } = t;
                    return (0, l.jsxs)(
                        r.FON,
                        x(b({}, e), {
                            className: v.LM,
                            ref: P,
                            children: [
                                (0, l.jsx)(c.A, {
                                    active: n,
                                    tabIndex: 0,
                                    renderButtonContents:
                                        !T.isDeletedCustomEmoji && (T.hasEmojiId || T.hasEmojiName)
                                            ? () =>
                                                  (0, l.jsx)(s.A, {
                                                      emojiName: y,
                                                      emojiId: j,
                                                  })
                                            : null,
                                }),
                                (0, l.jsx)(r.Text, {
                                    variant: "text-md/normal",
                                    lineClamp: 1,
                                    color: D ? "text-default" : "text-muted",
                                    children: D ? ":".concat(C, ":") : h.intl.string(h.t.QTK0TJ),
                                }),
                                D &&
                                    E &&
                                    (0, l.jsx)(
                                        u.A,
                                        x(b({}, e), {
                                            onClick: k,
                                        }),
                                    ),
                            ],
                        }),
                    );
                },
            }),
        }),
    });
}
