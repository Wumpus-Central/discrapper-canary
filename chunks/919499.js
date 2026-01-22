n.d(t, {
    A: () => c,
});
var r = n(64700),
    i = n(861382),
    a = n(35277),
    s = n(407315),
    o = n(113001),
    l = n(652215);

function c(e) {
    let {
        editor: t,
        channel: n,
        disableEnterToSubmit: c,
        onKeyDown: u,
        onKeyUp: d,
        onTab: f,
        onEnter: p,
        allowNewLines: _,
        submit: h,
        hideAutocomplete: m,
        moveSelection: g,
    } = e;
    return {
        handleKeyDown: r.useCallback(
            (e) => {
                var r;
                switch (e.which) {
                    case l.Ks6.ARROW_UP:
                        if (g(-1)) return void e.preventDefault();
                        break;
                    case l.Ks6.ARROW_DOWN:
                        if (g(1)) return void e.preventDefault();
                        break;
                    case l.Ks6.P:
                        if (
                            (0, o.j)(e, {
                                ctrl: !0,
                            }) &&
                            g(-1)
                        )
                            return void e.preventDefault();
                        break;
                    case l.Ks6.N:
                        if (
                            (0, o.j)(e, {
                                ctrl: !0,
                            }) &&
                            g(1)
                        )
                            return void e.preventDefault();
                        break;
                    case l.Ks6.ESCAPE:
                        null == m || m();
                        break;
                    case l.Ks6.TAB:
                        if ((0, o.j)(e, {}) && (null == f ? void 0 : f())) {
                            e.preventDefault(), e.stopPropagation();
                            return;
                        }
                        if (null != i.A.getActiveCommand(n.id)) {
                            e.preventDefault(),
                                e.stopPropagation(),
                                e.shiftKey ? a.b.selectPreviousCommandOption(t) : a.b.selectNextCommandOption(t);
                            return;
                        }
                        break;
                    case l.Ks6.ENTER:
                        if ((0, o.j)(e, {}) && (null == p ? void 0 : p(e))) {
                            e.preventDefault(), e.stopPropagation();
                            return;
                        }
                }
                if ((null == (r = t.onKeyDown) ? void 0 : r.call(t, e)) === !0) {
                    e.preventDefault(), e.stopPropagation();
                    return;
                }
                e.which !== l.Ks6.ENTER ||
                    ((e.altKey || e.shiftKey || (c && !e.ctrlKey) || (0, s.Q9)(t)) && _) ||
                    (e.preventDefault(), e.stopPropagation(), h()),
                    null == u || u(e);
            },
            [_, n.id, c, t, m, g, p, u, f, h],
        ),
        handleKeyUp: r.useCallback(
            (e) => {
                null == d || d(e);
            },
            [d],
        ),
    };
}
