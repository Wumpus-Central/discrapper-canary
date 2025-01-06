n.d(t, {
    Q: function () {
        return c;
    },
    V: function () {
        return o;
    }
}),
    n(47120),
    n(653041),
    n(177593);
var i = n(192379),
    r = n(348327),
    l = n.n(r),
    a = n(995295),
    s = n(596390);
function o(e) {
    let [t, n] = i.useState([e]),
        [r, a] = i.useState(0),
        s = i.useMemo(() => t[r], [t, r]),
        o = i.useCallback(
            (e) => {
                let i = e(s);
                if (l()(s, i)) return;
                let o = t.slice(0, r + 1);
                o.push(i), n(o), a(o.length - 1);
            },
            [r, s, t]
        ),
        c = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                    n = Math.max(0, r - e);
                return a(n), t[n];
            },
            [r, t]
        );
    return {
        state: s,
        setState: o,
        goBack: c,
        goForward: i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                    n = Math.min(t.length - 1, r + e);
                return a(n), t[n];
            },
            [r, t]
        )
    };
}
function c(e, t) {
    let { scrollerRef: n, mainInputRef: r, mainContainerRef: l } = t,
        {
            state: { value: o, tags: c, selections: d },
            setState: u,
            goBack: m,
            goForward: h
        } = e;
    i.useLayoutEffect(() => {
        let e = (e) => (t) => {
                ('Meta' === t.key || 'Control' === t.key) &&
                    u((t) => ({
                        ...t,
                        isSelecting: e
                    }));
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
    }, [u]);
    let g = i.useCallback(
            (e) => {
                var t, i;
                let r = (null !== (i = e.clipboardData.getData('text')) && void 0 !== i ? i : '')
                    .split(s.uz)
                    .map((e) => e.trim())
                    .filter((e) => e.length > 0);
                if (!(r.length <= 1))
                    (0, a.flushSync)(() => {
                        u((e) => {
                            let { tags: t, value: n } = e;
                            return {
                                value: n,
                                tags: [...t, ...r],
                                selections: [],
                                isSelecting: !1
                            };
                        });
                    }),
                        e.preventDefault(),
                        e.stopPropagation(),
                        null === (t = n.current) || void 0 === t || t.scrollToBottom();
            },
            [u, n]
        ),
        x = i.useCallback(
            (e) => {
                u((t) => {
                    let { tags: n, value: i } = t;
                    return {
                        value: i,
                        tags: [...n.filter((t, n) => n !== e)],
                        selections: [],
                        isSelecting: !1
                    };
                });
            },
            [u]
        ),
        p = i.useCallback(
            (e) => (t) => {
                u((n) => {
                    let { tags: i, value: r } = n,
                        l = [...i];
                    return (
                        (l[e] = t),
                        {
                            value: r,
                            tags: l,
                            selections: [],
                            isSelecting: !1
                        }
                    );
                });
            },
            [u]
        ),
        f = i.useCallback(
            (e) => {
                u((t) => {
                    let { tags: n, value: i, selections: r, isSelecting: l } = t;
                    return {
                        value: i,
                        tags: n,
                        selections: [...r, n[e]],
                        isSelecting: l
                    };
                });
            },
            [u]
        ),
        C = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                u((n) => {
                    let { tags: i, value: r, selections: l, isSelecting: a } = n;
                    return {
                        value: r,
                        tags: i,
                        selections: t ? [] : l.filter((t) => t !== i[e]),
                        isSelecting: a
                    };
                });
            },
            [u]
        ),
        v = i.useCallback(
            (e) => {
                var t;
                u((e) => {
                    let { tags: t, value: n } = e;
                    return {
                        value: n,
                        tags: t,
                        selections: [],
                        isSelecting: !1
                    };
                }),
                    null != e && (e.preventDefault(), e.stopPropagation()),
                    null === (t = r.current) || void 0 === t || t.focus();
            },
            [r, u]
        ),
        _ = i.useCallback(
            (e) => {
                u((t) => {
                    let { tags: n } = t;
                    return {
                        value: e.target.value,
                        tags: n,
                        selections: [],
                        isSelecting: !1
                    };
                });
            },
            [u]
        ),
        I = i.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                if (!(o.trim().length <= 0))
                    (0, a.flushSync)(() => {
                        u((e) => {
                            let { tags: t } = e;
                            return {
                                value: '',
                                tags: [...t, o],
                                selections: [],
                                isSelecting: !1
                            };
                        });
                    }),
                        i && null != n.current && n.current.scrollToBottom(),
                        t && (e.preventDefault(), e.stopPropagation());
            },
            [n, u, o]
        ),
        N = i.useCallback(
            (e) => {
                let t = o.trim().length <= 0;
                if (d.length > 0) {
                    var n;
                    (0, a.flushSync)(() => {
                        u((e) => {
                            let { tags: t, value: n, selections: i } = e;
                            return {
                                value: n,
                                tags: t.filter((e) => !i.includes(e)),
                                selections: [],
                                isSelecting: !1
                            };
                        });
                    }),
                        null === (n = r.current) || void 0 === n || n.focus(),
                        e.preventDefault(),
                        e.stopPropagation();
                } else
                    t &&
                        ((0, a.flushSync)(() => {
                            u((e) => {
                                let { tags: t } = e,
                                    n = [...t],
                                    i = n.pop();
                                return {
                                    value: null != i ? i : '',
                                    tags: [...n],
                                    selections: [],
                                    isSelecting: !1
                                };
                            });
                        }),
                        e.preventDefault(),
                        e.stopPropagation());
            },
            [r, d.length, u, o]
        ),
        T = i.useCallback(
            (e) => {
                var t, n, i, l;
                let a = e.metaKey || e.ctrlKey;
                'z' === e.key && a ? (m().selections.length > 0 ? null === (t = r.current) || void 0 === t || t.blur() : null === (n = r.current) || void 0 === n || n.focus(), e.preventDefault(), e.stopPropagation()) : 'y' === e.key && a && (h().selections.length > 0 ? null === (i = r.current) || void 0 === i || i.blur() : null === (l = r.current) || void 0 === l || l.focus(), e.preventDefault(), e.stopPropagation());
            },
            [m, h, r]
        ),
        j = i.useCallback(
            (e) => {
                var t;
                let n = o.trim().length > 0,
                    { selectionStart: i = 0, selectionEnd: s = 0 } = null !== (t = r.current) && void 0 !== t ? t : {};
                if (0 !== c.length && (!n || !!(i !== s)))
                    (0, a.flushSync)(() => {
                        u((e) => {
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
                            null === (e = r.current) || void 0 === e || e.blur(),
                                setTimeout(() => {
                                    var e;
                                    null === (e = l.current) || void 0 === e || e.focus();
                                }, 16);
                        }),
                        e.preventDefault(),
                        e.stopPropagation();
            },
            [l, r, u, c.length, o]
        ),
        b = i.useCallback(
            (e) => {
                e.relatedTarget !== e.currentTarget && I(e, !1, !1);
            },
            [I]
        ),
        S = i.useCallback(
            (e) => {
                let t = e.metaKey || e.ctrlKey;
                if ('Meta' !== e.key) s.ye.has(e.key) ? I(e) : 'Backspace' === e.key ? N(e) : 'Escape' === e.key ? v(e) : 'a' === e.key && t ? j(e) : s.Bd.has(e.key) && t && T(e);
            },
            [I, N, v, j, T]
        );
    return {
        handlePasteEvent: g,
        handleInputChange: _,
        handleKeyDown: S,
        handleContainerKeyUp: i.useCallback(
            (e) => {
                if (document.activeElement !== l.current) return;
                let t = e.metaKey || e.ctrlKey;
                'Backspace' === e.key ? N(e) : 'a' === e.key && t ? j(e) : 'Escape' === e.key ? v(e) : s.Bd.has(e.key) && t ? T(e) : 'Meta' !== e.key && v(e);
            },
            [T, N, j, v, l]
        ),
        handleRemoveTag: x,
        handleTagChangeEvent: p,
        handleSelectTag: f,
        handleUnselectTag: C,
        handleResetTagSelections: v,
        handleInputBlurEvent: b
    };
}
