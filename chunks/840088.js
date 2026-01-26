n.d(t, {
    A: () => h,
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    o = n(311907),
    c = n(397927),
    s = n(822123),
    d = n(649963),
    u = n(815807),
    g = n(406704),
    p = n(253932),
    f = n(576705),
    y = n(486020),
    b = n(203982),
    A = n(690521),
    m = n(652215),
    O = n(307731),
    v = n(985018),
    j = n(451590);

function h(e, t) {
    let { reducedMotion: n } = i.useContext(c.CZY),
        l = (0, g.Id)(t),
        a = (0, o.bG)([f.A], () => (t.isPrivate() || f.A.can(m.xBc.ADD_REACTIONS, t)) && l, [t, l]),
        y = (0, s.D6)(t.getGuildId());
    if (!p.jW.getSetting() || !a) return null;
    let j = y
        .filter(
            (e) =>
                !A.Ay.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: O.b_.REACTION,
                }),
        )
        .slice(0, 12)
        .map((i, l) => {
            var a, o, s;
            return (0, r.jsx)(
                c.Drp,
                {
                    color: "default",
                    id: null != (a = null != (o = i.id) ? o : i.optionallyDiverseSequence) ? a : i.name,
                    label: ":".concat(i.name, ":"),
                    icon: (e) => {
                        var t, l;
                        return (0, r.jsx)(
                            E,
                            ((t = (function (e) {
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
                            })({}, e)),
                            (l = l =
                                {
                                    reducedMotionEnabled: n.enabled,
                                    emoji: i,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            t),
                        );
                    },
                    leadingAccessory: {
                        type: "emoji",
                        emojiId: i.id,
                        src: null == i.id ? A.Ay.getURL(null != (s = i.optionallyDiverseSequence) ? s : "") : void 0,
                        animated: i.animated,
                    },
                    action: () => {
                        (0, d.BB)(t.id, e.id, (0, u.jq)(i), d.qN.MESSAGE_CONTEXT_MENU);
                    },
                    dontCloseOnActionIfHoldingShiftKey: !0,
                },
                l,
            );
        });
    return (0, r.jsx)(c.Drp, {
        id: "add-reaction",
        label: v.intl.string(v.t.lfIHs4),
        leadingAccessory: {
            type: "icon",
            icon: c.nm2,
        },
        action: () => {
            b._.dispatchKeyed(m.zOV.TOGGLE_REACTION_POPOUT, e.id, {
                emojiPicker: !0,
            });
        },
        color: "default",
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                j,
                (0, r.jsx)(c.bXX, {}),
                (0, r.jsx)(c.Drp, {
                    color: "default",
                    id: "other-reactions",
                    label: v.intl.string(v.t["OBCR+p"]),
                    icon: c.nm2,
                    leadingAccessory: {
                        type: "icon",
                        icon: c.nm2,
                    },
                    action: () => {
                        b._.dispatchKeyed(m.zOV.TOGGLE_REACTION_POPOUT, e.id, {
                            emojiPicker: !0,
                        });
                    },
                }),
            ],
        }),
    });
}

function E(e) {
    var t;
    let { emoji: n, reducedMotionEnabled: i, className: l = "", isFocused: o = !1 } = e;
    return (0, r.jsx)("img", {
        className: a()(l, j.Z),
        src:
            null != n.id
                ? y.Ay.getEmojiURL({
                      id: n.id,
                      animated: n.animated && (!i || o),
                      size: 18,
                  })
                : A.Ay.getURL(null != (t = n.optionallyDiverseSequence) ? t : ""),
        alt: "",
    });
}
