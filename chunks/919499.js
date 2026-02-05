"use strict";
n.d(t, { A: () => u });
var r = n(64700),
    i = n(861382),
    a = n(35277),
    s = n(407315),
    o = n(113001),
    l = n(652215);
function u(e) {
    let {
        editor: t,
        channel: n,
        disableEnterToSubmit: u,
        onKeyDown: c,
        onKeyUp: d,
        onTab: _,
        onEnter: f,
        allowNewLines: p,
        submit: h,
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
                        if ((0, o.j)(e, {}) && _?.()) {
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
                        if ((0, o.j)(e, {}) && f?.(e)) {
                            e.preventDefault(), e.stopPropagation();
                            return;
                        }
                }
                if (t.onKeyDown?.(e) === !0) {
                    e.preventDefault(), e.stopPropagation();
                    return;
                }
                e.which !== l.Ks6.ENTER ||
                    ((e.altKey || e.shiftKey || (u && !e.ctrlKey) || (0, s.Q9)(t)) && p) ||
                    (e.preventDefault(), e.stopPropagation(), h()),
                    c?.(e);
            },
            [p, n.id, u, t, m, g, f, c, _, h],
        ),
        handleKeyUp: r.useCallback(
            (e) => {
                d?.(e);
            },
            [d],
        ),
    };
}
