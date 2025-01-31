n.d(t, { Z: () => u });
var i = n(192379),
    r = n(998698),
    a = n(436660),
    s = n(515270),
    o = n(417662),
    l = n(981631);
function u(e) {
    let { editor: t, channel: n, disableEnterToSubmit: u, onKeyDown: c, onKeyUp: d, onTab: f, onEnter: _, allowNewLines: p, submit: h, hideAutocomplete: m, moveSelection: g } = e;
    return {
        handleKeyDown: i.useCallback(
            (e) => {
                var i;
                switch (e.which) {
                    case l.yXg.ARROW_UP:
                        if (g(-1)) {
                            e.preventDefault();
                            return;
                        }
                        break;
                    case l.yXg.ARROW_DOWN:
                        if (g(1)) {
                            e.preventDefault();
                            return;
                        }
                        break;
                    case l.yXg.P:
                        if ((0, o.E)(e, { ctrl: !0 }) && g(-1)) {
                            e.preventDefault();
                            return;
                        }
                        break;
                    case l.yXg.N:
                        if ((0, o.E)(e, { ctrl: !0 }) && g(1)) {
                            e.preventDefault();
                            return;
                        }
                        break;
                    case l.yXg.ESCAPE:
                        null == m || m();
                        break;
                    case l.yXg.TAB:
                        if ((0, o.E)(e, {}) && (null == f ? void 0 : f())) {
                            e.preventDefault(), e.stopPropagation();
                            return;
                        }
                        if (null != r.Z.getActiveCommand(n.id)) {
                            e.preventDefault(), e.stopPropagation(), e.shiftKey ? a.Q.selectPreviousCommandOption(t) : a.Q.selectNextCommandOption(t);
                            return;
                        }
                        break;
                    case l.yXg.ENTER:
                        if ((0, o.E)(e, {}) && (null == _ ? void 0 : _(e))) {
                            e.preventDefault(), e.stopPropagation();
                            return;
                        }
                }
                if ((null === (i = t.onKeyDown) || void 0 === i ? void 0 : i.call(t, e)) === !0) {
                    e.preventDefault(), e.stopPropagation();
                    return;
                }
                e.which !== l.yXg.ENTER || ((e.altKey || e.shiftKey || (u && !e.ctrlKey) || (0, s.L6)(t)) && p) || (e.preventDefault(), e.stopPropagation(), h()), null == c || c(e);
            },
            [p, n.id, u, t, m, g, _, c, f, h]
        ),
        handleKeyUp: i.useCallback(
            (e) => {
                null == d || d(e);
            },
            [d]
        )
    };
}
