"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(573435),
    u = n(696451),
    c = n(486020),
    d = n(392054),
    _ = n(32178),
    f = n(532406);
function p(e) {
    let {
            section: t,
            channel: { guild_id: n },
            isSelected: s,
            width: p,
            height: h,
            className: m,
            selectable: E = !1,
            isSquircle: g,
            onFocus: A,
            onBlur: I,
            onMouseOver: T,
            onMouseLeave: S,
            ...y
        } = e,
        [v, N] = i.useState(!1),
        C = i.useCallback(() => {
            N(!0), A?.();
        }, [A]),
        R = i.useCallback(() => {
            N(!1), I?.();
        }, [I]),
        O = i.useCallback(() => {
            N(!0), T?.();
        }, [T]),
        b = i.useCallback(() => {
            N(!1), S?.();
        }, [S]),
        D = (0, o.bG)([u.Ay], () =>
            t.application?.bot?.id != null ? u.Ay.getMember(n, t.application?.bot?.id) : null,
        ),
        L = i.useMemo(
            () =>
                t.type === d.Hf.APPLICATION
                    ? c.Ay.getApplicationIconURL({
                          id: t.id,
                          icon: t.icon,
                          bot: t.application?.bot,
                          botIconFirst: !0,
                          guildMember: D,
                          size: p,
                      })
                    : f,
            [t, p, D],
        );
    return (0, r.jsx)("div", {
        ...y,
        className: a()(_.iE, m, { [_.rb]: E, [_.wH]: E && s }),
        onFocus: C,
        onBlur: R,
        onMouseOver: O,
        onMouseLeave: b,
        children: (0, r.jsx)(l.Ay, {
            className: _.dK,
            mask: g || (E && (s || v)) ? l.hW.SQUIRCLE : l.hW.AVATAR_DEFAULT,
            width: p,
            height: h,
            children: (0, r.jsx)("img", { alt: "", className: _.Kk, style: { width: p, height: h }, src: L }),
        }),
    });
}
