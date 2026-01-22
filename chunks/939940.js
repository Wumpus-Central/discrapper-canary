n.d(t, { default: () => j }), n(896048);
var i = n(627968),
    l = n(64700),
    a = n(158954),
    r = n(397927),
    o = n(435183),
    s = n(937773),
    c = n(235640),
    d = n(307731),
    u = n(985018),
    m = n(507753);
let j = (e) => {
    var t, n, j, b, f, x, p;
    let { channel: v, onClose: g, transitionState: y } = e,
        [h, O] = l.useState(null != (t = v.defaultReactionEmoji) ? t : null),
        [N, w] = l.useState(!1),
        [E, k] = l.useState(!1),
        P = l.useRef(null),
        C =
            (null != (n = null == (x = v.defaultReactionEmoji) ? void 0 : x.emojiId) ? n : null) !==
            (null != (j = null == h ? void 0 : h.emojiId) ? j : null),
        B =
            (null != (b = null == (p = v.defaultReactionEmoji) ? void 0 : p.emojiName) ? b : null) !==
            (null != (f = null == h ? void 0 : h.emojiName) ? f : null),
        I = C || B,
        S = (e) => {
            O(
                null == e
                    ? null
                    : (null == e ? void 0 : e.id) != null
                      ? { emojiId: e.id }
                      : { emojiName: e.optionallyDiverseSequence },
            );
        },
        _ = async () => {
            if (I) {
                w(!0), k(!1);
                try {
                    await (0, o.RT)(v.id, { defaultReactionEmoji: h }), g();
                } catch (e) {
                    k(!0);
                } finally {
                    w(!1);
                }
            }
        };
    return (0, i.jsxs)(a.Modal, {
        title: u.intl.string(u.t.XlDE3k),
        subtitle: u.intl.string(u.t.lVqhdd),
        transitionState: y,
        onClose: g,
        actions: [
            {
                variant: "secondary",
                text: u.intl.string(u.t["ETE/oC"]),
                onClick: g,
            },
            {
                variant: "primary",
                text: u.intl.string(u.t["R3BPH+"]),
                loading: N,
                disabled: !I,
                onClick: _,
                autoFocus: !0,
            },
        ],
        children: [
            (0, i.jsx)(c.A, { reactionEmoji: h }),
            (0, i.jsxs)(r.ButtonGroup, {
                size: "sm",
                className: m.v,
                children: [
                    (0, i.jsx)(r.YNO, {
                        targetElementRef: P,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, i.jsx)(s.A, {
                                guildId: null == v ? void 0 : v.guild_id,
                                closePopout: t,
                                onSelectEmoji: (e) => {
                                    let { emoji: n, willClose: i } = e;
                                    S(n), i && t();
                                },
                                pickerIntention: d.b_.COMMUNITY_CONTENT,
                                channel: v,
                            });
                        },
                        position: "right",
                        animation: r.YNO.Animation.NONE,
                        align: "center",
                        children: (e) => {
                            var t, n;
                            return (0, i.jsx)(
                                r.Button,
                                ((t = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            i = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (i = i.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            i.forEach(function (t) {
                                                var i;
                                                (i = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: i,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = i);
                                            });
                                    }
                                    return e;
                                })({}, e)),
                                (n = n =
                                    {
                                        buttonRef: P,
                                        text: u.intl.string(u.t["59QgaD"]),
                                        variant: "primary",
                                        onClick: (t) => {
                                            var n;
                                            null == (n = e.onClick) || n.call(e, t);
                                        },
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var i = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, i);
                                          }
                                          return n;
                                      })(Object(n)).forEach(function (e) {
                                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                      }),
                                t),
                            );
                        },
                    }),
                    null != h &&
                        (0, i.jsx)(r.Button, {
                            text: u.intl.string(u.t.N86XcP),
                            variant: "critical-secondary",
                            onClick: () => S(null),
                        }),
                ],
            }),
            E
                ? (0, i.jsx)(r.Text, {
                      variant: "text-sm/normal",
                      color: "text-feedback-critical",
                      children: u.intl.string(u.t.F75nNl),
                  })
                : null,
        ],
    });
};
