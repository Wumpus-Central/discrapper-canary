n.d(t, { A: () => f }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(158954),
    a = n(311907),
    r = n(397927),
    o = n(97260),
    d = n(337692),
    c = n(235986),
    u = n(586068),
    _ = n(734057),
    g = n(808728),
    m = n(71393),
    A = n(967198),
    h = n(926140),
    p = n(985018),
    x = n(777563);
function E() {}
let T = [h.rD.VOICE_CHANNEL];
function S(e) {
    e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0);
}
function C() {
    return (0, i.jsx)("div", {
        className: x.i1,
        children: (0, i.jsx)(r.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            className: x.GN,
            children: p.intl.string(p.t.zHjCd1),
        }),
    });
}
function f(e) {
    let { keybind: t } = e,
        n = s.useRef(t);
    s.useEffect(() => {
        n.current = t;
    });
    let [l, a] = s.useState(t.params?.channelId ?? void 0),
        d = s.useCallback(() => {
            (0, r.mMO)(
                async () => (e) =>
                    (0, i.jsx)(I, {
                        ...e,
                        onSelect: (e) => {
                            a(e), o.A.setKeybind({ ...n.current, params: { channelId: e } });
                        },
                    }),
            );
        }, []);
    return (0, i.jsx)("div", {
        className: x.a8,
        children: (0, i.jsx)(r.D0$, {
            label: p.intl.string(p.t.q4JpM8),
            children: (0, i.jsxs)(c.A, {
                align: c.A.Align.STRETCH,
                children: [
                    (0, i.jsx)("div", { className: x.$X, children: (0, i.jsx)(b, { channelId: l }) }),
                    (0, i.jsx)(c.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, i.jsx)(r.Button, {
                            variant: "primary",
                            text: p.intl.string(p.t.Dm8O4e),
                            onClick: d,
                        }),
                    }),
                ],
            }),
        }),
    });
}
function I(e) {
    let t,
        n,
        { transitionState: o, onClose: c, onSelect: E } = e,
        f = s.useId(),
        I = s.useRef(null),
        {
            query: b,
            updateQuery: N,
            queryResults: v,
        } = (0, d.A)({ visible: !0, autocompleterResultTypes: T, autocompleterBeforeCreateSearchContext: S }),
        j =
            ((t = "" !== b),
            (n = (0, a.yK)([g.Ay, _.A, A.A], () => {
                let e = A.A.getGuildId();
                if (t || null == e) return [];
                let n = [];
                for (let t of g.Ay.getVocalChannelIds(e)) {
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
        })(b);
    s.useEffect(() => {
        let { current: e } = I;
        null == e || e.isItemVisible(0, O, !0) || e.scrollToIndex({ section: 0, row: O });
    }, [O]);
    let y = null != j ? j.length : v.length,
        P = (() => {
            if (null != j) return j[O]?.id;
            let e = v[O];
            if (e?.type === h.rD.VOICE_CHANNEL) return e.record.id;
        })(),
        D =
            y > 0 || "" === b
                ? {
                      innerId: f,
                      innerRole: "listbox",
                      innerAriaLabel: p.intl.string(p.t["+N3fW7"]),
                      ref: I,
                      sections: [y],
                      renderRow: function (e) {
                          let { row: t } = e,
                              n = (() => {
                                  if (null != j) return j[t];
                                  let e = v[t];
                                  if (e?.type === h.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == n) return null;
                          let s = null != n.parent_id ? _.A.getChannel(n.parent_id) : void 0,
                              l = m.A.getGuild(n.guild_id);
                          return (0, i.jsx)(
                              u.c3,
                              {
                                  id: n.id,
                                  channel: n,
                                  category: s,
                                  focused: O === t,
                                  onMouseEnter: () => R(t),
                                  onClick: () => {
                                      E(n.id), c();
                                  },
                                  onFocus: () => R(t),
                                  children: null != l ? (0, i.jsx)("div", { className: x.J5, children: l.name }) : null,
                              },
                              n.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, i.jsx)(C, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, i.jsx)(l.Modal, {
        transitionState: o,
        onClose: c,
        title: p.intl.string(p.t.Dm8O4e),
        subtitle: p.intl.string(p.t.q4JpM8),
        actions: void 0,
        input: (0, i.jsx)(r.ksK, {
            value: b,
            onChange: N,
            onKeyDown: function (e) {
                let t = e.key.toLowerCase();
                if ("arrowdown" === t || "arrowup" === t || "enter" === t || "escape" === t)
                    switch ((e.preventDefault(), t)) {
                        case "escape":
                            c();
                            break;
                        case "enter": {
                            let e = (() => {
                                if (null != j) return j[O];
                                let e = v[O];
                                if (e?.type === h.rD.VOICE_CHANNEL) return e.record;
                            })();
                            null == e ? E(void 0) : E(e.id), c();
                            break;
                        }
                        case "arrowup":
                            0 === O ? R(y - 1) : R(O - 1);
                            break;
                        case "arrowdown":
                            O >= y - 1 ? R(0) : R(O + 1);
                    }
            },
            placeholder: p.intl.string(p.t.tG0r7g),
            role: "combobox",
            "aria-controls": f,
            "aria-expanded": y > 0,
            "aria-activedescendant": y > 0 && null != P ? P : void 0,
            "aria-autocomplete": "list",
            spellCheck: !1,
            autoFocus: !0,
        }),
        listProps: D,
    });
}
function b(e) {
    let { channelId: t } = e,
        {
            channel: n,
            category: s,
            guild: l,
        } = (0, a.cf)([_.A, m.A], () => {
            let e = null != t ? _.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? _.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? m.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == n
        ? (0, i.jsx)(r.Text, {
              variant: "text-md/medium",
              color: "text-muted",
              className: x.GN,
              children: p.intl.string(p.t["/fYIK7"]),
          })
        : (0, i.jsx)(u.c3, {
              channel: n,
              id: n.id,
              category: s,
              onClick: E,
              onFocus: E,
              onMouseEnter: E,
              focused: !1,
              children: null != l ? (0, i.jsx)("div", { className: x.J5, children: l.name }) : null,
          });
}
