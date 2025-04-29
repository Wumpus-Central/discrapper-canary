n.d(t, { Z: () => c });
var r = n(192379),
    i = n(998698),
    o = n(436660),
    a = n(515270),
    s = n(417662),
    l = n(981631);
function c(e) {
    let { editor: t, channel: n, disableEnterToSubmit: c, onKeyDown: u, onKeyUp: d, onTab: f, onEnter: _, allowNewLines: p, submit: h, hideAutocomplete: m, moveSelection: g } = e;
    return {
        handleKeyDown: r.useCallback(
            (e) => {
                var r;
                switch (e.which) {
                    case l.yXg.ARROW_UP:
                        if (g(-1)) return void e.preventDefault();
                        break;
                    case l.yXg.ARROW_DOWN:
                        if (g(1)) return void e.preventDefault();
                        break;
                    case l.yXg.P:
                        if ((0, s.E)(e, { ctrl: !0 }) && g(-1)) return void e.preventDefault();
                        break;
                    case l.yXg.N:
                        if ((0, s.E)(e, { ctrl: !0 }) && g(1)) return void e.preventDefault();
                        break;
                    case l.yXg.ESCAPE:
                        null == m || m();
                        break;
                    case l.yXg.TAB:
                        if ((0, s.E)(e, {}) && (null == f ? void 0 : f())) {
                            e.preventDefault(), e.stopPropagation();
                            return;
                        }
                        if (null != i.Z.getActiveCommand(n.id)) {
                            e.preventDefault(), e.stopPropagation(), e.shiftKey ? o.Q.selectPreviousCommandOption(t) : o.Q.selectNextCommandOption(t);
                            return;
                        }
                        break;
                    case l.yXg.ENTER:
                        if ((0, s.E)(e, {}) && (null == _ ? void 0 : _(e))) {
                            e.preventDefault(), e.stopPropagation();
                            return;
                        }
                }
                if ((null == (r = t.onKeyDown) ? void 0 : r.call(t, e)) === !0) {
                    e.preventDefault(), e.stopPropagation();
                    return;
                }
                e.which !== l.yXg.ENTER || ((e.altKey || e.shiftKey || (c && !e.ctrlKey) || (0, a.L6)(t)) && p) || (e.preventDefault(), e.stopPropagation(), h()), null == u || u(e);
            },
            [p, n.id, c, t, m, g, _, u, f, h]
        ),
        handleKeyUp: r.useCallback(
            (e) => {
                null == d || d(e);
            },
            [d]
        )
    };
}
