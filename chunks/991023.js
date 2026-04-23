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
            className: E,
            selectable: m = !1,
            isSquircle: g,
            onFocus: A,
            onBlur: I,
            onMouseOver: T,
            onMouseLeave: S,
            ...y
        } = e,
        [N, v] = i.useState(!1),
        C = i.useCallback(() => {
            v(!0), A?.();
        }, [A]),
        O = i.useCallback(() => {
            v(!1), I?.();
        }, [I]),
        R = i.useCallback(() => {
            v(!0), T?.();
        }, [T]),
        b = i.useCallback(() => {
            v(!1), S?.();
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
        className: a()(_.iE, E, { [_.rb]: m, [_.wH]: m && s }),
        onFocus: C,
        onBlur: O,
        onMouseOver: R,
        onMouseLeave: b,
        children: (0, r.jsx)(l.Ay, {
            className: _.dK,
            mask: g || (m && (s || N)) ? l.hW.SQUIRCLE : l.hW.AVATAR_DEFAULT,
            width: p,
            height: h,
            children: (0, r.jsx)("img", { alt: "", className: _.Kk, style: { width: p, height: h }, src: L }),
        }),
    });
}
