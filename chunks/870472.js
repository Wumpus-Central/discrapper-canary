n.d(t, {
    Q: () => c,
    V: () => o
}),
    n(388685),
    n(539854),
    n(35282),
    n(781311),
    n(358797);
var r = n(192379),
    i = n(348327),
    l = n.n(i),
    s = n(995295),
    a = n(596390);
function o(e) {
    let [t, n] = r.useState([e]),
        [i, s] = r.useState(0),
        a = r.useMemo(() => t[i], [t, i]),
        o = r.useCallback(
            (e) => {
                let r = e(a);
                if (l()(a, r)) return;
                let o = t.slice(0, i + 1);
                o.push(r), n(o), s(o.length - 1);
            },
            [i, a, t]
        );
    return {
        state: a,
        setState: o,
        goBack: r.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                    n = Math.max(0, i - e);
                return s(n), t[n];
            },
            [i, t]
        ),
        goForward: r.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                    n = Math.min(t.length - 1, i + e);
                return s(n), t[n];
            },
            [i, t]
        )
    };
}
function c(e, t) {
    let { scrollerRef: n, mainInputRef: i, mainContainerRef: l } = t,
        {
            state: { value: o, tags: c, selections: u },
            setState: d,
            goBack: m,
            goForward: g
        } = e;
    r.useLayoutEffect(() => {
        let e = (e) => (t) => {
                ('Meta' === t.key || 'Control' === t.key) &&
                    d((t) => {
                        var n, r;
                        return (
                            (n = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({}, t)),
                            (r = r = { isSelecting: e }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(r)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                  }),
                            n
                        );
                    });
            },
            t = e(!0),
            n = e(!1);
        return (
            document.addEventListener('keydown', t),
            document.addEventListener('keyup', n),
            () => {
                document.removeEventListener('keydown', t), document.removeEventListener('keyup', n);
            }
        );
    }, [d]);
    let p = r.useCallback(
            (e) => {
                var t, r;
                let i = (null != (r = e.clipboardData.getData('text')) ? r : '')
                    .split(a.uz)
                    .map((e) => e.trim())
                    .filter((e) => e.length > 0);
                i.length <= 1 ||
                    ((0, s.flushSync)(() => {
                        d((e) => {
                            let { tags: t, value: n } = e;
                            return {
                                value: n,
                                tags: [...t, ...i],
                                selections: [],
                                isSelecting: !1
                            };
                        });
                    }),
                    e.preventDefault(),
                    e.stopPropagation(),
                    null == (t = n.current) || t.scrollToBottom());
            },
            [d, n]
        ),
        h = r.useCallback(
            (e) => {
                d((t) => {
                    let { tags: n, value: r } = t;
                    return {
                        value: r,
                        tags: [...n.filter((t, n) => n !== e)],
                        selections: [],
                        isSelecting: !1
                    };
                });
            },
            [d]
        ),
        f = r.useCallback(
            (e) => (t) => {
                d((n) => {
                    let { tags: r, value: i } = n,
                        l = [...r];
                    return (
                        (l[e] = t),
                        {
                            value: i,
                            tags: l,
                            selections: [],
                            isSelecting: !1
                        }
                    );
                });
            },
            [d]
        ),
        x = r.useCallback(
            (e) => {
                d((t) => {
                    let { tags: n, value: r, selections: i, isSelecting: l } = t;
                    return {
                        value: r,
                        tags: n,
                        selections: [...i, n[e]],
                        isSelecting: l
                    };
                });
            },
            [d]
        ),
        b = r.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                d((n) => {
                    let { tags: r, value: i, selections: l, isSelecting: s } = n;
                    return {
                        value: i,
                        tags: r,
                        selections: t ? [] : l.filter((t) => t !== r[e]),
                        isSelecting: s
                    };
                });
            },
            [d]
        ),
        j = r.useCallback(
            (e) => {
                var t;
                d((e) => {
                    let { tags: t, value: n } = e;
                    return {
                        value: n,
                        tags: t,
                        selections: [],
                        isSelecting: !1
                    };
                }),
                    null != e && (e.preventDefault(), e.stopPropagation()),
                    null == (t = i.current) || t.focus();
            },
            [i, d]
        ),
        _ = r.useCallback(
            (e) => {
                d((t) => {
                    let { tags: n } = t;
                    return {
                        value: e.target.value,
                        tags: n,
                        selections: [],
                        isSelecting: !1
                    };
                });
            },
            [d]
        ),
        v = r.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                !(o.trim().length <= 0) &&
                    ((0, s.flushSync)(() => {
                        d((e) => {
                            let { tags: t } = e;
                            return {
                                value: '',
                                tags: [...t, o],
                                selections: [],
                                isSelecting: !1
                            };
                        });
                    }),
                    r && null != n.current && n.current.scrollToBottom(),
                    t && (e.preventDefault(), e.stopPropagation()));
            },
            [n, d, o]
        ),
        O = r.useCallback(
            (e) => {
                let t = o.trim().length <= 0;
                if (u.length > 0) {
                    var n;
                    (0, s.flushSync)(() => {
                        d((e) => {
                            let { tags: t, value: n, selections: r } = e;
                            return {
                                value: n,
                                tags: t.filter((e) => !r.includes(e)),
                                selections: [],
                                isSelecting: !1
                            };
                        });
                    }),
                        null == (n = i.current) || n.focus(),
                        e.preventDefault(),
                        e.stopPropagation();
                } else
                    t &&
                        ((0, s.flushSync)(() => {
                            d((e) => {
                                let { tags: t } = e,
                                    n = [...t],
                                    r = n.pop();
                                return {
                                    value: null != r ? r : '',
                                    tags: [...n],
                                    selections: [],
                                    isSelecting: !1
                                };
                            });
                        }),
                        e.preventDefault(),
                        e.stopPropagation());
            },
            [i, u.length, d, o]
        ),
        C = r.useCallback(
            (e) => {
                var t, n, r, l;
                let s = e.metaKey || e.ctrlKey;
                'z' === e.key && s ? (m().selections.length > 0 ? null == (t = i.current) || t.blur() : null == (n = i.current) || n.focus(), e.preventDefault(), e.stopPropagation()) : 'y' === e.key && s && (g().selections.length > 0 ? null == (r = i.current) || r.blur() : null == (l = i.current) || l.focus(), e.preventDefault(), e.stopPropagation());
            },
            [m, g, i]
        ),
        y = r.useCallback(
            (e) => {
                var t;
                let n = o.trim().length > 0,
                    { selectionStart: r = 0, selectionEnd: a = 0 } = null != (t = i.current) ? t : {};
                0 === c.length ||
                    (n && r === a) ||
                    ((0, s.flushSync)(() => {
                        d((e) => {
                            let { tags: t, value: n } = e;
                            return {
                                value: n,
                                tags: t,
                                selections: [...t],
                                isSelecting: !1
                            };
                        });
                    }),
                    setImmediate(() => {
                        var e;
                        null == (e = i.current) || e.blur(),
                            setTimeout(() => {
                                var e;
                                null == (e = l.current) || e.focus();
                            }, 16);
                    }),
                    e.preventDefault(),
                    e.stopPropagation());
            },
            [l, i, d, c.length, o]
        ),
        N = r.useCallback(
            (e) => {
                e.relatedTarget !== e.currentTarget && v(e, !1, !1);
            },
            [v]
        );
    return {
        handlePasteEvent: p,
        handleInputChange: _,
        handleKeyDown: r.useCallback(
            (e) => {
                let t = e.metaKey || e.ctrlKey;
                'Meta' !== e.key && (a.ye.has(e.key) ? v(e) : 'Backspace' === e.key ? O(e) : 'Escape' === e.key ? j(e) : 'a' === e.key && t ? y(e) : a.Bd.has(e.key) && t && C(e));
            },
            [v, O, j, y, C]
        ),
        handleContainerKeyUp: r.useCallback(
            (e) => {
                if (document.activeElement !== l.current) return;
                let t = e.metaKey || e.ctrlKey;
                'Backspace' === e.key ? O(e) : 'a' === e.key && t ? y(e) : 'Escape' === e.key ? j(e) : a.Bd.has(e.key) && t ? C(e) : 'Meta' !== e.key && j(e);
            },
            [C, O, y, j, l]
        ),
        handleRemoveTag: h,
        handleTagChangeEvent: f,
        handleSelectTag: x,
        handleUnselectTag: b,
        handleResetTagSelections: j,
        handleInputBlurEvent: N
    };
}
