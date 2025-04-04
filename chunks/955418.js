n.d(t, { Z: () => g }), n(47120), n(566702);
var r = n(200651),
    i = n(192379),
    o = n(906732),
    a = n(541716),
    s = n(752305),
    l = n(893718),
    c = n(131704),
    u = n(5192),
    d = n(785717),
    f = n(698305),
    _ = n(981631),
    p = n(388032),
    h = n(582970);
let m = (0, c.kt)({
    id: '1',
    type: _.d4z.DM
});
function g(e) {
    let { user: t, guildId: n, channelId: c, onClose: _ } = e,
        { newestAnalyticsLocation: g } = (0, o.ZP)(),
        { trackUserProfileAction: E } = (0, d.KZ)(),
        [b, y] = i.useState(''),
        [v, O] = i.useState((0, s.JM)(b)),
        I = i.useRef(!1);
    return (0, r.jsx)(l.Z, {
        className: h.container,
        innerClassName: h.inner,
        editorClassName: h.editor,
        type: a.Ie.USER_PROFILE,
        placeholder: p.NW.formatToPlainString(p.t['0ZQw/f'], { name: u.ZP.getName(n, c, t) }),
        channel: m,
        textValue: b,
        richValue: v,
        onChange: (e, t, n) => {
            t !== b && (y(t), O(n));
        },
        focused: I.current,
        onFocus: () => {
            I.current = !0;
        },
        onBlur: () => {
            I.current = !1;
        },
        onSubmit: async (e) => {
            let { value: n } = e;
            try {
                return (
                    E({ action: 'SEND_DIRECT_MESSAGE' }),
                    await (0, f.Z)({
                        userId: t.id,
                        content: n.trim(),
                        location: g
                    }),
                    null == _ || _(),
                    {
                        shouldClear: !0,
                        shouldRefocus: !1
                    }
                );
            } catch (e) {
                return {
                    shouldClear: !1,
                    shouldRefocus: !1
                };
            }
        }
    });
}
