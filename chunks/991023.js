"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(573435),
    u = n(696451),
    c = n(486020),
    d = n(392054),
    _ = n(104075),
    f = n(532406);
function p(e) {
    let {
            section: t,
            channel: { guild_id: n },
            isSelected: a,
            width: p,
            height: h,
            className: m,
            selectable: g = !1,
            isSquircle: E,
            onFocus: A,
            onBlur: I,
            onMouseOver: T,
            onMouseLeave: y,
            ...S
        } = e,
        [v, C] = i.useState(!1),
        b = i.useCallback(() => {
            C(!0), A?.();
        }, [A]),
        N = i.useCallback(() => {
            C(!1), I?.();
        }, [I]),
        R = i.useCallback(() => {
            C(!0), T?.();
        }, [T]),
        O = i.useCallback(() => {
            C(!1), y?.();
        }, [y]),
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
        ...S,
        className: s()(_.iE, m, { [_.rb]: g, [_.wH]: g && a }),
        onFocus: b,
        onBlur: N,
        onMouseOver: R,
        onMouseLeave: O,
        children: (0, r.jsx)(l.Ay, {
            className: _.dK,
            mask: E || (g && (a || v)) ? l.hW.SQUIRCLE : l.hW.AVATAR_DEFAULT,
            width: p,
            height: h,
            children: (0, r.jsx)("img", { alt: "", className: _.Kk, style: { width: p, height: h }, src: L }),
        }),
    });
}
