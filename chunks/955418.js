r.d(n, {
    Z: function () {
        return y;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(906732),
    l = r(541716),
    u = r(752305),
    c = r(893718),
    d = r(540059),
    f = r(131704),
    p = r(5192),
    h = r(785717),
    _ = r(698305),
    m = r(981631),
    g = r(388032),
    E = r(522420);
let v = (0, f.kt)({
    id: '1',
    type: m.d4z.DM
});
function y(e) {
    let { user: n, guildId: r, channelId: i, onClose: f } = e,
        { newestAnalyticsLocation: m } = (0, s.ZP)(),
        { trackUserProfileAction: y } = (0, h.KZ)(),
        [b, I] = o.useState(''),
        [T, S] = o.useState((0, u.JM)(b)),
        A = o.useRef(!1),
        C = (0, d.Q3)('UserProfilePopoutDirectMessageSection');
    return (0, a.jsx)(c.Z, {
        innerClassName: C ? void 0 : E.inner,
        className: C ? E.inner : void 0,
        editorClassName: E.editor,
        type: l.Ie.USER_PROFILE,
        placeholder: g.intl.formatToPlainString(g.t['0ZQw/f'], { name: p.ZP.getName(r, i, n) }),
        channel: v,
        textValue: b,
        richValue: T,
        onChange: (e, n, r) => {
            if (n !== b) I(n), S(r);
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
                    y({ action: 'SEND_DIRECT_MESSAGE' }),
                    await (0, _.Z)({
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
