n.d(t, {
    A: () => T,
}),
    n(321073),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(158954),
    s = n(311907),
    a = n(397927),
    o = n(97260),
    c = n(337692),
    d = n(235986),
    u = n(586068),
    _ = n(734057),
    p = n(808728),
    m = n(71393),
    g = n(967198),
    A = n(926140),
    f = n(985018),
    h = n(777563);

function b(e) {
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
}

function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function x() {}
let O = [A.rD.VOICE_CHANNEL];

function C(e) {
    e.setOptions({
        voiceChannelGuildFilter: null,
    }),
        e.setLimit(1 / 0);
}

function I() {
    return (0, r.jsx)("div", {
        className: h.i1,
        children: (0, r.jsx)(a.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            className: h.GN,
            children: f.intl.string(f.t.zHjCd1),
        }),
    });
}

function T(e) {
    var t, n;
    let { keybind: l } = e,
        s = i.useRef(l);
    i.useEffect(() => {
        s.current = l;
    });
    let [c, u] = i.useState(null != (t = null == (n = l.params) ? void 0 : n.channelId) ? t : void 0),
        _ = i.useCallback(() => {
            (0, a.mMO)(
                async () => (e) =>
                    (0, r.jsx)(
                        S,
                        E(b({}, e), {
                            onSelect: (e) => {
                                u(e),
                                    o.A.setKeybind(
                                        E(b({}, s.current), {
                                            params: {
                                                channelId: e,
                                            },
                                        }),
                                    );
                            },
                        }),
                    ),
            );
        }, []);
    return (0, r.jsx)("div", {
        className: h.a8,
        children: (0, r.jsx)(a.D0$, {
            label: f.intl.string(f.t.q4JpM8),
            children: (0, r.jsxs)(d.A, {
                align: d.A.Align.STRETCH,
                children: [
                    (0, r.jsx)("div", {
                        className: h.$X,
                        children: (0, r.jsx)(j, {
                            channelId: c,
                        }),
                    }),
                    (0, r.jsx)(d.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, r.jsx)(a.Button, {
                            variant: "primary",
                            text: f.intl.string(f.t.Dm8O4e),
                            onClick: _,
                        }),
                    }),
                ],
            }),
        }),
    });
}

function S(e) {
    let t,
        n,
        { transitionState: o, onClose: d, onSelect: b } = e,
        E = i.useId(),
        x = i.useRef(null),
        {
            query: T,
            updateQuery: S,
            queryResults: j,
        } = (0, c.A)({
            visible: !0,
            autocompleterResultTypes: O,
            autocompleterBeforeCreateSearchContext: C,
        }),
        v =
            ((t = "" !== T),
            (n = (0, s.yK)([p.Ay, _.A, g.A], () => {
                let e = g.A.getGuildId();
                if (t || null == e) return [];
                let n = [];
                for (let t of p.Ay.getVocalChannelIds(e)) {
                    let e = _.A.getChannel(t);
                    null != e && n.push(e);
                }
                return n;
            }, [t])),
            t ? null : n),
        { focusedIndex: N, setFocusedIndex: y } = (function (e) {
            let [t, n] = i.useState(0),
                r = i.useRef(e);
            return (
                e !== r.current && 0 !== t && n(0),
                i.useEffect(() => {
                    r.current = e;
                }),
                {
                    focusedIndex: t,
                    setFocusedIndex: n,
                }
            );
        })(T);
    i.useEffect(() => {
        let { current: e } = x;
        null == e ||
            e.isItemVisible(0, N, !0) ||
            e.scrollToIndex({
                section: 0,
                row: N,
            });
    }, [N]);
    let P = null != v ? v.length : j.length,
        R = (() => {
            if (null != v) {
                var e;
                return null == (e = v[N]) ? void 0 : e.id;
            }
            let t = j[N];
            if ((null == t ? void 0 : t.type) === A.rD.VOICE_CHANNEL) return t.record.id;
        })(),
        D =
            P > 0 || "" === T
                ? {
                      innerId: E,
                      innerRole: "listbox",
                      innerAriaLabel: f.intl.string(f.t["+N3fW7"]),
                      ref: x,
                      sections: [P],
                      renderRow: function (e) {
                          let { row: t } = e,
                              n = (() => {
                                  if (null != v) return v[t];
                                  let e = j[t];
                                  if ((null == e ? void 0 : e.type) === A.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == n) return null;
                          let i = null != n.parent_id ? _.A.getChannel(n.parent_id) : void 0,
                              l = m.A.getGuild(n.guild_id);
                          return (0, r.jsx)(
                              u.c3,
                              {
                                  id: n.id,
                                  channel: n,
                                  category: i,
                                  focused: N === t,
                                  onMouseEnter: () => y(t),
                                  onClick: () => {
                                      b(n.id), d();
                                  },
                                  onFocus: () => y(t),
                                  children:
                                      null != l
                                          ? (0, r.jsx)("div", {
                                                className: h.J5,
                                                children: l.name,
                                            })
                                          : null,
                              },
                              n.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : {
                      sections: [1],
                      renderRow: () => (0, r.jsx)(I, {}),
                      sectionHeight: 0,
                      rowHeight: 52,
                  };
    return (0, r.jsx)(l.Modal, {
        transitionState: o,
        onClose: d,
        title: f.intl.string(f.t.Dm8O4e),
        subtitle: f.intl.string(f.t.q4JpM8),
        actions: void 0,
        input: (0, r.jsx)(a.ksK, {
            value: T,
            onChange: S,
            onKeyDown: function (e) {
                let t = e.key.toLowerCase();
                if ("arrowdown" === t || "arrowup" === t || "enter" === t || "escape" === t)
                    switch ((e.preventDefault(), t)) {
                        case "escape":
                            d();
                            break;
                        case "enter": {
                            let e = (() => {
                                if (null != v) return v[N];
                                let e = j[N];
                                if ((null == e ? void 0 : e.type) === A.rD.VOICE_CHANNEL) return e.record;
                            })();
                            null == e ? b(void 0) : b(e.id), d();
                            break;
                        }
                        case "arrowup":
                            0 === N ? y(P - 1) : y(N - 1);
                            break;
                        case "arrowdown":
                            N >= P - 1 ? y(0) : y(N + 1);
                    }
            },
            placeholder: f.intl.string(f.t.tG0r7g),
            role: "combobox",
            "aria-controls": E,
            "aria-expanded": P > 0,
            "aria-activedescendant": P > 0 && null != R ? R : void 0,
            "aria-autocomplete": "list",
            spellCheck: !1,
            autoFocus: !0,
        }),
        listProps: D,
    });
}

function j(e) {
    let { channelId: t } = e,
        {
            channel: n,
            category: i,
            guild: l,
        } = (0, s.cf)([_.A, m.A], () => {
            let e = null != t ? _.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? _.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? m.A.getGuild(e.guild_id) : void 0,
                  }
                : {
                      channel: void 0,
                      category: void 0,
                      guild: void 0,
                  };
        });
    return null == n
        ? (0, r.jsx)(a.Text, {
              variant: "text-md/medium",
              color: "text-muted",
              className: h.GN,
              children: f.intl.string(f.t["/fYIK7"]),
          })
        : (0, r.jsx)(u.c3, {
              channel: n,
              id: n.id,
              category: i,
              onClick: x,
              onFocus: x,
              onMouseEnter: x,
              focused: !1,
              children:
                  null != l
                      ? (0, r.jsx)("div", {
                            className: h.J5,
                            children: l.name,
                        })
                      : null,
          });
}
