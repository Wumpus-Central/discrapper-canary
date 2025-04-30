t.a(e, async function (e, r) {
    try {
        t.d(n, { ZP: () => a });
        var l = t(818140),
            i = t(192379),
            u = e([l]);
        function c(e, n) {
            if (null == e) throw Error(`Attempted to render "${n}" but no renderer was provided`);
        }
        l = (u.then ? (await u)() : u)[0];
        let d = new Set(['bold', 'italic', 'underline', 'strikethrough', 'spoiler', 'emoji', 'timestamp', 'mention', 'link', 'code', 'code_block', 'heading', 'list', 'quote', 'small']);
        function o({ node: e, renderers: n }) {
            let t = n[e.type];
            if ((c(t, e.type), Array.isArray(e.value)))
                return i.createElement(
                    t,
                    null,
                    i.createElement(s, {
                        nodes: e.value,
                        renderers: n
                    })
                );
            switch (e.type) {
                case 'mention':
                case 'timestamp':
                case 'emoji':
                case 'code_block':
                    return i.createElement(t, e.value);
                case 'link':
                    let r = e.value,
                        l = null;
                    if ('normal' === r.type) {
                        let {
                            value: { text: e, url: t }
                        } = r;
                        l = e
                            ? i.createElement(s, {
                                  nodes: e,
                                  renderers: n
                              })
                            : t;
                    }
                    return i.createElement(t, e.value, l);
                case 'quote':
                    let u = n.paragraph;
                    return (
                        c(u, 'paragraph'),
                        i.createElement(
                            t,
                            null,
                            e.value.lines.map((e) =>
                                i.createElement(
                                    u,
                                    {
                                        key: e,
                                        value: e,
                                        renderers: n
                                    },
                                    i.createElement(s, {
                                        nodes: e,
                                        renderers: n
                                    })
                                )
                            )
                        )
                    );
                case 'text':
                case 'code':
                    return i.createElement(t, null, e.value);
                case 'heading':
                    return i.createElement(
                        t,
                        { level: e.value.level },
                        i.createElement(s, {
                            nodes: e.value.content,
                            renderers: n
                        })
                    );
                case 'list':
                    let o = n.listItem ?? 'li';
                    return i.createElement(
                        t,
                        e.value,
                        e.value.items.map((e, t) =>
                            i.createElement(
                                o,
                                { key: t },
                                i.createElement(s, {
                                    nodes: e.content,
                                    renderers: n
                                })
                            )
                        )
                    );
                case 'empty':
                    return i.createElement(t, null);
                case 'small':
                    return i.createElement(
                        t,
                        null,
                        i.createElement(s, {
                            nodes: e.value.content,
                            renderers: n
                        })
                    );
                default:
                    throw TypeError(`Unknown node type "${e.type}"`);
            }
        }
        let s = (0, i.memo)(function ({ nodes: e, renderers: n }) {
            return i.createElement(
                i.Fragment,
                null,
                e.map((e, t) =>
                    i.createElement(o, {
                        key: t,
                        node: e,
                        renderers: n
                    })
                )
            );
        });
        function a({ content: e, renderers: n }) {
            let t = (0, i.useMemo)(() => {
                    let e = Object.keys(n).filter((e) => d.has(e));
                    return e.length > 0 ? e : null;
                }, [n]),
                r = (0, i.useMemo)(() => (0, l.Q)(e, t), [e, t]);
            return i.createElement(s, {
                nodes: r,
                renderers: n
            });
        }
        r();
    } catch (e) {
        r(e);
    }
});
