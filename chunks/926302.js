t.a(e, async function (e, r) {
    try {
        t.d(n, {
            Kq: () => u,
            ZP: () => d
        });
        var l = t(255367),
            i = t(31675),
            c = t(73800),
            o = e([i]);
        i = (o.then ? (await o)() : o)[0];
        let f = (0, c.createContext)(null);
        function u() {
            return (0, c.useContext)(f);
        }
        let _ = new Set(['bold', 'italic', 'underline', 'strikethrough', 'spoiler', 'emoji', 'timestamp', 'mention', 'link', 'code', 'code_block', 'heading', 'list', 'quote', 'small']);
        function a({ node: e, renderers: n, ...t }) {
            let r = n[e.type];
            if (
                (!(function (e, n) {
                    if (null == e) throw Error(`Attempted to render "${n}" but no renderer was provided`);
                })(r, e.type),
                Array.isArray(e.value))
            )
                return (0, l.jsx)(r, {
                    node: e,
                    ...t,
                    children: (0, l.jsx)(s, {
                        nodes: e.value,
                        renderers: n
                    })
                });
            switch (e.type) {
                case 'mention':
                case 'timestamp':
                case 'emoji':
                case 'code_block':
                    return (0, l.jsx)(r, {
                        node: e,
                        ...e.value,
                        ...t
                    });
                case 'link': {
                    let i = e.value,
                        c = null;
                    if ('normal' === i.type) {
                        let {
                            value: { text: e, url: t }
                        } = i;
                        c = e
                            ? (0, l.jsx)(s, {
                                  nodes: e,
                                  renderers: n
                              })
                            : t;
                    }
                    return (0, l.jsx)(r, {
                        node: e,
                        ...e.value,
                        ...t,
                        children: c
                    });
                }
                case 'text':
                case 'code':
                    return (0, l.jsx)(r, {
                        node: e,
                        ...t,
                        children: e.value
                    });
                case 'heading':
                    return (0, l.jsx)(r, {
                        node: e,
                        level: e.value.level,
                        ...t,
                        children: (0, l.jsx)(s, {
                            nodes: e.value.content,
                            renderers: n
                        })
                    });
                case 'list': {
                    let i = n.listItem ?? 'li';
                    return (0, l.jsx)(r, {
                        node: e,
                        ...e.value,
                        ...t,
                        children: e.value.items.map((t, r) =>
                            (0, l.jsx)(
                                i,
                                {
                                    node: t,
                                    siblings: e.value.items,
                                    index: r,
                                    children: (0, l.jsx)(s, {
                                        nodes: t.content,
                                        renderers: n
                                    })
                                },
                                r
                            )
                        )
                    });
                }
                case 'empty':
                    return (0, l.jsx)(r, { ...t });
                case 'small':
                    return (0, l.jsx)(r, {
                        node: e,
                        ...t,
                        children: (0, l.jsx)(s, {
                            nodes: e.value.content,
                            renderers: n
                        })
                    });
                default:
                    throw TypeError(`Unknown node type "${e.type}"`);
            }
        }
        function s({ nodes: e, renderers: n }) {
            return (0, l.jsx)(l.Fragment, {
                children: e.map((t, r) =>
                    (0, l.jsx)(
                        a,
                        {
                            node: t,
                            renderers: n,
                            siblings: e,
                            index: r
                        },
                        r
                    )
                )
            });
        }
        function d({ content: e, renderers: n }) {
            let t = (0, c.useMemo)(() => {
                    let e = Object.keys(n).filter((e) => _.has(e));
                    return e.length > 0 ? e : null;
                }, [n]),
                r = (0, c.useMemo)(() => (0, i.Q)(e, t), [e, t]);
            return (0, l.jsx)(f.Provider, {
                value: r,
                children: (0, l.jsx)(s, {
                    nodes: r,
                    renderers: n
                })
            });
        }
        r();
    } catch (e) {
        r(e);
    }
});
