r.d(n, {
    Z: function () {
        return I;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(906732),
    l = r(541716),
    u = r(752305),
    c = r(893718),
    d = r(540059),
    f = r(131704),
    _ = r(5192),
    h = r(785717),
    p = r(698305),
    m = r(981631),
    g = r(388032),
    E = r(522420);
let v = (0, f.kt)({
    id: '1',
    type: m.d4z.DM
});
function I(e) {
    let { user: n, guildId: r, channelId: i, onClose: f } = e,
        { newestAnalyticsLocation: m } = (0, o.ZP)(),
        { trackUserProfileAction: I } = (0, h.KZ)(),
        [T, b] = s.useState(''),
        [y, S] = s.useState((0, u.JM)(T)),
        A = s.useRef(!1),
        N = (0, d.Q3)('UserProfilePopoutDirectMessageSection');
    return (0, a.jsx)(c.Z, {
        innerClassName: N ? void 0 : E.inner,
        className: N ? E.inner : void 0,
        editorClassName: E.editor,
        type: l.Ie.USER_PROFILE,
        placeholder: g.intl.formatToPlainString(g.t['0ZQw/f'], { name: _.ZP.getName(r, i, n) }),
        channel: v,
        textValue: T,
        richValue: y,
        onChange: (e, n, r) => {
            if (n !== T) b(n), S(r);
        },
        focused: A.current,
        onFocus: () => {
            A.current = !0;
        },
        onBlur: () => {
            A.current = !1;
        },
        onSubmit: async (e) => {
            let { value: r } = e;
            try {
                return (
                    I({ action: 'SEND_DIRECT_MESSAGE' }),
                    await (0, p.Z)({
                        userId: n.id,
                        content: r.trim(),
                        location: m
                    }),
                    null == f || f(),
                    {
                        shouldClear: !0,
                        shouldRefocus: !1
                    }
                );
            } catch {
                return {
                    shouldClear: !1,
                    shouldRefocus: !1
                };
            }
        }
    });
}
