"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    o = n(573435),
    c = n(696451),
    u = n(486020),
    d = n(392054),
    h = n(678322),
    m = n(532406);
function p(e) {
    let {
            section: t,
            channel: { guild_id: n },
            isSelected: s,
            width: p,
            height: f,
            className: g,
            selectable: _ = !1,
            isSquircle: x,
            onFocus: A,
            onBlur: C,
            onMouseOver: E,
            onMouseLeave: I,
            ...v
        } = e,
        [y, S] = l.useState(!1),
        b = l.useCallback(() => {
            S(!0), A?.();
        }, [A]),
        N = l.useCallback(() => {
            S(!1), C?.();
        }, [C]),
        T = l.useCallback(() => {
            S(!0), E?.();
        }, [E]),
        j = l.useCallback(() => {
            S(!1), I?.();
        }, [I]),
        R = (0, a.bG)([c.Ay], () =>
            t.application?.bot?.id != null ? c.Ay.getMember(n, t.application?.bot?.id) : null,
        ),
        w = l.useMemo(
            () =>
                t.type === d.Hf.APPLICATION
                    ? u.Ay.getApplicationIconURL({
                          id: t.id,
                          icon: t.icon,
                          bot: t.application?.bot,
                          botIconFirst: !0,
                          guildMember: R,
                          size: p,
                      })
                    : m,
            [t, p, R],
        );
    return (0, i.jsx)("div", {
        ...v,
        className: r()(h.iE, g, { [h.rb]: _, [h.wH]: _ && s }),
        onFocus: b,
        onBlur: N,
        onMouseOver: T,
        onMouseLeave: j,
        children: (0, i.jsx)(o.Ay, {
            className: h.dK,
            mask: x || (_ && (s || y)) ? o.hW.SQUIRCLE : o.hW.AVATAR_DEFAULT,
            width: p,
            height: f,
            children: (0, i.jsx)("img", { alt: "", className: h.Kk, style: { width: p, height: f }, src: w }),
        }),
    });
}
