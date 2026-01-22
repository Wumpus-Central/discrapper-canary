t.d(n, { default: () => y }), t(896048);
var l = t(627968),
    i = t(64700),
    o = t(158954),
    a = t(311907),
    r = t(397927),
    u = t(565645),
    d = t(964486),
    c = t(375499),
    s = t(937773),
    m = t(508675),
    b = t(808728),
    p = t(919577),
    v = t(307731),
    g = t(650583),
    f = t(985018),
    j = t(465161);
function y(e) {
    var n;
    let { transitionState: t, onClose: y, channelId: h, guildId: O, tag: k } = e,
        C = i.useRef(null),
        x = null != k,
        [N, P] = i.useState(null != (n = null == k ? void 0 : k.name) ? n : ""),
        [w, S] = i.useState(
            null != k
                ? {
                      id: k.emojiId,
                      name: k.emojiName,
                  }
                : null,
        ),
        [A, E] = i.useState(null == k ? void 0 : k.moderated),
        I = (0, a.bG)([m.Ay], () => ((null == w ? void 0 : w.id) != null ? m.Ay.getUsableCustomEmojiById(w.id) : null)),
        D =
            (null == k ? void 0 : k.name) !== N ||
            (null == k ? void 0 : k.emojiId) !== (null == w ? void 0 : w.id) ||
            (null == k ? void 0 : k.emojiName) !== (null == w ? void 0 : w.name) ||
            A !== (null == k ? void 0 : k.moderated),
        T = () => {
            if (null != N && D) {
                if (x) {
                    p.A.updateForumTag(
                        {
                            id: k.id,
                            name: N,
                            emojiId: null == w ? void 0 : w.id,
                            emojiName: null == w ? void 0 : w.name,
                            moderated: A,
                        },
                        h,
                    ),
                        y();
                    return;
                }
                p.A.createForumTag(
                    {
                        name: N,
                        emojiId: null == w ? void 0 : w.id,
                        emojiName: null == w ? void 0 : w.name,
                        moderated: A,
                    },
                    h,
                ),
                    y();
            }
        },
        R = i.useCallback((e) => P(e), []),
        B = i.useRef(null);
    return (
        (0, d.Ay)(() => {
            null != B.current && B.current.focus();
        }),
        (0, l.jsxs)(o.Modal, {
            title: x ? f.intl.string(f.t.zeVg5d) : f.intl.string(f.t["/jubeD"]),
            subtitle: f.intl.string(f.t["3v8kZH"]),
            transitionState: t,
            onClose: y,
            actions: [
                {
                    variant: "secondary",
                    text: f.intl.string(f.t["ETE/oC"]),
                    onClick: () => {
                        y();
                    },
                },
                {
                    variant: "primary",
                    text: f.intl.string(f.t["R3BPH+"]),
                    onClick: T,
                    disabled: 0 === N.length || !D,
                    autoFocus: !0,
                },
            ],
            actionBarInput: x
                ? (0, l.jsx)(r.Button, {
                      variant: "critical-secondary",
                      text: f.intl.string(f.t.huYSMr),
                      onClick: () => {
                          x && (p.A.deleteForumTag(h, k.id), y());
                      },
                  })
                : void 0,
            children: [
                (0, l.jsx)("div", {
                    className: j.Kf,
                    children: (0, l.jsx)(r.ksK, {
                        inputRef: B,
                        maxLength: 20,
                        value: N,
                        placeholder: f.intl.string(f.t["5vpeb4"]),
                        onChange: R,
                        autoFocus: !0,
                        leading: {
                            type: "emoji",
                            button: (0, l.jsx)("div", {
                                className: j.S0,
                                children: (0, l.jsx)(r.YNO, {
                                    targetElementRef: C,
                                    renderPopout: (e) => {
                                        let { closePopout: n } = e,
                                            t = b.Ay.getDefaultChannel(O);
                                        return (0, l.jsx)(s.A, {
                                            guildId: O,
                                            closePopout: n,
                                            onSelectEmoji: (e) => {
                                                let { emoji: t, willClose: l } = e;
                                                null != t &&
                                                    S(
                                                        null != t.id
                                                            ? {
                                                                  id: t.id,
                                                                  name: t.name,
                                                              }
                                                            : {
                                                                  id: void 0,
                                                                  name: t.optionallyDiverseSequence,
                                                              },
                                                    ),
                                                    l && n();
                                            },
                                            pickerIntention: v.b_.COMMUNITY_CONTENT,
                                            onNavigateAway: y,
                                            channel: t,
                                        });
                                    },
                                    position: "left",
                                    animation: r.YNO.Animation.NONE,
                                    align: "bottom",
                                    children: (e, n) => {
                                        var t, i;
                                        let { isShown: o } = n;
                                        return (0, l.jsx)(
                                            c.A,
                                            ((t = (function (e) {
                                                for (var n = 1; n < arguments.length; n++) {
                                                    var t = null != arguments[n] ? arguments[n] : {},
                                                        l = Object.keys(t);
                                                    "function" == typeof Object.getOwnPropertySymbols &&
                                                        (l = l.concat(
                                                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                            }),
                                                        )),
                                                        l.forEach(function (n) {
                                                            var l;
                                                            (l = t[n]),
                                                                n in e
                                                                    ? Object.defineProperty(e, n, {
                                                                          value: l,
                                                                          enumerable: !0,
                                                                          configurable: !0,
                                                                          writable: !0,
                                                                      })
                                                                    : (e[n] = l);
                                                        });
                                                }
                                                return e;
                                            })({}, e)),
                                            (i = i =
                                                {
                                                    ref: C,
                                                    onClick: (n) => {
                                                        var t;
                                                        null == (t = e.onClick) || t.call(e, n);
                                                    },
                                                    active: o,
                                                    className: j.Z8,
                                                    tabIndex: 0,
                                                    renderButtonContents:
                                                        null != w && (null != w.id || null != w.name)
                                                            ? () =>
                                                                  (0, l.jsx)(u.A, {
                                                                      className: j.Zg,
                                                                      emojiId: w.id,
                                                                      emojiName: w.name,
                                                                      animated: !!(null == I ? void 0 : I.animated),
                                                                  })
                                                            : null,
                                                }),
                                            Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                                                : (function (e, n) {
                                                      var t = Object.keys(e);
                                                      if (Object.getOwnPropertySymbols) {
                                                          var l = Object.getOwnPropertySymbols(e);
                                                          t.push.apply(t, l);
                                                      }
                                                      return t;
                                                  })(Object(i)).forEach(function (e) {
                                                      Object.defineProperty(
                                                          t,
                                                          e,
                                                          Object.getOwnPropertyDescriptor(i, e),
                                                      );
                                                  }),
                                            t),
                                        );
                                    },
                                }),
                            }),
                        },
                        onKeyDown: (e) => {
                            e.key === g.dh.ENTER && N.length > 0 && (N.length > 0 && T(), e.preventDefault());
                        },
                        trailing:
                            N.length > 0 || null != w
                                ? {
                                      icon: r.aXh,
                                      onClick: () => {
                                          P(""), S(null);
                                      },
                                      "aria-label": f.intl.string(f.t.o8lsHe),
                                  }
                                : void 0,
                    }),
                }),
                (0, l.jsx)(r.hKd, { size: 16 }),
                (0, l.jsx)(r.Checkbox, {
                    checked: null != A && A,
                    onChange: (e) => E(e || ((null == k ? void 0 : k.moderated) == null && void 0)),
                    label: f.intl.string(f.t["rMH+rt"]),
                    labelType: "secondary",
                }),
            ],
        })
    );
}
