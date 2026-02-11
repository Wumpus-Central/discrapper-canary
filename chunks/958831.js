n.d(t, { A: () => I }), n(321073);
var i = n(627968),
    s = n(64700),
    a = n(158954),
    l = n(311907),
    r = n(397927),
    o = n(97260),
    c = n(337692),
    d = n(235986),
    u = n(586068),
    _ = n(734057),
    m = n(808728),
    A = n(71393),
    g = n(967198),
    h = n(926140),
    x = n(985018),
    p = n(42177);
function E() {}
let C = [h.rD.VOICE_CHANNEL];
function T(e) {
    e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0);
}
function S() {
    return (0, i.jsx)("div", {
        className: p.i1,
        children: (0, i.jsx)(r.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            className: p.GN,
            children: x.intl.string(x.t.zHjCd1),
        }),
    });
}
function I(e) {
    let { keybind: t } = e,
        n = s.useRef(t);
    s.useEffect(() => {
        n.current = t;
    });
    let [a, l] = s.useState(t.params?.channelId ?? void 0),
        c = s.useCallback(() => {
            (0, r.mMO)(
                async () => (e) =>
                    (0, i.jsx)(f, {
                        ...e,
                        onSelect: (e) => {
                            l(e), o.A.setKeybind({ ...n.current, params: { channelId: e } });
                        },
                    }),
            );
        }, []);
    return (0, i.jsx)("div", {
        className: p.a8,
        children: (0, i.jsx)(r.D0$, {
            label: x.intl.string(x.t.q4JpM8),
            children: (0, i.jsxs)(d.A, {
                align: d.A.Align.STRETCH,
                children: [
                    (0, i.jsx)("div", { className: p.$X, children: (0, i.jsx)(N, { channelId: a }) }),
                    (0, i.jsx)(d.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, i.jsx)(r.Button, {
                            variant: "primary",
                            text: x.intl.string(x.t.Dm8O4e),
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
        { transitionState: o, onClose: d, onSelect: E } = e,
        I = s.useId(),
        f = s.useRef(null),
        {
            query: N,
            updateQuery: b,
            queryResults: j,
        } = (0, c.A)({ visible: !0, autocompleterResultTypes: C, autocompleterBeforeCreateSearchContext: T }),
        v =
            ((t = "" !== N),
            (n = (0, l.yK)([m.Ay, _.A, g.A], () => {
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
        { focusedIndex: O, setFocusedIndex: R } = (function (e) {
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
    let y = null != v ? v.length : j.length,
        P = (() => {
            if (null != v) return v[O]?.id;
            let e = j[O];
            if (e?.type === h.rD.VOICE_CHANNEL) return e.record.id;
        })(),
        L =
            y > 0 || "" === N
                ? {
                      innerId: I,
                      innerRole: "listbox",
                      innerAriaLabel: x.intl.string(x.t["+N3fW7"]),
                      ref: f,
                      sections: [y],
                      renderRow: function (e) {
                          let { row: t } = e,
                              n = (() => {
                                  if (null != v) return v[t];
                                  let e = j[t];
                                  if (e?.type === h.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == n) return null;
                          let s = null != n.parent_id ? _.A.getChannel(n.parent_id) : void 0,
                              a = A.A.getGuild(n.guild_id);
                          return (0, i.jsx)(
                              u.c3,
                              {
                                  id: n.id,
                                  channel: n,
                                  category: s,
                                  focused: O === t,
                                  onMouseEnter: () => R(t),
                                  onClick: () => {
                                      E(n.id), d();
                                  },
                                  onFocus: () => R(t),
                                  children: null != a ? (0, i.jsx)("div", { className: p.J5, children: a.name }) : null,
                              },
                              n.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, i.jsx)(S, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, i.jsx)(a.Modal, {
        transitionState: o,
        onClose: d,
        title: x.intl.string(x.t.Dm8O4e),
        subtitle: x.intl.string(x.t.q4JpM8),
        actions: void 0,
        input: (0, i.jsx)(r.ksK, {
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
                                let e = j[O];
                                if (e?.type === h.rD.VOICE_CHANNEL) return e.record;
                            })();
                            null == e ? E(void 0) : E(e.id), d();
                            break;
                        }
                        case "arrowup":
                            0 === O ? R(y - 1) : R(O - 1);
                            break;
                        case "arrowdown":
                            O >= y - 1 ? R(0) : R(O + 1);
                    }
            },
            placeholder: x.intl.string(x.t.tG0r7g),
            role: "combobox",
            "aria-controls": I,
            "aria-expanded": y > 0,
            "aria-activedescendant": y > 0 && null != P ? P : void 0,
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
            guild: a,
        } = (0, l.cf)([_.A, A.A], () => {
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
        ? (0, i.jsx)(r.Text, {
              variant: "text-md/medium",
              color: "text-muted",
              className: p.GN,
              children: x.intl.string(x.t["/fYIK7"]),
          })
        : (0, i.jsx)(u.c3, {
              channel: n,
              id: n.id,
              category: s,
              onClick: E,
              onFocus: E,
              onMouseEnter: E,
              focused: !1,
              children: null != a ? (0, i.jsx)("div", { className: p.J5, children: a.name }) : null,
          });
}
