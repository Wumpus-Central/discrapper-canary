"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    r = n(64700),
    s = n(688810),
    a = n(355622),
    o = n(408018),
    l = n(138617),
    u = n(195880),
    c = n(95701),
    d = n(562153),
    _ = n(183555),
    h = n(448613),
    f = n(652215),
    p = n(375708),
    E = n(831111);
let m = (0, c.createChannelRecord)({ id: "1", type: f.rbe.DM });
function g(e) {
    let { user: t, guildId: n, channelId: c, onClose: f, disableAutoFocus: g = !1 } = e,
        { newestAnalyticsLocation: A } = (0, s.Ay)(),
        { trackUserProfileAction: I } = (0, _.NJ)(),
        [T, S] = r.useState(""),
        [y, C] = r.useState((0, o.x7)(T)),
        N = r.useRef(!1),
        v = r.useRef(null),
        R = r.useRef(null),
        O = r.useMemo(() => ({ ...a.oU.USER_PROFILE, disableAutoFocus: g }), [g]);
    return (0, i.jsx)(l.Ay, {
        className: E.kL,
        editorClassName: E.EN,
        type: O,
        placeholder: p.intl.formatToPlainString(p.t["0ZQw/X"], { name: d.Ay.getName(n, c, t) }),
        channel: m,
        textValue: T,
        richValue: y,
        onChange: (e, t, n) => {
            t !== T && (S(t), C(n));
        },
        focused: N.current,
        onFocus: () => {
            N.current = !0;
        },
        onBlur: () => {
            N.current = !1;
        },
        onSubmit: async (e) => {
            let { value: n } = e,
                i = n.trim();
            if ("" === i) return { shouldClear: !1, shouldRefocus: !0 };
            (v.current !== i || null == R.current) && ((v.current = i), (R.current = (0, u.m)()));
            try {
                return (
                    I({ action: "SEND_DIRECT_MESSAGE" }),
                    await (0, h.p)({
                        userId: t.id,
                        content: i,
                        openChannel: !0,
                        whenReady: !0,
                        location: A,
                        nonce: R.current ?? void 0,
                    }),
                    (v.current = null),
                    (R.current = null),
                    f?.(),
                    { shouldClear: !0, shouldRefocus: !1 }
                );
            } catch {
                return { shouldClear: !1, shouldRefocus: !1 };
            }
        },
    });
}
