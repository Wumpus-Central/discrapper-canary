n.d(t, { A: () => S }), n(321073);
var i = n(627968),
    s = n(64700),
    r = n(158954),
    a = n(311907),
    l = n(397927),
    o = n(97260),
    c = n(337692),
    d = n(235986),
    u = n(586068),
    _ = n(734057),
    m = n(808728),
    A = n(71393),
    g = n(967198),
    E = n(926140),
    h = n(985018),
    p = n(777563);
function C() {}
let x = [E.rD.VOICE_CHANNEL];
function T(e) {
    e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0);
}
function I() {
    return (0, i.jsx)("div", {
        className: p.i1,
        children: (0, i.jsx)(l.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            className: p.GN,
            children: h.intl.string(h.t.zHjCd1),
        }),
    });
}
function S(e) {
    let { keybind: t } = e,
        n = s.useRef(t);
    s.useEffect(() => {
        n.current = t;
    });
    let [r, a] = s.useState(t.params?.channelId ?? void 0),
        c = s.useCallback(() => {
            (0, l.mMO)(
                async () => (e) =>
                    (0, i.jsx)(f, {
                        ...e,
                        onSelect: (e) => {
                            a(e), o.A.setKeybind({ ...n.current, params: { channelId: e } });
                        },
                    }),
            );
        }, []);
    return (0, i.jsx)("div", {
        className: p.a8,
        children: (0, i.jsx)(l.D0$, {
            label: h.intl.string(h.t.q4JpM8),
            children: (0, i.jsxs)(d.A, {
                align: d.A.Align.STRETCH,
                children: [
                    (0, i.jsx)("div", { className: p.$X, children: (0, i.jsx)(N, { channelId: r }) }),
                    (0, i.jsx)(d.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, i.jsx)(l.Button, {
                            variant: "primary",
                            text: h.intl.string(h.t.Dm8O4e),
                            onClick: c,
                        }),
                    }),
                ],
            }),
        }),
    });
}
function f(e) {
    let t,
        n,
        { transitionState: o, onClose: d, onSelect: C } = e,
        S = s.useId(),
        f = s.useRef(null),
        {
            query: N,
            updateQuery: b,
            queryResults: R,
        } = (0, c.A)({ visible: !0, autocompleterResultTypes: x, autocompleterBeforeCreateSearchContext: T }),
        v =
            ((t = "" !== N),
            (n = (0, a.yK)([m.Ay, _.A, g.A], () => {
                let e = g.A.getGuildId();
                if (t || null == e) return [];
                let n = [];
                for (let t of m.Ay.getVocalChannelIds(e)) {
                    let e = _.A.getChannel(t);
                    null != e && n.push(e);
                }
                return n;
            }, [t])),
            t ? null : n),
        { focusedIndex: O, setFocusedIndex: j } = (function (e) {
            let [t, n] = s.useState(0),
                i = s.useRef(e);
            return (
                e !== i.current && 0 !== t && n(0),
                s.useEffect(() => {
                    i.current = e;
                }),
                { focusedIndex: t, setFocusedIndex: n }
            );
        })(N);
    s.useEffect(() => {
        let { current: e } = f;
        null == e || e.isItemVisible(0, O, !0) || e.scrollToIndex({ section: 0, row: O });
    }, [O]);
    let P = null != v ? v.length : R.length,
        y = (() => {
            if (null != v) return v[O]?.id;
            let e = R[O];
            if (e?.type === E.rD.VOICE_CHANNEL) return e.record.id;
        })(),
        L =
            P > 0 || "" === N
                ? {
                      innerId: S,
                      innerRole: "listbox",
                      innerAriaLabel: h.intl.string(h.t["+N3fW7"]),
                      ref: f,
                      sections: [P],
                      renderRow: function (e) {
                          let { row: t } = e,
                              n = (() => {
                                  if (null != v) return v[t];
                                  let e = R[t];
                                  if (e?.type === E.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == n) return null;
                          let s = null != n.parent_id ? _.A.getChannel(n.parent_id) : void 0,
                              r = A.A.getGuild(n.guild_id);
                          return (0, i.jsx)(
                              u.c3,
                              {
                                  id: n.id,
                                  channel: n,
                                  category: s,
                                  focused: O === t,
                                  onMouseEnter: () => j(t),
                                  onClick: () => {
                                      C(n.id), d();
                                  },
                                  onFocus: () => j(t),
                                  children: null != r ? (0, i.jsx)("div", { className: p.J5, children: r.name }) : null,
                              },
                              n.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, i.jsx)(I, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, i.jsx)(r.Modal, {
        transitionState: o,
        onClose: d,
        title: h.intl.string(h.t.Dm8O4e),
        subtitle: h.intl.string(h.t.q4JpM8),
        actions: void 0,
        input: (0, i.jsx)(l.ksK, {
            value: N,
            onChange: b,
            onKeyDown: function (e) {
                let t = e.key.toLowerCase();
                if ("arrowdown" === t || "arrowup" === t || "enter" === t || "escape" === t)
                    switch ((e.preventDefault(), t)) {
                        case "escape":
                            d();
                            break;
                        case "enter": {
                            let e = (() => {
                                if (null != v) return v[O];
                                let e = R[O];
                                if (e?.type === E.rD.VOICE_CHANNEL) return e.record;
                            })();
                            null == e ? C(void 0) : C(e.id), d();
                            break;
                        }
                        case "arrowup":
                            0 === O ? j(P - 1) : j(O - 1);
                            break;
                        case "arrowdown":
                            O >= P - 1 ? j(0) : j(O + 1);
                    }
            },
            placeholder: h.intl.string(h.t.tG0r7g),
            role: "combobox",
            "aria-controls": S,
            "aria-expanded": P > 0,
            "aria-activedescendant": P > 0 && null != y ? y : void 0,
            "aria-autocomplete": "list",
            spellCheck: !1,
            autoFocus: !0,
        }),
        listProps: L,
    });
}
function N(e) {
    let { channelId: t } = e,
        {
            channel: n,
            category: s,
            guild: r,
        } = (0, a.cf)([_.A, A.A], () => {
            let e = null != t ? _.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? _.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? A.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == n
        ? (0, i.jsx)(l.Text, {
              variant: "text-md/medium",
              color: "text-muted",
              className: p.GN,
              children: h.intl.string(h.t["/fYIK7"]),
          })
        : (0, i.jsx)(u.c3, {
              channel: n,
              id: n.id,
              category: s,
              onClick: C,
              onFocus: C,
              onMouseEnter: C,
              focused: !1,
              children: null != r ? (0, i.jsx)("div", { className: p.J5, children: r.name }) : null,
          });
}
