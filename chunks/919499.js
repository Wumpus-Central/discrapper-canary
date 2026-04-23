"use strict";
n.d(t, { A: () => c });
var r = n(64700),
    i = n(861382),
    s = n(35277),
    a = n(407315),
    o = n(113001),
    l = n(652215),
    u = n(650583);
function c(e) {
    let {
        editor: t,
        channel: n,
        disableEnterToSubmit: c,
        onKeyDown: d,
        onKeyUp: _,
        onTab: f,
        onEnter: p,
        allowNewLines: h,
        submit: E,
        hideAutocomplete: m,
        moveSelection: g,
    } = e;
    return {
        handleKeyDown: r.useCallback(
            (e) => {
                switch (e.which) {
                    case l.Ks6.ARROW_UP:
                        if (g(-1)) return void e.preventDefault();
                        break;
                    case l.Ks6.ARROW_DOWN:
                        if (g(1)) return void e.preventDefault();
                        break;
                    case l.Ks6.P:
                        if ((0, o.j)(e, { ctrl: !0 }) && g(-1)) return void e.preventDefault();
                        break;
                    case l.Ks6.N:
                        if ((0, o.j)(e, { ctrl: !0 }) && g(1)) return void e.preventDefault();
                        break;
                    case l.Ks6.ESCAPE:
                        m?.();
                        break;
                    case l.Ks6.TAB:
                        if ((0, o.j)(e, {}) && f?.()) {
                            e.preventDefault(), e.stopPropagation();
                            return;
                        }
                        if (null != i.A.getActiveCommand(n.id)) {
                            e.preventDefault(),
                                e.stopPropagation(),
                                e.shiftKey ? s.b.selectPreviousCommandOption(t) : s.b.selectNextCommandOption(t);
                            return;
                        }
                        break;
                    case l.Ks6.ENTER:
                        if ((0, o.j)(e, {}) && p?.(e)) {
                            e.preventDefault(), e.stopPropagation();
                            return;
                        }
                }
                if (t.onKeyDown?.(e) === !0) {
                    e.preventDefault(), e.stopPropagation();
                    return;
                }
                e.key !== u.dh.ENTER ||
                    ((e.altKey || e.shiftKey || (c && !e.ctrlKey) || (0, a.Q9)(t)) && h) ||
                    (e.preventDefault(), e.stopPropagation(), E()),
                    d?.(e);
            },
            [h, n.id, c, t, m, g, p, d, f, E],
        ),
        handleKeyUp: r.useCallback(
            (e) => {
                _?.(e);
            },
            [_],
        ),
    };
}
