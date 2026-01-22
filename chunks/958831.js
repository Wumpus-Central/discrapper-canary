n.d(t, {
    A: () => N,
}),
    n(321073),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(311907),
    o = n(397927),
    l = n(97260),
    c = n(337692),
    u = n(235986),
    d = n(586068),
    f = n(734057),
    p = n(808728),
    _ = n(71393),
    h = n(967198),
    m = n(926140),
    g = n(985018),
    E = n(777563);

function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}

function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function v() {}
let S = [m.rD.VOICE_CHANNEL];

function I(e) {
    e.setOptions({
        voiceChannelGuildFilter: null,
    }),
        e.setLimit(1 / 0);
}

function T() {
    return (0, r.jsx)("div", {
        className: E.i1,
        children: (0, r.jsx)(o.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            className: E.GN,
            children: g.intl.string(g.t.zHjCd1),
        }),
    });
}

function C(e) {
    let t = "" !== e,
        n = (0, s.yK)([p.Ay, f.A, h.A], () => {
            let e = h.A.getGuildId();
            if (t || null == e) return [];
            let n = [];
            for (let t of p.Ay.getVocalChannelIds(e)) {
                let e = f.A.getChannel(t);
                null != e && n.push(e);
            }
            return n;
        }, [t]);
    return t ? null : n;
}

function N(e) {
    var t, n;
    let { keybind: a } = e,
        s = i.useRef(a);
    i.useEffect(() => {
        s.current = a;
    });
    let [c, d] = i.useState(null != (t = null == (n = a.params) ? void 0 : n.channelId) ? t : void 0),
        f = i.useCallback(() => {
            (0, o.mMO)(
                async () => (e) =>
                    (0, r.jsx)(
                        w,
                        A(y({}, e), {
                            onSelect: (e) => {
                                d(e),
                                    l.A.setKeybind(
                                        A(y({}, s.current), {
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
        className: E.a8,
        children: (0, r.jsx)(o.D0$, {
            label: g.intl.string(g.t.q4JpM8),
            children: (0, r.jsxs)(u.A, {
                align: u.A.Align.STRETCH,
                children: [
                    (0, r.jsx)("div", {
                        className: E.$X,
                        children: (0, r.jsx)(P, {
                            channelId: c,
                        }),
                    }),
                    (0, r.jsx)(u.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, r.jsx)(o.Button, {
                            variant: "primary",
                            text: g.intl.string(g.t.Dm8O4e),
                            onClick: f,
                        }),
                    }),
                ],
            }),
        }),
    });
}

function R(e) {
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
}

function w(e) {
    let { transitionState: t, onClose: n, onSelect: s } = e,
        l = i.useId(),
        u = i.useRef(null),
        {
            query: p,
            updateQuery: h,
            queryResults: b,
        } = (0, c.A)({
            visible: !0,
            autocompleterResultTypes: S,
            autocompleterBeforeCreateSearchContext: I,
        }),
        y = C(p),
        { focusedIndex: O, setFocusedIndex: A } = R(p);
    i.useEffect(() => {
        let { current: e } = u;
        null == e ||
            e.isItemVisible(0, O, !0) ||
            e.scrollToIndex({
                section: 0,
                row: O,
            });
    }, [O]);
    let v = null != y ? y.length : b.length;

    function N(e) {
        let { row: t } = e,
            i = (() => {
                if (null != y) return y[t];
                let e = b[t];
                if ((null == e ? void 0 : e.type) === m.rD.VOICE_CHANNEL) return e.record;
            })();
        if (null == i) return null;
        let a = null != i.parent_id ? f.A.getChannel(i.parent_id) : void 0,
            o = _.A.getGuild(i.guild_id);
        return (0, r.jsx)(
            d.c3,
            {
                id: i.id,
                channel: i,
                category: a,
                focused: O === t,
                onMouseEnter: () => A(t),
                onClick: () => {
                    s(i.id), n();
                },
                onFocus: () => A(t),
                children:
                    null != o
                        ? (0, r.jsx)("div", {
                              className: E.J5,
                              children: o.name,
                          })
                        : null,
            },
            i.id,
        );
    }

    function w(e) {
        let t = e.key.toLowerCase();
        if ("arrowdown" === t || "arrowup" === t || "enter" === t || "escape" === t)
            switch ((e.preventDefault(), t)) {
                case "escape":
                    n();
                    break;
                case "enter": {
                    let e = (() => {
                        if (null != y) return y[O];
                        let e = b[O];
                        if ((null == e ? void 0 : e.type) === m.rD.VOICE_CHANNEL) return e.record;
                    })();
                    null == e ? s(void 0) : s(e.id), n();
                    break;
                }
                case "arrowup":
                    0 === O ? A(v - 1) : A(O - 1);
                    break;
                case "arrowdown":
                    O >= v - 1 ? A(0) : A(O + 1);
            }
    }
    let P = (() => {
            if (null != y) {
                var e;
                return null == (e = y[O]) ? void 0 : e.id;
            }
            let t = b[O];
            if ((null == t ? void 0 : t.type) === m.rD.VOICE_CHANNEL) return t.record.id;
        })(),
        D =
            v > 0 || "" === p
                ? {
                      innerId: l,
                      innerRole: "listbox",
                      innerAriaLabel: g.intl.string(g.t["+N3fW7"]),
                      ref: u,
                      sections: [v],
                      renderRow: N,
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : {
                      sections: [1],
                      renderRow: () => (0, r.jsx)(T, {}),
                      sectionHeight: 0,
                      rowHeight: 52,
                  };
    return (0, r.jsx)(a.Modal, {
        transitionState: t,
        onClose: n,
        title: g.intl.string(g.t.Dm8O4e),
        subtitle: g.intl.string(g.t.q4JpM8),
        actions: void 0,
        input: (0, r.jsx)(o.ksK, {
            value: p,
            onChange: h,
            onKeyDown: w,
            placeholder: g.intl.string(g.t.tG0r7g),
            role: "combobox",
            "aria-controls": l,
            "aria-expanded": v > 0,
            "aria-activedescendant": v > 0 && null != P ? P : void 0,
            "aria-autocomplete": "list",
            spellCheck: !1,
            autoFocus: !0,
        }),
        listProps: D,
    });
}

function P(e) {
    let { channelId: t } = e,
        {
            channel: n,
            category: i,
            guild: a,
        } = (0, s.cf)([f.A, _.A], () => {
            let e = null != t ? f.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? f.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? _.A.getGuild(e.guild_id) : void 0,
                  }
                : {
                      channel: void 0,
                      category: void 0,
                      guild: void 0,
                  };
        });
    return null == n
        ? (0, r.jsx)(o.Text, {
              variant: "text-md/medium",
              color: "text-muted",
              className: E.GN,
              children: g.intl.string(g.t["/fYIK7"]),
          })
        : (0, r.jsx)(d.c3, {
              channel: n,
              id: n.id,
              category: i,
              onClick: v,
              onFocus: v,
              onMouseEnter: v,
              focused: !1,
              children:
                  null != a
                      ? (0, r.jsx)("div", {
                            className: E.J5,
                            children: a.name,
                        })
                      : null,
          });
}
